let lang = 'TypeScript';//如果省略类型说明，TS也可进行自动推断
//lang = 1010;//error! 如果需要可以使用联合类型：let lang: number | string = 'TS';
let age: number = 89;
// let age = 64;//error!

const pi: number = 3.14159;//pi以后不可改变，类似常量
//pi = 3.14;//error!


//解构数组
let input = [89, 64, 2018, 10];
let [first, second] = input;//注意使用[]
console.log(first); // 89
console.log(second); // 64
let [one, ...others] = input; //剩余变量
console.log(...others);
//展开
let newArr = [89, ...others, 18];
console.log(newArr);
//解构对象
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let {a, b} = o;//注意使用{}，且变量名需与对象中道属性名一致
console.log(a, b);
          