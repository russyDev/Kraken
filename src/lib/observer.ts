import { TComponent } from "../components/component";

class Observer {
    subscrubers: TComponent[] = [];

    inform = () => {
        this.subscrubers.forEach((watcher) => {
            watcher.inform();
        });
    }

    subscribe = (watcher: TComponent) => {
        this.subscrubers.push(watcher);
    };

    unsubscribe = (watcher: TComponent) => {
        // delete this.subscrubers[watcher.id];
    }
}

export default new Observer();