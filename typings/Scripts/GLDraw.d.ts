declare function GLDrawLoad(): void;
declare function GLDrawMakeGLProgam(gl: any): void;
declare function GLDrawInitCharacterCanvas(canvas: any): any;
declare function GLDrawCreateShader(gl: any, source: any, type: any): any;
declare function GLDrawCreateProgram(gl: any, vertexShader: any, fragmentShader: any): any;
declare function GLDrawImageBlink(url: any, gl: any, dstX: any, dstY: any, color: any, fullAlpha: any): void;
declare function GLDrawImage(url: any, gl: any, dstX: any, dstY: any, color: any, fullAlpha: any): void;
declare function GLDrawBingImageToTextureInfo(gl: any, Img: any, textureInfo: any): void;
declare function GLDrawLoadImage(gl: any, url: any): any;
declare function GLDrawClearRectBlink(gl: any, x: any, y: any, width: any, height: any): void;
declare function GLDrawClearRect(gl: any, x: any, y: any, width: any, height: any): void;
declare function GLDrawHexToRGBA(color: any): number[];
declare function GLDrawAppearanceBuild(C: any): void;
declare var GLDrawImageCache: any;
declare var GLDrawCacheLoadedImages: number;
declare var GLDrawCacheTotalImages: number;
declare var GLVersion: any;
declare var GLDrawCanvas: any;
declare var GLDrawAlphaThreshold: number;
declare var GLDrawHalfAlphaLow: number;
declare var GLDrawHalfAlphaHigh: number;
declare var GLDrawVertexShaderSource: string;
declare var GLDrawFragmentShaderSource: string;
declare var GLDrawFragmentShaderSourceFullAlpha: string;
declare var GLDrawFragmentShaderSourceHalfAlpha: string;