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