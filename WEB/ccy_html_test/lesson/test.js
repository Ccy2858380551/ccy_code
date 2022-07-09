
var message = 'Hi, JavaScript';
console.log(message);
message = 100;
console.log(message);

var result = 5 + '5'; // 一个数值和一个字符串相加
console.log(result); // '55'
//============================================
var num1 = 5;
var num2 = 10;
console.log(num1+num2);
var message = "The sum of 5 and 10 is " + num1 + num2;// (num1 + num2)，还可使用模板字符串``
console.log(message); // "The sum of 5 and 10 is 510"
var message = "The sum of 5 and 10 is " + (num1 + num2);// (num1 + num2)，还可使用模板字符串``
console.log(message); // "The sum of 5 and 10 is 15"

var x = 5;
console.log(x == 5);
console.log(x == '5');
console.log(x === 5);
console.log(x === '5');
 var x = {age: 5};
 var y = {age: 5};
 //内存空间不同
 console.log(x==y);

//============================================

var colors = ['red', 'green', 'blue', 'brown'];	//colors是一个数组
//传统遍历（基本不用了）
for(var i=0;i<colors.length;i++){
  console.log(colors[i]);
}
//for-in，专注下标
for(var c in colors){
  console.log(colors[c]);
}
//for-of，专注元素
for(var c of colors){
  console.log(c);
}
//高级遍历，箭头函数
colors.forEach(c => console.log(c));

var other = colors.map(c => c + 'X');//map不仅遍历，还返回另一个数组
console.log(other);

function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(3);
console.log(result);


var colors = new Array(); //创建一个数组
colors.push('red', 'green'); //推入两项
console.log(colors); //2
count = colors.push('black'); //推入另一项
console.log(colors); //3
var item = colors.shift(); // 前端弹出第一项
console.log(item); //'red'
console.log(colors);

var colors = new Array(); //创建一个数组
var count = colors.unshift('red', 'green'); // 推入两项
console.log(colors);
count = colors.unshift('black'); // 推入另一项
console.log(colors);
var item = colors.pop(); // 取得最后一项
console.log(item); //'green'
console.log(colors);


var colors1 = ['red', 'green', 'blue', 'yellow', 'purple'];
var colors2 = colors1.slice(1);
var colors3 = colors1.slice(2, 4);
var colors4 = colors1.slice(2, 2);//结果是什么？
console.log(colors1);
console.log(colors2);
console.log(colors3);


//链式语法
var bird = {//定义对象字面量
    catapult: function() {
      console.log( 'Yippeeeeee!' );
      return this;//返回bird对象自身
    },
    destroy: function() {
      console.log( "That'll teach you... you dirty pig!" );
      return this;
    }
  };
  bird.catapult().destroy();//destroy()后还可以再链接吗？
  
var scope = 'global scope';	//全局变量
function checkScope(){
    var scope = 'local scope';	//局部变量
    // function f(){
    //     return scope;
    // }
    // return f;
    return()=>scope;
}
checkScope()();		//注意此处的使用方法。返回值为local scope而非global scope

 




