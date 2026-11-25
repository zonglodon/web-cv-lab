export default function Hero({ person }) {
    return (
        <header>
            <h1>{person.name}</h1>
            <p><em>{person.role}</em></p>
        </header>
    );
}
