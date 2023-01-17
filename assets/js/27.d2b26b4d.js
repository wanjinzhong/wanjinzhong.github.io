(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{539:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("在工作中经常遇到使用Apache POI来操作Excel文件。其中有很多特殊的需求，在这里记录一下。")])]),s._v(" "),a("p",[s._v("首先贴上POI的官方API地址："),a("a",{attrs:{href:"http://poi.apache.org/apidocs/4.0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://poi.apache.org/apidocs/4.0/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"分组折叠功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组折叠功能"}},[s._v("#")]),s._v(" 分组折叠功能")]),s._v(" "),a("p",[s._v("正如左边，我们可以收起或者展开Excel的折叠行，其实现主要使用下面两个API：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupRow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" fromRow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" toRow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("类："),a("code",[s._v("Sheet")])]),s._v(" "),a("p",[s._v("作用：设置可以展开或者折叠的行区间")]),s._v(" "),a("p",[s._v("参数:")]),s._v(" "),a("p",[a("code",[s._v("fromRow")]),s._v(" – 折叠开始的行 (从0开始)")]),s._v(" "),a("p",[a("code",[s._v("toRow")]),s._v(" – 折叠结束的行(从0开始)")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setRowGroupCollapsed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" collapse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("类："),a("code",[s._v("Sheet")])]),s._v(" "),a("p",[s._v("作用：设置折叠区间的折叠状态")]),s._v(" "),a("p",[s._v("参数:")]),s._v(" "),a("p",[a("code",[s._v("row")]),s._v(" – 折叠区间的开始行（从0开始），一般对应上面那个API的"),a("code",[s._v("fromRow")])]),s._v(" "),a("p",[a("code",[s._v("collapse")]),s._v(" – 展开或者折叠")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"合并单元格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并单元格"}},[s._v("#")]),s._v(" 合并单元格")]),s._v(" "),a("p",[s._v("要想实现合并单元格，需要使用一个新的类"),a("code",[s._v("CellRangeAddress")]),s._v("\n* 使用构造方法创建一个"),a("code",[s._v("CellRangeAddress")]),s._v("的实例，规定合并单元格的范围")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CellRangeAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" firstRow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" lastRow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" firstCol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" lastCol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n或\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CellRangeAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A1:C1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("调用"),a("code",[s._v("Sheet")]),s._v("的"),a("code",[s._v("addMergedRegion(CellRangeAddress region)")]),s._v("方法将这个实例设置到"),a("code",[s._v("Sheet")]),s._v("上")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"自动筛选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动筛选"}},[s._v("#")]),s._v(" 自动筛选")]),s._v(" "),a("p",[s._v("依然像合并单元格一样，使用"),a("code",[s._v("CellRangeAddress")]),s._v("类指定一个区域，再调用"),a("code",[s._v("Sheet")]),s._v("的"),a("code",[s._v("setAutoFilter(CellRangeAddress range)")]),s._v("来将这一区域作为排序列。")]),s._v(" "),a("br"),s._v(" "),a("hr"),s._v(" "),a("br"),s._v(" "),a("Vssue",{attrs:{title:s.$title}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);