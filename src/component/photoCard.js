import "./style.css";
import { useState } from "react";
export default function PhotoCard({
  imgUrl,
  info = { Name: "Default", PLocation: "Earth", PDate: "September 2024" },
}) {
  const [mouseOn, setmouseOn] = useState(false);

  const toggle = () => {
    setmouseOn(!mouseOn);
  };

  return (
    <div className="photos" onClick={toggle}>
      {mouseOn ? (
        <div className="photoinfo">
          <p>{info.Name}</p>
          <p>{info.PLocation}</p>
          <p>{info.PDate}</p>
        </div>
      ) : (
        <img className="image" src={imgUrl} alt="vacation" loading="lazy" />
      )}
    </div>
  );
}
