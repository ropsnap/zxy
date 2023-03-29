#!/bin/sh

adb shell svc data disable; 
adb shell svc data enable; 

sleep 3; 

exit;