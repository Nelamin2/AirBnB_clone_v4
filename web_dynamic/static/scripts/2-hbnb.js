$(document).ready(init);

const HOST = '0.0.0.0';

function init () {
  const amenityObj = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenitylist[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenitylist[$(this).attr('data-name')];
    }
    const names = Object.keys(amenitylist);
    $('.amenities h4').text(names.sort().join(', '));
  }
});

function apiStatus () {
  const API_URL = `http://${HOST}:5001/api/v1/status/`;
  $.get(API_URL, (data, textStatus) => {
    if (textStatus === 'success' && data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
}
