import './style.css';
import { addData } from './module/data.js';
import { displayData } from './module/displayData.js';

const btnSubmit = document.getElementById('submit');
const btnRefresh = document.getElementById('refresh');

btnSubmit.addEventListener('click', async () => {
  await addData();
});
btnRefresh.addEventListener('click', async () => {
  await displayData();
});

window.addEventListener('load', async () => {
  await displayData();
});
