import React from 'react';


const Add = (props) => {

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
            method: form.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObject),
        };

        await fetch('http://127.0.0.1:3333/add', requestOptions);
        props.onSubmit();
    }




    return (
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="EntStageName">Stage Name:</label>
            <input name="EntStageName" className={"form-control"} autoFocus />
            <br />

            <label htmlFor="EntSsn">Social Security Number:</label>
            <input name="EntSsn" className={"form-control"} />
            <br />

            <label htmlFor="EntStreetAddress">Street Address:</label>
            <input name="EntStreetAddress" className={"form-control"} />
            <br />

            <label htmlFor="EntCity">City:</label>
            <input name="EntCity" className={"form-control"} />
            <br />

            <label htmlFor="EntState">State:</label>
            <input name="EntState" className={"form-control"} />
            <br />

            <label htmlFor="EntZipCode">Zip Code:</label>
            <input name="EntZipCode" className={"form-control"} />
            <br />

            <label htmlFor="EntPhoneNumber">Phone Number:</label>
            <input name="EntPhoneNumber" className={"form-control"} />
            <br />

            <label htmlFor="EntWebPage">Web Page:</label>
            <input name="EntWebPage" className={"form-control"} />
            <br />

            <label htmlFor="EntEmailAddress">Email Address:</label>
            <input name="EntEmailAddress" className={"form-control"} />
            <br />

            <label htmlFor="DateEntered">Date Entered:</label>
            <input name="DateEntered" className={"form-control"} type='date' />
            <br />

            <div className={"text-center"}>
                <input type="submit" value="Save" className={"btn btn-primary"} />
                <button className={"btn btn-secondary"} onClick={() => { props.cancel(false) }}>Cancel</button>
            </div>
        </form>
    )
}

export default Add
