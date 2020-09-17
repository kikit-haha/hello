$(document).ready(function () {
  // 슬라이드 너비100%
  var docWidth = $(document).width();
  console.log(docWidth);
  $("#slide > div").width(docWidth);
  // 메인 슬라이드
  $("#slide>div:last-child").insertBefore("#slide>div:first-child");
  $("#slide").css({"margin-left": -docWidth});
  function moveLeft() {
    $("#slide").animate({"margin-left": -(docWidth * 2)}, 1000, "easeInOutQuart", function () {
      $("#slide>div:first-child").insertAfter("#slide>div:last-child");
      $("#slide").css("margin-left", -docWidth);
    });
  }
  function moveRight() {
    $("#slide").animate({"margin-left": "0px"}, 1000, "easeInOutQuart", function () {
      $("#slide>div:last-child").insertBefore("#slide>div:first-child");
      $("#slide").css("margin-left", -docWidth);
    });
  }
  $("i.fa-angle-left")
    .stop()
    .click(function () {
      moveLeft();
    });
  $("i.fa-angle-right")
    .stop()
    .click(function () {
      moveRight();
    });
  var Timer = setInterval(moveLeft, 5000);
  $("i.fa-pause,i.fa-play").click(function () {
    var hasClass = $(this).hasClass("fa-pause");
    if (hasClass == true) {
      clearInterval(Timer);
      $(this).attr("class", "fas fa-play");
    } else {
      Timer = setInterval(moveLeft, 5000);
      $(this).attr("class", "fas fa-pause");
    }
  });

  // 슬라이드02 서식
  $(".slide02>li:last-child").insertBefore(".slide>li:first-child");
  $(".slide02").css({"margin-left": "-400px"});
  function moveLeft02() {
    $(".slide02").animate({"margin-left": "-800px"}, 100, function () {
      $(".slide02>li:first-child").insertAfter(".slide02>li:last-child");
      $(".slide02").css("margin-left", "-400px");
    });
  }
  function moveRight02() {
    $(".slide02").animate({"margin-left": "0px"}, 100, function () {
      $(".slide02>li:last-child").insertBefore(".slide02>li:first-child");
      $(".slide02").css("margin-left", "-400px");
    });
  }
  $(".slide_button .fa-angle-left").click(function () {
    console.log("left");
    moveLeft02();
  });
  $(".slide_button .fa-angle-right").click(function () {
    console.log("right");
    moveRight02();
  });
  // 탑버튼숨기기
  $("footer a").hide();
  // 메뉴클릭시 이동
  $(".gnb>li").on({
    "click focus": function () {
      var num = $(this).index() + 1; //0번은 비주얼박스임. 1,2,3,4,..나오게
      console.log(num);
      var con = $("section article").eq(num).offset().top; //각 콘텐츠아티클의 top위치값변수에 저장
      console.log(con - 58);
      $("html,body").animate({scrollTop: con - 58}, 500);
      //각콘텐츠 스크롤높이 58px만큼까지 상단으로 스크롤되어서 올라가게한다.
      return false;
    },
  });
  $(window).scroll(function () {
    var sPos = $(window).scrollTop();
    $(".status").text(sPos); //세로스크롤값 표시하기
    if (sPos >= 700) {
      $("footer a").fadeIn();
    } else {
      $("footer a").fadeOut();
    }
    // 스크롤시 nav상단고정
    if (sPos >= 58) {
      $(".gnb").addClass("act");
    } else {
      $(".gnb").removeClass("act");
    }

    var h = 1000;
    if (sPos > 912 && sPos < 2181) {
      $(".gnb a").removeClass("on"); //기존서식제거 선택한곳에만 적용되게
      $(".gnb li").eq(0).find("a").addClass("on"); //0번째는 비주얼영역
    } else if (sPos >= 2181 && sPos < 3031) {
      $(".gnb a").removeClass("on"); //기존서식제거 선택한곳에만 적용되게
      $(".gnb li").eq(1).find("a").addClass("on");
    } else if (sPos >= 3031 && sPos < 5499) {
      $(".gnb a").removeClass("on"); //기존서식제거 선택한곳에만 적용되게
      $(".gnb li").eq(2).find("a").addClass("on");
    } else if (sPos >= 5499 && sPos < 6514) {
      $(".gnb a").removeClass("on"); //기존서식제거 선택한곳에만 적용되게
      $(".gnb li").eq(3).find("a").addClass("on");
    } else if (sPos >= 6514 && sPos < 7334) {
      $(".gnb a").removeClass("on"); //기존서식제거 선택한곳에만 적용되게
      $(".gnb li").eq(4).find("a").addClass("on");
    } else if (sPos >= 7334) {
      $(".gnb a").removeClass("on"); //기존서식제거 선택한곳에만 적용되게
      $(".gnb li").eq(5).find("a").addClass("on");
    } else {
      $(".gnb a").removeClass("on");
    }
    if (sPos >= 1034 && sPos < 2234) {
      $(".sub_txt").fadeIn(500);
    } else {
      $(".sub_txt").fadeOut(500);
    }
  });
  // 탑버튼 클릭시 위로올라가는거.
  // 제일꼭대기인 body,html태그 찾아서 꼭대기까지 scrollTop이 0될때까지 올린다.
  $("footer a").click(function () {
    $("body,html").animate({scrollTop: "0px"}, 300);
    return false;
  });
  // scent pairing버튼
  $(".pairing_txt > a, #s_btn").hover(
    function () {
      $(this).css("background-color", "rgba(71, 71, 71, 0.719);");
    },
    function () {
      $(this).css("background-color", "rgba(0, 0, 0, 0.719)");
    }
  );
});
