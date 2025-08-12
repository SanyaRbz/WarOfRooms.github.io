document.addEventListener('DOMContentLoaded', function() {
    // Слова для каждой страницы
    const pageWords = {
        '/': ["Летопись", "Война", "Братья", "Сага", "Память", "История", "Сражение", "Мир", "Трехцарствие", "Легенда"],
        '/chapter1': ["Мир", "Распад", "Три царства", "Пустошь", "Книги", "Коты", "Диван", "Кухня", "Коридор", "Согласие", "Претензии", "Ось", "Справедливость", "Буря", "Имбирь"],
        '/chapter2': ["Осада", "Кровь", "Блокада", "Граната", "Вода", "Оружие", "Трубочка", "Вылазка", "Плен", "Поражение", "Слеза", "Захват", "Дутьё", "Отвага", "Изобретение"],
        '/chapter3': ["Освобождение", "Плен", "Ярость", "Спасение", "Адреналин", "Тишина", "Угроза", "Берсерк", "Захват", "Побег", "Дверь", "Укрепрайон", "Коты", "Раны", "Месть"],
        '/chapter4': ["Облако", "Возмездие", "Газ", "Противогаз", "Тряпка", "Химия", "Вонь", "Удушье", "Туман", "Защита", "Атака", "ОВСЗ", "Тошнота", "Слезы"],
        '/chapter5': ["Мир", "Переговоры", "Письмо", "Договор", "Компромисс", "Границы", "Запрет", "Диван", "Холодильник", "Перемирие", "Конец", "Обломки", "Последствия", "Соглашение"]
    };

    // Создаем контейнер для слов
    const floatContainer = document.createElement('div');
    floatContainer.className = 'floating-words';
    document.body.appendChild(floatContainer);

    // Получаем текущий путь
    const currentPath = window.location.pathname;
    const words = pageWords[currentPath] || pageWords['/'];

    // Создаем летающие слова
    words.forEach((word, index) => {
        createFloatingWord(word, index);
    });

    function createFloatingWord(word, index) {
        const wordEl = document.createElement('div');
        wordEl.className = 'floating-word';
        wordEl.textContent = word;

        // Случайные параметры с привязкой к индексу для разнообразия
        const seed = (index * 123) % 100 / 100;

        wordEl.style.setProperty('--start-x', 0.1 + seed * 0.8);
        wordEl.style.setProperty('--end-x', 0.1 + (1 - seed) * 0.8);
        wordEl.style.setProperty('--rotation', 0.5 + seed);
        wordEl.style.setProperty('--opacity', 0.1 + seed * 0.1);
        wordEl.style.setProperty('--size', seed);
        wordEl.style.setProperty('--speed', seed);
        wordEl.style.setProperty('--delay', index * 2);

        floatContainer.appendChild(wordEl);
    }


    // Добавляем чернильные пятна
    for (let i = 0; i < 5; i++) {
        const ink = document.createElement('div');
        ink.className = 'ink-blot';
        ink.style.top = `${10 + Math.random() * 80}%`;
        ink.style.left = `${10 + Math.random() * 80}%`;
        ink.style.setProperty('--size', Math.random());
        ink.style.setProperty('--opacity', Math.random());
        document.querySelector('.book-content').appendChild(ink);
    }

    // Добавляем кнопку следующей главы, если есть куда идти
    const nextChapter = getNextChapter(currentPath);
    if (nextChapter) {
        const nav = document.createElement('div');
        nav.className = 'chapter-navigation';
        nav.innerHTML = `
            <a href="${getPrevChapter(currentPath) || '#'}" class="nav-button" ${!getPrevChapter(currentPath) ? 'style="visibility:hidden"' : ''}>← Предыдущая глава</a>
            <a href="${nextChapter}" class="nav-button">Следующая глава →</a>
        `;
        document.querySelector('.chapter').appendChild(nav);
    }

    function getNextChapter(path) {
        const chapters = ['/chapter1', '/chapter2', '/chapter3'];
        const index = chapters.indexOf(path);
        return index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null;
    }

    function getPrevChapter(path) {
        const chapters = ['/chapter1', '/chapter2', '/chapter3'];
        const index = chapters.indexOf(path);
        return index > 0 ? chapters[index - 1] : null;

    }
});

