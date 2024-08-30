let diaryList = [];

const registerDiary = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDay()).padStart(2, '0');
  const createdAt = `${year}. ${month}. ${day}`;

  const title = document.querySelector('#input-title').value;
  const content = document.querySelector('#input-content').value;

  const emotion =
    document.querySelector('#emotion-happy').checked === true
      ? 'happy'
      : document.querySelector('#emotion-sad').checked === true
      ? 'sad'
      : document.querySelector('#emotion-angry').checked === true
      ? 'angry'
      : document.querySelector('#emotion-surprising').checked === true
      ? 'surprising'
      : document.querySelector('#emotion-etc').checked === true
      ? 'etc'
      : '';

  const data = {
    title,
    content,
    createdAt,
    emotion,
  };

  diaryList.push(data);

  localStorage.setItem('myDiaryList', JSON.stringify(diaryList));
};
