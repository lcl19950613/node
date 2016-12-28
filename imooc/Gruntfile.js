module.exports = function(grunt) {

    grunt.initConfig({

       watch:{
          jade:{
              files:['views/**'],
              options:{
                livereload:true
              }
          },
          js:{
            files:['public/js/**','models/**/*.js','schemas/**/*.js'],
            //tasks:['jsinit'],        // 语法检查
            options:{
                livereload:true      // 当文件出现改动的时候，重新启动子服务
            }
          }
       },

       nodemon:{
         dev:{
           options:{
             file:'app.js',             // 入口文件
             args:[],
             ignoredFiles:['README.md','node_modules/**','.DS_Store'],         //  ignoredFiles->ignore  新版本使用简写的语法
             watchedExtensions:['js'],                                         //  watchedExtensions ->ext
             watchedExtensions:['app','config'],                               //  watchedExtensions ->watch
             debug:true,
             delayTime:1,                                                       //  delayTime ->delay
             env:{
                PORT:3001
             },
             cwd: __dirname


           }
         }
       },

       concurrent:{
           tasks: ['nodemon', 'watch'],                          // 同时跑上面的两个任务
           options: {
               logConcurrentOutput: true
           }
       }

});

    grunt.loadNpmTasks('grunt-concurrent');     // 针对慢任务 SASS LESS 开发的插件
    grunt.loadNpmTasks('grunt-nodemon');        // 实时监听入口文件app.js发生改变就会自动重启服务
    grunt.loadNpmTasks('grunt-contrib-watch');  // 文件crud都会自动执行你添加的任务
    grunt.option('force',true);



    // do
    grunt.registerTask('default', ['concurrent']);

};