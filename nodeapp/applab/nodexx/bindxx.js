var m = {   
    "x" : 1
};
function foo(y) {
    console.log(this.x + y);
}
foo.apply(m, [5]);
foo.call(m, 5);
// var foo1 = foo.bind(m, 5);
this.x = 3;
var foo1 = foo.bind(this, 5);
foo1();