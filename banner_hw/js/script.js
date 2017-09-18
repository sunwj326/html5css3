// script.js
// package the document.getElementById
function get(id){
	return typeof(id) === 'string'? document.getElementById(id): id;
}

// define the variables
var main = get('main');
var nav = get('nav');
var banner = get('banner');
var menuItems = nav.getElementsByTagName('a');
var bannerSlides = banner.getElementsByTagName('div');
var timer, idx=0, pdx=0;

// start the player
play();


// define mouseover and mouseout behavior
main.onmouseover = stop;
main.onmouseout = play;

//click menu behavior
for(var i=0; i<menuItems.length; i++){
	clickMenuItems(menuItems[i], i);
}

// define click menu behavior
function clickMenuItems(item, menuIndex){
	item.onclick = function(){
		pdx = idx;
		idx = menuIndex;
		changeSlide();
	}
}

// start the timer
function play(){
	timer = setInterval(next, 1000);
}

// stop the timer
function stop(){
	clearInterval(timer);
}

// define the player behavior, left to right
function next(){
	pdx = idx;
	idx++;
	if(idx >= 4){
		idx = 0;
	}
	changeSlide();
}

// change slide behavior
function changeSlide(){
	var activeClass = 'active';
	menuItems[pdx].classList.toggle(activeClass);
	menuItems[idx].classList.toggle(activeClass);
	bannerSlides[pdx].classList.toggle(activeClass);
	bannerSlides[idx].classList.toggle(activeClass);
}

