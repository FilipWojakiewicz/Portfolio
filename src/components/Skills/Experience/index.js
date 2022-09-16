const Experience = ({ company, position, year, description }) => {
    
    return (
        <>
            <div className="exp">
                <h2>{company}</h2>
                <h3>{position}</h3>
                <p>{year}</p>
                <p>{description}</p>
            </div>
        </>
    )
};

export default Experience