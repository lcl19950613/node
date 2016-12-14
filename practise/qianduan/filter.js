 var cheerio = require('cheerio');

 function filterHtmls(html){ 
  
  var $ = cheerio.load(html);

  var wrap = $('#column-side');

  var title = wrap.find('.titlebar').text();

  var ali = wrap.find('.article_num').children('li');

  var htmlCon = [];

  ali.each(function(index,item){ 
     
      var href = url+$(item).find('a').attr('href');
    
      var text = $(item).find('a').text();

      htmlCon.push({

      	 href: href,

      	 text:text

      })

  })

   return htmlCon;
}

exports.filterHtmls = filterHtmls;
