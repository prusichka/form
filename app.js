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
