export default class {
    constructor (x,y,children) {
        this.x = x;
        this.y = y;
        this.children = children;
        this.scale = 1;
        this.origin = [0.5,0.5];
    }
    get originX() {return this.origin[0]}
    get originY() {return this.origin[1]}
    set origin(origin) {this.origin = [origin,origin]}
        
    appendChild (children) {
        this.children = this.children.concat(children);
        return this
    }
    setScale (newScale) {
        this.scale = newScale;
        return this
    }
    setOrigin (x,y) {
        if (!y) {
            this.origin = [x,x];
        } else {
            this.origin = [x,y];
        }
        return this
    }
}

class ContainerChild {
    constructor (x,y,parent, object) {
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.object = object;
    }
}