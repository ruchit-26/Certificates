function upDate(previewPic) {
  document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
  document.getElementById('image').innerHTML = previewPic.alt;

}

function unDo() {
  document.getElementById('image').innerHTML = "Hover over any certificate below to display here.";
  document.getElementById('image').style.backgroundImage = "url('')";
}
