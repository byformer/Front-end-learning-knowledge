// ------------------------------------------获取元素
var userAccount = document.querySelector("#userAccount"), //获取用户名
  userPass = document.querySelector("#userPass"), //获取密码
  userPass_ = document.querySelector("#userPass_"), //获取确认密码
  userName = document.querySelector("#userName"), //获取姓名
  information = document.querySelector("#information"), //获取身份证号码
  email = document.querySelector("#email"), //获取邮箱号码
  telephone = document.querySelector("#telephone"), //获取手机号码
  items = document.querySelectorAll(".item_"), //获取所有提示文段的下标
  aCho = document.querySelector("#choose"), // 阅读同意
  oBtn = document.querySelector("#handup"); // 提交按钮
// ------------------用于最终提交审核
var test1 = false,
  test2 = false,
  test3 = false,
  test4 = false,
  test5 = false,
  test6 = false,
  test7 = false;

// --------------------------------------------------用户名
userAccount.onfocus = function() {
  items[0].innerHTML = "6-18位字母、数字或'_'";
  items[0].style.color = "green";
};
userAccount.onblur = function() {
  var reg = /^\w{6,18}$/;
  if (this.value == "") {
    items[0].innerHTML = "用户名不为空!";
    items[0].style.color = "red";
  } else {
    if (!reg.exec(userAccount.value)) {
      items[0].innerHTML = "请输入6-18位字母、数字或下划线'_'";
      items[0].style.color = "red";
    } else {
      items[0].innerHTML = "格式正确";
      items[0].style.color = "green";
      test1 = true;
    }
  }
};
//----------------------------------------------------登陆密码
userPass.onfocus = function() {
  items[1].innerHTML = "6-20位字母,数字或符号";
  items[1].style.color = "green";
};
userPass.onblur = function() {
  var reg = /^\w{6,20}$/;
  if (this.value == "") {
    items[1].innerHTML = "密码不为空!";
    items[1].style.color = "red";
  } else {
    if (!reg.exec(userPass.value)) {
      items[1].innerHTML = "请输入6-20位字母,数字或下划线'_'";
      items[1].style.color = "red";
    } else {
      items[1].innerHTML = "格式正确";
      items[1].style.color = "green";
      test2 = true;
    }
  }
};
// ---------------------------------------------------------确认密码
userPass_.onfocus = function() {
  items[2].innerHTML = "请再次输入密码";
  items[2].style.color = "green";
};
userPass_.onblur = function() {
  if (this.value == "") {
    items[2].innerHTML = "确认密码不为空";
    items[2].style.color = "red";
  } else {
    if (this.value != userPass.value) {
      items[2].innerHTML = "两次密码不一致";
      items[2].style.color = "red";
    } else {
      items[2].innerHTML = "格式正确";
      items[2].style.color = "green";
      test3 = true;
    }
  }
};
// ---------------------------------------------------姓名
userName.onfocus = function() {
  items[3].innerHTML = "请输入您的姓名";
  items[3].style.color = "green";
};
userName.onblur = function() {
  var reg = /^[\u4e00-\u9fa5]{2,5}$/;
  if (this.value == "") {
    items[3].innerHTML = "姓名不为空";
    items[3].style.color = "red";
  } else {
    if (!reg.exec(userName.value)) {
      items[3].innerHTML = "姓名格式有误，2-5位的中文";
      items[3].style.color = "red";
    } else {
      items[3].innerHTML = "格式正确";
      items[3].style.color = "green";
      test4 = true;
    }
  }
};
//-----------------------------------------------------身份证
information.onfocus = function() {
  items[4].innerHTML = "请输入您的身份证号码";
  items[4].style.color = "green";
};
information.onblur = function() {
  var reg = /^\d{17}[0-9x]$/;
  if (this.value == "") {
    items[4].innerHTML = "身份证号码不为空!";
    items[4].style.color = "red";
  } else {
    if (!reg.exec(information.value)) {
      items[4].innerHTML = "请输入身份证号码正确格式";
      items[4].style.color = "red";
    } else {
      items[4].innerHTML = "格式正确";
      items[4].style.color = "green";
      test5 = true;
    }
  }
};
//-------------------------------------------------------邮箱
email.onfocus = function() {
  items[5].innerHTML = "请输入您邮箱的正确格式";
  items[5].style.color = "green";
};
email.onblur = function() {
  var reg = /^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
  if (this.value == "") {
    items[5].innerHTML = "邮箱不为空";
    items[5].style.color = "red";
  } else {
    if (!reg.exec(email.value)) {
      items[5].innerHTML = "请输入邮箱正确格式";
      items[5].style.color = "red";
    } else {
      items[5].innerHTML = "格式正确";
      items[5].style.color = "green";
      test6 = true;
    }
  }
};
//----------------------------------------------------手机号
telephone.onfocus = function() {
  items[6].innerHTML = "请输入您的手机号码";
  items[6].style.color = "green";
};
telephone.onblur = function() {
  var reg = /^\d{11}$/;
  if (this.value == "") {
    items[6].innerHTML = "手机号码不为空";
    items[6].style.color = "red";
  } else {
    if (!reg.exec(telephone.value)) {
      items[6].innerHTML = "请您务11位手机号码";
      items[6].style.color = "red";
    } else {
      items[6].innerHTML = "格式正确";
      items[6].style.color = "green";
      test7 = true;
    }
  }
};
// --------------------------------------------阅读同意与提交按钮
oBtn.onclick = function() {
  if (
    aCho.checked == false ||
    test1 == false ||
    test2 == false ||
    test3 == false ||
    test4 == false ||
    test5 == false ||
    test6 == false ||
    test7 == false
  ) {
    alert(" 您 的 信 息 有 误 ");
  } else {
    alert(" 登 记 成 功 ! ");
  }
};
