// Generated by CoffeeScript 1.6.3
jQuery(function() {
  this.film_rolls = new FilmRoll({
    container: '#film_roll',
    scroll: false
  });
  return jQuery('a.more_link').click(function() {
    return jQuery('#more').slideToggle();
  });
});
