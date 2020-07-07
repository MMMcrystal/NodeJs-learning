
//alloc()创建一个buffer类，返回一个指定大小的buffer实例
const buf1 = Buffer.alloc(10);
//write向buffer实例中写入内容
let xx = buf1.write('你好x12');
console.log(buf1);
console.log('写入的字节数：'+xx);
//toString()从缓冲区读取数据
console.log(buf1.toString());
//默认编码位utf8，start，end
console.log(buf1.toString('ascii',5,8));

console.log('-------------');


//from()返回一个被数组初始化的buffer实例
const buf2 = Buffer.from([10,20,30,20,40]);
//stringify()将一个js对象或数组转化位json字符串
const _json = JSON.stringify(buf2);
console.log(buf2);
console.log(typeof _json);
console.log(_json);
console.log(typeof JSON.parse(_json));
//parse()将json字符串转换为json对象
console.log(JSON.parse(_json));
//获取json对象中的内容
console.log(JSON.parse(_json).data);
console.log(JSON.parse(_json).data[1]);

