import { Fragment, useEffect } from "react";

const Navigation = () => {
    useEffect(() => {
        new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 42.982, lng: -81.252 },
            zoom: 8,
        });
    }, []);
    return (
        <Fragment>
            <section id="nevigation" className="naviOuter">
                <div className="container naviInner">
                    <div className="col-sm-12 col-md-3">
                        <p className="customNeviTitle">FEATURES</p>
                        <p className="customNeviLink">Event organizer tools</p>
                        <p className="customNeviLink">Timer tools</p>
                        <p className="customNeviLink">Charity co-ordinator tools</p>
                        <p className="customNeviLink">Participant experience</p>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <p className="customNeviTitle">TOOLS</p>
                        <p className="customNeviLink">Dashboard maker</p>
                        <p className="customNeviLink">Data & analytics</p>
                        <p className="customNeviLink">Email marketing tool</p>
                        <p className="customNeviLink">Social promotion tool</p>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <p className="customNeviTitle">CONTACT</p>
                        <p><i className="fa fa-phone" aria-hidden="true"></i> 1-888-555-5555</p>
                        <p><i className="fa fa-envelope" aria-hidden="true"></i> example@example.com</p>
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i> 123 Fake Street, London, ON</p>
                        <p>A1B 2C3</p>
                    </div>
                    <div id="map" className="col-sm-12 col-md-3">
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Navigation;
