function upDate(previewPic) {

  // document.getElementById('image').style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
  document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
  document.getElementById('image').innerHTML = previewPic.alt;

}

function unDo() {
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  document.getElementById('image').style.backgroundImage = "url('')";
}