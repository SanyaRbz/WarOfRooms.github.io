document.addEventListener('DOMContentLoaded', function() {
    // Слова для каждой страницы

    // Создаем контейнер для слов
    const floatContainer = document.createElement('div');
    floatContainer.className = 'floating-words';
    document.body.appendChild(floatContainer);




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





