import { useEffect, useState } from 'react';
import Field from './Field';

const DELAY = 60000;

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => setIsOpen(true), DELAY);
        return () => clearTimeout(id);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-20 grid place-items-center overflow-auto bg-slate-900/70 p-4">
            <form
                action="https://formspree.io/f/FORM_ID"
                method="POST"
                className="w-full max-w-sm space-y-4 rounded-3xl bg-white p-8 dark:bg-slate-800"
            >
                <h2 className="text-center text-2xl font-bold text-indigo-700 dark:text-indigo-300">Напишіть мені</h2>
                <Field label="Ім'я" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Номер телефону" name="phone" type="tel" />
                <Field label="Повідомлення" name="message" as="textarea" rows="4" required />
                <button type="submit" className="w-full cursor-pointer rounded-lg bg-fuchsia-600 py-2 font-semibold text-white hover:bg-fuchsia-700">
                    Надіслати
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="w-full cursor-pointer text-sm text-slate-500 underline dark:text-slate-400">
                    Закрити
                </button>
            </form>
        </div>
    );
}
