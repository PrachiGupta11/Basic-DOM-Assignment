function changeColorRed() {
  document.getElementById("root").style.color = "red";
}

function changeColorBlack() {
  document.getElementById("root").style.color = "black";
}

function ChangeColorAndBackground() {
  let event1 = document.getElementsByClassName("blue-white");
  for (let i = 0; i < event1.length; i++) {
    event1[i].style.color = "white";
    event1[i].style.backgroundColor = "blue";
  }
}

function ChangeBackColorAndBackground() {
  let event1 = document.getElementsByClassName("blue-white");
  for (let i = 0; i < event1.length; i++) {
    event1[i].style.color = "black";
    event1[i].style.backgroundColor = "white";
  }
}

function ChangeFontSize() {
  let event1 = document.getElementsByTagName("p");
  for (let i = 0; i < event1.length; i++) {
    if (event1[i].getAttribute("class") == null) {
      event1[i].style.fontSize = "50px";
    }
  }
}

function ChangeBackFontSize() {
  let event1 = document.getElementsByTagName("p");
  for (let i = 0; i < event1.length; i++) {
    if (event1[i].getAttribute("class") == null) {
      event1[i].style.fontSize = "16px";
    }
  }
}

