/* 先把基本常用的函数封装一下 */
// 1、获取元素
var getElem = function(selector) {
  return document.querySelector(selector);
};
var getAllElem = function(selector) {
  return document.querySelectorAll(selector);
};

// 2、获取元素的class属性
var getCls = function(element) {
  return element.getAttribute("class");
};

// 3、设置元素的class属性（直接覆盖原本class类）
/* 
  element：元素原本类名
  cls：需设置的新类名
*/
var setCls = function(element, cls) {
  return element.setAttribute("class", cls);
};

// 4、为元素添加class属性（往后面添加class类）
/* 
  element：元素原本类名
  cls：需添加的类名
*/
var addCls = function(element, cls) {
  var baseCls = getCls(element);
  if (baseCls.indexOf(cls) === -1) {
    setCls(element, baseCls + " " + cls); // 注意空格
  }
  return;
};

// 5、删减元素的class属性
/* 
  element：元素原本类名
  cls：需删减的类名
*/
var delCls = function(element, cls) {
  var baseCls = getCls(element);
  if (baseCls.indexOf(cls) > -1) {
    // 更精确的需要用正则表达式 ,因为这里只用于切换 _animate_in 所以没事
    setCls(
      element,
      baseCls
        .split(cls)
        .join(" ")
        .replace(/\s+/g, " ")
    );
  }
  return;
};

/* 开始写JS脚本 */
var screenAnimateElements = {
  ".screen-1": [".screen-1__heading", ".screen-1__phone", ".screen-1__shadow"],
  ".screen-2": [
    ".screen-2__heading",
    ".screen-2__subheading",
    ".screen-2__phone",
    ".screen-2__point_i_1",
    ".screen-2__point_i_2",
    ".screen-2__point_i_3"
  ],
  ".screen-3": [
    ".screen-3__heading",
    ".screen-3__phone",
    ".screen-3__subheading",
    ".screen-3__features"
  ],
  ".screen-4": [
    ".screen-4__heading",
    ".screen-4__subheading",
    ".screen-4__type__item_i_1",
    ".screen-4__type__item_i_2",
    ".screen-4__type__item_i_3",
    ".screen-4__type__item_i_4"
  ],
  ".screen-5": [".screen-5__heading", ".screen-5__subheading", ".screen-5__bg"]
};

// 第一步：为所有元素设置初始样式init
function setScreenAnimateInit(screenCls) {
  var screen = document.querySelector(screenCls); // 获取当前屏的元素
  var animateElements = screenAnimateElements[screenCls]; // 需要设置动画的元素
  for (var i = 0; i < animateElements.length; i++) {
    var element = document.querySelector(animateElements[i]);
    var baseCls = element.getAttribute("class");
    element.setAttribute(
      "class",
      baseCls + " " + animateElements[i].substr(1) + "_animate_init"
    );
  }
}
window.onload = function() {
  for (k in screenAnimateElements) {
    setScreenAnimateInit(k);
  }
  // 第一屏延迟0.1s直接触发，无需滚动条触发
  setTimeout(function() {
    playScreenAnimateDone(".screen-1");
  }, 100);
};

// 第二步：滚动条触发，init→done
function playScreenAnimateDone(screenCls) {
  var screen = document.querySelector(screenCls); // 获取当前屏的元素
  var animateElements = screenAnimateElements[screenCls]; // 需要设置动画的元素
  for (var i = 0; i < animateElements.length; i++) {
    var element = document.querySelector(animateElements[i]);
    var baseCls = element.getAttribute("class");
    element.setAttribute(
      "class",
      baseCls.replace("_animate_init", "_animate_done")
    );
  }
}
window.onscroll = function() {
  /* 获取滚动条的滚动值 */
  var top = document.documentElement.scrollTop;

  // 滚动条触发导航栏
  if (top > 80) {
    addCls(getElem(".header"), "header_status_black");
  } else {
    delCls(getElem(".header"), "header_status_black");
  }
  // 滚动条触发侧边栏
  if (top > 600) {
    addCls(getElem(".outline"), "outline_status_in");
  } else {
    delCls(getElem(".outline"), "outline_status_in");
  }
  // 滚动条触发第2~5屏
  if (top > 800 * 1 - 100) {
    playScreenAnimateDone(".screen-2");
  }
  if (top > 800 * 2 - 100) {
    playScreenAnimateDone(".screen-3");
  }
  if (top > 800 * 3 - 100) {
    playScreenAnimateDone(".screen-4");
  }
  if (top > 800 * 4 - 100) {
    playScreenAnimateDone(".screen-5");
  }
};

// 第三步：点击跳转
var setNavJump = function(i, lib) {
  var elem = lib[i];
  elem.onclick = function() {
    document.documentElement.scrollTop = i * 800;
  };
};
// 导航条-点击页面跳转
var navItems = getAllElem(".header__nav__item");
for (var i = 0; i < navItems.length; i++) {
  setNavJump(i, navItems);
}
// 侧边栏-点击跳转
var outLineItems = getAllElem(".outline__item");
for (var i = 0; i < outLineItems.length; i++) {
  setNavJump(i, outLineItems);
}
