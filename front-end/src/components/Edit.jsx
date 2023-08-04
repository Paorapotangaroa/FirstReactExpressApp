import React, { useState } from 'react'
import DeleteConfirm from './DeleteConfrim';

export default function Edit(props) {
    const [deletePageShowing, setDeletePageShowing] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // Convert formData to a plain object
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Make the fetch request with JSON data and the correct Content-Type header
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObject),
        };

        let results = await fetch('http://127.0.0.1:3333/edit/' + props.entertainer.EntertainerID, requestOptions);
        console.log(results)
        props.onSubmit();
    }

    return (
        <form method="put" onSubmit={handleSubmit}>
            <label htmlFor="EntStageName">Stage Name:</label>
            <input name="EntStageName" className={"form-control"} autoFocus defaultValue={props.entertainer.EntStageName} />
            <br />

            <label htmlFor="EntSsn">Social Security Number:</label>
            <input name="EntSsn" className={"form-control"} defaultValue={props.entertainer.EntSSN} />
            <br />

            <label htmlFor="EntStreetAddress">Street Address:</label>
            <input name="EntStreetAddress" className={"form-control"} defaultValue={props.entertainer.EntStreetAddress} />
            <br />

            <label htmlFor="EntCity">City:</label>
            <input name="EntCity" className={"form-control"} defaultValue={props.entertainer.EntCity} />
            <br />

            <label htmlFor="EntState">State:</label>
            <input name="EntState" className={"form-control"} defaultValue={props.entertainer.EntState} />
            <br />

            <label htmlFor="EntZipCode">Zip Code:</label>
            <input name="EntZipCode" className={"form-control"} defaultValue={props.entertainer.EntZipCode} />
            <br />

            <label htmlFor="EntPhoneNumber">Phone Number:</label>
            <input name="EntPhoneNumber" className={"form-control"} defaultValue={props.entertainer.EntPhoneNumber} />
            <br />

            <label htmlFor="EntWebPage">Web Page:</label>
            <input name="EntWebPage" className={"form-control"} defaultValue={props.entertainer.EntWebPage} />
            <br />

            <label htmlFor="EntEmailAddress">Email Address:</label>
            <input name="EntEmailAddress" className={"form-control"} defaultValue={props.entertainer.EntEmailAddress} />
            <br />

            <label htmlFor="DateEntered">Date Entered:</label>
            <input
                type="date"
                name="DateEntered"
                className={"form-control"}
                defaultValue={new Date(props.entertainer.DateEntered).toISOString().substr(0, 10)}
            />

            <br />

            <div className={"text-center"}>
                <div>
                    <input type="submit" value="Save" className={"btn btn-primary"} />
                    <button type="button" className={"btn btn-secondary"} onClick={() => props.cancel(props.entertainer)}>Cancel</button>
                    <button type="button" className={'btn btn-danger'} onClick={() => { setDeletePageShowing(true) }}>Delete</button>
                </div>
                {deletePageShowing && <DeleteConfirm entertainer={props.entertainer} cancel={setDeletePageShowing} onSubmit={props.onSubmit} />}
            </div>
        </form>

    )
}
