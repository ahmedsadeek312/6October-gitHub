var data = [
  {
    user_name: "ahmed",
    password: "123",
  },
];

signup_but.onclick = function () {
  show.innerHTML = `
    <div style="text-align: center">
    <h1>signup</h1>
        enter your name : <input type="text" id="add_user_name" />
        <br />
        <br />
        enter your password : <input type="text" id="add_password" />
        <br />
        <br />
        <button id="add_new_data">signup</button>
    </div>
    `;
  add_new_data.onclick = function () {
    var new_user_name = add_user_name.value;
    var new_password = add_password.value;
    data.push({
      user_name: new_user_name,
      password: new_password,
    });
    console.log(data);
  };
};

login_but.onclick = function () {
  show.innerHTML = `
    <div style="text-align: center">
        <h1>login</h1>
        enter your name : <input type="text" id="user_name_input" />
        <br /><br/>
        enter your password : <input type="text" id="password_input" />
        <br />
        <br />
        <button id="user_login_but">login</button>
        <p id="invalid_data"></p>
    </div>
  `;
  user_login_but.onclick = function () {
    var name_input = user_name_input.value;
    var password_input_user = password_input.value;
    for (counter = 0; counter < data.length; counter++) {
      if (
        name_input == data[counter].user_name &&
        password_input_user == data[counter].password
      ) {
        document.write(`hello`);
      } else {
        invalid_data.innerHTML = `Invalid data`;
      }
    }
  };
};

Hide.onclick = function () {
  if (show.style.visibility == "hidden") {
    show.style.visibility = "visible";
    Hide.innerHTML = "hide";
  } else if (show.style.visibility == "visible") {
    show.style.visibility = "hidden";
    Hide.innerHTML = "show";
  }
};
