type QueryParamsType =
  | string
  | Record<string, string>
  | string[][]
  | URLSearchParams
  | undefined;

export class ApiClient {
  constructor(private baseUrl: string) {}

  private formulateUrl(path: string, query?: QueryParamsType) {
    return new URL(path + "?" + new URLSearchParams(query), this.baseUrl).href;
  }

  async get<R>(path: string, query?: QueryParamsType) {
    const response = await fetch(this.formulateUrl(path, query));
    return (await response.json()) as R;
  }

  async post<T, R>(path: string, body: T, query?: QueryParamsType) {
    const response = await fetch(this.formulateUrl(path, query), {
      method: "POST",
      body: JSON.stringify(body),
    });
    return (await response.json()) as R;
  }

  async put<T, R>(path: string, body: T, query?: QueryParamsType) {
    const response = await fetch(this.formulateUrl(path, query), {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return (await response.json()) as R;
  }

  async patch<T, R>(path: string, body: T, query?: QueryParamsType) {
    const response = await fetch(this.formulateUrl(path, query), {
      method: "PATCH",
      body: JSON.stringify(body),
    });
    return (await response.json()) as R;
  }

  async delete<R>(path: string, query?: QueryParamsType) {
    const response = await fetch(this.formulateUrl(path, query), {
      method: "DELETE",
    });
    return (await response.json()) as R;
  }
}

export const apiClient = new ApiClient(import.meta.env.API_URL);
