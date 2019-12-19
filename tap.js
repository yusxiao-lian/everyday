/**
 * 注册轻击
 * @param { Element } element 
 * @param { Function } callback 
 * @param { Number } spantime 
 * @param { Number } distance 
 * @returns { undefined }
 */
function tap(element,callback,spantime,distance){
    spantime = spantime || 250;
    distance = distance || 50;
    var starTime,starX, starY;
    //触碰时
    element.addEventListener('touchstart',function(e){
        console.log(e)
        // console.log(e.touches.length)
        //判断是否单击
        if(e.touches.length > 1){
            // console.log('不是单击');
            return;
        }
        //获取点击时的坐标
        starX = e.touches[0].pageX;
        starY = e.touches[0].pageY;
        //获取点击时时间
        startTime = Date.now();           
    })
    //触碰结束
    element.addEventListener('touchend',function(e){
        //是否单击
        if(e.changedTouches.length !== 1){
            return;
        }
        //获取触碰结束时坐标
        var endX = e.changedTouches[0].pageX;
        var endY = e.changedTouches[0].pageY;
        //触碰结束时的事件
        var endTime = Date.now();
        //如果开始到结束的触碰时间太长
        if(endTime-startTime > spantime){
            // console.log('触碰时间太长，不是轻击');
        }
        //如果开始位置与结束位置太远
        if(Math.abs(endX-starX) > distance || Math.abs(endY-starY) > distance){
            // console.log('偏移过大，不是轻击');
            return;
        }
        callback();
    })
}