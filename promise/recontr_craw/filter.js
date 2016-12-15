/**
 * Created by Administrator on 2016/12/15 0015.
 */

  var cheerio = require( 'cheerio' );
  exports.filterHtml = function( html ){
     var $ = cheerio.load(html);

    /*

       {
         title: '',
         number:'',
         videos:[
            {},
            {}
         ]
       }

     */

      var chapter = $('.mod-chapters').find('.chapter');
      var title = $('.l').text().replace(/^\s+|\s+|\r\n$/g, "");
      var number =  $('.statics .js-learn-num').text(); // 获取不到人数，以为在页面中人数是通过ajax来获取的，源代码中并没有提供
      var courseData = {
          title:title,
          number:number,
          videos:[]
      };
      chapter.each(function(index,item){

          var ltitle = $(item).find('h3').children().not('.chapter-info').text().replace(/^\s+|\s+|\r\n$/g, "");
          var jsons = {
              ltitle: ltitle,
              videos:[]
          };
          var aLi = $(item).find('ul li');
          aLi.each(function(ind,ele){
              var id = $(ele).attr('data-media-id');
              var video = $(ele).find('a').text().replace(/^\s+|\s+|\r\n$/g, "");
              jsons.videos.push({
                  id: id,
                  video: video
              })
          })

          courseData.videos.push(jsons);
      });
      return courseData;

  };



















