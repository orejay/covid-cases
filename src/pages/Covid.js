import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidCases } from "../redux/covidCasesSlice";
import "./covid.css";
import "./loader.css";

function Covid() {
  const { loading, data, error } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCovidCases());
  }, [dispatch]);
  if (loading) {
    return (
      <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    );
  } else if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <div id="head">
        <h1>Covid cases in Nigeria</h1>
        <div id="hd-stat">
          <div className="case-bx">
            <div className="hd-title">Samples Tested</div>
            <div>
              <div className="hd-number">{data.data.totalSamplesTested}</div>
            </div>
          </div>
          <div className="case-bx">
            <div className="hd-title">Confirmed Cases</div>
            <div className="hd-number">{data.data.totalSamplesTested}</div>
          </div>
          <div className="case-bx">
            <div className="hd-title">Active Cases</div>
            <div className="hd-number">{data.data.totalSamplesTested}</div>
          </div>
          <div className="case-bx">
            <div className="hd-title">Discharged Cases</div>
            <div className="hd-number">{data.data.totalSamplesTested}</div>
          </div>
          <div className="case-bx">
            <div className="hd-title">Death</div>
            <div className="hd-number">{data.data.totalSamplesTested}</div>
          </div>
        </div>
      </div>
      <div id="content">
        <h1>Cases by State</h1>
        <div id="states">
          {data.data.states.map((state) => (
            <div className="state-data">
              <h2 id="state-name">{state.state}</h2>
              <div>
                <p>
                  <span>{state.confirmedCases}</span> Confirmed cases
                </p>
                <p>
                  <span>{state.casesOnAdmission}</span> Cases on admission
                </p>
                <p>
                  <span>{state.discharged}</span> Discharged
                </p>
                <p>
                  <span>{state.death}</span> Deaths
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Covid;
