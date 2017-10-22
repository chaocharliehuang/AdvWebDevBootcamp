var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(url)
.then(function(res){
  return res.json();
}).then(function(data) {
  console.log(data);
});

// Fetch options
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    name: 'blue',
    login: 'bluecat'
  })
}).then(function(data) {
  // do something
}).catch(function(error) {
  // handle error
})