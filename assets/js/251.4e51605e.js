(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{604:function(o,i,r){"use strict";r.r(i);var e=r(25),t=Object(e.a)({},(function(){var o=this,i=o.$createElement,r=o._self._c||i;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("div",[r("span",[r("div",[r("div",[r("div",[r("div",[r("div",[r("div",[r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[o._v("序列化: 将 xxx数据类型 转化为 字符串 的过程 -> ")]),r("span",{staticStyle:{"font-size":"14pt"}},[o._v("序列化后的字符串外面是单引号里面是双引号")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[r("br")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[o._v("序列化的作用: 因为在")]),r("span",{staticStyle:{"font-size":"14pt"}},[o._v("网络传输的时候只能传输字符串转码后的bytes类型，所以如果想传输")]),r("span",{staticStyle:{"font-size":"14pt"}},[o._v("xxx数据类型的数据，首先要先序列化")]),r("span",{staticStyle:{"font-size":"14pt"}},[o._v("xxx数据类型的数据")]),r("span",{staticStyle:{"font-size":"14pt"}},[o._v("得到字符串类型的数据，然后将字符串转换成 bytes 类型再进行传输")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[r("br")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[o._v("反序列化: 将 字符串 转化为 xxx数据类型 的过程")])]),r("div",[r("span",{staticStyle:{"font-size":"14pt"}},[r("br")])]),r("div",[r("br")]),r("div",[r("img",{attrs:{"data-filename":"827651-20170805234418803-1378181341.png",src:"/kevin-blog/Python/序列化模块_files/827651-20170805234418803-1378181341.png",type:"image/png",width:"460"}})]),r("div",[r("font",{staticStyle:{"font-size":"14pt"}},[r("br")])],1),r("div",[r("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[o._v("1.")]),o._v(" "),r("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[o._v("json 模块")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px","font-size":"12pt",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal","line-height":"1.5"}},[o._v("只有")]),o._v(" "),r("span",{staticStyle:{"font-size":"12pt"}},[o._v("数字、字符串、列表、字典、元组、布尔值、None 能够通过 json 转化为字符串")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("json.dumps(int/float/str/list/dict/tuple) -> 序列化 -> 返回值: 字符串")])])]),r("div",[r("br")])]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("dic = {'k1': 1, 'k2': 2, 'k3': 3}")]),r("div",[r("br")]),r("div",[o._v("s_json = json.dumps(dic)")]),r("div",[r("br")]),r("div",[o._v("print(repr(s_json))  "),r("font",{attrs:{color:"#41AD1C"}},[o._v('# \'{"k1": 1, "k3": 3, "k2": 2}\'')])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("json.loads(str) -> 反序列化 -> 返回值: xxx数据类型")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v('str_j = \'{"k1": 1, "k3": 3, "k2": 2}\'')]),r("div",[r("br")]),r("div",[o._v("s_json = json.loads(str_j)")]),r("div",[r("br")]),r("div",[o._v("print(s_json)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k1': 1, 'k2': 2, 'k3': 3}")])],1)]),r("div",[r("br")])]),r("ul",[r("li",[r("div",[o._v("json.dump(int/float/str/list/dict/tuple, 文件句柄) -> 序列化 -> 将序列化后的字符串写入文件里")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("lis = [1, 2, 3, 4, '中文']")]),r("div",[o._v("f = open('serialization.txt', 'w', encoding='utf-8')")]),r("div",[o._v("json.dump(lis, f)")]),r("div",[o._v("f.close()")])]),r("div",[r("br")])]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v('[1, 2, 3, 4, "\\u4e2d\\u6587"]')])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("json.dump(int/float/str/list/dict/tuple, 文件句柄, "),r("span",{staticStyle:{"font-size":"12pt"}},[r("span",{staticStyle:{"font-size":"12pt",color:"rgb(255, 0, 0)"}},[o._v("ensure_ascii=False")])]),o._v(") -> 序列化 -> 将序列化后的字符串写入文件里 -> "),r("span",{staticStyle:{"font-size":"12pt"}},[o._v("ensure_ascii=False 默认值为 True 如果为 True 中文会以 ")]),r("span",{staticStyle:{color:"rgb(57, 57, 57)"}},[o._v("bytes 类型显示（上面例子）（但是不会影响反序列化，")]),r("span",{staticStyle:{color:"rgb(57, 57, 57)"}},[o._v("反序列化出来的还是中文")]),r("span",{staticStyle:{color:"rgb(57, 57, 57)"}},[o._v("），如果为 False 按中文显示")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("lis = [1, 2, 3, 4, '中文']")]),r("div",[o._v("f = open('serialization.txt', 'w', encoding='utf-8')")]),r("div",[o._v("json.dump(lis, f, ensure_ascii=False)")]),r("div",[o._v("f.close()")])]),r("div",[r("br")])]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 加了 ensure_ascii=False 后 serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v('[1, 2, 3, 4, "中文"]')])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("json.load(文件句柄) -> 反序列化 -> 从文件中读取字符串然后进行反序列化")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 加了 ensure_ascii=False 后 serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v('[1, 2, 3, 4, "\\u4e2d\\u6587"]')])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'r', encoding='utf-8')")]),r("div",[o._v("f_lis = json.load(f)")]),r("div",[r("br")]),r("div",[o._v("print(f_lis)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# [1, 2, 3, 4, '中文']")])],1),r("div",[o._v("f.close()")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("注意: json.dump() 和 json.load() 只能一次性写入 和 一次性读出")])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v(" 一行一行的写入的方法")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("lis = [{'k': '111'}, {'k2': '111'}, {'k3': '111'}]")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'w', encoding='utf-8')")]),r("div",[o._v("for i in lis:")]),r("div",[o._v("    s_json = json.dumps(i)")]),r("div",[o._v("    f.write(s_json + '\\n')")]),r("div",[r("br")]),r("div",[o._v("f.close()")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v('{"k": "111"}')]),r("div",[o._v('{"k2": "111"}')]),r("div",[o._v('{"k3": "111"}')])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("一行一行的读取的方法")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'r', encoding='utf-8')")]),r("div",[o._v("for i in f:")]),r("div",[o._v("    s_json = json.loads(i.strip())")]),r("div",[o._v("    print(s_json)")]),r("div",[r("br")]),r("div",[o._v("f.close()")])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v('{"k": "111"}')]),r("div",[o._v('{"k2": "111"}')]),r("div",[o._v('{"k3": "111"}')])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("格式化输出")])])]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("sort_keys: 是否按 key 排序")])]),r("li",[r("div",[o._v("indent: 按几个空格缩进")])]),r("li",[r("div",[o._v("separators: 按 xxx 进行分隔")])]),r("li",[r("div",[o._v("ensure_ascii: 将 bytes 类型转化为中文显示")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import json")]),r("div",[r("br")]),r("div",[o._v("data = {'username': ['李华', '二愣子'], 'sex': 'male', 'age': 16}")]),r("div",[o._v("json_dic2 = json.dumps(data, sort_keys=True, indent=2, separators=(',', ':'), ensure_ascii=False)")]),r("div",[o._v("print(json_dic2)")])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 输出结果")])],1),r("div",[r("br")]),r("div",[o._v("{")]),r("div",[o._v('  "age":16,')]),r("div",[o._v('  "sex":"male",')]),r("div",[o._v('  "username":[')]),r("div",[o._v('    "李华",')]),r("div",[o._v('    "二愣子"')]),r("div",[o._v("  ]")]),r("div",[o._v("}")])]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[o._v("2.")]),o._v(" "),r("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[o._v("pickle 模块")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("所有的Python数据类型都可以转换为字符串")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("pickle 序列化的内容只有 Python 能理解")])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("部分反序列化要依赖 Python 代码")])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(227, 0, 0)"}},[o._v("序列化出来的是 bytes类型 所以都要以 bytes类型 读出或写入文件")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("pickle.dumps(python中的数据类型) -> 序列化 -> 返回值: "),r("span",{staticStyle:{color:"rgb(57, 57, 57)"}},[o._v("bytes 类型")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import pickle")]),r("div",[r("br")]),r("div",[o._v("dic = {'k1': 1, 'k2': 2, 'k3': 3}")]),r("div",[o._v("p_str = pickle.dumps(dic)")]),r("div",[o._v("print(p_str)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# b'\\x80\\x03}q\\……'")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("pickle.loads(pickle序列化后的bytes类型) -> 反序列化 -> 返回值: xxx数据类型")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import pickle")]),r("div",[r("br")]),r("div",[o._v("dic = {'k1': 1, 'k2': 2, 'k3': 3}")]),r("div",[o._v("p_str = pickle.dumps(dic)")]),r("div",[r("br")]),r("div",[o._v("p_dic = pickle.loads(p_str)")]),r("div",[o._v("print(p_dic) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k3': 3, 'k1': 1, 'k2': 2}")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("pickle.dump(python中的数据类型, 文件句柄) -> 序列化 -> 将序列化后的 bytes类型 以 bytes类型 写入文件里 -> 所写入的文件内容是乱码但是不会影响反序列化操作")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import pickle")]),r("div",[r("br")]),r("div",[o._v("dic = {'k1': 1, 'k2': 2, 'k3': 3}")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'wb')")]),r("div",[r("br")]),r("div",[o._v("pickle.dump(dic, f)")])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v("�}q")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("pickle.load(文件句柄) -> 反序列化 ->  以 bytes类型方式从文件中读取字符串然后进行反序列化")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import pickle")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'rb')")]),r("div",[r("br")]),r("div",[o._v("p_dic = pickle.load(f)")]),r("div",[r("br")]),r("div",[o._v("print(p_dic)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k3': 3, 'k2': 2, 'k1': 1}")])],1)]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# serialization.txt 里的内容")])],1),r("div",[r("br")]),r("div",[o._v("�}q")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("pickle.dump() 和 pickle.load() 可以分次写入或读取")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import pickle")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'wb')")]),r("div",[o._v("pickle.dump({'k1': 1, 'k2': 2}, f)")]),r("div",[o._v("pickle.dump({'k3': 3, 'k4': 4}, f)")]),r("div",[r("br")]),r("div",[o._v("f = open('serialization.txt', 'rb')")]),r("div",[o._v("p_dic1 = pickle.load(f) "),r("font",{attrs:{color:"#41AD1C"}},[o._v(" # {'k1': 1, 'k2': 2}")])],1),r("div",[o._v("p_dic2 = pickle.load(f)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k4': 4, 'k3': 3}")])],1),r("div",[r("br")]),r("div",[o._v("print(p_dic1)")]),r("div",[o._v("print(p_dic2)")])]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[o._v("3.")]),o._v(" "),r("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","overflow-wrap":"break-word","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal","font-weight":"bold","line-height":"1.5"}},[o._v("shelve 模块")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{"font-size":"12pt"}},[o._v("序列化句柄，直接使用句柄操作，非常方便")])])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("序列化 -> 不用手动创建文件，序列化成功后会自动生成相关的文件")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import shelve")]),r("div",[r("br")]),r("div",[o._v("f = shelve.open('shelve_file')  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 生成 shelve_file 的名字的相关文件")])],1),r("div",[r("br")]),r("div",[o._v("f['key'] = {'k1': 1, 'k2': 2}  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 直接对句柄操作就可以存入数据")])],1),r("div",[r("br")]),r("div",[o._v("f.close()")])]),r("div",[r("br")]),r("div",[r("img",{attrs:{"data-filename":"Image.png",src:"/kevin-blog/Python/序列化模块_files/Image.png",type:"image/png"}})]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("反序列化 -> 从相关文件中获取数据")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("import shelve")]),r("div",[r("br")]),r("div",[o._v("f = shelve.open('shelve_file')")]),r("div",[r("br")]),r("div",[o._v("f['key'] = {'k1': 1, 'k2': 2}")]),r("div",[r("br")]),r("div",[o._v("existing = f['key']  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# 取出数据的时候也只需要直接用key获取即可，但是如果key不存在会报错")])],1),r("div",[r("br")]),r("div",[o._v("print(existing) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k2': 2, 'k1': 1}")])],1),r("div",[r("br")]),r("div",[o._v("f.close()")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("writeback=True -> 在序列化完成后可以修改被序列化的数据类型")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 没加 writeback=True")])],1),r("div",[r("br")]),r("div",[o._v("import shelve")]),r("div",[r("br")]),r("div",[o._v("f = shelve.open('shelve_file')")]),r("div",[r("br")]),r("div",[o._v("f['key'] = {'k1': 1, 'k2': 2}")]),r("div",[r("br")]),r("div",[o._v("f['key']['k3'] = 3")]),r("div",[r("br")]),r("div",[o._v("existing = f['key']")]),r("div",[r("br")]),r("div",[o._v("print(existing) "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k2': 2, 'k1': 1}")])],1),r("div",[r("br")]),r("div",[o._v("f.close()")])]),r("div",[r("br")])]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 加了 writeback=True")])],1),r("div",[r("br")]),r("div",[o._v("import shelve")]),r("div",[r("br")]),r("div",[o._v("f = shelve.open('shelve_file', writeback=True)")]),r("div",[r("br")]),r("div",[o._v("f['key'] = {'k1': 1, 'k2': 2}")]),r("div",[r("br")]),r("div",[o._v("f['key']['k3'] = 3")]),r("div",[r("br")]),r("div",[o._v("existing = f['key']")]),r("div",[r("br")]),r("div",[o._v("print(existing)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# {'k1': 1, 'k2': 2, 'k3': 3}")])],1),r("div",[r("br")]),r("div",[o._v("f.close()")])]),r("div",[r("br")])])])])}),[],!1,null,null,null);i.default=t.exports}}]);