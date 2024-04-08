(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{661:function(e,n,t){"use strict";t.r(n);var s=t(45),p=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"node-如何方便切换环境-环境变量（node-env）设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-如何方便切换环境-环境变量（node-env）设置"}},[e._v("#")]),e._v(" "),t("Label",{attrs:{level:1}}),e._v("Node 如何方便切换环境——环境变量（NODE_ENV）设置")],1),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("__dirname：表示当前执行脚本所在的目录\n__filename：输出当前正在执行文件所在位置的绝对路径及文件名（包括后缀）\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Node 如何方便切换环境——环境变量（NODE_ENV）设置\n在公司，一个项目一般会有开发版本、测试版本、线上版本，每个版本可能都会对应不同的相关参数，或许数据库的连接地址不同，或许请求的 API 地址不同等等。为了方便管理，我们通常做成配置文件的形式，根据不同的环境，加载不同的文件。如果手动修改代码中加载配置文件的路径，这样会给人一种很 low 的感觉，下面我们将一下看起来逼格较为方便的做法。")]),e._v(" "),t("p",[e._v("启动 node 项目\n首先，我们说一些基础性的知识。一个简单的 node 项目，会有一个 package.json 文件，用来保存项目的依赖包和一些项目描述的信息；会有一个入口主文件，用来启动项目。这边假设入口主文件为 app.js，启动项目的方法如下：")]),e._v(" "),t("p",[e._v("// 方法一\nnode app.js。\n我们还有另外一种方式，通过 package.json 文件启动项目，下面我们看一下如何操作。")]),e._v(" "),t("p",[e._v('1、修改 package.json 文件\n// 在 scripts 中添加 start 项，后面的值为启动 app.js 的命令\n"scripts": {\n"test": "echo "Error: no test specified" && exit 1",\n"start": "node app.js"\n},\n2、通过 npm 命令运行 node 项目\n在控制台运行 npm run start，这样项目就可以启动了。这里的 start 就是上面 package.json 中的 start。')]),e._v(" "),t("p",[e._v("明明第一种方式很简单，为什么会有第二种这么繁琐的方式呢？存在即合理，因为第二种方式我们还可以做其他的操作。（下面开始进入正题了）")]),e._v(" "),t("p",[e._v("之前我们说要设置环境变量 NODE_ENV，第二种方法给我们带来了方案。例如，我们想把 NODE_ENV 设置成 development，我们可以修改上面的配置。")]),e._v(" "),t("p",[e._v('// 在 scripts 中添加 start 项，后面的值为启动 app.js 的命令\n"scripts": {\n"test": "echo "Error: no test specified" && exit 1",\n"start": "export NODE_ENV=\'development\' && node app.js" // 在 Mac 和 Linux 上使用 export， 在 windows 上 export 要换成 set\n},\n这样我们在运行 npm run start 的时候，就会自动设置 NODE_ENV 的值为 development。设置了之后，我们如何获取呢？别急，接下来我们就说一下如何获取环境 NODE_ENV。')]),e._v(" "),t("p",[e._v("通过下面的方式，我们可以在 node 中打印出上面设置的 NODE_ENV 的值了")]),e._v(" "),t("p",[e._v("console.log(process.env.NODE_ENV); // development\n现在，我们可以通过配置 package.json 来设置环境变量，又可以在代码中获取到 NODE_ENV 的值，所以可以我们可以轻松的切换环境啦。")]),e._v(" "),t("p",[e._v("package.json 配置")]),e._v(" "),t("p",[e._v('"scripts": {\n"test": "echo "Error: no test specified" && exit 1",\n"start": "export NODE_ENV=\'development\' && node app.js",\n"build": "export NODE_ENV=\'production\' && node app.js"\n}\nnpm run start 就是开发环境')]),e._v(" "),t("p",[e._v("npm run build 就是线上环境")])])}),[],!1,null,null,null);n.default=p.exports}}]);