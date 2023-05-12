// Creating a service request method similar to axios.create
// choose this approach for smaller footprint

export function createServiceRequest<T>(
  baseURL?: URL,
  serviceReqInit?: Omit<RequestInit, "signal">,
  timeout = 8000
) {
  return async function (endpoint: string, init: RequestInit): Promise<T> {
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
