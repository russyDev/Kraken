export const JSX = {
    createElement(tag: any, props: any, ...children: any) {

      function appendChild(parent: any, child: any){
        if (Array.isArray(child))
          child.forEach(nestedChild => appendChild(parent, nestedChild));
        else
          parent.appendChild(child.nodeType ? child : document.createTextNode(child));
      }

      const element = document.createElement(tag);
  
      (Object).entries(props || {}).forEach(([name, value]: any) => {
          if (name.startsWith('on') && name.toLowerCase() in window)
              element.addEventListener(name.toLowerCase().substr(2), value);
          else element.setAttribute(name, value.toString());
      })
  
      children.forEach((child: any) => {
            appendChild(element, child);
        });
  
      return element;
  },
};
  
  export default JSX;