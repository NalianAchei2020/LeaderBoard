const name = document.querySelector('.name');
const score = document.querySelector('.score');

export const addData = async () => {
  const nameValue = name.value;
  const scoreInput = score.value;
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XvHI02amwzH3U49JcIeq/scores',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ user: nameValue, score: scoreInput }),
    }
  );
  if (!response.ok) {
    throw new Error('Failed to post data');
  }
};
