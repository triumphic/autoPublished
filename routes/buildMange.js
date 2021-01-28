const fs = require('fs');
const execSync = require('child_process').execSync;
const ftp = require("basic-ftp")
const compressing = require('compressing'); // 压缩模块

module.exports = [
  // 更新代码:git pull
  {
    method: 'post',
    route: '/gitpull',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { project, branch } = ctx.request.body;
        try {
          execSync(`cd ${config.projectPath}/${project} && git reset --merge && git checkout ${branch} && git fetch --all && git reset --hard origin/${branch} && git pull`);
          const packageJson = getPackjson(project);
          console.log(packageJson.name, 111)
          if (packageJson.dependencies || packageJson.devDependencies) {
            execSync(`cd ${config.projectPath}/${project} & cnpm i`);
          }
          return sendRes(resolve, null, `代码更新成功！`);
        } catch {
          return sendRes(resolve, null, `代码更新失败！`, false);
        }
      });
    }
  },
  // 构建：npm run build
  {
    method: 'post',
    route: '/runbuild',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { project } = ctx.request.body;
        try {
          if (gnoreProject(project)) return sendRes(resolve, null, `构建成功！`);
          execSync(`cd ${config.projectPath}/${project} && npm run build`);
          return sendRes(resolve, null, `构建成功！`);
        } catch {
          return sendRes(resolve, null, `构建失败！`, false);
        }
      });
    }
  },
  // 写入版本信息
  {
    method: 'post',
    route: '/createversion',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { project, branch } = ctx.request.body;
        try {
          //写入最新的版本信息
          let commit = execSync(`cd ${config.projectPath}/${project} && git show -s --format=%h`).toString().trim(); //版本号
          let message = execSync(`cd ${config.projectPath}/${project} && git show -s --format=%s`).toString().trim(); //说明
          let name = execSync(`cd ${config.projectPath}/${project} && git show -s --format=%cn`).toString().trim(); //姓名
          let email = execSync(`cd ${config.projectPath}/${project} && git show -s --format=%ce`).toString().trim(); //邮箱
          let versionStr = `git:${commit}<${branch}>\n作者:${name}<${email}>\n日期:${getDate('-', ':')}\n说明:${message}\n`;
          const packageJson = getPackjson(project);
          let projectName = packageJson.name || project;
          let buildPath = packageJson.buildPath || projectName;
          let writePath = gnoreProject(project) ? `${config.projectPath}/${project}/version.txt` : `${config.projectPath}/${project}/${buildPath}/version.txt`;
          try {
            fs.writeFileSync(writePath, versionStr);
            let distName = `${projectName}_${getDate('', '')}_${branch}_${commit}`; //压缩命名
            return sendRes(resolve, { distName }, `版本信息写入成功！`);
          } catch {
            return sendRes(resolve, null, `版本信息写入失败！`, false);
          }
        } catch {
          return sendRes(resolve, null, `版本信息写入失败！`, false);
        }
      });
    }
  },
  // 压缩：compressing
  {
    method: 'post',
    route: '/compressing',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { project, distName } = ctx.request.body;
        try {
          const packageJson = getPackjson(project);
          const buildPath = packageJson.buildPath || packageJson.name || project;
          compressing.zip.compressDir(gnoreProject(project) ? `${config.projectPath}/${project}` : `${config.projectPath}/${project}/${buildPath}`, `${config.uploadPath}/${distName}.zip`).then(() => {
            return sendRes(resolve, null, `压缩成功！`);
          }).catch(err => {
            return sendRes(resolve, err, `压缩失败！`, false);
          })
        } catch {
          return sendRes(resolve, null, `压缩失败！`, false);
        }
      });
    }
  },
  // 上传：basic-ftp
  {
    method: 'post',
    route: '/basicftp',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise(async (resolve) => {
        let { project, distName } = ctx.request.body;
        const packageJson = getPackjson(project);
        let uploadPath = `${config.uploadPath}/${distName}.zip`;
        let remotePath = `${packageJson.remotePath || config.remotePath}/${distName}.zip`;
        // ftp上传程序
        const client = new ftp.Client();
        client.ftp.verbose = true;
        try {
          await client.access(config.ftp);
          await client.uploadFrom(uploadPath, remotePath);
          client.close();
          return sendRes(resolve, remotePath, `上传成功！`);
        }
        catch (err) {
          client.close();
          // 删除多余的压缩文件
          //fs.unlinkSync(uploadPath);
          return sendRes(resolve, err, `上传失败！`, false);
        }
      });
    }
  },
]
