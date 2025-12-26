// 1. 定义父类
function Animal(name) {
  this.name = name;
  this.colors = ['black', 'white'];
}

// 在父类原型上添加方法
Animal.prototype.sayName = function() {
  console.log('我的名字是：' + this.name);
};

// 2. 定义子类
function Dog(name, age) {
  // 核心步骤 A：借用构造函数。继承属性，并允许向父类传参
  Animal.call(this, name); 
  this.age = age;
}

// 3. 核心步骤 B：实现原型继承
// 这一步让 Dog.prototype 成为一个继承自 Animal.prototype 的新对象
Dog.prototype = Object.create(Animal.prototype);

// 4. 核心步骤 C：修复 constructor 指向
// 因为 Object.create 会覆盖 Dog.prototype，我们需要手动把构造器指回 Dog
Dog.prototype.constructor = Dog;

// 在子类原型上添加方法
Dog.prototype.bark = function() {
  console.log('汪汪！');
};

// --- 测试 ---
const myDog = new Dog('旺财', 3);
myDog.sayName(); // 输出：我的名字是：旺财 (继承自父类)
myDog.bark();    // 输出：汪汪！ (子类自有)
console.log(myDog.constructor === Dog); // true