getUrlQueryString.js
========================================================

Getting url query string using getUrlQueryString plugin, which support Array and Object format.
this plugin used for accessing the query string and url.



Example
========================================================

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script>
$.extend({	
	getUrlQueryString:function(url) {	
		// spliting the url and query string using question mark
		var splitUrl = url.split("?"); 
		
		// again spliting the data which will have & symbol
		var strUrl = (splitUrl.length>1) ? splitUrl[1].split("&") : 0;
		
		var i = 0;
		var iLen = strUrl.length;
		
		var str = '';
		var obj = {};

		// iterator to assign key pair values into obj variable
		for(i=0;i<iLen;i++) {
			str = strUrl[i].split("=");
			obj[str[0]] = str[1];
		}

		// returning the value
		return Array.prototype.sort.call(obj);
	}
});

// Below url with display query string if its present or not
var query = $.getUrlQueryString(window.location.href);
</script>
 

