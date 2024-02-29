import { TablePropsType } from "./type";
import { useState } from "react";
import ArrowImg1 from "@components/Table/TableAssets/sort arrows.png";
import ArrowImg2 from "@components/Table/TableAssets/sort arrows(1).png";

export function Table(props: TablePropsType): JSX.Element {

    const [sortOrder, setSortOrder] = useState("none");
    const [sortedData, setSortedData] = useState(props.TableData);

    const trackedTimeSort = () => {
        let newData;
        if (sortOrder === "none" || sortOrder === "desc") {
            newData = [...sortedData].sort((a, b) => {
                const timeA = convertTimeToMinutes(a.tracked_time);
                const timeB = convertTimeToMinutes(b.tracked_time);
                return timeA - timeB;
            });
            setSortOrder("asc");
        } else {
            newData = [...sortedData].sort((a, b) => {
                const timeA = convertTimeToMinutes(a.tracked_time);
                const timeB = convertTimeToMinutes(b.tracked_time);
                return timeB - timeA;
            });
            setSortOrder("desc");
        }
        setSortedData(newData);
    };

    const convertTimeToMinutes = (timeString: string) => {
        const [hours, minutes, seconds] = timeString.split(":").map(Number);
        return hours * 60 + minutes + seconds / 60;
    };

    const dataToRender = sortOrder === "none" ? props.TableData : sortedData;

    const lastCallSort = () => {
        let newData;
        if (sortOrder === "none" || sortOrder === "desc") {
            newData = [...sortedData].sort((a, b) => {
                return new Date(a.last_call_date).getTime() - new Date(b.last_call_date).getTime();
            });
            setSortOrder("asc");
        } else {
            newData = [...sortedData].sort((a, b) => {
                return new Date(b.last_call_date).getTime() - new Date(a.last_call_date).getTime();
            });
            setSortOrder("desc");
        }
        setSortedData(newData);
    };

    return (
        <div className="p-6">
            <div className="container mx-auto">
                <table className="min-w-full bg-white border border-gray-300  border-collapse">
                    <thead>
                        <tr className="my-custom-backgroundColor heading-fontColor font-sans text-sm leading-tight tracking-normal text-left">
                            <th className="py-3 px-4 border-b" >
                                <span>ID</span>
                            </th>
                            <th className="py-3 px-4 border-b" >
                                <span>PATIENT NAME</span>
                            </th>
                            <th className="py-3 px-4 border-b" >
                                <span>NOTIFICATION</span>
                            </th>
                            <th className="py-3 px-4 border-b" >
                                <span>NOTIFICATION TIME</span>
                                <img src={ArrowImg1} className="inline-block ml-2 cursor-pointer" alt="ArrowImg1" />
                            </th>
                            <th className="py-3 px-4 border-b" >
                                <span>TIME SPENT</span>
                                <img src={ArrowImg2} className="inline-block ml-2 cursor-pointer" alt="ArrowImg2" onClick={trackedTimeSort} />
                            </th>
                            <th className="py-3 px-4 border-b" >
                                <span>LAST CALL</span>
                                <img src={ArrowImg2} className="inline-block ml-2 cursor-pointer" alt="ArrowImg2" onClick={lastCallSort} />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="rows-fontColor">
                        {dataToRender.map(data => (
                            <tr className="relative font-sans font-normal leading-relaxed tracking-normal text-left" key={data.notification_id}>
                                <td className="py-4 px-4 border-b relative">{data.notification_id}
                                    {data.notification_unread ? <div className="absolute left-0 top-2 bottom-2 w-2 right-borderColor"></div> : null}
                                </td>
                                <td className="py-4 px-4 border-b">{data.patient_name}</td>
                                <td className="py-4 px-4 border-b relative onhover cursor-pointer" data-tooltip-target="tooltip-top" data-tooltip-placement="bottom">
                                    <img src={data.notification_type_icon} className="inline-block" alt="AlertType" />
                                    <img src={data.notification_value_icon} className="inline-block" alt="UpArrow" />
                                    <span className="font-sans text-xl font-semibold leading-tight inline-block">{data.notification_value}<span className="font-sans text-xs font-normal text-left">{data.notification_unit}</span></span>
                                    <div className="border hover-border my-custom-backgroundColor rows-fontColor p-1 z-10 absolute hidden show w-96 -translate-x-40">
                                        <p className="font-open-sans text-sm font-normal leading-5 ">{data.notification_Info}</p>
                                    </div>
                                </td>
                                <td className="py-4 px-4 border-b relative onhover cursor-pointer">{data.notification_time}
                                    <div className="border hover-border z-10 my-custom-backgroundColor rows-fontColor p-2 absolute show hidden -translate-x-16">
                                        <ul className="font-open-sans text-sm font-normal leading-5">
                                            <li className="pb-2">Jan 8, 9:32 AM PST: Episode start</li>
                                            <li>Jan 9, 3:14 PM PST: Notification sent</li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="py-4 px-4 border-b">
                                    <img src={data.tracked_time_icon} alt="clock" className="inline-block" />
                                    <span className="align-middle">{data.tracked_time}</span>
                                </td>
                                <td className="py-4 px-4 border-b">
                                    <img src={data.last_call_icons} alt="phone" className="inline-block w-5 h-5" />
                                    <span className="pl-2">{data.last_call_date}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
