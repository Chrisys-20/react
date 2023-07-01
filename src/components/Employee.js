

function Employee(props) {
    return (
        <>
            <h3>Here is an Employee {props.name}!</h3>
            {props.role? <p>{props.role}</p>:<p>You don't have role</p>}
        </>
    );
}

export default Employee;
