(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{581:function(t,o,i){"use strict";i.r(o);var e=i(25),n=Object(e.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",[i("span",[i("div",[i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("1.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" uuid的介绍")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[t._v("UUID（Universally Unique Identifier）是通用唯一识别码，在许多领域用作标识")])],1)])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("2.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" uuid1()")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[t._v("根据当前的时间戳和MAC地址生成的，最后的12个字符对应的就是MAC地址（唯一的，即: 网卡识别号）。但是生成后暴露了MAC地址不推荐使用")])],1)])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("import uuid")]),i("div",[i("br")]),i("div",[t._v("uuid1 = uuid."),i("font",{attrs:{color:"#FA7A00"}},[t._v("uuid1")]),t._v("()  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 0826fef6-ba70-11e9-bf27-")]),i("font",{attrs:{color:"#FA7A00"}},[t._v("08626629749c")])],1)]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("3.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" uuid3()")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[t._v("基于命名空间和一个字符的MD5加密的UUID")])],1)])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("import uuid")]),i("div",[i("br")]),i("div",[t._v("uuid3 = uuid."),i("font",{attrs:{color:"#FA7A00"}},[t._v("uuid3")]),t._v("(uuid.NAMESPACE_DNS, 'Kevin')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 2796a722-d263-307d-9956-8bb07d7d4eb8")])],1)]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("4.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" uuid4()")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[t._v("生成一个随机的uuid，可能会遇到重复的，但是几率很少 -> 推荐使用")])],1)])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("import uuid")]),i("div",[i("br")]),i("div",[t._v("uuid4 = uuid."),i("font",{attrs:{color:"#FA7A00"}},[t._v("uuid4")]),t._v("()  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 2b2a3b63-7401-4db1-83f8-04a6e14e920e")])],1)]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("5.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" uuid5()")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("基于命名空间和一个字符的SHA-1散列加密的uuid，和 uuid 类似就是使用了不同的加密方式")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("import uuid")]),i("div",[i("br")]),i("div",[t._v("uuid5 = uuid."),i("font",{attrs:{color:"#FA7A00"}},[t._v("uuid5")]),t._v("(uuid.NAMESPACE_DNS, 'Kevin')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 46ce0385-0e2b-5ede-8279-9cd98c268170")])],1)]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",[i("br")])])])])])}),[],!1,null,null,null);o.default=n.exports}}]);