/// <reference path="./node_modules/@wordpress/element/build-types/react.d.ts" />

type FeedEntry = {
    title: string;
    description: React.ReactNode | string[];
    variant: "info" | "success" | "error" | "warning";
    autoDismiss: number;
    onDismiss?: (id: string) => void;
    position: "bottom-left" | "bottom-center" | "top-center";
};
  
type PluginModules = {
    navigate: (location: string) => void;
    notify: { push: (id: string, message: FeedEntry) => void };
  };    

type NewfoldSolutionsProps = {
    wpModules: PluginModules;    
};

export type NewfoldSolutions = (props: NewfoldSolutionsProps) => JSX.Element;
  

  
  
  