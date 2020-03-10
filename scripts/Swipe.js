function Swipe (container) {
// 获取第一个子节点
  var element = container.find(':first')
  //滑动对象
  var swipe = {}
// li页面数量
  var slides = element.find('li')
// 获取容器尺寸
  var width = container.width()
  var height = container.height()

  var sceneWidth
  if (width > height) {
    sceneWidth = height * 2668 / 750
  } else {
    sceneWidth = width * 2668 / 750
  }

// 每个场景尺寸

// 设置每一个页面li的宽度
  $.each(slides, function (index) {
    if (index < 7) {
      var slide = slides.eq(index) // 获取到每一个li元素
      slide.css({ // 设置每一个li的尺寸
        width: sceneWidth + 'px',
        height: '100%'
      })
    } else if (index === 7) { // 场景8是1/2宽
      var slide = slides.eq(7) // 获取到每一个li元素
      slide.css({ // 设置每一个li的尺寸
        width: sceneWidth / 2 + 'px',
        height: '100%'
      })
    }
  })
  // 设置ul页面总宽度
  element.css({
    width: (sceneWidth * 7 + sceneWidth / 2) + 'px',
    height: '100%'
  })

  //监控完成与移动
  swipe.scrollTo = function (x, speed) {
    console.log('场景移动距离：', x)
    //执行动画移动
    element.css({
      'transition-timing-function': 'linear',
      'transition-duration': speed + 'ms',
      'transform': 'translate3d(-' + x + 'px,0px,0px)'
    })
    return this
  }

  return swipe
}
