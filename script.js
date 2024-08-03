function format() {
  let textareaToPaste = document.getElementById("textareaToPaste");
  let toFormat = textareaToPaste.value;
  let formatted = document.getElementById("formatted").value;
  let gettyNumber = document.getElementById("gettyNumber").value;
  
  //remove line breaks, replace spaces with dashes, remove commas, remove periods, remove extra spaces
  formatted = toFormat.replace(/(\r\n|\n|\r)/gm, " ").replace(/ +/g, '-').replace(",", "").replace(".", "").replace(/\s+/g, " ");
  
  //make all lowercase ↓
  formatted = formatted.toLowerCase(formatted);
  
  //add getty to end w/ space for file# ↓
  formatted = formatted.concat('-getty-', gettyNumber);
  document.getElementById("formatted").value = formatted.trim();
  document.getElementById("formatted").style.display = "block";
  document.getElementById("copy-button").style.display = "block";
}

//clear all fields
function clearAll() {
  document.getElementById('textareaToPaste').value = '';
  document.getElementById('formatted').value = '';
  document.getElementById('formatted').style.display = 'none';
  document.getElementById('gettyNumber').value = '';
  document.getElementById('copy-button').style.display = 'none';
  document.getElementById('copied').style.display = 'none';
}

//copy the formatted text
function copyResult() {
  let copyText = document.getElementById("formatted");
  navigator.clipboard.writeText(copyText.value);
  let copiedAlert = document.getElementById("copied");
  copiedAlert.style.display = "block";
}
