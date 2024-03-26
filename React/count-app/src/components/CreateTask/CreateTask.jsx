import { useState } from 'react';
const CreateTask = ({ getTask }) => {
    let [inputText, setInputText] = useState('');
    const setInputData = (event) => {
        console.log(inputText);
        setInputText(event.target.value);

    }
    const addTask = () => {
        getTask(inputText);
        setInputText('');
    }
    return (
        <>
            <input
                type="text"
                value={inputText}
                onChange={setInputData}
            />
            <button onClick={addTask}>Create Task</button>
        </>
    )
}

export default CreateTask;