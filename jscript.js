// Thomas Ly s3432552
function selectAdd(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	
	document.getElementById("adult").value = this.defaultValue;
	document.getElementById("concession").value = this.defaultValue;
	document.getElementById("child").value = this.defaultValue;
	document.getElementById("fcAdult").value = this.defaultValue;
	document.getElementById("fcChild").value = this.defaultValue;
	document.getElementById("beanbag").value = this.defaultValue;
	document.getElementById("price").value = "$" + 0;
	
	if(s1.value == "maxima"){
		var opArray = ["|","monday|Monday","tuesday|Tuesday","wednesday|Wednesday","thursday|Thursday","friday|Friday","saturday|Saturday","sunday|Sunday"];
		document.getElementById("fcAdult").disabled = false;
		document.getElementById("fcChild").disabled = false;
		document.getElementById("beanbag").disabled = false;
	}else if(s1.value == "rivola"){
		var opArray = ["|","wednesday|Wednesday","thursday|Thursday","friday|Friday","saturday|Saturday","sunday|Sunday"];
		document.getElementById("fcAdult").disabled = true;
		document.getElementById("fcChild").disabled = true;
		document.getElementById("beanbag").disabled = true;
	}
	
	for(var option in opArray){
		var pair = opArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
	
	
}

function selectAdd2(s1,s2,s3){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	var s3 = document.getElementById(s3);
	s3.innerHTML="";
	
	if(s1.value == "maxima" && (s2.value == "monday" || s2.value == "tuesday" || s2.value == "wednesday" || s2.value == "thursday" || s2.value == "friday")){
		var opArray = ["|","6|6pm","9|9pm"];
	}else if(s1.value == "maxima" && (s2.value == "saturday" || s2.value == "sunday")){
		var opArray = ["|","3|3pm","6|6pm","9|9pm"];
	}else if(s1.value == "rivola" && (s2.value == "wednesday" || s2.value == "thursday" || s2.value == "friday")){
		var opArray = ["|","7|7pm","12|12pm"];
	}else if(s1.value == "rivola" && (s2.value == "saturday" || s2.value == "sunday")){
		var opArray = ["|","4|4pm","7|7pm"];
	}
	
	for(var option in opArray){
		var pair = opArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s3.options.add(newOption);
	}	
}

function calculate(){
	var cinema = document.getElementById("cinema").value;
	var day = document.getElementById("day").value;
	var time = document.getElementById("time").value;
	var adult = document.getElementById("adult").value;
	var concession = document.getElementById("concession").value;
	var child = document.getElementById("child").value;
	var fcAdult = document.getElementById("fcAdult").value;
	var fcChild = document.getElementById("fcChild").value;
	var beanbag = document.getElementById("beanbag").value;
	
	var total = 0;
	
	if(cinema == "maxima" && (day == "monday" || day == "tuesday")){
		total = (12*adult)+(10*concession)+(8*child)+(25*fcAdult)+(20*fcChild)+(20*beanbag);
	}else if(cinema == "maxima" && (day == "wednesday" || day == "thursday" || day == "friday" || day == "saturday" || day == "sunday")){
		total = (18*adult)+(15*concession)+(12*child)+(30*fcAdult)+(25*fcChild)+(30*beanbag);
	}else if(cinema == "rivola" && time == "12" && (day == "wednesday" || day == "thursday" || day == "friday")){
		total = (12*adult)+(10*concession)+(8*child);
	}else if(cinema == "rivola" && time == "7" && (day == "wednesday" || day == "thursday" || day == "friday")){
		total = (18*adult)+(15*concession)+(12*child);
	}else if(cinema == "rivola" && (day == "saturday" || day == "sunday")){
		total = (18*adult)+(15*concession)+(12*child)
	}
	
	document.getElementById("price").value ="$" + total;
	
}