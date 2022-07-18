function fwar(){
	var r1=document.querySelector("#r1").checked
	var r2=document.querySelector("#r2").checked
	var r3=document.querySelector("#r3").checked
	if(r1 || r2 ||r3){
		document.querySelector(".wone").style.visibility="hidden";
	}
	else{
		document.querySelector(".wone").style.visibility="visible";
	}
}
function fname(){
	var fn=document.querySelector("#field1").value;
	var x=/^[a-z,A-Z][a-z, ,A-Z]*$/
	if(x.test(fn)){
		document.querySelector(".wtwo").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wtwo").style.visibility="visible";
		return false;
	}
}

function lname(){
	var ln=document.querySelector("#field2").value;
	var x=/^[a-z,A-Z][a-z, ,A-Z]*$/
	if(x.test(ln)){
		document.querySelector(".wthree").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wthree").style.visibility="visible";
		return false;
	}
}
function email(){
	var em=document.querySelector("#field3").value;
	var x=/^.+@.+$/
	if(x.test(em)){
		document.querySelector(".wfour").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wfour").style.visibility="visible";
		return false;
	}
}

function phnum()
		{
			var e = document.querySelector("#select");
			var p=document.querySelector("#field5").value;
			var q=document.querySelector("#field4").value;
			var pus=/^\d{3}-\d{3}-\d{4}$/
			var pus1=/^[6-9]\d{9}$/
			if((pus.test(p))&(q=="+1"))
			{
				document.querySelector(".wseven").style.visibility="hidden"
				return true;
			}
			else if((pus1.test(p))&(q=="+91")){
				document.querySelector(".wseven").style.visibility="hidden"
				return true;
			}
			else
			{
				document.querySelector(".wseven").style.visibility="visible"
				return false;
			}
		}
function Citizenship(){
	var cs=document.querySelector("#field7").value;
	var n=/^[a-z,A-Z][a-z, ,A-Z]*$/
	if(n.test(cs)){
		document.querySelector(".wten").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wten").style.visibility="visible";
		return false;
	}
}
function passport(){
	var b1=document.querySelector("#button1").checked
	var b2=document.querySelector("#button2").checked
	var r3=document.querySelector("#r3").checked
	if(b1 || b2){
		document.querySelector(".wleven").style.visibility="hidden";
	}
	else{
		document.querySelector(".wleven").style.visibility="visible";
	}
}
function nextpage(){
	fwar();
	fname();
	lname();
	email();
	phnum();
	Citizenship();
	return passport();
}