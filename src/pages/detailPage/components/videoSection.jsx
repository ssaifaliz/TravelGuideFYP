import style from "../detailPage.module.scss";
const VideoSection = () => (
  <div id="content" className="columns-12 site-content" role="main">
    <div className="image-holder overlay-holder page-banner position-relative">
      <div className="text-center">
        <div className="marginBottomMinus5">
          <video
            autoplay="autoplay"
            loop="loop"
            muted="muted"
            className="w-100"
            id="loopedVideo"
          >
            <source src="https://www.toursbylocals.com/video/London_Short_1202x480.m4v" />
            <p>Sorry, your browser does not support the HTML 5 video tag.</p>
          </video>
        </div>
      </div>
      {/* <div className="overlay-content marginBottom5"> */}
      <div className={style["overlay-content"]}>
        <h1>London Tours</h1>
        <p>
          Adventure through lively London with a personal guide by your side.
        </p>
      </div>
    </div>
  </div>
);

export default VideoSection;
