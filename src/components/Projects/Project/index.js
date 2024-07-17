const Project = ({ name, tools }) => {
    return (
        <>
            <div className='card-container' >
                <div className='project-card' data-tilt data-tilt-scale="1.1" data-tilt-speed="1000">
                    <div className='project-content'>
                        {/* <h2> {name} </h2> */}
                        <h3> {name} </h3>
                        <p> {tools} </p>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com"> See more </a>
                    </div>
                </div>
            </div>   
        </>
    )
};

export default Project