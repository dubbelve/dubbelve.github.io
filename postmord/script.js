var app = new Vue({
	el: '#app',
	data: {
		message: 'Ingen post idag!',
		today: new Date()
	},
	created: function () {
		const self = this;

		self.isPost();
	},
	methods: {
		isPost: function() {
			let weeks = this.weeksBetween(new Date(2020, 02, 01), this.today);
			let daynumber = this.today.getDay();

			console.log(weeks);

			if (daynumber < 6) {
				if (this.isEven(weeks)) {
					if (!this.isEven(daynumber)) {
						this.message = 'Ut och kolla postlådan för fan!'
					}
				} else {
					if (this.isEven(daynumber)) {
						this.message = 'Nu jävlar i helvete!'
					}
				}
			} else {
				this.message = 'Det är helg...'
			}
		},
		isEven: function(value) {
			if (value%2 == 0)
				return true;
			else
				return false;
		},
		weeksBetween: function(d1, d2) {
			return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
		}
	}
})