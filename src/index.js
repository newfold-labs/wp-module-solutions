
import apiFetch from "@wordpress/api-fetch";
import { Spinner } from "@newfold/ui-component-library";
import { __ } from "@wordpress/i18n";
import { AnalyticsSdk } from "./sdk/analytics";
import { PluginList } from "./components/PluginList";


const fetcher = (path) => apiFetch({ url: NewfoldRuntime.createApiUrl(path) });

domReady(() => {
  AnalyticsSdk.initialize();
});


export function MyPluginsTools(props) {
  useEffect(() => {
  }, []);

  if (purchasedSolution === undefined) {
    return (
      <div className="nfd-flex nfd-items-center nfd-text-center nfd-justify-center nfd-h-full">
        <Spinner size="8" className="nfd-text-primary" />
      </div>
    );
  }
  
  return (
    <PluginList keyword="all" />
  );
}