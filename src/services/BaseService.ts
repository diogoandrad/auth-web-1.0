import { Api, headers } from './Api';

export default class BaseService {

  public static async getAll(path: string): Promise<any> {
    return await Api.get(path, { headers: headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  // public static getOne(url: string, param: any): Promise<Response> {
  //   let res = axios.get<T>(this.baseURL + url + param)
  //     .then((response: any) => {
  //       const result = response.data;
  //       if (result && result.success) {
  //         return new Response(true, result.data, "Success", "");
  //       } else {
  //         const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
  //         return new Response(false, null, "Error", msg);
  //       }
  //     })
  //     .catch(function (error) {
  //       return new Response(false, null, "Error", error);
  //     });
  //   return res;
  // }

  // public static create<T>(url: string, obj: T): Promise<Response> {
  //   let res = axios.post(this.baseURL + url, obj)
  //     .then(response => {
  //       const result = response.data;
  //       if (result && result.success) {
  //         return new Response(true, result.data, "Success", "");
  //       } else {
  //         const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
  //         return new Response(false, null, "Error", msg);
  //       }
  //     })
  //     .catch(function (error) {
  //       return new Response(false, null, "Error", error);
  //     });
  //   return res;
  // }

  // public static update<T>(url: string, param: any, obj: T): Promise<Response> {
  //   let res = axios.post(this.baseURL + url + param, obj)
  //     .then(response => {
  //       const result = response.data;
  //       if (result && result.success) {
  //         return new Response(true, result.data, "Success", "");
  //       } else {
  //         const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
  //         return new Response(false, null, "Error", msg);
  //       }
  //     })
  //     .catch(function (error) {
  //       return new Response(false, null, "Error", error);;
  //     });
  //   return res;
  // }

  // public static delete(url: string, param: any): Promise<Response> {
  //   let res = axios.delete(this.baseURL + url, { data: param })
  //     .then(response => {
  //       const result = response.data;
  //       if (result && result.success) {
  //         return new Response(true, result.data, "Success", "");
  //       } else {
  //         const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text : "Error";
  //         return new Response(false, null, "Error", msg);
  //       }
  //     })
  //     .catch(function (error) {
  //       return new Response(false, null, "Error", error);
  //     });
  //   return res;
  // }

}