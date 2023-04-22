$(init);

// es5
var Component = {
 fps: 32,
 dt: null,

 data: null,
 updateHandler: [],
 onResize: [],

 onLoad: function() {
  this.data = $('#func').attr('data');
  this.dt = 1000 / this.fps;
  this.common();
  this.setup();
  this.scrollTop();
  // update
  this.update();
  window.setInterval(this.update.bind(this), this.dt);
 },

 common: function() {
  var paddingTB = 5;
  var paddingLR = 20;
  $('#navigation .item').hover(function() {
   var $extend = $(this).find('.extend');
   if ($extend.length > 0 && $extend.find('a').length > 0) {
    var $children = $extend.find('a');
    var childrenCount = $extend.find('a').length;
    var childrenMaxWidth = 0;
    var paddingLR = 20;
    $children.each(function() {
     var _width = $extend.width();
     if (_width > childrenMaxWidth) {
      childrenMaxWidth = _width;
     }
    });
    $extend.find('a').width(childrenMaxWidth);
    $extend.css({
     'padding': paddingTB + 'px ' + paddingLR + 'px',
     'margin-left': -(childrenMaxWidth + paddingLR * 2) / 2 + 'px',
     'height': childrenCount * $children.eq(0).height() + 'px'
    });
    $extend.addClass('active');
   }
  }, function() {
   var $extend = $(this).find('.extend');
   if ($extend.length > 0 && $extend.find('a').length > 0) {
    $extend.removeClass('active');
    $extend.css({
     'padding': '0px ' + paddingLR + 'px',
     'height': '0px'
    });
   }
  });

  $('#navigation .extend a').off('click').on('click', function(e) {
   e.preventDefault();
   e.stopPropagation();

   var link = $(this).attr('href');
   // var http = link.substr(0, 4) === 'http';
   var anchor = link.split('#');
   if (anchor.length === 2) {
    var selector = $('#' + anchor[1]);
    if (selector.length > 0) {
     $('html,body').animate({
      scrollTop: selector.offset().top - 100
     }, 333);
    }
   } else {
    window.location.href = link;
   }
  });

  // $('#header').append('<a href="javascript:;" class="openNav" id="openNav"></a>');
  $('#openNav').off('click').on('click', function() {
   $('#header').toggleClass('active');
  });

  var _resizing = false;
  var _resizeTO = null;
  $(window).resize(function() {
   if (_resizing && _resizeTO != null) {
    _resizing = false;
    return;
   }
   _resizing = true;
   if (this.onResize.length > 0) {
    for (var i = 0; i < this.onResize.length; i++) {
     var handler = this.onResize[i];
     if (typeof handler === 'function') {
      handler.bind(this)();
     }
    }
   }
   _resizeTO = window.setTimeout(function() {
    _resizing = false;
    window.clearTimeout(_resizeTO);
    _resizeTO = null;
   }, this.dt);
  }.bind(this));

  this.updateHandler.push(function() {
   if ($('.page_banner').length === 1) {
    var $image = $('.page_banner .itemImage');
    if ($image.length === 0) {
     return;
    }
    $image.removeAttr('style');
    if ($image.width() < $(window).width()) {
     $image.css({
      'width': '100%',
      'height': 'auto',
      'position': 'absolute',
      'top': '50%',
      'left': '0'
     });
     var $imageHeight = $image.height();
     $image.css('margin-top', '-' + $imageHeight / 2 + 'px');
    } else {
     $image.css({
      'position': 'absolute',
      'top': '0',
      'left': '50%',
      'margin-left': '-' + $image.width() / 2 + 'px'
     });
    }
   }
  });
 },

 commonFirstBlockInContainer: function() {
  this.updateHandler.push(function() {
   // blocks
   var $b0 = $('.container .block.b0');
   // b0
   var $b0_image = $b0.find('.itemImage');
   var $b0_text = $b0.find('.text');
   var b0_text_pd = 25 * 2;
   var $b0_t = $b0.find('.t');
   var $b0_c = $b0.find('.c');

   $b0_c.height($b0_image.height() - b0_text_pd - $b0_t.outerHeight());
  });

  $('.container .block.b0 .c').addClass('scrollbar-macosx');
  $('.container .block.b0 .c').scrollbar();
 },

 setup: function() {
  if (this.data === 'index') {
   this.index();
  } else if (this.data === 'guanyu') {
   this.guanyu();
  } else if (this.data === 'jiaru') {
   this.jiaru();
  } else if (this.data === 'meiti') {
   this.meiti();
  }

  if (this.data === 'guanyu' || this.data === 'jiaru' || this.data === 'shehui' || this.data === 'danggong' || this.data ===
   'duoyuan') {
   this.commonFirstBlockInContainer();
  }

  if (this.data === 'index') {
   this.headerStyle();
  }
 },

 headerStyle: function() {
  $('html').addClass('style');
  $(window).scroll(function() {
   if ($('.page_banner').length > 0 || $('#banner').length > 0) {
    var targetHeight = $('.page_banner').length > 0 ? $('.page_banner').height() : $('#banner').height() * 0.33;
    if ($(this).scrollTop() > targetHeight) {
     $('#header').addClass('black');
    } else {
     $('#header').removeClass('black');
    }
   }
  });
 },

 // scrollTop: function() {
 //  $('body').append('<a href="javascript:;" class="scrollTop" id="scrollTop"></a>');
 //  $(window).scroll(function() {
 //   $('#scrollTop').css('display', $(this).scrollTop() > $(window).height() * 0.5 ? 'block' : 'none');
 //  });
 //  $('#scrollTop').off('click').on('click', function() {
 //   $('html,body').animate({
 //    scrollTop: 0 // $('selector').offset().top
 //   }, 667);
 //  });
 // },

 index: function() {
  var banner = new Swiper('#banner', {
   direction: 'horizontal',
   autoplay: {
    delay: 5000
   },
   // pagination: {
   //  el: '#banner .pagination'
   // },
   navigation: {
    nextEl: '#banner .next',
    prevEl: '#banner .prev'
   },
   slidesPerView: 1,
   spaceBetween: 0,
   loop: false,
  });

  $('#hb_news .selector .item').off('click').on('click', function() {
   var index = $(this).index();
   $('#hb_news .selector .item').removeClass('active').eq(index).addClass('active');
   $('#hb_news .list .block').removeClass('active').eq(index).addClass('active');
  }).eq(0).click();
 },

 guanyu: function() {
  var milepostDT = 0;
  var milepostTimeout = 5000;
  var milepostPerView = $(window).width() > 768 ? 6 : 2;
  var milepostIndex = 0;
  var milepostReset = false;
  var milepostClicked = false;
  var milepost = new Swiper('#milepost', {
   direction: 'horizontal',
   // autoplay: {
   //  delay: milepostTimeout
   // },
   // pagination: {
   //  el: '#banner .pagination'
   // },
   navigation: {
    nextEl: '.milepostArrows .next',
    prevEl: '.milepostArrows .prev'
   },
   slidesPerView: milepostPerView,
   spaceBetween: 100,
   loop: false, // must be false
  });

  var milepostOnClick = function(t, tx) {
   var $b1 = $('#guanyu .block.b1');
   var $itemText = $b1.find('.c .itemText');
   var $itemTextEx = $b1.find('.c .itemTextEx');

   milepostClicked = true;

   $itemText.addClass('moveAway');
   $itemTextEx.addClass('moveAway');

   window.setTimeout(function() {
    $itemText.text(t);
    $itemTextEx.html(tx);
    $itemText.removeClass('moveAway');
    $itemTextEx.removeClass('moveAway');
    window.setTimeout(function() {
     milepostClicked = false;
    }, 500);
   }, 500);
  };

  $('#milepost .item').off('click').on('click', function() {
   if (milepostClicked) {
    return;
   }
   var t = $(this).attr('title');
   var tx = $(this).attr('content');
   milepostIndex = $(this).index();
   milepostDT = 0;

   $('#milepost .item').removeClass('active').eq(milepostIndex).addClass('active');
   milepostOnClick(t, tx);
  }).eq(0).click();

  this.updateHandler.push(function() {
   milepostDT += this.dt;
   if (milepostDT > milepostTimeout) {
    milepostDT -= milepostTimeout;
    var index = milepostIndex + 1 === $('#milepost .item').length ? 0 : milepostIndex + 1;
    if (milepostReset) {
     milepost.slideTo(0);
     milepostReset = false;
    } else {
     if (index + 1 === $('#milepost .item').length) {
      milepostReset = true;
     } else {
      milepost.slideNext();
     }
    }
    $('#milepost .item').eq(index).click();
   }
  });

  this.onResize.push(function() {
   if (milepost != null) {
    milepost.params.slidesPerView = $(window).width() > 768 ? 6 : 2;
    milepost.update();
   }
  });

  var blocks = [
   $('#guanyu .block.b2'),
   // $('#guanyu .block.b5'),
  ];

  for (var i = 0; i < blocks.length; i++) {
   var $block = blocks[i];
   var $c = $block.find('.c');

   $c.addClass('scrollbar-macosx');
   $c.scrollbar();
  }

  this.updateHandler.push(function() {
   // blocks
   var $b2 = $('#guanyu .block.b2');
   // b2
   var $b2_text = $b2.find('.text');
   var $b2_image = $b2.find('.itemImage');
   var b2_text_pd = 25 * 2;
   var $b2_t = $b2.find('.t');
   var $b2_c = $b2.find('.c');

   $b2_c.height($b2_image.height() - b2_text_pd - $b2_t.outerHeight());
  });

  var b4_win_480 = function() {
   $('#guanyu .block.b4 .c .scroll').remove();
   if ($(window).width() <= 480) {
    var $clone = $('#guanyu .block.b4 .c').clone();
    $('#guanyu .block.b4 .c').append('<div class="scroll"></div>');
    $('#guanyu .block.b4 .c .scroll').append($clone.html());
   }
  };

  b4_win_480();
  this.onResize.push(b4_win_480);

  // setMap('map', {
  //  lng: 114.057131,
  //  lat: 22.534121
  // }, {
  //  name: '深圳前海汇元财富管理有限公司',
  //  desc: '地址：深圳市福田区益田路4068号卓越时代广场4906<br>电话：0755-82777613'
  // });
 },

 jiaru: function() {
  $('#jobList .item').each(function() {
   $(this).attr('ori_height', $(this).height());
  });
  $('#jobList .item .option').off('click').on('click', function() {
   var content_height = $(this).next('.content').outerHeight();
   var $item = $(this).parent();
   if ($item.hasClass('active')) {
    $item.height($item.attr('ori_height')).removeClass('active');
   } else {
    $item.height(content_height + ~~$item.attr('ori_height')).addClass('active');
   }
  });
 },

 meiti: function() {
  // $('.meiti .extend a').off('click').on('click', function() {
  //  var index = $(this).index();
  //  $('.meiti .extend a').removeClass('active').eq(index).addClass('active');
  //  $('.meiti .list .panel').removeClass('active').eq(index).addClass('active');
  // }).eq(0).click();
 },

 update: function() {
  for (var i = 0; i < this.updateHandler.length; i++) {
   var handler = this.updateHandler[i];
   if (typeof handler === 'function') {
    handler.bind(this)();
   }
  }
 }
};

