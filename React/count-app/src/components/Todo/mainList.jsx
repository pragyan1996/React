import CreateTask from "../CreateTask/CreateTask";
import ListItems from "../ListItems/ListItems";
import { useState } from 'react';

const MainList = () => {
    const [tasks, setTasks] = useState([]);
    const getTask = (currentTask) => {
        const newTasks = [...tasks];
        newTasks.push({
            id: Date.now(),
            task: currentTask,
        });
        setTasks(newTasks);
    }
    return (
        <>
            <CreateTask getTask={getTask} />
            <ListItems taskList={tasks} />

        </>
    )
}

export default MainList;