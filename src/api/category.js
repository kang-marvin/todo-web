import * as httpMethods from "../utils/helpers/httpMethods";

export const getStatusApi = (endpoint) => {
  return httpMethods.get(endpoint);
};
