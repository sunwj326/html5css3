function add(name){
	console.log("Student "+ name +" joined");
}

function fire(name){
	console.log("Student "+ name + " was fired");
}

exports.add = add;
exports.fire = fire;