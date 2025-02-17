// make_jquery_01_result.js

(function($) {
  // jquery start =======

  $('body').html('<div id="wrap"></div>');
  var wrap = $('#wrap');
  wrap.append('<header id="headBox"></header>\
                     <section id="viewBox"></section>\
                     <article id="newsBox"></article>\
                     <article id="conBox"></article>\
                     <footer id="footBox"></footer>');


var wrapChild = wrap.children();
console.log(wrapChild);

var headBox = $(wrapChild[0]);
var viewBox = $('#viewBox');
var newsBox = $('#newsBox');
var conBox  = $('#conBox');
var footBox = $('#footBox');
// headBox.css({height:'10rem', backgroundColor:'#faa'});

headBox.html('<h1></h1>\
              <nav id="gnb">\
                <ul></ul>\
              </nav>\
              ');

var h1 = $('h1');
 $('h1').html('<a href="#">index page 이동</a>');

var h1Link = h1.children('a');
// h1Link.text('회사의 이름을 입력')
// h1Link.attr('href','../../index.html');
h1Link.text('회사의 이름을 입력').attr('href','../../index.html');

$('#gnb').prepend('<h2>global navigation</h2>');

var gnb = $('#gnb');
var gnbH2 = gnb.children('h2');
var gnbText = gnbH2.text();

gnbH2.html('<span></span>');
gnbH2.children('span').text(gnbText);
// gnbH2.attr('class','hidden');
gnbH2.addClass('hidden');

var gnbUl = gnb.children('ul');
// gnbUl.append('<li><a href="#">link_name_01</a></li>');
// gnbUl.append('<li><a href="#">link_name_02</a></li>');
// gnbUl.append('<li><a href="#">link_name_03</a></li>');
// gnbUl.append('<li><a href="#">link_name_04</a></li>');
// gnbUl.append('<li><a href="#">link_name_05</a></li>');

var i = 0, j, k;
for( ; i < 12; i+=1 ){
 k = i+1;
 if( k < 10 ){ j = '0'+k; }else{ j = k; }
 gnbUl.append('<li><a href="#">link_name_'+ j +'</a></li>');
}


$('#headBox').nextAll().html('<h2>이곳에는 해당영영의 이름이 들어감!</h2>');
//#viewBox===============


//01. 각영역(인디케이트, 버튼부, 광고배너영역부) 나누어서 틀 삽입
viewBox.append('<div class="view_btn"></div>');
viewBox.append('<div class="view_slide_btn"></div>');
viewBox.append('<div class="view_banner"></div>');

//02. 슬라이드 버튼부(이전, 이후내용보기버튼) 설정
$('.view_slide_btn').append('<button type="button">다음내용보기</button>');
$('.view_slide_btn').append('<button type="button">이전내용보기</button>');

//03. 광고내용 만들기
//03-1. 광고에 들어갈 이미지와 내용, 링크경로를 각각 설정하여 data화 처리
       //- 객체 형식의 내부에 들어가는 속성명과 속성값의 형태는 모두 쌍따옴표로 감싸서 처리(차후, json형태)
var viewContent = [
    {"img":"img_01.jpg", "title":"해당광고 제목1", "content":"무언가 내용1", "link":"naver.com"},
    {"img":"img_02.jpg", "title":"해당광고 제목2", "content":"무언가 내용2", "link":"daum.net"},
    {"img":"img_03.jpg", "title":"해당광고 제목3", "content":"무언가 내용3", "link":"google.com"},
    {"img":"img_04.jpg", "title":"해당광고 제목4", "content":"무언가 내용4", "link":"behance.net"},
  ];

//3-2. 광고 형식에 맞는 기초 틀 제작(셈플링)
var bannerSample = '<div id="link_01">\
          <h3>광고내용제목_01</h3>\
          <p>광고설명_01</p>\
          <div class="view_link"><a href="http://link_01.com">자세히보기</a></div>\
        </div>';

//3-3. 1차 간단하고 무식하게 집어넣기/2차 수정까지
var viewBanner = $('.view_banner');
viewBanner.append(bannerSample);
viewBanner.append(bannerSample);
viewBanner.append(bannerSample);
viewBanner.append(bannerSample);

var viewChild = viewBanner.children();
// 각각 id수정
viewChild.eq(0).attr({'id':'link_01'});
viewChild.eq(1).attr({'id':'link_02'});
viewChild.eq(2).attr({'id':'link_03'});
viewChild.eq(3).attr({'id':'link_04'});

// 제목의 값도 수정

viewChild.eq(0).find('h3'),text({'광고 제목_1'});
viewChild.eq(1).find('h3'),text({'광고 제목_2'});
viewChild.eq(2).find('h3'),text({'광고 제목_3'});
viewChild.eq(3).find('h3'),text({'광고 제목_4'});

//내용 값 수정

viewChild.eq(0).find('p'),text({'광고 내용을 작성_1'});
viewChild.eq(1).find('p'),text({'광고 내용을 작성_2'});
viewChild.eq(2).find('p'),text({'광고 내용을 작성_3'});
viewChild.eq(3).find('p'),text({'광고 내용을 작성_4'});

//




//#newsBox=============================================================
$('#newsBox').append('<div class="news_outer"></div>');
var newsBox = '<div class="news_01">\
               <div class="img"><span>뉴스이미지1</span></div>\
               <dl class="news_content">\
                 <dt>news_title</dt>\
                 <dd>news_content</dd>\
               </dl>\
               </div>';

var newsOuter = $('.news_outer');
// var imgUrl = "../../../img/news/";
var newsContent = [
    {className:'news_01', img:'#fa0', imgNarr:'a번째 이미지', tit:'title_01', con:'con_01'},
    {className:'news_02', img:'#fa1', imgNarr:'b번째 이미지', tit:'title_02', con:'con_02'},
    {className:'news_03', img:'#fa2', imgNarr:'c번째 이미지', tit:'title_03', con:'con_03'},
    {className:'news_04', img:'#fa3', imgNarr:'d번째 이미지', tit:'title_04', con:'con_04'},
    {className:'news_05', img:'#fa4', imgNarr:'e번째 이미지', tit:'title_05', con:'con_05'},
    {className:'news_06', img:'#fa5', imgNarr:'f번째 이미지', tit:'title_06', con:'con_06'},
    {className:'news_07', img:'#fa6', imgNarr:'g번째 이미지', tit:'title_07', con:'con_07'},
    {className:'news_08', img:'#fa7', imgNarr:'h번째 이미지', tit:'title_08', con:'con_08'},
    {className:'news_09', img:'#fa8', imgNarr:'i번째 이미지', tit:'title_09', con:'con_09'},
    {className:'news_10', img:'#fa9', imgNarr:'j번째 이미지', tit:'title_10', con:'con_10'},
    {className:'news_11', img:'#f10', imgNarr:'k번째 이미지', tit:'title_11', con:'con_11'},
    {className:'news_12', img:'#f11', imgNarr:'l번째 이미지', tit:'title_12', con:'con_12'},
    {className:'news_13', img:'#f12', imgNarr:'m번째 이미지', tit:'title_13', con:'con_13'}
    ];


//변수 newsContent의 n번째 해당하는 배열요소의 내부에 있는 객체속성명의 속성값을 가져와라.
 
var newsSelector, i = 0;
for(; i < newsContent.length; i+=1){
  newsOuter.append(newsBox); //newsBox가 복사만 됨.

  newsSelector = newsOuter.children('div').eq(i);  //여기서 children은 newsBox
  newsSelector.attr({'class':newsContent[i].className});
  newsSelector.find('.img').css({backgroundColor:newsContent[i].img});
  newsSelector.find('.img').children('span').text(newsContent[i].imgNarr);
  newsSelector.find('.news_content').children('dt').text(newsContent[i].tit);
  newsSelector.find('.news_content').children('dd').text(newsContent[i].con);
};



  // jquery end =========
})(jQuery);