function validateEmail(id) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById(id).value.trim();
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.getElementById(id).focus()
    }
    else
        return true;
}

function phoneNumberCheck(id){
    var x = document.getElementById(id).value.trim();
    if (!(x.toString().length == 10)) {
        alert("Please enter a valid phone number!")
        document.getElementById(id).focus()
    }
    else
        return true;
}

function zipCode(id)
{
    var x = document.getElementById(id).value.trim();
    if (!(x.toString().length == 6)) {
        alert("Please enter a valid postal code")
        document.getElementById(id).focus()
    }
    else
        return true;

}

function nameCheck(id) {
    var regex = /^[a-zA-Z]{2,30}$/;
    var name =  document.getElementById(id).value.trim();
    if (!name.match(regex)) {
        alert("You have entered an invalid name!");
        document.getElementById(id).focus()
    }
    else
        return true;
}

function fileValidation() {
    var fileInput =
        document.getElementById('myfile');
     
    var filePath = fileInput.value;
    var allowedExtensions =
            /(\.jpg|\.jpeg|\.png|\.svg)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
    else
    { 
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(
                    'imagePreview').innerHTML =
                    '<img src="' + e.target.result
                    + '"/>';
            };
             
            reader.readAsDataURL(fileInput.files[0]);
        }
    }

    // return true;
}

function chkButton()
{
    if (!(document.getElementById("chb").checked))
    {
        document.getElementById("unlock").style["background-color"] = "#007bff";
        document.getElementById("unlock").style["border-color"] = "#007bff";
        document.getElementById('unlock').disabled = false;
    }
    else
    {
        document.getElementById("unlock").style["background-color"] = "grey";
        document.getElementById("unlock").style["border-color"] = "grey";
        document.getElementById('unlock').disabled = true;
    }
}

function validateForm()
{
    var x = true;
    if(x)
    x = nameCheck('name-f');
    if(x)
    x = nameCheck('name-l');
    if(x)
    x = validateEmail('email');
    if(x)
    x = zipCode('zip');
    if(x)
    x = phoneNumberCheck('tel');
    if(x)
    {
        if (!(document.getElementById('optradio1').checked ^ document.getElementById('optradio2').checked))
        {
            alert("Answer whether are you a student of Amrita");
            x = false
        }
        else
            x = true
            
    }
    if(x)
    {
        alert("Registered Successfully!");
        window.location.href = "../index.html";
    }
    
    return true;
        
}
