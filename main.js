const startButton = document.getElementById('start');   //startボタン
const stopButton = document.getElementById('stop');     //stopボタン
const resetButton = document.getElementById('reset');   //resetボタン
const showTime = document.getElementById('time');       //表示時間

let timer;              //setinterval, clearTimeoutで使用
let hours = 0;          //時間
let minutes = 0;        //分
let seconds = 0;        //秒
let milliseconds = 0;   //ミリ秒  

//スタートボタン押下時
startButton.addEventListener('click', function() {
    //1msec毎にmeasureTime関数を実行する
    timer = setInterval(measureTime, 100);
    startButton.disabled = true;  //startボタンを有効化する
    stopButton.disabled = false;  //stopボタンを無効化する
    resetButton.disabled = false; //restボタンを無効化する
})
//ストップボタン押下時
stopButton.addEventListener('click', function() {
    //timerを停止
    clearInterval(timer);
    startButton.disabled = false; //startボタンを無効化する
    stopButton.disabled = true;   //stopボタンを有効化する
    resetButton.disabled = false; //restボタンを無効化する
})
//リセットボタン押下時
resetButton.addEventListener('click', function() {
    //timerを停止
    clearInterval(timer);
    //初期値に戻す
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    //時間の表示を 0:0:0:0 に戻す
    showTime.textContent = hours + ':' + minutes+ ':' + seconds+ ':' + milliseconds;

    startButton.disabled = false; //startボタンを無効化する
    stopButton.disabled = false;  //stopボタンを無効化する
    resetButton.disabled = true;  //restボタンを有効化する
})


//時間を計測
function measureTime() {
  milliseconds++; //milliseconds変数に1を足す
  if (milliseconds % 10 === 0) {  //もしmillisecondsを10で割った時の余りが0であれば
    seconds++;  //second変数に1を足す
    milliseconds = 0; //milliseconds変数を0に戻す
    if (seconds % 60 === 0) {　//もしsecondsを60で割った時の余りが0であれば
      minutes++; //minutes変数に1を足す
      seconds = 0; //seconds変数を0に戻す
      if(minutes % 60 === 0){　//もしminutesを60で割った時の余りが0であれば
        hours++; //hours変数に1を足す
        minutes = 0; //minutes変数を0に戻す
      }
    }
  }
  //時間を表示する
  showTime.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}