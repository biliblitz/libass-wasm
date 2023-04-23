declare interface Options {
  video: HTMLVideoElement;
  canvas: HTMLCanvasElement;

  renderMode?: string;
  lossyRender?: boolean;
  libassMemoryLimit?: number;
  libassGlyphLimit?: number;
  targetFps?: number;
  prescaleFactor?: number;
  prescaleHeightLimit?: number;
  maxRenderHeight?: number;
  dropAllAnimations?: boolean;
  fonts?: string[];
  availableFonts?: Record<string, string>[];
  fallbackFont?: string;
  lazyFileLoading?: boolean;
  onReady?: () => void;
  subUrl?: string;
  subContent?: string;
  onError?: (err: Error) => void;
  debug?: boolean;
  timeOffset?: number;
}

declare class SubtitlesOctopus {
  constructor(options: Options);

  dispose(): void;
}

export = SubtitlesOctopus;
