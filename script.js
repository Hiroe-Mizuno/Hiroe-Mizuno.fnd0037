'use strict'

// loading画面のアニメーションを消す指示
let loadingScreen = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    if (loadingScreen) {
      loadingScreen.remove();
    }
  }, 4900); // 4.9秒後に削除する
});

// aboutMeボタンがクリックされた時の指示
let aboutMeButton = document.getElementById("aboutMe"); 
let greeting = ["Welcome!", "Thank you!", "Keep going!", "Fight!!"];

document.addEventListener("DOMContentLoaded", function() {
  if(aboutMeButton) {
    aboutMeButton.addEventListener("click", function() {
    alert("40代・プログラミング歴１ヶ月の Hiroです🐼\n何歳からでもやればできる!!\nあきらめないで Keep trying🔥🔥🔥");
 
    let newGreeting = document.getElementById("greeting");
    const indexNo = Math.floor(Math.random() * greeting.length);
    newGreeting.innerHTML = greeting[indexNo];
    });
  }
});

// お問い合わせボタンがクリックされた時の指示
let qaButton = document.getElementById("QA"); 

document.addEventListener("DOMContentLoaded", function() {
  if(qaButton) {
    qaButton.addEventListener("click", function() {
    alert("🚧工事中🚧\nただ今 受付けておりません");
    });
  }
});
