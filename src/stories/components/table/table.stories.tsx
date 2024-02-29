import { Table } from "@components/Table/Table";
import type { ControlType, Story } from "@ladle/react";
import LungsImg from "@components/Table//TableAssets/alert type.png";
import UpArrow from "@components/Table/TableAssets/arrow.png";
import greyClock from "@components/Table/TableAssets/timer icon.png";
import redClock from "@components/Table/TableAssets/timer icon2.png";
import blackClock from "@components/Table/TableAssets/timer icon 3.png";
import yellowClock from "@components/Table/TableAssets/timer icon 4.png";
import phone from "@components/Table/TableAssets/phone.png";
import voicemail from "@components/Table/TableAssets/voicemail.png";
import { useState } from "react";
import "@index.scss";

export const table: Story<{
    TableData: {
        notification_unread: boolean
        notification_type_icon: string
        notification_id: string
        patient_name: string
        notification_value: string
        notification_unit: string
        notification_value_icon: string
        notification_Info: string
        notification_time: string
        tracked_time: string
        last_call_date: string
        tracked_time_icon: string
        last_call_icons : string
    }[]
   

}> = ({ TableData }) => {

    const transformedData = TableData.map(item => {
        // Split tracked_time to get hours, minutes, and seconds
        const [hours, minutes , seconds] = item.tracked_time.split(':').map(part => parseInt(part));

        // Convert hours and minutes to total minutes
        const totalMinutes = hours * 60 + minutes;

        // Set tracked_time_icon based on total minutes
        let trackedTimeIcon = null;
        if (totalMinutes <= 19) {
            trackedTimeIcon = greyClock;
        } else if (totalMinutes >= 20 && totalMinutes <= 39) {
            trackedTimeIcon = blackClock;
        } else if (totalMinutes >= 40 && totalMinutes <= 59) {
            trackedTimeIcon = yellowClock;
        } else {
            trackedTimeIcon = redClock;
        }
        
        const voiceMailIcon = totalMinutes > 0 ? phone : voicemail;

        // Return the modified object
        return {
            ...item,
            tracked_time_icon: trackedTimeIcon,
            last_call_icons: voiceMailIcon
        };
    });

    return (
        <>
            <Table
                TableData={transformedData}
            />
        </>
    );
}


table.args = {

    TableData: [{
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3160",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:00:00",
        last_call_date: "1 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: false,
        notification_type_icon: LungsImg,
        notification_id: "3162",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:21:00",
        last_call_date: "21 feb",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3168",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "01:21:00",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3169",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:15:00",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3164",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "02:21:00",
        last_call_date: "31 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3163",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:56:00",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: false,
        notification_type_icon: LungsImg,
        notification_id: "3176",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:00:00",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3134",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:40:08",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3156",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "00:33:45",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    },
    { 
        notification_unread: true,
        notification_type_icon: LungsImg,
        notification_id: "3128",
        patient_name: "Anthony Adams",
        notification_value: "22%",
        notification_unit: "brmp",
        notification_value_icon: UpArrow,
        notification_Info: "Respiratory Rate Episode started: Daily respiratory rate 10% above baseline",
        notification_time: "a minute ago",
        tracked_time: "01:56:00",
        last_call_date: "14 jan",
        tracked_time_icon: greyClock,
        last_call_icons : phone
    }]
}


// Description - Display
// Within the last few seconds - just now
// Within the last minute - a minute ago
// Within 59 minutes - X minutes ago
// 60 minutes ago - 1 hour ago
// 1.49 hours ago - 1 hour ago
// 1.51 hours ago - 2 hours ago
// X hours ago - X hours ago
// 1 day ago w / time - yesterday at X:XX PM
// 2 to 7 days ago -X days ago
// 7 days ago - 1 week ago
// > 7 days ago - Month D
// > last year - Month D, YYYY