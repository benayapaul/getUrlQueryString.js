/*!
 * getUrlQueryString
 * version: 2.0.0
 * Project repository: https://github.com/kevindb/getUrlQueryString.js

 * Copyright 2016 Kevin Morris
 * Copyright 2014 Benaya Paul

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.getUrlQueryString = factory();
	}
}(this, function () {
	return function(url) {
		if (url.length === 0) {
			return {};
		}

		// spliting the url and query string using question mark
		var splitUrl = url.split('?');

		// again spliting the data which will have & symbol
		var strUrl = (splitUrl.length > 1) ? splitUrl[1].split('&') : 0;

		var i = 0;
		var iLen = strUrl.length;

		var str = '';
		var obj = {};

		// iterator to assign key pair values into obj variable
		for (i = 0; i < iLen; i++) {
			str = strUrl[i].split('=');
			if (str[0].length > 0 && typeof str[1] !== 'undefined') {
				obj[decodeURIComponent(str[0])] = decodeURIComponent(str[1]);
			}
		}

		// returning the value
		return obj;
	};
}));
