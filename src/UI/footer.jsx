import { Fragment } from "react";

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <Fragment>
            <section id="footer" className="footerOuter">
                <div className="container footerInner">
                    <div
                        className="col-sm-12 col-md-6"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        © Copyright Acme Inc. [{year}]
                    </div>
                    <div
                        className="col-sm-12 col-md-6"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>&nbsp;
                        <i className="fa fa-twitter-square fa-2x" aria-hidden="true"> </i>&nbsp;
                        <i className="fa fa-instagram fa-2x" aria-hidden="true"> </i>&nbsp;
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Footer;
