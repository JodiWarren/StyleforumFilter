var StyleForumFilter = function ( currency )  {
	this.currency = '('+currency+')';
};

StyleForumFilter.prototype = {
	nextPage: function () {
		window.marketplaceFiltered = false;
		$('.PageJumpWidget:first a:contains("Next »")')[0].click();
	},

	currencyFilter : function(currency){
		$('.thread').each(function(index, element) {
			var thisElem = $(element);
			var thisCurrency = thisElem.children(":last-child").children(".price").children(".currency").html();
			if (thisCurrency !== currency) {
				thisElem.remove();
			}
		});
		window.marketplaceFiltered = true;
		if ( $('.thread').length === 0 ) {
			this.nextPage();
		}
	},

	doFilter: function(){
		if (window.marketplaceFiltered === true) {
			this.nextPage();
		} else {
			this.currencyFilter(this.currency);
		}
	}
};
var thisFilter = new StyleForumFilter('GBP');
window.location.hash = 'GenericFilter';
thisFilter.doFilter();