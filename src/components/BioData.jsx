const BioData = (props) => {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.deparment}</p>
        </>
    )
}

export default BioData;