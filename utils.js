export function genRandNum(num){


    return Math.floor(Math.random() * num) + 1;


}



export function message(ele, str){


   ele.innerText = str;


}




export function toggle(str){

  str.disabled = true;         


}
