import React from 'react'


const DeleteConfirm = (props) => {
    async function handleDelete() {
        console.log(props.entertainer.EntertainerID)
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        };
        let results = await fetch("http://127.0.0.1:3333/delete/" + props.entertainer.EntertainerID, requestOptions);
        console.log(results);
        props.onSubmit();
    }
    return (
        <form>
            Are you sure you want to Delete {props.entertainer.EntStageName}? This cannot be undone<br />
            <button type="button" className='btn btn-danger' onClick={() => handleDelete()}>Delete</button> <button type="button" className='btn btn-primary' onClick={() => props.cancel(false)} >Cancel</button>
        </form>
    )
}

export default DeleteConfirm
