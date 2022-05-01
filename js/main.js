/**
 * 全局变量
 */
// 分类父容器
let backgroundNode = document.getElementById('common-background'),
    // 当前滚轮对应的值
    currentWheelDeltaNumber = 0
/**
 * 监听鼠标滚轮
 */
function mousewheel(e) {
    // 获取滚动方向，true为上滚，false为下滚
    let rollingDirection = e.wheelDelta > 30
    if (rollingDirection) {
        currentWheelDeltaNumber += 5
    } else {
        if (currentWheelDeltaNumber < 5) return
        currentWheelDeltaNumber -= 5
    }
    // 设置perspective大小
    backgroundNode.style.setProperty('--perspective', currentWheelDeltaNumber + 'px')
}
/**
 * 初始化
 */
function init() {
    /**
     * 初始化分类位置
     */
    // 获取每个分类容器
    const { children } = backgroundNode || {}
    for (let i = 0; i < children.length; i++) {
        // 为每个分类初始化位置
        children[i].style.top = '50%'
        if (i % 2 == 0) {
            // 单数的居左
            children[i].style.left = `${50 - Math.floor(Math.random() * 10)}%`
        } else {
            // 双数的居右
            children[i].style.left = `${50 + Math.floor(Math.random() * 10)}%`
        }
        children[i].style.transform = `translateX(-50%) translateY(-50%) translateZ(${(i + 1) * 100}px)`
    }
    // 初始化perspective大小
    currentWheelDeltaNumber = children.length * 200
    backgroundNode.style.setProperty('--perspective', currentWheelDeltaNumber + 'px')
    // 监听滚轮事件
    window.addEventListener('mousewheel', mousewheel)
}
init()
