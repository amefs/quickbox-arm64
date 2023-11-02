

![QB-arm](https://img.nyamoe.com/images/2019/10/15/quickbox-arm64-logo.png)

# QuickBox-ARM64

[English Ver](https://github.com/amefs/quickbox-arm64/blob/master/README.md)

---

该项目是 QuickBox 社区版的 mod. 它的主要功能同 QuickBox Lite，不同的是该项目支持 arm64 构架。

---

## 主要特性

1. 图形化的安装界面 (目前支持中英双语)
2. 使用 Nginx 替代 Apache
3. 模块化安装
4. 支持最新的 Debian 系系统
5. 最新的软件支持 (包含预编译的 deb 安装包)

---

## 当前版本

![Version](https://img.shields.io/badge/version-1.1.2-orange?style=flat-square)![GNU v3.0 License](https://img.shields.io/badge/license-GNU%20v3.0%20License-blue.svg?style=flat-square)

---

## 如何安装

### 安装须知

硬件需求:

- CPU: aarch64 构架
- 内存: 大于 1GB (推荐使用更多内存)
- 硬盘: 20GB HDD 

系统支持 (仅支持 aarch64):

![Ubuntu22.04](https://img.shields.io/badge/Ubuntu%2022.04-passing-brightgreen.svg?style=flat-square)![Ubuntu20.04](https://img.shields.io/badge/Ubuntu%2020.04-passing-brightgreen.svg?style=flat-square)![Ubuntu18.04](https://img.shields.io/badge/Ubuntu%2018.04-EOL-red.svg?style=flat-square)![Ubuntu16.04](https://img.shields.io/badge/Ubuntu%2016.04-EOL-red.svg?style=flat-square)

![Debian12](https://img.shields.io/badge/Debian%2012-passing-brightgreen.svg?style=flat-square)![Debian11](https://img.shields.io/badge/Debian%2011-passing-brightgreen.svg?style=flat-square)![Debian10](https://img.shields.io/badge/Debian%2010-passing-brightgreen.svg?style=flat-square)![Debian9](https://img.shields.io/badge/Debian%209-discontinue-orange.svg?style=flat-square)

服务器支持:

- 基于 aarch64 构架的服务器

### 安装项目

**你需要首先以 root 身份登录**

**运行以下指令来抓取最新的代码 ...**

```bash
apt-get -yqq update; apt-get -yqq upgrade; apt-get -yqq install git lsb-release dos2unix; \
git clone https://github.com/amefs/quickbox-arm64.git /etc/QuickBox; \
dos2unix /etc/QuickBox/setup.sh; \
bash /etc/QuickBox/setup.sh
```

**如何直接安装开发者模式?**

```bash
mkdir /install/ && touch /install/.developer.lock; \
apt-get -yqq update; apt-get -yqq upgrade; apt-get -yqq install git lsb-release dos2unix; \
git clone --branch "development" https://github.com/amefs/quickbox-arm64.git /etc/QuickBox; \
dos2unix /etc/QuickBox/setup.sh; \
bash /etc/QuickBox/setup.sh
```

目前可以使用以下参数:

```
QuickBox Lite Setup Script

使用方法: bash setup.sh -u username -p password [OPTS]

选项:
  NOTE: * is required anyway

  -d, --domain <domain>            为服务器设置以 Let's Encrypt 保护的域名
  -H, --hostname <hostname>        为服务器设置 Hostname，默认不修改
  -P, --port <1-65535>             为 SSH 服务设置端口，默认修改为 4747
  -u, --username <username*>       用户名（必要）
  -p, --password <password*>       密码（必要）
  -r, --reboot                     在安装完成后是否直接重启（默认否）
  -s, --source <tuna|ustc>         选择一个下载源（默认不修改）
  -t, --theme <defaulted|smoked>   为仪表盘选择一个主题（默认 smoked）
  --tz,--timezone <timezone>       为服务器设置时区 (e.g. GMT-8 or Europe/Berlin)
  
  --lang <en|zh>                   选择 TUI 使用的语言（默认英语）
  --with-log,no-log                是否将安装日志写入文件（默认是）
  --with-ftp,--no-ftp              是否安装 FTP（默认是）
  --ftp-ip <ip address>            手动设置 FTP IP
  --with-bbr,--no-bbr              是否安装 BBR（默认否）
  --with-cf                        使用 cloudflare 替代 github
  --with-sf                        使用 sourceforge 替代 github
  --with-osdn                      使用 osdn(jp) 替代 github
  --with-github                    使用 github
  --with-APPNAME                   安装一个 app
  --qbittorrent-version            指定 qBittorrent 版本
  --deluge-version                 指定 Deluge 版本
  --qbit-libt-version              指定用于 qBittorrent 的 Libtorrent 版本
  --de-libt-version                指定用于 Deluge 的 Libtorrent 版本
  --rtorrent-version               指定 rTorrent 版本

    可选的 APP:
    rtorrent | rutorrent | flood | transmission | qbittorrent
    deluge | mktorrent | ffmpeg | filebrowser | linuxrar

  -h, --help                       显示该帮助文档并退出
```

用户名和密码是必须填写的参数，否则仍然会启动 TUI 安装界面。其他可选参数的功能与 TUI 安装界面相同。下面是一个使用示例：

```bash
bash /etc/QuickBox/setup.sh -u demouser -p demo123456 --with-ffmpeg -P 1234 --with-bbr --with-deluge --with-mktorrent --with-linuxrar --with-cf --hostname vmserver --reboot
```

这段代码的意思是: 用户名为 demouser，密码为 demo123456，ssh 端口修改为1234，安装 BBR，deluge，mktorrent，linuxrar，使用 Cloudflare 的预编译包镜像源，hostname 修改为 vmserver，安装完成后自动重启。
## 对 QuickBox Lite 有疑问

如果你对 QuickBox Lite 的功能仍然有疑问或者需要汇报 Bug，请务必先阅读 [Wiki](https://cn.wiki.ptbox.dev)。如果 Wiki 描述仍然不能解决你的疑惑，请尝试在 [here](https://github.com/amefs/quickbox-arm64/issues/new) 中提交你的问题，我会尽力解决这些问题。
