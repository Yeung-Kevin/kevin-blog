(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{587:function(t,o,i){"use strict";i.r(o);var n=i(25),e=Object(n.a)({},(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",[i("span",[i("div",[i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("1.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" 公钥和私钥的介绍")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[t._v("私钥会利用"),i("font",{staticStyle:{color:"rgb(255, 0, 0)"}},[t._v("RSA算法")]),t._v("生成对应的公钥")],1)],1)])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("私钥不能给别人，公钥可以")])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("利用私钥加密的数据只有公钥可以解开")])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("利用公钥加密的数据只有私钥可以解开")])])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("2.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" 公钥和私钥的能干什么")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[t._v("加密数据")])]),i("ul",[i("li",[i("div",[t._v("公钥加密")])]),i("li",[i("div",[t._v("作用: 保护数据")])]),i("li",[i("div",[t._v("使用场景: 文章加密，且只能自己一个人查看，这时候就使用公钥加密，因为只有私钥才能解开，且私钥只能自身持有不能给别人")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("数字签名")])]),i("ul",[i("li",[i("div",[t._v("私钥加密")])]),i("li",[i("div",[t._v("作用: 确认身份")])]),i("li",[i("div",[t._v("使用场景: 文章加密，且只有特定几个人（持有公钥的人）才能查看")])])])]),i("div",[i("br")]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("3.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" 公私钥加密文件使用图解")])]),i("div",[i("br")]),i("div",[i("img",{attrs:{"data-filename":"RSA加密解密图解 (1).png",src:"/kevin-blog/Python/公钥和私钥_files/RSA加密解密图解 (1).png",type:"image/png"}})]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("4.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" 使用公私钥的模块")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("pip3 install pycryptodome -i https://pypi.douban.com/simple  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 使用豆瓣的镜像")])],1)]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("5.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(" 公私钥文件的编写规范")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{color:"rgb(255, 0, 0)"}},[t._v("注意: 一定要按照python所指定的格式编写公私钥文件，否则python无法识别出这是公私钥文件")])],1)])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[t._v("公钥文件")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{"font-size":"9pt","font-family":"Monaco"}},[i("font",{attrs:{color:"#41AD1C"}},[t._v("# 公钥.txt")])],1)]),i("div",[i("span",{staticStyle:{"font-size":"9pt","font-family":"Monaco"}},[i("font",{attrs:{color:"#41AD1C"}},[i("br")])],1)]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("-----BEGIN PUBLIC KEY-----")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("公钥内容")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("-----END PUBLIC KEY-----")])],1)]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("私钥文件")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{"font-size":"9pt","font-family":"Monaco"}},[i("font",{attrs:{color:"#41AD1C"}},[t._v("# 私钥.txt")])],1)]),i("div",[i("span",{staticStyle:{"font-size":"9pt","font-family":"Monaco"}},[i("font",{attrs:{color:"#FA7A00"}},[i("br")])],1)]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("-----BEGIN RSA PRIVATE KEY-----")])],1),i("div",[i("font",{attrs:{color:"#41AD1C",face:"Monaco"}},[t._v("私钥内容")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("-----END RSA PRIVATE KEY-----")])],1)]),i("div",[i("br")])])])])])}),[],!1,null,null,null);o.default=e.exports}}]);