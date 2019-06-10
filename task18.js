let input = prompt("elementin yerini daxil");

let counter = 0;
let result = 1;
// 1, 3, 7

let onluq = 0;
let onluqCounter = 1;
while(counter < input){
    
    let teklik = 0;
    let i = 0;
    while(i < 3){
        teklik = teklik * 2 + 1;
        console.log(onluq*10 + teklik);
        i++;
    }

    
    counter++;
}

alert(result);