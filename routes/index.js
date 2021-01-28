const router = require('koa-router')()
const requireContext = require('require-context');

// 引入所有的路由
const files = requireContext(__dirname, false);
files.keys().forEach(key => {
    for (let i = 0; i < files(key).length; i++) {
        router[files(key)[i].method](files(key)[i].route, files(key)[i].callback)
    }
});
module.exports = router