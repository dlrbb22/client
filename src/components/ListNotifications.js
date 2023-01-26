import React, { Fragment, useEffect, useState } from "react";
import OpenNotification from "./OpenNotification";

const ListNotifications = () => {

    const [notifs, setNotifs] = useState([]);

    // Update Viewed Function

    const updateViewed = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/notifications/viewed/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" }
            });

            setNotifs(notifs.filter(notif => notif.notif_id !== id))
            getNotifications();
            console.log("Updated viewed successfully.");
        } catch (error) {
            console.error(error.message);
        }
    };

    // Modal Closed

    const getNotifications = async () => {
        try {
            const response = await fetch("http://localhost:5000/notifications");
            const jsonData = await response.json();

            setNotifs(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getNotifications();
    }, []);

    return (
        <Fragment>
            <div class="mt-4 p-5 bg-primary text-white rounded">
                <h1>Notifications</h1>
            </div>
            <ul class="list-group">
                {notifs.map(notif => (
                    <li class="list-group-item">
                        <a key={notif.notif_id} data-bs-toggle="modal" data-bs-target={`#id${notif.notif_id}`} onClick={() => updateViewed(notif.notif_id)}
                        >{notif.viewed ? <i class='far fa-circle'></i> : <i class='fas fa-circle'></i>} {notif.subject}</a>
                        <OpenNotification notif={notif} />
                    </li>
                    
                ))}
            </ul>
        </Fragment >
    );
};

export default ListNotifications;