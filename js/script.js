AOS.init();

function start() {
  const content = document.getElementById("section1");

  content.scrollIntoView({ block: "center", behavior: "smooth" });
}

function buttonanimate() {
  let butt = document.getElementById("buttoncenter");
  butt.classList.toggle("close");
}
