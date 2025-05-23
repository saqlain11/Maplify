import { BASE_URL } from '@env';
import { API_TIMEOUT } from '@Maplify/constant';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * This is wrapper of axios to fetch http request and extract data is sucess
 * @param request
 * @returns Promise<T> generic data with type that passed from services
 */
export const fetcher = async <T>(request: AxiosRequestConfig): Promise<T> => {
  try {
    const result = await axiosInstance(request);
    return result.data;
  } catch (error: any) {
    throw error;
  }
};
