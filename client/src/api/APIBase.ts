import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { redirectSignInPage } from "~modules/redirectSignInPage";

axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

export class APIBase {
  private readonly API_URL: string;

  constructor(API_URL: "SENDGRID_TUTORIAL_URL") {
    this.API_URL = process.env[API_URL] || "";
  }

  /**
   *  axiosのgetメソッド
   * @param url
   * @param config
   */
  protected async get<R>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    try {
      const requestUrl = `${this.API_URL}${url}`;
      const result = await axios.get(requestUrl, config);
      return result;
    } catch (error) {
      if (this.isUnauthorizedError(error)) redirectSignInPage();

      throw error;
    }
  }

  /**
   *  axiosのpostメソッド
   * @param url
   * @param data
   * @param config
   */
  protected async post<D, R>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<R>> {
    try {
      const requestUrl = `${this.API_URL}${url}`;
      const result = await axios.post(requestUrl, data, config);
      return result;
    } catch (error) {
      if (this.isUnauthorizedError(error)) redirectSignInPage();

      throw error;
    }
  }

  /**
   *  axiosのpatchメソッド
   * @param url
   * @param data
   * @param config
   */
  protected async patch<D, R>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<R>> {
    try {
      const requestUrl = `${this.API_URL}${url}`;
      const result = await axios.patch(requestUrl, data, config);
      return result;
    } catch (error) {
      if (this.isUnauthorizedError(error)) redirectSignInPage();

      throw error;
    }
  }

  /**
   *  axiosのdeleteメソッド
   * @param url
   * @param config
   */
  protected async delete<R>(
    url: string,
    config?: AxiosRequestConfig | undefined
  ): Promise<AxiosResponse<R>> {
    try {
      const requestUrl = `${this.API_URL}${url}`;
      const result = await axios.delete(requestUrl, config);
      return result;
    } catch (error) {
      if (this.isUnauthorizedError(error)) redirectSignInPage();

      throw error;
    }
  }

  /**
   *  401エラーの判定
   * @param {unknown} error
   * @returns {boolean}
   */
  private isUnauthorizedError(error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 401;
  }
}
