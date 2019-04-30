function alerttext(){
	var text = document.getElementById('searchtxt').value;
	if(text){
		alert(text)
	}
	else{
		alert('Please enter a text');
	}
}

function displaytxt(){
	var text = document.getElementById("searchtxt")
	console.log(text.value);
	if(text){
		document.getElementById("test").innerHTML = text.value;
	}
}

