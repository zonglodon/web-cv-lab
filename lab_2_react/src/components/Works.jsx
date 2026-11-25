import Block from './Block';

export default function Works({ data }) {
    return (
        <Block id="works" title="Роботи">
            <p>Усі роботи виконані під час навчання.</p>
            <ol>
                {data.map(({ title, text }) => (
                    <li key={title}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </li>
                ))}
            </ol>
        </Block>
    );
}
