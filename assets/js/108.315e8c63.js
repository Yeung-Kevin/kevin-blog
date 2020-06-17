(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{462:function(o,t,i){"use strict";i.r(t);var r=i(25),e=Object(r.a)({},(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[i("div",[i("span",[i("div",[i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("1.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("current_app 的介绍")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[o._v("current_app 等同于 Flask 所实例化出来的 app 对象")])])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("2.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("current_app 的使用")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt",color:"rgb(227, 0, 0)"}},[o._v("current_app 一般用于在使用蓝图后导入配置文件时所使用")])],1)])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("以前的写法")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# app.py")])],1),i("div",[i("br")]),i("div",[o._v("from flask import Flask")]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[o._v("from settings import Config")])],1),i("div",[i("br")]),i("div",[o._v("app = Flask(__name__)")]),i("div",[o._v("app.config.from_object('settings.Config')")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[o._v("@app.route('/index')")]),i("div",[o._v("def index():")]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[o._v("secret_key = Config.SECRET_KEY")])],1),i("div",[o._v("    print(secret_key)  "),i("font",{attrs:{color:"#41AD1C"}},[o._v("# session_salt")])],1),i("div",[o._v("    return 'index_html'")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[o._v("if __name__ == '__main__':")]),i("div",[o._v("    app.run()")])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# settings.py")])],1),i("div",[i("br")]),i("div",[o._v("class Config(object):")]),i("div",[o._v("    DEBUG = True")]),i("div",[o._v("    SECRET_KEY = 'session_salt'")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("使用 current_app 的写法")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# app.py")])]),i("div",[i("br")]),i("div",[o._v("from flask import Flask, "),i("font",{attrs:{color:"#FA7A00"}},[o._v("current_app")])],1),i("div",[i("br")]),i("div",[o._v("app = Flask(__name__)")]),i("div",[o._v("app.config.from_object('settings.Config')")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[o._v("@app.route('/index')")]),i("div",[o._v("def index():")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v(" # 写法一")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[o._v("secret_key1 = current_app.config.get('SECRET_KEY')")])],1),i("div",[o._v("    print(secret_key1) "),i("font",{attrs:{color:"#41AD1C"}},[o._v(" # session_salt")])],1),i("div",[i("br")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 写法二")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[o._v("secret_key2 = current_app.config['SECRET_KEY']")])],1),i("div",[o._v("    print(secret_key2)  "),i("font",{attrs:{color:"#41AD1C"}},[o._v("# session_salt")])],1),i("div",[i("br")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 等同于")])],1),i("div",[i("br")]),i("div",[o._v("    secret_key3 = app.config['SECRET_KEY']")]),i("div",[o._v("    print(secret_key3)  "),i("font",{attrs:{color:"#41AD1C"}},[o._v("# session_salt")])],1),i("div",[o._v("    return 'index_html'")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[o._v("if __name__ == '__main__':")]),i("div",[o._v("    app.run()")])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# settings.py")])]),i("div",[i("br")]),i("div",[o._v("class Config(object):")]),i("div",[o._v("    DEBUG = True")]),i("div",[o._v("    SECRET_KEY = 'session_salt'")])]),i("div",[i("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);