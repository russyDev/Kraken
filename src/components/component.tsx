import { JSX } from "../lib/JSX";

export interface TComponent {
    content: Element | null;
    isRerenderEnabled: boolean;
    state: any;
    inform(): void;
    render(): Element;
} 

export default class Component implements TComponent {

    state = {};
    
    content = null
    
    isRerenderEnabled = true;

    constructor(props: {name: string, render: any}) {
    }
   
    inform = () => {
        if (this.isRerenderEnabled) {
            this.render();
        }
    }

    render = (): Element => {
        return <div>Component content is here</div>;
    }
}
