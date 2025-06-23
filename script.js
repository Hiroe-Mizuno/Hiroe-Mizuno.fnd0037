'use strict'

// ローディングアニメーション終了後に画面を背面に隠す
const loadingScreen = document.getElementById("loading");
setTimeout(hideLodingScreen, 3600);
function hideLodingScreen() {
  if (loadingScreen) {
    loadingScreen.style.visibility = "hidden";
    loadingText.style.visibility = "hidden";
    spinner.style.visibility = "hidden";
    
    loadingScreen.style.zIndex = "-1";
    loadingText.style.zIndex = "-1";
    spinner.style.zIndex = "-1";
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
  newGreeting.innerText = greeting[indexNo];
}

// お問い合わせボタンがクリックされたらアラート表示
const qaButton = document.getElementById("QA"); 
if (qaButton) {
  qaButton.addEventListener("click", respondQa);
}
function respondQa() {
  alert("🚧工事中🚧\nただ今 受付けておりません");
}

// LineUPボタンクリックでローディング画面再生後に背面に隠す
const lineUpButton = document.getElementById("lineUp"); 
const loadingText = document.getElementById("loadingText");
const spinner = document.getElementById("spinner");
if(lineUpButton) {
  lineUpButton.addEventListener("click", showLoadingScreen);
}
function showLoadingScreen() {
  // アニメーションリセット
  loadingScreen.style.animation = "none";
  loadingText.style.animation = "none";

  void loadingScreen.offsetWidth;
  void loadingText.offsetWidth;
  // アニメーションを再設定
  loadingScreen.style.animation = "fadeout 3s ease-in";
  loadingText.style.animation = "colChange 3s ease-in";
  // アニメーションの内容を変更
  loadingScreen.style.visibility = "visible";
  loadingText.style.visibility = "visible";
  spinner.style.visibility = "hidden";
  loadingScreen.style.opacity = "1";
  loadingScreen.style.background = "rgba(128, 128, 128, 1)";
  loadingScreen.style.zIndex = "5";
  loadingText.innerText = "個性豊かに育ちました！";

  setTimeout(hideLodingScreen, 2800);
}

// homeボタンクリックでローディング画面再生後に背面に隠す
const homeButtons = document.querySelectorAll(".home");
homeButtons.forEach(button => { 
  button.addEventListener("click", backMainScreen);
});

function backMainScreen() {
  // アニメーションリセット
  loadingScreen.style.animation = "none";
  spinner.style.animation = "none";

  void loadingScreen.offsetWidth;
  void spinner.offsetWidth;
  // アニメーションを再設定
  loadingScreen.style.animation = "fadeout 2.5s ease-in";
  spinner.style.animation = "grow 2.5s ease-in";
  // アニメーションの内容を再設定
  loadingScreen.style.visibility = "visible";
  spinner.style.visibility = "visible";
  loadingText.style.visibility = "hidden";
  loadingScreen.style.opacity = "1";
  loadingScreen.style.background = "rgba(128, 128, 128, 1)";
  loadingScreen.style.zIndex = "5";

  setTimeout(hideLodingScreen, 2300);
}
