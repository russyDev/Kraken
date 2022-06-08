declare module JSX {
    type Element = Element;
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }