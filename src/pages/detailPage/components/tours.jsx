import style from "../detailPage.module.scss";
const Tours = ({detail}) => (
  <div style={{ height: "600px" }}>
    <div id="City" className="">
      <div className={`text-center ${style["page-title-landing"]}`}>
        <h2>{detail?.name} City Tours</h2>
      </div>

      <ul className={`block-grid-3 ${style["unOrdered"]}`}>
        {[
          "https://www.toursbylocals.com/images/guides/3/3776/20172091742147.jpg",
          "https://www.toursbylocals.com/images/guides/25/25742/2017318090630849.jpg",
          "https://www.toursbylocals.com/images/guides/55/55389/20222641033306.jpg",
        ].map((each, index) => (
          <li key={index} className="marginBottom20">
            <div className="item tour-item">
              <div className={style["card-holder"]}>
                <div className={`${style["image-holder"]}`}>
                  {/* <div className="image-holder lazy-container"> */}
                  <a href="https://www.toursbylocals.com/London-revisited-private-tour">
                    <img
                      width="450"
                      height="600"
                      alt="London Re-visited"
                      className="lazy"
                      // src="https://www.toursbylocals.com/images/guides/3/3776/20172091742147.jpg"
                      src={each}
                      style={{
                        display: "inline",
                      }}
                    />
                  </a>
                </div>
                <div className={style["card-box"]} align="left">
                  <h3>
                    <a href="https://www.toursbylocals.com/London-revisited-private-tour">
                    {detail?.name} Re-visited
                    </a>
                  </h3>
                  <div className={style["separator"]} />
                  {/* Todo */}
                  {/* <div className="rating-holder">
                  <a
                    data-fancybox-type="iframe"
                    onmouseover="this.style.text-decoration=underline;"
                    onmouseout="this.style.text-decoration=none;"
                    className="toolTipster fancybox tooltipstered"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    href="https://www.toursbylocals.com/TBL/WebObjects/ToursByLocals.woa/wa/reviewsFancybox?tour=158876"
                  >
                    &nbsp;<i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>&nbsp;(15)
                  </a>
                </div> */}
                  <p>Private customised tour for the Frequent Traveller</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <a
        className={style["buttonGreen"]}
        style={{
          float: "right",
        }}
        href="https://www.toursbylocals.com/find_tour&amp;area=21&amp;category=2"
      >
        <b>MORE</b> {detail?.name} City Tours...
      </a>
      <div className="clearRight"></div>
    </div>
  </div>
);
export default Tours;
