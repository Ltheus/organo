import bannerImg from "/images/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner">
      <img src={bannerImg} alt="Banner do Organo" />
    </header>
  );
};

export default Banner;
