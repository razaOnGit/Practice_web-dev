function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "admin" && password == "password") {
        alert("Login Successful");
        } else {
            alert("Invalid username or password");
            }
          }

function signup(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const resume = document.getElementById("resume");
      if (!resume.files.length) {
        alert("Please upload your resume.");
        return;
    }
    if (username == "admin" && password == "password") {
        alert("You are already a member");
        } else {
            alert("You have been signed up");
            }
     
          }
