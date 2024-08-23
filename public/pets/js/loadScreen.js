// This scene is just used to load the image for the loading screen
class Load extends Phaser.Scene 
{
    constructor ()
    {
        super({ key: 'Load' });
    }

    preload ()
    {
        this.load.image('card_back', '../../images/bg1.jpg');
    }

    create ()
    { 
        this.scene.start('pet');
    }
}