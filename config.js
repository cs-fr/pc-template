/*
* @Author: zhenghao01
* @Date:   2019-12-04 14:29:51
* @Last Modified by:   zhenghao01
* @Last Modified time: 2019-12-05 10:19:49
*/
const promptList=[
    {
        type:'input',
        name:'author',
        message:'请输入开发人员信息：'
    },
    {
        type:'input',
        name:'Desc',
        message:'请输入项目描述：'
    },
    {
        type:'input',
        name:'publicPath',
        message:'请输入媒体服务器地址：'
    },
    {
        type:'confirm',
        name:'css',
        message:'您是否使用SASS？'
    },
    {
        type:'confirm',
        name:'eslint',
        message:'您是否启用EsLint？'
    }
];
module.exports=promptList;