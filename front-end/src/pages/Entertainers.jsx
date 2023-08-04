import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'
import Add from "../components/Add";
import Edit from "../components/Edit"

export default function Entertainers() {
    const [entertainers, setEntertainers] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [addPageShowing, setAddPageShowing] = useState(false);
    const [selectedEntertainer, setSelectedEntertainer] = useState(null);

    let onAddSubmit = (event) => {
        setLoaded(false);
        setAddPageShowing(false);
    }

    let onEditSubmit = (event) => {
        setLoaded(false);
        setSelectedEntertainer(null);
    }


    const handleEditClick = (entertainer) => {
        if (selectedEntertainer == null || selectedEntertainer.EntertainerID !== entertainer.EntertainerID) {
            setSelectedEntertainer(entertainer);
        } else {
            setSelectedEntertainer(null);
        }
    };
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
        };

        fetch("http://127.0.0.1:3333/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setEntertainers(result)
                setLoaded(true);
            })
            .catch(error => console.log('error', error));
    }, [loaded])


    if (loaded) {
        return (
            <>
                <PageHeader pageTitle="Entertainers" pageSubheader="Here is a list of amazing entertainers" />
                <div className={"container px-4 px-lg-5"}>
                    <div className={"row gx-4 gx-lg-5 justify-content-center"}>
                        <div className={"col-md-10 col-lg-8 col-xl-7"}>
                            <div>
                                <table autoFocus className={"table table-striped table-responsive table-hover"}>
                                    <thead>
                                        <tr>
                                            <th>
                                                Stage Name
                                            </th>
                                            <th>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {entertainers.map((m) => (
                                            <React.Fragment key={m.EntertainerID}>
                                                <tr>
                                                    <td>{m.EntStageName}</td>
                                                    <td>
                                                        <div className={"float-right"}>
                                                            <button onClick={() => handleEditClick(m)} className="btn btn-secondary">
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Conditionally render the Edit component inside the selected row */}
                                                {selectedEntertainer && selectedEntertainer.EntertainerID === m.EntertainerID && (
                                                    <tr>
                                                        <td colSpan="2">
                                                            <Edit entertainer={selectedEntertainer} onSubmit={onEditSubmit} cancel={handleEditClick} />
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div >

                            <div className={"text-center"}>
                                <button className={"btn btn-primary"} onClick={() => setAddPageShowing(current => !current)}>Add Entertainer</button>
                            </div>

                            {addPageShowing && <Add onSubmit={onAddSubmit} cancel={setAddPageShowing} />}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return <>Loading...</>
    }
}
