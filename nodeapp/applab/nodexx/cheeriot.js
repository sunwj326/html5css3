const cheerio = require('cheerio');
const $ = cheerio.load('<ul><li class="dot">566</li><li class="dot">123</li><li class="dot">987</li></ul>');
//$('.dot').text('Hello man');
//$('.dot').addClass('welcome');

const dots = [];

$('li').each((i, elem)=>{
    console.log($(elem).text());
});
console.log($.text());