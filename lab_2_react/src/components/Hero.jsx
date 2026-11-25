export default function Hero({ person }) {
    return (
        <header className="bg-linear-to-r from-indigo-700 to-fuchsia-600 px-6 py-16 text-center text-white">
            <h1 className="text-5xl font-extrabold tracking-tight">{person.name}</h1>
            <p className="mt-3 text-lg italic text-indigo-100">{person.role}</p>
        </header>
    );
}
