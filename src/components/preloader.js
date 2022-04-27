import Typical from "react-typical";

import Cube from "../asset/cube.gif";

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
      <img src={Cube} alt="animated cube" />
    </div>
  );
};

export default Loading;
