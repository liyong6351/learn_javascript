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

addLoadEvent(prepareGallery);