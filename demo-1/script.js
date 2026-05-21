// プロフィール更新
$("#updateBtn").click(function() {
    const name = $("#nameInput").val();
    const text = $("#textInput").val();
    const img = $("#imgInput").val();

    $("#name").html(name);
    $("#profile").html(text);

    if(img !== "") {
        $("#profileImg").attr("src", img);
    }
});

$("#addHobby").click(function() {
    const hobby = $("#hobbyInput").val();

    $("#hobbyList").append(`
        <li>
            <span>${hobby}</span>
            <button class="deleteBtn">削除</button>
        </li>
    `);
});


// プロフィール更新
/*
$("#updateBtn").click(function () {
  const name = $("#nameInput").val();
  const text = $("#textInput").val();
  const img = $("#imgInput").val();

  $("#name").html(name);
  $("#profile").html(text);

  if (img !== "") {
    $("#profileImg").attr("src", img);
  }
});

// 趣味追加
$("#addHobby").click(function () {
  const hobby = $("#hobbyInput").val();

  $("#hobbyList").append(`
    <li>
      <span>${hobby}</span>
      <button class="deleteBtn">削除</button>
    </li>
  `);
});

// 重要な趣味追加
$("#prependHobby").click(function () {
  const hobby = $("#hobbyInput").val();

  $("#hobbyList").prepend(`
    <li>
      <span>★ ${hobby}</span>
      <button class="deleteBtn">削除</button>
    </li>
  `);
});

// 削除
$(document).on("click", ".deleteBtn", function () {
  $(this).parent().remove();
});

// hide
$("#hideDeleteBtn").click(function () {
  $(".deleteBtn").hide();
});

// show
$("#showDeleteBtn").click(function () {
  $(".deleteBtn").show();
});
*/