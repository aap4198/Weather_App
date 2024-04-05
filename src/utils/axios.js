import axios from "axios";
export default async function axiosCall(method, url, data) {
  try {
    const response = await axios({
      method,
      url,
      ...(data && { data: data }),
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
