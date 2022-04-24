function checkLogin(event) {
  const widthIn = document.querySelector("#width");

  if (widthIn.value < 0) {
    alert("width not valid");
    widthIn.style.backgroundColor = "red";
    widthIn.focus();
    event.preventDefault();
    return;
  }
  if (widthIn.value > 300) {
    alert("width not valid");
    widthIn.style.backgroundColor = "red";
    widthIn.focus();
    event.preventDefault();
    return;
  }
  if (widthIn.value.length > 3) {
    alert("width is too big");
    widthIn.style.backgroundColor = "red";
    widthIn.focus();
    event.preventDefault();
    return;
  }

  if (widthIn.value.length < 0) {
    alert("width is too small");
    widthIn.style.backgroundColor = "red";
    widthIn.focus();
    event.preventDefault();
    return;
  }

  const heightIn = document.querySelector("#height");

  if (heightIn.value < 0) {
    alert("height not valid!!");
    heightIn.style.backgroundColor = "red";
    heightIn.focus();
    event.preventDefault();
    return;
  }
  if (heightIn.value > 300) {
    alert("height not valid!!");
    heightIn.style.backgroundColor = "red";
    heightIn.focus();
    event.preventDefault();
    return;
  }
  if (heightIn.value.length > 3) {
    alert("height not valid!!!!");
    heightIn.style.backgroundColor = "red";
    heightIn.focus();
    event.preventDefault();
    return;
  }

  if (heightIn.value.length < 0) {
    alert("height too short!!");
    heightIn.style.backgroundColor = "red";
    heightIn.focus();
    event.preventDefault();
    return;
  }
  const positionX = document.querySelector("#positionX");

  if (positionX.value < 0) {
    alert("positionX not valid!!");
    positionX.style.backgroundColor = "red";
    positionX.focus();
    event.preventDefault();
    return;
  }
  if (positionX.value > 300) {
    alert("positionX not valid!!");
    positionX.style.backgroundColor = "red";
    positionX.focus();
    event.preventDefault();
    return;
  }
  if (positionX.value.length > 3) {
    alert("positionX not valid!!!!");
    positionX.style.backgroundColor = "red";
    positionX.focus();
    event.preventDefault();
    return;
  }

  if (positionX.value.length < 0) {
    alert("positionX too short!!");
    positionX.style.backgroundColor = "red";
    positionX.focus();
    event.preventDefault();
    return;
  }
  const positionY = document.querySelector("#positionY");

  if (positionY.value < 0) {
    alert("positionY not valid!!");
    positionY.style.backgroundColor = "red";
    positionY.focus();
    event.preventDefault();
    return;
  }
  if (positionY.value > 300) {
    alert("positionY not valid!!");
    positionY.style.backgroundColor = "red";
    positionY.focus();
    event.preventDefault();
    return;
  }
  if (positionY.value.length > 3) {
    alert("positionY not valid!!!!");
    positionY.style.backgroundColor = "red";
    positionY.focus();
    event.preventDefault();
    return;
  }

  if (positionY.value.length < 0) {
    alert("positionY too short!!");
    positionY.style.backgroundColor = "red";
    positionY.focus();
    event.preventDefault();
    return;
  }
}

function drawRectangle() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  painter.strokeStyle = "blue";
  painter.strokeRect(positionX, positionY, widthIn, heightIn);
  painter.fillRect;
}

function clearCanvas() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  painter.clearRect(0, 0, 600, 400);
}

function onWindowLoad() {
  const form = document.querySelector("form");
  form.onclick = checkLogin;
  const btn1 = document.querySelector("btn1");
  btn1.onclick = drawRectangle;
  const btn2 = document.querySelector("btn2");
  btn2.onclick = clearCanvas;
}

window.onload = onWindowLoad;
