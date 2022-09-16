const SingleSkill = ({ name, amount, delay}) => {
    
    return (
        <>
            <h2>{name}</h2>
            <div className="skill">
                <div className="bar" style={{maxWidth: amount + '%', animationDelay: delay + 's'}}/>
            </div>
        </>
    )
};

export default SingleSkill