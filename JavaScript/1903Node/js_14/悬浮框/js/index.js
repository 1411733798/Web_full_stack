window.onload = function() {
    //通过控制元素的定位属性来控制他的运动
    //获取元素
    let box = document.querySelector('.box');
    //给元素添加定位属性
    box.style.position = "fixed"; //给悬浮框添加定位属性
    let lefts; //声明距离左侧的位置
    let tops; //声明距离页面右侧的位置 
    let x = 10; //增加的速度 在水 平方向上每次移动的距离
    let maxW; //声明页面的实际宽度
    let maxH; //声明页面的实际高度
    let y = 10; //在垂直方向上每次移动的距离
    let del = document.querySelector(".del"); //获取关闭的按钮
    box.style.position = "fixed";

    function move() {
        lefts = box.offsetLeft; //盒子距离浏览器左侧的位置，
        tops = box.offsetTop; //盒子距离浏览器顶部的位置
        maxW = window.innerWidth; //获取页面的宽度
        maxH = window.innerHeight; //获取页面的高度
        if (lefts >= maxW - box.offsetWidth || lefts < 0) { //当悬浮框移动到浏览器的最右侧时，要使悬浮框的left--，即向相反方向移动
            x = -x;
        }
        if (tops >= maxH - box.offsetHeight || tops < 0) { //当悬浮框移动到浏览器最底部时，要是悬浮框的的top--,即向相反反方向移动
            y = -y;
        }
        lefts += x; //每隔一段时间left要移动对应的距离
        tops += y; //每隔一段时间top改变对应的的距离
        box.style.left = lefts + "px"; //将距离左侧的值赋给box的属性left，记得加单位
        box.style.top = tops + "px";
    }
    let t = setInterval(move, 20); // 设置定时器，每过一段时间执行代码
    box.onmouseover = function() { //鼠标移入，让悬浮框停止移动
        clearInterval(t);
    }
    box.onmouseout = function() { //鼠标移出，让悬浮框重新移动
        t = setInterval(move, 20);
    }
    del.onclick = function() { //点击关闭悬浮框
        box.style.display = "none";
    }
}