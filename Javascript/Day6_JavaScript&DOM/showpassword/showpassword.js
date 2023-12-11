var icon = document.getElementsByTagName("i")[0];
var input = document.getElementsByTagName("input")[0];
// icon.addEventListener("click",function(){

//     console.log(icon);

//     icon.classList.toggle("fa-eye-slash");
// })

/////////////////worked////////////
icon.addEventListener("click", function() {
    console.log(icon);

    // Check if the "fa-eye" class is present
    var hasEyeClass = icon.classList.contains("fa-eye");

    // Toggle classes without a space
    if (hasEyeClass) {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
        input.type = "text";
    } else {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
        input.type = "password";
    }
});

// icon.addEventListener("click", function() {
//     console.log(icon);
//     icon.classList.toggle("fa-eye");
//     icon.classList.toggle("fa-eye-slash");
    
    
// });