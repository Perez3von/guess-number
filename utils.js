export function genRandNum(num){


    return Math.floor(Math.random() * num) + 1;


}


export function message(ele, str){


    return ele.innerText = str;


}

export function toggle(str){

    return str.disabled = true;         


}
