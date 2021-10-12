import { Fragment } from "react";
import lamps from '../images/heartLamps.png';

const Features = () => {
    return (
        <Fragment>
            <section className="outerSec3">
                <section id="sec3" className="sec3Info">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <img
                                    src={lamps}
                                    alt=""
                                    width="380px"
                                    height="288px"
                                />
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <p className="customH2">
                                    Make your ticket holders happy
                                </p>
                                <p className="customNormal">
                                    A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This is
                                    probably the greatest thing that's ever happened in my life. These things happen automatically. All you have to do is
                                    just let them happen.
                                    <br />
                                    <br />
                                    Just let go - and fall like a little waterfall. Nothing's gonna make your husband or wife madder than coming home and
                                    having a snow-covered dinner. Just pretend you are a whisper floating across a mountain. Zip. That easy.
                                </p>
                                <p>
                                    <a href="#">View full feature list</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    );
}

export default Features;
