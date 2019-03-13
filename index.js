let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// map every url to the promise fetch(github url)
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(`${response.url}: ${response.status}`)
    ));