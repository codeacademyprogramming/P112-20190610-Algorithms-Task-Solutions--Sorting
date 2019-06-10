let inputNumber = prompt("3 reqemli eded daxil edin");

let num1 = 0;
let num2 = 0;
let num3 = 0;

let minNumber = 0;
let middleNumber = 0;
let maxNumber = 0;

let inputNumberOld = 0;


if(inputNumber >= 100 && inputNumber <= 999){
    inputNumberOld = inputNumber;
    num3 = inputNumber % 10;
    inputNumber = (inputNumber - num3) / 10;

    num2 = inputNumber % 10;
    inputNumber = (inputNumber - num2) / 10;
    
    num1 = inputNumber;

    alert(num1 + " " + num2 + " "+ num3);


    //console.log(num1, num2, num3);

    if(num1 < num2 && num1 < num3 ){
        minNumber = num1;

        if (num2 < num3){
            maxNumber = num3;
            middleNumber = num2;
        } else {
            maxNumber = num2;
            middleNumber = num3;
        }
    } else {
        if(num2 < num3){
            minNumber = num2;
            if (num1 < num3){
                maxNumber = num3;
                middleNumber = num1;
            } else {
                maxNumber = num1;
                middleNumber = num3;
            }
        } else {
            minNumber = num3;

            if (num1 < num2){
                maxNumber = num2;
                middleNumber = num1;
            } else {
                maxNumber = num1;
                middleNumber = num2;
            }
        }
    }


   let result =  ((maxNumber*100 + middleNumber*10 + minNumber) - (minNumber * 100 + middleNumber * 10 + maxNumber)) * inputNumberOld;

    alert(result);

}



