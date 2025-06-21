let count = 0;
function increase() {
    count ++;
    document.getElementById('counter').textContent = count;
}

function restart(){
    count = 0;
    document.getElementById('counter').textContent = count;
}