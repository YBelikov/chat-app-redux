const api = "https://edikdolynskyi.github.io/react_sources/messages.json"

async function callApi() {
    const response = await fetch(api);
    const data = await response.json();
    return data;
}

export {callApi};
