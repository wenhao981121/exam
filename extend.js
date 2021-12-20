// 寄生组合继承
function parent(name) {
    this.name = name
}
function child(name, age) {
    // 在子类中寄生父类构造方法
    parent.call(this, name)
    this.age = age
}


// 这个方法用来原型链继承
function extendPrototype(child, parent) {
    const p = Object.create(parent.prototype);
    p.constructor = child
    child.prototype = p
}

extendPrototype(child, parent)