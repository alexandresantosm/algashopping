declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFCFactory<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
