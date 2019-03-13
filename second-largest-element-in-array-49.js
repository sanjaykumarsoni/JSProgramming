//method 1: 

var arr = Array('20','120','111','215','215','54','78'),
biggest = -Infinity,
next_biggest = -Infinity;

for (var i = 0, n = arr.length; i < n; ++i) {
    var nr = +arr[i]; // convert to number first

    if (nr > biggest) {
        next_biggest = biggest; // save previous biggest value
        biggest = nr;
    } else if (nr < biggest && nr > next_biggest) {
        next_biggest = nr; // new second biggest value
    }
}

console.log(next_biggest);

//method 2: 