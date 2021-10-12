import { Fragment } from "react";

const Banner = ({ executeScroll }) => {
    return (
        <Fragment>
            <section id="banner" className="imgSection">
                <section className="imgInnerSection">
                    <p className="customH1">
                        Make event management a breeze
                    </p>
                    <p className="customH3">
                        ACME Events Inc. makes making beautiful event landing pages a DIY adventure.
                    </p>
                    <button
                        className="btn pill-primary-large"
                        onClick={() => {
                            console.log('test');
                            executeScroll();
                        }}
                    >Book a demo
                    </button>
                </section>
            </section>
        </Fragment>
    );
}

export default Banner;
