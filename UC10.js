var partTime=1;
var fullTime=2;
var partTimeHour=4;
var fullTimeHour=8;
var wages=20;
var empHour=0;
var sum=0;
var check=0;
const map=new Map();
const map1=new Map();

class EmpWage{
    totalHour;
    totalWage;
    
}

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
    const obj=new EmpWage();
    map.set(getHour(check),getHour(check)*wages);
    obj.totalHour=getHour(check);
    obj.totalWage=getHour(check)*wages;
    map1.set(getHour(check),obj);
}

  
console.log("no working days ->"+map.get(0));
console.log("parttime working days ->"+map.get(4));
console.log("fulltime working days ->"+map.get(8));

console.log(map1);

