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
    console.error('inside')
    if (codes[i] === key) {
      i++;
console.error('first if')
      if (i === codes.length) {
        alert('Hurray!');

        i = 0;
        console.error('second if')
      }
    } else {
      i = 0;
      console.error('else')
    }
  });
}
