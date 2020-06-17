(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{399:function(t,e,i){"use strict";i.r(e);var o=i(25),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",[i("span",[i("div",[i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("1.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("获取上传的文件")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("request.FILES.get('file_name')")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[t._v("        file_obj = request.FILES.get('img_file') "),i("font",{attrs:{color:"#41AD1C"}},[t._v(" # 获取上传文件")])],1),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("2.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("获取上传文件的文件名+后缀")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("request.FILES.get('file_name').name")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[i("br")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')")]),i("div",[t._v("        file_name = file_obj.name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# 等价于")])],1),i("div",[t._v("        file_name = request.FILES.get('img_file').name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[i("br")])],1),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("3.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("获取上传文件的大小")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("request.FILES.get('file_name').size")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[i("br")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')")]),i("div",[t._v("        file_size = file_obj.size  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的大小")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("     # 等价于")])],1),i("div",[t._v("        file_size = request.FILES.get('img_file').size  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的大小")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[i("br")])],1),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("4.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(".read()")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("一次性读取整个上传文件的内容，这个方法只适合于小文件")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("语法: "),i("span",{staticStyle:{"font-size":"12pt"}},[t._v("request.FILES.get('file_name').read()")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[i("br")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件")])],1),i("div",[t._v("        file_name = file_obj.name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[t._v("        with open(file_name, 'wb') as f:")]),i("div",[t._v("            all_data = file_obj.read()  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 一次性读取整个上传文件的内容")])],1),i("div",[t._v("            f.write(all_data)")]),i("div",[i("br")]),i("div",[t._v("        return HttpResponse('上传成功')")]),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("5.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(".")]),i("span",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("chunks")])]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("()")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("按块返回上传文件的内容，通过在for循环中进行迭代，可以将大文件按照块写入服务器中")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("注意: 这个方法和直接循环文件对象是差不多的，不同在于"),i("span",{staticStyle:{"font-size":"12pt"}},[t._v(".")]),t._v("chunks"),i("span",{staticStyle:{"font-size":"12pt"}},[t._v("()方法是一块一块的读取数据，而直接循环文件对象是一行一行的读取数据")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[t._v("语法: "),i("span",{staticStyle:{"font-size":"12pt"}},[t._v("request.FILES.get('file_name').")]),t._v("chunks"),i("span",{staticStyle:{"font-size":"12pt"}},[t._v("()")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[i("br")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件")])],1),i("div",[t._v("        file_name = file_obj.name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[t._v("        with open(file_name, 'wb') as f:")]),i("div",[t._v("            for line in file_obj.chunks():  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 一块一块的读取并且写入")])],1),i("div",[t._v("                f.write(line)")]),i("div",[i("br")]),i("div",[t._v("        return HttpResponse('上传成功')")]),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("6.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(".")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("multiple_chunks")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("(")]),i("span",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("chunk_size=None")])]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v(")")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("根据上传文件的大小，返回True或者False，当上传文件大于2.5M(默认为2.5M，可以调整)时，该方法返回True，否则返回False")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("可以根据")]),t._v(".multiple_chunks()"),i("span",{staticStyle:{"font-size":"12pt"}},[t._v("方法来选择选用.read()方法读取还是采用.chunks()方法")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("语法: request.FILES.get('file_name').multiple_chunks()")])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[i("br")]),i("div",[t._v("        file_obj = request.FILES.get('img_file') "),i("font",{attrs:{color:"#41AD1C"}},[t._v(" # 获取上传文件")])],1),i("div",[t._v("        file_name = file_obj.name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[t._v("        with open(file_name, 'wb') as f:")]),i("div",[t._v("            if file_obj.multiple_chunks():  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 判断上传文件是否超过了2.5M")])],1),i("div",[t._v("                for line in file_obj.chunks():  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 一块一块的读取并且写入")])],1),i("div",[t._v("                    f.write(line)")]),i("div",[t._v("            else:")]),i("div",[t._v("                all_data = file_obj.read()  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 一次性读取整个上传文件的内容")])],1),i("div",[t._v("                f.write(all_data)")]),i("div",[i("br")]),i("div",[t._v("        return HttpResponse('上传成功')")]),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("7.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("使用form表单上传文件的例子")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("a",{attrs:{href:"/kevin-blog/Django/Django 文件上传_files/form_upper_bunken.rar"}},[i("img",{attrs:{alt:"form_upper_bunken.rar",src:"/kevin-blog/Django/Django 文件上传_files/f7982cd917c4a96afd1befbc9e0d0519.png"}})])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("注意: 如果表单中带有要上传的文件，那么一定要修改表单中的 ")]),t._v('enctype="multipart/form-data"')])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"medium","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal"}},[t._v("enctype 参数说明:")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[t._v("application/x-www-form-urlencoded -> 一般用于提交不带文件的表单 -> 默认值")])])]),i("ul",[i("li",[i("div",[t._v("multipart/form-data -> 一般用于提交带文件的表单")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"medium","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal"}},[t._v("enctype 参数 和 ")]),t._v("Content-Type 的关系")])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"medium","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal"}},[t._v("enctype 参数其实就是修改请求头中的 ")]),t._v("Content-Type 参数，而 Content-Type 参数就是让浏览器告诉服务器这次请求数据的格式是什么")])]),i("li",[i("div",[t._v("Content-Type参数的默认值和"),i("span",{staticStyle:{"font-size":"medium","letter-spacing":"normal",orphans:"2","text-indent":"0px","text-transform":"none","white-space":"normal",widows:"2","word-spacing":"0px","-webkit-text-stroke-width":"0px",color:"rgb(0, 0, 0)","font-family":'"Courier New"',"font-variant-caps":"normal","font-variant-ligatures":"normal"}},[t._v("enctype参数一样都是 ")]),t._v("urlencoded")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{color:"rgb(227, 0, 0)"}},[t._v("注意事项: ")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[t._v("如果表单中没有上传文件，那么使用默认值提交就可以（即: 无需修改enctype参数），Django会将表单提交过来的数据放到 request.GET/POST 中")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[t._v("如果表单中有上传文件，"),i("span",{staticStyle:{"font-size":"12pt"}},[t._v("那么一定要修改表单中的 ")]),t._v('enctype="multipart/form-data"，Django会将上传文件以外的数据放到 request.GET/POST 中，将上传文件放到 reques.FILES 中')])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[t._v("如果表单中有上传文件，且没有修改 enctype=\"multipart/form-data\"，Django会将表单提交过来的数据放到 request.GET/POST 中，那么通过 request.GET/POST.get('file_name') 获取到的只是上传文件的文件名+后缀，不是一个文件对象")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# views.py")])],1),i("div",[i("br")]),i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[t._v("        username = request.POST.get('username')")]),i("div",[t._v("        password = request.POST.get('password')")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件")])],1),i("div",[t._v("        file_name = file_obj.name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[t._v("        with open(file_name, 'wb') as f:")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# for line in file_obj:  # 一行一行的读取并且写入")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("            # 等价于")])],1),i("div",[t._v("            for line in file_obj.chunks():  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 一块一块的读取并且写入")])],1),i("div",[t._v("                f.write(line)")]),i("div",[t._v("        return HttpResponse('上传成功')")]),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# xxx.html")])],1),i("div",[i("br")]),i("div",[t._v('<form action="" method=post '),i("font",{attrs:{color:"#FA7A00"}},[t._v('enctype="multipart/form-data"')]),t._v(">")],1),i("div",[t._v("    {% csrf_token %}")]),i("div",[t._v('    <p><input type="text" name="username" id="" placeholder="用户名"></p>')]),i("div",[t._v('    <p><input type="password" name="password" id="" placeholder=\'密码\'></p>')]),i("div",[t._v('    <p><input type="file" name="img_file" id=""></p>')]),i("div",[t._v('    <input type="submit" value="提交">')]),i("div",[t._v("</form>")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("8.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("将上传文件保存到 media 文件夹中")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("div",[i("a",{attrs:{href:"/kevin-blog/Django/Django 文件上传_files/media_upper_bunken.rar"}},[i("img",{attrs:{alt:"media_upper_bunken.rar",src:"/kevin-blog/Django/Django 文件上传_files/b13e4d612aea90f39b93f9e9239c7739.png"}})])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[i("br")])]),i("ul",[i("li",[i("div",[t._v("将上传文件保存到 media 文件夹中的前提是配置了media")])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("使用 settings.py 中 media 文件夹路径的配置项进行上传文件保存路径的拼接")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# views.py")])],1),i("div",[i("br")]),i("div",[t._v("from django.shortcuts import render, HttpResponse")]),i("div",[t._v("from upper_bunken import settings")]),i("div",[t._v("import os")]),i("div",[i("br")]),i("div",[i("br")]),i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[t._v("        username = request.POST.get('username')")]),i("div",[t._v("        password = request.POST.get('password')")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件")])],1),i("div",[t._v("        file_name = file_obj.name  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 获取上传文件的文件名+后缀")])],1),i("div",[i("br")]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("path")]),t._v(" = os.path.join(settings.MEDIA_ROOT, file_name)  "),i("font",{attrs:{color:"#FA7A00"}},[t._v("# 使用 settings.py 中的 media 配置项的路径进行拼接")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v(" # 等同于")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("        # path = 'media/' + file_name")]),t._v(" "),i("font",{attrs:{color:"#FA7A00"}},[t._v("# 不建议这么写：")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span",[t._v("   # 一、")]),t._v("因为当 media 文件夹被改动了，那么这里的路径也需要改动，但是使用上面的方法就无需改动，只要修改 settings.py 中的 media 配置项就可以了")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span"),i("span",[t._v("   # 二、因为在 linux 中路径分割符是 \\，而不是/，如果在linux下运行有可能会报错")]),i("br")])],1),i("div",[i("br")]),i("div",[t._v("        with open("),i("font",{attrs:{color:"#FA7A00"}},[t._v("path")]),t._v(", 'wb') as f:")],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# for line in file_obj:  # 一行一行的读取并且写入")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("            # 等价于")])],1),i("div",[t._v("            for line in file_obj.chunks():  "),i("font",{attrs:{color:"#41AD1C"}},[t._v("# 一块一块的读取并且写入")])],1),i("div",[t._v("                f.write(line)")]),i("div",[i("br")]),i("div",[t._v("        return HttpResponse('上传成功')")]),i("div",[i("br")]),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("# xxx.html")])],1),i("div",[i("br")]),i("div",[t._v('<form action="" method=post enctype="multipart/form-data">')]),i("div",[t._v("    {% csrf_token %}")]),i("div",[t._v('    <p><input type="text" name="username" id="" placeholder="用户名"></p>')]),i("div",[t._v('    <p><input type="password" name="password" id="" placeholder=\'密码\'></p>')]),i("div",[t._v('    <p><input type="file" name="img_file" id=""></p>')]),i("div",[t._v('    <input type="submit" value="提交">')]),i("div",[t._v("</form>")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[t._v("8.")]),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}}),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[t._v("使用Ajax上传文件的例子")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt",color:"rgb(227, 0, 0)"}},[t._v("注意事项:")]),i("span",{staticStyle:{"font-size":"12pt"}}),t._v("Ajax上传文件的注意事项和Form表单差不多，都需要通过修改某些参数后才能进行提交")])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("# views.py")])]),i("div",[i("br")]),i("div",[t._v("def upload_file(request):")]),i("div",[t._v("    if request.method == 'POST':")]),i("div",[t._v("        username = request.POST.get('username')")]),i("div",[t._v("        password = request.POST.get('password')")]),i("div",[t._v("        file_obj = request.FILES.get('img_file')  "),i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("# 获取上传文件")])]),i("div",[t._v("        file_name = file_obj.name  "),i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("# 获取上传文件的文件名+后缀")])]),i("div",[t._v("        with open(file_name, 'wb') as f:")]),i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("# for line in file_obj:  # 一行一行的读取并且写入")])]),i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("            # 等价于")])]),i("div",[t._v("            for line in file_obj.chunks():  "),i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("# 一块一块的读取并且写入")])]),i("div",[t._v("                f.write(line)")]),i("div",[t._v("        return HttpResponse('上传成功')")]),i("div",[t._v("    return render(request, 'upload_file.html')")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[t._v("写法一 -> 推荐使用")])])]),i("div",[i("br")]),i("div",[i("a",{attrs:{href:"/kevin-blog/Django/Django 文件上传_files/ajax1_upper_bunken.rar"}},[i("img",{attrs:{alt:"ajax1_upper_bunken.rar",src:"/kevin-blog/Django/Django 文件上传_files/416753de0ce6c9127bc9335d13b7a825.png"}})])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[t._v("# xxx.html")])]),i("div",[i("br")]),i("div",[t._v("<div>")]),i("div",[t._v("    {% csrf_token %}")]),i("div",[t._v('    <p><input type="text" name="username" id="username" placeholder="用户名"></p>')]),i("div",[t._v('    <p><input type="password" name="password" id="password" placeholder=\'密码\'></p>')]),i("div",[t._v('    <p><input type="file" name="img_file" id="img_file"></p>')]),i("div",[t._v('    <button id="btn">提交</button>')]),i("div",[t._v("</div>")]),i("div",[i("br")]),i("div",[t._v('<script type="text/javascript">')]),i("div",[t._v("    $(function () {")]),i("div",[t._v("        $('#btn').click(function () {")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v(" // 将数据添加到 FormData 里面")])],1),i("div",[t._v("            var formData = new FormData();")]),i("div",[t._v("            formData.append('username', $('#username').val());")]),i("div",[t._v("            formData.append('password', $('#password').val());")]),i("div",[t._v("            formData.append('csrfmiddlewaretoken', $(\"[name='csrfmiddlewaretoken']\").val());")]),i("div",[t._v("            formData.append('img_file', $('#img_file')[0].files[0]);")]),i("div",[i("br")]),i("div",[t._v("            $.ajax({")]),i("div",[t._v("                url: '/upload_file/',")]),i("div",[t._v('                type: "POST",')]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("processData: false,  ")]),i("font",{attrs:{color:"#41AD1C"}},[t._v("// 告诉jQuery不要去处理发送的数据")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("                contentType: false,  ")]),i("font",{attrs:{color:"#41AD1C"}},[t._v("// 告诉jQuery不要去设置Content-Type请求头")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}}),i("font",{attrs:{color:"#000000"}},[t._v("data: formData,")])],1),i("div",[t._v("                success: function (data) {")]),i("div",[t._v("                    console.log(data)")]),i("div",[t._v("                }")]),i("div",[t._v("            })")]),i("div",[t._v("        })")]),i("div",[t._v("    })")]),i("div",[t._v("<\/script>")])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("写法二")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[t._v("有点问题: 就算Ajax设置了POST请求，但是在发送的时候还是GET请求")])])])])]),i("div",[i("br")]),i("div",[i("a",{attrs:{href:"/kevin-blog/Django/Django 文件上传_files/ajax2_upper_bunken.rar"}},[i("img",{attrs:{alt:"ajax2_upper_bunken.rar",src:"/kevin-blog/Django/Django 文件上传_files/cc37221cfe5bc13d79a27f1a29a2f8e9.png"}})])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{staticStyle:{"font-size":"9pt"},attrs:{color:"#41AD1C"}},[t._v("# xxx.html")])],1),i("div",[i("font",{staticStyle:{"font-size":"9pt"},attrs:{color:"#41AD1C"}},[i("br")])],1),i("div",[t._v('<form id="upload-form">')]),i("div",[t._v("    {% csrf_token %}")]),i("div",[t._v('    <p><input type="text" name="username" id="username" placeholder="用户名"></p>')]),i("div",[t._v('    <p><input type="password" name="password" id="password" placeholder=\'密码\'></p>')]),i("div",[t._v('    <p><input type="file" name="img_file" id="img_file"></p>')]),i("div",[t._v('    <button id="btn">提交</button>')]),i("div",[t._v("</form>")]),i("div",[i("span",{staticStyle:{"font-size":"9pt",color:"rgb(51, 51, 51)","font-family":"Monaco"}},[i("br")])]),i("div",[t._v('<script type="text/javascript">')]),i("div",[t._v("    $(function () {")]),i("div",[t._v("        $('#btn').click(function () {")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[t._v("// 将数据添加到 FormData 里面")])],1),i("div",[t._v("            var form = $('#upload-form')[0];")]),i("div",[t._v("            var formData = new FormData(form);")]),i("div",[i("br")]),i("div",[t._v("            $.ajax({")]),i("div",[t._v("                url: '/upload_file/',")]),i("div",[t._v('                type: "POST",')]),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("processData: false,  ")]),i("font",{attrs:{color:"#41AD1C"}},[t._v("// 告诉jQuery不要去处理发送的数据")])],1),i("div",[i("font",{attrs:{color:"#FA7A00"}},[t._v("                contentType: false,  ")]),i("font",{attrs:{color:"#41AD1C"}},[t._v("// 告诉jQuery不要去设置Content-Type请求头")])],1),i("div",[t._v("                data: formData,")]),i("div",[t._v("                success: function (data) {")]),i("div",[t._v("                    console.log(data)")]),i("div",[t._v("                }")]),i("div",[t._v("            })")]),i("div",[t._v("        })")]),i("div",[t._v("    })")]),i("div",[t._v("<\/script>")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",[i("br")])]),i("div",[i("br")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);