function hyouji13(){
//表示する文字
var str13="一文字ずつ表示します。";
//テキストボックスの文字数
var cnt13=docment.timer13.moji13.value.length;
//文字が全部表示されているか確認
if( cnt13 < 11 ){
//現在よりも1文字多く切り出して表示
document.timer13.moji13.value=str13.substr(0,cnt13+1);}else{
//全て表示されたら、空文字に戻す
docment.timer13.moji13.value="";}
//setTimeout()を含む関数を呼び出す
setTimeout("hyouji13()" ,1000);}
