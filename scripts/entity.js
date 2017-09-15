/*
factory pattern for Entities, where they can be created properly and pulled by an ID
*/
/*
Entity Factory is the central interface for creating new entities. An ID is passed, and any custom creation, init-ing, or other 
things that need to be done are done exclusively here.
*/
var EntityFactory = {
	createEntity : function ( entityId ) {
		var theEntity = undefined;

		switch ( entityId )
		{
			case 0:
				theEntity = Object.create( Entity );
				theEntity.init( 'Test Entity', entityId );
			break;
			case 1:
			break;
		}

		return theEntity;
	}
};


// this is the base object, which will be any dynamic object on the map (npc,pc,object,interactable)
var Entity = {

	id : undefined,
	label : 'unnamed entity',
	/*
	passes all messages off to relevant sub-objects. if functionality doesnt exist, the message goes ignored. if it does, then it can be hooked into a particular 
	message. this way, some entities might have, say, 'awakened' animation or sound, while others might not have one at all.
	*/
	entityMediator : {}, 

	// an object derived from AnimationManager, and which handles all animation details for this entity
	animationManager : {},

	// an object derived from AudioManager, which handles all of the audio details for this entity
	audioManager : {},

	// accept any outside world messages and pass them to the appropriate mediator
	acceptMessage : function ( message ) {
		// for now, there is just this one. 
		/*
		different mediators. maybe message has a structure of RecipientType (animation, audio, whatever else) and MessageContent ( the actual data being passed? )
		*/
		this.entityMediator.acceptMessage( message );
	},

	init : function ( entityLabel, entityId ) {
		this.entityMediator = Object.create( EntityMediator );
		this.animationManager = Object.create( AnimationManager );
		this.label = entityLabel;
		this.id = entityId;
	}
};

var EntityMediator = {
	acceptMessage : function ( message ) {
		
		switch ( message )
		{
			case '':
			break;
			default:
			break;
		}

		console.log('entity mediator received message ');
		console.log( message );
	}
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
	// placeholder iamge URL for any testing
	// http://via.placeholder.com/150x150?text=frameA

	// the canvas context
	canvasContext : '',

	// the current frame
	currentFrame : '',

	// all frames should be in a dictionary like this. 
	frames : {
		'testFrames' : ['http://via.placeholder.com/150x150?text=testFrameA','http://via.placeholder.com/150x150?text=testFrameB','http://via.placeholder.com/150x150?text=testFrameC','http://via.placeholder.com/150x150?text=testFrameD'],
		'moreTestFrames' : ['http://via.placeholder.com/150x150?text=anotherFrameA','http://via.placeholder.com/150x150?text=anotherFrameB','http://via.placeholder.com/150x150?text=anotherFrameC','http://via.placeholder.com/150x150?text=anotherFrameD','http://via.placeholder.com/150x150?text=anotherFrameE']
	},

	// an array of test animation frames
	testFrames : [],

	// draws a single frame
	drawFrame : function ( animationFrame ) {
		// TODO: change this from creating DOM elements to actual canvas frames

		// undraw previous
		if ( this.currentFrame != '' )
		{
			this.currentFrame.parentNode.removeChild( this.currentFrame );
			console.log('removing old image');
		}

		// draw current
		this.currentFrame = new Image();
		this.currentFrame.src = animationFrame;
		document.body.appendChild( this.currentFrame );
		console.log('drawing new image');
	},

	// given an array of frames, play any animation
	doAnimation : function ( arrayOfAnimationFrames ) {
		SimpleAsyncForLoop( arrayOfAnimationFrames, this.drawFrame.bind( this ) );
	},


	init : function ( canvasContext ) {
		/*
		will probably need the canvas context passed to it on entity creation
		*/
		this.canvasContext = canvasContext;
	}
};

//var EntityAnimationManager = Object.create( );


window.addEventListener( 'DOMContentLoaded', function(){

	//AnimationManager.drawFrame('http://via.placeholder.com/150x150?text=frameA');

	//AnimationManager.doAnimation( AnimationManager.frames['testFrames'] );
	AnimationManager.doAnimation( AnimationManager.frames['moreTestFrames'] );

	//window.setTimeout( AnimationManager.drawFrame.bind( AnimationManager, 'http://via.placeholder.com/150x150?text=frameB' ), 1000 );


	/*
	var myEntity = EntityFactory.createEntity( 0 );
	myEntity.acceptMessage( 'fart' );
	*/
	
	myEntity = EntityFactory.createEntity( 0 );
	
	//myEntity.acceptMessage( 'fart' );

});

var myEntity;