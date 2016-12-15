/**
 * Created by Administrator on 2016/12/15 0015.
 */
  var filterHtml = require('./filter');
  var printHtml = require('./printHtml');
  var preGetquest = require('./getSyncnInit');
  var baseUrl = 'http://www.imooc.com/learn/';
  var videoIds = [348,259,197,134,75];
  var fetchCourseArray = [];

  // init

   videoIds.forEach(function(id){
      fetchCourseArray.push( preGetquest.preGetquestion(  baseUrl+id ) )
  });

  Promise.all(fetchCourseArray).then(function(onFulfilled , onRejected){  // onFulfilled ==  pages

      if(onRejected != undefined){
          console.log('程序执行发生错误'+ onRejected);

      }else{

          var coursesData = [];
          onFulfilled.forEach(function(html){
              var courses = filterHtml.filterHtml(html);
              coursesData.push(courses)
          })

          coursesData.sort(function(a,b){
              return a.number < b.number
          });

          printHtml.printHtml(coursesData)

      }
  });









