import { ButtonPropsType } from '../components/Button/type';

 const ButtonTableInfo = (props : ButtonPropsType) => {
    return (
        <>
            <table className="w-full  border-separate mt-3 shadow-lg mb-6">
                <thead>
                    <tr>
                        <th className="border border-gray-300  bg-gray-100  py-2 px-4">Name</th>
                        <th className="border border-gray-300  bg-gray-100  py-2 px-4">Type</th>
                        <th className="border border-gray-300  bg-gray-100  py-2 px-4">Required</th>
                        <th className="border border-gray-300  bg-gray-100  py-2 px-4">Description</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.values(props).map((propName) => (
                        
                        <tr key={propName}>
                            <td className="border border-gray-300 py-2 px-4 font-semibold">{propName.name}</td>
                            <td className="border border-gray-300 py-2 px-4">
                                <span className="border p-1 rounded-md bg-gray-50">{propName.type.name ? propName.type.name : 'None'}
                                </span>
                            </td>
                            <td className="border border-gray-300 py-2 px-4">{propName.flags.isOptional == 'NO' ? 'Yes' : 'No'}</td>
                            <td className="border border-gray-300 py-2 px-4">{propName?.comment?.summary[0]?.text ? propName?.comment?.summary[0]?.text:"none"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ButtonTableInfo;
