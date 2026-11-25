// спільна обгортка для всіх розділів
export default function Block({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-16 py-8 sm:grid sm:grid-cols-[180px_1fr] sm:gap-8">
            <h2 className="mb-4 text-xl font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">{title}</h2>
            <div>{children}</div>
        </section>
    );
}
