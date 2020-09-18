const getUsers = (url) => fetch(url);

async function foo(url) {
  try {
    const response = await getUsers(url);
    const [user] = await response.json();
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
foo('https://jsonplaceholder.typicode.com/users');
foo('ht://jsonplaceholder.typicode.com/users');
