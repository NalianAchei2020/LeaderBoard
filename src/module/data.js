const name = document.querySelector('.name');
const score = document.querySelector('.score');
const list = document.querySelector('.list');

export const addData = async () => {
  const nameValue = name.value;
  const scoreInput = score.value;
  const items = { user: nameValue, score: scoreInput };
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/agien1235/scores',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(items),
    }
  );
  if (!response.ok) {
    throw new Error('Data not found');
  }

  displayData();
};
