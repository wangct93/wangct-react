
import {callFunc, getThrottleFunc} from "@wangct/util/lib/util";

/**
 * 鼠标按下事件
 * @param e
 * @param options
 */
export function mousedown(e,options = {}){
  const ox = e.clientX;
  const oy = e.clientY;
  const {moveLimit = 10} = options;
  let isMove = false;
  const mousemove = getThrottleFunc((event) => {
    if(isMove){
      const dx = event.clientX - ox;
      const dy = event.clientY - oy;
      callFunc(options.onMove,e,dx,dy);
    }else if(Math.abs(event.clientX - ox) > moveLimit || Math.abs(event.clientY - oy) > moveLimit){
      isMove = true;
      callFunc(options.onBeforeMove,e);
    }
  },30);
  const mouseup = (e) => {
    if(!isMove){
      callFunc(options.onClick,e);
    }else{
      callFunc(options.onUp,e,e.clientX - ox,e.clientY - oy);
    }
    document.removeEventListener('mousemove',mousemove);
    document.removeEventListener('mouseup',mouseup);
  };
  document.addEventListener('mousemove',mousemove);
  document.addEventListener('mouseup',mouseup);
}
