import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import SEO from "../../components/Common/SEO";
import { getPageTitle } from "../../Helpers";
import "./MintForm.css";

export default function MintForm(props) {
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
        <div className="Page-title">Mint</div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="input-header">
                <b>Set a collateral amount</b>
              </div>
              <div className="input-info">
                <small>USDC</small>
              </div>
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
            <div>
              <div className="input-header">
                <b>Set a collateral ratio</b>
              </div>
              <div className="input-info">
                <small>Min: 150% / Safe: 200%</small>
              </div>
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
            <div>
              <div className="input-header">
                <b>Confirm minted amount</b>
              </div>
              <div className="input-info">
                <small>{selectedAsset.assetLabel}</small>
              </div>
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
            <button className="default-btn" type="submit" disabled={!active}>
              Mint
            </button>
            {!active && <div className="connect-warning"> You must connect your wallet !!</div>}
          </form>
        </div>
      </div>
    </SEO>
  );
}
