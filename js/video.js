var vid = document.getElementById("full_screen_video_id");
var video_wrapper = document.querySelector(".full_screen_video_wrapper");
var pauseButton = document.querySelector(".full_screen_video_btn");
var playButton = document.querySelector(".play_full_video_btn");
var body = document.getElementById("body");
var quitButton = document.querySelector(".full_screen_video_quit_btn");

// function vidFade() {
//   vid.classList.add("stopfade");
// }

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
// vidFade();
}); 

// 클릭했을 때 플레이, 일시정지 상태 변경
pauseButton.addEventListener("click", function() {
  // this.preventDefault();
  // vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    // pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    // pauseButton.innerHTML = "Paused";
  }
});
// 버튼을 누를때 동영상 재생 시작 & 페이지 스크롤 방지
playButton.addEventListener("click", function(){
  $(video_wrapper).css("display", "block");
  body.classList.add("stop-scrolling");
  vid.play();

});

// 동영상을 종료하면 화면끄고 상태 초기화
quitButton.addEventListener("click", function(){
  $(video_wrapper).css("display", "none");
  body.classList.remove("stop-scrolling");
  vid.load();
});
