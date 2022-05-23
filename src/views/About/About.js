import SEO from "../../components/Common/SEO";
import { getPageTitle } from "../../Helpers";

export default function About(props) {
  return <SEO title={getPageTitle("About")}></SEO>;
}
