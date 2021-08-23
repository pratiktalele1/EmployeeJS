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
    map.set(getHour(check),getHour(check)*wages);
}

var sum=0;
map.forEach(element=>{
    sum=sum+element;
});

console.log(map);
console.log("total wages are -> "+sum);

  
console.log("no working days ->"+map.get(0));
console.log("parttime working days ->"+map.get(4));
console.log("fulltime working days ->"+map.get(8));

