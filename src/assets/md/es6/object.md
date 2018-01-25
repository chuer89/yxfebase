## 对象

#### 1.创建对象
``` javascript
//bad
let item = new Object();

//good
let item = {};
```

#### 2.别使用 `保留字` 作为键值
```
//bad
let godMan = {
  default: {},
  private: true
}

//good
let godMan = {
  defaults: {},
  hidden: true
}
```