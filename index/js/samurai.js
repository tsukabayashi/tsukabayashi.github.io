

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

var
cursor = $(".cursor"),
cWidth = 20, //カーソルの大きさ
mouseX = 0, //マウスのX座標
mouseY = 0; //マウスのY座標

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - (cWidth / 2),
    top: mouseY - (cWidth / 2)
  })
});


//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var menubarH = $('#menubar').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= menubarH){//menubarの高さ以上になったら
      $('#menubar').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
      $('#menubar').removeClass('fixed');//fixedというクラス名を除去
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
  $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false;//リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});
[].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });

    /**
 * サイドバー「最新コメント」アコーディオン
 */
$(function () {

  //画面幅を取得
  let windowSize = $(window).width();

  //レスポンシブ時の画面幅を設定
  const responsiveSize = 828;

  if (windowSize <= responsiveSize) {
  
      //Smartphone View
      $(".text:hover .fukidashi").addClass("active");
      $(".text:hover .fukidashi").on("click", function () {
          $(".text:hover .fukidashi").toggleClass("active");
      });

  } 

});




}