const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let i = 0;

  document.body.addEventListener("keydown", function(e) {
    const key = e.key;

    if (codes[i] === key) {
      index++;

      if (i === codes.length) {
        alert("YEEEE!");
        i = 0;
      }
    } else {
      i = 0;
    }
  });
}
