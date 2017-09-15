
function get(id){
  return typeof(id) === 'string' ? document.getElementById(id):id;
}

//console.log(get('main').innerHTML);
var idx = 0, pdx=0, timer=null;
var banner = get('banner').getElementsByTagName('div');
var dots = get('dots').getElementsByTagName('span');
var len = banner.length;
var main = get('main');
var menuItems = get('menu-content').getElementsByClassName('menu-item');
var subMenus = main.getElementsByClassName('sub-menu');

main.onmouseover = stop;
main.onmouseout = play;

for(var midx=0, mLen=menuItems.length; midx < mLen; midx++){
  overMenu(menuItems[midx], midx);
  overMenu(subMenus[midx], midx);
}

function overMenu(item, menuIndex){
  //console.log(menuIndex);
  var hideClass = 'hide'
  item.onmouseover = item.onmouseout = function(){
    subMenus[menuIndex].classList.toggle(hideClass);
  }
}


for(var didx=0;didx<len;didx++){
  clickDot(dots[didx], didx); // do onclick binding
}

function clickDot(dot, dotIndex){
  //console.log(dotIndex)
  dot.onclick = function(){   // do onclick binding, use closure to avoid local variable change the scope.
    pdx = idx;
    idx = dotIndex;
    changeSlide();
  }
}

function play(){
  timer = setInterval(next, 2500); // play the slide
}

function stop(){
  clearInterval(timer); //clear the interval
}

function changeSlide(){
  //console.log(banner[idx].classList);
  var activeClass = 'active';
  banner[pdx].classList.toggle(activeClass);
  banner[idx].classList.toggle(activeClass);
  dots[pdx].classList.toggle(activeClass);
  dots[idx].classList.toggle(activeClass);
}

function prev(){
  pdx = idx; // save the previous index
  idx--;     // got to the previous index
  if(idx < 0){
    idx = len-1; // reset index if out of bounds
  }
  //console.log(idx);
  changeSlide();
}

function next(){
  pdx = idx; // save the previous index
  idx++;     // go to the next index
  if(idx >= len){
    idx = 0; //reset index if out of bounds
  }
  //console.log(pdx + " -> " + idx);
  changeSlide();
}

play();