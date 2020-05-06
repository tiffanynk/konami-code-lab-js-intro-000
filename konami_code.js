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

let i = 0;

function init() {
  const key = e.key;

  if (key === codes[i]) {
    i++;

    if (i === codes.length) {
      alert('Yay!');

      i = 0;

    }
  } else {
    i = 0;

  }
}

// document.body.addEventListener('keydown', (event) => {
//   const key = e.key;
// 
//   if (key === codes[i]) {
//     i++;
// 
//     if (i === codes.length) {
//       alert('Yay!');
// 
//       i = 0;
// 
//     }
//   } else {
//     i = 0;
// 
//   }
// });
