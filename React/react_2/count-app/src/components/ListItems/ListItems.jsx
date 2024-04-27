const ListItems = ({ taskList }) => {
    console.log(taskList);
    let tasks = taskList.map((ele) => {
        return <li key={ele.id}>{ele.task}</li>
    })
    return (
        <>
            <ul>{tasks}</ul>
        </>
    )
};

export default ListItems;