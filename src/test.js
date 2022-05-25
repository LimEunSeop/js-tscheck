class C {
  constructor() {
    this.constructorOnly = 0
    // this.constructorUnknown = undefined
  }
  method() {
    this.constructorOnly = false
    this.constructorUnknown = 'plunkbat'
    this.methodOnly = 'ok'
  }
  method2() {
    this.methodOnly = true
  }
}
