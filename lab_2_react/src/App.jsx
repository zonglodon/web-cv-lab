import { useEffect, useState } from 'react';
import { person, menu, stack, works, study, links } from './data/cv';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Stack from './components/Stack';
import Works from './components/Works';
import Study from './components/Study';
import Links from './components/Links';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const themeByHour = (hour) => (hour >= 7 && hour < 21 ? 'light' : 'dark');

export default function App() {
    const [theme, setTheme] = useState('light');

    // початкова тема за годинником
    useEffect(() => {
        setTheme(themeByHour(new Date().getHours()));
    }, []);

    // клас dark на body
    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const switchTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <Hero person={person} />
            <Menu items={menu} theme={theme} onThemeChange={switchTheme} />
            <main className="mx-auto max-w-4xl divide-y divide-slate-200 px-6 dark:divide-slate-700">
                <Profile />
                <Stack data={stack} />
                <Works data={works} />
                <Study data={study} />
                <Links data={links} />
                <Reviews />
            </main>
            <Footer name={person.name} />
            <ContactForm />
        </div>
    );
}
