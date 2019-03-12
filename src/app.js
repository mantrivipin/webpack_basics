var container = document.querySelector(".img-sample");
if (container) {
  container.addEventListener("load", function() {
    var elm = document.createElement("div");
    elm.innerHTML = "image loaded";
    document.body.appendChild(elm);
  });
}
