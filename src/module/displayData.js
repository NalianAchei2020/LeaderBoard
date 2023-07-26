const list = document.querySelector('.list');
export const displayData = async () => {
  // Make a GET request to the API
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XvHI02amwzH3U49JcIeq/scores'
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data from the API');
  }

  const data = await response.json();

  let items;
  if (Array.isArray(data)) {
    // The API returned an array of objects with 'user' and 'score' properties
    items = data;
  } else if (typeof data === 'object' && data !== null) {
    // The API returned an object with 'result' property containing an array of objects with 'user' and 'score' properties
    items = data.result;
  } else {
    throw new Error('Invalid data format from the API');
  }

  list.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.textContent = `${item.user} - ${item.score}`;
    list.appendChild(li);
  });
  list.style.display = 'block';
};
