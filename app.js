document
  .getElementById("input-text-one")
  .addEventListener("keypress", function (event) {
    document.querySelector("#result-form h1").innerText =
      this.value + event.key;
  });
document
  .getElementById("input-text-two")
  .addEventListener("keypress", function (event) {
    document.querySelector("#result-form h2").innerText =
      this.value + event.key;
  });
document
  .getElementById("input-text-three")
  .addEventListener("keypress", function (event) {
    document.querySelector("#result-form h3").innerText =
      this.value + event.key;
  });

const inform = document.getElementById("form-inform");
const save = document.getElementById("btn-save");
const htmlFile = document.querySelector("html").innerHTML;
const resForm = document.getElementById("result-form").innerHTML;
const el = document.querySelector("html").innerHTML;
var resultat = new XMLSerializer().serializeToString(document)

save.addEventListener("click", () => {
  if (confirm("Do you want to save the file?")) {
    console.log(resultat);
    inform.classList.add("none");
    fetch(
      "data:text/html;charset=utf-8," + encodeURI("\uFEFF" + resultat)
    )
      .then((res) => res.blob())
      .then((res) => {
        const data = window.URL.createObjectURL(res);
        var link = document.createElement("a");
        link.href = data;
        link.download = "busines-card.html";
        link.click();
        setTimeout(function () {
          window.URL.revokeObjectURL(data);
        }, 100);
        link.remove();
      });
  } else return;
});
