function setScreenshotUrl(url) {
    document.getElementById('picTarget').src = url;
  }
  window.addEventListener('load', function load(event){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("img");
    }),

function saveImage() {
  ctx.drawImage(img, 0, 0) 
  var ua = window.navigator.userAgent;
      // save image without file type
      var canvas = document.getElementById("canvas");
      document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

      // save image as png
      var link = document.createElement('a');
      link.download = "test.png";
      link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
      link.click();
}