## 函数

#### 1.命名规范：驼峰

``` javascript
// bad
let my_class_name;

//good
let myClassName;
```

#### 2.使用函数声明代替函数表达式（同级作用域，除构造原型链函数或对象函数）
> 为什么？因为函数声明是可命名的，所以他们在调用栈中更容易被识别。此外，函数声明会把整个函数提升（hoisted），而函数表达式只会把函数的引用变量名提升

``` javascript
// bad
let foo = () => {
  //body
}

//good
function foo() {
  //body
}
//good
let obj = {
  foo() {
    //body
  }
}
```

#### 3.永远不要在一个非函数代码块（if、while 等）中声明一个函数，把那个函数赋给一个变量

``` javascript
//bad
if (1) {
  let myName = 'itcast';
}

//good
let myName;
if (1) {
  myName = 'itcast';
}
```
