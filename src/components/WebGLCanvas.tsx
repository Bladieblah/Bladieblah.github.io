import React, { useEffect } from "react";
import styles from './styles/physarum.module.css'
import { programInfo, initShaderProgram, drawScene, createBuffers } from '../webgl/shaders'

const WebGLCanvas = () => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef();
  let buffer: WebGLBuffer | null;

  const draw = (ctx: WebGLRenderingContext, t: number) => {
    ctx.clearColor(
        (1 + Math.sin(t)) / 2,
        (1 + Math.sin(t + 1.)) / 2,
        (1 + Math.sin(t + 2.)) / 2,
        1.0
    );
    ctx.clear(ctx.COLOR_BUFFER_BIT);
  }
  
  useEffect(() => {
    var webglContext: WebGLRenderingContext | null;
    let t: number = 0;
    let animationFrameId: number;
    let buffers: Object;
    let info: Object;

    const initialise = () => {
      console.log('Hello!');
      if (canvasRef.current) {
        webglContext = canvasRef.current.getContext('webgl');
        if (webglContext) {

          const shaderProgram = initShaderProgram(webglContext);
          info = programInfo(webglContext, shaderProgram);
          buffers = createBuffers(webglContext);
        }
      }
    }

    const render = () => {
      if (canvasRef.current) {
        webglContext = canvasRef.current.getContext('webgl');
        if (webglContext) {
          draw(webglContext, t);
          drawScene(webglContext, info, buffers);
        }
      }
      t += 1. / 60;
      animationFrameId = window.requestAnimationFrame(render);
    }

    initialise();
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);

  return <canvas className={styles.physarum} ref={canvasRef}/>
}

export default WebGLCanvas
