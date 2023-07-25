import { addData, displayData } from './modules/addData.js';
import './style.css';

const button = document.querySelector('#submit');
button.addEventListener('click', addData);

window.addEventListener('load', displayData);
