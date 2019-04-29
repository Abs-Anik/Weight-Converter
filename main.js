
			document.getElementById('output').style.visibility = 'hidden';
			document.getElementById('ibsinput').addEventListener('input' , function(e){
			document.getElementById('output').style.visibility = 'visible';
			let Ibs = e.target.value;
			document.getElementById('gramsoutput').innerHTML = Ibs / 0.0022046;
			document.getElementById('kgoutput').innerHTML = Ibs / 2.2046;
			document.getElementById('ozoutput').innerHTML = Ibs * 16;
			});
		