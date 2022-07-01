const html5QrCode = new Html5Qrcode("reader");

const qrValue = document.getElementById("qr_value");
const afterScan = document.getElementById("after_scan");
const load = document.getElementById("load");

const gifScan = document.createElement("img");
gifScan.src = "../images/camera-scan.gif";

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  afterScan.removeChild(load);

  var shutter = new Audio();
  shutter.autoplay = true;
  shutter.src = "../sounds/beep.mp3";

  qrValue.value = decodedText;

  html5QrCode.stop();

  afterScan.appendChild(gifScan);
};

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// Back camera
const start = html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
// Front camera
// { facingMode: "user" }

const stop = html5QrCode.stop()