$(function() {
  // ボタンをクリックすると
  $('.btn').on('click', function(){
    // 「クリックしました！」と表示する
    $('.text-box').val('クリックしました！');
  });
});