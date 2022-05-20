import React, {useEffect, useState} from 'react';

const Status = ({ status, updateUserStatusThunk }) => {
    const [editInput, setEditInput] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const spanHandler = e => {
        setEditInput(true);
    }

    const inputHandler = () => {
        setEditInput(false);
        updateUserStatusThunk(localStatus);
    }

    const localStatusHandler = e => {
        setLocalStatus(e.target.value);
    }

    return (
        <>
            {!editInput && <div>
                <span onDoubleClick={spanHandler}><i><b>Edit status:</b></i> {status  || 'insert your status...'}</span>
            </div>}
            {editInput && <div><input
                autoFocus
                onBlur={inputHandler}
                type="text"
                value={localStatus}
                onChange={localStatusHandler}
            /></div>}
        </>
    );
};

export default Status;
