var id = 1;
const user = [];
function addUser() {
  let addUsername = document.getElementById("EnterName").value;
  let enterProfession = document.getElementById("EnterProfession").value;
  let enterAge = parseInt(document.getElementById("EnterAge").value);
  console.log("addUsername",addUsername);
  console.log("enterProfession ", enterProfession);
  console.log("enterAge ",enterAge);
  if (addUsername === "" || enterProfession === "" || enterAge === "") {
    console.log("error");
    error.innerHTML =
      "<span style='color: red;'>" + "Please enter a valid number</span>";
      noEmployee.innerHTML = "<span style='color: grey;'>" + "you have 0 employee</span>";  
  } else {
    console.log("Ss");
    error.innerHTML =
      "<span style='color:green ;'>" + "Success : Employee Added !</span>";
      noEmployee.innerHTML = '';
    user.push({
      id: id,
      name: addUsername,
      profession: enterProfession,
      age: enterAge,
    });
  }
  console.log("user", user);
  id = id+1;
}

//
//  else{
//
// console.log("Ss");
//
//
// Changing HTML to draw attention
//
//
//  }

function seterror(id, error) {
  element = document.getElementById("");
  element.getElements;
}

function validateForm() {}
// [{id:1,name:"jack",profession:"developer",age:20},{id:2,name:"john",profession:"admin",age:28}
