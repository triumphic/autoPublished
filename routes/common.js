const fs = require('fs');
const axios = require('axios');
module.exports = [
  // 登录
  {
    method: 'post',
    route: '/login',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { loginDevice, loginName, password } = ctx.request.body;
        axios.post(config.loginUrl, {
          loginDevice, loginName, password
        }).then(res => {
          resolve(res.data);
        }).catch(err => {
          return sendRes(resolve, null, err, false);
        });
      });
    }
  },
  // 下载文件
  {
    method: 'post',
    route: '/download',
    callback: async (ctx, next) => {
      await next();
      ctx.body = await new Promise((resolve) => {
        let { distName } = ctx.request.body;
        try {
          let filePath = `${config.uploadPath}/${distName}.zip`;
          let fileName = distName.replace(/(.*\/)*([^.]+)/i, "$2");
          ctx.set('Content-disposition', 'attachment;filename=' + fileName);
          resolve(fs.createReadStream(filePath));
        } catch (err) {
          resolve(err);
        }
      });
    }
  }
]
