(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{622:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-编码约定-我的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-编码约定-我的"}},[t._v("#")]),t._v(" "),a("Label",{attrs:{level:1}}),t._v("React 编码约定(我的)")],1),t._v(" "),a("h2",{attrs:{id:"组件的内容编写顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的内容编写顺序"}},[t._v("#")]),t._v(" 组件的内容编写顺序")]),t._v(" "),a("ol",[a("li",[t._v("static 开头的类属性，如 defaultProps、propTypes")]),t._v(" "),a("li",[t._v("构造函数，constructor")]),t._v(" "),a("li",[t._v("getter/setter")]),t._v(" "),a("li",[t._v("组件生命周期")]),t._v(" "),a("li",[t._v("_ 开头的私有方法")]),t._v(" "),a("li",[t._v("事件监听方法，handle*")]),t._v(" "),a("li",[t._v("render* 开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头")]),t._v(" "),a("li",[t._v("render() 方法")])]),t._v(" "),a("h2",{attrs:{id:"编码流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码流程"}},[t._v("#")]),t._v(" 编码流程")]),t._v(" "),a("p",[a("strong",[t._v("1. 将设计好的 UI 划分为组件层级")])]),t._v(" "),a("p",[a("strong",[t._v("2. 用 React 创建一个静态版本")])]),t._v(" "),a("ul",[a("li",[t._v("最好将渲染 UI 和添加交互这两个过程分开。这是因为，编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码")]),t._v(" "),a("li",[t._v("当应用比较简单时，使用自上而下的方式更方便；对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式")])]),t._v(" "),a("p",[a("strong",[t._v("3. 确定 UI state 的最小（且完整）表示")])]),t._v(" "),a("ul",[a("li",[t._v("只保留应用所需的可变 state 的最小集合，其他数据均由它们计算产生")])]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[t._v("通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("4. 确定 state 放置的位置")])]),t._v(" "),a("ul",[a("li",[t._v("React 中的数据流是单向的，并顺着组件层级从上往下传递")]),t._v(" "),a("li",[t._v("放在组件层级上高于所有需要该 state 的组件")])]),t._v(" "),a("p",[a("strong",[t._v("5. 添加反向数据流")])]),t._v(" "),a("ul",[a("li",[t._v("由于 state 只能由拥有它们的组件进行更改，父组件必须将一个能够触发 state 改变的回调函数（callback）传递给子组件")])]),t._v(" "),a("h2",{attrs:{id:"事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理"}},[t._v("#")]),t._v(" 事件处理")]),t._v(" "),a("p",[t._v("你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this")]),t._v(" "),a("ol",[a("li",[t._v("绑定 this，推荐使用 bind 或 class fields 正确的绑定回调函数：")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggingButton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleClick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handleClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Click me"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("向事件处理程序传递参数，推荐通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{this.deleteRow.bind(this,"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id)}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Delete Row"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"列表-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表-key"}},[t._v("#")]),t._v(" 列表 & Key")]),t._v(" "),a("p",[a("strong",[t._v("元素的 key 只有放在就近的数组上下文中才有意义")])]),t._v(" "),a("ul",[a("li",[t._v("一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性")]),t._v(" "),a("li",[t._v("key 只是在兄弟节点之间必须唯一")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/reconciliation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入解析为什么 key 是必须的"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318",target:"_blank",rel:"noopener noreferrer"}},[t._v("深度解析使用索引作为 key 的负面影响"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定")]),t._v(" "),a("p",[t._v("例如，JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("注意： 组件名称必须以大写字母开头")])]),t._v(" "),a("p",[t._v("React 会将以小写字母开头的组件视为原生 DOM 标签。例如，"),a("code",[t._v("<div />")]),t._v(" 代表 HTML 的 div 标签，而 "),a("code",[t._v("<Welcome />")]),t._v(" 则代表一个组件，并且需在作用域内使用 Welcome")])]),t._v(" "),a("p",[t._v("-------------------草稿--------------------\n组件导出用 export，路由用\nexport default")])])}),[],!1,null,null,null);s.default=e.exports}}]);