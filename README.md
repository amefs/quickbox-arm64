![QB-arm](https://img.nyamoe.com/images/2019/10/15/quickbox-arm64-logo.png)

# Project QuickBox-ARM64

[中文版](https://github.com/amefs/quickbox-arm64/blob/master/README_zh.md)

---

This project is a modified version of QuickBox community edition. Most functions is the same as QuickBox Lite, but this project support arm64 instead of x86_64.

---

## Main feature

1. Graphical installation guide (Multi-language available)
2. Use nginx instead of apache
3. Modular installation
4. Latest OS support
5. up to date apps (include prebuild deb packages)

---

## Script status

![Version](https://img.shields.io/badge/version-1.1.2-orange?style=flat-square)![GNU v3.0 License](https://img.shields.io/badge/license-GNU%20v3.0%20License-blue.svg?style=flat-square)

---

## How to install

### before install

Hard ware requirement:

- CPU: aarch64 architecture
- RAM: large than 1GB (recommend more for better performance)
- Storage: 20GB HDD (for seeding, you need more)

OS Support (aarch64 only):

![Ubuntu22.04](https://img.shields.io/badge/Ubuntu%2022.04-passing-brightgreen.svg?style=flat-square)![Ubuntu20.04](https://img.shields.io/badge/Ubuntu%2020.04-passing-brightgreen.svg?style=flat-square)![Ubuntu18.04](https://img.shields.io/badge/Ubuntu%2018.04-EOL-red.svg?style=flat-square)![Ubuntu16.04](https://img.shields.io/badge/Ubuntu%2016.04-EOL-red.svg?style=flat-square)

![Debian12](https://img.shields.io/badge/Debian%2012-passing-brightgreen.svg?style=flat-square)![Debian11](https://img.shields.io/badge/Debian%2011-passing-brightgreen.svg?style=flat-square)![Debian10](https://img.shields.io/badge/Debian%2010-passing-brightgreen.svg?style=flat-square)![Debian9](https://img.shields.io/badge/Debian%209-discontinue-orange.svg?style=flat-square)

Server Support:

- Server based on aarch64

### install the project

**You must be logged in as root to run this installation.**

**Run the following command to grab our latest stable release ...**

```bash
apt-get -yqq update; apt-get -yqq upgrade; apt-get -yqq install git lsb-release dos2unix; \
git clone https://github.com/amefs/quickbox-arm64.git /etc/QuickBox; \
dos2unix /etc/QuickBox/setup.sh; \
bash /etc/QuickBox/setup.sh
```

**Want to run in development mode?:**

```bash
mkdir /install/ && touch /install/.developer.lock; \
apt-get -yqq update; apt-get -yqq upgrade; apt-get -yqq install git lsb-release dos2unix; \
git clone --branch "development" https://github.com/amefs/quickbox-arm64.git /etc/QuickBox; \
dos2unix /etc/QuickBox/setup.sh; \
bash /etc/QuickBox/setup.sh
```

Now, it has following arguments:

```
QuickBox ARM64 Setup Script

Usage: bash setup.sh -u username -p password [OPTS]

Options:
  NOTE: * is required anyway

  -d, --domain <domain>            setup domain for server
  -H, --hostname <hostname>        setup hostname, make no change by default
  -P, --port <1-65535>             setup ssh service port, use 4747 by default
  -u, --username <username*>       username is required here
  -p, --password <password*>       your password is required here
  -r, --reboot                     reboot after installation finished (default no)
  -s, --source <tuna|ustc>         choose apt source (default unchange)
  -t, --theme <defaulted|smoked>   choose a theme for your dashboard (default smoked)
  --tz,--timezone <timezone>       setup a timezone for server (e.g. GMT-8 or Europe/Berlin)
  
  --lang <en|zh>                   choose a TUI language (default english)
  --with-log,no-log                install with log to file or not (default yes)
  --with-ftp,--no-ftp              install ftp or not (default yes)
  --ftp-ip <ip address>            manually setup ftp ip
  --with-bbr,--no-bbr              install bbr or not (default no)
  --with-cf                        use cloudflare instead of github
  --with-sf                        use sourceforge instead of github
  --with-osdn                      use osdn(jp)  instead of github
  --with-github                    use github
  --with-APPNAME                   install an application
  --qbittorrent-version            specify the qBittorrent version
  --deluge-version                 specify the Deluge version
  --qbit-libt-version              specify the Libtorrent version for qBittorrent
  --de-libt-version                specify the Libtorrent version for Deluge
  --rtorrent-version               specify the rTorrent version

    Available applications:
    rtorrent | rutorrent | flood | transmission | qbittorrent
    deluge | mktorrent | ffmpeg | filebrowser | linuxrar

  -h, --help                       display this help and exit
```

The username and the password is required anyway, or the TUI install method will start. The other arguments are the same function as in TUI. Here is a example:

```bash
bash /etc/QuickBox/setup.sh -u demouser -p demo123456 --with-ffmpeg -P 1234 --with-bbr --with-deluge --with-mktorrent --with-linuxrar --with-cf --hostname vmserver --reboot
```

It means: The username being set to demouser, password is demo123456, use 1234 as ssh port, install BBR, deluge, mktorrent, linuxrar. The mirror for deb package in Cloudflare will be used for installation. Change the hostname to vmserver. The server will be automaticly restart after installation.

## Have trouble with QuickBox ARM64

If you still have questions about the QuickBox ARM64 or need to report bugs, be sure to read the [Wiki](https://en.wiki.ptbox.dev) first. When you still have trouble with it, please assign an issue [here](https://github.com/amefs/quickbox-arm64/issues/new), I will try my best to help you.

