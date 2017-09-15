
var canvasManager = {
	canvasElem : '',
	context : '',

	init : function () {
		this.canvasElem = document.createElement('canvas');
		this.canvasElem.classList.add('mainCanvas');
		this.canvasElem.setAttribute('width','640');
		this.canvasElem.setAttribute('height','480');
		document.body.appendChild( this.canvasElem );
		this.context = this.canvasElem.getContext('2d');
	},

	test : function ( testMap ) {

		var width = testMap.dimensions.x;
		var height = testMap.dimensions.y;
		console.log( testMap );

		var viewPort = {
			width : 50,
			height : 25,
			center_x : 50,
			center_y : 50
		}

		this.test_drawViewport( viewPort, testMap );
	},

	test_drawViewport : function ( viewPortDimensions, gameworldDimensions ) {
		
		var center = viewPortDimensions.center;

		var viewPort_x = viewPortDimensions.center_x - (viewPortDimensions.width / 2);
		var viewPort_y = viewPortDimensions.center_y - (viewPortDimensions.height / 2);
		var viewPort_width = viewPortDimensions.width;
		var viewPort_height = viewPortDimensions.height;

		this.context.rect(viewPort_x, viewPort_y, viewPort_width, viewPort_height);
		this.context.stroke();
	}

};

window.addEventListener('DOMContentLoaded', function(){
	canvasManager.init();

	//canvasManager.test( currentLevel );
	// settings
});