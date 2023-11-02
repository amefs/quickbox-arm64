#!/bin/bash
#
# [QuickBox ARM64 qBittorrent Installer (Main)]
#
# GitHub:   https://github.com/amefs/quickbox-arm64
# Author:   Amefs
# Current version:  v1.0.0
# URL:
# Original Repo:    https://github.com/QuickBox/QB
# Credits to:       QuickBox.io
#
# SPDX-License-Identifier: GPL-3.0-or-later
#
#################################################################################
logpath=$1
extra_arg=${*:2}
bash /usr/local/bin/quickbox/package/install/installpackage-qbittorrent -l $logpath $extra_arg