(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{655:function(t,o,i){"use strict";i.r(o);var r=i(25),n=Object(r.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",[i("span",[i("div",[i("font",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("Manager 提供了可以进行所有数据类型共享的机制，就是可以以 dict list …… 类型进行进程的通信")])])],1),i("div",[i("font",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])])],1),i("div",[i("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("在 Manager 中数据是不安全的")]),i("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("，")]),i("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("因为 ")]),i("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("Manager ")]),i("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("中没有锁的机制，")]),i("span",{staticStyle:{"white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"14pt",color:"rgb(173, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[t._v("多个进程修改同一块数据时，就会导致数据的混乱，")]),i("span",{staticStyle:{"white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"14pt",color:"rgb(173, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[t._v("处理方式上锁")])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("from multiprocessing import Manager")]),i("div",[t._v("from multiprocessing import Process")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[t._v("def fun(dic):")]),i("div",[t._v("    print(dic, '子进程') "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# {'count': 0} 子进程")])],1),i("div",[i("br")]),i("div",[i("br")]),i("div",[t._v("if __name__ == '__main__':")]),i("div",[t._v("    m = Manager()")]),i("div",[t._v("    d = m.dict({})  "),i("font",{attrs:{color:"#E30000"}},[t._v("# 创建一个共享的字典")])],1),i("div",[t._v("    print(d, '主进程')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# {} 主进程")])],1),i("div",[t._v("    d['count'] = 0")]),i("div",[t._v("    print(d, '主进程') "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# {'count': 0} 主进程")])],1),i("div",[t._v("    p = Process(target=fun, args=(d,))  "),i("font",{attrs:{color:"#E30000"}},[t._v("# 将共享字典传递给子进程，从而实现进程之间的通信，普通的字典是不行的一定要是 Manager 创建的")])],1),i("div",[t._v("    p.start()")]),i("div",[t._v("    p.join()  "),i("font",{staticStyle:{color:"rgb(227, 0, 0)"}},[i("b",[t._v("# 注意，子进程必须执行 .join() 方法，这样在子进程里面才能获取到字典不然只能获取到一个对象")])])],1)]),i("div",[i("font",{staticStyle:{"font-size":"14pt"}},[i("br")])],1),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("在 Manager 中如果一个进程修改了共享的数据，那么另一个进程是会感知到的")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("from multiprocessing import Manager")]),i("div",[t._v("from multiprocessing import Process")]),i("div",[t._v("from multiprocessing import Lock")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[t._v("def work(dic, lock):")]),i("div",[t._v("    lock.acquire()  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 上锁")])],1),i("div",[i("br")]),i("div",[t._v("    dic['count'] -= 1 "),i("font",{attrs:{color:"#E30000"}},[t._v(" # 当共享的数据被修改了，其他进程是可以感知到的")])],1),i("div",[t._v("    print(dic, '子进程')")]),i("div",[i("br")]),i("div",[t._v("    lock.release()  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 解锁")])],1),i("div",[i("br")]),i("div",[i("br")]),i("div",[t._v("if __name__ == '__main__':")]),i("div",[t._v("    lock = Lock()")]),i("div",[t._v("    m = Manager()")]),i("div",[t._v("    dic = m.dict({'count': 100}) "),i("font",{attrs:{color:"#E30000"}},[t._v(" # 创建一个共享字典")])],1),i("div",[t._v("    l = []")]),i("div",[t._v("    for i in range(100):")]),i("div",[t._v("        p = Process(target=work, args=(dic, lock))")]),i("div",[t._v("        p.start()")]),i("div",[t._v("        l.append(p)")]),i("div",[i("br")]),i("div",[t._v("    [i.join() for i in l]  "),i("font",{attrs:{color:"#E30000"}},[t._v("# 子进程必须执行 .join() 方法，这样在子进程里面才能获取到字典不然只能获取到一个对象")])],1),i("div",[t._v("    print(dic, '--------- 主进程 ---------')")])]),i("div",[i("br")])])])])}),[],!1,null,null,null);o.default=n.exports}}]);