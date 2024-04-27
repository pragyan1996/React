import { useState } from 'react';
const ControlledComponent = () => {
    const [inputText, setInputText] = useState('');
    const handleChange = (event) => {
        console.log(event.target.value);
        setInputText(event.target.value)
    }
    return (
        <>
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
            />
            <p>Input value: {inputText}</p>
        </>
    )
}

export default ControlledComponent;