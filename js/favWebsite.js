
/* Flash Cards */
		function showAns(id) {
			if(document.getElementById(id).name == 'HideAnswer1'){
			document.getElementById(id).name = 'ShowAnswer1';
			document.getElementById(id).style.display = 'none';
			}else{
			document.getElementById(id).name = 'HideAnswer1';
			document.getElementById(id).style.display = 'inline';
			}
		}
