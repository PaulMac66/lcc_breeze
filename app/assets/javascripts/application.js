//= require jquery.validate
//= require handlebars
//= require breeze-settings
//= require breeze-googlemaps
//= require breeze-searchresults
//= require breeze-datepicker
//= require breeze-subscribetonewsletter
//= require date-range-filter
//= require keyword-filter
//= require news-archive-filter



      jQuery(document).ready(function () {
      jQuery('ul.date-list').each(function () {
      var LiN = jQuery(this).find('li').length;
      if (LiN > 3) {
      jQuery('li', this).eq(2).nextAll().hide().addClass('toggleable');
      jQuery(this).append('<a class="plusMinus">Show more...</a>');
      }
      });
      jQuery('ul.date-list').on('click', '.plusMinus', function () {
      if (jQuery(this).hasClass('active')) {
      jQuery(this).text('Show more...').removeClass('active');
      } else {
      jQuery(this).text('Show less...').addClass('active');
      }
      jQuery(this).siblings('li.toggleable').slideToggle();
      });
      });
 