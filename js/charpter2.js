function showPic(whichpic) {
    if (!document.getElementById('placeholder')) return true;
    var source = '';
    if (whichpic.getAttribute('href')) {
        source = whichpic.getAttribute('href');
    }
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);

    if (!document.getElementById('description')) return false;
    var text = '';
    if (whichpic.getAttribute('title')) {
        text = whichpic.getAttribute('title');
    }
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;

    return false;
}

function prepareGallery() {
    if (document.getElementsByTagName) {
        if (document.getElementById) {
            if (document.getElementById('imagegallery')) {
                var gallery = document.getElementById('imagegallery');
                var links = gallery.getElementsByTagName('a');
                if (links && links.length > 0) {
                    for (var i = 0; i < links.length; i++) {
                        links[i].onclick = function() {
                            return showPic(this);
                        }
                    }
                }
            }
        }
    }
}

function preparePlaceHolder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;

    var placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', '../images/zhang1.jpg')
    placeholder.setAttribute('alt', 'my imae gallery');

    var description = document.createElement('p');
    description.setAttribute('id', 'description')
    var descText = document.createTextNode('Choose an image');
    description.appendChild(descText);

    // document.body.appendChild(placeholder);
    // document.body.appendChild(description);
    var gallery = document.getElementById('imagegallery');
    insertAfter(placeholder, gallery);
    insertAfter(placeholder, gallery);
    //gallery.parentNode.insertBefore(placeholder, gallery);
    //gallery.parentNode.insertBefore(description, gallery);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceHolder);