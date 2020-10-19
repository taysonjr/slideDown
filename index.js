$(function(){
  $("#nav li ul").hide();
  $("#nav li").hover(function(){
    // アニメーションがなんども実行されないようにするため:not(:animated)
    //スピードはfast, slow, normalまたは単位で
    //>をつけて子要素を表示、非表示にする
    $(">ul:not(:animated)", this).slideDown("fast");
  }, function(){
    $(">ul", this).slideUp("fast");
  });
});
