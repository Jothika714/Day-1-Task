//Question 1
//how to compare two JSON have the same properties without order
//a) let obj1={name:"Person1",age:5};
//b) let obj2={age:5,name:"Person1"};

let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
var sortedObj1=JSON.stringify(Object.keys(obj1).sort());
var sortedObj2=JSON.stringify(Object.keys(obj2).sort());
console.log(sortedObj1==sortedObj2);
var json1=JSON.stringify(obj1);
var json2=JSON.stringify(obj2);
if(json1==json2){
    console.log("both are same");
}
else{
    console.log("both are different");
}

//Question 2
//Request to all the countries flags

var request = new XMLHttpRequest
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data= request.response;  
    var result = JSON.parse(data);
    console.log(result);
    for(i=1;i<result.length;i++){
        console.log(result[i].flags.png);
    }
  }


//Question 3
//Request to print all countries name,region,sub regions and populations

var request1 = new XMLHttpRequest
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data1= request1.response;  
    var result1 = JSON.parse(data1);
    console.log(result1);
    for(i=1;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].population,result1[i].subregion);
    }
  }