function setMap(target, position, tips) {
 if (target == null) {
  target = 'mapContainer';
 }
 var infoWindow, map, level = 18,
  center = {
   lng: position.lng,
   lat: position.lat
  },
  features = [{
   type: 'Marker',
   name: tips.name,
   desc: tips.desc,
   color: 'red',
   icon: 'cir ',
   offset: {
    x: -9,
    y: -31
   },
   lnglat: {
    lng: position.lng,
    lat: position.lat
   }
  }],
  _feature;

 function loadFeatures() {
  for (var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++) {
   data = features[i];
   switch (data.type) {
    case 'Marker':
     feature = new AMap.Marker({
      map: map,
      position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
      zIndex: 3,
      extData: data,
      offset: new AMap.Pixel(data.offset.x, data.offset.y),
      title: data.name,
      content: '<div class="icon icon-' + data.icon + 'icon-' + data.icon + '-' + data.color + '"></div>'
     });
     break;
    case 'Polyline':
     for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
      path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
     }
     feature = new AMap.Polyline({
      map: map,
      path: path,
      extData: data,
      zIndex: 2,
      strokeWeight: data.strokeWeight,
      strokeColor: data.strokeColor,
      strokeOpacity: data.strokeOpacity
     });
     break;
    case 'Polygon':
     for (j = 0, jl = data.lnglat.length, path = []; j < jl; j++) {
      path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
     }
     feature = new AMap.Polygon({
      map: map,
      path: path,
      extData: data,
      zIndex: 1,
      strokeWeight: data.strokeWeight,
      strokeColor: data.strokeColor,
      strokeOpacity: data.strokeOpacity,
      fillColor: data.fillColor,
      fillOpacity: data.fillOpacity
     });
     break;
    default:
     feature = null;
   }
   if (feature) {
    // AMap.event.addListener(feature, 'click', mapFeatureClick);
    _feature = feature;
   }
  }
 }

 function mapFeatureClick(e) {
  if (!infoWindow) {
   infoWindow = new AMap.InfoWindow({
    autoMove: true
   });
  }
  var extData = e.target.getExtData();
  infoWindow.setContent('<h5>' + extData.name + '</h5><div>' + extData.desc + '</div>');
  infoWindow.open(map, e.lnglat);
 }

 map = new AMap.Map(target, {
  center: new AMap.LngLat(center.lng, center.lat),
  level: level
 });

 loadFeatures();

 map.on('complete', function() {
  //   map.plugin(['AMap.ToolBar', 'AMap.OverView', 'AMap.Scale'], function() {
  //    map.addControl(new AMap.ToolBar);
  //    map.addControl(new AMap.OverView({
  //     isOpen: true
  //    }));
  //    map.addControl(new AMap.Scale);
  //   });
  if (_feature) {
   if (!infoWindow) {
    infoWindow = new AMap.InfoWindow({
     autoMove: true
    });
   }
   infoWindow.setContent('<h5>' + tips.name + '</h5><div>' + tips.desc + '</div>');
   infoWindow.open(map, new AMap.LngLat(position.lng, position.lat));
  }
 });
}

function init() {
 Component.onLoad();
}
