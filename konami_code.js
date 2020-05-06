document.body.addEventListener("keydown", function(e) {
  init(e)
});

let i = 0;

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

function init(e) {
  const key = e.key;

  if (codes[i] === key) {
    i++;

    if (i === codes.length) {
      alert('Hurray!');
      i = 0;
    }
  } else {
    i = 0;
  }
}
