var language = localStorage.getItem("LANG");

if(language === "ENG"){
    changeToEngRegistrationForm();
} else{
    changeToLt();
}

function changeToEngRegistrationForm()
{
    var header = document.getElementById("registrationHeader");
    var name = document.getElementById("registrationName");
    var surname = document.getElementById("surname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var department = document.getElementById("department");
    var date = document.getElementById("date");
    var subject = document.getElementById("subject");
    var comments = document.getElementById("comments");
    var submit = document.getElementById("submit");

    header.innerHTML = "Register for consultation online";
    name.innerHTML = "Name";
    surname.innerHTML = "Surname";
    phone.innerHTML = "Phone number";
    email.innerHTML = "Email";
    department.innerHTML = "Bank Department";
    date.innerHTML = "Date";
    subject.innerHTML = "Subject";
    comments.innerHTML = "Comments";
    submit.innerHTML = "Submit";
}

function changeToLtRegistrationForm()
{
    var header = document.getElementById("registrationHeader");
    var name = document.getElementById("registrationName");
    var surname = document.getElementById("surname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var department = document.getElementById("department");
    var date = document.getElementById("date");
    var subject = document.getElementById("subject");
    var comments = document.getElementById("comments");
    var submit = document.getElementById("submit");

    header.innerHTML = "Registruokitės konsultacijai internetu";
    name.innerHTML = "Vardas";
    surname.innerHTML = "Pavardė";
    phone.innerHTML = "Telefono numeris";
    email.innerHTML = "El. paštas";
    department.innerHTML = "Banko skyrius";
    date.innerHTML = "Data";
    subject.innerHTML = "Tema";
    comments.innerHTML = "Komentarai, pastebėjimai";
    submit.innerHTML = "Submit";
}