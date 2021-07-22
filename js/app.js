// Your work here
/*our app helpers methods to interact with DOM */




//calling dom function
updateEmployeeList();



//this part, we will be handling input and onclick event

$('#viewContact').on('click', viewContact);
$('#addContact').on('click', addContact);
$('#verifyContact').on('click', verifyContact);
$('#updateContact').on('click', updateContact);
$('#removeContact').on('click', removeContact);


//Add button event handling
$('#sveBtn').on('click', function(){
	//check for uppercase
	let empName = getData('#Name');
	let offNum = getData('#Num');
	let empPhone = getData('#Phone');

	//console test
	//console.log(empName, offNum, empPhone);
	//{name: "Jan", officeNum: 1, phoneNum: "222-222-2222"}...

	//add data to emplyee array list
	employeeList.push({
		name: empName,
		officeNum: offNum,
		phoneNum: empPhone
	});

	//console.log(employeeList);
	//{name: "Jan", officeNum: 1, phoneNum: "222-222-2222"}...

	//clear input fields
	ClearInpField()

	//update employee list
	updateEmployeeList()
})

//Verify button event handling
$('#veriBtn').on('click', function(){
	//check for uppercase
	let empName = getData('#vName');
	let exit = false;

	//loop through employee list array to check the employee name
	for(i=0; i<employeeList.length; i++){
		//if employee name match
		if(employeeList[i].name === empName){
			exit = true;
		}
	}

	//if founded. display yes to user
	if(exit === true){
		alert(`yes, ${empName} is in the directory.` );
	} else {
		alert(`${empName} is not exit in directory` );
	}

	//clear input fields
	ClearInpField()
})


/*Update button event handling. This will update only existing contact in the directory.
if there's no contact, it will show alert message to user*/
$('#upBtn').on('click', function(){
	//check for uppercase
	let empName = getData('#upName');
	let offNum = getData('#upNum');
	let empPhone = getData('#upPhone');
	let exit = true;
	let index = -1;

	//loop through employee list array to check the employee name
	for(i=0; i<employeeList.length; i++){
		//if employee name match
		if(employeeList[i].name === empName){
			exit = true;

			//get the current employee index
			index = i;
		}
	}

	//if name not exist in directory
	if(exit === false){
		alert(`${empName} is not exit in directory` );
	} else {
		// name exist, perform update operation
		//user can dcide to update all, or only one info or just 2 info
		//let work on those cases
		if(offNum && empPhone){
			//if office # and phone # do this
			employeeList[index] = {
				name: empName,
				officeNum: offNum,
				phoneNum: empPhone
			};
		} else if(empPhone){
			//if phone # only
			employeeList[index].phoneNum = empPhone;
		} else if (offNum) {
			//if ofice # only
			employeeList[index].officeNum = offNum
		}
	}

	//clear input fields
	ClearInpField()

	//update the employee array list
	updateEmployeeList();
})



/*Remove button event handling. This will remove only existing contact in the directory.
if there's no contact, it will show alert message to user*/
$('#delBtn').on('click', function(){
	//check for uppercase
	let empName = getData('#delName');
	let exit = false;
	let index = -1;

	//loop through employee list array to check the employee name
	for(i=0; i<employeeList.length; i++){
		//if employee name match
		if(employeeList[i].name === empName){
			exit = true;

			//get the current employee index
			index = i;
		}
	}

	//if name not exist in directory
	if(exit === false){
		alert(`${empName} is not exit in directory`);
	} else {
		// name exist, perform remove operation
		employeeList.splice(index, 1);
	}

	//update the employee array list
	updateEmployeeList();
})