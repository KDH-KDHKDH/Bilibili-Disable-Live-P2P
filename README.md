# Bilibili 直播P2P禁用脚本

一个用于在 `document-start` 阶段禁用B站直播P2P上传的油猴脚本。

## 问题描述 ##
我发现B站网页版直播目前会强制使用P2P（WebRTC）技术。这导致用户在观看直播时，会在自己毫不知情且无法关闭的情况下，被动地产生巨额的后台上传流量。

## 为何需要此功能 ##
以我个人为例（见下图），近一个月仅浏览器（chrome.exe）就产生了超过350GB的上传流量，经过排查确认是由观看B站直播导致。

<img width="1050" height="209" alt="image" src="https://github.com/user-attachments/assets/44bd3d28-f730-45bf-a790-7a28cabd1f6a" />

这种做法在未明确告知用户、且未提供关闭选项的情况下，大量占用了用户的私有上行带宽资源，严重侵犯了用户的知情权和选择权。

## 如何安装

1.  确保您的浏览器已安装 [Tampermonkey (油猴)](https://www.tampermonkey.net/) 扩展。
2.  点击下方的链接进行安装：

[➡️ **点击此处安装脚本**](	https://github.com/KDH-KDHKDH/Bilibili-Disable-Live-P2P/raw/refs/heads/main/bilibili-disable-live-p2p.user.js)
