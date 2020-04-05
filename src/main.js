let str = `
/**
 * 这是一段生成太极的代码
 * 睁大眼睛，好戏开始了
 **/
#taiChi {
    border: 1px solid black;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 1px 0px 3px 0px rgba(0,0,0,0.5);
    background: linear-gradient(to right, #fff, #fff 50%, #000 50%);
    
}
  #html{
      word-break:break-all;
  }
 
  #taiChi::before {
    width: 150px;
    height: 150px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius: 50%;
    background:#000;
    background: radial-gradient(circle, rgb(251, 251, 252) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    
  }
  
  #taiChi::after {
    width: 150px;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
  }
 
`;
let html = document.querySelector("#html");
let style = document.querySelector("#style");

let n = 0;
let content = "";
function step() {
  setTimeout(() => {
    content += str[n];
    html.innerHTML = content.replace(/\n/g, "<br>").replace(" ", "&nbsp;");
    style.innerHTML = content;
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    n++;
    if (n < str.length) {
      step();
    }
  }, 50);
}

step();
