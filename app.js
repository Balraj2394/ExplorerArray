
var msg=document.getElementById("message");
var num=document.getElementById("number");
var filters=document.getElementById("filter");
function arr(){
    const input=number.value;
    num=input.split(",");
}
  
function value(text){
    msg.innerText=text;
}
  
function sort(){
    arr();
    value("Sorted Values: "+num.sort((num1,num2)=>num1-num2));
}
  
function rev(){
    arr();
    value("Reverse value: "+num.reverse());
}
  
function even(){
    arr();
    value("Even Numbers: "+num.filter((num1)=>num1%2===0));
}
  
function odd(){
    arr();
    value("Odd Numbers: "+num.filter((num1)=>num1%2!=0));
}
  
function max(){
    arr();
    value("Maximum Value: "+Math.max(...num));
}
  
function min(){
    arr();
    value("Minimum Value: "+Math.min(...num));
}
  
function sum(){
    arr();
    const sum=num.reduce((acc,n)=>acc+n, 0);
    value("Sum: "+sum);
}
function filter(){
    arr();
    const filterValue=parseFloat(filter.value);
      value("Filtered: "+num.filter((n)=>num>filterValue));
    
  }
  