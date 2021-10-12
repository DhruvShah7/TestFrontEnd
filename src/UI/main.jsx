import { Fragment, useRef } from "react";
import Header from "./header";
import Banner from "./banner";
import Features from "./features";
import Demo from "./demo";
import Navigation from "./nevigation";
import Footer from "./footer";


const MainPage = () => {
    const demoRef = useRef(null);
    const executeScroll = () => demoRef.current.scrollIntoView()

    return (
        <Fragment>
            <Header />
            <Banner executeScroll={executeScroll} />
            <Features />
            <Demo refToDemo={demoRef} />
            <Navigation />
            <Footer />
        </Fragment>
    );
}

export default MainPage;
