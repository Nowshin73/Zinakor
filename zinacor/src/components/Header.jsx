const Header = () => {
  return (
    <div className="header">
      <div className="header-video">
        <video
          className="h-vdo"
          src="https://delightful-manatee-8e9d66.netlify.app/assets/homepage-c8692cdf.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div data-aos="fade-up" className="header-div">
        <span>
          Leader in manufacturing zinc and zinc-aluminium wire
        </span>
      </div>
    </div>
  );
};

export default Header;
