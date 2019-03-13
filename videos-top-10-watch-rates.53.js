const sortedVideoWatchList = (videoArr) => videoArr.sort((a, b) => b.counter - a.counter).slice(0, 10).map((item) => item.name);



const givenVideoWatchList = [{name: 'abc', counter: 10}, {name: 'bca', counter: 20}, {name: 'cda', counter: 16}, {name: 'kkr', counter: 26}, {name: 'lsd', counter: 56}, {name: 'mdr', counter: 8}, {name: 'pqr', counter: 90}, {name: 'def', counter: 45}, {name: 'krm', counter: 19}, {name: 'ktm', counter: 89}, {name: 'lml', counter: 35}, {name: 'rtr', counter: 49}];

console.log(sortedVideoWatchList(givenVideoWatchList));