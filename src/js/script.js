function checkTextFields() {
  let field1Value = document.getElementById("input1").value;
  let field2Value = document.getElementById("input2").value;

  if (field1Value && field2Value) {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}
2;
function checkNumberFields() {
  let fieldFirstNumber = parseInt(document.getElementById("number1").value);
  let fieldSecondNumber = parseInt(document.getElementById("number2").value);

  if (fieldFirstNumber + fieldSecondNumber > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}

//3
function checkForJavaScript() {
  let textValue = document.getElementById("text").value;

  if (textValue.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}
//4
function checkNumberRange() {
  let fieldNumber = parseInt(document.getElementById("numberInput").value);

  if (fieldNumber > 10 && fieldNumber < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}
//5
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (
    name.length >= 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 6
  ) {
    window.location.href = "new.html";
  } else {
    alert("Помилка! Перевірте правильність введених даних.");
  }
}
