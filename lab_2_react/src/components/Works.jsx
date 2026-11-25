import Block from './Block';

export default function Works({ data }) {
    return (
        <Block id="works" title="Роботи">
            <p className="mb-4 text-slate-500">Усі роботи виконані під час навчання.</p>
            <ol className="space-y-6 border-l-2 border-indigo-200 pl-6">
                {data.map(({ title, text }) => (
                    <li key={title} className="relative before:absolute before:top-2 before:-left-[31px] before:size-3 before:rounded-full before:bg-fuchsia-600">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-1">{text}</p>
                    </li>
                ))}
            </ol>
        </Block>
    );
}
