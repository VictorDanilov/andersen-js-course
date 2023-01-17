// eslint-disable-next-line import/prefer-default-export
export function get() {
    fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
      .then(res => res.json())
      .then(response => {
        if (response.getUsersData) {
          return fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
        }
        throw new Error('user not found');
      })
      .then(usersResponse => usersResponse.json())
      .then(users => console.log(users))
      .catch(error => console.log(error));
  }