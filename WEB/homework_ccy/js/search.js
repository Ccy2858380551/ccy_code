var oInp = document.getElementById('inp');
var oBtn = document.getElementById('btn');

oBtn.onclick = function () {
    Search();
}

document.onkeydown = function () {
    if (event.keyCode == 13) {
        Search();
    }
}

function Search() {
    var url = 'https://www.baidu.com/s?wd=' + oInp.value;
    window.open(url);
}