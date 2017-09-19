// script.js

// var inputA = document.querySelector('#inputA');
// var inputB = document.querySelector('#inputB');
// var operator = document.querySelector('#operator');
// var result = document.querySelector('#result');
// var buttons = operator.getElementsByTagName('input');

var calBox = document.querySelector('#cal');

var cal = {
	inputA: calBox.querySelector('.inputA'),
	inputB: calBox.querySelector('.inputB'),
	operators: calBox.querySelectorAll('.operator'),
	result: calBox.querySelector('.result'),
	firstNum: function(){
		return this.inputA ? +this.inputA.value : 0;
	},
	secondNum: function(){
		return this.inputB ? +this.inputB.value : 0;
	},
	setResult: function(val){
		this.result.innerHTML = val;
	}

}

for(var i in cal.operators){
	cal.operators[i].onclick = function (){
		switch(this.title){
			case 'add':
				outputResult(add());
				break;
			case 'subtract':
				outputResult(subtract());
				break;
		}
	}
}

function add(){
	return cal.firstNum() + cal.secondNum();
}

function subtract(){
	return cal.firstNum() - cal.secondNum();
}

function outputResult(output){
	cal.setResult(output);
}