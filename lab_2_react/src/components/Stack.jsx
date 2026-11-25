import Block from './Block';
import StackGroup from './StackGroup';

export default function Stack({ data }) {
    return (
        <Block id="stack" title="Технології">
            <dl className="grid gap-4 sm:grid-cols-2">
                {data.map((row) => (
                    <StackGroup key={row.group} name={row.group} items={row.items} />
                ))}
            </dl>
        </Block>
    );
}
