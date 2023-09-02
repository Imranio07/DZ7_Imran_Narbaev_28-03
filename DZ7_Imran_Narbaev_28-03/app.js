async function fetchAndRenderCards() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        const cardContainer = document.getElementById('card-container');

        data.forEach((post) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const title = document.createElement('h2');
            title.textContent = post.title;

            const body = document.createElement('p');
            body.textContent = post.body;

            card.appendChild(title);
            card.appendChild(body);

            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
    }
}

// Вызовем функцию для получения данных и рендеринга карточек при загрузке страницы
fetchAndRenderCards();