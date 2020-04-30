var a = [];
function getInput(i){
	var select = document.getElementById('inputs').getElementsByTagName('div')[i];
	var selecting = select.getElementsByTagName('input')[0].value;
	a[i] = selecting;
}

function result(){
	console.log(a);
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
			console.log(total);
		}
		console.log(total);
		console.log(a.length);
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
