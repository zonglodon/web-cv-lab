import { useEffect, useState } from 'react';
import Block from './Block';

const URL = 'https://jsonplaceholder.typicode.com/posts/2/comments';

export default function Reviews() {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const response = await fetch(URL, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                setItems(await response.json());
                setStatus('ready');
            } catch (error) {
                if (error.name === 'AbortError') return;
                console.error(error);
                setStatus('error');
            }
        }

        load();
        return () => controller.abort();
    }, []);

    return (
        <Block id="reviews" title="Відгуки">
            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Вигадані дані з сервісу JSONPlaceholder.</p>
            {status === 'loading' && <p>Завантаження...</p>}
            {status === 'error' && <p>Відгуки тимчасово недоступні.</p>}
            {items.map((item) => (
                <figure key={item.id} className="mb-4 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">
                    <blockquote>{item.body}</blockquote>
                    <figcaption className="mt-3 text-sm font-semibold break-words text-indigo-700 dark:text-indigo-300">
                        {item.name}, {item.email}
                    </figcaption>
                </figure>
            ))}
        </Block>
    );
}
