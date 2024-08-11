function pindahElemenSecaraAcak(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const tombolPindahAcak = document.querySelector("#move-random");
  
  tombolPindahAcak.addEventListener("mouseenter", function (e) {
    pindahElemenSecaraAcak(e.target);
  });
  