(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{716:function(s,a,t){"use strict";t.r(a);var n=t(46),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac-解压命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-解压命令"}},[s._v("#")]),s._v(" Mac 解压命令")]),s._v(" "),t("p",[s._v("gzip 命令\n减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。gzip 是在 Linux 系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。")]),s._v(" "),t("p",[s._v("语法：gzip [选项] 压缩（解压缩）的文件名该命令的各选项含义如下：")]),s._v(" "),t("p",[s._v("-c 将输出写到标准输出上，并保留原有文件。-d 将压缩文件解压。-l 对每个压缩文件，显示下列字段： 压缩文件的大小；未压缩文件的大小；压缩比；未压缩文件的名字-r 递归式地查找指定目录并压缩其中的所有文件或者是解压缩。-t 测试，检查压缩文件是否完整。-v 对每一个压缩和解压的文件，显示文件名和压缩比。-num 用指定的数字 num 调整压缩的速度，-1 或 --fast 表示最快压缩方法（低压缩比），-9 或--best表示最慢压缩方法（高压缩比）。系统缺省值为 6。指令实例：")]),s._v(" "),t("p",[s._v("gzip *% 把当前目录下的每个文件压缩成 .gz 文件。gzip -dv *% 把当前目录下每个压缩的文件解压，并列出详细的信息。gzip -l *% 详细显示例1中每个压缩的文件的信息，并不解压。gzip usr.tar% 压缩 tar 备份文件 usr.tar，此时压缩文件的扩展名为.tar.gz。\n")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("tar\n解包：tar xvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar\n打包：tar cvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar DirName\n（注：tar是打包，不是压缩！）\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n解压"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：gunzip FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n解压"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：gzip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n压缩：gzip FileName\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz 和 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tgz\n解压：tar zxvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz\n压缩：tar zcvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz DirName\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2\n解压"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：bzip2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2\n解压"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：bunzip2 FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2\n压缩： bzip2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("z FileName\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2\n解压：tar jxvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2\n压缩：tar jcvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2 DirName\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz\n解压"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：bzip2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz\n解压"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("：bunzip2 FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz\n压缩：未知\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz\n解压：tar jxvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz\n压缩：未知\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Z")]),s._v("\n解压：uncompress FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Z")]),s._v("\n压缩：compress FileName\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Z")]),s._v("\n解压：tar Zxvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Z")]),s._v("\n压缩：tar Zcvf FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Z")]),s._v(" DirName\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zip\n解压：unzip FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zip\n压缩：zip FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zip DirName\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lha\n解压：lha "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lha\n压缩：lha "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lha FileName\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rpm\n解包：rpm2cpio FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rpm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cpio "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("div\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deb\n解包：ar p FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deb data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tar zxf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n———————————————\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tgz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Z")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bz2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zip "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cpio "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rpm \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("deb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("slp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arj "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ace "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lha "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lzh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lzx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lzs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sda "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sfx \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lnx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zoo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cab "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("kar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cpt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sea\n解压：sEx x FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n压缩：sEx a FileName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" FileName\n\nsEx只是调用相关程序，本身并无压缩、解压功能，请注意！\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);