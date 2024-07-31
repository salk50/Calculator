function add(a,b) {
    return a+b;
};

function sub(a,b) {
    return a-b;
};

function mult(a,b) {
    return a*b;
};

function divi(a,b) {
    return a/b;
};

btn = document.querySelectorAll("#num");

btn.forEach(key => key.addEventListener('click', (e)=>{
    console.log(e.target.textContent);
}));