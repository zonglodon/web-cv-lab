export default function Menu({ items }) {
    return (
        <nav>
            {items.map(([id, label]) => (
                <a key={id} href={`#${id}`}>{label} </a>
            ))}
        </nav>
    );
}
