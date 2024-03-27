function Students(props){

    return(
        <div>
            <h1>name: {props.name}</h1>
            <h1>lastname: {props.lastname}</h1>
            <h1>age: {props.age}</h1>
            <h1>Students: {props.Students ? "Yes":"No"}</h1>
            <hr />
        </div>
    )

}




export default Students