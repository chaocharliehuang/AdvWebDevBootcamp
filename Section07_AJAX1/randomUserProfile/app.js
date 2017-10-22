document.getElementById('btn').onclick = function() {
  var url = 'https://randomuser.me/api';
  
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError);
  
  function handleErrors(res) {
    if (!res.ok) {
      throw Error(res.status);
    }
    return res;
  }
  
  function parseJSON(res) {
    return res.json().then(function(data) {
      return data.results[0];
    });
  }
  
  function updateProfile(user) {
    document.getElementById('avatar').src = user.picture.medium;
    document.getElementById('fullname').innerText = titleCase(user.name.first) + ' ' + titleCase(user.name.last);
    document.getElementById('username').innerText = user.login.username;
    document.getElementById('email').innerText = user.email;
    document.getElementById('city').innerText = titleCase(user.location.city);
  }
  
  function printError(err) {
    console.log(err);
  }

  function titleCase(strings) {
    strings = strings.split(' ');
    var strArr = [];
    for (var i = 0; i < strings.length; i++) {
      strArr.push(strings[i].charAt(0).toUpperCase() + strings[i].slice(1));
    }
    return strArr.join(' ');
  }
};
