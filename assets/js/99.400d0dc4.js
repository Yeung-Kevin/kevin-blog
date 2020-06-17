(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{453:function(t,o,e){"use strict";e.r(o);var i=e(25),n=Object(i.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",[e("span",[e("div",[e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[t._v("prototype: ")]),e("span",{staticStyle:{"font-size":"14pt"}},[t._v("对象的原形的属性 对象设置对外的属性（可以理解为构造函数中私有和对外的属性而 prototype 就是对外的属性）")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[t._v("__proto__: 可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[t._v(".__proto__ : 获取和设置当前对象prototype的方法")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[t._v("最好不要通过 ")]),e("span",{staticStyle:{"font-size":"14pt"}},[t._v(".__proto__ 读出和设置对象的 prototype")]),e("span",{staticStyle:{"font-size":"14pt"}},[t._v("，因为 __proto__ 是 JS 中的内置方法是不对外公开的，只有浏览器设置了这个属性才可以使用，最好使用 Object.getPrototypeOf(fn) 和 Object.setPrototypeOf 读取和设置对象的 prototype")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("1.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("对象例子")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[e("br")])]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("let obj1 = {")]),e("div",[t._v("    a: 1,")]),e("div",[t._v("    b: 2")]),e("div",[t._v("};")]),e("div",[e("br")]),e("div",[t._v("let obj2 = {};")]),e("div",[t._v("console.log(obj2.__proto__);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}")])],1),e("div",[e("br")]),e("div",[t._v("obj2.__proto__ = obj1;")]),e("div",[t._v("console.log(obj2);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("// {}")])],1),e("div",[t._v("console.log(obj2.a);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("// 1")])],1),e("div",[t._v("console.log(obj2.__proto__);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("// {a: 1, b: 2}")])],1)]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("2.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("构造函数例子")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[e("br")])]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("let Apple = function (name) {")]),e("div",[t._v("    this.name = name;")]),e("div",[t._v("};")]),e("div",[t._v("Apple.prototype.namefn = function () {")]),e("div",[t._v("    return this.name;")]),e("div",[t._v("};")]),e("div",[e("br")]),e("div",[t._v("let Banana = function (age) {")]),e("div",[t._v("    this.age = age;")]),e("div",[t._v("};")]),e("div",[t._v("Banana.prototype.agefn = function () {")]),e("div",[t._v("    return this.age;")]),e("div",[t._v("};")]),e("div",[e("br")]),e("div",[t._v("console.log(Banana.__proto__);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("// 读取 prototype -> ƒ () { [native code] }")])],1),e("div",[e("br")]),e("div",[t._v("Banana.__proto__ = Apple.prototype;"),e("font",{attrs:{color:"#41AD1C"}},[t._v("  // 设置 prototype")])],1),e("div",[e("br")]),e("div",[t._v("console.log(Banana.__proto__);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("// {namefn: ƒ, constructor: ƒ}")])],1)]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("3.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt"}},[e("b",[t._v("获取和设置对象prototype")])])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("b",[e("br")])])]),e("ul",[e("li",[e("div",[e("font",{staticStyle:{"font-size":"12pt"}},[t._v("Object.getPrototypeOf(fn) -> 获取对象prototype")])],1)]),e("li",[e("div",[e("font",{staticStyle:{"font-size":"12pt"}},[t._v("Object.setPrototypeOf(fn1, fn2.prototype) -> 设置对象prototype 和继承不一样设置会把原有的prototype覆盖掉")])],1)])]),e("div",[e("br")]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("let Cat = function (name) {")]),e("div",[t._v("    this.name = name;")]),e("div",[t._v("};")]),e("div",[t._v("Cat.prototype.showname = function () {")]),e("div",[t._v("    return this.name;")]),e("div",[t._v("};")]),e("div",[e("br")]),e("div",[t._v("let Dog = function (age) {")]),e("div",[t._v("    this.age = age;")]),e("div",[t._v("};")]),e("div",[t._v("Dog.prototype.showage = function () {")]),e("div",[t._v("    return this.age;")]),e("div",[t._v("};")]),e("div",[e("br")]),e("div",[t._v("let c = new Cat('Kevin');")]),e("div",[t._v("let d = new Dog(18);")]),e("div",[e("br")]),e("div",[t._v("console.log(Object.getPrototypeOf(c));  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("//获取对象prototype")])],1),e("div",[e("br")]),e("div",[t._v("Object.setPrototypeOf(d, Cat.prototype);  "),e("font",{attrs:{color:"#41AD1C"}},[t._v("//设置对象prototype 和继承不一样设置会把原有的prototype覆盖掉")])],1),e("div",[e("br")]),e("div",[t._v("console.log(Object.getPrototypeOf(d));")])]),e("div",[e("br")])])])])])}),[],!1,null,null,null);o.default=n.exports}}]);