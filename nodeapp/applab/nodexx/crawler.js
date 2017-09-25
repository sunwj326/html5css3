const http = require('http');
const url = require('url');
const HttpProxyAgent = require('http-proxy-agent');
const cheerio = require('cheerio');
// const url = 'http://36kr.com/newsflashes';

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://web-proxy.rose.hpecorp.net:8080';
console.log(`using proxy server ${proxy}`);

// HTTP endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'http://36kr.com/newsflashes';
console.log(`attempting to GET ${endpoint}`);
var opts = url.parse(endpoint);

// Create an instance of the `HttpProxyAgent` class with the proxy server information
var agent = new HttpProxyAgent(proxy);
opts.agent = agent;

function filterTips(htmlData){
    var $ = cheerio.load(htmlData);
    console.log(htmlData);
}

http.get(opts, (res)=>{
    res.setEncoding('utf8');

    let rawData = '';
    res.on('data', (chunk)=>{
        rawData += chunk;
    });

    res.on('end', ()=>{
        // console.log(rawData);
        filterTips(rawData);
    });
}).on('error', (e)=>{
    console.log(`Log error: ${e.message}`);
});