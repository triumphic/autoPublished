global.config = {
    // 端口
    port: 3000,
    // 连接的后台地址
    loginUrl: 'http://192.168.100.236/api/meos/EMS_SaaS_Web/Spring/MVC/entrance/unifier/loginUserService',
    // 默认的FTP上传路径
    remotePath: '/前端产品/其他',
    // 存放项目的路径
    projectPath: 'D:/saas-web/其他/autoPublish/node/projects',
    // 存放压缩文件的路径
    uploadPath: 'D:/saas-web/其他/autoPublish/node/uploads',
    // 需要忽略打包的项目
    gnoreProject: ['saasframe', 'node_modules', 'fm', 'maintenancesystem', 'pweb_commonLib'],
    // ftp配置信息
    ftp: {
        host: "192.168.100.103",
        user: "develop",
        port: "10021",
        password: "3grTvDDTpcfHNHO"
    }   
}