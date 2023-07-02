const GITHUB_URL = "https://api.github.com";

export function getResponseData(requestText) {
  let url = new URL(`${GITHUB_URL}/search/users`);
  url.searchParams.set("q", `${requestText}`);
  url.searchParams.set("per_page", 1);
  return fetch(url).then((res) => checkResult(res));
}

function checkResult(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
