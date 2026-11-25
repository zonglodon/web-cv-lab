export default function Menu({ items }) {
    return (
        <nav className="sticky top-0 z-10 flex flex-wrap justify-center gap-x-6 gap-y-1 border-b border-slate-200 bg-white/90 px-4 py-3 font-medium">
            {items.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="border-b-2 border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600">
                    {label}
                </a>
            ))}
        </nav>
    );
}
