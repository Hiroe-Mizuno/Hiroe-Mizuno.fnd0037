'use strict'

// ローディング画面を削除する
const loadingScreen = document.getElementById("loading");
setTimeout(deleteLodingScreen, 4900);
function deleteLodingScreen() {
  if (loadingScreen) {
    loadingScreen.remove();
  }
}

// aboutMeボタンがクリックされたらアラート表示 & greetingテキスト変更
const aboutMeButton = document.getElementById("aboutMe"); 
const newGreeting = document.getElementById("greeting");
const greeting = ["Welcome!", "Thank you!", "Keep going!", "Fight!!"]; 

if(aboutMeButton) {
  aboutMeButton.addEventListener("click", introduceMe);
}
function introduceMe() {
  alert("40代・プログラミング歴１ヶ月の Hiroです🐼\n何歳からでもやればできる!!\nあきらめないで Keep trying🔥🔥🔥");
  const indexNo = Math.floor(Math.random() * greeting.length);
  newGreeting.innerHTML = greeting[indexNo];
}

// お問い合わせボタンがクリックされたらアラート表示
let qaButton = document.getElementById("QA"); 
if (qaButton) {
  qaButton.addEventListener("click", respondQa);
}
function respondQa() {
  alert("🚧工事中🚧\nただ今 受付けておりません");
}
