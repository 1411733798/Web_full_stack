animateBanner({
    father: ".banner-box",
    imgBox: ".banner-box > img",
    dotBox: ".dot",
    timer: 2000,
    btnL: ".banner-pre",
    btnR: ".banner-next",
    left: 1226,
    active: "xuanzhong"
});

function animateBanner(obj) {
    /*
        obj中的属性对应的内容:
        obj.father---大盒子的选择器
        obj.imgBox---图片的选择器
        obj.dotBox---轮播点的选择器
        obj.timer---轮播时间
        obj.btnL---左侧按钮(点击显示上一张)
        obj.btnR---右侧按钮(点击显示下一张)
        obj.left---图片的宽度或者图片移动的距离
        obj.active---轮播点的选中状态对应的类名
    */
    // 使用双下标，表示当前图片和下一张图片，结合animate函数实现无缝轮播(注意一定要加载animate.js文件)
    // 获取图片
    let imgBox = document.querySelectorAll(obj.imgBox);
    // 获取最大的盒子，移入清除自动轮播，移除继续轮播
    let bigBox = document.querySelector(obj.father);
    // 获取左右两侧的按钮
    let btnR = document.querySelector(obj.btnR);
    let btnL = document.querySelector(obj.btnL);
    // 获取轮播点
    let dotBox = document.querySelectorAll(obj.dotBox);
    // 默认第一张图片显示
    imgBox[0].style.left = 0;
    // 定义开关，使用开关来控制点击事件
    let flag = true;
    let index = 0; // 当前图片
    let next = 0; // 下一张图片
    let t = null; // 声明变量用来保存时间函数
    autoMove();
    // 将自动轮播的时间函数进行封装
    function autoMove() {
        t = setInterval(() => {
            next++;
            if (next > imgBox.length - 1) {
                next = 0;
            }
            nextImg();
        }, obj.timer);
    }
    // 向右运动，点击左侧按钮或者点击轮播点的下标小于当前图片的下标，跳转到下一张图片的函数封装
    function nextImg() {
        dotBox.forEach((v) => {
                v.classList.remove(obj.active);
            }) // 清除选中状态
        imgBox[index].style.left = 0; // 当前页的定位数值
        imgBox[next].style.left = obj.left + "px"; // 下一页的定位数值
        dotBox[next].classList.add(obj.active); // 自动轮播时添加轮播点的选中状态
        animate(imgBox[index], { left: -obj.left }); //当前页移动到左侧
        animate(imgBox[next], { left: 0 }, function() {
            index = next;
            flag = true;
        }); // 下一页移动到显示区域
    }
    // 点击左侧按钮显示上一张图片，当点击轮播点的下标小于当前选中轮播点的下标
    function prevImg() {
        dotBox.forEach((v) => {
            v.classList.remove(obj.active);
        })
        imgBox[index].style.left = 0;
        imgBox[next].style.left = -obj.left + "px";
        dotBox[next].classList.add(obj.active);
        animate(imgBox[index], { left: obj.left });
        animate(imgBox[next], { left: 0 }, function() {
            index = next;
            flag = true;
        })
    }
    // 点击左侧按钮，显示上一张图片
    btnL.onclick = function() {
            if (flag) {
                flag = false;
                next--;
                if (next < 0) {
                    next = imgBox.length - 1;
                }
                prevImg();
            } else {
                return;
            }
        }
        // 点击右侧按钮，显示下一张图片
    btnR.onclick = function() {
            if (flag) {
                flag = false;
                next++;
                if (next > imgBox.length - 1) { //如果数值大于图片的数量，就返回第一张
                    next = 0;
                }
                nextImg();
            } else {
                return;
            }
        }
        // 轮播点点击添加选中状态显示相应的图片
    dotBox.forEach((v, i) => {
            v.onclick = function() {
                if (flag) {
                    flag = false;
                    next = i;
                    if (next > index) {
                        nextImg();
                    } else if (next < index) {
                        prevImg();
                    } else {
                        flag = true;
                        return;
                    }
                } else {
                    return;
                }

            }
        })
        // 移入大盒子，停止自动轮播
    bigBox.onmouseover = function() {
            clearInterval(t);
        }
        // 移出大盒子，继续自动轮播
    bigBox.onmouseout = function() {
        autoMove();
    }
}