var Entity = {

	/*
	passes all messages off to relevant sub-objects. if functionality doesnt exist, the message goes ignored. if it does, then it can be hooked into a particular 
	message. this way, some entities might have, say, 'awakened' animation or sound, while others might not have one at all.
	*/
	entityMediator : {}, 

	// an object derived from AnimationManager, and which handles all animation details for this entity
	animator : {},
};

/*
an individual object, like an Entity, will have an object derived from this animationManager as a property. It stores the frames / animation logic, but is encapsulated
within the entity so that it can respond to messages from entityMediator (such as "die", so it would be able to play a death animation without any outside logic or
interference.)
*/
var AnimationManager = {
/*
contains tweening logic, playthrough of frames logic, looping, etc etc.
extended / constructed for each entity
*/ 
	// test animation for proof of concept
	test : function () {

		var counter = 0;
		var numOf = this.testFrames.length;
		var allFrames = this.testFrames;
		var currentFrame = this.testFrames[0];
		console.log( numOf );

		var idleAnimationTimer = window.setInterval( progressAnimation, 300);

		function progressAnimation ()
		{
			console.log( currentFrame );
			currentFrame = allFrames[counter];
			counter ++;

			if ( counter >= numOf )
			{
				window.clearInterval( idleAnimationTimer );

				console.log('timer cancelled');
			}

		}
	},

	testFrames : []
};

//http://via.placeholder.com/150x150?text=frameA


window.addEventListener( 'DOMContentLoaded', function(){
	AnimationManager.testFrames = ['frame1', 'frame2','frame3','frame4','frame5','frame6'];
	AnimationManager.test();
});