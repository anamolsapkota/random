$(document).ready(function(){
	$("#nameError").hide();
	$("#addressError").hide();
	$("#emailError").hide();
	$("#phoneError").hide();

	$("form").submit(function(){
		var name = $("#name").val();
		console.log(name);
		var address = $("#address").val();
		var email = $("#email").val();
		var phone = $("#phone").val();

		var nameRegex = /^\s*[a-zA-Z\s]+\s*$/;
		var addressRegex = /^\s*[a-zA-Z0-9,\s]+\s*$/;
		// var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		// var phoneRegex = /^98\d{8}$/;

		if(!nameRegex.test(name) || name==""){
			$("#nameError").show();
			return false;
		}
		else if(!addressRegex.test(name) || address==""){
			$("#addressError").show();
			return false;
		}
		// else if(!emailRegex.test(name) || email==""){
		// 	$("#emailError").show();
		// 	return false;
		// }
		// else if(!phoneRegex.test(name) || phone==""){
		// 	$("#phoneError").show();
		// 	return false;
		// }
		else{
			alert("Okay!")
			return false;
		}

	});
});