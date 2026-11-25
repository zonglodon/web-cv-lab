export default function Field({ label, as: Tag = 'input', ...props }) {
    return (
        <label className="block">
            <span className="text-sm">{label}</span>
            <Tag
                {...props}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 focus:border-fuchsia-600 focus:outline-none dark:border-slate-600"
            />
        </label>
    );
}
