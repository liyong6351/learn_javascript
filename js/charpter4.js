/**
 * 获取显示所有的缩略词解释
 */
function displayAbbreviaions() {
    var abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) return false;

    var defs = Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if (current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = abbreviations[i].lastChild.nodeValue;
        defs[key] = definition;
    }

    var dlist = document.createElement('dl');
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header = document.createElement('h2');
    var header_text = document.createTextNode('Abbreviations');
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

/**
 * 获取显示所有的参考文献
 */
function displayCitations() {
    var quotes = document.getElementsByTagName('blockquote');
    if (quotes.length < 1) return false;

    for (var i = 0; i < quotes.length; i++) {
        var current_quote = quotes[i];
        if (!current_quote.getAttribute('cite')) continue;

        var url = current_quote.getAttribute('cite');
        var quoteChildren = current_quote.getElementsByTagName('*');

        if (quoteChildren.length < 0) continue;
        var elem = quoteChildren[quoteChildren.length - 1];
        var link = document.createElement('a');
        var link_text = document.createTextNode('source');
        link.appendChild(link_text);
        link.setAttribute('href', url);
        var superscript = document.createElement('sup');
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

/**
 * 获取显示所有的快捷方式
 */
function displayAccessKeys() {
    var links = document.getElementsByTagName('a');
    if (links.length < 1) return false;

    var akey = new Array();
    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        if (!current_link.getAttribute('accesskey')) continue;

        var key = current_link.getAttribute('accesskey');
        var text = current_link.lastChild.nodeValue;
        akey[key] = text;
    }

    var list = document.createElement('ul');
    for (key in akey) {
        var text = akey[key];
        var str = key + ' : ' + text;
        var item = document.createElement('li');
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }

    var header = document.createElement('h3');
    var header_text = document.createTextNode('AccessKeys');
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAbbreviaions);
addLoadEvent(displayCitations);
addLoadEvent(displayAccessKeys);