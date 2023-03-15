import React, { useState } from 'react';
import '../../../App.css';
import logo from '../../../images/logo.png';
import blockChain from "../../../images/block-chain.png"
import dataScience from "../../../images/data-science.png";
import devops from "../../../images/dev-ops.png";
import programmableNetwork from "../../../images/programmable-network.png";
import cloudComputing from "../../../images/cloud-computing.png";
import iot from "../../../images/iot.png";
import expand from "../../../images/expand.png";
import diversity1 from "../../../images/diversity-1.jpg";
import diversity2 from "../../../images/diversity-2.jpg";
import diversity3 from "../../../images/diversity-3.jpg";
import diversity4 from "../../../images/diversity-4.jpg";
import diversity5 from "../../../images/diversity-5.jpg";
import diversity6 from "../../../images/diversity-6.jpg";
import diversity7 from "../../../images/diversity-7.jpg";
import diversity8 from "../../../images/diversity-8.jpg";
import diversity9 from "../../../images/diversity-9.jpg";
import diversity10 from "../../../images/diversity-10.jpg";
import diversity11 from "../../../images/diversity-11.jpg";
import SimpleSlider from '../../slickCarousel';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ImageSlider from '../../slick';
import images from '../../Carousel';

export default function Home() {
    const [searchtext, setSearchtext] = useState("");
    const [suggest, setSuggest] = useState([]);
    const [resfound, setResfound] = useState(true);
    const [searchData, setSearchData] = useState();
    const [location,  setLocation] = useState();
    // const getInitialState = () => {
    //     const value = "0";
    //     return value;
    // };
    const [experience, setExperience] = useState('0');
    const navigate = useNavigate();
    const handleChange = (e) => {
        let searchVal = e.target.value;
        let suggestion = [];
        const ProgLang = ["Javascript", "java", "Python", "ReactJs`", "NodeJs"];
        if (searchVal.length > 0) {
        suggestion = ProgLang.sort().filter((e) => {
            return e.toLowerCase().includes(searchVal.toLowerCase());
        });
        setResfound(suggestion.length !== 0 ? true : false);
        }
        setSuggest(suggestion);
        setSearchtext(searchVal);
    };

    const suggestedText = (value) => {
        console.log(value);
        setSearchtext(value);
        setSuggest([]);
    };

    const getSuggestions = () => {
        if (suggest.length === 0 && searchtext !== "" && !resfound) {
        return <p>Search Content Not Found</p>;
        }

        return (
        <div>
            {suggest.map((item, index) => {
            console.log(item);
            return (
                <div key={index}>
                <div onClick={() => suggestedText(item)}>{item}</div>
                {index !== suggest.length - 1 && <hr />}
                </div>
            );
            })}
        </div>
        );      
    };
    const handleExp =e =>{
        setExperience(e.target.value);
    }
    const handleLocation = e =>{
        setLocation(e.target.value);
    }

    const HandleSearch = (e) =>{

        navigate('/joblist', {state:{id:1,name:'sabaoon'}});
        this.props.history.push('/other-page', { id: 7, color: 'green' });
        // e.preventDefault();
        // setExperience();
        // //setSearchData(e.target.value);
        // console.log(searchtext);
        // console.log(experience);
        // setLocation();
        // console.log(location);
    }

    return (
        <div>
        <main className="layoutPage-container">
            <div className="home">
            <div className="home-carousel">
                <SimpleSlider/>

            </div>

            <div className="job-search container-fluid">
                <div className="row">
                <div className="job-search-tag col-xl-9 col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="rbt job-search-byskill">
                        <div>
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Search by skills"
                            value={searchtext}
                            onChange={handleChange}
                            aria-autocomplete="both"
                            aria-haspopup="listbox"
                            role="combobox"
                            aria-owns="search"
                            className="rbt-input-main form-control rbt-input"
                        />
                        {getSuggestions()}
                        </div>
                        {/* <div aria-label="menu-options" className="rbt-menu dropdown-menu show" id="search" role="listbox"
                         style={{position:"absolute", display:"block",maxHeight:"300px",overflow:"auto",willChange:"transform",width:"311.4px",top:"0px",left:"0px",transform:"translate3d(0px, 33px, 0px)"}}
                         ></div> */}
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <select className="form-control" value={experience} onChange={handleExp}>
                        <option value="">Select Experience</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <select value={location} onChange={handleLocation} className="form-control">
                        <option value>All locations</option>
                        <option value="BANGALORE">BANGALORE</option>
                        <option value="CHENNAI">CHENNAI</option>
                        <option value="PUNE">PUNE</option>
                        <option value="Dubai">Dubai</option>
                        <option value="USA">USA</option>
                    </select>
                    </div>
                    <a className="job-search-Icon" alt='' onClick={HandleSearch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31.5"
                        height="32.627"
                        viewBox="0 0 31.5 32.627"
                    >
                        <path
                        d="M31.021 29.718l-7.765-8.076a13.168 13.168 0 10-10.083 4.7 13.032 13.032 0 007.543-2.379l7.829 8.137a1.718 1.718 0 102.477-2.382zM13.173 3.436a9.737 9.737 0 11-9.737 9.737 9.748 9.748 0 019.737-9.737z"
                        fill="white"
                        ></path>
                    </svg>
                    </a>
                </div>
                <div className="job-search-recommend col-xl-3 col-lg-4 col-md-5 col-sm-12 col-12">
                    <p className="job-search-recommend-link">
                    <NavLink to="/job-recommend" id="redirect-rec" className="text-white">
                        Recommend me a job
                        <svg
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 508.1 508.1"
                        className="job-search-bulbIcon"
                        >
                        <g>
                            <g>
                            <g>
                                <path
                                d="M360.05,116c-30.7-29.3-71.1-44.2-113.5-42.2c-79.7,3.8-143.9,69.3-146,149.2c-1.3,49.1,21.2,96.2,60.2,126.1 c19.2,14.7,30.6,38.7,30.6,64.2v6.6c-10.4,2.8-18.2,12.3-18.2,23.6v3.6c0,13.6,11,24.6,24.6,24.6h4.2c-0.9,2.6-1.5,5.3-1.5,8.2 v3.6c0,13.6,11,24.6,24.6,24.6h58c13.6,0,24.6-11,24.6-24.6v-3.6c0-2.9-0.6-5.6-1.5-8.2h4.2c13.6,0,24.6-11,24.6-24.6v-3.6 c0-11.3-7.7-20.8-18.2-23.6v-6.6c0-25.3,12-49.3,32.9-66c36.9-29.3,58-73.1,58-120.1C407.65,184.8,390.75,145.3,360.05,116z M291.25,483.4c0,4.5-3.7,8.2-8.2,8.2h-58c-4.5,0-8.2-3.7-8.2-8.2v-3.6c0-4.5,3.7-8.2,8.2-8.2h58c4.6,0,8.2,3.7,8.2,8.2V483.4z M318.55,443.5v3.6c0,4.5-3.7,8.2-8.2,8.2h-27.3h-58h-27.3c-4.5,0-8.2-3.7-8.2-8.2v-3.6c0-4.5,3.7-8.2,8.2-8.2h112.6 C314.85,435.3,318.55,439,318.55,443.5z M227.65,309.9h-16.8c-6.8,0-12.3-5.5-12.3-12.3v-4.5c0-6.8,5.5-12.3,12.3-12.3h4.5 c6.8,0,12.3,5.5,12.3,12.3V309.9z M244.05,418.9v-92.7h20v92.7H244.05z M339.45,334.5c-24.8,19.7-39,48.4-39,78.8v5.6h-20v-92.7 h16.8c15.8,0,28.7-12.9,28.7-28.7V293c0-15.8-12.9-28.7-28.7-28.7h-4.5c-15.8,0-28.7,12.9-28.7,28.7v16.8h-20V293 c0-15.8-12.9-28.7-28.7-28.7h-4.5c-15.8,0-28.7,12.9-28.7,28.7v4.5c0,15.8,12.9,28.7,28.7,28.7h16.8v92.7h-20v-5.6 c0-30.6-13.9-59.4-37.1-77.2c-34.8-26.7-54.9-68.8-53.8-112.7c1.9-71.3,59.2-129.8,130.4-133.2c37.9-1.8,74,11.6,101.4,37.7 c27.4,26.2,42.5,61.4,42.5,99.3C391.25,269.2,372.35,308.3,339.45,334.5z M280.45,309.9v-16.8c0-6.8,5.5-12.3,12.3-12.3h4.5 c6.8,0,12.3,5.5,12.3,12.3v4.5c0,6.8-5.5,12.3-12.3,12.3H280.45z"
                                stroke="white"
                                strokeWidth="10"
                                ></path>
                                <rect x="245.85" width="16.4" height="45.4"></rect>
                                <rect
                                x="92.166"
                                y="59.313"
                                transform="matrix(0.7071 0.7071 -0.7071 0.7071 81.3821 -61.4484)"
                                width="45.4"
                                height="16.4"
                                ></rect>
                                <rect
                                x="385.048"
                                y="44.861"
                                transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 623.543 393.4012)"
                                width="16.4"
                                height="45.4"
                                ></rect>
                                <rect
                                x="20.05"
                                y="198.5"
                                width="45.4"
                                height="16.4"
                                ></rect>
                                <rect
                                x="442.65"
                                y="198.5"
                                width="45.4"
                                height="16.4"
                                ></rect>
                            </g>
                            </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g> 
                        </svg>
                    </NavLink>
                    </p>
                </div>
                </div>
            </div>

            <div className="technology-info">
                <div className="container">
                <div className="row">
                    <div className="text-left col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div>
                        <span className="technology-info-headerTop"></span>
                        <h3
                        className="mb-4"
                        style={{
                            fontWeight: "400",
                            color: "#202020",
                            marginTop: "0",
                            fontStyle: "normal",
                            lineHeight: 1.2,
                        }}
                        >
                        Technologies we work with
                        </h3>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="technology-info-techBlock col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="technology-info-card card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={blockChain} alt=""></img>
                            </div>
                            <div className="technology-infoMore-link text-right   col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <a
                                className="on-hovr-link"
                                href="https://www.happiestminds.com/services/blockchain-solutions-services/"
                            >
                                More |
                            </a>
                            </div>
                        </div>
                        <h3 className="technology-info-cardTitle card-title">
                            BlockChain
                        </h3>
                        <p className="technology-info-cardText card-text">
                            As Blockchain technologies continues to evolve rapidly,
                            Happiest Mind is one of the early implementor using
                            Hyperledger Fabric, Ethereum, R3 Corda and many others
                            in multiple business use cases. Happiest Minds continues
                            to stay focus in Blockchain technologies.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="technology-info-techBlock col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="technology-info-card card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={dataScience} alt=""></img>
                            </div>
                            <div className="technology-infoMore-link text-right col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <a
                                className="on-hovr-link"
                                href="https://www.happiestminds.com/services/blockchain-solutions-services/"
                            >
                                More |
                            </a>
                            </div>
                        </div>
                        <h3 className="technology-info-cardTitle card-title">
                            Data Science
                        </h3>
                        <p className="technology-info-cardText card-text">
                            AI is another exciting area where deep learning is
                            revolutionizing audio, video, image & text analysis as
                            pre-trained models are becoming more prominent than
                            traditional statistical models. We have specialized in
                            developing deep learning models that work on low cost
                            devices while continuing to build solutions that enhance
                            the efficacy of Auto ML and Explainable AI frameworks.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="technology-info-techBlock col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="technology-info-card card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={devops} alt=""></img>
                            </div>
                            <div className="technology-infoMore-link text-right col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <a
                                className="on-hovr-link"
                                href="https://www.happiestminds.com/services/blockchain-solutions-services/"
                            >
                                More |
                            </a>
                            </div>
                        </div>
                        <h3 className="technology-info-cardTitle card-title">
                            Dev Ops
                        </h3>
                        <p className="technology-info-cardText card-text">
                            It's long that Dev Ops has become main stream in
                            Engineering process bringing Development, IT Operations
                            and Quality Engineering together. We thrive to take Dev
                            Ops automation to a new level, leveraging new tools and
                            technologies like - Prometheus, Site24x7, New Relic,
                            Kubernetes, Dockers etc.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="technology-info-techBlock col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="technology-info-card card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={programmableNetwork} alt=""></img>
                            </div>
                            <div className="technology-infoMore-link text-right col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <a
                                className="on-hovr-link"
                                href="https://www.happiestminds.com/services/blockchain-solutions-services/"
                            >
                                More |
                            </a>
                            </div>
                        </div>
                        <h3 className="technology-info-cardTitle card-title">
                            Programmable Network
                        </h3>
                        <p className="technology-info-cardText card-text">
                            We at Happiest Minds are building the next generation of
                            Programmable Networks - working on Disaggregation,
                            containerized Networking OS development and integration
                            of programmable platforms such as NPUs, FPGAs and
                            popular ASICs, and virtual network functions,
                            programmable Data plane technologies such as DPDK and P4
                            , and closed loop Network Automation including Network
                            Monitoring and Visibility, Network Analytics and Intent
                            Driven Networks.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="technology-info-techBlock col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="technology-info-card card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={cloudComputing} alt=""></img>
                            </div>
                            <div className="technology-infoMore-link text-right col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <a
                                className="on-hovr-link"
                                href="https://www.happiestminds.com/services/blockchain-solutions-services/"
                            >
                                More |
                            </a>
                            </div>
                        </div>
                        <h3 className="technology-info-cardTitle card-title">
                            Cloud Computing
                        </h3>
                        <p className="technology-info-cardText card-text">
                            We at Happiest Minds are deeply focused into 3rd wave of
                            Internet of Things. Smart and connected devices
                            comprises of sensors, microprocessors, edge computing,
                            data storage, controls, cloud computing and essentially
                            embedded operating system. We continue to bolster our
                            capabilities and solutions by aligning ourselves with
                            industry leading alliance partners - AWS, Azure. We also
                            have our home grown IoT platform.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="technology-info-techBlock col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="technology-info-card card">
                        <div className="card-body">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <img src={iot} alt=""></img>
                            </div>
                            <div className="technology-infoMore-link text-right col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                            <a
                                className="on-hovr-link"
                                href="https://www.happiestminds.com/services/blockchain-solutions-services/"
                            >
                                More |
                            </a>
                            </div>
                        </div>
                        <h3 className="technology-info-cardTitle card-title">
                            Internet of things
                        </h3>
                        <p className="technology-info-cardText card-text">
                            We at Happiest Minds are deeply focused into 3rd wave of
                            Internet of Things. Smart and connected devices
                            comprises of sensors, microprocessors, edge computing,
                            data storage, controls, cloud computing and essentially
                            embedded operating system. We continue to bolster our
                            capabilities and solutions by aligning ourselves with
                            industry leading alliance partners - AWS, Azure. We also
                            have our home grown IoT platform.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="diversity-at-work">
                <div className="container">
                <div className="row">
                    <div className="text-left col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="diversity-at-work_header_title">
                        <span className="diversity-at-work_headerTop"></span>
                        <h3 className="mb-4">Diversity@Work</h3>
                        <h5 className="mb-4">
                        <b>Our Commitment</b>
                        </h5>
                        <p>
                        Inclusion and diversity are fundamental to a culture and
                        core values. At Happiest Minds, we strive to ensure that
                        everyone can retain their identity that reflects their
                        cultural experiences and feelings. We believe that no one
                        should be discriminated against because of their
                        differences, such as age, ability, ethnicity, gender,
                        expression or religion.
                        </p>
                        <p>
                        Diversity makes us stronger, more innovative, more
                        competitive and more creative, which helps us better serve
                        our clients and our communities. This resonates with our
                        mission statement: Happiest People. Happiest Customers.
                        </p>
                        <p>
                        We remain committed to an inclusive and diverse workplace,
                        where people can be who they are and be their best,
                        professionally and personally.
                        </p>
                    </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="row">
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity1}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity2}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity3}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity4}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity5}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity6}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity7}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity8}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity9}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <img className="card-img-top" src={diversity10}></img>
                            <div className="diversity-at-work-portfolioContent">
                            <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                            ></img>
                            </div>
                        </div>
                        </div>
                        <div className="d-block col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="diversity-at-work-diversitycard card">
                            <div className="diversity-at-work_wrapper">
                            <div className="diversity-at-work_icon">
                                <i
                                className="fa fa-play-circle-o"
                                aria-hidden=""
                                ></i>
                            </div>
                            <img className="card-img-top" src={diversity11}></img>
                            <div className="diversity-at-work-portfolioContent">
                                <img
                                width="20px"
                                height="20px"
                                src={expand}
                                alt="Expand"
                                ></img>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                    <div className="diversity-at-work-portfolioMenu mt-2 mb-2">
                        <button className="diversity-at-work-active">
                        All
                        <span className="diversity-at-workLine"></span>
                        </button>
                        <button className="">
                        Photos
                        <span className="diversity-at-workLine"></span>
                        </button>
                        <button>Video</button>
                    </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="diversity-at-work-enlargePhoto text-right mt-2 mb-2">
                        Click on photos to enlarge
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
        <footer className="footer">
            <div className="footer_container">
            <div className="row">
                <div className="footer-column flex-column pl-0 pr-0 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12">
                <h3 className="footer-title">Information</h3>
                <div className="undefined nav-item">
                    <a
                    href="https://www.happiestminds.com/"
                    className="footer-navlink footer-linkContent pl-0 nav-link"
                    >
                    Company Website
                    </a>
                </div>
                <div className="nav-item">
                    <a
                    href="https://www.happiestminds.com/about-us/"
                    className="footer-navlink footer-linkContent pl-0 nav-link"
                    >
                    About Happiest Minds
                    </a>
                </div>
                <div className="nav-item">
                    <a
                    href="https://www.happiestminds.com/about-us/"
                    className="footer-navlink footer-linkContent pl-0 nav-link"
                    >
                    Terms and Conditions
                    </a>
                </div>
                <div className="nav-item">
                    <a
                    href="https://www.happiestminds.com/about-us/"
                    className="footer-navlink footer-linkContent pl-0 nav-link"
                    >
                    Privacy Policy
                    </a>
                </div>
                </div>
                <div className="footer-column flex-column pl-0 pr-0 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                <h3 className="footer-title">Address</h3>
                <p className="footer-linkContent mb-1">
                    Happiest Minds Technologies Limited <br /> SMILES 2,3 & 4
                </p>
                <p>
                    <a
                    href="https://bit.ly/38MRWKT"
                    className="footer-navlink footer-linkContent pl-0 nav-link"
                    >
                    Registered Office:
                    <br />
                    #53/1-4, Hosur Main Road, Madivala
                    <br />
                    (Next To Madivala Police Station) <br />
                    Bengaluru-560068, Karnataka, India{" "}
                    </a>
                </p>
                <a
                    href="https://www.happiestminds.com/location/"
                    className="footer-navlink footer-linkContent pl-0 nav-link"
                >
                    Other Office Locations
                </a>
                </div>
                <div className="footer-column flex-column pl-0 pr-0 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <h3 className="footer-title flex-column">Follow Us</h3>
                <a
                    href="https://www.facebook.com/happiestminds/"
                    className="footer-linkContent footer-fontAwesomeIcon mr-3"
                >
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    className="svg-inline--fa fa-facebook-square fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                    <path
                        fill="currentColor"
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    ></path>
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/company/happiest-minds-technologies"
                    className="footer-linkContent footer-fontAwesomeIcon mr-3"
                >
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    className="svg-inline--fa fa-linkedin fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                    <path
                        fill="currentColor"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                    </svg>
                </a>
                <a
                    href="https://twitter.com/happiestminds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-linkContent footer-fontAwesomeIcon mr-3"
                >
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter-square"
                    className="svg-inline--fa fa-twitter-square fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                    <path
                        fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                    ></path>
                    </svg>
                </a>
                <a
                    href="https://www.youtube.com/user/HappiestMinds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-linkContent footer-fontAwesomeIcon mr-3"
                >
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube-square"
                    className="svg-inline--fa fa-youtube-square fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                    <path
                        fill="currentColor"
                        d="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
                    ></path>
                    </svg>
                </a>

                <a
                    href="https://www.instagram.com/happiestmindstechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-linkContent footer-fontAwesomeIcon mr-3"
                >
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    className="svg-inline--fa fa-instagram fa-w-14 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    >
                    <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                    </svg>
                </a>
                </div>
                <div className="flex-column pl-0 col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                <h3 className="footer-title">Contact</h3>
                <p>
                    <a
                    href="mailto:peoplepositions@happiestminds.com"
                    className="footer-linkContent"
                    >
                    peoplepositions@happiestminds.com
                    </a>
                </p>
                <p className="footer-linkContent">
                    Call us on <br />
                    +91 80 61960300
                </p>
                <p className="footer-linkContent">
                    Call us on <br />
                    +91 80 61960400
                </p>
                <p className="footer-linkContent">
                    Fax <br />
                    +91 80 6196 0700
                </p>
                </div>
            </div>
            </div>
            <nav className="footer-navbar navbar navbar-expand navbar-light">
            <div className="container">
                <span className="navbar-brand">
                <p className="footer-linkContent mb-0">
                    © Happiest Minds 2023| All Rights Reserved
                </p>
                </span>
                <div className="footer-appVersion">
                <span>v0.1.0</span> 
                </div>
            </div>
            </nav>
        </footer>
        </div>
    );
  
}
