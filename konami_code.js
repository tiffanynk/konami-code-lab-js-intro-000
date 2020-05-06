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

  document.body.addEventListener('keydown', (event) => {
    const key = e.key;

    if (codes[i] === key) {
      i++;

      if (i === codes.length) {
        alert('Yay!');

        i = 0;

      }
    } else {
      i = 0;

    }
  });
}
