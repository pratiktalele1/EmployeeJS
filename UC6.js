var partTime=1;
var fullTime=2;
var partTimeHour=4;
var fullTimeHour=8;
var wages=20;
var empHour=0;
var sum=0;
var array=[];
function getHour(params) {
    switch (params) {
    
        case 1:
            return partTimeHour;  
        case 2:
            return fullTimeHour;
        default:
            return empHour;
    }   
    
}

var check=Math.floor(Math.random()*3);
console.log("total wages are -> "+(getHour(check)*wages)*20);

array.push(getHour(check)*wages);

for(var i=0;i<20;i++){
    sum=sum+getHour(check)*wages;   
}

array.push(sum);
console.log("sum - >"+sum);

console.log(array);

