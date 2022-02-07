document.getElementById("submit").onclick= function ageRecommenedWeight(){
    let age=document.getElementById("age").value;
    let weight=document.getElementById("weight").value;
    let name=document.getElementById("name").value;
    display(name,age,weight);
}
function display(name,age,weight){
    
    if(!checkEmpty(name,age,weight)){
        let message;
        if(((age<=20 && age>15) && (weight<=40 && weight>30)) || ((age<=15 && age>10) && (weight<=30 && weight>25)) || ((age<=10 && age>9) && (weight<=25 && weight>20)) || ((age<=7 && age>4) && (weight<=20 && weight>14))){
            message="Hello "+name+"!!! your weight is perfect";
        }else if(((age<=20 && age>15) && (weight>40)) || ((age<=15 && age>10) && (weight>30)) || ((age<=10 && age>9) && (weight>25)) || ((age<=7 && age>4) && (weight>20))){
            message="Hello "+name+"!!! Your weight is greater than recommended value of "+weight+" at an age of "+age;
        }else if(((age<=20 && age>15) && (weight<=30)) || ((age<=15 && age>10) && (weight<=25)) || ((age<=10 && age>9) && (weight<=20)) || ((age<=7 && age>4) && (weight<=14))){
            message="Hello "+name+"!!! our weight is less than recommended value of "+weight+" at an age of "+age;
        }
        document.getElementById("output").innerHTML=message;
    }else{
        document.getElementById("output").innerHTML="Please enter values";
        document.getElementById("output").style.color="red";
    }
    
}
function checkEmpty(name,age,weight){
    if(name.length==0 || weight.length==0 || age.length==0){
        return true;
    }
    return false;
}