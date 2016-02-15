var main = new Vue ({
	el:'#main-container',
	
	data: {
		contents: [
			{src: '', alt: '', description: ''},
		],
	},
	methods: {
		deleteSingle: function(index) {
			this.contents.splice(index, 1);
		},
	},
  ready: function() {
    if(localStorage.getItem("saveData")) {
      this.contents = JSON.parse(localStorage.getItem("saveData"))
    }
  }
})

var side = new Vue ({
	el: '#side-container',
	
	data: {
		lastSaved: ''
	},
	methods: {
    createChoice: function() {
			main.contents.push({src: '', alt: '', description: ''});
		},
		showTime: function() {
			var today = new Date();
			
			var h = today.getHours();
			var m = today.getMinutes();
			var s = today.getSeconds();
			
			var time = h + ':' + m + ':' + s;

			this.lastSaved = time;
		},
		canSave: function () {
			var returnVal = false;
			
			main.contents.forEach(function(val) {
				if(val.description != '' || val.src != '')
				{
					returnVal = true;
				}
			});
			return returnVal;
		},
		saveAll: function() {
			if(this.canSave() == true)
			{
				if(typeof(Storage) !== "undefined") {
          localStorage.setItem("saveData", JSON.stringify(main.contents));
      
				}
				else {
					console.log("Local storage not allowed");
				}
			}
		},
		deleteAll: function() {
			var validate = confirm("Are you sure you want to delete all ChoiceBoxes?");
			
			if(validate == true)
			{
				localStorage.clear();
				main.contents.splice(0, main.contents.length);
				this.createChoice();
				this.lastSaved = '';
			}
		}
	}
})