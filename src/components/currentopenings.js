import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import searchIcon from '../images/search.svg'

export default function CurrentOpenings(props) {
    const {location} = useLocation();
    //console.log(location, " useLocation Hook");
    const data = location.state?.data;
    console.log([props])
    return (
        <div
        className="container"
        style={{ backgroundColor: "rgb(238, 238, 238)" }}
        >
            {data}
        <div className="undefined pt-4 pb-4">
            <h3 className="job-list-title-head">Current Openings</h3>
            <div className="job-search animate_animated animate_fadeInUp mt-2 row">
            <div className="job-search-container col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="pb-4 form-group">
                <div
                    className="rbt"
                    style={{ outline: "none", position: "relative" }}
                >
                    <div
                    style={{
                        display: "flex",
                        flex: "1 1 0%",
                        height: "100%",
                        position: "relative",
                    }}
                    >
                    <input
                        autoComplete="off"
                        placeholder="Search jobs"
                        type="text"
                        className="rbt-input-main form-control rbt-input form-control-lg"
                    ></input>
                    </div>
                </div>
                </div>
            </div>
            <div className="job-search-container col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <select
                name="experience"
                className="job-search_dropdown form-control"
                >
                <option value>Select Experience</option>
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
            <div className="job-search-container mt-5 mt-sm-0 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                <select
                name="location"
                className="job-search_dropdown form-control"
                >
                <option value>All locations</option>
                <option value="BANGALORE">BANGALORE</option>
                <option value="CHENNAI">CHENNAI</option>
                <option value="PUNE">PUNE</option>
                <option value="Dubai">Dubai</option>
                <option value="USA">USA</option>
                </select>
            </div>
            <div className="job-search-container d-none d-sm-block col-xl-1 col-lg-1 col-md-1 col-sm-6 col-6">
                <button id="Search" type="submit" className="job-search-btn">
                    <img src={searchIcon} className="job-search-svg"></img>
                </button>
            </div>
            <div className="mt-5 mt-sm-0 col-xl-1 col-lg-1 col-md-1 col-sm-6 col-6">
                <button id="reset" type="submit" className="job-search-reset-btn">RESET</button>
            </div>
            </div>
        </div>
        </div>
    );
}
