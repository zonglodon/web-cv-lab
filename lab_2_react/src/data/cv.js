export const person = {
    name: 'Білий Н. В.',
    role: 'студент, група КБ-405',
};

export const menu = [
    ['profile', 'Профіль'],
    ['stack', 'Технології'],
    ['works', 'Роботи'],
    ['study', 'Навчання'],
    ['links', 'Посилання'],
];

export const stack = [
    { group: 'Розмітка та стилі', items: ['HTML5', 'CSS3', 'Tailwind CSS'] },
    { group: 'Мова програмування', items: ['JavaScript'] },
    { group: 'Бібліотеки та фреймворки', items: ['React', 'Express'] },
    { group: 'Інструменти', items: ['Git', 'npm', 'Vite', 'Chrome DevTools'] },
];

export const works = [
    {
        title: 'Сторінка CV',
        text: 'Статична сторінка на HTML і CSS.',
    },
    {
        title: 'CV у вигляді React-застосунку',
        text: 'Та сама сторінка, але зібрана з компонентів. Дані лежать окремо від розмітки.',
    },
    {
        title: 'Сервер для форми',
        text: 'Express-застосунок, що роздає сайт і записує звернення у файл.',
    },
];

export const study = {
    school: 'НУ «Львівська політехніка»',
    department: 'Захисту інформації',
    group: 'КБ-405',
};

export const links = [
    { url: 'https://lpnu.ua', label: 'Сайт університету' },
    { url: 'https://developer.mozilla.org', label: 'Документація MDN' },
];
