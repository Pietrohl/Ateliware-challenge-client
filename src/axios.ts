// Creating a service request method similar to axios.create
// choose this approach for smaller footprint
const defaultBaseURL = new URL(
  import.meta.env.VITE_API_TARGET ?? window.location.href
);
const defaultRequestInit: Omit<RequestInit, "signal"> = {};

export function createServiceRequest(
  baseURL: URL = defaultBaseURL,
  serviceReqInit: Omit<RequestInit, "signal"> = defaultRequestInit,
  timeout = 8000
) {
  return async function <T>(endpoint: string, init: RequestInit): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(new URL(endpoint, baseURL), {
      ...init,
      ...serviceReqInit,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    return response.ok ? response.json() : Promise.reject(response);
  };
}
