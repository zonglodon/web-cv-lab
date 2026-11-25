const POST_ID = 2; // номер варіанта
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/posts/${POST_ID}/comments`;
const MODAL_DELAY = 60 * 1000;
const DAY_START = 7;
const DAY_END = 21;

const $ = (selector) => document.querySelector(selector);

/* ===== дані про систему ===== */

const collectInfo = () => ({
    browser: navigator.userAgent,
    os: navigator.platform,
    languages: navigator.languages,
    cores: navigator.hardwareConcurrency,
    cookies: navigator.cookieEnabled,
    touchPoints: navigator.maxTouchPoints,
    window: `${innerWidth} x ${innerHeight}`,
    colorDepth: screen.colorDepth,
});

function renderStorage() {
    const rows = Object.entries(localStorage).flatMap(([key, value]) => {
        if (key !== 'systemInfo') return [[key, value]];
        return Object.entries(JSON.parse(value));
    });

    for (const [name, value] of rows) {
        const row = $('#storage').insertRow();
        row.insertCell().textContent = name;
        row.insertCell().textContent = value;
    }
}

/* ===== коментарі ===== */

function createReview({ name, email, body }) {
    const figure = document.createElement('figure');
    const quote = document.createElement('blockquote');
    const caption = document.createElement('figcaption');

    figure.className = 'review';
    quote.textContent = body;
    caption.textContent = `${name} (${email})`;
    figure.append(quote, caption);
    return figure;
}

function loadReviews() {
    fetch(COMMENTS_URL)
        .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
        .then((list) => $('#reviews-list').replaceChildren(...list.map(createReview)))
        .catch((err) => {
            console.error('Коментарі:', err);
            $('#reviews-list').textContent = 'Коментарі тимчасово недоступні.';
        });
}

/* ===== вікно з формою ===== */

const overlay = $('.overlay');

const openForm = () => {
    overlay.hidden = false;
    $('#f-name').focus();
};
const closeForm = () => {
    overlay.hidden = true;
};

$('.overlay__close').addEventListener('click', closeForm);
overlay.addEventListener('click', (e) => e.target === overlay && closeForm());
document.addEventListener('keydown', (e) => e.key === 'Escape' && closeForm());

/* ===== тема ===== */

const toggle = $('#theme-toggle');

function applyTheme(night) {
    document.documentElement.dataset.theme = night ? 'night' : 'day';
    toggle.checked = night;
}

function autoTheme() {
    const now = new Date();
    const night = now.getHours() < DAY_START || now.getHours() >= DAY_END;
    applyTheme(night);

    // наступне перемикання рівно о 7:00 або 21:00
    const next = new Date(now);
    next.setHours(night ? DAY_START : DAY_END, 0, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    setTimeout(autoTheme, next - now);
}

toggle.addEventListener('change', () => applyTheme(toggle.checked));

/* ===== запуск ===== */

localStorage.setItem('systemInfo', JSON.stringify(collectInfo()));
renderStorage();
loadReviews();
autoTheme();
setTimeout(openForm, MODAL_DELAY);
