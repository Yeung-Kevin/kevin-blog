(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{606:function(i,o,t){"use strict";t.r(o);var r=t(25),s=Object(r.a)({},(function(){var i=this,o=i.$createElement,t=i._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("div",[t("span",[t("div",[t("div",[t("div",[t("span",{staticStyle:{"font-size":"14pt"}},[i._v("最好不要循环删除列表和字典中的值容易报错或出现和预想不一样的结果")])]),t("div",[t("br")]),t("div",[t("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt"}},[t("span",{staticStyle:{"font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[i._v("1. 循环删除列表")])])]),t("div",[t("br")]),t("ul",[t("li",[t("div",[t("span",{staticStyle:{"font-size":"12pt"}},[i._v("报错")])])])]),t("div",[t("br")]),t("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[t("div",[i._v("lists = [1, 2, 3, 4, 5, 6]")]),t("div",[t("br")]),t("div",[i._v("for i in range(len(lists)):")]),t("div",[i._v("    del lists[i]")]),t("div",[i._v("    print(lists)")])]),t("div",[t("br")])]),t("ul",[t("li",[t("div",[i._v("不会报错 -> 因为 list 已经存储到 for 循环中了 -> 但出现的结果和预想的不一样")])])]),t("div",[t("br")]),t("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[t("div",[i._v("lists = [1, 2, 3, 4, 5, 6]")]),t("div",[i._v("for i in lists:")]),t("div",[i._v("    del lists[lists.index(i)]")]),t("div",[i._v("    print(lists) ")]),t("div",[i._v("print(lists) "),t("font",{attrs:{color:"#41AD1C"}},[i._v("# [2, 4, 6]")])],1)]),t("div",[t("br")]),t("ul",[t("li",[t("div",[i._v("正确的删除方法 -> 方向删除，从后往前删")])])]),t("div",[t("br")]),t("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[t("div",[i._v("for i in range(len(lis) - 1, -1, -1):")]),t("div",[i._v("    del lis[i]")])]),t("div",[t("br")]),t("div",[t("span",{staticStyle:{"white-space":"pre-wrap","font-size":"14pt"}},[t("span",{staticStyle:{"font-size":"14pt","font-family":'"Courier New"',"font-weight":"bold","line-height":"1.75"}},[i._v("1.2 小练习")])])]),t("div",[t("br")]),t("ul",[t("li",[t("div",[t("span",{staticStyle:{"white-space":"pre-wrap"}},[t("span",{staticStyle:{"font-size":"12pt","font-family":'"Courier New"',"line-height":"1.75"}},[i._v("删除列表中偶位数的值")])])])])]),t("div",[t("br")]),t("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[t("div",[t("font",{attrs:{color:"#41AD1C"}},[i._v("# 方法一 -> 使用切片")])],1),t("div",[i._v("lists = [11, 22, 33, 44, 55]")]),t("div",[t("span",{staticStyle:{"font-size":"9pt",color:"rgb(51, 51, 51)","font-family":"Monaco"}},[i._v("lists = ")]),i._v("lists[::2] "),t("font",{attrs:{color:"#41AD1C"}},[i._v("# [11, 33, 55]")])],1)]),t("div",[t("br")]),t("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[t("div",[t("font",{attrs:{color:"#41AD1C"}},[i._v("# 方法二 -> 添加到新的数组当中然后再重新赋值")])],1),t("div",[i._v("lists = [11, 22, 33, 44, 55]")]),t("div",[i._v("list2 = []")]),t("div",[i._v("for i in lists:")]),t("div",[i._v("    if lists.index(i) % 2 == 0:")]),t("div",[i._v("        list2.append(i)")]),t("div",[i._v("lists = list2 "),t("font",{attrs:{color:"#41AD1C"}},[i._v("# [11, 33, 55]")])],1)]),t("div",[t("br")]),t("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[t("div",[t("font",{attrs:{color:"#41AD1C"}},[i._v("# 方法三 -> 反向删除")])],1),t("div",[i._v("lists = [11, 22, 33, 44, 55]")]),t("div",[i._v("for i in range(len(lis) - 1, -1, -1):")]),t("div",[i._v("    if i % 2 == 1:")]),t("div",[i._v("        del lis[i]")]),t("div",[t("span",{staticStyle:{"font-size":"9pt",color:"rgb(51, 51, 51)","font-family":"Monaco"}},[i._v("print(")]),i._v("lists"),t("span",{staticStyle:{"font-size":"9pt",color:"rgb(51, 51, 51)","font-family":"Monaco"}},[i._v(")")]),i._v(" "),t("font",{attrs:{color:"#41AD1C"}},[t("span",{staticStyle:{"font-size":"9pt","font-family":"Monaco"}},[i._v("# ")]),i._v("[11, 33, 55]")])],1)]),t("div",[t("br")])]),t("div",[t("br")])])])])}),[],!1,null,null,null);o.default=s.exports}}]);