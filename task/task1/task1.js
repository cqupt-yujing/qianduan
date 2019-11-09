var newchild = document.createElement("li");
var newcode = document.createTextNode("首页");
newchild.appendChild(newcode);
var parent = document.getElementsByClassName("nav");
var firstchild = document.getElementsByClassName("item");
parent.insertBefore(newchild,firstchild);//添加在第一个的 首页

var second = document.createElement("li");
var secondcode = document.createTextNode("关于");
second.appendChild(secondcode);
var parent = document.getElementsByClassName("nav");
parent.appendChild(second);//添加在末尾的 关于

var third = document.createElement('li');
var thirdcode = document.createTextNode('文章');
third.appendChild(thirdcode);
var parent= document.getElementsByClassName('nav');
var lastchild = document.getElementsByClassName('item');
parent.replaceChild(third.lastChild);//将 运动 更改为 文章

var parent = document.getElementsByClassName('item');
var second =document.getElementsByClassName('评论');
parent.removeChild(second);//删除 评论

