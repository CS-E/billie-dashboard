import "../styles/globals.css";
import "../styles/theme.css";

function MyApp({ Component, pageProps }) {
  return <div id="root-node" className="nord-light theme">
      <Component {...pageProps} />
    </div>
}

export default MyApp
