$.extend({	
	getUrlQueryString:function(url) {	
		if (url.length > 0) {
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
				if (str[0].length > 0 && typeof str[1] !== 'undefined') {
					obj[str[0]] = str[1];
				}
			}

			// returning the value
			return Array.prototype.sort.call(obj);

		} else {
			return {};
		}
	}
});