// I dont know if this will stay, but for now I like the idea of keeping some global vars to define things like animation steps / timing
var Globals = {
	animationTimingStep : 500
};

function SimpleAsyncForLoop( arrayToLoopThrough, functionToCall )
{
	var counter = 0;
	var numOf = arrayToLoopThrough.length;

	
	var interval = window.setInterval( DoStep, Globals.animationTimingStep );

	function DoStep ()
	{
		functionToCall( arrayToLoopThrough[counter] );
		
		counter ++;

		if ( counter >= numOf )
		{
			window.clearInterval( interval );
		}
	}
}