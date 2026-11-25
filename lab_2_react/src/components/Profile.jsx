import Block from './Block';

export default function Profile() {
    return (
        <Block id="profile" title="Профіль">
            <p className="leading-relaxed">
                Студент кафедри захисту інформації. На курсі з вебпрограмування
                розбираюся, як влаштовані сайти: від розмітки до власного сервера.
            </p>
            <blockquote className="mt-4 rounded-r-lg border-l-4 border-fuchsia-500 bg-fuchsia-50 p-4 italic">
                На сторінці зібрані навчальні роботи з цього курсу.
            </blockquote>
        </Block>
    );
}
