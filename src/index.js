
import { Spinner } from "@newfold/ui-component-library";
import { __ } from "@wordpress/i18n";
import { AnalyticsSdk } from './sdk/Analytics';
import domReady from "@wordpress/dom-ready";
import { useEffect, useState } from "@wordpress/element";
import { MyPluginsAndToolList } from "./components/MyPluginsAndToolsList";


domReady(() => {
  AnalyticsSdk.initialize();
});



/** @type {import ("..").NewfoldSolutions} */
export function NewfoldSolutions(props) {
  
  // const purchasedSolution = "";

  // useEffect(() => {
  //   purchasedSolution = "ecommerce";
  // }, []);

  // if (purchasedSolution === "") {
  //   return (
  //     <div className="nfd-flex nfd-items-center nfd-text-center nfd-justify-center nfd-h-full">
  //       <Spinner size="8" className="nfd-text-primary" />
  //     </div>
  //   );
  // }
  
  return (
    <MyPluginsAndToolList keyword="all" />
  );
}