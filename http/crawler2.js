/*
  @简单的爬取数据，没有对数据结构所分析  
*/

var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function printCouseArray(courseArray){
	courseArray.forEach((item)=>{

	var chapterTitle = item.chapterTitle;
	console.log(chapterTitle +'\n');
	item.videos.forEach(function(video){
	var id = video.id;
	var videoTitle = video.videoTitle;
	console.log(' ['+id+'] '+ videoTitle );
    })
  })
}

function filterChapters(html){
	var $ = cheerio.load(html);
	var courseArray = [];

	var chapterArray = $('.chapter');
	chapterArray.each((index,item)=>{
	var chapter = $(item);
	var chapterTitle = chapter.find('strong').text();
	var videos = chapter.find('.video').children('li');
	var chapterData = {
	   chapterTitle : chapterTitle,
	   videos:[]
     }

	videos.each((index,item)=>{
		var video = $(item).find('.studyvideo');
		var videoTitle = video.text();
		var id = video.attr('href').split('video/')[1]
			chapterData.videos.push({
				videoTitle:videoTitle,
				id:id
			  })
		   })
		   courseArray.push(chapterData) ;
		  })
		    return courseArray;
	}

  http.get( url,function( res ){ 
   var html = '';
   res.on('data',function(data){ 
       html +=data;
   })

   res.on('end',function(){ 
      var courseData = filterChapters(html);
      printCouseArray(courseData);
   })
}).on('error',function(){ 
    console.log( 'error!!!' )
})