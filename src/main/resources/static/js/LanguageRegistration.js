var liLT = document.getElementById("navLT");
var liEN = document.getElementById("navEN");

var language = localStorage.getItem("LANG");

if(language === "ENG"){
    changeToEngRegistrationForm();
} else{
 //   changeToLt();
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

    document.getElementById("modalName").innerHTML = "Name";
    document.getElementById("modalSurname").innerHTML = "Surname";
    document.getElementById("modalPhone").innerHTML = "Phone number";
    document.getElementById("modalEmail").innerHTML = "Email";
    document.getElementById("modalBank").innerHTML = "Bank Department";
    document.getElementById("modalDate").innerHTML = "Date";
    document.getElementById("modalTheme").innerHTML = "Subjects";
    document.getElementById("modalComments").innerHTML = "Comments";
    document.getElementById("modalButtonBack").innerHTML = "Back";
    document.getElementById("modalFooterThanks").innerHTML = "Thank you for your interest in our services";
    document.getElementById("modalFooterInfo").innerHTML = "For more information call 1884, workdays 8-20h, saturdays 9-15";

    setActiveLang("ENG");
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
    submit.innerHTML = "Siųsti";

    document.getElementById("modalName").innerHTML = "Vardas";
    document.getElementById("modalSurname").innerHTML = "Pavardė";
    document.getElementById("modalPhone").innerHTML = "Telefono numeris";
    document.getElementById("modalEmail").innerHTML = "El. paštas";
    document.getElementById("modalBank").innerHTML = "Banko skyrius";
    document.getElementById("modalDate").innerHTML = "Data";
    document.getElementById("modalTheme").innerHTML = "Tema";
    document.getElementById("modalComments").innerHTML = "Komentarai, pastebėjimai";
    document.getElementById("modalButtonBack").innerHTML = "Atgal";
    document.getElementById("modalFooterThanks").innerHTML = "Ačiū, kad domites banko paslaugomis.";
    document.getElementById("modalFooterInfo").innerHTML = "Jeigu Jums reikalinga skubi informacija, laukiame Jūsų skambučių telefonu 1884, darbo dienomis 8-20val., šeštadieniais 9-16 val.";

    setActiveLang("LT")
}

function setActiveLang(lang){
    if (lang === "ENG"){
        localStorage.setItem("LANG", "ENG");
        liEN.className = "activeNav";
        liLT.className = "";
    }else if (lang === "LT"){
        localStorage.setItem("LANG", "LT");
        liEN.className = "";
        liLT.className = "activeNav";
    }
}