import React, { Fragment } from "react";

import PropTypes from "prop-types";

import "./contact10.css";

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">
                    Answers to the visuals of the venn diagram
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text20">Japan</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>

            {/* <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text21">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            {/* <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location3ImageAlt}
              src={props.location3ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location3 ?? (
                <Fragment>
                  <span className="contact10-text20">Japan</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location3Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>

            {/* <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
              </a>
            </div> */}
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location4ImageAlt}
              src={props.location4ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location4 ?? (
                <Fragment>
                  <span className="contact10-text21">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location4Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            {/* <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location5ImageAlt}
              src={props.location5ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location5 ?? (
                <Fragment>
                  <span className="contact10-text20">Japan</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location5Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
{/* 
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location6ImageAlt}
              src={props.location6ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location6 ?? (
                <Fragment>
                  <span className="contact10-text21">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location6Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            {/* <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location7ImageAlt}
              src={props.location7ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location7 ?? (
                <Fragment>
                  <span className="contact10-text20">Japan</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location7Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>

            {/* <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location8ImageAlt}
              src={props.location8ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location8 ?? (
                <Fragment>
                  <span className="contact10-text21">Cluj - Napoca</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location8Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
            {/* <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

Contact10.defaultProps = {
  content1: undefined,
  location2ImageSrc: "http://www.cwladis.com/clip_image008.gif",
  location1ImageSrc: "http://www.cwladis.com/clip_image025.gif",
  location3ImageSrc:"http://www.cwladis.com/math100/venndiagramAyellowBblue.gif",
  location3ImageAlt:"image3Alt",
  location4ImageSrc:"http://www.cwladis.com/clip_image021.gif",
  location5ImageSrc: "http://www.cwladis.com/math100/venndiagramAintersectBred.gif",
  location6ImageSrc: "http://www.cwladis.com/clip_image020.gif",
  location7ImageSrc: "http://www.cwladis.com/clip_image016.gif",
  location8ImageSrc: "http://www.cwladis.com/clip_image024.gif",
  location5ImageAlt:"image5Alt",
  location5Description: undefined,
  location6ImageAlt:"image6Alt",
  location6Description: undefined,
  location7ImageAlt:"image7Alt",
  location7Description: undefined,
  location8ImageAlt:"image8Alt",
  location8Description: undefined,

  location4ImageAlt:"image4Alt",
  location1Description: undefined,
  location2ImageAlt: "image2Alt",
  heading1: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location3Description: undefined,
  location1ImageAlt: "image1Alt",
  location3ImageAlt: "image3Alt",
  location1: undefined,
  location2: undefined,
  location3: undefined,
  location4: undefined,
  location5: undefined,
  location6: undefined,
  location7: undefined,
  location8: undefined
};

Contact10.propTypes = {
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location3ImageSrc: PropTypes.string,
  location4ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location3Description: PropTypes.element,
  location4Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location3ImageAlt: PropTypes.string,
  location4ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location2: PropTypes.element,
  location3: PropTypes.element,
  location4: PropTypes.element
};

export default Contact10;
