(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{627:function(o,i,r){"use strict";r.r(i);var t=r(25),n=Object(t.a)({},(function(){var o=this,i=o.$createElement,r=o._self._c||i;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("div",[r("span",[r("div",[r("div",[r("div",[r("div",[r("div",[r("div",[r("div",[r("div",[r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[o._v("生成器 ")]),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"14pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("Generator: ")])]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("自己写的能实现迭代器功能的就叫生成器 ")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("生成器的本质就是迭代器，"),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"12pt",color:"rgb(69, 69, 69)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("所以自带了")]),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"12pt",color:"rgb(69, 69, 69)","font-stretch":"normal","font-style":"normal","font-variant":"normal","font-weight":"400","line-height":"normal"}},[o._v("__iter__方法和")]),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"12pt",color:"rgb(69, 69, 69)","font-stretch":"normal","font-style":"normal","font-variant":"normal","font-weight":"normal","line-height":"normal"}},[o._v("__next__方法，不需要我们去实现 和 可以被 for 循环")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"12pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("特点: ")])])])]),r("ul",[r("li",[r("div",[o._v("调用函数的之后函数不执行，返回一个生成器")])]),r("li",[r("div",[o._v("每次调用next方法的时候会取到一个值")])]),r("li",[r("div",[o._v("直到取完最后一个，在执行next会报错")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("在调用 生成器函数 和 生成器表达式 的时候只是获取到了生成器，而里面的代码并没有被执行")])])]),r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("生成器每次只能取 1 个值，且你不向它取值生成器是不会被执行的")])])]),r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("生成器里的所有数据只能取一次，取完就没有")])])])]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[o._v("生成器的好处: 不会一下子在内存中生成太多数据 -> ")]),r("span",{staticStyle:{"font-size":"14pt"}},[o._v("假如我想让工厂给学生做校服，生产2000000件衣服，我和工厂一说，工厂应该是先答应下来，然后再去生产，我可以一件一件的要，也可以根据学生一批一批的找工厂拿。而不能是一说要生产2000000件衣服，工厂就先去做生产2000000件衣服，等回来做好了，学生都毕业了。。。")])]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[o._v("创建生成器的两种方式:")]),o._v(" "),r("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)"}},[o._v("生成器函数")]),o._v(" "),r("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)"}},[o._v("生成器推导式")])]),r("div",[r("font",{staticStyle:{"font-size":"14pt"}},[r("br")])],1),r("div",[r("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("1. 生成器函数 -> 可以被 for 循环")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"12pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("一个包含yield关键字的函数就是一个生成器函数，")])]),o._v(" "),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"12pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("调用生成器函数不会得到返回的具体的值，而是得到一个生成器（可以理解为 ")])]),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"12pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("可迭代的对象 或 迭代器")]),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"12pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("），然后再通过 for 循环 或 __next__ 方法获得具体的值")])]),r("span",{staticStyle:{"letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"12pt",color:"rgb(0, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal"}},[o._v("。yield语句的作用就是一次返回一个结果，在每个返回结果的中间，挂起函数的状态，以便下次重它离开的地方继续执行")])])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    print(1)")]),r("div",[o._v("    yield '返回值一'")]),r("div",[o._v("    print(2)")]),r("div",[o._v("    yield '返回值二'")]),r("div",[o._v("    print(3)")]),r("div",[o._v("    yield '返回值三'")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn() "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# <generator object generator_fn at 0x000002DAC5CEEF68> 返回一个可迭代对象 看到 generator 单词就应该知道它是一个迭代器")])],1),r("div",[r("br")]),r("div",[o._v("print(generator.__next__()) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 返回值一")])],1),r("div",[o._v("print(generator.__next__()) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 返回值二")])],1),r("div",[o._v("print(generator.__next__()) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 返回值三")])],1)]),r("div",[r("br")])]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    print(1)")]),r("div",[o._v("    yield '返回值一'")]),r("div",[o._v("    print(2)")]),r("div",[o._v("    yield '返回值二'")]),r("div",[o._v("    print(3)")]),r("div",[o._v("    yield '返回值三'")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn() "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# <generator object generator_fn at 0x000002DAC5CEEF68> 返回一个可迭代对象 看到 generator 单词就应该知道它是一个迭代器")])],1),r("div",[r("br")]),r("div",[o._v("for i in generator:")]),r("div",[o._v("    print(i)")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("注意:")])])]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("在调用 生成器函数 和 生成器表达式 的时候只是获取到了生成器，而里面的代码并没有被执行")])])]),r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("生成器每次只能取 1 个值，且你不向它取值生成器是不会被执行的")])])]),r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("生成器里的所有数据只能取一次，取完就没有")])])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("def generator_fn():")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    print(1)")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    yield '返回值一'")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    print(2)")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    yield '返回值二'")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    print(3)")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    yield '返回值三'")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[r("br")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[r("br")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("generator = generator_fn() # 此时只是获取到了生成器，而生成器并没有执行")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[r("br")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("for i in generator: # 向生成器取值了，生成器开始执行")])],1),r("div",[r("font",{attrs:{color:"#E30000"}},[o._v("    print(i)")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("上面提到的校服例子")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def uniforms():")]),r("div",[o._v("    for i in range(2000000):")]),r("div",[o._v("        yield '第 %s 套校服' % (i + 1)")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g_uniforms = uniforms()")]),r("div",[r("br")]),r("div",[o._v("print(g_uniforms.__next__())  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 要一件衣服 # 第 1 套校服")])],1),r("div",[o._v("print(g_uniforms.__next__())  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 再要一件衣服 # 第 2 套校服")])],1),r("div",[o._v("print(g_uniforms.__next__())  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 再要一件衣服 # 第 3 套校服")])],1),r("div",[r("br")]),r("div",[o._v("for i, u in enumerate(g_uniforms):  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 要一批衣服，比如5件 那么会从第 4 件开始拿起，因为 yield 语句会从你上一次结束的位置开始继续执行下去，直到遇见下一个 yield 语句 或 函数执行完")])],1),r("div",[o._v("    print(u)")]),r("div",[o._v("    if i > 3:")]),r("div",[o._v("        break")]),r("div",[r("br")]),r("div",[o._v("for i, u in enumerate(g_uniforms):  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 再要一批衣服，比如5件 那么会从第 8 件开始拿起，因为 yield 语句会从你上一次结束的位置开始继续执行下去，直到遇见下一个 yield 语句 或 函数执行完")])],1),r("div",[o._v("    print(u)")]),r("div",[o._v("    if i > 3:")]),r("div",[o._v("        break")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("监听文件的输入 判断是否输入了 xxx 关键字，然后将有关该关键字这一行输出出来")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def tail(filename):")]),r("div",[o._v("    f = open(filename, encoding='utf-8')")]),r("div",[o._v("    f.close()")]),r("div",[o._v("    while True:")]),r("div",[o._v("        line = f.readline().strip()")]),r("div",[o._v("        if line:")]),r("div",[o._v("            yield line")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g = tail('monitor.txt')")]),r("div",[o._v("for i in g:")]),r("div",[o._v("    if 'python' in i:")]),r("div",[o._v("        print('****' + i + '****')")])]),r("div",[r("br")])]),r("ul",[r("li",[r("div",[o._v("从生成器中取值得方法")])])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("__next__()")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    for i in range(10):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn()")]),r("div",[o._v("g_data1 = generator.__next__()")]),r("div",[o._v("g_data2 = generator.__next__()")])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("next(生成器) "),r("span",{staticStyle:{"font-size":"12pt"}},[o._v("next() 等同于 __next__() 在以后日常使用中尽量使用 next()，在这里使用 __next__() 是为了说明")])])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    for i in range(10):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn()")]),r("div",[o._v("g_data1 = next(generator)")]),r("div",[o._v("g_data2 = next(generator)")])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("for")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    for i in range(10):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("for i in generator_fn():")]),r("div",[o._v("    print(i)")])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("将生成器强制转换为 列表、元组、集合 不推荐 占用内存高")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    for i in range(5):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("arr = list(generator_fn()) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# [0, 1, 2, 3, 4]")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v(".send() -> send 的效果和获取下一个值的next效果基本一致，只是在获取下一个值的时候，给上一yield的位置传递一个数据 -> 使用情况: 依赖外部的值 ->很少会使用到")])])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("使用send的注意事项")])]),r("ul",[r("li",[r("div",[o._v("第一次使用生成器的时候一定用next获取下一个值")])]),r("li",[r("div",[o._v("最后一个yield不能接受外部的值")])])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    e_data1 = yield 1")]),r("div",[o._v("    print(e_data1)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 外部的值1")])],1),r("div",[o._v("    e_data2 = yield 2")]),r("div",[o._v("    print(e_data2)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 外部的值2")])],1),r("div",[o._v("    yield 3")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn()")]),r("div",[o._v("g_data1 = generator.__next__()")]),r("div",[o._v("g_data2 = generator.send('外部的值1')")]),r("div",[o._v("g_data3 = generator.send('外部的值2')")])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("例子：移动平均值")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def moving_average():")]),r("div",[o._v("    total = 0")]),r("div",[o._v("    count = 0")]),r("div",[o._v("    avg = 0")]),r("div",[o._v("    while 1:")]),r("div",[o._v("        num = yield avg")]),r("div",[o._v("        total += num")]),r("div",[o._v("        count += 1")]),r("div",[o._v("        avg = total / count")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = moving_average()")]),r("div",[o._v("generator.__next__()")]),r("div",[o._v("avg1 = generator.send(10) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 10 ")])],1),r("div",[o._v("avg2 = generator.send(20) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 15")])],1)]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("预激活生成器的装饰器")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def wrapper(fn):")]),r("div",[o._v("    def inner(*args, **kwargs):")]),r("div",[o._v("        re = fn()")]),r("div",[o._v("        re.__next__()")]),r("div",[o._v("        return re")]),r("div",[r("br")]),r("div",[o._v("    return inner")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("@wrapper")]),r("div",[o._v("def moving_average():")]),r("div",[o._v("    total = 0")]),r("div",[o._v("    count = 0")]),r("div",[o._v("    avg = 0")]),r("div",[o._v("    while 1:")]),r("div",[o._v("        num = yield avg")]),r("div",[o._v("        total += num")]),r("div",[o._v("        count += 1")]),r("div",[o._v("        avg = total / count")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = moving_average()")]),r("div",[o._v("avg1 = generator.send(10)")]),r("div",[o._v("avg2 = generator.send(20)")]),r("div",[o._v("print(avg1, avg2)")])]),r("div",[r("br")])]),r("ul",[r("li",[r("div",[o._v("yield from -> 将可迭代对象的值一个一个返回出去")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    a = '123'")]),r("div",[o._v("    b = 'abc'")]),r("div",[o._v("    yield from a")]),r("div",[o._v("    yield from b")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn()")]),r("div",[o._v("for i in generator:")]),r("div",[o._v("    print(i)")])]),r("div",[r("br")]),r("div",[o._v("    等价于")]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    a = '123'")]),r("div",[o._v("    b = 'abc'")]),r("div",[o._v("    for i in a:")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[o._v("    for i in b:")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("generator = generator_fn()")]),r("div",[o._v("for i in generator:")]),r("div",[o._v("    print(i)")])]),r("div",[r("br")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("2. 生成器推导式")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("(expression")]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"16px",color:"rgb(227, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("for")])]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("item")]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"16px",color:"rgb(227, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("in")])]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("iterable")]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"16px",color:"rgb(227, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("if")])]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("condition)")])])]),r("li",[r("div",[r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("(生成器所要生成的值")]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"16px",color:"rgb(227, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("for")])]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("元素")]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"16px",color:"rgb(227, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("in")])]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("可迭代对象")]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px"}},[r("span",{staticStyle:{"font-size":"16px",color:"rgb(227, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("if")])]),o._v(" "),r("span",{staticStyle:{"box-sizing":"border-box",outline:"0px","overflow-wrap":"break-word","font-size":"16px","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(79, 79, 79)","font-variant-caps":"normal","font-variant-ligatures":"common-ligatures"}},[o._v("元素的相关条件) -> if 判断可加可不加看情况使用")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("span",{staticStyle:{color:"rgb(79, 79, 79)"}},[o._v("generator = (i for i in range(10) if i % 2 == 0)")])]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{color:"rgb(79, 79, 79)"}},[o._v("for i in generator:")])]),r("div",[r("span",{staticStyle:{color:"rgb(79, 79, 79)"}},[o._v("    print(i)")])])]),r("div",[r("br")]),r("div",[o._v("    等价于")]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator_fn():")]),r("div",[o._v("    for i in range(10):")]),r("div",[o._v("        if i % 2 == 0:")]),r("div",[o._v("            yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("for i in generator_fn():")]),r("div",[o._v("    print(i)")])]),r("div",[r("br")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("3. for 循环 和 生成器的区别 ")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("for循环: 多个 for 循环 循环一个可迭代对象的时候，for循环会在自身内部生成一个迭代器")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("lis = [1, 2, 3, 4]")]),r("div",[o._v("for i in lis:")]),r("div",[o._v("    print(i)")]),r("div",[r("br")]),r("div",[o._v("for i2 in lis:")]),r("div",[o._v("    print(i2)")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("生成器: 如果生成器里的值都被取过一遍以后（取完了）, 那么生成器再被调用的时候里面的值是空的 -> 因为生成器和迭代器一样（生成器的本质就是迭代器）里面的值只能取一遍，取完就没有了")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def generator():")]),r("div",[o._v("    yield 1")]),r("div",[o._v("    yield 2")]),r("div",[o._v("    yield 3")]),r("div",[o._v("    yield 4")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("r_generator = generator()  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 获取生成器")])],1),r("div",[r("br")]),r("div",[o._v("i_lis = list(r_generator)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# [1, 2, 3, 4] 此时，迭代器里的所有值都给了 list")])],1),r("div",[o._v("i_lis2 = list(r_generator)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# []")])],1)]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("4. 生成器面试题")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("面试题一")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def demo():")]),r("div",[o._v("    for i in range(4):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g = demo() "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 只是获取到了生成器，生成器并没有执行")])],1),r("div",[r("br")]),r("div",[o._v("g1 = (i for i in g) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 只是获取到了生成器，生成器并没有执行")])],1),r("div",[o._v("g2 = (i for i in g1) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 只是获取到了生成器，生成器并没有执行")])],1),r("div",[r("br")]),r("div",[o._v("print(list(g1)) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# [0, 1, 2, 3]")]),o._v(" "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 开始执行生成器 g1 而 g1 生成器是调用了 g 生成器的")])],1),r("div",[o._v("print(list(g2)) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# []")]),o._v(" "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 开始执行生成器 g2 而 g2 生成器是调用了 g1 生成器的 而 g1 生成器是调用了 g 生成器的，此时 g 生成器的值已经被 g1 取完了所以返回 []")])],1)]),r("div",[r("br")])]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("面试题二 -> 当遇到循环执行生成器表达式的时候就将它拆开来看")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def add(n, i):")]),r("div",[o._v("    return n + i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("def test():")]),r("div",[o._v("    for i in range(4):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g = test()")]),r("div",[o._v("for n in [1, 10]:")]),r("div",[o._v("    g = (add(n, i) for i in g)")]),r("div",[r("br")]),r("div",[o._v("print(list(g)) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# [20, 21, 22, 23]")])],1)]),r("div",[r("br")]),r("div",[o._v("拆解后的"),r("span",{staticStyle:{"font-size":"12pt"}},[o._v("循环执行生成器表达式")])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def add(n, i):")]),r("div",[o._v("    return n + i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("def test():")]),r("div",[o._v("    for i in range(4):")]),r("div",[o._v("        yield i")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g = test()")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[r("br")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# for n in [1, 10]:")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("#     g = (add(n, i) for i in g)")])],1),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("n = 1")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# g = (add(n, i) for i in g) 此时 g = test() 拆解为一下代码")])],1),r("div",[o._v("g = (add(n, i) for i in test())")]),r("div",[r("br")]),r("div",[o._v("n = 10")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# g = (add(n, i) for i in g) 此时 g = (add(n, i) for i in test()) 拆解为一下代码")])],1),r("div",[o._v("g = (add(n, i) for i in (add(n, i) for i in test()))")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("'''")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("    g = (add(n, i) for i in (add(n, i) for i in test())) 拆解过程")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}})],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("    1. (add(10, i) for i in test()) # 生成器表达式 返回 生成器->里面的值为 10, 11, 12, 13)")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("    2. (add(10, i) for i in 生成器->里面的值为 10, 11, 12, 13) # 生成器表达式 返回 生成器->里面的值为 20, 21, 22, 23")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("'''")])],1),r("div",[r("br")]),r("div",[o._v("print(list(g)) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 将生成器转化为列表得到 [20, 21, 22, 23]")])],1)]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("5. 生成器练习")])]),r("div",[r("font",{staticStyle:{"font-size":"12pt"}},[r("br")])],1),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("写生成器，处理文件，用户指定要查找的文件和内容，将文件中包含要查找内容的每一行都输出到屏幕")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def check_file():")]),r("div",[o._v("    with open('log.txt', encoding='utf-8') as f:")]),r("div",[o._v("        for line in f:")]),r("div",[o._v("            yield line")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g = check_file()")]),r("div",[o._v("for i in g:")]),r("div",[o._v("    print(i.strip())")])]),r("div",[r("font",{staticStyle:{"font-size":"12pt"}},[r("br")])],1)]),r("ul",[r("li",[r("div",[o._v("写生成器，从文件中读取内容，在每一次读取到的内容之前加上'***'之后再返回给用户。")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("def check_file():")]),r("div",[o._v("    with open('log.txt', encoding='utf-8') as f:")]),r("div",[o._v("        for line in f:")]),r("div",[o._v("            yield '****' + line")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("g = check_file()")]),r("div",[o._v("for i in g:")]),r("div",[o._v("    print(i.strip())")])]),r("div",[r("br")])]),r("div",[r("br")])])])])}),[],!1,null,null,null);i.default=n.exports}}]);