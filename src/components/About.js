import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {

    return(
        <div>
            <h1>About</h1>
            <h2>This is the about page</h2>
            <User name={"siddhi uttekar"}/>
            <UserClass name={"siddhi"}/>
        </div>
    );

};

export default About;