$(document).ready(function() {

	for (i = 1; i <= 100; i++) {
		console.log(i);
	
		if (i % 5 == 0 && i % 3 == 0) {
			$("#output").append("<div>" + "fizzbuzz" + "</div>")
		}
		else if (i % 5 == 0) {
			$("#output").append("<div>" + "buzz" + "</div")
		}
		else if (i % 3 == 0) {
			$("#output").append("<div>" + "fizz" + "</div>")
		}
		else {
			$("#output").append("<div>" + i + "</div>")
		}
	}
})
