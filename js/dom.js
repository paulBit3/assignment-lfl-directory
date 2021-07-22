const $ = function (selector) {
  const nodeList = document.querySelectorAll(selector);

  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  }

  const html = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }

  const addClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(className);
    }
  }

  const removeClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(className);
    }
  }

  const toggleClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }

  const empty = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = '';
    }
  }

  const append = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML += content;
    }
  }

  const prepend = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content + nodeList[i].innerHTML;
    }
  }

  const val = function (content) {
      if(content === undefined){
        return nodeList[0].value;
      } else {
        nodeList[0].value = content;
      }
  }

  const on = function (action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  }

  return {
    text: text,
    html: html,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    empty: empty,
    append: append,
    prepend: prepend,
    on: on,
    val: val
  };
}



/*Handling DOM event here
A list of helper function that will run task in the dom for the App*/

// this method prepare and return employee object
function newEmployee(object){
  let employee = 
  `<div class="box box-solid box-default">
   <p> Name: ${object.name}</p>
   <p>Office number: ${object.officeNum}</p>
   <p>Phone number: ${object.phoneNum}</p>
  </div>`

  //employee object
  //console.log(employee)
  //{name: "Jan", officeNum: 1, phoneNum: "222-222-2222"}...

  return employee;
}

//variable
let addEmployee = document.getElementById('addSection');
//doing a checking here...
//console.log(addEmployee)
// div#addSection.row

let verifyEmployee = document.getElementById('veriSection');

let updateEmployee = document.getElementById('upSection');

let removeEmployee = document.getElementById('delSection');

//side navBar
let taskBar = $("#sideNav");


//updating employee list when user added
function updateEmployeeList(){
  //calling the empty method
  $('#content').empty();

  for(i=0; i<employeeList.length; i++){

    //console testing
    //console.log(employeeList[i])
    //employeeList[2]
    //{name: "Margie", officeNum: 789, phoneNum: "789-789-7897"}...

    //calling the append method and insert the node object
    $('#content').append(newEmployee(employeeList[i]));
  }
}


//method to handle display an employee contact
function viewContact(){

  //make elements invisible
  addEmployee.style.display ='none';
  verifyEmployee.style.display = 'none';
  updateEmployee.style.display ='none';
  removeEmployee.style.display = 'none';

  //just display employee data
  updateEmployeeList();

  //style button
  taskBar.removeClass("rAction");
}

//method to handle add employee contact
function addContact(){

  //make elements visible
  addEmployee.style.display ='block';

  //make elements invisible
  verifyEmployee.style.display = 'none';
  updateEmployee.style.display ='none';
  removeEmployee.style.display = 'none';

  //just display employee data
  updateEmployeeList();

  //style button
  taskBar.removeClass("rAction");
}



//method to handle verify employee contact
function verifyContact(){
  //make elements invisible
  addEmployee.style.display ='none';

  //make elements visible
  verifyEmployee.style.display = 'block';

  //make elements invisible
  updateEmployee.style.display ='none';
  removeEmployee.style.display = 'none';

  //just display employee data
  updateEmployeeList();

  //style button
  taskBar.addClass("rAction");
}




//method to handle update employee contact
function updateContact(){
  //make elements invisible
  addEmployee.style.display ='none';

  //make elements visible
  verifyEmployee.style.display = 'none';

  //make elements invisible
  updateEmployee.style.display ='block';
  removeEmployee.style.display = 'none';

  //just display employee data
  updateEmployeeList();

  //style button
  taskBar.removeClass("rAction");
}



//method to handle delete employee contact
function removeContact(){
  //make elements invisible
  addEmployee.style.display ='none';
  verifyEmployee.style.display = 'none';
  updateEmployee.style.display ='none';
  
  //make elements visible
  removeEmployee.style.display = 'block';

  //just display employee data
  updateEmployeeList();

  //style button
  taskBar.removeClass("rAction");
}


//clear input fields
function ClearInpField(){
  let input = document.getElementsByTagName("input");
  for(let i=0; i<input.length; i++){
    input[i].value = '';
  }
}


//method return a new char from a input value with the 1st character(index 0) uppercase
/*function upStringCase(string){
  return string.charAt(0).toUpperCase();
}*/


//fixed getData display bug
function upStringCase(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//and called in input value
function getData(ID){
  let data = $(ID).val();
  return upStringCase(data);
}

/*for getData testing purposes
this display 
Name: P <<--- a bug here. this should return the full name but instead, returns 1st charater
Office number: 3
Phone number: 6*/

/*after fixing the bug 
Name: Paul
Office number: 33
Phone number: 6154983533*/
