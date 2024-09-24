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
disres = document.querySelector(".one");
disop = document.querySelector(".two");
oper = document.querySelectorAll("#opr");
fin = document.querySelector('#fin');
clear = document.querySelector('#backspace');
reset = document.querySelector('#reset');

let marray = [];
function finish(){
    marray = disop.textContent.split(' ');
    let sum = 0;
    console.log(sum);
    console.log(marray);
    if(marray.length === 3) {
        let a = parseFloat(marray[0]);
        let op = marray[1];
        let b = parseFloat(marray[2]);
        console.log(a);console.log(b);console.log(op);
        switch (op) {
            case '+':
                sum += add(a,b);
                break;
            case '-':
                sum += sub(a,b);
                break;
            case '*':
                sum += mult(a,b);
                break;
            case '/':
                sum += divi(a,b);
                break;
            default:
                break;
        };
        if(sum%1 != 0){
            sum = sum.toFixed(2);
        };
        disres.textContent = sum;
        //disop.textContent = disres.textContent;
    }
    else if(isNaN(parseFloat(disres.textContent))) {
        disres.textContent = '0';
        disop.textContent = disres.textContent;
    }
    else {
        disres.textContent = disop.textContent;
    }
};

function numbers() {
    console.log(this.textContent);
    if (disop.textContent === "0" && this.textContent === "0") {
        disop.textContent = `${this.textContent}`;
    }
    else if(disop.textContent === "0" && this.textContent === "."){
        if(disop.textContent.split(' ')[disop.textContent.split(' ').length - 1].includes('.')){
            disop.textContent;
        }
        else{
            disop.textContent += `${this.textContent}`;
        };
    }
    else if(this.textContent=='.' && disop.textContent.split(' ')[disop.textContent.split(' ').length - 1].includes('.')){
        console.log(`there's already a decimal in the number`);
    }
    else if (disop.textContent === "0" && this.textContent !== "0") {
        disop.textContent = `${this.textContent} `;
    }
    else {disop.textContent += this.textContent;};
    if(disop.textContent.split(' ').length === 3){
        finish();
    };
};


function operator() {
    console.log(this.textContent);
    if(disop.textContent.split(' ').length < 3) {
        if(disop.textContent.at(-1) == ' ') {
            let myr = disop.textContent.split(' ').filter(o => o);
            console.log(myr)
            myr[myr.length - 1]=`${this.textContent}`;
            disop.textContent = myr.join(' ');
        }
        else if(typeof parseInt(disop.textContent) === "number" && typeof disop.textContent.at(-1) !== ' ') {
            disop.textContent += ` ${this.textContent} `;
        };
    }
    //else if(disop.textContent.split(' ').length <= 1) {
    //    disop.textContent = disres.textContent;
    //    disop.textContent += ` ${this.textContent} `;
    //}
    else {
        finish();
        disop.textContent = disres.textContent;
        disop.textContent += ` ${this.textContent} `;
    };
};


btn.forEach(key => key.addEventListener("click", numbers));
oper.forEach(key => key.addEventListener("click", operator));
fin.addEventListener("click", () => {
    finish(); 
    disop.textContent = disres.textContent;
});
clear.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    let myr = disop.textContent.split(' ');
    myr[myr.length - 1] = '';
    disop.textContent = myr.join(' ');
});

reset.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    disres.textContent = 'This line will be over-written by the result';
    disop.textContent = 0;
});