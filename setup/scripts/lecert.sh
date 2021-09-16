#!/bin/bash
#
# [QuickBox ARM64 Lets Encrypt Installer (Main)]
#
# GitHub:   https://github.com/amefs/quickbox-arm64
# Author:   Amefs
# Current version:  v1.0.0
# URL:
# Original Repo:    https://github.com/QuickBox/QB
# Credits to:       QuickBox.io
#
#   Licensed under GNU General Public License v3.0 GPL-3 (in short)
#
#   You may copy, distribute and modify the software as long as you track
#   changes/dates in source files. Any modifications to our software
#   including (via compiler) GPL-licensed code must also be made available
#   under the GPL along with build & install instructions.
#
#################################################################################
logpath=$1
extra_arg=$2
bash /usr/local/bin/quickbox/package/install/installpackage-lecert -l $logpath -d $extra_arg