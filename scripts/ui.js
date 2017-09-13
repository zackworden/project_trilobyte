var genericMenu = {
	title : '',
	caption : '',
	buttons : [],
	footer : '',
	menuClass : '',
	menuId : '',
	actionMediator : '',

	draw : function () {
		// wrapper element
		var elem = document.createElement('div');
			elem.classList.add('menu');

		// title
		var titleElem = document.createElement('h1');
			titleElem.innerText = this.title;
		elem.appendChild( titleElem );

		// caption
		var captionElem = document.createElement('p');
			captionElem.innerText = this.caption;
		elem.appendChild( captionElem );

		// footer
		var footerElem = document.createElement('footer');
			footerElem.innerText = this.footer;
		elem.appendChild( footerElem );

		// buttons
		var counter = 0;
		var numOf = this.buttons.length;
		var thisButton;

		for ( counter = 0; counter < numOf; counter ++ )
		{
			thisButton = document.createElement('div');
			thisButton.classList.add('button');
			thisButton.innerText = this.buttons[counter].text;
			thisButton.addEventListener('click', this.listenForEvents.bind( this, this.buttons[counter].action ) );

			elem.appendChild( thisButton );
		}

		document.body.appendChild( elem );
	},
	listenForEvents : function ( actionLabel ) {
		this.actionMediator.listen( actionLabel );
	},
	init : function ( title, caption, buttonsAsArray, footerText ) {
		this.actionMediator = genericMenuMediator;

		this.title = title;
		this.caption = caption;
		this.buttons = buttonsAsArray;
		this.footerText = footerText;
	}
};

var mainMenu = {
	buttons : [
		{
			'text' : 'Test Button # 1',
			'action' : 'action_1'
		},
		{
			'text' : 'Test Button # 2',
			'action' : 'action_2'
		},
		{
			'text' : 'Quit',
			'action' : 'action_3'
		}
	],
};

var genericMenuMediator = {
	listen : function ( actionLabel ) {
		switch ( actionLabel )
		{
			default:
				console.log( 'unknown actionLabel: ' + actionLabel );
			break;
		}
	}
}

window.addEventListener('DOMContentLoaded', function(){
	//mainMenu.init();
	//mainMenu.draw();

	var myMenu = menuFactory.getMenuById('MainMenu');
	myMenu.draw();
});


var menuFactory = {
	getMenuById : function ( menuId ) {
		var menu = Object.create( genericMenu );;

		switch ( menuId )
		{
			case 'MainMenu':
				buttonArray = [
					{
						'text' : 'Test Button # 1',
						'action' : 'action_1'
					},
					{
						'text' : 'Test Button # 2',
						'action' : 'action_2'
					},
					{
						'text' : 'Quit',
						'action' : 'action_3'
					}
				];
				menu.init('MAIN MENU!!!', 'this is a main menu', buttonArray, 'Copyright 2017 Zack Worden');
			break;
			default:
				console.log('invalid ID given to menuFactory');
				return undefined;
			break;
		}

		return menu;
	}
};