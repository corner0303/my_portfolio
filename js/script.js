// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function () {
  // .headerクラスがついた要素の高さを取得
  let header = $(".header").innerHeight();
  // 移動速度を指定（ミリ秒）
  let speed = 400;
  let speedBottom = 300;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = $("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  // let position = $(target).offset().top;

  // トップからの距離からヘッダー分の高さを引く
  let position = $(target).offset().top - header;

  // let positionBottom = $(target).offset().top - header ; //普通のver
  let positionBottom = $(target).offset().top - header + -10; //若干下に落とすver

  // ターゲットの位置までspeedの速度で移動
  $("html, body").animate(//100px下に落として
    {
      scrollTop: positionBottom
    },
    speedBottom
  );

  $("html, body").animate(//上にあげる
    {
      scrollTop: position
    },
    speed
  );
  return false;
});


//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $("#header").height();
  $("body").css("margin-top", height);//10pxだけ余裕をもたせる
});


$(function () {
  $(window).scroll(function () {
    $('.is-trigger').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 50) {
        $(this).addClass('animation-appear-block');
        $(this).delay(550).queue(function () {
          $(this).find('.section-ttl').addClass('is-visible').dequeue();
          // $('#mainvisual-btn').addClass('is-visible').dequeue();

        })
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    $('.my-level-item').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var graphId = ($(this).find('.my-level-item-graph').attr('id'))
      if (scroll > position - windowHeight + 50) {
        //component
        $(this).find('.is-graph-component-trigger').addClass('my-level-item-graph-component');
        //graph
        $(this).find('.is-graph-trigger').addClass('my-level-itme-graph-part');

        if (graphId === "html-graph") {
          //component
          $(this).find('.is-graph-component-trigger').addClass('html-css-graph-component');
          //graph
          $(this).find('.is-graph-trigger').addClass('html-css-graph');
        }
        if (graphId === "js-graph") {
          //component
          $(this).find('.is-graph-component-trigger').addClass('js-graph-component');
          //graph
          $(this).find('.is-graph-trigger').addClass('JavaScript-graph');
        }
        if (graphId === "php-graph") {
          //component
          $(this).find('.is-graph-component-trigger').addClass('php-wordPress-graph-component');
          //graph
          $(this).find('.is-graph-trigger').addClass('php-wordPress-graph');
        }
      }
    });
  });
});

// scroll
$(window).scroll(function () {
  $(".advantage-item-ttl").each(function () {
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('-advantage-active'); //クラス「active」を与える
    }
  });
});
$(window).scroll(function () {
  $(".marker").each(function () {
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('-marker-active'); //クラス「active」を与える
    }
  });
});

$(window).scroll(function () {
  $(".marker-ttl").each(function () {
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight) { //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('-marker-active'); //クラス「active」を与える
    }
  });
});

/*https://stand-4u.com/web/javascript/slick.html*/
$('.slider').slick({
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '0%',
  autoplay: true,
  autoplaySpeed: 3000,
  waitForAnimate: true,
  dots: true,
});


$(function () {
  $('.question-item').click(function () {
    $(this).find('.question-item-inner').addClass('click');
    $(this).find('.question-item-inner').toggleClass('is-close');
    $(this).find('.question-item-inner').toggleClass('is-open');

    $(this).find('.question-item-a-wrap').slideToggle(200);

  })
});

$(document).ready(function () {
  $('.flip').click(function () {
    $('.trigger').toggleClass('flipped');
    $(this).find('.is-open').prop('disabled', true);
    return false;
  });
});

$(function () {
  $('.flip.is-close').click(function () {

    $('.front').find('.is-open').prop('disabled', false);
  })
});


$(function () {
  var appear = false;
  var pagetop = $('#page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '0px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-100px', //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

let $back = $('.contact-flip');
let $form = $('#is-form');
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理 
        $back.removeClass('flipped');
        $('#is-success').css('display', 'block');
        $('.is-open').css('display', 'none');
        $('.contact-flip').removeClass('trigger');
        $('.front').css('cursor', 'auto');

      },
      200: function () {
        //送信に失敗したときの処理 
        $back.removeClass('flipped');
        $('#is-error').css('display', 'block');
        $('.is-open').css('display', 'none');
        $('.front').css('cursor', 'auto');
        $('.contact-flip').removeClass('trigger');

      }
    }
  });
  return false;

});
$(function () {
  //formの入力確認
  let $submit = $("#contact-btn");//送信ボタンに指定されたIDを定義
  $("#is-form input, #is-form textarea").on("change", function () {//value値が変更されたら、その時点で発動
    if (
      $("#is-form input[name='entry.346804360']").val() !== "" &&//空白でない
      $("#is-form input[name='entry.346804360']").val() !== "" &&//空白でない
      $("#is-form input[type='email']").val() !== "" &&//空白でない
      $("#is-form textarea").val() !== ""//空白でない
    ) {//全てOKな場合
      //全て入力された時
      $submit.addClass("-active")//submitに-activeクラス追加
      $submit.prop("disabled", false)//disabledを消す
    } else {
      //されていないとき
      $submit.removeClass("-active")//submitに-activeクラス消去
      $submit.prop("disabled", true)//disabledを付与
    }

  })
});

window.onload = function() {
  document.getElementById("loading-text").innerText = "ローディング完了!";

  const main = document.getElementById('scroll-js');
  main.classList.add('animation-appear-block');
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

