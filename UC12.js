class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(id,gender,salary,startDate){
        this.id=id;
        this.gender=gender;
        this.salary=salary;
        this.startDate=startDate;
    }

    
}

let data=new EmployeePayrollData(1,'M',1230,'2017-05-22');
console.log(data);
