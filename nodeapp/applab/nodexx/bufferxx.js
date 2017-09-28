// ** new Buffer create a memory space with unrecognized datas
// var buf1 = new Buffer(256);
// buf1.write('abc');
// console.log("buf1\'s content: ", buf1.toString());

// ** try to use fill() method to fill the memory space with clean data
// var buf1 = new Buffer(256);
// buf1.fill(0);
// buf1.write('abc');
// console.log("buf1\'s content: ", buf1.toString());

// ** length is fixed when the buffer be created
// var buf1 = new Buffer(256);
// buf1.fill(0);
// buf1.write('abc');
// console.log("buf1\'s length - %d, not 3\n", buf1.length);
// buf1.write('abcdef');
// console.log("buf1\'s length - %d, not 6\n", buf1.length);


//  ** get the byte length of the string under the specific encoding
// var name = new String('who is \u5F20\u4E09\u4E30?');
// console.log('name.length = %d', name.length);
// console.log('byteLength = %d', Buffer.byteLength(name, 'utf8'));

// ** concat, slice, copy
// var buf1 = new Buffer('1234');
// var buf2 = new Buffer('12567');
// var bufList = [buf1, buf2];
// var buf3 = Buffer.concat(bufList);
// console.log('buf3 - %s', buf3.toString());
// var buf4 = buf3.slice(3, 8);
// console.log('buf4 - %s', buf4.toString());
// console.log('buf3 - %s', buf3.toString());
// var buf5 = new Buffer(5);
// buf3.copy(buf5, 0, 1);
// console.log('buf5 - %s', buf5.toString());

// ** compare and equals
// var buf1 = new Buffer('1234');
// var buf2 = new Buffer('12567');
// var buf3 = new Buffer('1234');
// var buf4 = new Buffer('0234');
// console.log('buf1.compare(buf2) = ', buf1.compare(buf2));
// console.log('buf1.compare(buf3) = ', buf1.compare(buf3));
// console.log('buf1.compare(buf4) = ', buf1.compare(buf4));
// console.log('buf1.equals(buf4) = ', buf1.equals(buf4));