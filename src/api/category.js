import * as httpMethods from "../utils/helpers/httpMethods";

export const getStatusApi = (endpoint) => {
  // return httpMethods.get(endpoint);
  return {
    status: 200,
    data: {
      "success": "true",
      "message": "Categories retrieved successfully",
      "data": {
          "categories": [
              {
                  "id": 1,
                  "title": "Breakfast",
                  "createdAt": "2019-03-07T08:08:03.326Z",
                  "updatedAt": "2019-03-07T08:08:03.326Z"
              },
              {
                  "id": 2,
                  "title": "Brunch",
                  "createdAt": "2019-03-07T08:08:03.326Z",
                  "updatedAt": "2019-03-07T08:08:03.326Z"
              },
              {
                  "id": 3,
                  "title": "Lunch",
                  "createdAt": "2019-03-07T08:08:03.326Z",
                  "updatedAt": "2019-03-07T08:08:03.326Z"
              },
              {
                  "id": 4,
                  "title": "Evening Tea",
                  "createdAt": "2019-03-07T08:08:03.326Z",
                  "updatedAt": "2019-03-07T08:08:03.326Z"
              },
              {
                  "id": 5,
                  "title": "Dinner",
                  "createdAt": "2019-03-07T08:08:03.326Z",
                  "updatedAt": "2019-03-07T08:08:03.326Z"
              }
          ]
      }
    }
  }
};
