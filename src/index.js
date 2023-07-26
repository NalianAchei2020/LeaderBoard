import './style.css';

import { addData, displayData } from './module/data.js';

const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', addData);
window.addEventListener('load', displayData);
