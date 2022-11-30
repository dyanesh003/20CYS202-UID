function ValidateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById("email").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.getElementById("email").focus()
    }
}

function PhoneNumberCheck(){
    var x = document.getElementById("tel").value;
    console.log(x)
    if (!(x.toString().length == 10)) {
        alert("Please enter a valid phone number!")
        document.getElementById("phonenumber").focus()
    }
}

function NameCheck() {
    var x = document.getElementById("name").value;
    var y = x.split("")
    let sp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
    var arrLen = sp.length;
    for (var i = 0; i < arrLen; i++) {
        if (y.includes(sp[i])) {
            alert("Please enter a valid name!")
            document.getElementById("name").focus()
            break
        }
    }
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
}


