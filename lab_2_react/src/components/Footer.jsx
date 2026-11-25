import { useEffect, useState } from 'react';

const KEY = 'reactSystemInfo';

export default function Footer({ name }) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const current = { userAgent: navigator.userAgent, platform: navigator.platform };
        localStorage.setItem(KEY, JSON.stringify(current));
        setInfo(JSON.parse(localStorage.getItem(KEY)));
    }, []);

    return (
        <footer className="bg-slate-900 p-8 text-center text-slate-300">
            <small>{name}, 2026</small>
            {info && (
                <dl className="mx-auto mt-4 max-w-2xl text-left text-xs">
                    <dt className="text-fuchsia-400">Браузер</dt>
                    <dd className="mb-2">{info.userAgent}</dd>
                    <dt className="text-fuchsia-400">Платформа</dt>
                    <dd>{info.platform}</dd>
                </dl>
            )}
        </footer>
    );
}
