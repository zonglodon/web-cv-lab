import Block from './Block';

export default function Links({ data }) {
    return (
        <Block id="links" title="Посилання">
            <ul className="flex flex-wrap gap-3">
                {data.map((link) => (
                    <li key={link.url}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener"
                            className="inline-block rounded-lg border-2 border-indigo-600 px-4 py-2 text-indigo-700 dark:text-indigo-300 transition hover:-translate-y-0.5 hover:bg-indigo-600 hover:text-white"
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </Block>
    );
}
