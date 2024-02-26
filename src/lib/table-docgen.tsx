// import React from 'react';
// import ButtonProps from '../components/Button/type';
// // import reactDocgenTypescript from "@joshwooding/vite-plugin-react-docgen-typescript";
// // import PropTypes from "prop-types";

// // interface PropDetails {
// //     type: { name: string };
// //     defaultValue: { value: any } | null;
// //     required: boolean;
// //     description: string;
// // }

// // const extractProps = (component: React.ReactElement): PropDetails => {
// //     const info = reactDocgenTypescript(React.createElement(component.type));
  
// //     console
// //     const propDetails: PropDetails = {
// //       type: { name: info.props.type.name },
// //       defaultValue: info.props.defaultValue || null,
// //       required: info.props.required || false,
// //       description: info.description || "No description",
// //     };
  
// //     return propDetails;
// //   };
//  const ButtonTableInfo = ({ ...columns }: ButtonProps) => {

// //     const componentProps: { [key: string]: PropDetails } = {};

// //     columns.forEach((column) => {
// //       const displayName = column.type.displayName;
// //       if (displayName) {
// //         componentProps[displayName] = extractProps(column);
// //       }
// //     });

//     return (
//         <>
//             <table className="w-full  border-separate mt-3 shadow-lg mb-6">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300  bg-gray-100  py-2 px-4">Name</th>
//                         <th className="border border-gray-300  bg-gray-100  py-2 px-4">Type</th>
//                         <th className="border border-gray-300  bg-gray-100  py-2 px-4">Default</th>
//                         <th className="border border-gray-300  bg-gray-100  py-2 px-4">Required</th>
//                         <th className="border border-gray-300  bg-gray-100  py-2 px-4">Description</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Object.entries(columns).map(([propName, propDetails]) => (
//                         <tr key={propName}>
//                             <td className="border border-gray-300 py-2 px-4 font-semibold">{propName}</td>
//                             <td className="border border-gray-300 py-2 px-4">
//                                 <span className="border p-1 rounded-md bg-gray-50">{propDetails.defaultValue ? propDetails.defaultValue.value : 'None'}
//                                 </span>
//                             </td>
//                             <td className="border border-gray-300 py-2 px-4">{propDetails.required ? 'Yes' : 'No'}</td>
//                             <td className="border border-gray-300 py-2 px-4">{propDetails.description}</td>
//                             <td className="border border-gray-300 py-2 px-4">{propDetails.required ? 'Yes' : 'No'}

//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     )
// }
// // ButtonTableInfo.propTypes = {
// //     columns: PropTypes.arrayOf(PropTypes.element).isRequired,
// //   };

// export default ButtonTableInfo;


