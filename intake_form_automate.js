function convertDate(raw_date) {
  return moment(rawDate, 'MM/DD/YYYY').format('YYYY-MM-DD');
}

function getStoryPath(rawUrl) {
  // Link that shows examples on url parser https://gist.github.com/jlong/2428561
  var urlParser = document.createElement('a');
  urlParser.href = rawUrl;
  return urlParser.pathname;
}

function getStoryHost(rawUrl) {
  var urlParser = document.createElement('a');
  urlParser.href = rawUrl;
  return urlParser.hostname;
}

function getCampaignType(campaign) {
  return campaign.split(' ')[0];
}

function setInputVal(selector, val) {
  var element = $(selector);
  element.value = val;
}

function setSelectVal(selector, val) {
  element.val(val);
}

function hasSlideShow(slideShow) {
  return slideShow.toLowerCase().trim() === 'yes'
}

function addMissingStr(hostName) {
  return hostName + ' w/ out slideshow';
}

function openLink(url) {
  window.open(url, '_blank');
}

function isGaStandalone(adHost) {
  var edgeCases = ['blog.beaumontenterprise.com', 'htvnativeadsolutions.com', 'blog.seattlepi.com'];
  return edgeCases.some(function(edgeCaseHost) {adHost === edgeCaseHost});
}

function getHostUrl(edgeCase, adHasSlide, storyHost) {
  if (edgeCase || !adHasSlide) {
    return storyHost;
  }
  return addMissingStr(storyHost)
}

function getGaId(url, adHasSlide) {
  var storyHost = getStoryHost(url);
  var adHasSlide = hasSlideShow(slideShow);
  var hasEdgeCase = isGaStandalone(storyHost);
  return getHostUrl(hasEdgeCase, adHasSlide);

}

function getInputVals(stringArr) {
  var inputValues = {
    clientName: {
      val: stringArr[4],
      selector: '#fsmd-cncf-name'
    },
    startDate: {
      val: convertDate(stringArr[9]),
      selector: '#fsmd-cncf-main_sd'
    },
    endDate: {
      val: convertDate(stringArr[10]),
      selector: '#fsmd-cncf-main_ed'
    },
    pulsePointId: {
      val: stringArr[22],
      selector: '#fsmd-cncf-pp_id'
    },
    nativoId: {
      val: stringArr[23],
      selector: '#fsmd-cncf-nativoId'
    },
    storyPath: {
      val: getStoryPath(stringArr[5]),
      selector: '#fsmd-cncf-story_p'
    }

  };
}

function getSelectVals(stringArr) {
  return {
    gaId: {
      val: getGaId(stringArr[5], stringArr[24]),
      selector: '#fsmd-cncf-ga_acc'
    },
    campaignType: {
      val: getCampaignType(stringArr[18]),
      selector: '#fsmd-cncf-ga_acc'
    }
  }
}

function setVals(values, callback) {
  Object.keys(values).forEach(function(key) {
    callback(values[key].selector, values[key].val)
  });
}

function main() {
  var rawString = $('.raw-input').val();
  var stringArr = rawString.split('\t');
  var inputVals = getInputVals(stringArr);
  var selectVals = getSelectVals(stringArr);

  setVals(inputVals, setInputVal);
  setVals(selectVals, setSelectVal);
}

$('#autoScriptBtn').click(main);
