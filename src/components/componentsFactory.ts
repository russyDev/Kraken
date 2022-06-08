import Component from './component';
import observer from '../lib/observer';

class ComponentsFactory {
    create = (name = '', render = () => ('')) => {
        const component = new Component({name, render});
        observer.subscribe(component);
        return component;
    }
} 

export default new ComponentsFactory();