/**
 * Created by Anikin on 2016/5/14.
 */
/*自动化构建一个目录在当前的文件夹下面生成
 js,css,image,index.html*/
var projectData = {
    'name' : 'Project',
    'fileData' : [
        {
            'name' : 'css',
            'type' : 'dir'
        },
        {
            'name' : 'js',
            'type' : 'dir'
        },
        {
            'name' : 'images',
            'type' : 'dir'
        },
        {
            'name' : 'index.html',
            'type' : 'file',
            'content' : '<html>\n\t<head>\n\t\t<title>title</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello</h1>\n\t</body>\n</html>', // 初始化的index.html里面的内容 \t是缩进
        },{
            'name': 'notice',
            'type': 'note'
        }
    ]
};
var fs = require('fs');
if( !fs.existsSync(projectData.name) ){
    if( projectData.name ){
        fs.mkdirSync(projectData.name);
        var fileDate = projectData.fileData;
        if( fileDate && fileDate.forEach){ // 先判断是一个数组，然后在进行后续的操作
            fileDate.forEach(function(ele){
                ele.path = projectData.name+'/'+ele.name;
                ele.content = ele.content || '';
                switch (ele.type){
                    case 'dir':
                        fs.mkdirSync(ele.path);
                        break;
                    case 'file':
                        fs.writeFileSync(ele.path, ele.content);
                        break;
                    default:
                        fs.writeFileSync('notice.txt');

                }
            });
        }
    }
}else{
  console.log('该文件已经存在,请不要再次创建');
}






















