(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{514:function(o,t,i){"use strict";i.r(t);var r=i(25),e=Object(r.a)({},(function(){var o=this,t=o.$createElement,i=o._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[i("div",[i("span",[i("div",[i("div",[i("div",[i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("1.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("计划任务的介绍")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("后台运行，到了预定的时间就会自动执行的任务，前提是：事先手动将计划任务设定好")])])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("2.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("计划任务的注意事项")])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"},attrs:{color:"#E30000"}},[i("span",{staticStyle:{"font-size":"12pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("编写计划任务的时候，命令必须使用绝对路径（which 命令 -> 查看命令的绝对路径）")])])],1)])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("计划任务执行的命令 是否存在，软件是否安装")])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("确保crontab服务运行")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 命令一")])],1),i("div",[i("br")]),i("div",[o._v("systemctl status crond")]),i("div",[i("br")]),i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 命令二")])],1),i("div",[i("br")]),i("div",[o._v("ps -ef | grep crond")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("检测crontab是否开机启动")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("systemctl is-enabled crond")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("3.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("crontab 的配置文件")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 命令")])],1),i("div",[i("br")]),i("div",[o._v("vim /etc/crontab")])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 配置文件内容")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[i("br")])],1),i("div",[o._v("SHELL=/bin/bash")]),i("div",[o._v("PATH=/sbin:/bin:/usr/sbin:/usr/bin")]),i("div",[o._v("MAILTO=root")]),i("div",[i("br")]),i("div",[o._v("# For details see man 4 crontabs")]),i("div",[i("br")]),i("div",[o._v("# Example of job definition:")]),i("div",[o._v("# .---------------- minute (0 - 59)")]),i("div",[o._v("# |  .------------- hour (0 - 23)")]),i("div",[o._v("# |  |  .---------- day of month (1 - 31)")]),i("div",[o._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),i("div",[o._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),i("div",[o._v("# |  |  |  |  |")]),i("div",[o._v("# *  *  *  *  * user-name  command to be executed")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("4.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt"}},[i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("计划任务的编写格式")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v(".---------------- 分钟 (0 - 59)")])],1),i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v("| ")]),o._v(" "),i("font",{attrs:{color:"#D100FF"}},[o._v(".------------- 小时 (0 - 23)")])],1),i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#D100FF"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#EB0073"}},[o._v(".---------- 日期 (1 - 31)")])],1),i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#D100FF"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#EB0073"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#FA7A00"}},[o._v(".------- 月份 (1 - 12) OR jan,feb,mar,apr ...")])],1),i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#D100FF"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#EB0073"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#FA7A00"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#C6C500"}},[o._v(".---- 星期 (0 - 6) (星期天=0 或 7) 或 使用缩写的英文星期 sun,mon,tue,wed,thu,fri,sat")])],1),i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v("| ")]),o._v(" "),i("font",{attrs:{color:"#D100FF"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#EB0073"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#FA7A00"}},[o._v("|")]),o._v(" "),i("font",{attrs:{color:"#C6C500"}},[o._v("|")])],1),i("div",[i("font",{attrs:{color:"#3665EE"}},[o._v("*")]),o._v(" "),i("font",{attrs:{color:"#9E00F3"}},[o._v("*")]),o._v(" "),i("font",{attrs:{color:"#EB0073"}},[o._v("*")]),o._v(" "),i("font",{attrs:{color:"#FBCD5F"}}),i("font",{attrs:{color:"#FFAF00"}},[o._v("*")]),o._v(" "),i("font",{attrs:{color:"#C6C500"}},[o._v(" * ")]),i("font",{attrs:{color:"#000000"}},[o._v("绝对路径的命令或脚本")])],1)]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-weight":"bold"}},[o._v("编写计划任务的格式")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("格式: "),i("span",{staticStyle:{color:"rgb(186, 0, 255)"}},[o._v("*  *  *  *  * 命令或脚本")])])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-weight":"bold"}},[o._v("编写计划任务格式的中文说明")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("格式: "),i("span",{staticStyle:{color:"rgb(186, 0, 255)"}},[o._v("分钟(0-59)　小时(0-23)　日期(1-31)　月份(1-12)　星期(0-6, 0 或 7代表星期天)　绝对路径的命令或脚本")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("span",{staticStyle:{"font-size":"12pt","font-weight":"bold"}},[o._v("计划任务的格式说明")])])],1)])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("第1列：表示分钟1～59 每分钟用*或者 */1表示")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("第2列：表示小时1～23（0表示0点）")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("第3列：表示日期1～31")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("第4列：表示月份1～12")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("第5列：标识号星期0～6（0表示星期天）")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("第6列：要运行的命令，且该命令必须使用绝对路径")])])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("span",{staticStyle:{"font-size":"12pt","font-weight":"bold"}},[o._v("计划任务的符号说明")])])],1)])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("* : 代表“每”的意思，如: 每分钟，每小时，每天，等")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("30 8 * * * 绝对路径的命令或脚本  "),i("font",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 表示每天的8点30分执行指定的任务或命令")])],1)]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v(", : 使用逗号隔开的值就是指定一个列表范围")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 5,7,9 * * 绝对路径的命令或脚本  "),i("font",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 表示每月的 5 7 9 号的 0 时 0 分 执行指定的任务或命令")])],1)]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("- : 表示指定一个整数的范围")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 5-15 * * 绝对路径的命令或脚本  "),i("font",{attrs:{color:"#41AD1C"}},[o._v("# 表示每月的 5-15 号的 0 时 0 分 执行指定的任务或命令")])],1)]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("/ : 表示指定时间的间隔频率")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("*/3 * * * * 绝对路径的命令或脚本  "),i("font",{attrs:{color:"#41AD1C"}},[o._v("# 表示每隔3分钟执行指定的任务或命令")])],1)]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("5.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("计划任务的使用")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("crontab命令: 被用来提交和管理用户的需要周期性执行的任务，与 windows 下的计划任务类似")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("crontab命令的参数")])])])]),i("div",[i("div",[i("br")]),i("table",{staticStyle:{"border-collapse":"collapse","min-width":"100%"}},[i("colgroup",[i("col",{staticStyle:{width:"130px"}}),i("col",{staticStyle:{width:"255px"}})]),i("tbody",[i("tr",[i("td",{staticStyle:{width:"130px",padding:"8px",border:"1px solid"}},[o._v("参数")]),i("td",{staticStyle:{width:"255px",padding:"8px",border:"1px solid"}},[i("div",[o._v("说明")])])]),i("tr",[i("td",{staticStyle:{width:"130px",padding:"8px",border:"1px solid"}},[i("div",[o._v("-e")])]),i("td",{staticStyle:{width:"255px",padding:"8px",border:"1px solid"}},[i("div",[o._v("编辑当前用户的计划任务")])])]),i("tr",[i("td",{staticStyle:{width:"130px",padding:"8px",border:"1px solid"}},[i("div",[o._v("-l")])]),i("td",{staticStyle:{width:"255px",padding:"8px",border:"1px solid"}},[i("div",[o._v("显示当前用户的所有计划任务")])])]),i("tr",[i("td",{staticStyle:{width:"130px",padding:"8px",border:"1px solid"}},[i("div",[o._v("-r")])]),i("td",{staticStyle:{width:"255px",padding:"8px",border:"1px solid"}},[i("div",[o._v("清空当前任务的所有计划任务")])])]),i("tr",[i("td",{staticStyle:{width:"130px",padding:"8px",border:"1px solid"}},[i("div",[o._v("-u <用户名>")])]),i("td",{staticStyle:{width:"255px",padding:"8px",border:"1px solid"}},[i("div",[o._v("给指定用户设置计划任务")])])])])]),i("div",[i("br")])]),i("ul",[i("li",[i("div",[o._v("进入编写计划任务的文件，默认调用 vim 打开")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{staticStyle:{color:"rgb(65, 173, 28)"}},[i("span",{staticStyle:{"font-size":"9pt","font-family":"Monaco"}},[o._v("# 打开")]),o._v("编写计划任务的文件，默认调用 vim 打开")])],1),i("div",[i("font",{attrs:{color:"#41AD1C"}},[i("br")])],1),i("div",[i("span",{staticStyle:{"font-size":"9pt",color:"rgb(51, 51, 51)","font-family":"Monaco"}},[o._v("crontab -e")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 打开计划任务的文件后，进行编写计划任务")])],1),i("div",[i("br")]),i("div",[o._v("* * * * * /usr/bin/echo '内容' >> /root/test.txt")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("显示当前用户的所有计划任务")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("crontab -l")])]),i("div",[i("br")])]),i("ul",[i("li",[i("div",[o._v("清空当前任务的所有计划任务")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("crontab -r")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("查看计划任务的执行")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("tail -f /var/log/cron")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("6.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("错误示范")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("b",[o._v("每分钟执行指定的命令或脚本")])])],1)])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("错误写法: 因为这里的1代表每小时的第1分钟，不是每1分钟的意思，翻译过就是: 每小时的第1分钟执行指定的命令或脚本")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("1 * * * * 绝对路径的命令或脚本")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("ul",[i("li",[i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[o._v("正确写法")])],1)])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 写法一")])],1),i("div",[i("br")]),i("div",[o._v("* * * * * 绝对路径的命令或脚本")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{attrs:{color:"#41AD1C"}},[o._v("# 写法二")])],1),i("div",[i("br")]),i("div",[o._v("*/1 * * * * 绝对路径的命令或脚本")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("b",[o._v("每月的第7号执行指定的命令或脚本")])])])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("错误写法: 因为 * 是代表“每”的意思，翻译过就是: 每月的第7号开始每一分钟都执行指定的命令或脚本")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("* * 7 * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("ul",[i("li",[i("div",[o._v("正确写法")])])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 7 * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("7.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("每分钟定时执行任务之类的实例")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("注意: 所有命令一定要用绝对路径来写！")])])])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每分钟执行")]),o._v("指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 写法一")])]),i("div",[i("br")]),i("div",[o._v("* * * * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("span",{staticStyle:{color:"rgb(65, 173, 28)"}},[o._v("# 写法二")])]),i("div",[i("br")]),i("div",[o._v("*/1 * * * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每五分钟执行")]),o._v("指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[i("font",{staticStyle:{color:"rgb(70, 70, 70)"}},[o._v("*/5 * * * * 绝对路径的命令或脚本")])],1)]),i("div",[i("br")])]),i("ul",[i("li",[i("div",[o._v("每小时执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 * * * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("每天执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 * * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("每周执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 * * 0 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("每月执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 1 * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[o._v("每年执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 1 1 * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("div",[i("span",{staticStyle:{"font-size":"14pt","white-space":"pre-wrap","font-weight":"bold"}},[o._v("8.")]),o._v(" "),i("span",{staticStyle:{"font-size":"14pt","font-weight":"bold"}},[o._v("计划任务的实例")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt",color:"rgb(227, 0, 0)","font-weight":"bold"}},[o._v("注意: 所有命令一定要用绝对路径来写！")])])])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每小时的第20分")]),o._v("执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("20 * * * * 绝对路径的命令或脚本")])]),i("div",[i("span",{staticStyle:{"font-size":"14pt"}},[i("br")])]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每小时的3,15分钟")]),o._v("执行指定的命令或脚本")])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("3,15 * * * * 绝对路径的命令或脚本")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("在上午8-11点的第3和第15分钟")]),o._v("执行指定的命令或脚本")])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("3,15 8-11 * * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每晚21:30")]),o._v("执行指定的命令或脚本")])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("30 21 * * * 绝对路径的命令或脚本")])]),i("div",[i("br")]),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每周六、日的1：30")]),o._v("执行指定的命令或脚本")])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("30 1 * * 6,0 绝对路径的命令或脚本")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[o._v("每月的7号执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 7 * * 绝对路径的命令或脚本")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[o._v("每年的10月份执行指定的命令或脚本")])])]),i("div",[i("br")]),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 0 0 10 * 绝对路径的命令或脚本")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每周一到周五的凌晨1点，清空/tmp目录的所有文件")])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("0 1 * * 1-5 /usr/bin/rm -rf /tmp/*")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每晚的21:30重启nginx")])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("30 21 * * * /opt/nginx/sbin/nginx -s reload")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每月的1,10,22日的4:45重启nginx")])])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("45 4 1,1,10,22 * * /opt/nginx/sbin/nginx -s reload")])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("ul",[i("li",[i("div",[i("span",{staticStyle:{"font-size":"12pt"}},[o._v("每个星期一的上午8点到11点的第3和15分钟")]),o._v("执行指定的命令或脚本")])])]),i("div",[i("font",{staticStyle:{"font-size":"12pt"}},[i("br")])],1),i("div",{staticStyle:{"box-sizing":"border-box",padding:"8px","font-family":'Monaco, Menlo, Consolas, "Courier New", monospace',"font-size":"12px",color:"rgb(51, 51, 51)","border-radius":"4px","background-color":"rgb(251, 250, 248)",border:"1px solid rgba(0, 0, 0, 0.15)","-en-codeblock":"true"}},[i("div",[o._v("3,15 8-11 * * 1 绝对路径的命令或脚本")])]),i("div",[i("br")])]),i("div",[i("br")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);