'use strict';

const tHeadRows = document.querySelectorAll('thead tr');
const tBodyRows = document.querySelectorAll('tbody tr');

Array.from(tHeadRows).forEach((item) => {
  const cells = Array.from(item.cells);

  cells.splice(cells.length - 1, 0, cells[1]);
  item.innerHTML = '';

  for (let i = 0; i < cells.length; i++) {
    item.innerHTML += `<th>${cells[i].textContent}</th>`;
  }
});

Array.from(tBodyRows).forEach((item) => {
  const cells = Array.from(item.cells);

  cells.splice(cells.length - 1, 0, cells[1]);
  item.innerHTML = '';

  for (let i = 0; i < cells.length; i++) {
    item.innerHTML += `<td>${cells[i].textContent}</td>`;
  }
});
