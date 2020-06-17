(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{638:function(t,i,e){"use strict";e.r(i);var o=e(25),n=Object(o.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",[e("span",[e("div",[e("span",{staticStyle:{"font-size":"18.6667px"}},[t._v("IPC机制: 线程之间的通信，指两个线程之间进行数据交换")])]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[t._v("队列的实现: 管道 + 锁")])]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("在队列中数据是安全的，因为队列中有锁的机制，")]),e("span",{staticStyle:{"white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"14pt",color:"rgb(173, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[t._v("保证多个线程修改同一块数据时，同一时间只能有一个任务可以进行修改")])]),e("div",[e("span",{staticStyle:{"white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[t._v("线程之间通信，直接使用 queue 模块")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[t._v("如果要实现线程之间的通信，就使用队列来实现就可以了，不要使用 Pipe管道 或者 Manager 来实现，因为数据不安全虽然可以加锁来实现数据安全，但是队列已经自带锁的机制了")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("1.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("queue.Q")]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("ueue()")]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" -> 先进先出")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("import queue")]),e("div",[e("br")]),e("div",[t._v("q = queue.Queue()")]),e("div",[e("br")]),e("div",[t._v("q.put('a')")]),e("div",[t._v("q.put('b')")]),e("div",[t._v("q.put('c')")]),e("div",[e("br")]),e("div",[t._v("print(q.qsize())  # 3")]),e("div",[e("br")]),e("div",[t._v("print(q.get())  # a")]),e("div",[t._v("print(q.get())  # b")]),e("div",[t._v("print(q.get())  # c")])]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("2.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("queue")]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(".")]),e("span",{staticStyle:{"font-size":"14pt"}},[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("LifoQueue")])]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("()")]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" -> 后进先出")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("import queue")]),e("div",[e("br")]),e("div",[t._v("lfq = queue.LifoQueue()")]),e("div",[e("br")]),e("div",[t._v("lfq.put('a')")]),e("div",[t._v("lfq.put('b')")]),e("div",[t._v("lfq.put('c')")]),e("div",[e("br")]),e("div",[t._v("print(lfq.qsize())  # 3")]),e("div",[e("br")]),e("div",[t._v("print(lfq.get())  # c")]),e("div",[t._v("print(lfq.get())  # b")]),e("div",[t._v("print(lfq.get())  # a")])]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("3.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("queue")]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(".")]),e("span",{staticStyle:{"font-size":"14pt"}},[e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("PriorityQueue")])]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("()")]),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" -> 根据权限输出，值越小越优先，值相同就根据 ascii 进行判断最小值先出")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("import queue")]),e("div",[e("br")]),e("div",[t._v("pq = queue.PriorityQueue()")]),e("div",[t._v("pq.put((5, 'dd'))")]),e("div",[t._v("pq.put((1, 'b'))")]),e("div",[t._v("pq.put((1, 'aa'))")]),e("div",[e("br")]),e("div",[t._v("print(pq.qsize())  # 3")]),e("div",[e("br")]),e("div",[t._v("print(pq.get())  # (1, 'aa')")]),e("div",[t._v("print(pq.get())  # (1, 'b')")]),e("div",[t._v("print(pq.get())  # (5, 'dd')")])]),e("div",[e("br")]),e("div",[e("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("4.")]),t._v(" "),e("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("子线程与子线程之间的通讯")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[e("div",[t._v("import queue")]),e("div",[t._v("from threading import Thread")]),e("div",[e("br")]),e("div",[e("br")]),e("div",[t._v("def fun1():")]),e("div",[t._v("    q.put('hello') "),e("font",{attrs:{color:"#E30000"}},[t._v(" # 将值添加到队列中 -> ")]),e("font",{attrs:{color:"#E30000"}},[t._v("直接调用外部的变量, 因为一个进程中的多个线程是可以直接使用这个进程中的数据，且一个py文件就相当于一个进程")]),e("font",{attrs:{color:"#E30000"}},[t._v("，不按照线程的说法: 函数本来就可以调用外部的变量和方法，因为作用域链")])],1),e("div",[e("br")]),e("div",[e("br")]),e("div",[t._v("def fun2():")]),e("div",[t._v("    print(q.get())  "),e("font",{attrs:{color:"#E30000"}},[t._v("# 通过队列获取其他子线程的值 -> ")]),e("font",{attrs:{color:"#E30000"}},[t._v("直接调用外部的变量, 因为一个进程中的多个线程是可以直接使用这个进程中的数据，且一个py文件就相当于一个进程")]),e("font",{attrs:{color:"#E30000"}},[t._v("，不按照线程的说法: 函数本来就可以调用外部的变量和方法，因为作用域链")])],1),e("div",[e("br")]),e("div",[e("br")]),e("div",[t._v("q = queue.Queue()")]),e("div",[t._v("t1 = Thread(target=fun1)")]),e("div",[t._v("t1.start()")]),e("div",[t._v("t2 = Thread(target=fun2)")]),e("div",[t._v("t2.start()")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])]),e("div",[e("span",{staticStyle:{"font-size":"14pt"}},[e("br")])])])])])}),[],!1,null,null,null);i.default=n.exports}}]);