class EmployeePayrollData{
    
    id;
    salary;
    gender;
    startDate;
    name;
    
    constructor(id,gender,salary,startDate,name){
        this.id=id;
        this.gender=gender;
        this.salary=salary;
        this.startDate=startDate;
        this.name=name;
    }

    checkData(){
        var patternName=RegExp('[A-Z]{1}[a-z]{3}');
        if(patternName.test(this.name)){
            console.log("valid name");
        }else{
            console.log("invalid name");
        }

        var patternId=RegExp('^[1-9]$');
        if(patternId.test(this.id)){
            console.log("valid Id");
        }else{
            console.log("invalid Id");
        }

        var patternSalary=RegExp('[0-9]');
        if(patternSalary.test(this.salary)){
            console.log("valid Salary");
        }else{
            console.log("invalid Salary");
        }


    }
}

let data=new EmployeePayrollData(-1,'M',1230,'2017-05-22','Pratik');
console.log(data);
data.checkData();