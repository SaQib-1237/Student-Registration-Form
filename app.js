
let student = [
  {
    fName: 'Muhammad',
    lName: 'Saqib',
    age: '6/6/2005',
    ID: 'A01',
    address: 'Something Something',
    email: 'saqiblogic50@gamil.com',
    phoneNumber: '03893402093',
    gendre: 'Male',
  },
];

displayRecords();


function addStudent() {
      // Geting Element
    let firstName = document.querySelector("#f-name")
    let lastName = document.querySelector("#l-name")
    let birthDAte = document.querySelector("#birth-date")
    let studentId = document.getElementById ("student-id");
    let myAddress = document.getElementById ("address");
    let myEmail = document.getElementById ("emil");
    let contactInfo = document.getElementById ("contact-info");
    let selectGandre = document.getElementById ("select-gendre");

    let myFirstName = firstName.value;
    let mylastName = lastName.value;
    let dateOfBirth = birthDAte.value;
    let myId = studentId.value;
    let studentAddress = myAddress.value;
    let studentEmail = myEmail.value;
    let myInfo = contactInfo.value;
    let selectedGendre = selectGandre.value;

      // Ubdate Array
    student.push({fName: myFirstName, lName: mylastName, age:dateOfBirth, ID: myId,
       address:studentAddress, email: studentEmail, phoneNumber:myInfo, gendre: selectedGendre});

       document.querySelector('form').reset();
    displayRecords(); 
}


  function displayRecords() {
    let studentContainer = document.querySelector('.container');
    let studentHtml = '';
    for (let i = 0; i < student.length; i++) {
      let {fName, lName, age, ID, address, email, phoneNumber, gendre} = student[i];
      studentHtml += `
      <div id = "js-html">
      <div class = "js-data"><b>First Name:</b> <span>${fName} </span></div>
      <div class = "js-data"><b>Last Name:</b> <span>${lName} </span></div>
      <div class = "js-data"><b>Date Of Birth:</b> <span>${age} </span></div>
      <div class = "js-data"><b>Student iD:</b> <span>${ID} </span></div>
      <div class = "js-data"><b>Student Address:</b> <span>${address} </span></div>
      <div class = "js-data"><b>Email Address:</b> <span>${email} </span></div>
      <div class = "js-data"><b>Contact Number:</b> <span>${phoneNumber} </span></div>
      <div class = "js-data"><b>Gendre:</b> <span>${gendre} </span></div>
      <button onclick = "student.splice(${i}, 1); displayRecords();" id = "delete-btn">Delete Recorde</button>
      </div>
      `;      
    }
    // Display Whole Data in Ui
    studentContainer.innerHTML = studentHtml
  }