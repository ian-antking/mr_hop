let gameState = new Phaser.Scene('Game');

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false,
        }
    },
    scene: gameState,
}

let game = new Phaser.Game(config);

gameState.key = 'main';

gameState.preload = function(){
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
    this.load.image('coin', 'assets/coinGold.png');
    this.load.atlas('player', 'assets/player.png', 'assets/player.json');

};

gameState.create = function(){
    this.map = this.make.tilemap({key: 'map'});

};

gameState.update = function(){

};