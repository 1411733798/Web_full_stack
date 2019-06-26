# for循环练习题
> 1、 操场上100多人排队，三人一组多1人，四人一组多2人，五人一组多3人，共多少人？(118，178)
```js
    for (i = 100; i <= 200; i++) {
        if (i % 3 == 1 && i % 4 == 2 && i % 5 == 3) {
            console.log(i);
            }
        }
```

> 2、 甲、乙、丙、丁四人共加工零件370个，如果把甲做的个数加10个，乙做的个数减20个，丙做的个数乘以2，丁做的个数除以2，四人做的零件数正好相等，求甲实际加工了多少个零件？(70)
```js
    for (let a = 0; a < 370; a++) {
        if (a + (a + 10 + 20) + ((a + 10) / 2) + ((a + 10) * 2) == 370) {
            console.log(a)
        }
     }
```

> 3、从1到500所有自然数中不含数字4的自然数共有多少个？（324）
```js
        let d = 0;
        for (let a = 0; a < 5; a++) {
            for (let b = 0; b <= 9; b++) {
                for (let c = 0; c <= 9; c++) {
                    if (a != 4 && b != 4 && c != 4) {
                         d++;
                    }
                }
            }
        }
         console.log(d);
```

> 4、两个自然数X，Y相除，商3余10，被除数、除数、商、余数的和是163，求被除数、除数。 (115、35)
```js
    for (let i = 1; i < 163; i++) {
        for (let j = 1; j < 163; j++) {
             if (i = j * 3 + 10) {
                 if (j + i + 3 + 10 == 163) {
                     console.log(i, j)
                }
            }
        }
    }
```

> 5.某数学竞赛中，参赛人数大约在380~450人之间。比赛结果，全体考生的总平均分为76分，男生的平均分为75分，女生的平均分为80.1分，求男女生各有多少人？(328，80)
```js
    for (let i = 1; i < 450; i++) {
        for (let j = 0; j < 450; j++) {
           if (i + j > 380 && i + j < 450) {
                if ((i * 75) + (j * 80.1) == (i + j) * 76) {
                    console.log(i, j)
                }
            }
        }
    }
```

> 6.一个四位数，恰好等于去掉它的首位数字之后所剩的三位数的3倍，这个四位数是多少？(1500)
```js
    var a, num;
    for (num = 1000; num < 9999; num++) {
        a = num % 1000; //所剩三位数
            if (a == num / 3) {
                console.log(num);
            }
    }
```

> 7.有一个两位数，如果在它的前面添一个3，可得到一个三位数；把3添在它的后面，也可以得到一个三位数。这两个三位数相差468，求原来的两位数。（85）
```js
    var num;
    for (num = 10; num < 100; num++) {
        if (num + 300 + 468 == num * 10 + 3) {
            console.log(num);
        }
    }
```

> 8.一个六位自然数，将其末位上数字7移至首位，其余数字依次向右移动一位，得到一个新的六位数，新的六位数是原六位数的4倍，求原数。 (179487)

        // 题目理解为算式
        // (700000+x)/(10x+7)=4;
        // 39x=699972;
        
```js
    var x = 699972 / 39;
    var result = x * 10 + 7;
    console.log(result);
```

> 9.要在[ ]、[ ]7、[ ]48这三个数中的每个[ ]内各填上1~9中的一个数字，使中间的两位数是左边的一位数和右边的三位数的平均数，求这三个数。（6、77、148）
```js
    var a, b, c;
    for (a = 1; a <= 9; a++) {
        for (b = 1; b <= 9; b++) {
            for (c = 1; c <= 9; c++) {
                if (b * 10 + 7 == (a + c * 100 + 48) / 2) {
                    console.log(a + "," + b + "," + c);
                }
            }
        }
    }
```

> 10、有红、白、黑三种球若干个，其中红、白球共25个，白、黑球共31个，红、黑球共28个，求这三种球各多少个？（11、14、17）
```js
    for (var red = 0; red <= 25; red++) {
        var white = 25 - red, black = 28 - red;
        if (31 == white + black) {
            console.log(red, white, black);
        }
    }
```

> 11.某人去购买教材和练习簿。已知教材每本10元，教参每本5元，练习簿每本0。5元，他总共购买了100本，用了100元。问他购买教材、教参和练习簿各多少本？（1、9、90）
```js
    var a, b, c;
    for (a = 1; a < 10; a++) {
        for (b = 1; b < 20; b++) {
            for (c = 1; c < 200; c++) {
                if (10 * a + 5 * b + c * 0.5 == 100 && a + b + c == 100) {
                    console.log(a + "," + b + "," + c);
                }
            }
        }
    }
```

