const html5QrCode = new Html5Qrcode("reader");
const qrValue = document.getElementById("qr_value");

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  var shutter = new Audio();
  shutter.autoplay = true;
  shutter.src = "./beep.mp3";

  qrValue.value = decodedText;

  html5QrCode.stop()
};

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

// If you want to prefer front camera
// html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
// Select front camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "user" } }, config, qrCodeSuccessCallback);

// If you want to prefer back camera
let start = html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
let stop = html5QrCode.stop()

// Select back camera or fail with `OverconstrainedError`.
// html5QrCode.start({ facingMode: { exact: "environment" } }, config, qrCodeSuccessCallback);