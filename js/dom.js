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
const newEmployee =  function (object){
  let employee = 
  `<div class="box box-solid box-default">
   <p> Name: ${object.name}</p>
   <p>Office number: ${object.officeNum}</p>
   <p>Phone number: ${object.phoneNum}</p>
  </div>`

  //employee object
  console.log(employee)
  return employee;
}

//variable
let addEmployee = document.getElementById('addSection');
//doing a checking here...
//console.log(addEmployee)
// div#addSection.row

let updateEmployee = document.getElementById('upSection');

let verifyEmployee = document.getElementById('veriSection');

let removeEmployee = document.getElementById('delSection');

//side navBar
let taskBar = $("#sideNav");


//updating employee list when user added
const updateEmployeeList = function(){
  //calling the empty method
  $('#content').empty();

  for(i=0; i<employeeList.length; i++){
    //testing
    console.log(employeeList[i])
    //employeeList[2]
    //{name: "Margie", officeNum: 789, phoneNum: "789-789-7897"}

    //calling the append method and insert the node object
    $('#content').append(newEmployee(employeeList[i]));
  }
}


//method to display an employee contact
const viewContact = function(){

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

//method to add employee contact
const addContact = function(){

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



//method to verify employee contact
const verifyContact = function(){
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




//method to update employee contact
const updateContact = function(){
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



//method to delete employee contact
const removeContact = function(){
  //make elements invisible
  addEmployee.style.display ='none';

  //make elements visible
  verifyEmployee.style.display = 'none';

  //make elements invisible
  updateEmployee.style.display ='none';
  removeEmployee.style.display = 'block';

  //just display employee data
  updateEmployeeList();

  //style button
  taskBar.removeClass("rAction");
}



