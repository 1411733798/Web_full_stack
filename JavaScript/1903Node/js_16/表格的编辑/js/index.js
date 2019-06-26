let arr = [
    { name: "光头强", sex: "男", age: "30", height: "170", weight: "60", type: "o" },
    { name: "光头强", sex: "男", age: "30", height: "170", weight: "60", type: "o" },
    { name: "光头强", sex: "男", age: "30", height: "170", weight: "60", type: "o" },
    { name: "光头强", sex: "男", age: "30", height: "170", weight: "60", type: "o" },
    { name: "光头强", sex: "男", age: "30", height: "170", weight: "60", type: "o" },

];
//渲染
//删除
//将数据保存到本地存储中 保存的是一个字符串
// localStorage.setItem("person", JSON.stringify(arr));
//从本地存储中得到数据 注意将本地存储中的字符串转为数组
let newArr;
let str = "";
let tbody;
render();
//将数据渲染到页面 ,
function render() {
    newArr = JSON.parse(localStorage.getItem("person"));
    tbody = document.querySelector("tbody");
    newArr.forEach((v, i) => {
        //字符串模板进行拼接，里面可以按照html格式书写
        v.id = i; //给数组中的每个对象添加id属性,属性值为下标
        str += `  <tr id="${v.id}">  //将id属性绑定到tr标签上
                       <td >          //input让表格可编辑
                       <input type="text" value="${v.name}" name="name" style="border:0; outline:none">
                       </td>
                       <td>
                       <input type="text" value="${v.sex}" name="sex">
                       </td>
                       <td>
                        <input type="text" value="${v.age}" name="age">
                        </td>
                       <td>
                        <input type="text" value="${v.height}" name="height">
                        </td>
                       <td> 
                       <input type="text" value="${v.weight}" name="weight"></td>
                       <td>
                       <input type="text" value="${v.type}" name="type"></td>
                       <td>
                       <button type="button" class="btn btn-danger">删除</button>
                       </td>
                      </tr>      
        
           `;
    })
    tbody.innerHTML = str; //在tbody中插入凭借后的字符串innerHTML识别标签
    str = ""; //渲染结束后，要清空字符串，确保更改之后的字符串可以覆盖原来的字符串
}
//删除功能，将点击事件委派给父元素tbody,用target对象判断点击的是哪个子元素
tbody.addEventListener("click", del, false);

function del(e) {
    let delBtn = e.target; //target用来判断点击的是哪个子元素 delBtn代表删除按钮
    if (delBtn.localName == "button") { //判断点击的的子元素是否是删除按钮
        let pid = delBtn.parentElement.parentElement.id; //获取点击按钮的父元素的父元素的id属性，即点击的按钮的那一行的id属性值
        newArr.forEach((value, index) => {
            //把点击按钮的所对应得id和每一个对象里面的id进行比较，如果相等。就进行删除
            if (value.id = pid) {
                newArr.splice(index, 1); //移除原数组中的下标为index的那一行
                localStorage.setItem("person", JSON.stringify(newArr));
                render();
                //删除后重新存储到本地，重新渲染到页面
            }
        })
    }
}
//更改按钮
tbody.addEventListener("click", function(e) {
        let input = e.target; //通过target对象的属性判断点击的是不是input
        if (input.localName == "input") {
            input.onblur = function() {
                let val = input.value; //存储input当中的内容
                console.log(val);
                let n = input.name; //存储更改的是那个属性的属性名，当对象的属性名被保存在一个变量中时候，要访问它要加[]
                let pid = input.parentElement.parentElement.id;
                console.log(pid); //获得点击的那一行的id
                newArr.forEach((v, i) => { //对原数组进行遍历
                    if (v.id == pid) {
                        v[n] = val; //给相对应的那一行中对应的属性写他的属性值
                    }
                })
                localStorage.setItem("person", JSON.stringify(newArr)); //将更改后的新数组对象存储到本地 再渲染到页面
                render();
            }

        }
    }, false)
    //添加
let addbtn = document.querySelector(".btn.btn-success"); //获取添加按钮
addbtn.onclick = function() {
    newArr.push({ //当点击添加按钮时，向原数组中插入一行空的单元格
        name: "",
        age: "",
        sex: "",
        height: "",
        weight: "",
        type: ""
    })
    localStorage.setItem("person", JSON.stringify(newArr)); //将插入空的一行的单元格的新数组保存到本地
    render();
}