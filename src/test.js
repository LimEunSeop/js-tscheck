// constructor 에 있는 애들은 필수값이 되며 그 자리에서 타입이 결정된다. (단, null, undefined로 할당하는것은 예외)
// constructor 에 있지 않는 애들은 옵셔널한 값이 되며, 타 메소드에서 할당할 시 null, undefined과 r-value의 타입으로 유니온 된다.
// 필드선언 문법도 constructor 내에서 할당하는것과 마찬가지이지만, null, undefined에 대해서도 엄격하게 동작한다. 따라서 union 으로 따로 타입 정해줘야함
class A {
  constructorOnly = 0
  /** @type {string | undefined} */
  constructorUnknown = undefined

  constructor() {
    // this.constructorOnly = 0
    // this.constructorUnknown = null
  }
  method() {
    this.constructorOnly = false // error
    this.constructorUnknown = 'plunkbat'
    this.methodOnly = 'ok'
  }
  method2() {
    this.methodOnly = true
    this.constructorUnknown = false // error
  }
}

class B {
  constructor() {
    /** @type {number | undefined} */
    this.prop = undefined
    /** @type {number | undefined} */
    this.count
  }
}

let b = new B()
b.prop = 0 // OK
b.count = 'string' // errors

// 윗 문법과 완벽히 일치
function C {
  this.constructorOnly = 0
  this.constructorUnknown =undefined
}
C.prototype.method = function () {
  this.constructorOnly = false // errors
  this.constructorUnknown = "plunkbat"
}

// same as `import module "fs"`
const fs = require('fs')

/**
 * same as `export function readFile'
 * @param {fs.PathOrFileDescriptor} f 
 * @returns 
 */
module.exports.readFile = function (f) {
  return fs.readFileSync(f);
}

// 

class D {}
D.E = class {}

// 

function Outer() {
  this.y = 2
}

Outer.Inner = function () {
  this.yy = 2
}

Outer.Inner()

// 

var ns = {}
ns.C = class {}
ns.func = function () {}

ns

// 

var ns = (function (n) {
  return n || {}
})()
ns.CONST = 1

// defaulting to global
var assign = assign || function () {}
assign.extra = 1

// 

/** @type {{a: number}} */
var obj = {a: 1}
obj.b = 2 // errors

// null, undefined, empty Array will have type any[]

function Foo(i = null) {
  if (!i) i = 1
  var j = undefined;
  j = 2
  this.l = []
}

var foo = new Foo()
foo.l.push(foo.i);
foo.l.push('end')

// 

/**
 * 
 * @param {string} [somebody] - Somebody's name
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = "John Doe"
  }
  console.log("Hello " + somebody)
}

sayHello()

// 

/**
 * @param {string} test
 * @param {...number} awef */
function sum() {
  var total = 0
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

sum('1', '2')