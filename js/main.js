// (function ($) {
//     "use strict";

//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });

//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }

// })(jQuery);

// const adminUpButton = document.getElementById('adminButton');
// const clientButton = document.getElementById('clientButton');
// const clientForm = document.getElementById('login-client');
// const adminForm = document.getElementById('login-admin');

// adminUpButton.addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định
//     adminForm.style.display = "block";
//     clientForm.style.display = "none";
// });

// clientButton.addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định
//     adminForm.style.display = "none";
//     clientForm.style.display = "block";
// });
// Select the form element
document
  .querySelector(".login100-form")
  .addEventListener("submit", function (event) {
    // Prevent the form from submitting the usual way
    event.preventDefault();

    // Get the username and password values
    const username = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='pass']").value;

    // Check if the credentials are correct
    if (username === "HuuTran" && password === "aqua123") {
      // Redirect to loginadmin.html if correct
      window.location.href = "/Aqua/adminclient.html";
    } else {
      // Show an alert if the credentials are incorrect
      alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
  });
