---
title: Chromium browser in kiosk mode on a Raspberry Pi
---

Run Chromium in kiosk mode on a Raspberry Pi with Raspbian Pixel (Debian Jessie)

sudo apt-get update
sudo apt-get upgrade

Boot to Fullscreen Chrome
http://raspberrypi.stackexchange.com/questions/38515/auto-start-chromium-on-raspbian-jessie-11-2015

Backup SD Card
http://raspberrypi.stackexchange.com/questions/311/how-do-i-backup-my-raspberry-pi

Chromium beenden: ALT-F4

Screensaver ausschalten
http://raspberrypi.stackexchange.com/questions/2059/disable-screen-blanking-in-x-windows-on-raspbian

https://www.danpurdy.co.uk/web-development/raspberry-pi-kiosk-screen-tutorial/

sudo apt-get install unclutter

ssh login pi/raspberry

ssh login volumio/volumio

## Locales Volumio

apt-get install locales
dpkg-reconfigure locales

ssh root@volumio.local  (PW volumio)

## SD Image erzeugen

diskutil list
diskutil unmount /dev/disk3s1

sudo dd bs=1m if=<image>.img of=/dev/rdisk<number>


##Ansible for Pi Cluster
