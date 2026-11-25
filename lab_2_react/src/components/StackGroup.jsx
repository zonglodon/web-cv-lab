export default function StackGroup({ name, items }) {
    return (
        <>
            <dt>{name}</dt>
            <dd>{items.join(', ')}</dd>
        </>
    );
}
