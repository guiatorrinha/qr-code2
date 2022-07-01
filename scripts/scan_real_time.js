const html5QrCode = new Html5Qrcode("reader");

const qrValue = document.getElementById("qr_value");

const scanDiv = document.getElementById("scan");
const form = document.getElementById("form");

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  var shutter = new Audio();
  shutter.autoplay = true;
  shutter.src = "../sounds/beep.mp3";

  qrValue.value = decodedText;

  html5QrCode.stop();

  form.removeChild(scanDiv);
};

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// Back camera
const start = html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
// Front camera
// { facingMode: "user" }

const stop = html5QrCode.stop()