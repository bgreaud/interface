import React from "react";
import SEO from "../../components/Common/SEO";
import { getPageTitle } from "../../Helpers";
import { useWeb3React } from "@web3-react/core";
import { useHistory } from "react-router-dom";

export default function Dashboard(props) {
  const { active, account } = useWeb3React();
  const history = useHistory();

  const assets = [
    {
      assetLabel: "mAAPL",
      assetFullName: "Apple Inc.",
      poolPrice: 196.62,
      minColRatio: 150,
      minted: 0.0000025,
      collateral: 0.000259,
    },
    {
      assetLabel: "mABNB",
      assetFullName: "Airbnb Inc.",
      poolPrice: 132.12,
      minColRatio: 150,
      minted: 0.0000025,
      collateral: 0.000259,
    },
    {
      assetLabel: "mAMZN",
      assetFullName: "Amazon.com, Inc.",
      poolPrice: 2127.71,
      minColRatio: 150,
      minted: 0.0000025,
      collateral: 0.000259,
    },
    {
      assetLabel: "mFB",
      assetFullName: "Facebook Inc.",
      poolPrice: 250.64,
      minColRatio: 150,
      minted: 0.0000025,
      collateral: 0.000259,
    },
    {
      assetLabel: "mGOOGL",
      assetFullName: "Alphabet Inc.",
      poolPrice: 2661.46,
      minColRatio: 130,
      minted: 0.0000025,
      collateral: 0.000259,
    },
  ];

  return (
    <SEO title={getPageTitle("Dashboard")}>
      <div className="page-layout">
        <div className="Page-title">Dashboard</div>
        {!active && <div> Connect to a wallet</div>}
        {active && (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr className="header-row">
                  <th className="header-cell" style={{ width: "20%" }}>
                    Asset
                  </th>
                  <th className="header-cell" style={{ width: "10%" }}>
                    Pool price
                  </th>
                  <th className="header-cell" style={{ width: "20%" }}>
                    Minted
                  </th>
                  <th className="header-cell" style={{ width: "20%" }}>
                    Collateral
                  </th>
                  <th className="header-cell" style={{ width: "20%" }}>
                    Collateral ratio
                  </th>
                  <th className="header-cell" style={{ width: "10%" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr className="body-row">
                    <td className="body-cell">
                      <b>{asset.assetLabel}</b> <small>{asset.assetFullName}</small>
                    </td>
                    <td className="body-cell">{asset.poolPrice}</td>
                    <td className="body-cell">{asset.minted}</td>
                    <td className="body-cell">{asset.collateral}</td>
                    <td className="body-cell">{asset.minColRatio}</td>
                    <td className="body-cell">
                      <div className="default-btn" onClick={() => history.push("/dashboard/manage")}>
                        Manage
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </SEO>
  );
}
