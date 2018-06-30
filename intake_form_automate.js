// Index from the intake form arr
// name: 4
// startDate: 9
// endDate: 10
// targetImpressions: 6
// pulsePointId: 22
// nativoId: 23
// storyPath: 5
// campaignType: 18
// slideShow: 24
// Link that shows examples on url parser https://gist.github.com/jlong/2428561

var rawString = ``;
var stringArr = rawString.split('\t');
var finalVals = [];

function convertDate(raw_date) {
  return moment(rawDate, 'MM/DD/YYYY').format('YYYY-MM-DD');
}

function getStoryPath(rawUrl) {
  var urlParser = document.createElement('a');
  urlParser.href = rawUrl;
  return urlParser.pathname;
}

function getStoryHost(rawUrl) {
  var urlParser = document.createElement('a');
  urlParser.href = rawUrl;
  return urlParser.hostname;
}

function setCampaignType(campaign) {
  const val = _getCampaignType(campaign[18]);
  $('select').val(val);
}

function _getCampaignType(campaign) {
  return campaign.split(' ')[0];
}

function setInputVals(arr) {
  $('.test').each((i, item) => item.value = arr[i]);
}
