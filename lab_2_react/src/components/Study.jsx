import Block from './Block';

export default function Study({ data }) {
    return (
        <Block id="study" title="Навчання">
            <table>
                <thead>
                    <tr>
                        <th>Заклад</th>
                        <th>Кафедра</th>
                        <th>Група</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.school}</td>
                        <td>{data.department}</td>
                        <td>{data.group}</td>
                    </tr>
                </tbody>
            </table>
        </Block>
    );
}
