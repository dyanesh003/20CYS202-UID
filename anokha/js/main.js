(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });




})();

function validateName(id) {
    var regex = /^[a-zA-Z ]{2,30}$/;
    var name =  document.getElementById(id).value;
    if (!name.match(regex)) {
        alert("You have entered an invalid name!");
        document.getElementById(id).focus()
    }
    return true;
};

function validateEmail(id) {
    var mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var x = document.getElementById(id).value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.getElementById(id).focus()
    }
    return true;
};

function checkValid(id1,id2)
{
    validateName(id1);
    validateEmail(id2);
}

function validateNumber(id) {
    var mailformat = (/^[0-9]+$/);
    var x = document.getElementById(id).value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid number!");
    }
};


function PhoneNumberCheck(){
    var x = document.getElementById("tel").value;
    console.log(x)
    if (!(x.toString().length == 10)) {
        alert("Please enter a valid phone number!")
        document.getElementById("phonenumber").focus()
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