import Block from './Block';

export default function Links({ data }) {
    return (
        <Block id="links" title="Посилання">
            <ul>
                {data.map((link) => (
                    <li key={link.url}>
                        <a href={link.url} target="_blank" rel="noopener">{link.label}</a>
                    </li>
                ))}
            </ul>
        </Block>
    );
}
