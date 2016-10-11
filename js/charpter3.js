document.write('<p>test document.write => This is inserted</p>');


window.onload = function() {
    /**
     * 1、使用creteElement()创建一个元素节点(这个节点和DOM无关)
     * 2、创建文本节点
     * 3、将文本节点追加到新创建的元素中 
     * 4、将元素节点追加到DOM Tree中
     */

    var para = document.createElement("h1");
    var firstText = document.createTextNode('This is ');
    var secondText = document.createTextNode(' content.');
    var emNode = document.createElement('em');
    var emText = document.createTextNode('my');

    emNode.appendChild(emText);
    para.appendChild(firstText);
    para.appendChild(emNode);
    para.appendChild(secondText);

    var testDiv = document.getElementById('testdiv');
    testDiv.appendChild(para);

}