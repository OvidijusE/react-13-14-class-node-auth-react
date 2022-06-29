export async function myFetch(url, method = 'GET', data = null, token) {
  try {
    const options = {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    };
    options.method = method === 'POST' ? 'POST' : 'GET';
    options.body = data ? JSON.stringify(data) : null;

    const resp = await fetch(url, options);
    const dataInJs = await resp.json();
    return dataInJs;
  } catch (error) {
    console.log('myFetch error ===', error);
  }
}

// myFetch('https://reqres.in/api/login', 'POST', { name: 'James' });
