import { SunspotLoader } from "react-awesome-loaders";

const Loader = () => {
    return (
        <SunspotLoader
            gradientColors={["#a3a3a3", "#ffd700"]}
            shadowColor={"#ffd700"}
            desktopSize={"128px"}
            mobileSize={"100px"}
            className="loader-active"
      />
    )
}

export default Loader