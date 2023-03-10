/* ---Setup----- */
function fetch() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let User = [];
    User.push(firstname, lastname, username, email,password);

    let liEl = document.createElement("li");
    let theSpan = document.createElement("span");
}

/* --- Tab References --- */

    // Get reference to all elements in register tab
    const registerTab = document.getElementsByClassName("register");
    console.log(registerTab);

    // Get reference to all elements in userList tab
    const userTabs = document.getElementsByClassName("users");
    console.log(userTabs);


/* --- Nav references -- */

    // code here...


/* --- Form field references --- */

    // code here...


/* --- Table list reference --- */

    // code here...



/* ----------------------------------------------------
    Functionality
---------------------------------------------------- */

    // code here...



/* ----------------------------------------------------
    Event Listenters and Interactivity
---------------------------------------------------- */