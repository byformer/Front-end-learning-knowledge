/* 封装兼容性的事件绑定函数 */
/*
 * element：事件源
 * type：事件类型
 * handler：事件句柄
 * bool：事件捕获（true）或事件冒泡（false）
 */
var EventUtil = {
  addHandler: function(element, type, handler, bool) {
    bool = bool || false; // 设置默认为false
    // 高级浏览器
    if (element.addEventListener) {
      element.addEventListener(type, handler, bool);
      // IE浏览器支持DOM2级
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
      // IE浏览器不支持DOM2级
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function(element, type, handler, bool) {
    bool = bool || false;
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, bool);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  }
};

/* 封装获取事件源函数 */
function byId(id) {
  return typeof id === "string" ? document.getElementById(id) : id;
}

var index = 0, // 当前显示图片的索引，默认为0
  prev = byId("prev"), // 上一张
  next = byId("next"), // 下一张
  pics = byId("banner").getElementsByTagName("div"), // 获取焦点图下的全部div，返回数组
  size = pics.length, // 获取图片数
  dots = byId("dots").getElementsByTagName("span"), // 获取右下角索引，返回数组
  timer = null, // 定时器
  main = byId("main"),
  menuContent = byId("menu-content"), // 主菜单
  menuItems = menuContent.getElementsByClassName("menu-item"),
  subMenu = byId("sub-menu"), // 子菜单
  innerBox = subMenu.getElementsByClassName("inner-box"),
  banner = byId("banner");

/* 事件句柄 */

// 封装切换图片函数
function changeImg() {
  // 遍历所有图片，将图片隐藏，将圆点上的类清除
  for (var i = 0; i < size; i++) {
    pics[i].style.display = "none";
    dots[i].className = "";
  }
  // 显示当前图片
  pics[index].style.display = "block";
  // 当前圆点高亮显示
  dots[index].className = "active";
}

// 上一张按钮事件句柄
var prevPicture = function() {
  index--;
  if (index < 0) {
    index = size - 1;
  }
  changeImg();
};

// 下一张按钮事件句柄
var nextPicture = function() {
  index++;
  if (index >= size) {
    index = 0;
  }
  changeImg();
};

// 圆点事件句柄
var selectPicture = function() {
  index = this.getAttribute("data-id");
  changeImg();
};

/* 绑定事件 */
EventUtil.addHandler(prev, "click", prevPicture); // 上一张
EventUtil.addHandler(next, "click", nextPicture); // 下一张
// 为3个圆点绑定事件
for (var d = 0; d < size; d++) {
  dots[d].setAttribute("data-id", d);
  EventUtil.addHandler(dots[d], "click", selectPicture);
}

/* 定时器 */
// 每隔3秒切换图片函数
function startAutoPlay() {
  timer = setInterval(function() {
    index++;
    if (index >= size) {
      index = 0;
    }
    changeImg();
  }, 3000);
}
startAutoPlay();

// 清除定时器：鼠标放到图片上时
function stopAutoPlay() {
  if (timer) {
    clearInterval(timer);
  }
}
EventUtil.addHandler(main, "mouseover", stopAutoPlay);

// 重启定时器：鼠标离开图片时
EventUtil.addHandler(main, "mouseout", startAutoPlay);

/* 菜单部分 */
/* 事件句柄 */
function showSubMenu() {
  // 显示子菜单所在的背景
  subMenu.className = "sub-menu";
  // 获取当前主菜单的索引
  idx = this.getAttribute("data-index");
  // 遍历所有子菜单，将它们隐藏
  for (var j = 0, jlen = innerBox.length; j < jlen; j++) {
    // 隐藏所有的子菜单
    innerBox[j].style.display = "none";
    // 子菜单背景色恢复原样
    menuItems[j].style.background = "none";
  }
  // 找到当前子菜单，让其显示
  innerBox[idx].style.display = "block";
  menuItems[idx].style.background = "rgba(0,0,0,0.1)";
}

// 鼠标离开banner，隐藏子菜单
function hideSubMenu() {
  subMenu.className = "sub-menu hide";
}
// 鼠标划入子菜单，显示子菜单
function inSubMenu() {
  subMenu.className = "sub-menu";
}
// 鼠标划出子菜单，隐藏子菜单
function outSubMenu() {
  subMenu.className = "sub-menu hide";
}

/* 绑定事件 */
// 显示子菜单：鼠标滑过时
for (var m = 0, idx, mlen = menuItems.length; m < mlen; m++) {
  // 给所有主菜单定义属性，标明它的索引
  menuItems[m].setAttribute("data-index", m);
  EventUtil.addHandler(menuItems[m], "mouseover", showSubMenu);
}

// 隐藏子菜单：鼠标离开时
EventUtil.addHandler(banner, "mouseout", hideSubMenu);
EventUtil.addHandler(menuContent, "mouseout", hideSubMenu);

// 显示子菜单：鼠标划入子菜单时
EventUtil.addHandler(subMenu, "mouseover", inSubMenu);

// 隐藏子菜单：鼠标划出子菜单时
EventUtil.addHandler(subMenu, "mouseout", outSubMenu);

/* 
  思路：
    1、先获取，再操作
    2、通过索引
    3、display控制显示和隐藏
*/
