import './index.scss'

const PopupText = ({ letterClass, strArray, idx}) => {
    
    return (
        <span>
            {
               strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${idx + i}`}>
                        {char}
                    </span>   
               )) 
            }
        </span>
    )
};

export default PopupText