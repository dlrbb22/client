import React, { Fragment } from "react";

const OpenNotification = ({ notif }) => {

    // Delete Function

    const deleteNotif = async (id) => {
        try {
            const deleteNotif = await fetch(`http://localhost:5000/notifications/${id}`, {
                method: "DELETE"
            });
            
            window.location = "/"
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <div class="modal" id={`id${notif.notif_id}`}>
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title">{notif.subject}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body left-align">
                            <p class="text-start">{notif.description}</p>
                        </div>


                        <div class="modal-footer">
                            <button
                                className="btn btn-warning"
                                onClick={() => deleteNotif(notif.notif_id)}>
                                Delete
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default OpenNotification;