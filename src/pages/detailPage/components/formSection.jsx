import style from "../detailPage.module.scss";
const FormSection = () => (
  <div className={style["lp-search-panel"]}>
    <div className="columns-12 search-column-lp">
      <h3>Find your perfect London tour</h3>
      <br />
      <p className="fontWeightNormal">
        Local Guides offer 423 unique and customizable tours in London. When are
        you visiting?
      </p>
      <form
        name="primarySearchForm"
        method="post"
        className={`application-form ${style["ul-form"]}`}
        action="/cgi-bin/WebObjects/ToursByLocals.woa/wa/searchLandingPageTourDates"
      >
        <div
          style={{ marginLeft: "10px" }}
          className="columns-12 search-column"
        >
          <div className="divTableNotSpecifyWidth d-table">
            <div className="div-table-row d-table-row">
              <div className="div-table-cell d-table-cell">
                <label>From</label>
              </div>
              <div className="div-table-cell d-table-cell">
                <label>To</label>
              </div>
            </div>
            <div className="div-table-row d-table-row">
              <div className="div-table-cell d-table-cell">
                <input
                  readonly=""
                  placeholder="Select..."
                  id="datepickerStart"
                  style={{ backgroundColor: "#FFFFFF", width: "90%" }}
                  type="text"
                  name="59.1.1.13.3.1"
                />
              </div>
              <div className="div-table-cell d-table-cell">
                <input
                  readonly=""
                  placeholder="Select..."
                  id="datepickerEnd"
                  style={{ backgroundColor: "#FFFFFF", width: "90%" }}
                  type="text"
                  name="59.1.1.13.3.3"
                />
              </div>
              {/* <div className="displayNone">
            <input
              readonly=""
              id="area"
              style={{ display: "none" }}
              type="text"
              value="21"
              name="area"
            />
          </div> */}

              <div className="text-center text-align-center">
                <input
                  type="button"
                  id="submitSearchTourDates"
                  value="SEARCH TOURS"
                  //   className={`${style["button"]} "orange"`}
                  className={`${style["orange"]}`}
                />
              </div>
            </div>
          </div>
        </div>

        <input type="hidden" name="wosid" value="xudKaKEaawbmjDrScez0V0" />
      </form>
    </div>
  </div>
);

export default FormSection;
