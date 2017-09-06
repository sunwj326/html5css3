// data type

// + and -
// var stone = 32 + 32;
// console.log(stone);

// stone = "32" + 32;
// console.log(stone);

// stone = "32" - 32;
// console.log(stone);



// == and ===
// console.log("1.23" == 1.23);
// console.log(0 == false);
// console.log(null == undefined);
// console.log(new Object() == new Object());
// console.log([1,2] == [1,2]);

// var x = NaN;
// var y = NaN;
// console.log(x===y);
// console.log(1=="1.0");
// console.log(true == 1);
// console.log(false == 0);
// console.log(1 == '1');
// console.log(1 === '1');
// console.log(1 + '2'=== '1'+ 2);
// console.log(1 + '2' === 1 + new Number(2));
// console.log(1 + true === false + 2);
// console.log(1 + null === undefined + 1);
// console.log('a' - 'b' === 'b' - 'a');

// 5-"4"
// 5+"4"
// +!{}[true]
// +[1]
// +[1,2]
// 7-"a"
// 7/0
// 5+null
// 4== "4.00"
// 4==="4.00"
// null == undefined
// 0 == false
// 0 == null
// null == false


// package type
// var str = "string";
// console.log(str.length);
// str.t = 3;
// console.log(str.t);

// var strObject = new String("string");
// console.log(strObject.length);
// strObject.t = 3;
// console.log(strObject.t);



// type detection
// function Person(){}
// function Student(){}
// Student.prototype = new Person();
// var bosn = new Student();
// console.log(bosn instanceof Student);
// var one  = new Person();
// console.log(one instanceof Person);
// console.log(one instanceof Student);
// console.log(bosn instanceof Person);

// typeof(typeof(‘string’))
// [null] instanceof Object
// "test”.substring(0 ,1)
// {}.toString.apply(newString(‘str’));
// {}.toString.apply(‘str’);




// toString.apply();
// console.log(Object.prototype.toString.apply([]));
// console.log(Object.prototype.toString.apply(function(){}));
// console.log(Object.prototype.toString.apply(null));
// console.log(Object.prototype.toString.apply(undefined));
// console.log(Object.prototype.toString.apply(1));
// console.log(Object.prototype.toString.apply("1"));
// console.log(Object.prototype.toString.apply(true));
// console.log(Object.prototype.toString.apply(NaN));



// contructor
// console.log([].constructor);
// console.log('string'.constructor);
// var num = 1;
// console.log(num.constructor);
// console.log(function(){}.constructor);



// duck type