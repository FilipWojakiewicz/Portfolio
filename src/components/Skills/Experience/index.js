const Experience = ({ company, position, year, description }) => {
    
    return (
        <>
            <div className='exp-card' data-tilt data-tilt-max="10" data-tilt-speed="1000" data-tilt-perspective="1500">
                <div className='exp-content'>
                    <h2>
                        Pixel Storm
                    </h2>
                    <h3> 2021 </h3>
                    <p> Opis </p>
                </div>
            </div> 
        </>
    )
};

export default Experience