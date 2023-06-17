/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function (element){
   if( element.profession==="developer"){
    console.log(element.name);
   }

  })
}


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(e=>{
    if( e.profession==="developer"){
      console.log(e.name);}
  })
}
// PrintDeveloperbyForEach()
function addData() {
  //Write your code here, just console.log
  let add=arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr[add-1]);
}
// addData()
function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(function(e){return e.profession!="admin"})
  console.log(arr)
}
// removeAdmin()
function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 4, name: "jane", age: "21", marks: 75 },
    { id: 5, name: "bob", age: "19", marks: 60 },
    { id: 6, name: "lisa", age: "22", marks: 90 }
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
// concatenateArray()