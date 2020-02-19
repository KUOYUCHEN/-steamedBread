$(function(params) {
  $.ajax({
    url: "http://localhost:3000/formData",
    dataType: "json",
    method: "get",
    data: {}
  })
    .done(function(res) {
      console.log(res);
    })
    .fail(function(err) {
      console.log(err);
    });
});

$("#gogo").on("click", function(params) {
  let name = $("input[name=name]")
    .val()
    .trim();
  if (!name) return false;
  let tel = $("input[name=tel]")
    .val()
    .trim();
  let email = $("input[name=email]")
    .val()
    .trim();
  if (!email) return false;
  let textarea = $("textarea[name=textarea]")
    .val()
    .trim();

  $.ajax({
    url: "http://localhost:3000/formData",
    dataType: "json",
    method: "post",
    data: {
      name: name,
      phone: tel,
      email: email,
      message: textarea
    }
  }).fail(function(params) {
    alert("something goes wrong");
  });
});
