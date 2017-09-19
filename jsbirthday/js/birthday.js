
var normalMaxDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var leapMaxDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// 输入出生年份
function promptYear(){
	var sYear = prompt("请输入你的出生年份");
	if(sYear==null) return;
	var nYear = parseInt(sYear);
	if(isNaN(nYear) || nYear < 1900 || nYear > 2015 ){
		alert("输入的年份不合理, 请重新输入");
		return promptYear();
	}
	return nYear;
}

// 输入月份
function promptMonth(){
	var sMonth = prompt("请输入你的出生月");
	if(sMonth==null) return;
	var nMonth = parseInt(sMonth);
	if(isNaN(nMonth) || nMonth > 12 || nMonth < 1){
		alert("输入的月份不合理, 请重新输入");
		return promptMonth();
	}
	return nMonth;
}

// 输入日期
function promptDay(nYear, nMonth){
	var sDay = prompt("请输入你的出生日期");
	if(sDay==null) return;
	var nDay = parseInt(sDay);
	var valid = false;
	
	if(isNaN(nDay) || nDay < 1 ){
		valid = false;
	}
	else {
		var leapYear = ((nYear%4==0 && nYear%100!=0) || nYear%400==0) ? true:false;
		// 闰年
		if (leapYear && nDay > leapYear[nMonth-1]){
			valid = false;
		}
		else if (!leapYear && nDay > normalMaxDay[nMonth-1]){
			valid = false;
		}
		else{
			valid = true;
		}
	}
	if(!valid){
		alert("输入的日期不合理，请重新输入");
		return promptDay(nYear, nMonth);
	}
	return nDay;
}

window.onload = function (){
	var bYear = promptYear();
	if(bYear == null) return;
	var bMonth = promptMonth();
	if(bMonth == null) return;
	var bDay = promptDay(bYear, bMonth);
	if(bDay == null) return;

	var birthday = new Date(bYear, bMonth-1, bDay);
	var firstDay = new Date(bYear, 0, 1);
	var countDay = (birthday - firstDay) / 1000 / 60 / 60 / 24;
	document.write("你的出生日期是"+bYear+"年是第"+ (++countDay) +"天");
}