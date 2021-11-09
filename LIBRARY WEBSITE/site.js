console.log("WELCOME!!!")

function Book(name, author, type) {   //PROTOTYPE CONSTRUCTOR CREATED
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {  // FUNCTION TO DISPLAY THE CONTENT OF PROTOTYPE

}
Display.prototype.add = function (book) {                //Adding add and clear function to prototype of display
    console.log("ADDING DATA TO UI");
    tableBody = document.getElementById('tableBody'); //This Function adds books to library or table
    let uiString =
        `<tr>                     
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML = tableBody.innerHTML + uiString;

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();     //This Function Reset the form after Submission
}
Display.prototype.validate = function(book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type,showMessage) {
    let message = document.getElementById('message');
    message.innerHTML =`<div class="alert alert- ${type} alert-dismissible fade show" role="alert">
    <strong>Message : </strong> ${showMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
  setTimeout(function(){    //With this alert message automatically hides after 2 sec
      message.innerHTML = ''
  },2000);
}
//ADDING SUBMIT EVENT-LISTNER TO THE LIBRARY FORM
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    e.preventDefault(); //As Default Behavior of form is that when we submit any form it relod the whole site i.e in order to prevent we create a event object "e" and then run a function e.preventDefault In order to overcome this problem here in our site
    // console.log("YOU HAVE SUBMITTED LIBRARY FORM");
    let name = document.getElementById('BName').value;  //grabbing name from its id
    let author = document.getElementById('AName').value; // grabbing author name from its id
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');    //grabbing type of books from all type of id's
    let b3 = document.getElementById('b3');
    let b4 = document.getElementById('b4');
    let type;
    if (b1.checked) {
        type = b1.value;
    }
    else if (b2.checked) {
        type = b2.value;        //Now checking if b1 is checked  in form then type of book is b1 similarly for others  also
    }
    else if (b3.checked) {
        type = b3.value;
    }
    else {
        type = b4.value;
    }
    let book = new Book(name, author, type);   //Creates a Book object
    console.log(book);

    let display = new Display(); //Creates a Display Object
    if (display.validate(book)) { // validate function check if book is valid to  add in library
        display.add(book); //Adding book object to display
        display.clear() //Clears the display after adding ofbook
        display.show('SUCCESS','YOUR BOOK IS ADDED'); //Show success if book added to library
    }
    else {
        display.show('danger ',' SORRY YOU ARE NOT ABLE TO ADD THIS BOOK'); //If validate is not true it show error because book is not added to library
    }
}