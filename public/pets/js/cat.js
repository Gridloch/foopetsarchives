class Cat extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'cat'
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
        this.load.atlas('petSprite', `../../videos/${petType}/spritesheet.png`, `../../videos/${petType}/sprites.json`);
        // this.load.audio('background_music', ['./sounds/stable_soundtrack.mp3']);
        this.load.audio('meowSound', ['../../videos/sounds/meow.mp3']);
        this.load.audio('purrSound', ['../../videos/sounds/purr.mp3']);

        this.load.video('sta.alive_a', `../../videos/${petType}/sta.alive_a.webm`, true);
        this.load.video('sta.alive_b', `../../videos/${petType}/sta.alive_b.webm`, true);
        this.load.video('sta.alive_c', `../../videos/${petType}/sta.alive_c.webm`, true);
        this.load.video('sta.blink', `../../videos/${petType}/sta.blink.webm`, true);
        this.load.video('sta.breathe', `../../videos/${petType}/sta.breathe.webm`, true);
        this.load.video('sta.meow', `../../videos/${petType}/sta.meow.webm`, true);
        this.load.video('sta.sniffscreen', `../../videos/${petType}/sta.sniffscreen.webm`, true);
        // this.load.video('sta.pooping.main', `../../videos/${petType}/sta.pooping.main.webm`, true);
        this.load.video('sta.aggression._in', `../../videos/${petType}/sta.aggression._in.webm`, true);
        this.load.video('sta.aggression._out', `../../videos/${petType}/sta.aggression._out.webm`, true);
        this.load.video('sta.aggression.main', `../../videos/${petType}/sta.aggression.main.webm`, true);
        this.load.video('sta.backscratch._in', `../../videos/${petType}/sta.backscratch._in.webm`, true);
        this.load.video('sta.backscratch._out', `../../videos/${petType}/sta.backscratch._out.webm`, true);
        this.load.video('sta.backscratch.main', `../../videos/${petType}/sta.backscratch.main.webm`, true);
        this.load.video('sta.buttscratch._in', `../../videos/${petType}/sta.buttscratch._in.webm`, true);
        this.load.video('sta.buttscratch._out', `../../videos/${petType}/sta.buttscratch._out.webm`, true);
        this.load.video('sta.buttscratch.main', `../../videos/${petType}/sta.buttscratch.main.webm`, true);
        this.load.video('sta.headscratch._in', `../../videos/${petType}/sta.headscratch._in.webm`, true);
        this.load.video('sta.headscratch._out', `../../videos/${petType}/sta.headscratch._out.webm`, true);
        this.load.video('sta.headscratch.main', `../../videos/${petType}/sta.headscratch.main.webm`, true);
        this.load.video('sta.neckscratch._in', `../../videos/${petType}/sta.neckscratch._in.webm`, true);
        this.load.video('sta.neckscratch._out', `../../videos/${petType}/sta.neckscratch._out.webm`, true);
        this.load.video('sta.neckscratch.main', `../../videos/${petType}/sta.neckscratch.main.webm`, true);
        // this.load.video('sta.scruff_a._out', `../../videos/${petType}/sta.scruff_a._out.webm`, true);
        // this.load.video('sta.scruff_a.main', `../../videos/${petType}/sta.scruff_a.main.webm`, true);
        // this.load.video('sta.walk_l._in', `../../videos/${petType}/sta.walk_l._in.webm`, true);
        // this.load.video('sta.walk_l._out', `../../videos/${petType}/sta.walk_l._out.webm`, true);
        // this.load.video('sta.walk_l.main', `../../videos/${petType}/sta.walk_l.main.webm`, true);
        // this.load.video('sta.walk_r._in', `../../videos/${petType}/sta.walk_r._in.webm`, true);
        // this.load.video('sta.walk_r._out', `../../videos/${petType}/sta.walk_r._out.webm`, true);
        // this.load.video('sta.walk_r.main', `../../videos/${petType}/sta.walk_r.main.webm`, true);
        this.load.video('sta.fromclos', `../../videos/${petType}/clos.clostosta.webm`, true);
        this.load.video('sta.fromsitup', `../../videos/${petType}/mov.situptosta.webm`, true);
        this.load.video('sta.fromsit', `../../videos/${petType}/mov.sittosta.webm`, true);
        this.load.video('sta.fromsitdwn', `../../videos/${petType}/mov.sitdwntosta.webm`, true);
        this.load.video('sta.fromlay', `../../videos/${petType}/mov.laytosta.webm`, true);

        this.load.video('clos.blink', `../../videos/${petType}/clos.blink.webm`, true);
        this.load.video('clos.breathe', `../../videos/${petType}/clos.breathe.webm`, true);
        this.load.video('clos.lickscreen_a', `../../videos/${petType}/clos.lickscreen_a.webm`, true);
        this.load.video('clos.lickscreen_b', `../../videos/${petType}/clos.lickscreen_b.webm`, true);
        this.load.video('clos.meow', `../../videos/${petType}/clos.meow.webm`, true);
        this.load.video('clos.headscratch._in', `../../videos/${petType}/clos.headscratch._in.webm`, true);
        this.load.video('clos.headscratch._out', `../../videos/${petType}/clos.headscratch._out.webm`, true);
        this.load.video('clos.headscratch.main', `../../videos/${petType}/clos.headscratch.main.webm`, true);
        this.load.video('clos.neckscratch._in', `../../videos/${petType}/clos.neckscratch._in.webm`, true);
        this.load.video('clos.neckscratch._out', `../../videos/${petType}/clos.neckscratch._out.webm`, true);
        this.load.video('clos.neckscratch.main', `../../videos/${petType}/clos.neckscratch.main.webm`, true);
        this.load.video('clos.fromsta', `../../videos/${petType}/clos.statoclos.webm`, true);
        
        this.load.video('situp.alive_a', `../../videos/${petType}/situp.alive_a.webm`, true);
        this.load.video('situp.alive_b', `../../videos/${petType}/situp.alive_b.webm`, true);
        this.load.video('situp.alive_c', `../../videos/${petType}/situp.alive_c.webm`, true);
        this.load.video('situp.blink', `../../videos/${petType}/situp.blink.webm`, true);
        this.load.video('situp.breathe', `../../videos/${petType}/situp.breathe.webm`, true);
        this.load.video('situp.meow', `../../videos/${petType}/situp.meow.webm`, true);
        this.load.video('situp.lickpaw', `../../videos/${petType}/situp.lickpaw.webm`, true);
        this.load.video('situp.headscratch._in', `../../videos/${petType}/situp.headscratch._in.webm`, true);
        this.load.video('situp.headscratch._out', `../../videos/${petType}/situp.headscratch._out.webm`, true);
        this.load.video('situp.headscratch.main', `../../videos/${petType}/situp.headscratch.main.webm`, true);
        this.load.video('situp.neckscratch._in', `../../videos/${petType}/situp.neckscratch._in.webm`, true);
        this.load.video('situp.neckscratch._out', `../../videos/${petType}/situp.neckscratch._out.webm`, true);
        this.load.video('situp.neckscratch.main', `../../videos/${petType}/situp.neckscratch.main.webm`, true);
        // this.load.video('situp.bowl', `../../videos/${petType}/situp._bwl.webm`, true);
        // this.load.video('situp.meowbowl', `../../videos/${petType}/situp.meowbwl.webm`, true);
        this.load.video('situp.fromsta', `../../videos/${petType}/mov.statositup.webm`, true);
        this.load.video('situp.fromsit', `../../videos/${petType}/mov.sittositup.webm`, true);
        this.load.video('situp.fromsitdwn', `../../videos/${petType}/mov.sitdwntositup.webm`, true);
        this.load.video('situp.fromlay', `../../videos/${petType}/mov.laytositup.webm`, true);
        
        this.load.video('sit.alive_a', `../../videos/${petType}/sit.alive_a.webm`, true);
        this.load.video('sit.alive_b', `../../videos/${petType}/sit.alive_b.webm`, true);
        this.load.video('sit.alive_c', `../../videos/${petType}/sit.alive_c.webm`, true);
        this.load.video('sit.headscratch._in', `../../videos/${petType}/sit.headscratch._in.webm`, true);
        this.load.video('sit.headscratch._out', `../../videos/${petType}/sit.headscratch._out.webm`, true);
        this.load.video('sit.headscratch.main', `../../videos/${petType}/sit.headscratch.main.webm`, true);
        // this.load.video('sit.getbowl', `../../videos/${petType}/sit.getbowl.webm`, true);
        this.load.video('sit.fromsta', `../../videos/${petType}/mov.statosit.webm`, true);
        this.load.video('sit.fromsitup', `../../videos/${petType}/mov.situptosit.webm`, true);
        this.load.video('sit.fromsitdwn', `../../videos/${petType}/mov.sitdwntosit.webm`, true);
        
        this.load.video('sitdwn.fromsta', `../../videos/${petType}/mov.statositdwn.webm`, true);
        this.load.video('sitdwn.fromsitup', `../../videos/${petType}/mov.situptositdwn.webm`, true);
        this.load.video('sitdwn.fromsit', `../../videos/${petType}/mov.sittositdwn.webm`, true);
        this.load.video('sitdwn.fromlay', `../../videos/${petType}/mov.laytositdwn.webm`, true);
        
        this.load.video('lay.alive_a', `../../videos/${petType}/lay.alive_a.webm`, true);
        this.load.video('lay.alive_b', `../../videos/${petType}/lay.alive_b.webm`, true);
        this.load.video('lay.alive_c', `../../videos/${petType}/lay.alive_c.webm`, true);
        this.load.video('lay.blink', `../../videos/${petType}/lay.blink.webm`, true);
        this.load.video('lay.breathe', `../../videos/${petType}/lay.breathe.webm`, true);
        this.load.video('lay.meow', `../../videos/${petType}/lay.meow.webm`, true);
        this.load.video('lay.lickbelly', `../../videos/${petType}/lay.lickbelly.webm`, true);
        this.load.video('lay.bellyscratch._in', `../../videos/${petType}/lay.bellyscratch._in.webm`, true);
        this.load.video('lay.bellyscratch._out', `../../videos/${petType}/lay.bellyscratch._out.webm`, true);
        this.load.video('lay.bellyscratch.main', `../../videos/${petType}/lay.bellyscratch.main.webm`, true);
        this.load.video('lay.headscratch._in', `../../videos/${petType}/lay.headscratch._in.webm`, true);
        this.load.video('lay.headscratch._out', `../../videos/${petType}/lay.headscratch._out.webm`, true);
        this.load.video('lay.headscratch.main', `../../videos/${petType}/lay.headscratch.main.webm`, true);
        this.load.video('lay.neckscratch._in', `../../videos/${petType}/lay.neckscratch._in.webm`, true);
        this.load.video('lay.neckscratch._out', `../../videos/${petType}/lay.neckscratch._out.webm`, true);
        this.load.video('lay.neckscratch.main', `../../videos/${petType}/lay.neckscratch.main.webm`, true);
        this.load.video('lay.fromsitdwn', `../../videos/${petType}/mov.sitdwntolay.webm`, true);
        this.load.video('lay.fromslp', `../../videos/${petType}/mov.slptolay.webm`, true);

        this.load.video('slp.breathe', `../../videos/${petType}/slp.breathe.webm`, true);
        this.load.video('slp.fromlay', `../../videos/${petType}/mov.laytoslp.webm`, true);

        this.load.video('foodin', `../../videos/${petType}/situp.eat._in.webm`, true);
        this.load.video('eating_a', `../../videos/${petType}/sitdwn.eat_a.webm`, true);
        this.load.video('eating_b', `../../videos/${petType}/sitdwn.eat_b.webm`, true);
        this.load.video('eating_main', `../../videos/${petType}/sitdwn.eat.main.webm`, true);
        this.load.video('sta.foodout', `../../videos/${petType}/sta.eat._out.webm`, true);

        this.load.video('waterin', `../../videos/${petType}/situp.drink._in.webm`, true);
        this.load.video('drinking', `../../videos/${petType}/sitdwn.drink.webm`, true);
        this.load.video('sta.waterout', `../../videos/${petType}/sta.drink._out.webm`, true);
        
        this.load.video('sta.mouse_catch_a', `../../videos/${petType}/sta.mouse_catch_a.webm`, true);
        this.load.video('sta.mouse_catch_b', `../../videos/${petType}/sta.mouse_catch_b.webm`, true);
        this.load.video('sta.mouse_catch_c', `../../videos/${petType}/sta.mouse_catch_c.webm`, true);
        this.load.video('sta.mouse_miss_a', `../../videos/${petType}/sta.mouse_miss_a.webm`, true);
        this.load.video('sta.mouse_miss_b', `../../videos/${petType}/sta.mouse_miss_b.webm`, true);
        this.load.video('sta.mouse_miss_c', `../../videos/${petType}/sta.mouse_miss_c.webm`, true);

        if (!missingFiles) {
            // this.load.video('sta.peeing.main', `../../videos/${petType}/sta.peeing.main.webm`, true);

            this.load.video('sit.blink', `../../videos/${petType}/sit.blink.webm`, true);
            this.load.video('sit.breathe', `../../videos/${petType}/sit.breathe.webm`, true);
            this.load.video('sit.hindlegscratch', `../../videos/${petType}/sit.hindlegscratch.webm`, true);
            this.load.video('sit.meow', `../../videos/${petType}/sit.meow.webm`, true);
            this.load.video('sit.neckscratch._in', `../../videos/${petType}/sit.neckscratch._in.webm`, true);
            this.load.video('sit.neckscratch.main', `../../videos/${petType}/sit.neckscratch.main.webm`, true);
            this.load.video('sit.neckscratch._out', `../../videos/${petType}/sit.neckscratch._out.webm`, true);

            this.load.video('sitdwn.alive_a', `../../videos/${petType}/sitdwn.alive_a.webm`, true);
            this.load.video('sitdwn.alive_b', `../../videos/${petType}/sitdwn.alive_b.webm`, true);
            this.load.video('sitdwn.alive_c', `../../videos/${petType}/sitdwn.alive_c.webm`, true);
            this.load.video('sitdwn.blink', `../../videos/${petType}/sitdwn.blink.webm`, true);
            this.load.video('sitdwn.breathe', `../../videos/${petType}/sitdwn.breathe.webm`, true);
            this.load.video('sitdwn.lickballs', `../../videos/${petType}/sitdwn.lickballs.webm`, true);
            this.load.video('sitdwn.lickpaw', `../../videos/${petType}/sitdwn.lickpaw.webm`, true);
            this.load.video('sitdwn.meow', `../../videos/${petType}/sitdwn.meow.webm`, true);
            this.load.video('sitdwn.headscratch._in', `../../videos/${petType}/sitdwn.headscratch._in.webm`, true);
            this.load.video('sitdwn.headscratch.main', `../../videos/${petType}/sitdwn.headscratch.main.webm`, true);
            this.load.video('sitdwn.headscratch._out', `../../videos/${petType}/sitdwn.headscratch._out.webm`, true);
            this.load.video('sitdwn.neckscratch._in', `../../videos/${petType}/sitdwn.neckscratch._in.webm`, true);
            this.load.video('sitdwn.neckscratch.main', `../../videos/${petType}/sitdwn.neckscratch.main.webm`, true);
            this.load.video('sitdwn.neckscratch._out', `../../videos/${petType}/sitdwn.neckscratch._out.webm`, true);

            this.load.video('slp.alive_a', `../../videos/${petType}/slp.alive_a.webm`, true);
            this.load.video('slp.alive_b', `../../videos/${petType}/slp.alive_b.webm`, true);
            this.load.video('slp.blink', `../../videos/${petType}/slp.blink.webm`, true);
            
            this.load.video('foodin_b', `../../videos/${petType}/situp.eat._in_b.webm`, true);
            this.load.video('drinkin_b', `../../videos/${petType}/situp.drink._in_b.webm`, true);
        }
    }

    create ()
    {
        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list

        const staIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'sniffscreen']
        const closIdle = ['lickscreen_a', 'lickscreen_b', 'meow']
        const situpIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'lickpaw']
        const sitdwnIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'lickpaw', 'lickballs']
        let sitIdle = ['alive_a', 'alive_b', 'alive_c']
        const layIdle = ['alive_a', 'alive_b', 'alive_c', 'meow', 'lickbelly']
        let slpIdle = ['breathe']
        if (!missingFiles) {
            sitIdle = ['alive_a', 'alive_b', 'alive_c', 'hindlegscratch', 'meow']
            slpIdle = ['alive_a', 'alive_b', 'blink']
        }

        const staMov = ['clos.fromsta', 'situp.fromsta', 'sit.fromsta', 'sitdwn.fromsta']
        const closMov = ['sta.fromclos']
        const situpMov = ['sta.fromsitup', 'sit.fromsitup', 'sitdwn.fromsitup']
        const sitMov = ['situp.fromsit', 'sta.fromsit', 'sitdwn.fromsit']
        const sitdwnMov = ['sta.fromsitdwn', 'situp.fromsitdwn', 'sit.fromsitdwn']
        const layMov = ['sta.fromlay', 'situp.fromlay', 'sitdwn.fromlay', 'slp.fromlay']

        const eating = ['eating_a', 'eating_b', 'eating_main', 'eating_main', 'eating_main']
        const mouse = ['sta.mouse_catch_a', 'sta.mouse_catch_b', 'sta.mouse_catch_c', 'sta.mouse_miss_a', 'sta.mouse_miss_b', 'sta.mouse_miss_c']

        let currentVid = 'sta.breathe'
        petSprite = this.add.sprite(374, 165, 'petSprite', 'sta').setOrigin(.5, .5).setVisible(false);
        pet = this.add.video(374, 165, currentVid).setOrigin(.5, .5);
        const meowSound = this.sound.add('meowSound');
        const purrSound = this.sound.add('purrSound');
        let action = false
        let currentAction = 'none'

        pet.on('complete',switchVideo);
        pet.play()

        // Petting
        let keepDragging = true
        let headHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let neckHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let bellyHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let backHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let buttHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let head = this.add.graphics().setInteractive({ hitArea: headHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        let neck = this.add.graphics().setInteractive({ hitArea: neckHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        let belly = this.add.graphics().setInteractive({ hitArea: bellyHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        let back = this.add.graphics().setInteractive({ hitArea: backHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        let butt = this.add.graphics().setInteractive({ hitArea: buttHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        let frame = this.add.graphics().setInteractive({ hitArea: new Phaser.Geom.Rectangle(0, 0, 330, 748), hitAreaCallback: Phaser.Geom.Rectangle.Contains });
        
        this.input.setDraggable([head, neck, belly, back, butt]);
        this.input.dragDistanceThreshold = 10;
        this.input.topOnly = false;

        head.on('drag', (pointer, dragX, dragY) => {petInteraction(pointer, dragX, dragY, 'Head')});
        neck.on('drag', (pointer, dragX, dragY) => {petInteraction(pointer, dragX, dragY, 'Neck')});
        belly.on('drag', (pointer, dragX, dragY) => {petInteraction(pointer, dragX, dragY, 'Belly')});
        back.on('drag', (pointer, dragX, dragY) => {petInteraction(pointer, dragX, dragY, 'Back')});
        butt.on('drag', (pointer, dragX, dragY) => {petInteraction(pointer, dragX, dragY, 'Butt')});
        
        frame.on('pointerup', () => { stopPetInteraction() })
        head.on('pointerup', () => { stopPetInteraction() })
        neck.on('pointerup', () => { stopPetInteraction() })
        belly.on('pointerup', () => { stopPetInteraction() })
        back.on('pointerup', () => { stopPetInteraction() })
        butt.on('pointerup', () => { stopPetInteraction() })

        function stopPetInteraction() {
            if (currentAction !== null && currentAction.startsWith('pet')) {
                currentAction = `stopP${currentAction.substring(1)}`
            }; keepDragging = true 
        }

        function petInteraction(pointer, dragX, dragY, location) {
            if ( Math.abs(dragX) > 120 || Math.abs(dragY) > 50) {
                currentAction = `stopPet${location}`
                keepDragging = false
            } else if (keepDragging && !currentVid.includes('from')) {
                // Ignoring transition videos since petting should not start as the pet switches positions
                currentAction = `pet${location}`
                action = true
            }
        }

        /**
         * Adjusts the x, y, width and height of the given hitbox to match the provided values
         * @param {*} hitbox The hitbox to adjust
         * @param {*} x The new x position for the hitbox
         * @param {*} y The new y position for the hitbox
         * @param {*} width The new width for the hitbox
         * @param {*} height The new height for the hitbox
         */
        function setHitbox(hitbox, x, y, width, height) {
            hitbox.x = x
            hitbox.y = y
            hitbox.width = width
            hitbox.height = height
        }

        // Buttons
        const mouseButton = this.add.text(299, 300, 'Mouse', { fill: '#000' }).setOrigin(.5, .5);
        mouseButton.setInteractive({ useHandCursor: true });
        mouseButton.on('pointerover', () => { if (!action) {mouseButton.setStyle({ fill: '#fff'}); }});
        mouseButton.on('pointerout', () => { mouseButton.setStyle({ fill: '#000'}); });
        mouseButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'mouse'
            }
        });

        const waterButton = this.add.text(374, 300, 'Water', { fill: '#000' }).setOrigin(.5, .5);
        waterButton.setInteractive({ useHandCursor: true });
        waterButton.on('pointerover', () => { if (!action) {waterButton.setStyle({ fill: '#fff'}); }});
        waterButton.on('pointerout', () => { waterButton.setStyle({ fill: '#000'}); });
        waterButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'water'
            }
        });

        const foodButton = this.add.text(449, 300, 'Food', { fill: '#000' }).setOrigin(.5, .5);
        foodButton.setInteractive({ useHandCursor: true });
        foodButton.on('pointerover', () => { if (!action) {foodButton.setStyle({ fill: '#fff'}); }});
        foodButton.on('pointerout', () => { foodButton.setStyle({ fill: '#000'}); });
        foodButton.on('pointerdown',  () => {
            if (!action) {
                action = true
                currentAction = 'feed'
            }
        });

        // Video switching
        function giveFood() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {nextVid = `situp.fromsta`; petSprite.setFrame('sta')}
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `foodin`; petSprite.setFrame('situp')} // start feeding
            else if (pet.getVideoKey().startsWith('sitdwn')) {nextVid = `situp.fromsitdwn`; petSprite.setFrame('sitdwn')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `situp.fromsit`; petSprite.setFrame('sit')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `situp.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            else if (pet.getVideoKey().startsWith('eating_main')) {
                action = false
                currentAction = 'none'
                nextVid = `sta.foodout`
                petSprite.setFrame('eat_out')
            }
            else if (pet.getVideoKey().startsWith('foodin') || pet.getVideoKey().startsWith('eating')) {
                nextVid = `${eating[randomIntFromInterval(0, eating.length-1)]}`;
                petSprite.setFrame('eat')
            }
            return nextVid
        }

        function giveWater() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {nextVid = `situp.fromsta`; petSprite.setFrame('sta')}
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `waterin`; petSprite.setFrame('situp')} // start drinking
            else if (pet.getVideoKey().startsWith('sitdwn')) {nextVid = `situp.fromsitdwn`; petSprite.setFrame('sitdwn')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `situp.fromsit`; petSprite.setFrame('situp')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `situp.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            else if (pet.getVideoKey().startsWith('waterin')) {
                    nextVid = `drinking`;
                    petSprite.setFrame('drink')
            }
            else if (pet.getVideoKey().startsWith('drinking')) {
                action = false
                currentAction = 'none'
                nextVid = `sta.waterout`;
                petSprite.setFrame('drink_out')
            }
            return nextVid
        }

        function giveMouse() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {
                action = false
                currentAction = 'none'
                nextVid = `${mouse[randomIntFromInterval(0, mouse.length-1)]}`; 
                petSprite.setFrame('sta')
            }
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `sta.fromsitup`; petSprite.setFrame('situp')}
            else if (pet.getVideoKey().startsWith('sitdwn')) {nextVid = `sta.fromsitdwn`; petSprite.setFrame('sitdwn')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `sta.fromsit`; petSprite.setFrame('sit')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `sta.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            return nextVid
        }

        /**
         * Determines the if the pet is standing, sitting, &c. from the standard set of positions
         * @returns the current position of the pet if known
         */
        function getPetPosition() {
            let position
            if (pet.getVideoKey().startsWith('clos')) { position = 'clos' }
            else if (pet.getVideoKey().startsWith('sta')) { position = 'sta' }
            else if (pet.getVideoKey().startsWith('situp')) { position = 'situp' }
            else if (pet.getVideoKey().startsWith('sitdwn')) { position = 'sitdwn' }
            else if (pet.getVideoKey().startsWith('sit')) { position = 'sit' }
            else if (pet.getVideoKey().startsWith('lay')) { position = 'lay' }
            else if (pet.getVideoKey().startsWith('slp')) { position = 'slp' }
            return position
        }

        /**
         * Gets the next video when the player is petting the pet
         * @param {*} location The location where the animal is being petted (e.g. head, neck or back)
         * @returns The next video to play
         */
        function petAnimal(location) {
            let nextVid
            let position = getPetPosition()
            console.log(position)
            if (pet.getVideoKey() === `${position}.${location}scratch.main` || pet.getVideoKey() === `${position}.${location}scratch._in`) {
                nextVid = `${position}.${location}scratch.main`
                petSprite.setFrame(`${position}.${location}scratch`)
                purrSound.play()
            } else if (position === 'sta' && location === 'butt' ) {
                // Buttscratch starts from backscratch instead of from main idle
                if (pet.getVideoKey() === 'sta.backscratch._in') {
                    nextVid = 'sta.buttscratch._in'
                    petSprite.setFrame(`sta.backscratch`)
                } else {
                    nextVid = 'sta.backscratch._in'
                    petSprite.setFrame(`sta`)
                }
            } else {
                nextVid = `${position}.${location}scratch._in`
                petSprite.setFrame(position)
            }
            return nextVid
        }


        /**
         * Gets the next video when the player stops petting the pet
         * @param {*} location The location where the animal was being petted (e.g. head, neck or back)
         * @returns The next video to play
         */
        function stopPetAnimal(location) {
            let nextVid = null
            currentAction = null
            let position = getPetPosition()
            action = false
            if (pet.getVideoKey().startsWith(`${position}.${location}scratch`)) {
                nextVid = `${position}.${location}scratch._out`
                petSprite.setFrame(`${position}.${location}scratch`)
                if (location === 'butt') {
                    // Buttscratch and ends through backscratch, so transition out of backscratch next
                    currentAction = 'stopPetBack'
                    action = true
                }
            } else if (pet.getVideoKey().startsWith(`${position}.backscratch`)) {
                // Buttscratch starts with backscratch, so video may not have transitioned to buttscratch
                nextVid = `${position}.backscratch._out`
                petSprite.setFrame(`${position}.backscratch`)
            } else if (pet.getVideoKey().startsWith(`${position}.buttscratch`)) {
                // Buttscratch ends through backscratch, so video names may not begin the same
                nextVid = `${position}.backscratch._out`
                petSprite.setFrame(`${position}.backscratch`)
            }
            return nextVid
        }

        /**
         * Gets the next video randomly from the given set of idle and transition animations.
         * Note that this function assumes there is a blink and a breathe animation for the given position.
         * @param {*} position The position the pet is in
         * @param {*} idleArray The array of idle animations for the position
         * @param {*} movArray The array of transition animations for the position
         * @returns 
         */
        function getNextVideo(position, idleArray, movArray) {
            petSprite.setFrame(position)
            let nextVid = null
            let rand = randomIntFromInterval(0, 99)
            if (rand < 10) {
                nextVid = `${position}.blink`;
            } else if (rand < 70) {
                nextVid = `${position}.breathe`;
            } else if (rand < 85) {
                nextVid = `${position}.${idleArray[randomIntFromInterval(0, idleArray.length-1)]}`;
            } else {
                nextVid = `${movArray[randomIntFromInterval(0, movArray.length-1)]}`;
                resetHitboxes()
            }
            return nextVid
        }

        function resetHitboxes() {
            // Reset hitboxes for petting
            setHitbox(headHitbox, 0, 0, 0, 0)
            setHitbox(neckHitbox, 0, 0, 0, 0)
            setHitbox(bellyHitbox, 0, 0, 0, 0)
            setHitbox(backHitbox, 0, 0, 0, 0)
            setHitbox(buttHitbox, 0, 0, 0, 0)
        }

        function switchVideo() {
            let nextVid = null
            // Do action if player interaction has occurred, otherwise, continue idling with random movements
            if (action) {
                switch (currentAction) {
                    case 'feed':
                        nextVid = giveFood()
                        resetHitboxes()
                        break;
                    case 'water':
                        nextVid = giveWater()
                        resetHitboxes()
                        break;
                    case 'mouse':
                        nextVid = giveMouse()
                        resetHitboxes()
                        break;
                    case 'petHead':
                        nextVid = petAnimal('head')
                        break;
                    case 'petNeck':
                        nextVid = petAnimal('neck')
                        break;
                    case 'petBelly':
                        nextVid = petAnimal('belly')
                        break;
                    case 'petBack':
                        nextVid = petAnimal('back')
                        break;
                    case 'petButt':
                        nextVid = petAnimal('butt')
                        break;
                    case 'stopPetHead':
                        nextVid = stopPetAnimal('head')
                        break;
                    case 'stopPetNeck':
                        nextVid = stopPetAnimal('neck')
                        break;
                    case 'stopPetBelly':
                        nextVid = stopPetAnimal('belly')
                        break;
                    case 'stopPetBack':
                        nextVid = stopPetAnimal('back')
                        break;
                    case 'stopPetButt':
                        nextVid = stopPetAnimal('butt')
                        break;
                
                    default:
                        action = false
                        break;
                }
            }
            else if (pet.getVideoKey().startsWith('sta')) {
                nextVid = getNextVideo('sta', staIdle,staMov)
                // Resize hitboxes for petting
                setHitbox(headHitbox, 307, 80, 60, 60)
                setHitbox(neckHitbox, 307, 140, 40, 60)
                setHitbox(backHitbox, 347, 140, 25, 60)
                setHitbox(buttHitbox, 372, 140, 25, 60)
            } 
            else if (pet.getVideoKey().startsWith('clos')) {
                nextVid = getNextVideo('clos', closIdle, closMov)
                // Resize hitboxes for petting
                setHitbox(headHitbox, 296, 65, 120, 80)
                setHitbox(neckHitbox, 300, 155, 120, 80)
            } 
            else if (pet.getVideoKey().startsWith('situp')) {
                nextVid = getNextVideo('situp', situpIdle, situpMov)
                // Resize hitboxes for petting
                setHitbox(headHitbox, 317, 80, 60, 55)
                setHitbox(neckHitbox, 317, 135, 60, 40)
            } 
            else if (pet.getVideoKey().startsWith('sitdwn')) {
                if (missingFiles) {
                    petSprite.setFrame('sitdwn')
                    let rand = randomIntFromInterval(0, 99)
                    if (rand < 50) {
                        nextVid = `lay.fromsitdwn`;
                    } else {
                        nextVid = `${sitdwnMov[randomIntFromInterval(0, sitdwnMov.length-1)]}`;
                    }
                } else {
                    // Resize hitboxes for petting
                    setHitbox(headHitbox, 287, 145, 60, 55)
                    setHitbox(neckHitbox, 297, 200, 60, 50)
                    nextVid = getNextVideo('sitdwn', sitdwnIdle, sitdwnMov)
                }
            } 
            else if (pet.getVideoKey().startsWith('sit')) {
                // Resize hitboxes for petting
                setHitbox(headHitbox, 327, 90, 60, 55)
                if (missingFiles) {
                    petSprite.setFrame('sit')
                    let rand = randomIntFromInterval(0, 99)
                    if (rand < 60) {
                        nextVid = `sit.${sitIdle[randomIntFromInterval(0, sitIdle.length-1)]}`;
                    } else {
                        nextVid = `${sitMov[randomIntFromInterval(0, sitMov.length-1)]}`;
                    }
                } else {
                    // Resize hitboxes for petting
                    setHitbox(neckHitbox, 317, 145, 60, 50)
                    petSprite.setFrame('sit')
                    nextVid = getNextVideo('sit', sitIdle, sitMov)
                }
            } 
            else if (pet.getVideoKey().startsWith('lay')) {
                // Resize hitboxes for petting
                setHitbox(headHitbox, 282, 145, 60, 55)
                setHitbox(neckHitbox, 287, 200, 50, 50)
                setHitbox(bellyHitbox, 337, 180, 50, 65)
                nextVid = getNextVideo('lay', layIdle, layMov)
            } 
            else if (pet.getVideoKey().startsWith('slp')) {
                petSprite.setFrame('slp')
                let rand = randomIntFromInterval(0, 99)
                if (rand < 85) {
                    nextVid = `slp.breathe`;
                } else if (rand < 95) {
                    nextVid = `slp.${slpIdle[randomIntFromInterval(0, slpIdle.length-1)]}`;
                } else {
                    nextVid = 'lay.fromslp';
                }
            } 

            // Backup for if no video has been selected
            if (nextVid === null) {
                console.log(
                    `ERROR - nextVid is null
    currentVid: ${currentVid}
    action: ${action}
    currentAction: ${currentAction}`)
                if (currentVid.startsWith('sta')) {nextVid = 'sta.breathe'; petSprite = 'sta'}
                else if (currentVid.startsWith('clos')) {nextVid = 'clos.breathe'; petSprite = 'clos'}
                else if (currentVid.startsWith('situp')) {nextVid = 'situp.breathe'; petSprite = 'situp'}
                else if (currentVid.startsWith('sitdwn')) {nextVid = 'lay.fromsitdwn'; petSprite = 'sitdwn'}
                else if (currentVid.startsWith('sit')) {nextVid = 'sit.alive_a'; petSprite = 'sit'}
                else if (currentVid.startsWith('lay')) {nextVid = 'lay.breathe'; petSprite = 'lay'}
                else if (currentVid.startsWith('slp')) {nextVid = 'slp.breathe'; petSprite = 'slp'}
                else {nextVid = currentVid}
                action = false
            } 

            // Show sprite as backup for the brief moment when the video may not be visible
            petSprite.setVisible(true)

            // If the nextVid is different from the current one, update the current video
            if (nextVid !== currentVid) {
                pet.changeSource(nextVid, true, false);
                currentVid = nextVid
            }

            // Add sounds
            if (nextVid.includes('meow')) {
                meowSound.play()
            }

            // Play the video
            pet.play()
        }

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
        if (pet.getProgress() > 0.0000001) {
            petSprite.setVisible(false);
        }
    }
}