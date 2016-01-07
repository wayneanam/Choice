//Figure out how paragraphs work in Vue work later.
var br = document.createElement("br");
var counter = 0;

new Vue ({
	el:'#main-container',
	
	data: {
		contents: [
			{src: '', alt: '', description: ''},
		],
	},
	methods: {
		createChoice: function() {
			this.contents.push({src: '', alt: '', description: ''});
		},
		deleteSingle: function(index) {
			this.contents.splice(index, 1);
		}
	}
})

new Vue ({
	el: '#side-container',
	
	data: {
		time: ''
	},
	methods: {
		showTime: function() {
			if(counter < 0)
			{
				var today = new Date();
				
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				
				var time = h + ':' + m + ':' + s;
			}
			counter++;
			console.log(counter);
			return [counter, time];
		},
		save: function(id) {

		}
	}
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		