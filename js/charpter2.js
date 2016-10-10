function showPic(whichpic) {
    var title = whichpic.getAttribute('title');
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    var description = document.getElementById('description');
    placeholder.setAttribute('src', source);
    description.firstChild.nodeValue = title;
}