> 12.输出四位自然数中各位数字之和为6并且各位数字互不相同的数，并统计个数。（1023、1032、1203、1230、1302、1320、……、3201、3210，18）
```js
    var a, b, c, d, num = 0;
    for (a = 1; a < 10; a++) {
        for (b = 0; b < 10; b++) {
            if (b == a) {
                continue;
            }
            for (c = 0; c < 10; c++) {
                if (c == b) {
                    continue;
                }
                for (d = 0; d < 10; d++) {
                    if (d == c) {
                        continue;
                    }
                    if (a + b + c + d == 6) {
                        num++;
                        console.log(a * 1000 + b * 100 + c * 10 + d);
                    }
                }
            }
        }
    }
```

> 13.由数字1、2、3、4、5、6六个数字共可组成多少个没有重复数字的四位数，输出这些数据并统计个数。（1234、1235、1236、1243、1245、1246、1253、……、6542、6543，S=360）
```js
    var a, b, c, d, num = 0;
    for (a = 1; a <= 6; a++) {
        for (b = 1; b <= 6; b++) {
            if (a == b) {
                continue;
            }
            for (c = 1; c <= 6; c++) {
                if (a == c || b == c) {
                    continue;
                } else {
                    for (d = 1; d <= 6; d++) {
                        if (a == d || b == d || c == d) {
                            continue;
                        }
                        console.log(a * 1000 + b * 100 + c * 10 + d);
                        num++;
                    }
                }
            }
        }
    }
    console.log(num);
```

> 14.将100元纸币兑换成10元、5元和1元纸币共20张，输出各种兑换法，并统计个数。（4、11，5；8、2、10；S=2）
```js
    var ten, five, one;
    for (ten = 1; ten < 10; ten++) {
        for (five = 1; five < 20; five++) {
            for (one = 1; one < 100; one++) {
                if (ten + five + one == 20 && ten * 10 + five * 5 + one * 1 == 100) {
                    console.log(ten + "," + five + "," + one);
                }
            }
        }
     }
```

> 15、打印“＊”字三角形：从键盘输入一个自然数Ｎ（１《Ｎ《 ９）。根据Ｎ的值，打印输出对应的“＊”字三角形。如Ｎ＝４，输出

*    　　　　　　　　  ＊
*
*    　　　　　　　　＊＊＊
*
*     　　　　　　　＊＊＊＊＊
*
*     　　　　　　＊＊＊＊＊＊＊

```js
    for (var a = 1; a < 9; a+=2) {
        for (var c = 0; c < 9 - a; c++) {
            document.write("&nbsp");
        }
        for (var b = 0; b < a; b++) {
            document.write("*&nbsp");
        }
        document.write("<br>");
     }
```

> 16.打印“＊”字三角形：从键盘输入一个自然数Ｎ（１《Ｎ《 ９）。根据Ｎ的值，打印输出对应的“＊”字三角形。如Ｎ＝４，输出

*     　　　　　　　　　   ＊
*
*     　　　　　　　　  ＊＊＊
*
*     　　　　　　　＊＊＊＊＊
*
*     　　　　　＊＊＊＊＊＊＊
*
*     	      ＊＊＊＊＊
*
*    	    ＊＊＊
*
*          ＊

```js
   for (i = 7; i >= 1; i--) {
        if (i % 2 > 0){//为了让星号以2递增递减，所以型号数量为2，4等偶数数量的行数都必须消失，所以在输出三角形的语句执行之前加入了一个判断i是否为奇数，是奇数就执行代码，否则不执行，这样就达到了1，3,5递增的三角形。
            for (k = i; k > 1; k -= 1) {
                    document.write("&nbsp")
                }
                for (var a = 7; a >= i; a--) {
                    document.write("*")
                }
                document.write("<br/>");
            }
        }
        for (i = 3; i < 9; i++) {
            if (i % 2 > 0)//输出倒三角的for语句，方法和正三角基本一样，两个三角组成一个菱形，其实其更像一个平行四边形。
            {
                for (k = i; k > 1; k -= 2) {
                    document.write("&nbsp")
                }
                for (var a = 7; a >= i; a--) {
                    document.write("*")
                }
                document.write("<br/>");
            }
        }
        var large = 10;  //设置行数
        for (var i = 0; i < large; i++) {
            for (var d = 0; d < large - i; d++) {

                p = i * 2 + 1;
                document.write('*');
            }
            document.write("<br>");
        }
    }  
```

> 17.把16题中的菱形变为空心的

```js
   for (var i = 0; i < 6; i++) {
        for (var j = 6; j > i; j--) {
            document.writeln("&nbsp");
        }
        for (var k = 1; k <= (2 * i - 1); k++) {
            if (k == 1 || k == (2 * i - 1)) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp");
            }
        }
        document.writeln("</br>");
    }
    for (var i = 4; i > 0; i--) {
        for (var j = 5; j >= i; j--) {
            document.writeln("&nbsp");
        }
        for (var k = 1; k <= (2 * i - 1); k++) {
            if (k == 1 || k == (2 * i - 1)) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp");
            }
        }
        document.writeln("</br>")
    }

```
