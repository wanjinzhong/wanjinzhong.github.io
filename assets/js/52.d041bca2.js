(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{566:function(s,e,a){"use strict";a.r(e);var t=a(4),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("如何在Ubuntu下配置环境变量，以gradle举例：")]),s._v(" "),a("p",[a("strong",[s._v("1.首先下载gradle，解压到目标目录，此处我解压到"),a("code",[s._v("/home/neilw/programs")])])]),s._v(" "),a("p",[a("strong",[s._v("2.以root身份编辑/etc/profile文件，在最底部加入以下代码，并保存退出")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRADLE_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/neilw/programs/gradle-5.1\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GRADLE_HOME")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("3.刷新配置")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("4.检验配置成功")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("gradle -v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("成功输出gradle信息则配置成功")]),s._v(" "),a("br"),s._v(" "),a("hr"),s._v(" "),a("br"),s._v(" "),a("Vssue",{attrs:{title:s.$title}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);