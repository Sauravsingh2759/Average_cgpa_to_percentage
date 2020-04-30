var a = [];
function getInput(i){
	var select = document.getElementById('inputs');
	var selecting = select.getElementsByTagName('input')[i].value;
	if (selecting > 10) 
	{
		var message = document.getElementById('the-message');
		var danger = '<div class="alert alert-danger" role="alert"><strong>Error</strong> Your S.G.P.A Should not be Greater Than 10.</div>';
		message.innerHTML = danger;
	}
	else
	{
		a[i] = selecting;
	}
	
}

function result(){
	var total = 0;
	var message = document.getElementById('the-message');
	var danger = '<div class="alert alert-danger" role="alert"><strong>Error</strong> The Input Field Cannot be Empty.</div>';

	if (checker(a)) 
	{
		message.innerHTML = danger;
	}
	else
	{
		for (var i = 0; i < a.length; i++) 
		{	
			total += parseFloat(a[i]);
		}
		
		var average = total/a.length;
		var percentage = (average * 10) - 7.5;
		var success = '<div class="alert alert-success" role="alert">Your Average percentage is <strong>' + percentage.toFixed(2) + '%</strong></div>';
		message.innerHTML = success;
	}

}

function checker(p){
	var select = document.getElementById('inputs').childNodes.length;
	if (p.length < select) 
	{
		return true;

	}
	else
	{
		for (var i = 0; i < p.length; i++) 
			{	
			if(p[i] == ""){
				return true;
			}
		}
	}
}