const axios = require('axios');

module.exports = {
  getUser: function() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
      // .then(function(response) {
      //   console.log(response.data.name);
      //   return response.data.name;
      // })
      
  }
}

// self.getUser();