import React from "react";

const SingleComponent = (props) => {
    console.log(props);
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='profile pic' />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className='date'>
                        {props.date}
                    </span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>

    )
}

export default SingleComponent;