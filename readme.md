#Introduction
This is directive for image caching offline in Web browser, Android and iOS smartphone with ionic 2 .

When you run this demo in browser, you can get 'Access-Control-Allow-Origin' error if the server is not configured  'Access-Control-Allow-Origin' for downloading image, but you don't need to worry about that, it works in mobile device.

#How it works

*1. install imgcache.js with statement : `

npm install imgcache.js --save`

*2. install dependency plugin for imgcache.js lib: 

`cordova plugin add cordova-plugin-file`

`cordova plugin add cordova-plugin-file-tranfer`

`cordova plugin add cordova-plugin-file-device`
