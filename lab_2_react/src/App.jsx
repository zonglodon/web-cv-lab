import { person, menu, stack, works, study, links } from './data/cv';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Stack from './components/Stack';
import Works from './components/Works';
import Study from './components/Study';
import Links from './components/Links';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-white text-slate-800">
            <Hero person={person} />
            <Menu items={menu} />
            <main className="mx-auto max-w-4xl divide-y divide-slate-200 px-6">
                <Profile />
                <Stack data={stack} />
                <Works data={works} />
                <Study data={study} />
                <Links data={links} />
            </main>
            <Footer name={person.name} />
        </div>
    );
}
