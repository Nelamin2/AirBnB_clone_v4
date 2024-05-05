$(document).ready(init);

function init () {
  const amenitylist = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenitylist[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenitylist[$(this).attr('data-name')];
    }
    const names = Object.keys(amenitylist);
    $('.amenities h4').text(names.sort().join(', '));
  });
}
