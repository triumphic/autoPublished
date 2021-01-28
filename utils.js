// 统一返回方法
const sendRes = (reslove, Content, ResultMsg = "", Result = true) => {
    reslove({ Content, ResultMsg, Result: Result ? 'success' : 'failture' });
};
global.sendRes = sendRes;

// 获取时间函数
const formate = (t) => {
    return t > 9 ? t : `0${t}`
}
const getDate = (df, tf) => {
    const date = new Date();
    const year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes();
    const dArr = [year, formate(month), formate(day)];
    const tArr = [formate(hour), formate(minute)];
    return `${dArr.join(df)}${tf ? ' ' : ''}${tArr.join(tf)}`;
};
global.getDate = getDate;

// 判断是否是需要忽略打包的前端项目
const gnoreProject = (project) => {
    return config.gnoreProject.find(n => n.toLocaleLowerCase() == project.toLocaleLowerCase()) ? true : false;
};
global.gnoreProject = gnoreProject;

/*
*取出project下packjson里的某个参数
*@param {strign} project 项目名称
*/
const getPackjson = (project, key) => {
    // 清除require缓存之后，再引入
    const packagePath = `${config.projectPath}/${project}/package.json`;
    delete require.cache[require.resolve(packagePath)];
    const package = require(packagePath);
    if (key) return package[key];
    return package;
};
global.getPackjson = getPackjson;