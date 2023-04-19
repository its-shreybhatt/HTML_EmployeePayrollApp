
// EventListner

window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if(name.value.length ==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name= value.name;
            textError.textContent="";
        }catch (e) {
            textError.textContent=e;
        }
    });

    const salary= document.querySelector('#salary');
    const output= document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input', function(){
        output.textContent=salary.value;
    });
});

const setname = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
    setname.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
    if(nameRegex.test(setname.value)){
        nameError.textContent="";
        this.name = setname;
    } else nameError.textContent="Name is Incorrect!";
});


class EmployeePayrollData {
    name;
    gender;
    department;
    salary;
    startDate;

    constructor(name, gender, department, salary, startDate) {
        this.name = name;
        this.gender =gender;
        this.department = department;
        this.salary = salary;
        this.startDate = startDate;    
    }

    get id() {
        return this._id;
    
    }

    set id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(name){
            let nameRegex = RegExp('^[A-Z][a-z]{2,}$')
            if(nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect!";
    }

    get profilePic(){
        return this._profilePic;
    }

    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    get note(){
        return this._note;
    }

    set note(note){
        this._note = note;
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(startDate){
        this._startDate = startDate;
    }
   
    toString() {   
        const option = {year : 'numeric' , month : 'long' , day: 'numeric'};
        const empDate = !this.startDate? "undefined" :
                        this.startDate.toLocalDateString("en-US", options);
        return "id= " +this.id + ", name =" +this.name + ", gender=" +this.gender + ", department=" +this.department  
            +", salary=" +this.salary +", day=" +this.day +", month=" +this.month +", year=" +this.year ;
    }

}

const save = () =>{
        try {
            let EmployeePayrollData = createEmployeePayroll();
        }catch (e) {
        return;
    }
}

const createEmployeePayroll = () =>{
let EmployeePayrollData = new EmployeePayrollData();
        try {
            employeePayrollData.name = getInputValueById('#name');
        }catch (e) {
        setTextValue('.text-error' , e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender= getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#note');
    let date = getInputValueById('#day') +" " +getInputValueById('#month') +" " +getInputValueById('#year')
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(items => {
      if(items.checked) selItems.push(items.value);  
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const save = () =>{
        try {
            let EmployeePayrollData = createEmployeePayroll();
            createAndUpdateStorage(employeePayrollData);
        }catch (e) {
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let EmployeePayrolList = JSON.parse(localStorage.getItem(EmployeePayrolList));
    if(EmployeePayrolList !=undefined){
        EmployeePayrolList.push(employeePayrollData);
    }else {
        EmployeePayrolList = [employeePayrollData];
    }
        alert(employeePayrollList.toString());
        localStorage.setItem("EmployeePayrolList",JSON.stringify(employeePayrollList));
    }
    
    const resetForm = () => {
        setValue('#name', '');
        unsetSelectedValues('[name=profile]');
        unsetSelectedValues('[name=gender]');
        unsetSelectedValues('[name=department]');
        setValue('#salary', '');
        setValue('#notes', '');
        setValue('#day', '1');
        setValue('#month', 'January');
        setValue('#year', '2023');
    }
    
    const unsetSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        allItems.forEach(item => {
            item.checked = false;
        });
    }
    
    const setTextValue = (id, value) => {
        const element = document.querySelector(id);
        element.textContent = value;
    }
    
    const setValue = (id, value) => {
        const element = document.querySelector(id);
        element.value = value;
    }

function save(){
    // let objectArray = [];
    let printObject = new EmployeePayrollData();

    printObject.name=document.querySelector('#name').value;
    printObject.gender=document.querySelectorAll('#gender');
    printObject.department=document.querySelectorAll('#department');
    printObject.salary=document.querySelector('#salary').value;
    printObject.day=document.querySelector('#day').value;
    printObject.month=document.querySelector('#month').value;
    printObject.year=document.querySelector('#year').value;
    // objectArray.push(printObject);
    alert(printObject.toString());  
}
