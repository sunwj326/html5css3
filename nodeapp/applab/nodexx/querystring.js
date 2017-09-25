const querystring = require('querystring');

const str = 'http://36kr.com/newsflashes?name=机器人';

var queryStr = str.slice(str.indexOf('?')+1, str.length);

var escapeStr = querystring.escape(queryStr);
console.log(escapeStr);
var parseStr = querystring.parse(queryStr);
console.log(parseStr);

console.log(querystring.unescape(escapeStr));