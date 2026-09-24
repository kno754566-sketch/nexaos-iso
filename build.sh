#!/bin/bash
# NexaOS 1.0 ISOビルド（Debian 13 / Ubuntu などのLinux上で sudo 実行）
set -e
[ "$EUID" -eq 0 ] || { echo "sudo ./build.sh で実行してください"; exit 1; }
apt-get update && apt-get install -y live-build debootstrap debian-archive-keyring
cd "$(dirname "$0")"
chmod +x config/hooks/normal/* config/includes.chroot/usr/local/bin/*
lb clean || true
lb config --distribution trixie --architectures amd64 --binary-images iso-hybrid \
  --archive-areas "main contrib non-free non-free-firmware" \
  --iso-application NexaOS --iso-publisher Garnese --iso-preparer Garnese --iso-volume NEXAOS_1_0 --image-name nexaos-1.0 \
  --bootappend-live "boot=live components quiet splash locales=ja_JP.UTF-8 keyboard-layouts=jp timezone=Asia/Tokyo username=nexa hostname=nexaos"
lb build
echo "完成: $(ls *.iso)"
