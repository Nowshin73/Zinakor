const Content3 = () => {
  return (
    <div className="content3">
      <div className="c3-container">
        {[
          "Protection for all types of projects",
          "The best advertising",
          "Perfection in the manufacturing process",
        ].map((text, i) => (
          <div key={i} data-aos="flip-left" className="item">
            <span>{`0${i + 1}`}</span>
            <span>{text}</span>
            <button className="btn-primary">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content3;
