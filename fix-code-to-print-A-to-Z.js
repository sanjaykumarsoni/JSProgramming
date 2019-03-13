// # Instructions

// 1. Fix the code so it prints out the alphabet A-Z in the console.

// 2. Cannot:
// 	- Have **any** global variables at all
// 	- Delete or combine any function declarations
// 	- Create any new functions (except IIFEs -- hint!)
// 	- Rearrange the order of declarations

// 3. Can/must:
// 	- Declare extra variables (as long as they're not global)
// 	- Modify (in-place) function declaration/initialization
// 	- Add/remove statements/expressions (IIFEs, return, params, etc)
// 	- Make the fewest changes possible

A();

function C() {
	console.log("OOPS!");
}

function E(f) {
	console.log("E");
	f();
	var f = F;
}

var A = function() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");
	H();

	var H = function() {
		console.log("H");
		I();
	};
}

var D = d;

function d() {
	console.log("D");
	E();
}

function I() {
	console.log("I");
	J();
	J();
}

B = function() {
	console.log("B");
	C();
};

var F = function() {
	console.log("F");
	G();
};

var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
	(function(i){
		// define the current function
		window[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				// TODO: call the next function
			}
		};
	})(i);
}

var J = function() {
	J = function() {
		console.log("J");
		K();
	};
};

C = function() {
	console.log("C");
	D();
};



// solution add IIFE and everything became private..
// (function () {

// 	function C() {
// 		console.log("OOPS!");
// 	}

// 	function E(f) {
// 		console.log("E");
// 		f();
// 		var f = F;
// 	}

// 	function A() {
// 		console.log("A");
// 		B();
// 	};

// 	var C;

// 	function G() {
// 		console.log("G");
// 		H();

// 		function H() {
// 			console.log("H");
// 			I();
// 		};
// 	}

// 	var D = d;

// 	function d() {
// 		console.log("D");
// 		E(F);
// 	}

// 	function I() {
// 		console.log("I");
// 		J();
// 		J();
// 	}

// 	function B() {
// 		console.log("B");
// 		C();
// 	};

// 	var F = function () {
// 		console.log("F");
// 		G();
// 	};

// 	var rest = "KLMNOPQRSTUVWXYZ".split(""); obj={};
// 	for (var i = 0; i < rest.length; i++) {
// 		(function (i) {
// 			// define the current function
// 			obj[rest[i]] = function () {
// 				console.log(rest[i]);
// 				if (i < (rest.length - 1)) {
// 					// TODO: call the next function
// 					obj[rest[i+1]]();
// 				}
// 			};
// 		})(i);
// 	}

// 	var J = function () {
// 		J = function () {
// 			console.log("J");
// 			obj.K();
// 		};
// 	};
  
// 	function C() {
// 		console.log("C");
// 		D();
// 	};
// 	return A;
// })()();
