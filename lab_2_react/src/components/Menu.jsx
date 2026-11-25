export default function Menu({ items, theme, onThemeChange }) {
    return (
        <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 border-b border-slate-200 bg-white/90 px-4 py-3 font-medium dark:border-slate-700 dark:bg-slate-900/90">
            {items.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="border-b-2 border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600">
                    {label}
                </a>
            ))}
            <button
                type="button"
                onClick={onThemeChange}
                title="Змінити тему"
                className="cursor-pointer rounded-full bg-slate-200 px-3 py-1 text-sm dark:bg-slate-700"
            >
                {theme === 'light' ? '☾ ніч' : '☀ день'}
            </button>
        </nav>
    );
}
