const name = document.querySelector('.name');
const score = document.querySelector('.score');
const list = document.querySelector('.list');

export const addData = () => {
  const nameValue = name.value;
  const scoreInput = score.value;
  const item = { name: nameValue, score: scoreInput };
  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  displayData();
};

export const displayData = () => {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  list.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.textContent = `${item.name}-${item.score}`;
    list.appendChild(li);
  });
  list.style.display = 'block';
};
