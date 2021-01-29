function fun1(){
    sel = document.getElementById('mySelect').selectedIndex;
    options = document.getElementById('mySelect').options;
    alert('Выбрана опция' + options[sel].text + typeof(sel) + typeof(options));
}