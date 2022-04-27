import { Player } from "@lottiefiles/react-lottie-player";
import Typical from "react-typical";

import Cube from "../asset/loading/cube.json";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-text">
        <Typical
          loop={1}
          wrapper="p"
          steps={[
            "FLAVIA Y. OUYANG",
            500,
            "PORTFOLIO ©2022",
            500,
            "Loading...",
            500,
          ]}
        />
      </div>
      <Player
        autoplay={true}
        loop={true}
        src={Cube}
        style={{ height: "auto", width: "50vw" }}
      ></Player>
    </div>
  );
};

export default Loading;
