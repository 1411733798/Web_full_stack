window.onload=function(){

    //顶部购物车
    let shopCar=document.querySelector(".header .con .shoppingCart");
    let shopCon=document.querySelector(".header .con .shoppingCart .hua");
    shopCar.onmouseover=()=>{
        shopCon.style.display="block";
    }
    shopCar.onmouseout=()=>{
        shopCon.style.display="none";
    }

    //下拉列表部分(有问题)
    let dropMenu=document.querySelectorAll(".bigBox .logo .logoMenu>span");
    let dropDown=document.querySelectorAll(".bigBox .dropDown");
    for(let i=0;i<dropDown.length-1;i++){
        dropMenu[i].onmouseover=()=>{
            dropDown.forEach((v)=>{
                v.style.display="none";
            })
            dropDown[i].style.display="block";
        }
        dropDown[i].onmouseleave=()=>{
            dropDown[i].style.display="none";
        }
    }


    //轮播图与轮播点
    let bannerImg=document.querySelectorAll(".bigBox .banner .imgBox a img");
    let bannerDot=document.querySelectorAll(".bigBox .banner .point .dot");
    let index=0;
    bannerImg[0].style.opacity=1;
    bannerDot[0].classList.add("dot1");
    function bannerMove(){
        index++;
        if(index>bannerImg.length-1){
            index=0;
        }
        bannerDot.forEach((v,i)=>{
            v.classList.remove("dot1");
            bannerImg[i].style.opacity=0;
        })
        bannerImg[index].style.opacity=1;
        bannerDot[index].classList.add("dot1");
    }
    let bannerSet=setInterval(()=>{
        bannerMove();
    },3000)
    //轮播框，移入时停止，移出时继续
    let bannerBox=document.querySelector(".bigBox .banner");
    bannerBox.onmouseover = ()=>{
        clearInterval(bannerSet);
    }
    bannerBox.onmouseout=()=>{
        bannerSet=setInterval(()=>{
            bannerMove();
        },3000)
    }
    //轮播点点击切换
    bannerDot.forEach((v,i)=>{
        v.onmouseover=()=>{
            bannerDot.forEach((x,y)=>{
                x.classList.remove("dot2");
            })
            v.classList.add("dot2");
        }
        v.onmouseout=()=>{
            v.classList.remove("dot2");
        }
        v.onclick=()=>{
            index=i;
            bannerDot.forEach((x,y)=>{
                x.classList.remove("dot1","dot2");
                bannerImg[y].style.opacity=0;
            })
            v.classList.add("dot1");
            bannerImg[index].style.opacity=1;
        }
    })
    //左右箭头
    let bannerLeft=document.querySelector(".bigBox .banner .btnLeft");
    let bannerRight=document.querySelector(".bigBox .banner .btnRight");
    bannerLeft.onclick=()=>{
        index--;
        if(index<0){
            index=bannerImg.length-1;
        }
        bannerDot.forEach((v,i)=>{
            v.classList.remove("dot1");
            bannerImg[i].style.opacity=0;
        })
        bannerImg[index].style.opacity=1;
        bannerDot[index].classList.add("dot1");
    }
    bannerRight.onclick=()=>{
        bannerMove();
    }



    //轮播图的左侧菜单
    let leftBox=document.querySelector(".bigBox .banner .bannerLeft")
    let leftMenu=document.querySelectorAll(".bigBox .banner .left .lie");
    let leftCon=document.querySelectorAll(".bigBox .banner .selCardBox>li");
    leftMenu.forEach((v,i)=>{
        v.onmouseover=()=>{
            leftCon.forEach((x,y)=>{
                x.style.display="none";
                leftMenu[y].classList.remove("lie1");
            })
            leftCon[i].style.display="block";
            leftMenu[i].classList.add("lie1");
        }
    })
    leftBox.onmouseleave=()=>{
        leftCon.forEach((x,y)=>{
            x.style.display="none";
            leftMenu[y].classList.remove("lie1");
        })
    }

    //家电，智能等，每块中的左侧的选项卡
    // for(let i=1;i<6;i++){
    //     let same=document.querySelector(`.same${i}`);
    //     let sameTop=document.querySelectorAll(`.same${i} .top .right span`);
    //     let sameBot=document.querySelectorAll(`.same${i} .bottom .right`);
    //     sameBot[0].style.display="block";
    //     sameTop[0].classList.add("span1");
    //     sameTop.forEach((value,index)=>{
    //         value.onmouseover=()=>{
    //             sameTop.forEach((v,i)=>{
    //                 v.classList.remove("span1");
    //                 sameBot[i].style.display="none";
    //             })
    //             value.classList.add("span1");
    //             sameBot[index].style.display="block";
    //         }
    //     })
    // }
   
    function selectCart(same){ 
        let sameTop=document.querySelectorAll(same+" .top .right span");
        let sameBot=document.querySelectorAll(same+" .bottom .right");
        sameBot[0].style.display="block";
        sameTop[0].classList.add("span1");
        sameTop.forEach((value,index)=>{
            value.onmouseover=()=>{
                sameTop.forEach((v,i)=>{
                    v.classList.remove("span1");
                    sameBot[i].style.display="none";
                })
                value.classList.add("span1");
                sameBot[index].style.display="block";
            }
        })
    }

    
    for(let i=1;i<6;i++){
        let same=`.same${i}`;
        selectCart(same);
    }
    // let sames=document.querySelectorAll(".same");
    // sames.forEach((v,i)=>{
    //     let same=v.ClassName;
    //     // selectCart(same);
    //     console.log(same);
    // })

    //内容部分
    for(let i=1;i<=4;i++){
        let conText=document.querySelectorAll(`.contents .bottom .box${i} .conBox .con a`);
        let conDot=document.querySelectorAll(`.contents .bottom .box${i} .conBox .dian span`);
        let conLeft=document.querySelector(`.contents .bottom .box${i} .conBox .leftBtn`)
        let conRight=document.querySelector(`.contents .bottom .box${i} .conBox .rightBtn`)
        conText[0].style.left=0;
        conDot[0].classList.add("span1");
        
        let index=0,next=0;

        //向右滑动
        function toRight(){
            conText[index].style.left=0;
            conText[next].style.left="-332px";
            animate(conText[index],{left:332});
            animate(conText[next],{left:0});
            conDot[index].classList.remove("span1");
            conDot[next].classList.add("span1");
            index=next;
        }
        //向左滑动
        function toLeft(){
            conText[index].style.left=0;
            conText[next].style.left="332px";
            animate(conText[index],{left:-332});
            animate(conText[next],{left:0});
            conDot[index].classList.remove("span1");
            conDot[next].classList.add("span1");
            index=next;
        }

        //点击左箭头，向右滑动
        conLeft.onclick=()=>{  
            next--;
            if(next>=0){
                toRight();
            }else{
                next++;
            } 
        }
        //点击右箭头，向左滑动
        conRight.onclick=()=>{  
            next++;
            if(next<=conText.length-1){
                toLeft();
            }else{
                next--;
            }
        }
        conDot.forEach((v,i)=>{
            v.onclick=()=>{
                next=i;
                if(next<index){  // 向右滑动
                    toRight();
                }else if(next>index){  //向左滑动
                    toLeft();
                }  
            }
        })

    }
    







    //为你推荐


}