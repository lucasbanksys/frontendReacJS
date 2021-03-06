export const Api = {
  url: "https://banksys-backend.herokuapp.com/tarefa",
  fetchGet: () => fetch(Api.url),
  fetchGetById: (id) => fetch(Api.url + "/FindById/" + id),
  fetchPost: (body) => {
    return fetch(Api.url + "/add", {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },
  fetchPut: (body, id) => {
    return fetch(Api.url + "/update/" + id, {
      method: "PUT",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },
  fetchDelete: (id) => {
    return fetch(Api.url + "/delete/" + id, {
      method: "DELETE",
    });
  },
};
