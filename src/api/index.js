import * as http from './http-common';

class API {
  static async getDiversityRecords(table, params) {
    const options = {
      url: `/appZzXlGfI5VxtbkT/${table}/`,
      params,
    };
    return http.airtable(options);
  }
}

export default API;
