var partTime=1;
var fullTime=2;
var partTimeHour=4;
var fullTimeHour=8;
var wages=20;
var empHour=0;

var check=Math.floor(Math.random()*3);

switch (check) {
    
    case 1:
            empHour=partTimeHour;  
        break;

    case 2:
        empHour=fullTimeHour;
        break;
    
    default:
        empHour=0;
        break;
}   

console.log("total wages are -> "+(empHour*wages));