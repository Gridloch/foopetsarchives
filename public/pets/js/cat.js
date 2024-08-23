class Cat extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'pet'
        });
    }

    preload ()
    {  
        // Display Loading Bar
        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0x35a3d5, 1);
            progressBar.fillRect(389, 337, 100 * value, 6);
        });    
        let background = this.add.image(374, 165, 'bg').setOrigin(.5, .5);  

        this.add.graphics().fillStyle(0x000000).fillRect(386, 334, 116, 12);
        const progressBar = this.add.graphics();
            
        // Load in images and sounds
        // this.load.atlas('petSprite', '../../videos/abyssinian/spritesheet.png', '../../videos/abyssinian/sprites.json');
        this.load.audio('meowSound', ['../../videos/sounds/meow.mp3']);
        this.load.audio('purrSound', ['../../videos/sounds/purr.mp3']);

        // this.load.video('sta.alive_a', '../../videos/abyssinian/sta.alive_a.webm', true);
        // this.load.video('sta.alive_b', '../../videos/abyssinian/sta.alive_b.webm', true);
        // this.load.video('sta.alive_c', '../../videos/abyssinian/sta.alive_c.webm', true);
        // this.load.video('sta.blink', '../../videos/abyssinian/sta.blink.webm', true);
        // this.load.video('sta.breathe', '../../videos/abyssinian/sta.breathe.webm', true);
        // this.load.video('sta.meow', '../../videos/abyssinian/sta.meow.webm', true);
        // this.load.video('sta.sniffscreen', '../../videos/abyssinian/sta.sniffscreen.webm', true);
        // this.load.video('sta.fromclos', '../../videos/abyssinian/clos.clostosta.webm', true);
        // this.load.video('sta.fromsitup', '../../videos/abyssinian/mov.situptosta.webm', true);
        // this.load.video('sta.fromsit', '../../videos/abyssinian/mov.sittosta.webm', true);
        // this.load.video('sta.fromsitdwn', '../../videos/abyssinian/mov.sitdwntosta.webm', true);
        // this.load.video('sta.fromlay', '../../videos/abyssinian/mov.laytosta.webm', true);

        this.load.atlas('sta.fromclos', '../../videos/abyssinian/sprites/clos.clostosta.png', '../../videos/abyssinian/sprites/clos.clostosta.json');

        // this.load.video('clos.blink', '../../videos/abyssinian/clos.blink.webm', true);
        // this.load.video('clos.breathe', '../../videos/abyssinian/clos.breathe.webm', true);
        // this.load.video('clos.lickscreen_a', '../../videos/abyssinian/clos.lickscreen_a.webm', true);
        // this.load.video('clos.lickscreen_b', '../../videos/abyssinian/clos.lickscreen_b.webm', true);
        // this.load.video('clos.meow', '../../videos/abyssinian/clos.meow.webm', true);
        // this.load.video('clos.fromsta', '../../videos/abyssinian/clos.statoclos.webm', true);
        this.load.atlas('clos.blink', '../../videos/abyssinian/sprites/clos.blink.png', '../../videos/abyssinian/sprites/clos.blink.json');
        this.load.atlas('clos.breathe', '../../videos/abyssinian/sprites/clos.breathe.png', '../../videos/abyssinian/sprites/clos.breathe.json');
        this.load.atlas('clos.headscratch._in', '../../videos/abyssinian/sprites/clos.headscratch._in.png', '../../videos/abyssinian/sprites/clos.headscratch._in.json');
        this.load.atlas('clos.headscratch._out', '../../videos/abyssinian/sprites/clos.headscratch._out.png', '../../videos/abyssinian/sprites/clos.headscratch._out.json');
        this.load.atlas('clos.headscratch.main', '../../videos/abyssinian/sprites/clos.headscratch.main.png', '../../videos/abyssinian/sprites/clos.headscratch.main.json');
        this.load.atlas('clos.lickscreen_a', '../../videos/abyssinian/sprites/clos.lickscreen_a.png', '../../videos/abyssinian/sprites/clos.lickscreen_a.json');
        this.load.atlas('clos.lickscreen_b', '../../videos/abyssinian/sprites/clos.lickscreen_b.png', '../../videos/abyssinian/sprites/clos.lickscreen_b.json');
        this.load.atlas('clos.meow', '../../videos/abyssinian/sprites/clos.meow.png', '../../videos/abyssinian/sprites/clos.meow.json');
        this.load.atlas('clos.neckscratch._in', '../../videos/abyssinian/sprites/clos.neckscratch._in.png', '../../videos/abyssinian/sprites/clos.neckscratch._in.json');
        this.load.atlas('clos.neckscratch._out', '../../videos/abyssinian/sprites/clos.neckscratch._out.png', '../../videos/abyssinian/sprites/clos.neckscratch._out.json');
        this.load.atlas('clos.neckscratch.main', '../../videos/abyssinian/sprites/clos.neckscratch.main.png', '../../videos/abyssinian/sprites/clos.neckscratch.main.json');
        this.load.atlas('clos.fromsta', '../../videos/abyssinian/sprites/clos.statoclos.png', '../../videos/abyssinian/sprites/clos.statoclos.json');
        
        this.load.video('situp.alive_a', '../../videos/abyssinian/situp.alive_a.webm', true);
        this.load.video('situp.alive_b', '../../videos/abyssinian/situp.alive_b.webm', true);
        this.load.video('situp.alive_c', '../../videos/abyssinian/situp.alive_c.webm', true);
        this.load.video('situp.blink', '../../videos/abyssinian/situp.blink.webm', true);
        this.load.video('situp.breathe', '../../videos/abyssinian/situp.breathe.webm', true);
        this.load.video('situp.meow', '../../videos/abyssinian/situp.meow.webm', true);
        this.load.video('situp.lickpaw', '../../videos/abyssinian/situp.lickpaw.webm', true);
        this.load.video('situp.fromsta', '../../videos/abyssinian/mov.statositup.webm', true);
        this.load.video('situp.fromsit', '../../videos/abyssinian/mov.sittositup.webm', true);
        this.load.video('situp.fromsitdwn', '../../videos/abyssinian/mov.sitdwntositup.webm', true);
        this.load.video('situp.fromlay', '../../videos/abyssinian/mov.laytositup.webm', true);
        
        this.load.video('sit.alive_a', '../../videos/abyssinian/sit.alive_a.webm', true);
        this.load.video('sit.alive_b', '../../videos/abyssinian/sit.alive_b.webm', true);
        this.load.video('sit.alive_c', '../../videos/abyssinian/sit.alive_c.webm', true);
        this.load.video('sit.fromsta', '../../videos/abyssinian/mov.statosit.webm', true);
        this.load.video('sit.fromsitup', '../../videos/abyssinian/mov.situptosit.webm', true);
        this.load.video('sit.fromsitdwn', '../../videos/abyssinian/mov.sitdwntosit.webm', true);
        
        this.load.video('sitdwn.fromsta', '../../videos/abyssinian/mov.statositdwn.webm', true);
        this.load.video('sitdwn.fromsitup', '../../videos/abyssinian/mov.situptositdwn.webm', true);
        this.load.video('sitdwn.fromsit', '../../videos/abyssinian/mov.sittositdwn.webm', true);
        this.load.video('sitdwn.fromlay', '../../videos/abyssinian/mov.laytositdwn.webm', true);
        
        this.load.video('lay.alive_a', '../../videos/abyssinian/lay.alive_a.webm', true);
        this.load.video('lay.alive_b', '../../videos/abyssinian/lay.alive_b.webm', true);
        this.load.video('lay.alive_c', '../../videos/abyssinian/lay.alive_c.webm', true);
        this.load.video('lay.blink', '../../videos/abyssinian/lay.blink.webm', true);
        this.load.video('lay.breathe', '../../videos/abyssinian/lay.breathe.webm', true);
        this.load.video('lay.meow', '../../videos/abyssinian/lay.meow.webm', true);
        this.load.video('lay.lickbelly', '../../videos/abyssinian/lay.lickbelly.webm', true);
        this.load.video('lay.fromsitdwn', '../../videos/abyssinian/mov.sitdwntolay.webm', true);
        this.load.video('lay.fromslp', '../../videos/abyssinian/mov.slptolay.webm', true);

        this.load.video('slp.breathe', '../../videos/abyssinian/slp.breathe.webm', true);
        this.load.video('slp.fromlay', '../../videos/abyssinian/mov.laytoslp.webm', true);

        this.load.video('foodin', '../../videos/abyssinian/situp.eat._in.webm', true);
        this.load.video('eating_a', '../../videos/abyssinian/sitdwn.eat.a.webm', true);
        this.load.video('eating_b', '../../videos/abyssinian/sitdwn.eat.b.webm', true);
        this.load.video('eating_main', '../../videos/abyssinian/sitdwn.eat.main.webm', true);
        this.load.video('sta.foodout', '../../videos/abyssinian/sta.eat._out.webm', true);

        this.load.video('waterin', '../../videos/abyssinian/situp.drink._in.webm', true);
        this.load.video('drinking', '../../videos/abyssinian/sitdwn.drink.webm', true);
        this.load.video('sta.waterout', '../../videos/abyssinian/sta.drink._out.webm', true);
        
        this.load.video('sta.mouse_catch_a', '../../videos/abyssinian/sta.mouse_catch_a.webm', true);
        this.load.video('sta.mouse_catch_b', '../../videos/abyssinian/sta.mouse_catch_b.webm', true);
        this.load.video('sta.mouse_catch_c', '../../videos/abyssinian/sta.mouse_catch_c.webm', true);
        this.load.video('sta.mouse_miss_a', '../../videos/abyssinian/sta.mouse_miss_a.webm', true);
        this.load.video('sta.mouse_miss_b', '../../videos/abyssinian/sta.mouse_miss_b.webm', true);
        this.load.video('sta.mouse_miss_c', '../../videos/abyssinian/sta.mouse_miss_c.webm', true);
    }

    create ()
    {
        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list

        const staIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'sniffscreen']
        const closIdle = ['lickscreen_a', 'lickscreen_b', 'meow']
        const situpIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'lickpaw']
        const sitIdle = ['alive_a', 'alive_b', 'alive_c']
        const layIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'lickbelly']

        const staMov = ['clos.fromsta', 'situp.fromsta', 'sit.fromsta', 'sitdwn.fromsta']
        const closMov = ['sta.fromclos']
        const situpMov = ['sta.fromsitup', 'sit.fromsitup', 'sitdwn.fromsitup']
        const sitMov = ['situp.fromsit', 'sta.fromsit', 'sitdwn.fromsit']
        const sitdwnMov = ['sta.fromsitdwn', 'situp.fromsitdwn', 'sit.fromsitdwn']
        const layMov = ['sta.fromlay', 'situp.fromlay', 'sitdwn.fromlay', 'slp.fromlay']
        const slpMov = ['lay.fromslp']

        const eating = ['eating_a', 'eating_b', 'eating_main', 'eating_main', 'eating_main']
        const mouse = ['sta.mouse_catch_a', 'sta.mouse_catch_b', 'sta.mouse_catch_c', 'sta.mouse_miss_a', 'sta.mouse_miss_b', 'sta.mouse_miss_c']

        // const pet = this.add.video(374, 165, 'sta.breathe').setOrigin(.5, .5);
        const pet = this.add.sprite(374, 165, 'clos.breathe', 'clos.breathe0001').setOrigin(.5, .5);
            const meowSound = this.sound.add('meowSound');
            const purrSound = this.sound.add('purrSound');
            this.anims.create({
                key: 'clos.blink',
                frames: this.anims.generateFrameNumbers('clos.blink', { frames: [
                    'clos.blink0001', 'clos.blink0002', 'clos.blink0003', 'clos.blink0004', 'clos.blink0005', 'clos.blink0006', 'clos.blink0007', 'clos.blink0008', 'clos.blink0009','clos.blink0010',
                    'clos.blink0011', 'clos.blink0012', 'clos.blink0013', 'clos.blink0014', 'clos.blink0015', 'clos.blink0016'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.breathe',
                frames: this.anims.generateFrameNumbers('clos.breathe', { frames: [
                    'clos.breathe0001', 'clos.breathe0002', 'clos.breathe0003', 'clos.breathe0004', 'clos.breathe0005', 'clos.breathe0006', 'clos.breathe0007', 'clos.breathe0008', 'clos.breathe0009','clos.breathe0010',
                    'clos.breathe0011', 'clos.breathe0012', 'clos.breathe0013', 'clos.breathe0014', 'clos.breathe0015', 'clos.breathe0016'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'sta.fromclos',
                frames: this.anims.generateFrameNumbers('sta.fromclos', { frames: [
                    'clos.clostosta0001', 'clos.clostosta0002', 'clos.clostosta0003', 'clos.clostosta0004', 'clos.clostosta0005', 'clos.clostosta0006', 'clos.clostosta0007', 'clos.clostosta0008', 'clos.clostosta0009','clos.clostosta0010',
                    'clos.clostosta0011', 'clos.clostosta0012', 'clos.clostosta0013', 'clos.clostosta0014', 'clos.clostosta0015', 'clos.clostosta0016', 'clos.clostosta0017', 'clos.clostosta0018', 'clos.clostosta0019','clos.clostosta0020',
                    'clos.clostosta0021', 'clos.clostosta0022', 'clos.clostosta0023', 'clos.clostosta0024', 'clos.clostosta0025', 'clos.clostosta0026', 'clos.clostosta0027', 'clos.clostosta0028', 'clos.clostosta0029','clos.clostosta0030',
                    'clos.clostosta0031', 'clos.clostosta0032', 'clos.clostosta0033', 'clos.clostosta0034', 'clos.clostosta0035', 'clos.clostosta0036', 'clos.clostosta0037', 'clos.clostosta0038', 'clos.clostosta0039','clos.clostosta0040',
                    'clos.clostosta0041', 'clos.clostosta0042', 'clos.clostosta0043', 'clos.clostosta0044', 'clos.clostosta0045', 'clos.clostosta0046', 'clos.clostosta0047', 'clos.clostosta0048', 'clos.clostosta0049','clos.clostosta0050',
                    'clos.clostosta0051', 'clos.clostosta0052', 'clos.clostosta0053', 'clos.clostosta0054', 'clos.clostosta0055', 'clos.clostosta0056', 'clos.clostosta0057', 'clos.clostosta0058', 'clos.clostosta0059','clos.clostosta0060',
                    'clos.clostosta0061', 'clos.clostosta0062', 'clos.clostosta0063', 'clos.clostosta0064', 'clos.clostosta0065', 'clos.clostosta0066', 'clos.clostosta0067', 'clos.clostosta0068', 'clos.clostosta0069','clos.clostosta0070',
                    'clos.clostosta0071', 'clos.clostosta0072', 'clos.clostosta0073', 'clos.clostosta0074', 'clos.clostosta0075', 'clos.clostosta0076', 'clos.clostosta0077', 'clos.clostosta0078', 'clos.clostosta0079','clos.clostosta0080',
                    'clos.clostosta0081', 'clos.clostosta0082', 'clos.clostosta0083', 'clos.clostosta0084', 'clos.clostosta0085', 'clos.clostosta0086', 'clos.clostosta0087', 'clos.clostosta0088', 'clos.clostosta0089','clos.clostosta0090',
                    'clos.clostosta0091', 'clos.clostosta0092', 'clos.clostosta0093', 'clos.clostosta0094', 'clos.clostosta0095', 'clos.clostosta0096', 'clos.clostosta0097', 'clos.clostosta0098', 'clos.clostosta0099','clos.clostosta0100',
                    'clos.clostosta0101', 'clos.clostosta0102', 'clos.clostosta0103', 'clos.clostosta0104', 'clos.clostosta0105', 'clos.clostosta0106', 'clos.clostosta0107'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.headscratch._in',
                frames: this.anims.generateFrameNumbers('clos.headscratch._in', { frames: [
                    'clos.headscratch._in0001', 'clos.headscratch._in0002', 'clos.headscratch._in0003', 'clos.headscratch._in0004', 'clos.headscratch._in0005', 'clos.headscratch._in0006', 'clos.headscratch._in0007', 'clos.headscratch._in0008'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.headscratch._out',
                frames: this.anims.generateFrameNumbers('clos.headscratch._out', { frames: [
                    'clos.headscratch._out0001', 'clos.headscratch._out0002', 'clos.headscratch._out0003', 'clos.headscratch._out0004', 'clos.headscratch._out0005', 'clos.headscratch._out0006', 'clos.headscratch._out0007', 'clos.headscratch._out0008'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.headscratch.main',
                frames: this.anims.generateFrameNumbers('clos.headscratch.main', { frames: [
                    'clos.headscratch.main0001', 'clos.headscratch.main0002', 'clos.headscratch.main0003', 'clos.headscratch.main0004', 'clos.headscratch.main0005', 'clos.headscratch.main0006', 'clos.headscratch.main0007', 'clos.headscratch.main0008', 'clos.headscratch.main0009','clos.headscratch.main0010',
                    'clos.headscratch.main0011', 'clos.headscratch.main0012', 'clos.headscratch.main0013', 'clos.headscratch.main0014', 'clos.headscratch.main0015', 'clos.headscratch.main0016', 'clos.headscratch.main0017', 'clos.headscratch.main0018', 'clos.headscratch.main0019','clos.headscratch.main0020'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.lickscreen_a',
                frames: this.anims.generateFrameNumbers('clos.lickscreen_a', { frames: [
                    'clos.lickscreen_a0001', 'clos.lickscreen_a0002', 'clos.lickscreen_a0003', 'clos.lickscreen_a0004', 'clos.lickscreen_a0005', 'clos.lickscreen_a0006', 'clos.lickscreen_a0007', 'clos.lickscreen_a0008', 'clos.lickscreen_a0009','clos.lickscreen_a0010',
                    'clos.lickscreen_a0011', 'clos.lickscreen_a0012', 'clos.lickscreen_a0013', 'clos.lickscreen_a0014', 'clos.lickscreen_a0015', 'clos.lickscreen_a0016'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.lickscreen_b',
                frames: this.anims.generateFrameNumbers('clos.lickscreen_b', { frames: [
                    'clos.lickscreen_b0001', 'clos.lickscreen_b0002', 'clos.lickscreen_b0003', 'clos.lickscreen_b0004', 'clos.lickscreen_b0005', 'clos.lickscreen_b0006', 'clos.lickscreen_b0007', 'clos.lickscreen_b0008', 'clos.lickscreen_b0009','clos.lickscreen_b0010',
                    'clos.lickscreen_b0011', 'clos.lickscreen_b0012', 'clos.lickscreen_b0013', 'clos.lickscreen_b0014', 'clos.lickscreen_b0015', 'clos.lickscreen_b0016', 'clos.lickscreen_b0017', 'clos.lickscreen_b0018', 'clos.lickscreen_b0019','clos.lickscreen_b0020',
                    'clos.lickscreen_b0021', 'clos.lickscreen_b0022', 'clos.lickscreen_b0023', 'clos.lickscreen_b0024', 'clos.lickscreen_b0025', 'clos.lickscreen_b0026', 'clos.lickscreen_b0027', 'clos.lickscreen_b0028'
                ] }),
                frameRate: 24
            }); 
            this.anims.create({
                key: 'clos.meow',
                frames: this.anims.generateFrameNumbers('clos.meow', { frames: [
                    'clos.meow0001', 'clos.meow0002', 'clos.meow0003', 'clos.meow0004', 'clos.meow0005', 'clos.meow0006', 'clos.meow0007', 'clos.meow0008', 'clos.meow0009','clos.meow0010',
                    'clos.meow0011', 'clos.meow0012', 'clos.meow0013', 'clos.meow0014', 'clos.meow0015', 'clos.meow0016'
                ] }),
                frameRate: 24
            });  
            this.anims.create({
                key: 'clos.neckscratch._in',
                frames: this.anims.generateFrameNumbers('clos.neckscratch._in', { frames: [
                    'clos.neckscratch._in0001', 'clos.neckscratch._in0002', 'clos.neckscratch._in0003', 'clos.neckscratch._in0004', 'clos.neckscratch._in0005', 'clos.neckscratch._in0006', 'clos.neckscratch._in0007', 'clos.neckscratch._in0008'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.neckscratch._out',
                frames: this.anims.generateFrameNumbers('clos.neckscratch._out', { frames: [
                    'clos.neckscratch._out0001', 'clos.neckscratch._out0002', 'clos.neckscratch._out0003', 'clos.neckscratch._out0004', 'clos.neckscratch._out0005', 'clos.neckscratch._out0006', 'clos.neckscratch._out0007', 'clos.neckscratch._out0008', 'clos.neckscratch._out0009', 'clos.neckscratch._out0010',
                    'clos.neckscratch._out0011', 'clos.neckscratch._out0012'
                ] }),
                frameRate: 24
            });
            this.anims.create({
                key: 'clos.neckscratch.main',
                frames: this.anims.generateFrameNumbers('clos.neckscratch.main', { frames: [
                    'clos.neckscratch.main0001', 'clos.neckscratch.main0002', 'clos.neckscratch.main0003', 'clos.neckscratch.main0004', 'clos.neckscratch.main0005', 'clos.neckscratch.main0006', 'clos.neckscratch.main0007', 'clos.neckscratch.main0008', 'clos.neckscratch.main0009','clos.neckscratch.main0010',
                    'clos.neckscratch.main0011', 'clos.neckscratch.main0012', 'clos.neckscratch.main0013', 'clos.neckscratch.main0014', 'clos.neckscratch.main0015', 'clos.neckscratch.main0016', 'clos.neckscratch.main0017', 'clos.neckscratch.main0018', 'clos.neckscratch.main0019','clos.neckscratch.main0020'
                ] }),
                frameRate: 24
            });
        // const closHead1 = this.add.graphics().fillStyle(0x000000).fillRect(296, 65, 120, 80).setAlpha(.5);
        // const closNeck = this.add.graphics().fillStyle(0x000000).fillRect(300, 145, 120, 80).setAlpha(.5);
        const closHead = this.add.graphics().setInteractive({ hitArea: new Phaser.Geom.Rectangle(296, 65, 120, 80), hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        const closNeck = this.add.graphics().setInteractive({ hitArea: new Phaser.Geom.Rectangle(300, 145, 120, 80), hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });

        this.input.setDraggable([closHead, closNeck]);
        this.input.dragDistanceThreshold = 32;

        closHead.on('drag',(pointer, dragX, dragY) => {
            if ( Math.abs(dragX) > 100 || Math.abs(dragY) > 40) {
                currentAction = 'stopPetHead'
            } else {
                currentAction = 'petHead'
                action = true
            }
        });
        closHead.on('pointerup', () => { currentAction = 'stopPetHead' })

        closNeck.on('drag',(pointer, dragX, dragY) => {
            if ( Math.abs(dragX) > 100 || Math.abs(dragY) > 40) {
                currentAction = 'stopPetNeck'
            } else {
                currentAction = 'petNeck'
                action = true
            }
        });
        closNeck.on('pointerup', () => { currentAction = 'stopPetNeck' })

        let action = false
        let currentAction = 'none'
        pet.on('animationcomplete',switchSprite);
        pet.play('clos.breathe')

        // const mouseButton = this.add.text(299, 300, 'Mouse', { fill: '#000' }).setOrigin(.5, .5);
        // mouseButton.setInteractive({ useHandCursor: true });
        // mouseButton.on('pointerover', () => { if (!action) {mouseButton.setStyle({ fill: '#fff'}); }});
        // mouseButton.on('pointerout', () => { mouseButton.setStyle({ fill: '#000'}); });
        // mouseButton.on('pointerdown', () => {
        //     if (!action) {
        //         action = true
        //         currentAction = 'mouse'
        //     }
        // });

        // const waterButton = this.add.text(374, 300, 'Water', { fill: '#000' }).setOrigin(.5, .5);
        // waterButton.setInteractive({ useHandCursor: true });
        // waterButton.on('pointerover', () => { if (!action) {waterButton.setStyle({ fill: '#fff'}); }});
        // waterButton.on('pointerout', () => { waterButton.setStyle({ fill: '#000'}); });
        // waterButton.on('pointerdown', () => {
        //     if (!action) {
        //         action = true
        //         currentAction = 'water'
        //     }
        // });

        // const foodButton = this.add.text(449, 300, 'Food', { fill: '#000' }).setOrigin(.5, .5);
        // foodButton.setInteractive({ useHandCursor: true });
        // foodButton.on('pointerover', () => { if (!action) {foodButton.setStyle({ fill: '#fff'}); }});
        // foodButton.on('pointerout', () => { foodButton.setStyle({ fill: '#000'}); });
        // foodButton.on('pointerdown',  () => {
        //     if (!action) {
        //         action = true
        //         currentAction = 'feed'
        //     }
        // });

        // function giveFood() {
        //     let nextVid = null
        //     if (pet.getVideoKey().startsWith('sta')) {nextVid = `situp.fromsta`;}
        //     else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`;}
        //     else if (pet.getVideoKey().startsWith('situp')) {nextVid = `foodin`;} // start feeding
        //     else if (pet.getVideoKey().startsWith('sitdwn')) {nextVid = `situp.fromsitdwn`;}
        //     else if (pet.getVideoKey().startsWith('sit')) {nextVid = `situp.fromsit`;}
        //     else if (pet.getVideoKey().startsWith('lay')) {nextVid = `situp.fromlay`;}
        //     else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`;}
        //     else if (pet.getVideoKey().startsWith('eating_main')) {
        //         action = false
        //         currentAction = 'none'
        //         nextVid = `sta.foodout`;
        //     }
        //     else if (pet.getVideoKey().startsWith('foodin') || pet.getVideoKey().startsWith('eating')) {
        //         nextVid = `${eating[randomIntFromInterval(0, eating.length-1)]}`;
        //     }
        //     return nextVid
        // }

        // function giveWater() {
        //     let nextVid = null
        //     if (pet.getVideoKey().startsWith('sta')) {nextVid = `situp.fromsta`;}
        //     else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`;}
        //     else if (pet.getVideoKey().startsWith('situp')) {nextVid = `waterin`;} // start drinking
        //     else if (pet.getVideoKey().startsWith('sitdwn')) {nextVid = `situp.fromsitdwn`;}
        //     else if (pet.getVideoKey().startsWith('sit')) {nextVid = `situp.fromsit`;}
        //     else if (pet.getVideoKey().startsWith('lay')) {nextVid = `situp.fromlay`;}
        //     else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`;}
        //     else if (pet.getVideoKey().startsWith('waterin')) {
        //             nextVid = `drinking`;
        //     }
        //     else if (pet.getVideoKey().startsWith('drinking')) {
        //         action = false
        //         currentAction = 'none'
        //         nextVid = `sta.waterout`;
        //     }
        //     return nextVid
        // }

        // function giveMouse() {
        //     let nextVid = null
        //     if (pet.getVideoKey().startsWith('sta')) {
        //         action = false
        //         currentAction = 'none'
        //         nextVid = `${mouse[randomIntFromInterval(0, mouse.length-1)]}`;
        //     }
        //     else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`;}
        //     else if (pet.getVideoKey().startsWith('situp')) {nextVid = `sta.fromsitup`;}
        //     else if (pet.getVideoKey().startsWith('sitdwn')) {nextVid = `sta.fromsitdwn`;}
        //     else if (pet.getVideoKey().startsWith('sit')) {nextVid = `sta.fromsit`;}
        //     else if (pet.getVideoKey().startsWith('lay')) {nextVid = `sta.fromlay`;}
        //     else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`;}
        //     return nextVid
        // }

        function switchSprite(){
            let nextSprite = pet.anims.getName()
            if (action) {
                switch (currentAction) {
                    case 'petHead':
                        nextSprite = petHead()
                        break;
                    case 'stopPetHead':
                        nextSprite = stopPetHead()
                        break;
                    case 'petNeck':
                        nextSprite = petNeck()
                        break;
                    case 'stopPetNeck':
                        nextSprite = stopPetNeck()
                        break;
                    // case 'feed':
                    //     nextSprite = giveFood()
                    //     break;
                    // case 'water':
                    //     nextSprite = giveWater()
                    //     break;
                    // case 'mouse':
                    //     nextSprite = giveMouse()
                    //     break;
                
                    default:
                        action = false
                        break;
                }
            }
            else if (pet.anims.getName().startsWith('clos')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 10) {
                    nextSprite = `clos.blink`;
                } else if (rand < 70) {
                    nextSprite = `clos.breathe`;
                // } else if (rand < 85) {
                } else if (rand < 100) {
                    nextSprite = `clos.${closIdle[randomIntFromInterval(0, closIdle.length-1)]}`;
                } else {
                    nextSprite = `${closMov[randomIntFromInterval(0, closMov.length-1)]}`;
                }
            } 
            // console.log(pet.anims.getName())
            // pet.setSprite(nextSprite)
            pet.play(nextSprite)
            // console.log(nextSprite)
            if (nextSprite.includes('meow')) {
                meowSound.play()
            }
        }

        function petHead() {
            let nextSprite = pet.anims.getName()
            if (pet.anims.getName().startsWith('clos')) {
                if (pet.anims.getName() === 'clos.headscratch.main' || pet.anims.getName() === 'clos.headscratch._in') {
                    nextSprite = 'clos.headscratch.main'
                    purrSound.play()
                } else {
                    nextSprite = 'clos.headscratch._in'
                }
            }
            return nextSprite
        }

        function stopPetHead() {
            let nextSprite = pet.anims.getName()
            action = false
            if (pet.anims.getName().startsWith('clos.headscratch')) {
                nextSprite = 'clos.headscratch._out'
            }
            return nextSprite
        }

        function petNeck() {
            let nextSprite = pet.anims.getName()
            if (pet.anims.getName().startsWith('clos')) {
                if (pet.anims.getName() === 'clos.neckscratch.main' || pet.anims.getName() === 'clos.neckscratch._in') {
                    nextSprite = 'clos.neckscratch.main'
                    purrSound.play()
                } else {
                    nextSprite = 'clos.neckscratch._in'
                }
            }
            return nextSprite
        }

        function stopPetNeck() {
            let nextSprite = pet.anims.getName()
            action = false
            if (pet.anims.getName().startsWith('clos.neckscratch')) {
                nextSprite = 'clos.neckscratch._out'
            }
            return nextSprite
        }

        // function switchVideo() {
        //     let nextVid = null
        //     if (action) {
        //         switch (currentAction) {
        //             case 'feed':
        //                 nextVid = giveFood()
        //                 break;
        //             case 'water':
        //                 nextVid = giveWater()
        //                 break;
        //             case 'mouse':
        //                 nextVid = giveMouse()
        //                 break;
                
        //             default:
        //                 action = false
        //                 break;
        //         }
        //     }
        //     else if (pet.getVideoKey().startsWith('sta')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 10) {
        //             nextVid = `sta.blink`;
        //         } else if (rand < 70) {
        //             nextVid = `sta.breathe`;
        //         } else if (rand < 85) {
        //             nextVid = `sta.${staIdle[randomIntFromInterval(0, staIdle.length-1)]}`;
        //         } else {
        //             nextVid = `${staMov[randomIntFromInterval(0, staMov.length-1)]}`;
        //         }
        //     } 
        //     else if (pet.getVideoKey().startsWith('clos')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 10) {
        //             nextVid = `clos.blink`;
        //         } else if (rand < 70) {
        //             nextVid = `clos.breathe`;
        //         } else if (rand < 85) {
        //             nextVid = `clos.${closIdle[randomIntFromInterval(0, closIdle.length-1)]}`;
        //         } else {
        //             nextVid = `${closMov[randomIntFromInterval(0, closMov.length-1)]}`;
        //         }
        //     } 
        //     else if (pet.getVideoKey().startsWith('situp')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 10) {
        //             nextVid = `situp.blink`;
        //         } else if (rand < 70) {
        //             nextVid = `situp.breathe`;
        //         } else if (rand < 85) {
        //             nextVid = `situp.${situpIdle[randomIntFromInterval(0, situpIdle.length-1)]}`;
        //         } else {
        //             nextVid = `${situpMov[randomIntFromInterval(0, situpMov.length-1)]}`;
        //         }
        //     } 
        //     else if (pet.getVideoKey().startsWith('sitdwn')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 80) {
        //             nextVid = `lay.fromsitdwn`;
        //         } else {
        //             nextVid = `${sitdwnMov[randomIntFromInterval(0, sitdwnMov.length-1)]}`;
        //         }
        //     } 
        //     else if (pet.getVideoKey().startsWith('sit')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 60) {
        //             nextVid = `sit.${sitIdle[randomIntFromInterval(0, sitIdle.length-1)]}`;
        //         } else {
        //             nextVid = `${sitMov[randomIntFromInterval(0, sitMov.length-1)]}`;
        //         }
        //     } 
        //     else if (pet.getVideoKey().startsWith('lay')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 10) {
        //             nextVid = `lay.blink`;
        //         } else if (rand < 70) {
        //             nextVid = `lay.breathe`;
        //         } else if (rand < 85) {
        //             nextVid = `lay.${layIdle[randomIntFromInterval(0, layIdle.length-1)]}`;
        //         } else {
        //             nextVid = `${layMov[randomIntFromInterval(0, layMov.length-1)]}`;
        //         }
        //     } 
        //     else if (pet.getVideoKey().startsWith('slp')) {
        //         let rand = randomIntFromInterval(0, 99)
        //         if (rand < 90) {
        //             nextVid = `slp.breathe`;
        //         } else {
        //             nextVid = `${slpMov[randomIntFromInterval(0, slpMov.length-1)]}`;
        //         }
        //     } 

        //     if (nextVid !== currentVid) {
        //         pet.changeSource(nextVid, true, false);
        //         currentVid = nextVid
        //     }
        //     pet.play()
        // }

        /**
             * Generates a random integer between two values
             * @param {number} min The minimum number that could be returned
             * @param {number} max The maximum number that could be returned
             * @returns 
             */
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }

    update ()
    {
    }
}