# learn_javascript
Just note about learn Js

Charpter1：
1、data type：
    a、string
    b、number
    c、boolean
2、Array
var arr = new Array();
var arr = new Array('1','2');
var arr = Array('1','2');

related Array
var son = Array();
son['name'] = 'xinyang';
son['age'] = 1;
son['lover'] = true;
var baby = Array();
baby['my'] = son;

3、Operation
Arithmetic operation
    + - * / += -= *= /= =

4、Condition Statement
if(condition){
    statement
}
compare operater
> < >= <= != == 
Arithmetic operater
&& || 

5、circle statement
while(condition){}   do……while()  for() 

6、function
a、organize statement to perform some function.eg：
function convertToCelsius(temp){
    var result = temp - 32;
    result = result / 1.8;
    return result;
}
b、 variable scope
global variable:useful in file
local variable：just useful in function(must decorated by var)

7、Object
Object is including property and method

native Object
Array|Date|Document|Window……

Charpter2:DOM
四个非常实用的DOM 方法:getElementById getElementsByTagName getAttribute 和 setAttribute
1、DOM: Document Object Model(文档对象模型)
2、JS中定义的对象分为三类:
 用户自定义对象
 内建对象
 宿主对象
3、DOM将一份文档表示为一棵树，即DOM Tree。
Tree可以表示为Element的形式，每个Element包括文本节点和属性节点

4、CSS：层叠样式表
其也是一种Tree结构

5、node节点中的nodeType属性有以下取值
 元素节点的nodeType属性为1
 属性节点的nodeType属性为2
 文本节点的nodeType属性为3


第三章:JS编程原则和良好习惯
    1、预留后路:确保网页在没有Js的情况下也能正常工作
        杜绝"javascript:"这样的伪协议
    2、分离JS:将网页结构和内容与JS脚本行为分开
        将JS文件和HTML文件相互分离
        将HTML中的obclick等方法使用JS进行绑定
    3、向后兼容:兼容老版本
        浏览器嗅探技术:
