import { SunspotLoader } from "react-awesome-loaders";
import './index.scss'

const Loader = () => {
    return (
        <SunspotLoader
            gradientColors={["#93ffbc", "#03d3fc"]}
            shadowColor={"#93ffbc"}
            desktopSize={"128px"}
            mobileSize={"100px"}
            className="loader-active"
      />
    )
}

export default Loader