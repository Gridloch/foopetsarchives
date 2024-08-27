// This scene is just used to load the image for the loading screen
class Load extends Phaser.Scene 
{
    constructor ()
    {
        super({ key: 'Load' });
    }

    preload ()
    {
        this.load.image('bg', '../../images/bg1.jpg');
    }

    create ()
    { 
        let loadScene
        switch (petType) {
            case 'abyssinian':
                missingFiles = true
                loadScene = 'cat'
                break;
            case 'bengal':
                missingFiles = false
                loadScene = 'cat'
                break;
            case 'husky':
                missingFiles = false
                loadScene = 'dog'
                break;
        
            default:
                petType = 'abyssinian'
                missingFiles = true
                loadScene = 'cat'
                break;
        }
        this.scene.start(loadScene);
    }
}