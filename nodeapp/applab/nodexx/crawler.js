const http = require('http');
const url = require('url');
const HttpProxyAgent = require('http-proxy-agent');
const cheerio = require('cheerio');
// const url = 'http://36kr.com/newsflashes';
const fs = require('fs');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://web-proxy.rose.hpecorp.net:8080';
console.log(`using proxy server ${proxy}`);

// HTTP endpoint for the proxy to connect to
var endpoint = process.argv[2] || 'http://www.cnbeta.com/';
console.log(`attempting to GET ${endpoint}`);
var opts = url.parse(endpoint);

// Create an instance of the `HttpProxyAgent` class with the proxy server information
var agent = new HttpProxyAgent(proxy);
opts.agent = agent;

function filterTips(htmlData){
    var $ = cheerio.load(htmlData);
    // console.log(htmlData);
    var newsList = [];
    $('.item').each((i, elem)=> {
        //console.log($(elem).text());
        var title = $(elem).find('dl > dt > a');
        var brief = $(elem).find('dl > dd > p');
        var news = {
            title: title.text(),
            brief: brief.text()
        }
        newsList.push(news);
    });

    return newsList;
}

http.get(opts, (res)=>{
    res.setEncoding('utf8');

    let rawData = '';
    res.on('data', (chunk)=>{
        rawData += chunk;
    });

    res.on('end', ()=>{
        // console.log(rawData);
        var list = filterTips(rawData);

        // console.log(JSON.stringify(list));
        fs.writeFile('cnbeta.json', JSON.stringify(list), (err)=>{
            if(err) throw err;
            console.log('The news file has been saved!');
        });
    });
}).on('error', (e)=>{
    console.log(`Log error: ${e.message}`);
});