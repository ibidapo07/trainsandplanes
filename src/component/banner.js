import "./style.css";
import AnimatedText from "./AnimatedText";
export default function BannerCard({ imgUrl }) {
  return (
    <div className="container">
      <p id="test">Welcome around the world</p>
      <img
        className="bannerimage"
        src={imgUrl}
        alt="Photo by Nubia Navarro (nubikini): https://www.pexels.com/photo/selective-focus-photography-of-yellow-school-bus-die-cast-386009/"
      />
    </div>
  );
}
