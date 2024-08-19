import {useState } from 'react';

const User = ({name}) => {
    const [count] = useState(0);

    return <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @siddhi02</h4>

    </div>
}

export default User;