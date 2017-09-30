'use strict'
const http = require('http');
const url = require('url');
const HttpProxyAgent = require('http-proxy-agent');
const cheerio = require('cheerio');
// const url = 'http://36kr.com/newsflashes';
const fs = require('fs');

// HTTP/HTTPS proxy to connect to
var proxy = process.env.http_proxy || 'http://web-proxy.rose.hpecorp.net:8080';
console.log(`using proxy server ${proxy}`);

// Create an instance of the `HttpProxyAgent` class with the proxy server information
var agent = new HttpProxyAgent(proxy);

var fetchNewsArray = [];

fs.readFile('cnbeta.json', function(err, data){
    if(err) throw err;
    var jsonData = JSON.parse(data.toString());
    // console.log(jsonData instanceof Array);
    for(let i=0; i<jsonData.length; i++){
        // console.log(jsonData[i].href);
        fetchNewsArray.push(getPageAsync(jsonData[i].href));
    }

    Promise.all(fetchNewsArray).then(function(pages){
        var newsData = [];
        pages.forEach((pag) => {
            console.log(pag);
            var news = filterHtml(pag);
    
            newsData.push(news);
        });
        printHtml(newsData);
    }).catch(function(reason){
        console.log(`Error: ${reason.message}`);
    });
});

function getPageAsync(urlstr){
    // HTTP endpoint for the proxy to connect to
    var endpoint = urlstr;
    console.log(`attempting to GET ${endpoint}`);
    var opts = url.parse(endpoint);

    opts.agent = agent;
    return new Promise(function(resolve, reject){
        http.get(opts, (res)=>{
            res.setEncoding('utf8');
        
            let rawData = '';
            res.on('data', (chunk)=>{
                rawData += chunk;
            });
        
            res.on('end', ()=>{
                resolve(rawData);
            });
        }).on('error', (e)=>{
            console.log(`Log error: ${e.message}`);
            reject(error);
        });
    });
}

function filterHtml(htmlData){
    var $ = cheerio.load(htmlData);
    // console.log(htmlData);
    //console.log($(elem).text());
    var title = $('header.title > h1');
    // console.log(title.text());
    var summary = $('div.article-summary p');
    // console.log(summary.text());
    var content = $('div.article-content p');
    // console.log(content.text());

    var news = {
        title: title.text(),
        summary: summary.text(),
        content: content.text()
    }
    return news;
}


function printHtml(data){
    // console.log(rawData);
    data.forEach((news, index)=>{
        // console.log(JSON.stringify(news));
        fs.writeFile(index + ".json", JSON.stringify(news), (err)=>{
            if(err) throw err;
            console.log('The news file has been saved!');
        });
    });
}