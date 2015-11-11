var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");

request ('http://panepo.github.io/FKGExpCal/',

	function (error, response, body)
	{
		var result = [];
		result.push(error);
		//result.push(response);
		
    if (!error && response.statusCode == 200) {
    
	    var $ = cheerio.load(body);
	    var titles = $(".mdl-textfield__input");
	    
	    for (var i=0; i<titles.length; i++ )
	    {
	     	result.push($(titles[i]).attr("id"));
	  	}
	  	
  	}
  	fs.writeFileSync("result.json", JSON.stringify(result));
  }
);