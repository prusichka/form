let first;
let second;
let three;
document
  .getElementById("input-text-one")
  .addEventListener("keypress", function (event) {
    first = this.value + event.key;
    document.querySelector("#result-form h1").innerText =
      this.value + event.key;
  });
document
  .getElementById("input-text-two")
  .addEventListener("keypress", function (event) {
    second = this.value + event.key;
    document.querySelector("#result-form h2").innerText =
      this.value + event.key;
  });
document
  .getElementById("input-text-three")
  .addEventListener("keypress", function (event) {
    three = this.value + event.key;
    document.querySelector("#result-form h3").innerText =
      this.value + event.key;
  });

const inform = document.getElementById("form-inform");
const save = document.getElementById("btn-save");
const download = document.getElementById("btn-download");


download.addEventListener("click", () => {
  if (confirm("Do you want to save the file?")) {
    inform.classList.add("none");
    const resulForm = document.querySelector('#result-form').innerHTML;
    const blobData = new Blob([resulForm], {
      type: 'text/html'
  });
  const data = window.URL.createObjectURL(blobData);
          var link = document.createElement("a");
          link.href = data;
          link.download = "busines-card.html";
          link.click();
  } else return;
});
