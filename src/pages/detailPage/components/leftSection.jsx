import style from "../detailPage.module.scss";
const LeftSection = () => (
  <div className={style["leftSection"]}>
    <div className="closingAsideStyle" align="center">
      <div className="page-title-landing">
        <h3 className="ul-title">Local Guides In London</h3>
        <div className="guide-count">
          <p>
            <i>There are 52 local Guides</i>
          </p>
        </div>
      </div>
      <ul className={`block-grid-3 team-grid-lp ${style["sideUl"]}`}>
        <li>
          <div className={`image-holder ${style["avatar-holder-small"]}`}>
            <img
              width="175"
              height="175"
              alt="Private tour guide Peter"
              className="lazy d-block"
              src="https://www.toursbylocals.com/images/guides/26/26518/2017322114406286.jpg"
              // style="display: block;"
            />
          </div>
        </li>

        <li>
          <div className={`image-holder ${style["avatar-holder-small"]}`}>
            <img
              width="175"
              height="175"
              alt="Private tour guide Patricia"
              className="lazy d-block"
              src="https://www.toursbylocals.com/images/guides/26/26378/202034142851667.jpg"
              // style="display: block;"
            />
          </div>
        </li>

        <li>
          <div className={`image-holder ${style["avatar-holder-small"]}`}>
            <img
              width="175"
              height="175"
              alt="Private tour guide Graham"
              className="lazy d-block"
              src="https://www.toursbylocals.com/images/guides/16/16953/2020350084259738.jpg"
              // style="display: block;"
            />
          </div>
        </li>

        <li>
          <div className={`image-holder ${style["avatar-holder-small"]}`}>
            <img
              width="175"
              height="175"
              alt="Private tour guide Linda"
              className="lazy d-block"
              src="https://www.toursbylocals.com/images/guides/46/46068/202021082835846.jpg"
              // style="display: block;"
            />
          </div>
        </li>

        <li>
          <div className={`image-holder ${style["avatar-holder-small"]}`}>
            <img
              width="175"
              height="175"
              alt="Private tour guide William"
              className="lazy d-block"
              src="https://www.toursbylocals.com/images/guides/32/32479/2018331105032617.jpg"
              // style="display: block;"
            />
          </div>
        </li>

        <li>
          <div className={`image-holder ${style["avatar-holder-small"]}`}>
            <img
              width="175"
              height="175"
              alt="Private tour guide Lawrence"
              className="lazy d-block"
              src="https://www.toursbylocals.com/images/guides/32/32405/202015103430459.jpg"
              // style="display: block;"
            />
          </div>
        </li>
      </ul>
      <a
        // className="button orange"
        className={style["buttonOrange"]}
        href="https://www.toursbylocals.com/find_guide&amp;area=21"
      >
        Meet the Guides
      </a>
    </div>
    <br />
    <div className="d-flex align-items-center justify-content-center w-100">
      <h2 className={style["ul-title"]}>London Private Tours</h2>
    </div>
    <p className={style['bigTxt']}>
      Cockney accents, afternoon tea, Tower Bridge and Big Ben. Westminster
      Abbey? Check. Buckingham Palace? Check. But hang on a second - have you
      actually seen the REAL London? Take a London tour with a local guide and
      get up close and personal with this dazzling city.
      <br />
      <br />
      London truly has something for everyone, whether you're a culture hound, a
      history buff, a diehard shopper or urban adventurer. Let our local guides
      take you for morning tea at Columbia Road Flower Market, then shop for
      unique fashion pieces in Spital fields, where the narrow cobbled alleys of
      East London effortlessly evoke Victorian times. Walk through the fabled
      Inns of Court to the banks of the Thames, where your guide will take you
      for a pint with the after-work crowd. Each day is a new adventure in
      London.
      <br />
      <br />
      You can choose from the London tours offered by ToursByLocals, but feel
      free to suggest alternative places and activities that strike your
      interest. Your guide wants you to have the ultimate London experience.
    </p>
  </div>
);

export default LeftSection;
