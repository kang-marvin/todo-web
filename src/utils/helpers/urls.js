 const URL = (path) => {
  // switch
    // (process.env.REACT_APP_NODE_ENV) {
    // case "development":
      return `${path}`;
    // case "production":
    //     return `${process.env.PROD_APP_BACKEND_URL}/${path}`;
    // case "staging":
    //   return `${process.env.STAG_APP_BACKEND_URL}/${path}`;
    // default:
    //   return `${process.env.STAG_APP_BACKEND_URL}/${path}`;
  // }
};

export default URL;
