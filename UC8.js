var partTime=1;
var fullTime=2;
var partTimeHour=4;
var fullTimeHour=8;
var wages=20;
var empHour=0;
var sum=0;
var check=0;
const map=new Map();

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


for(var i=1;i<=20;i++){
    check=Math.floor(Math.random()*3);
    map.set(i,getHour(check)*wages);
}

var sum=0;
map.forEach(element=>{
    sum=sum+element;
});

console.log("total wages are -> "+sum);



