var x = false;

(function($){
  $(function(){

    
    $('#hide-show-profile').on('click',function(){
    	$('#profile').slideToggle(500);
    	if(x === false)
    	{
    		$('#hide-show-profile .material-icons').html('expand_less')
    		//$('html, body').animate({scrollTop:$(this).css("top")},500);
    		if($('html, body').scrollTop() < 300)
    		{
    			$('html, body').animate({scrollTop:400},500);
    		}
    		x = true;

    	}
    	else
    	{
			$('#hide-show-profile .material-icons').html('expand_more')
			console.log($('html, body').scrollTop());
			x= false
		}

    });

    $(window).scroll(function(){
    	if($('html, body').scrollTop() > 500)
    	{
			$('#bar1').animate({
				height:'159px',top:'156px'
			},1000);
			$('#skill1').animate({
				content:'100'
			},1000);


			$('#bar2').animate({
				height:'225px',top:'90px'
			},1000);
			$('#skill1').animate({
				content:'100'
			},1000);


			$('#bar3').animate({
				height:'185px',top:'130px'
			},1000);
			$('#skill1').animate({
				content:'100'
			},1000);


			$('#bar4').animate({
				height:'132px',top:'183px'
			},1000);
			$('#skill1').animate({
				content:'100'
			},1000);

			$('#bar5').animate({
				height:'26px',top:'289px'
			},1000);
			$('#skill1').animate({
				content:'100'
			},1000);
		}
		else{
			console.log("heheh")
		}
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

/*function openProfile(){
	if(document.getElementById('profile').style.display==='none')
		document.getElementById('profile').style.display='block';
	else
		document.getElementById('profile').style.display='none';
}
*/


var boxExperience = document.getElementsByClassName('experience');
for(var i=0;i<boxExperience.length;i++)
{
	boxExperience[i].addEventListener('mouseenter',runEvent);
	boxExperience[i].addEventListener('mouseleave',runEvent);

}

function runEvent(e){
	console.log('EVENT TYPE: '+e.type);
	if(e.type === 'mouseenter')
		e.target.style.boxShadow = '0px 10px 5px grey';
	else
		e.target.style.boxShadow = 'none';

}