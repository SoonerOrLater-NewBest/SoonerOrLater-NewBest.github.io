(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{569:function(s,a,n){s.exports=n.p+"assets/img/image.072dd482.png"},654:function(s,a,n){"use strict";n.r(a);var t=n(45),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"云服务器自建部署流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云服务器自建部署流程"}},[s._v("#")]),s._v(" "),t("Label",{attrs:{level:1}}),s._v(" 云服务器自建部署流程")],1),s._v(" "),t("blockquote",[t("p",[s._v("趁着"),t("a",{attrs:{href:"https://www.aliyun.com/minisite/goods?userCode=jfhdn89k",target:"_blank",rel:"noopener noreferrer"}},[s._v("优惠活动"),t("OutboundLink")],1),s._v("，买了个阿里云乞丐版云服务器，主要用来折腾学习，并为个人小程序公众号提供少量接口需求，配置如下：")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(569),alt:"云服务器"}})]),s._v(" "),t("ul",[t("li",[s._v("系统记得选： "),t("strong",[s._v("CentOS 7.9 64 位 UEFI 版")])]),s._v(" "),t("li",[s._v("省流：Nginx+NodeJS+Python+Mysql")])]),s._v(" "),t("h3",{attrs:{id:"安装-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[s._v("#")]),s._v(" 安装 Nginx")]),s._v(" "),t("ol",[t("li",[s._v("运行以下命令安装 Nginx")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("运行以下命令查看 Nginx 版本")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nginx -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("返回结果如下所示，表示 Nginx 安装成功")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nginx version: nginx/1.20.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装-nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nvm"}},[s._v("#")]),s._v(" 安装 NVM")]),s._v(" "),t("p",[s._v("node 版本管理器")]),s._v(" "),t("ol",[t("li",[s._v("执行下面 bash")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("然后"),t("code",[s._v("source .bashrc")])]),s._v(" "),t("li",[s._v("查询版本"),t("code",[s._v("nvm -v")])]),s._v(" "),t("li",[s._v("环境变量"),t("code",[s._v(".bash_profile")]),s._v("也写一份，下次启动命令行就不用 source 了")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .bash_profile "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑文件")]),s._v("\ni "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .bashrc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#放到最后一行")]),s._v("\nesc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出插入")]),s._v("\n:wq "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出并保存文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"安装-nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-nodejs"}},[s._v("#")]),s._v(" 安装 NodeJS")]),s._v(" "),t("ol",[t("li",[s._v("可以多安装几个版本，这也是安装 nvm 的目的")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装node@14")]),s._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装node@18")]),s._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" stable "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装node最新稳定版")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查询版本"),t("code",[s._v("node -v")]),s._v("，出现版本就安装成功")]),s._v(" "),t("li",[s._v("切换版本"),t("code",[s._v("nvm use xx")]),s._v("，查询版本列表"),t("code",[s._v("nvm ls")])])]),s._v(" "),t("h3",{attrs:{id:"安装-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[s._v("#")]),s._v(" 安装 Git")]),s._v(" "),t("ol",[t("li",[s._v("先安装 git")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查询版本"),t("code",[s._v("git --verison")]),s._v("，出现版本就安装成功")]),s._v(" "),t("li",[s._v("使用 git 需要配置 ssh 密钥，还要注册 github，详见"),t("a",{attrs:{href:"../../technology-stack/tools/git-quick-start"}},[s._v("Git 快速上手")])])]),s._v(" "),t("h3",{attrs:{id:"安装-pyenv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-pyenv"}},[s._v("#")]),s._v(" 安装 pyenv")]),s._v(" "),t("p",[s._v("python 版本管理器")]),s._v(" "),t("ol",[t("li",[s._v("执行 bash 安装 pyenv")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://pyenv.run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加 pyenv 的环境变量")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .bashrc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑文件")]),s._v("\ni "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#粘贴下面3句放到末尾")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PYENV_ROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.pyenv"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYENV_ROOT")]),s._v("/bin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYENV_ROOT")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pyenv init -"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\nesc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出插入")]),s._v("\n:wq "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出并保存文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .bashrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查询版本"),t("code",[s._v("pyenv -v")]),s._v("，出现版本就安装成功")])]),s._v(" "),t("h3",{attrs:{id:"安装-python"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-python"}},[s._v("#")]),s._v(" 安装 python")]),s._v(" "),t("ol",[t("li",[s._v("安装 python3 之前，要先安装相关依赖包和编译环境")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel gcc libffi-devel\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("zlib-devel：提供对 zlib 压缩库的支持。")]),s._v(" "),t("li",[s._v("bzip2-devel：提供对 bzip2 压缩库的支持。")]),s._v(" "),t("li",[s._v("openssl-devel：提供对 OpenSSL 加密库的支持。")]),s._v(" "),t("li",[s._v("ncurses-devel：提供对 ncurses 库的支持，用于处理终端屏幕输出。")]),s._v(" "),t("li",[s._v("sqlite-devel：提供对 SQLite 数据库的支持。")]),s._v(" "),t("li",[s._v("readline-devel：提供对 readline 库的支持，用于提供命令行编辑和历史记录功能。")]),s._v(" "),t("li",[s._v("tk-devel：提供对 Tk 图形库的支持，用于构建 Python 图形界面应用程序。")]),s._v(" "),t("li",[s._v("gdbm-devel：提供对 GDBM（GNU 数据库管理系统）的支持。")]),s._v(" "),t("li",[s._v("db4-devel：提供对 Berkeley DB（数据库）的支持。")]),s._v(" "),t("li",[s._v("libpcap-devel：提供对 libpcap（网络数据包捕获库）的支持。")]),s._v(" "),t("li",[s._v("xz-devel：提供对 XZ 压缩库的支持。")]),s._v(" "),t("li",[s._v("gcc：GNU 编译器集合，用于编译和构建源代码。")]),s._v(" "),t("li",[s._v("libffi-devel：提供对 libffi 库的开发支持。")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("OpenSSL 有点问题，再装一下，然后用 pyenv 装个 3.10.6")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum swap openssl-devel openssl11-devel\npyenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("如果出现"),t("code",[s._v("ERROR: The Python ssl extension was not compiled. Missing the OpenSSL lib?")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CPPFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pkg-config --cflags openssl11"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LDFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("pkg-config --libs openssl11"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\npyenv "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("pyenv 安装速度有点慢，一直超时的话也可以切换镜像源，如下")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" .bashrc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑文件")]),s._v("\ni "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#插入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PYENV_PYTHON_BUILD_MIRRORS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://pypi.python.org/simple,https://jedore.netlify.app/tools/python-mirrors/"')]),s._v("\nesc "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出插入")]),s._v("\n:wq "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出并保存文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .bashrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("pyenv 还有其他报错的话，可以去这个网站查一下"),t("a",{attrs:{href:"https://github.com/pyenv/pyenv/wiki/Common-build-problems#error-the-python-ssl-extension-was-not-compiled-missing-the-openssl-lib",target:"_blank",rel:"noopener noreferrer"}},[s._v("pyenv/wiki/Common-build-problems"),t("OutboundLink")],1)])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("很遗憾我到这还是报错，于是我准备升级 OpenSSL 到 3.0.2")])]),s._v(" "),t("ul",[t("li",[s._v("安装 Perl-CPAN 模块")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装perl-CPAN")]),s._v("\nyum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y perl-CPAN\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行模块")]),s._v("\nperl -MCPAN -e shell\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("所有提示的选项都默认回车即可，直到出现提示符“cpan[1]>”，则执行如下命令")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装IPC/Cmd.pm（注意提示符：cpan[1]> 下执行）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" IPC/Cmd.pm\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行完成后，出现提示符 cpan[2]>时，执行如下")]),s._v("\nquit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("下载 OpenSSL 源码")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在线下载3.0.2版本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://www.openssl.org/source/openssl-3.0.2.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("编译安装")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf openssl-3.0.2.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入解压后目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" openssl-3.0.2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置")]),s._v("\n./config --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/openssl-3.0.2 shared zlib\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置主机CPU核心数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -j2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("设置环境变量")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询动态库名称")]),s._v("\nopenssl version -a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找动态库位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name libssl.so.3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置环境变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/profile.d/openssl.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /etc/profile.d/openssl.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("export PATH=/usr/local/openssl-3.0.2/bin:"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile.d/openssl.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile.d/openssl.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置头文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -sv /usr/local/openssl-3.0.2/include/openssl /usr/include/openssl\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置库文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/ld.so.conf.d/openssl.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /etc/ld.so.conf.d/openssl.conf\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/openssl-3.0.2/lib64"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/ld.so.conf.d/openssl.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加载动态连接库")]),s._v("\nldconfig -v\nldconfig -p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" openssl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br")])]),t("ul",[t("li",[s._v("显示版本号")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("openssl version -a\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("然后重新执行第三步，记得三句一起，别把\\漏了")])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("设置版本，再配合 venv 使用，相当干净方便快捷")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("pyenv global "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".6 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局设置")]),s._v("\npyenv "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".6  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#local 本地设置 只影响所在文件夹")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"安装-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[s._v("#")]),s._v(" 安装 MySQL")]),s._v(" "),t("ol",[t("li",[s._v("运行以下命令更新 YUM 源")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh  http://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("运行以下命令安装 MySQL")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server --nogpgcheck\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("运行"),t("code",[s._v("mysql -V")]),s._v("查看 MySQL 版本号")])]),s._v(" "),t("ul",[t("li",[s._v("返回结果如下所示，表示 MySQL 安装成功")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql  Ver "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.14")]),s._v(" Distrib "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v(".36, "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Linux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x86_64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" using  EditLine wrapper\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("启动 MySQL")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start mysqld\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动MySQL")]),s._v("\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mysqld\nsystemctl daemon-reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"结束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[s._v("#")]),s._v(" 结束")]),s._v(" "),t("p",[s._v("web 服务需要的环境基本是装好了，接下来就是使用了")])])}),[],!1,null,null,null);a.default=e.exports}}]);