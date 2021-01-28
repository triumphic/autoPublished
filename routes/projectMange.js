const fs = require('fs');
const execSync = require('child_process').execSync;
module.exports = [
  // 获取项目列表
  {
    method: 'post',
    route: '/getProject',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let projectList = fs.readdirSync(config.projectPath);
        sendRes(resolve, projectList);
      });
    }
  },
  // 根据项目获取分支列表
  {
    method: 'post',
    route: '/getBranch',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { project } = ctx.request.body;
        try {
          let branchList = [];
          let branchStr = execSync(`cd ${config.projectPath}/${project} && git fetch --all &&  git branch -r`).toString();
          branchStr.split('origin/').forEach(n => {
            let branch = n.split('\n')[0];

            if (!['HEAD -> ', 'Fetching origin'].includes(branch) && !branchList.includes(branch)) {
              branchList.push(branch)
            }
          });
          return sendRes(resolve, branchList, `项目分支获取成功！`);
        } catch {
          return sendRes(resolve, null, `项目分支获取失败！`, false);
        }
      });
    }
  },
  // 添加项目
  {
    method: 'post',
    route: '/addProject',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { gitlab } = ctx.request.body;
        // 获取项目名
        if (!gitlab || gitlab.substr(0, 3) !== 'ssh') {
          return sendRes(resolve, [], '请输入正确的ssh链接', false);
        }
        let projectList = fs.readdirSync(`${config.projectPath}`);
        let project = gitlab.split('/').pop().replace(/\.git/, '');
        if (projectList.includes(project)) return sendRes(resolve, [], '该项目已经添加过了！', false);
        try {
          execSync(`cd ${config.projectPath} && git clone ${gitlab}`);
          sendRes(resolve, null, `${project}添加成功！`);
        } catch {
          sendRes(resolve, null, '添加项目失败！', false);
        }
      });
    }
  },
]
