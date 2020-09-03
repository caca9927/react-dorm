import React, { useEffect } from 'react';

export default props => {
    useEffect(() => {
        (()=>{
            localStorage.removeItem("room-token");
            props.history.push('/login')
        })()
    }, []);
    return (
        <React.Fragment></React.Fragment>
    )
}