import { Fragment } from "react";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
