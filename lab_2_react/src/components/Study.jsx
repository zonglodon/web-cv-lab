import Block from './Block';

export default function Study({ data }) {
    return (
        <Block id="study" title="Навчання">
            <table className="w-full overflow-hidden rounded-lg text-left shadow">
                <thead className="bg-indigo-600 text-white">
                    <tr>
                        <th className="p-3">Заклад</th>
                        <th className="p-3">Кафедра</th>
                        <th className="p-3">Група</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="p-3">{data.school}</td>
                        <td className="p-3">{data.department}</td>
                        <td className="p-3">{data.group}</td>
                    </tr>
                </tbody>
            </table>
        </Block>
    );
}
