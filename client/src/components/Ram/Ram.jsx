const Ram = ({ data }) => {
    const { active, available, free } = data;
    return (
        <div className="battery">
            <h1>Ram info:</h1>
            <p>Active ram: {active}</p>
            <p>Available ram: {available}</p>
            <p>Free ram: {free}</p>
        </div>
    )
    }
    
    export default Ram;