import PhotoCard from "./component/photoCard";
import bus from "./bus.jpg";
import "./App.css";
import BannerCard from "./component/banner";
import { FaMedium, FaInstagram } from "react-icons/fa6";
import { useRef } from "react";

export default function Page() {
  const images = require.context("./images", true);
  const imageList = images.keys().map((image) => images(image));

  const postCardSection = useRef(null);
  const toPostCards = () => {
    window.scrollTo({
      top: postCardSection.current.offsetTop - 50,
      behavior: "smooth",
    });
  };
  return (
    <div className="Tbody">
      <div className="content">
        <div className="banner" onClick={toPostCards}>
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              height: "200px",
              justifyContent: "space-evenly",
              marginLeft: "20px",
            }}
          >
            <div>
              <p className="postcards">PostCards.</p>
            </div>
            <div className="links">
              <a href="https://medium.com/@marcel07">
                <FaMedium className="link" />
              </a>

              <a href="https://www.instagram.com/ibidapo__/">
                <FaInstagram className="link" />
              </a>
            </div>
          </div>
          <BannerCard imgUrl={bus} />
        </div>

        <div className="photoGrid" ref={postCardSection}>
          {imageList.map((image, index) => (
            <PhotoCard imgUrl={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
