'use strict'

// ローディング画面を削除する
  let loadingScreen = document.getElementById("loading");
  setTimeout(deleteLodingScreen, 4900);
    function deleteLodingScreen() {
      if (loadingScreen) {
        loadingScreen.remove();
      }
    }

// ボタン情報の取得、#greetingのテキストを準備
  let aboutMeButton = document.getElementById("aboutMe"); 
  let qaButton = document.getElementById("QA"); 
  const greeting = ["Welcome!", "Thank you!", "Keep going!", "Fight!!"];    

// aboutMeボタンがクリックされたらアラート表示
  if(aboutMeButton) {
    aboutMeButton.addEventListener("click", introduceMe);
  }
    function introduceMe() {
      alert("40代・プログラミング歴１ヶ月の Hiroです🐼\n何歳からでもやればできる!!\nあきらめないで Keep trying🔥🔥🔥");
   // 画面に表示する文字を変更
      let newGreeting = document.getElementById("greeting");
      const indexNo = Math.floor(Math.random() * greeting.length);
      newGreeting.innerHTML = greeting[indexNo];
    }
  
// お問い合わせボタンがクリックされたらアラート表示
  if (qaButton) {
    qaButton.addEventListener("click", respondQa);
  }
    function respondQa() {
      alert("🚧工事中🚧\nただ今 受付けておりません");
    }
