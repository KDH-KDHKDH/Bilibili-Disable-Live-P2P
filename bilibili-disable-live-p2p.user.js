// ==UserScript==
// @name         Bilibili 直播P2P禁用补丁
// @namespace    https://github.com/KDH-KDHKDH
// @version      1.0.0
// @description  于document-start阶段禁用WebRTC P2P功能，防止B站直播产生巨额的后台上传流量。
// @author       KDH-KDHKDH
// @match        *://live.bilibili.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    console.log('%c[P2P禁用补丁]：正在于 document-start 阶段执行...', 'color:red; font-weight:bold;');
    try {
        const WEBRTC_APIS = [
            'RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection',
            'RTCDataChannel', 'DataChannel'
        ];
        WEBRTC_APIS.forEach(function(api) {
            try { delete window[api]; } catch (e) {}
            try {
                window[api] = null;
            } catch (e) {
                try {
                    Object.defineProperty(window, api, {
                        get: function() { return null; },
                        set: function() {},
                        configurable: true
                    });
                } catch (e2) {
                    console.warn('[P2P禁用补丁]：无法禁用 ' + api);
                }
            }
        });
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia = () => Promise.reject(new Error('getUserMedia已被禁用'));
        }
        console.log('%c[P2P禁用补丁]：WebRTC P2P API 已禁用！', 'color:red; font-weight:bold;');
    } catch (error) {
        console.error('[P2P禁用补丁]：早期禁用失败:', error);
    }
})();