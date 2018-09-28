let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x of numArray){
    function checkEven(x){
        return x%2==0;
        console.log
    }
}


function checkEven(x){
    return x % 2 == 0;
} 

checkEven();

function doinIt(){
    console.log(numArray.filter(checkEven))
}