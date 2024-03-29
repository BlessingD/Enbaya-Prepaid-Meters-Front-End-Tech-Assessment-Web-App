jQuery(document).ready(function(){
    
    $(function() {
    // Setup form validation on the #re-form element
   $("form[name='registration-form']").validate({  

       // Specify the validation rules
  rules: {
           fullname: "required", //fullname field is mandatory 
           email: {               
            required: true, //email is required
            email: true     //email is in valid format
        }, 
        country: {
          required: true, //country field is mandatory 
          
        },
        cellphone: {    
            required: true, //cellphone number is mandatory
            digits:true,    //numbers only, no other characters allowed.
            minlength:10,
            maxlength:10   //cellphone number must be 10 digits long
        },  
       },
       // Specify the validation error messages
  messages: {
           fullname: "Please Enter Your Full Name",
           email: "Please Enter a Valid Email Address",
           country: "Please Select Your Country",
           cellphone:"Please Enter a Valid Cellphone Number"
       },
       submitHandler: function(form) {
           form.submit();
           saveFile();
       }
   });
  
    });
  })
   