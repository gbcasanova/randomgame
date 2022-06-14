var config = {
    type: Phaser.AUTO,
    
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 256,
    height: 256,
    
    scene: [Level]
};

var game = new Phaser.Game(config);
