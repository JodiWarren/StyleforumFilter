javascript:!function(e){var%20t=function(e){var%20t=function(e){this.currency=%22(%22+e+%22)%22};t.prototype={nextPage:function(){window.marketplaceFiltered=!1,e('.PageJumpWidget:first%20a:contains(%22Next%20»%22)')[0].click()},currencyFilter:function(t){e(%22.thread%22).each(function(n,r){var%20i=e(r),a=i.children(%22:last-child%22).children(%22.price%22).children(%22.currency%22).html();a!==t%26%26i.remove()}),window.marketplaceFiltered=!0,0===e(%22.thread%22).length%26%26this.nextPage()},doFilter:function(){window.marketplaceFiltered===!0%3Fthis.nextPage():this.currencyFilter(this.currency)}};var%20n=new%20t(%22EURO%22);window.location.hash=%22GenericFilter%22,n.doFilter()},n=e%26%26e.fn%26%26parseFloat(e.fn.jquery)%3E=1.7;if(n)t(e);else{var%20r=document.createElement(%22script%22);r.src=%22//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,r.onload=r.onreadystatechange=function(){var%20e=this.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e||t(jQuery.noConflict())}}document.getElementsByTagName(%22head%22)[0].appendChild(r)}(window.jQuery);