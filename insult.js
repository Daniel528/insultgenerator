//mode: true = insult, false = compliment 
var mode = true;
function selectMode(c){
	mode = c;
	if(c){
		//insult state
		document.querySelector("#btn-compliment").setAttribute("class","");
		document.querySelector("#btn-insult").setAttribute("class","insult-active");

		document.querySelector("#button").setAttribute("class","generateButton generateButton-insult red");

		document.querySelector("#title").innerHTML = "Insult Generator";
	} else{
		//compliment state
		document.querySelector("#btn-compliment").setAttribute("class","compliment-active");
		document.querySelector("#btn-insult").setAttribute("class","");

		document.querySelector("#button").setAttribute("class","generateButton  generateButton-compliment green");

		document.querySelector("#title").innerHTML = "Compliment Generator";
	}
	generateTagLine();
}


function generatePhrase(){
	console.log(mode);
	if (mode) {
		var part1 = insult1[Math.floor(Math.random()*insult1.length)];
		var part2 = insult2[Math.floor(Math.random()*insult2.length)];
		var part3 = insult3[Math.floor(Math.random()*insult3.length)];
	} else{
		var part1 = compliment1[Math.floor(Math.random()*compliment1.length)];
		var part2 = compliment2[Math.floor(Math.random()*compliment2.length)];
		var part3 = compliment3[Math.floor(Math.random()*compliment3.length)];
	}
	document.querySelector("#phrase").innerHTML = part1 + " " + part2 + " " + part3; 

}

function copyPhrase(){
		window.getSelection().removeAllRanges(); 
		
		var phraseText = document.querySelector("#phrase");
		var range = document.createRange();
		range.selectNode(phraseText);
		window.getSelection().addRange(range);

		try{
			var successful = document.execCommand('copy');
			var msg = successful ?  'successful' : 'unsuccessful';  
			console.log('Copy Insult command was ' + msg);  
		}  catch(err) {  
   			console.log('Oops, unable to copy');  
  		}
  		window.getSelection().removeAllRanges();  
}


function generateTagLine(){
	if (mode){
		var tagLine = insultTagLineArray[Math.floor(Math.random()*insultTagLineArray.length)];
	} else{
		var tagLine = complimentTagLineArray[Math.floor(Math.random()*complimentTagLineArray.length)];
	}
	
 	document.querySelector("#tagLine").innerHTML = tagLine;
}

document.addEventListener('DOMContentLoaded', function() {
    
	generateTagLine();

    var button = document.querySelector('#button');
    // onClick's logic below:
    button.addEventListener('click', function() {
        generatePhrase();
    });

	var copyButton = document.querySelector("#copybutton");
	copyButton.addEventListener('click', function(){
		copyPhrase();
	});  

	document.querySelector("#btn-insult").addEventListener('click',function(){
		selectMode(true);
	});

	document.querySelector("#btn-compliment").addEventListener('click',function(){
		selectMode(false);
	});

});

