var chain = [];

f = function (a, b) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
};

var kc = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

(function () {
    document.addEventListener('keyup', function (e) {
        if (e.ctrlKey && e.keyCode == 81) {
            var t = (window.getSelection) ? window.getSelection().toString() : document.selection.createRange().text;
            window.open(encodeURI('https://www.google.com/search?&q=' + t), '_blank');
        } else if (kc.length > chain.length) {
            chain.push(e.keyCode);

            if (f(chain, kc)) {
                if (chain.length == kc.length) { alert('very funny'); chain = []; }
            } else {
                chain = [];
            }
        }
    }, false);
})();


