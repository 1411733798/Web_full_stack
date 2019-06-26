// 轮播图

// banner 轮播

let banner = document.getElementsByClassName('ban_pic');
let picc = document.querySelectorAll('#banner .ban_w .ban_le2 .ban_pic li');
let btns = document.querySelectorAll('#banner .ban_w .ban_le2 .ban_btn li');
let lbtn = document.querySelector('#banner .ban_w .ban_le2 .ban_l');
let rbtn = document.querySelector('#banner .ban_w .ban_le2 .ban_r');
console.log(banner, picc, btns, lbtn, rbtn);
let m = 0;
function fun() {
    if (m >= picc.length) {
        m = 0;
    }
    // console.log(m)
    for (let i = 0; i < picc.length; i++) {
        picc[i].classList.remove('active');
        btns[i].classList.remove('active');
    }
    picc[m].classList.add('active');
    btns[m].classList.add('active');
    // console.log(m)
    m++;
    // console.log(m)
}
let n = setInterval(function () {
    fun();
}, 1000)
banner[0].onmouseenter = function () {
    clearInterval(n);
}
banner[0].onmouseleave = function () {
    n = setInterval(function () {
        fun();
    }, 1000)
}
for (let j = 0; j < btns.length; j++) {
    btns[j].onclick = function () {
        m = j;
        fun();
    }
}
lbtn.onclick = function () {
    m -= 2;
    if (m < 0) {
        m = picc.length - 1;
    }
    fun();
    console.log(m)
}
rbtn.onclick = function () {
    fun();
}



// cellspacing间隙  cellpadding内填充 
//  valign="top" 垂直向上居中  
// rowspan竖跨几列  colspan横跨几列


// 左右轮播


let pic = document.querySelector('#j_mi .mi_w .sk_list .slider .slider_tu');
let butLeft = document.querySelector('#j_mi .mi_w .sk_list .slider_l');
let butRight = document.querySelector('#j_mi .mi_w .sk_list .slider_r');
console.log(pic, butLeft, butRight);

function contFun(slider, picW, a = "right") {                    //a="left" 是默认值，默认值一般写最后

    if (a == "left") {
        slider.style.marginLeft = -picW + "px";
        let last = slider.lastElementChild;
        let first = slider.firstElementChild;
        slider.insertBefore(last, first);
        animate(slider, { marginLeft: 0 }, 64000)
    } else {
        animate(slider, { marginLeft: -picW, }, 1000, function () {
            let first = slider.firstElementChild;
            slider.appendChild(first);
            slider.style.marginLeft = "0";
        })
    }

}
let box = document.querySelector('.slider');

let picW = pic.offsetWidth;
// console.log(pic)


let timeRFun = setInterval(function () {
    contFun(box, picW, "right");
}, 3000)
butRight.onmouseenter = function () {
    clearInterval(timeRFun);
    butRight.style.opacity = "1";
    butRight.onclick = function () {
        contFun(box, picW, "left");
    }
}
butRight.onmouseleave = function () {
    butRight.style.opacity = "0.4";
    timeRFun = setInterval(function () {
        contFun(box, picW, "right");
    }, 3000)
}

butLeft.onmouseenter = function () {
    clearInterval(timeRFun);
    butLeft.style.opacity = "1";
    butLeft.onclick = function () {
        contFun(box, picW, "right");
    }
}
butLeft.onmouseleave = function () {
    butLeft.style.opacity = "0.4";
    timeRFun = setInterval(function () {
        contFun(box, picW, "right");
    }, 3000)
}


// 小轮播



let bar = document.querySelector('#j_mi .mi_w .sk_ch .ch_wid');
let l = document.querySelectorAll('#j_mi .mi_w .sk_ch .ch_wid li');
let p = document.querySelectorAll('#j_mi .mi_w .sk_ch .ch_tom li');
let bo = document.querySelector('#j_mi .mi_w .sk_ch');
console.log(bar, l, p, bo);
// console.log(pt);
function gdhz(ll, pt, box) {


    let n = 0;
    let tm = function () {

        for (let a = 0; a < ll.length; a++) {
            pt[a].classList.remove('active');
        }
        if (n >= ll.length) {
            n = 0;
        }
        pt[n].classList.add('active');
        bar.style.left = "-" + n * 180 + "px";
        n++;
        console.log(n)
    }
    let t = setInterval(function () {
        tm();
    }, 1000);
    box.onmouseenter = function () {
        clearInterval(t);
    }
    box.onmouseleave = function () {
        t = setInterval(function () {
            tm();
        }, 1000);
    }
    for (let d = 0; d < pt.length; d++) {
        pt[d].onclick = function () {
            n = d;
            tm();
        }
    }
}
gdhz(l, p, bo);


let coo = document.querySelector('#core .core_w .core1 .corpic .coo');
let cooli = document.querySelectorAll('#core .core_w .core1 .corpic li');
let radom = document.querySelectorAll('#core .core_w .core1 .rdom span');
let coopic = document.querySelector('#core .core_w .core1 .corpic')
console.log(coo,cooli,radom,coopic);