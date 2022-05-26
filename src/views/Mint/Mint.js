import SEO from "../../components/Common/SEO";
import { getPageTitle } from "../../Helpers";
import "./Mint.css";
import { useHistory } from "react-router-dom";

export default function Mint(props) {
  const history = useHistory();
  const assets = [
    {
      assetLabel: "mAAPL",
      assetFullName: "Apple Inc.",
      poolPrice: 196.62,
      minColRatio: 150,
    },
    {
      assetLabel: "mABNB",
      assetFullName: "Airbnb Inc.",
      poolPrice: 132.12,
      minColRatio: 150,
    },
    {
      assetLabel: "mAMZN",
      assetFullName: "Amazon.com, Inc.",
      poolPrice: 2127.71,
      minColRatio: 150,
    },
    {
      assetLabel: "mFB",
      assetFullName: "Facebook Inc.",
      poolPrice: 250.64,
      minColRatio: 150,
    },
    {
      assetLabel: "mGOOGL",
      assetFullName: "Alphabet Inc.",
      poolPrice: 2661.46,
      minColRatio: 130,
    },
  ];

  return (
    <SEO title={getPageTitle("Mint")}>
      <div className="page-layout">
        <div className="Page-title">Mint</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr className="header-row">
                <th className="header-cell" style={{ width: "40%" }}>
                  Asset
                </th>
                <th className="header-cell" style={{ width: "30%" }}>
                  Pool price
                </th>
                <th className="header-cell" style={{ width: "30%" }}>
                  Minimum collateral ratio
                </th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr className="body-row" onClick={() => history.push("/mint/mint_form")}>
                  <td className="body-cell">
                    <b>{asset.assetLabel}</b> <small>{asset.assetFullName}</small>
                  </td>
                  <td className="body-cell">{asset.poolPrice}</td>
                  <td className="body-cell">{asset.minColRatio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SEO>
  );
}
