// script.js

// var inputA = document.querySelector('#inputA');
// var inputB = document.querySelector('#inputB');
// var operator = document.querySelector('#operator');
// var result = document.querySelector('#result');
// var buttons = operator.getElementsByTagName('input');


// var operations = {
// 	add: function (num1, num2){
// 		return num1 + num2;
// 	},

// 	subtract: function (num1, num2){
// 		return num1 - num2;
// 	},

// 	operate: function(operator){
// 		return this[operator].apply(this, [].slice.call(arguments, 1, arguments.length));
// 	}
// }

function Calculator (id) {
	var calBox = document.querySelector(id);
	var inputA = calBox.querySelector('input.inputA');
	var inputB = calBox.querySelector('input.inputB');
	var operators = calBox.querySelectorAll('input.operator');
	var resultBox = calBox.querySelector('p.resultBox');
	var buttonBox = calBox.querySelector('div.buttonBox');
	var operations = {
		add: function (num1, num2){
			return num1 + num2;
		},
		subtract: function (num1, num2){
			return num1 - num2;
		},
		multiply: function (num1, num2){
			return num1 * num2;
		},
		divide: function (num1, num2){
			return num1 / num2;
		},
		invest: function (num1){
			return 1 / num1;
		},
		operate: function(operator){
			return this[operator].apply(this, [].slice.call(arguments, 1, arguments.length));
		},
		addOperation: function(name, fn){
			if(!this[name]) {
				this[name] = fn;
			}
			return this;
		}
	};

	this.addOperation = function(name, fn){
		operations.addOperation(name, fn);
	}

	function changeOperator(operator){
		var activeClass = 'active';
		var currentOperator = buttonBox.querySelector('input.active');
		currentOperator.classList.remove(activeClass);
		operator.classList.add(activeClass);
	}

	function getFirstNum(){
		return inputA ? +inputA.value : 0;
	}

	function getSecondNum(){
		return inputB ? +inputB.value : 0;
	}

	function setResult(val){
		resultBox.innerHTML = val;
	}

	this.init = function(){
		buttonBox.addEventListener('click', function(e){
			// compatible handler
			var event = e || window.event;
			var target = event.target || event.srcElement;
			// wheather match the element
			if( target.classList.contains('operator') )
			{
				changeOperator(target);
				setResult(operations.operate(target.title, getFirstNum(), getSecondNum()));
			}
		});
	}

}

var cal = new Calculator('#cal');
cal.init();
cal.addOperation('mod', function(num1, num2){
	return num1 % num2;
});

// function each(items, fn) {
// 	for(var i in items) {
// 		fn(i, items[i]);
// 	}
// }


// each(cal.operators, function(index, button){
// 	button.onclick = function (){
// 		cal.setResult(cal.operate(this.title, cal.firstNum, cal.secondNum));
// 	}
// });
	


