var url = 'https://api.github.com/users/swqrhkjhds768w';
fetch(url)
.then(function(res) {
  if (!res.ok) {
    throw Error(res.status); // will go to .catch
  }
  return res; // otherwise, return a new promise
}).then(function(res) {
  console.log(res);
}).catch(function(error) {
  console.log(error);
});

//------------------------
// REFACTORED:
function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}
var url = 'https://api.github.com/users/swqrhkjhds768w';
fetch(url)
.then(handleErrors)
.then(function(res) {
  console.log(res);
}).catch(function(error) {
  console.log(error);
});