parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n="\n/**\n * 这是一段生成太极的代码\n * 睁大眼睛，好戏开始了\n **/\n#taiChi {\n    border: 1px solid black;\n    width: 300px;\n    height: 300px;\n    border-radius: 50%;\n    box-shadow: 1px 0px 3px 0px rgba(0,0,0,0.5);\n    background: linear-gradient(to right, #fff, #fff 50%, #000 50%);\n    \n}\n  #html{\n      word-break:break-all;\n  }\n \n  #taiChi::before {\n    width: 150px;\n    height: 150px;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius: 50%;\n    background:#000;\n    background: radial-gradient(circle, rgb(251, 251, 252) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n    \n  }\n  \n  #taiChi::after {\n    width: 150px;\n    height: 150px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius: 50%;\n    background:#fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n  }\n \n",r=document.querySelector("#html"),e=document.querySelector("#style");document.documentElement,console.log(r);var a=0,t="";function o(){setTimeout(function(){t+=n[a],r.innerHTML=t.replace(/\n/g,"<br>").replace(" ","&nbsp;"),e.innerHTML=t,window.scrollTo(0,99999),r.scrollTo(0,99999),++a<n.length&&o()},50)}o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.3cd2f813.js.map