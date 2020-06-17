(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{653:function(t,i,o){"use strict";o.r(i);var e=o(25),r=Object(e.a)({},(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",[o("span",[o("div",[o("span",{staticStyle:{"font-size":"18.6667px"}},[t._v("IPC机制: 进程之间的通信，指两个进程之间进行数据交换")])]),o("div",[o("span",{staticStyle:{"font-size":"18.6667px"}},[o("br")])]),o("div",[o("font",{staticStyle:{"font-size":"14pt"}},[o("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[t._v("队列的实现: 管道 + 锁")])])],1),o("div",[o("font",{staticStyle:{"font-size":"14pt"}},[o("span",{staticStyle:{"font-size":"14pt"}},[o("br")])])],1),o("div",[o("span",{staticStyle:{"font-size":"14pt",color:"rgb(173, 0, 0)","font-weight":"bold"}},[t._v("在队列中数据是安全的，因为队列中有锁的机制，")]),o("span",{staticStyle:{"white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"14pt",color:"rgb(173, 0, 0)","font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[t._v("保证多个进程修改同一块数据时，同一时间只能有一个任务可以进行修改")])]),o("div",[o("span",{staticStyle:{"font-size":"14pt"}},[o("span",{staticStyle:{"font-size":"14pt"}},[o("br")])])]),o("div",[o("span",{staticStyle:{"font-size":"14pt"}},[o("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[t._v("进程之间通信，可以使用 multiprocessing 中的 Queue模块")])])]),o("div",[o("span",{staticStyle:{"font-size":"14pt"}},[o("br")])]),o("div",[o("span",{staticStyle:{"font-size":"14pt"}},[o("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[t._v("队列有两种创建方式 第一种不传参数 这个队列就没有长度限制 ；传参数，创建一个有最大长度限制的队列")])])]),o("div",[o("span",{staticStyle:{"font-size":"14pt"}},[o("br")])]),o("div",[o("span",{staticStyle:{"font-weight":"bold",color:"rgb(227, 0, 0)","font-size":"14pt"}},[t._v("如果要实现进程之间的通信，就使用队列来实现就可以了，不要使用 Pipe管道 或者 Manager 来实现，因为数据不安全虽然可以加锁来实现数据安全，但是队列已经自带锁的机制了")])]),o("div",[o("span",{staticStyle:{"font-size":"14pt"}},[o("br")])]),o("div",[o("span",{staticStyle:{"font-size":"12pt"}},[t._v("队列的3个方法:")])]),o("div",[o("span",{staticStyle:{"font-size":"12pt"}},[t._v("    .put() -> 添加值到队列")])]),o("div",[o("span",{staticStyle:{"font-size":"12pt"}},[t._v("    .get() -> 获取队列中的值")])]),o("div",[o("span",{staticStyle:{"font-size":"12pt"}},[t._v("    .qsize() -> 获取队列的长度，是不准确的，因为在获取的过程中有可能进程就会往队列里中添加值")])]),o("div",[o("font",{staticStyle:{"font-size":"14pt"}},[o("br")])],1),o("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[o("div",[t._v("from multiprocessing import Queue")]),o("div",[o("br")]),o("div",[t._v("q = Queue()")]),o("div",[t._v("q.put(1)")]),o("div",[t._v("q.put(2)")]),o("div",[o("br")]),o("div",[t._v("print(q.get())  # 1")]),o("div",[t._v("print(q.get())  # 2")]),o("div",[t._v("print(q.get())  # 此时全部值已经被获取完了，如果再进行获取就会形成 阻塞 等待队列进入第3个值")])]),o("div",[o("br")]),o("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[o("div",[t._v("from multiprocessing import Queue")]),o("div",[o("br")]),o("div",[t._v("q = Queue(3)  # 设置一个长度为3的队列")]),o("div",[t._v("q.put(1)")]),o("div",[t._v("q.put(2)")]),o("div",[t._v("q.put(3)")]),o("div",[t._v("# print(q.get())  # 取第一个队列中的第一个值，让第4个值添加到队列中")]),o("div",[t._v("q.put(4)  # 此时队列中的位置已经满了，如果再往队列里添加值就会形成 阻塞，只有第一个值被取了，这个值才能添加进入")])]),o("div",[o("br")]),o("div",[o("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[t._v("1. 子进程与主进程之间的通讯")])]),o("div",[o("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt"}},[o("br")])]),o("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[o("div",[t._v("from multiprocessing import Process")]),o("div",[t._v("from multiprocessing import Queue")]),o("div",[o("br")]),o("div",[o("br")]),o("div",[t._v("def q_put(q):")]),o("div",[t._v("    q.put('hello')  "),o("font",{attrs:{color:"#E30000"}},[t._v("# 将值添加到队列中")])],1),o("div",[o("br")]),o("div",[o("br")]),o("div",[t._v("if __name__ == '__main__':")]),o("div",[t._v("    q = Queue()")]),o("div",[t._v("    p1 = Process(target=q_put, args=(q,))")]),o("div",[t._v("    p1.start()")]),o("div",[t._v("    print(q.get())  "),o("font",{attrs:{color:"#E30000"}},[t._v("# 通过队列获取到子进程的值")])],1)]),o("div",[o("br")]),o("div",[o("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[t._v("2. 子进程与子进程之间的通讯")])]),o("div",[o("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt"}},[o("br")])]),o("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[o("div",[t._v("from multiprocessing import Process")]),o("div",[t._v("from multiprocessing import Queue")]),o("div",[o("br")]),o("div",[o("br")]),o("div",[t._v("def q_put(q):")]),o("div",[t._v("    q.put('hello')  "),o("font",{staticStyle:{color:"rgb(227, 0, 0)"}},[t._v("# 将值添加到队列中")])],1),o("div",[o("br")]),o("div",[o("br")]),o("div",[t._v("def q_get(q):")]),o("div",[t._v("    print(q.get())  "),o("font",{staticStyle:{color:"rgb(227, 0, 0)"}},[t._v("# 通过队列获取到其他子进程的值")])],1),o("div",[o("br")]),o("div",[o("br")]),o("div",[t._v("if __name__ == '__main__':")]),o("div",[t._v("    q = Queue()")]),o("div",[t._v("    p1 = Process(target=q_put, args=(q,))")]),o("div",[t._v("    p1.start()")]),o("div",[o("br")]),o("div",[t._v("    p2 = Process(target=q_get, args=(q,))")]),o("div",[t._v("    p2.start()")])]),o("div",[o("br")])])])])}),[],!1,null,null,null);i.default=r.exports}}]);