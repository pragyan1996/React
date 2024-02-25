import React from 'react';
import ReactDOM from 'react-dom';
import SingleComponent from './SingleComponent';
import UserCard from './UserCard';

const App = function () {
    return (
        <div className='ui comments'>
            <UserCard >
                <SingleComponent name='Alex' date='Today 5:00PM' text='its amazing' />
            </UserCard>
            <UserCard >
                <SingleComponent name='Jack' date='Today 6:00PM' text='its raining here' />
            </UserCard>
            <UserCard >
                <SingleComponent name='Sarah' date='Today 7:00PM' text='its sunny in Delhi' />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)