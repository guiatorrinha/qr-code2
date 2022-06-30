/**
 * Scanner da webcam/camera real time
 */
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
  var shutter = new Audio();
  shutter.autoplay = true;
  shutter.src = "./beep.mp3";
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

//******************************************************************************* */

/**
 * Parte do scanner de arquivos
 */
const html5QrCodeFile = new Html5Qrcode("reader_file");

const fileinput = document.getElementById("qr_input_file");
fileinput.addEventListener("change", e => {
  if (e.target.files.length == 0) {
    // No file selected, ignore 
    return;
  }

  const imageFile = e.target.files[0];
  // Scan QR Code
  html5QrCodeFile.scanFile(imageFile, true)
    .then(decodedText => {
      // success, use decodedText
      console.log(decodedText);
    })
    .catch(err => {
      // failure, handle it.
      console.log(`Error scanning file. Reason: ${err}`)
    });
});