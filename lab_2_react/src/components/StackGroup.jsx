export default function StackGroup({ name, items }) {
    return (
        <div className="rounded-2xl bg-slate-100 p-4">
            <dt className="mb-2 text-sm text-slate-500">{name}</dt>
            <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span key={item} className="rounded-md bg-indigo-600 px-2 py-0.5 text-sm text-white">
                        {item}
                    </span>
                ))}
            </dd>
        </div>
    );
}
