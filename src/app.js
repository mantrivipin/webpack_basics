const container = document.querySelector(".img-sample");
if (container) {
  container.addEventListener("load", function() {
    const elm = document.createElement("div");
    elm.innerHTML = "image loaded";
    document.body.appendChild(elm);
  });
}
