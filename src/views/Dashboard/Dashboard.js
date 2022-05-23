import React from "react";
import SEO from "../../components/Common/SEO";
import { getPageTitle } from "../../Helpers";

export default function Dashboard(props) {
  return <SEO title={getPageTitle("Dashboard")}></SEO>;
}
