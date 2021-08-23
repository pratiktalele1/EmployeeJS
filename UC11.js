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
var totalWage=0;
var totalHour=0;

class EmpWage{
    
    totalHour;
    totalWage;
    
    getHour(params) {
        switch (params) {
        
            case 1:
                return partTimeHour;  
            case 2:
                return fullTimeHour;
            default:
                return empHour;
        }   
        
    }
}



for(var i=1;i<=20;i++){
    check=Math.floor(Math.random()*3);
    const obj=new EmpWage();
    map.set(obj.getHour(check),obj.getHour(check)*wages);
    obj.totalHour=obj.getHour(check);
    obj.totalWage=obj.getHour(check)*wages;
    map1.set(obj.getHour(check),obj);
}


map1.forEach(Element=>{
    totalWage=Element.totalWage+totalWage;
    totalHour=Element.totalHour+totalHour;
});

console.log("total hours are => "+totalHour);
console.log("total wages are => "+totalWage);
console.log("No working days are => "+map.get(0));
console.log("part time working days are => "+map.get(4));
