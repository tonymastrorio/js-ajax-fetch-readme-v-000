const token = 'fea5d8928d9602a449fefe06d0c25789b420ec76'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));