const Project = ({ name, year, tools, description }) => {
    return (
        <>
                <div className="project-hover">
                    <div className="project" >
                        <h2>{name}</h2>
                        <h3>{year}</h3>
                        <p>{tools}</p>
                        <div className="project-overlay">
                            <h2>Description</h2>
                            <h3>{description}</h3>
                        </div>
                    </div>
                    
                </div>
        </>
    )
};

export default Project