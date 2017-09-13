

var soundPlayer = {

	// play audio file, by path
	play : function ( someAudioFile ) {
		var audio = new Audio( someAudioFile );
		audio.play();
	},

	// init function, which needs to be run before soundPlayer can do its thing.
	init : function ( globalSettingsObj ) {
		
	}
};

var musicPlayer = {

	currentMusic : '',

	// play audio file, by path
	play : function ( someAudioFile ) {
		this.currentMusic = new Audio( someAudioFile );
		this.currentMusic.play();
	},

	// stop currently playing audio file
	stop : function () {
		if ( this.currentMusic.pause ) {
			this.currentMusic.pause();
		}
	},

	// fade out, then stop currently playing audio file
	fadeStop : function () {
		var fadeStep = .1;
		var currentMusic = this.currentMusic;
		var interval = window.setInterval( reduceVolume.bind( musicPlayer ), 1000 );

		function reduceVolume() {
			if ( currentMusic.volume > fadeStep ) {
				currentMusic.volume -= fadeStep;
			}
			else {
				window.clearInterval( interval );
				this.stop();
			}
		}
	},

	// start playing audio file and fade in volume
	fadePlay : function ( someAudioFile ) {
		this.currentMusic = new Audio( someAudioFile );
		this.currentMusic.volume = 0;
		this.currentMusic.play();

		var fadeStep = .1;
		var currentMusic = this.currentMusic;
		var interval = window.setInterval( increaseVolume.bind( musicPlayer ), 1000 );

		function increaseVolume() {
			if ( currentMusic.volume < 1 - fadeStep ) {
				currentMusic.volume += fadeStep;
			}
			else {
				currentMusic.volume = 1;
				window.clearInterval( interval );
			}
		}
	},

	// init function, which needs to be run before soundPlayer can do its thing.
	init : function ( globalSettingsObj ) {
		
	}

};



window.addEventListener('DOMContentLoaded', function(){
	
	// settings

});