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

    checkName(){
        var pattern=RegExp('[A-Z]{1}[a-z]{3}');
        if(pattern.test(this.name)){
            console.log("valid name");
        }else{
            console.log("invalid name");
        }
    }
}

let data=new EmployeePayrollData(1,'M',1230,'2017-05-22','Pratik');
console.log(data);
data.checkName();