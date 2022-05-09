import React from 'react';
import App from 'next/app';
import Layout from '../utils/Layout';
import { PageProvider, PageContext } from '../providers/page';
import packageJson from '../package.json';
import '../utils/styles/_reset.scss';
import '../utils/styles/_fonts.scss';

console.log(
  '%cCurrent version: v' + packageJson.version,
  'color: blue; font-size: 20px; background-color: white;'
);

class TheApp extends App {
  state = {
    readyForAds: false
  };

  render() {
    const { Component, pageProps ,/*, apollo*/ } = this.props;

    return (
      <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default function Wrapper (props) {
  const { children, ...other } = props;
  return <PageProvider><TheApp {...other} />{children}</PageProvider>;
};
