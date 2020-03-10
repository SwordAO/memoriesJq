function createFall (windowWidth, windowHeight, direction, className, sceneIndex) {
  var left = 0
  var top = 0

  var container = $("#content")
// 获取第一个子节点
  var element = container.find(':first');
// li页面数量
  var slides = element.find("li");

  let range_random = Math.random() * 30 + slides[sceneIndex].offsetHeight * 0.85;
  //定义一个初始化随机数,使雪花在屏幕中
  var left_random = Math.random() * slides[sceneIndex].offsetWidth / 2
  var top_random = Math.random() * slides[sceneIndex].offsetHeight
  // if(className === 'ribbon') {
  //   top_random = Math.random() * slides[sceneIndex].offsetHeight
  // } else {
  //   top_random = Math.random() * slides[sceneIndex].offsetHeight
  // }
  var div = document.createElement('div')
  div.className = className
  if(className === 'ribbon') {
    var ribbonColors = ['#87BAFF', '#FFCC31', '#D1152D']
    div.style.display = 'none'
    div.style.background = ribbonColors[(Math.floor(Math.random() * 3))]
    div.style.transform = 'skewY(25deg)' + 'rotate(' + (Math.random() * 1000) + 'deg)'
  } else {
    div.style.display = 'none'
    div.style.transform = 'scale(' + (Math.random()) + ')' + 'rotate(' + (Math.random() * 1000) + 'deg)'
    div.style.opacity = Math.random() + 0.2
  }
  slides[sceneIndex].appendChild(div)
  //雪花飘落
  var interval = setInterval(function () {
    if(direction === 'horizon') {
      div.style.left = left_random + left + 'px'
    } else {
      div.style.right = left_random + left + 'px'
    }
    div.style.top = top_random + top + 'px'
    left += 0.2
    top += 0.2
    //如果雪花跑到屏幕外面了,让雪花重新返回屏幕顶部
    if(className === 'ribbon') {
      if (left_random + left >= slides[sceneIndex].offsetWidth) {
        left_random = Math.random()
        left = 0;
        top = 0;
      }
      if (top_random + top >= range_random) {
        top_random = Math.random()
        clearInterval(interval)
      }
    } else {
      if (left_random + left >= slides[sceneIndex].offsetWidth) {
        left_random = Math.random()
        left = 0
      }
      if (top_random + top >= slides[sceneIndex].offsetHeight) {
        top_random = Math.random()
        top = 0
      }
    }
  }, 10)
}
