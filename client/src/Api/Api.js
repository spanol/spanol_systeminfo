export const Api = {
  baseUrl: "http://localhost:3001",

  cpuUrl: () => Api.baseUrl + "/cpu",

  ramUrl: () => Api.baseUrl + "/ram",

  gpuUrl: () => Api.baseUrl + "/gpu",

  batteryUrl: () => Api.baseUrl + "/battery",

  osUrl: () => Api.baseUrl + "/os",

  apiGetRequest: (url) => {
    fetch(url, {
      method: "GET",
    });
  },
};
