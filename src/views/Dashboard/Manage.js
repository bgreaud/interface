import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import SEO from "../../components/Common/SEO";
import { getPageTitle } from "../../Helpers";
import "./Manage.css";

export default function Manage(props) {
  const [collateral, setCollateral] = useState(0.0);
  const [ratio, setRatio] = useState(200.0);
  const [asset, setAsset] = useState(0.0);

  const { active, account } = useWeb3React();

  const selectedAsset = {
    assetLabel: "mAAPL",
    assetFullName: "Apple Inc.",
    poolPrice: 196.62,
    minColRatio: 150,
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("collateral:", collateral);
    console.log("ratio:", ratio);
    console.log("asset:", asset);
  }

  return (
    <SEO title={getPageTitle("Mint")}>
      <div className="page-layout">
        <div className="Page-title">Manage</div>
        {!active && <div> Connect to a wallet</div>}
        {active && (
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="input-header">
                  <b>Set a collateral amount</b>
                </div>
                <div className="input-info">
                  <small>USDC</small>
                </div>
                <div className="input-wrapper">
                  <input id="collateral" type="number" inputMode="decimal" value={230} disabled={true} />
                  <span className="arrow">
                    <big>&#8594;</big>
                  </span>
                  <input
                    id="collateral"
                    type="number"
                    inputMode="decimal"
                    value={collateral}
                    onChange={(e) => {
                      setCollateral(e.target.value);
                      setAsset(e.target.value / (ratio / 100) / selectedAsset.poolPrice);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="input-header">
                  <b>Set a collateral ratio</b>
                </div>
                <div className="input-info">
                  <small>Min: 150% / Safe: 200%</small>
                </div>
                <div className="input-wrapper">
                  <input id="collateral" type="number" inputMode="decimal" value={150} disabled={true} />
                  <span className="arrow">
                    <big>&#8594;</big>
                  </span>
                  <input
                    id="ratio"
                    type="number"
                    value={ratio}
                    onChange={(e) => {
                      setRatio(e.target.value);
                      setAsset(collateral / (e.target.value / 100) / selectedAsset.poolPrice);
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="input-header">
                  <b>Confirm minted amount</b>
                </div>
                <div className="input-info">
                  <small>{selectedAsset.assetLabel}</small>
                </div>
                <div className="input-wrapper">
                  <input id="collateral" type="number" inputMode="decimal" value={0.92265} disabled={true} />
                  <span className="arrow">
                    <big>&#8594;</big>
                  </span>
                  <input
                    id="asset"
                    type="number"
                    inputMode="decimal"
                    value={asset}
                    onChange={(e) => {
                      setAsset(e.target.value);
                      setCollateral(((e.target.value * ratio) / 100) * selectedAsset.poolPrice);
                    }}
                  />
                </div>
              </div>
              <button className="default-btn" type="submit" disabled={!active}>
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </SEO>
  );
}
