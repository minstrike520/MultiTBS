export default class {
    constructor() {}
    
    get fileUrl() { return [
        "assets/tiles/tile1.png",
        "assets/sprites/GreenSmile.png" //just for test
    ]} 
    get fileName () { return [
        "tile1",
        "greeny"
    ]}
    getUrl (name) {
        let index = this.fileName.indexOf(name);
        if (!index) throw new Error(`the name ${name} is not in the file list!`);
        return this.fileUrl[index]
    }
    preloadAllInPhaser (game) {
        for (let c = 0; c<this.fileUrl.length;c++) 
        {//console.log("asdf",this.fileName[c]);
            game.load.image(this.fileName[c],this.fileUrl[c]);
        }
    }
}