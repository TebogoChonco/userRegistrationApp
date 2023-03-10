/* ---Setup----- */
function fetch() {

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let User = [];
    User.push(firstname, lastname, username, email, password);

    let liEl = document.createElement("li");
    let theSpan = document.createElement("span");
    let node1 = document.createTextNode(User[0] + "  ");
    let node2 = document.createTextNode(User[1] + "  ");
    let node3 = document.createTextNode(User[2] + "  ");

    theSpan.appendChild(node1);
    theSpan.appendChild(node2);
    theSpan.appendChild(node3);

    liEl.appendChild(theSpan);
    document.getElementById("user-list").appendChild(liEl);

    console.log(User);
    console.log(liEl);
}

function createUser(event) {
    event.preventDefault();

    let firstname1 = document.getElementById("firstname").value;
    let lastname1 = document.getElementById("lastname").value;
    let username1 = document.getElementById("username").value;
    let email1 = document.getElementById("email").value;
    let password1 = document.getElementById("password").value;
    console.log(firstname1)

    const newUser = {
        firstname: firstname1,
        lastname: lastname1,
        username: username1,
        email: email1,
        password: password1,
    }
    console.log(newUser.firstname)

    userTabs.push(newUser);
    console.log(users(e).firstname);
    createUserelement(users);
}

submitButton.addEventListener("click".createUser);
console.log(users);


function createUserelement(usersparam) {
    let user1 =

       ` <ul id="user-list">
             <li class="entry">
                 <span> ${usersparam.username1} </span> 
                 <span> ${usersparam.firstname1} </span>
                 <span> ${usersparam.lastame1} </span>
                 <span> ${usersparam.email1} </span>
                 <span> ${usersparam.password1} </span> 
            </li>
        </ul> `


        document.getElementById("user-list").innerHTML += user1;
        return user1
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