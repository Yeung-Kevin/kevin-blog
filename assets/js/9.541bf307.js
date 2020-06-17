(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(o,e,r){"use strict";r.r(e);var i=r(25),d=Object(i.a)({},(function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("div",[r("span",[r("div",[r("ul",[r("li",[r("div",[o._v("该章节中所用到的表")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# models.py")])],1),r("div",[r("br")]),r("div",[o._v("from django.db import models")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("class Book(models.Model):")]),r("div",[o._v("    title = models.CharField(max_length=15, verbose_name='书名')")]),r("div",[o._v("    price = models.IntegerField(verbose_name='价格')")]),r("div",[o._v("    publish = models.ForeignKey(to='Publish', verbose_name='出版社')")]),r("div",[o._v("    author = models.ManyToManyField(to='Author', verbose_name='作者')")]),r("div",[r("br")]),r("div",[o._v("    def __str__(self):")]),r("div",[o._v("        return self.title")]),r("div",[r("br")]),r("div",[o._v("    class Meta:")]),r("div",[o._v('        verbose_name = "书籍"')]),r("div",[o._v("        verbose_name_plural = verbose_name")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("class Publish(models.Model):")]),r("div",[o._v("    title = models.CharField(max_length=15)")]),r("div",[r("br")]),r("div",[o._v("    def __str__(self):")]),r("div",[o._v("        return self.title")]),r("div",[r("br")]),r("div",[o._v("    class Meta:")]),r("div",[o._v("        verbose_name = '出版社'")]),r("div",[o._v("        verbose_name_plural = verbose_name")]),r("div",[r("br")]),r("div",[r("br")]),r("div",[o._v("class Author(models.Model):")]),r("div",[o._v("    name = models.CharField(max_length=15)")]),r("div",[r("br")]),r("div",[o._v("    def __str__(self):")]),r("div",[o._v("        return self.name")]),r("div",[r("br")]),r("div",[o._v("    class Meta:")]),r("div",[o._v("        verbose_name = '作者'")]),r("div",[o._v("        verbose_name_plural = verbose_name")])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(255, 0, 0)"}},[o._v("._meta.app_label")]),o._v(" -> 获取该表类所在app的app名称")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("app_label = Book._meta.app_label")]),r("div",[r("br")]),r("div",[o._v("print(app_label) "),r("font",{attrs:{color:"#41AD1C"}},[o._v(" # app01")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(255, 0, 0)"}},[o._v("._meta.model_name")]),o._v(" -> 获取该表类所对应的表名（字符串类型）")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("model_name = Book._meta.model_name")]),r("div",[r("br")]),r("div",[o._v("print(model_name)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# book")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[r("span",{staticStyle:{color:"rgb(255, 0, 0)"}},[o._v("._meta.get_field('字段名')")]),o._v(" -> 获取该类内指定字段对象（即: 该字段类所实例化出来的对象）")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("field_obj = Book._meta.get_field('title')")]),r("div",[r("br")]),r("div",[o._v("print(type(field_obj))  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# <class 'django.db.models.fields.CharField'>")])],1)]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("使用实例")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 获取 title 字段中 verbose_name 属性的值")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[r("br")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 注意: 如果没有设置 verbose_name，那么默认返回该字段属性名")])],1),r("div",[r("br")]),r("div",[o._v("verbose_name = Book._meta.get_field('title').verbose_name")]),r("div",[r("br")]),r("div",[o._v("print(verbose_name)  "),r("font",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 书名 （如果没有设置 verbose_name 就会返回 title）")])],1)]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 获取 title 字段中 max_length 属性的值")])],1),r("div",[r("br")]),r("div",[o._v("max_length = Book._meta.get_field('title').max_length")]),r("div",[r("br")]),r("div",[o._v("print(max_length) "),r("font",{attrs:{color:"#41AD1C"}},[o._v(" # 15")])],1)]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("._meta.fields -> 获取该表类内所有字段对象（即: 该表类中所有字段类所实例化出来的对象）")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("fields = Book._meta.fields")]),r("div",[r("br")]),r("div",[o._v("print(fields)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# (<django.db.models.fields.AutoField: id>, <django.db.models.fields.CharField: title>, <django.db.models.fields.IntegerField: price>, <django.db.models.fields.related.ForeignKey: publish>)")])],1)]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("使用实例")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 获取下标为1的字段对象中 verbose_name 属性的值")])],1),r("div",[r("br")]),r("div",[r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 注意: 如果没有设置 verbose_name，那么默认返回该字段属性名")])]),r("div",[r("br")]),r("div",[o._v("fields_list = Book._meta.fields")]),r("div",[o._v("verbose_name = fields_list[1].verbose_name")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 等同于")])],1),r("div",[r("br")]),r("div",[o._v("verbose_name = Book._meta.fields[1].verbose_name")]),r("div",[r("br")]),r("div",[o._v("print(verbose_name)  "),r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 书名 （如果没有设置 verbose_name 就会返回 title）")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 获取下标为1的字段对象中 max_length 属性的值")])],1),r("div",[r("br")]),r("div",[o._v("fields_list = Book._meta.fields")]),r("div",[o._v("max_length = fields_list[1].max_length")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 等同于")])],1),r("div",[r("font",{attrs:{color:"#41AD1C"}},[r("br")])],1),r("div",[o._v("max_length = Book._meta.fields[1].max_length")]),r("div",[r("br")]),r("div",[o._v("print(max_length) "),r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v(" # 15")])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("._meta.get_fields() -> 获取该表类内所有字段对象（即: 该表类中所有字段类所实例化出来的对象），包含反向关联字段")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("fields = Book._meta.get_fields()")]),r("div",[r("br")]),r("div",[o._v("print(fields) "),r("font",{attrs:{color:"#41AD1C"}},[o._v(" # (<django.db.models.fields.AutoField: id>, <django.db.models.fields.CharField: title>, <django.db.models.fields.IntegerField: price>, <django.db.models.fields.related.ForeignKey: publish>,")]),o._v(" "),r("font",{attrs:{color:"#FA7A00"}},[o._v("<django.db.models.fields.related.ManyToManyField: author>")]),r("font",{attrs:{color:"#41AD1C"}},[o._v(")")])],1)]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("使用实例")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 获取多对多字段对象中 verbose_name 属性的值")])],1),r("div",[r("br")]),r("div",[r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 注意: 如果没有设置 verbose_name，那么默认返回该字段属性名")])]),r("div",[r("br")]),r("div",[o._v("fields = Book._meta.get_fields()")]),r("div",[o._v("verbose_name = fields[4].verbose_name")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 等同于")])],1),r("div",[r("br")]),r("div",[o._v("verbose_name = Book._meta.get_fields()[4].verbose_name")]),r("div",[r("br")]),r("div",[o._v("print(verbose_name)  "),r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 书名 （如果没有设置 verbose_name 就会返回 title）")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 获取下标为1的字段对象中 max_length 属性的值")])],1),r("div",[r("br")]),r("div",[o._v("fields = Book._meta.get_fields()")]),r("div",[o._v("max_length = fields[1].max_length")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 等同于")])],1),r("div",[r("br")]),r("div",[o._v("max_length = Book._meta.get_fields()[1].max_length")]),r("div",[r("br")]),r("div",[o._v("print(max_length) "),r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v(" # 15")])])]),r("div",[r("br")]),r("ul",[r("li",[r("div",[o._v("._meta.many_to_many -> 获取该表类内所有多对多字段对象（即: 该表类中所有多对多字段类所实例化出来的对象）")])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[o._v("many_to_many_list = Book._meta.many_to_many")]),r("div",[r("br")]),r("div",[o._v("print(many_to_many_list)  "),r("font",{attrs:{color:"#41AD1C"}},[o._v("# (<django.db.models.fields.related.ManyToManyField: author>,)")])],1)]),r("div",[r("br")]),r("ul",[r("ul",[r("li",[r("div",[o._v("使用实例")])])])]),r("div",[r("br")]),r("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[r("div",[r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 获取下标为0的字段对象中 verbose_name 属性的值")])]),r("div",[r("br")]),r("div",[r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 注意: 如果没有设置 verbose_name，那么默认返回该字段属性名")])]),r("div",[r("br")]),r("div",[o._v("many_to_many_list = Book._meta.many_to_many")]),r("div",[o._v("verbose_name = many_to_many_list[0].verbose_name")]),r("div",[r("br")]),r("div",[r("font",{attrs:{color:"#41AD1C"}},[o._v("# 等同于")])],1),r("div",[r("br")]),r("div",[o._v("verbose_name = Book._meta.many_to_many[0].verbose_name")]),r("div",[r("br")]),r("div",[o._v("print(verbose_name)  "),r("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 书名 （如果没有设置 verbose_name 就会返回 title）")])])]),r("div",[r("br")])])])])])}),[],!1,null,null,null);e.default=d.exports}}]);