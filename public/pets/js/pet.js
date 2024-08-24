let pet
let petSprite

class Pet extends Phaser.Scene
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
        this.load.atlas('petSprite', '../../videos/abyssinian/spritesheet.png', '../../videos/abyssinian/sprites.json');
        // this.load.audio('background_music', ['./sounds/stable_soundtrack.mp3']);
        this.load.audio('meowSound', ['../../videos/sounds/meow.mp3']);
        this.load.audio('purrSound', ['../../videos/sounds/purr.mp3']);

        this.load.video('sta.alive_a', '../../videos/abyssinian/sta.alive_a.webm', true);
        this.load.video('sta.alive_b', '../../videos/abyssinian/sta.alive_b.webm', true);
        this.load.video('sta.alive_c', '../../videos/abyssinian/sta.alive_c.webm', true);
        this.load.video('sta.blink', '../../videos/abyssinian/sta.blink.webm', true);
        this.load.video('sta.breathe', '../../videos/abyssinian/sta.breathe.webm', true);
        this.load.video('sta.meow', '../../videos/abyssinian/sta.meow.webm', true);
        this.load.video('sta.sniffscreen', '../../videos/abyssinian/sta.sniffscreen.webm', true);
        this.load.video('sta.fromclos', '../../videos/abyssinian/clos.clostosta.webm', true);
        this.load.video('sta.fromsitup', '../../videos/abyssinian/mov.situptosta.webm', true);
        this.load.video('sta.fromsit', '../../videos/abyssinian/mov.sittosta.webm', true);
        this.load.video('sta.fromsitdwn', '../../videos/abyssinian/mov.sitdwntosta.webm', true);
        this.load.video('sta.fromlay', '../../videos/abyssinian/mov.laytosta.webm', true);

        this.load.video('clos.blink', '../../videos/abyssinian/clos.blink.webm', true);
        this.load.video('clos.breathe', '../../videos/abyssinian/clos.breathe.webm', true);
        this.load.video('clos.lickscreen_a', '../../videos/abyssinian/clos.lickscreen_a.webm', true);
        this.load.video('clos.lickscreen_b', '../../videos/abyssinian/clos.lickscreen_b.webm', true);
        this.load.video('clos.meow', '../../videos/abyssinian/clos.meow.webm', true);
        this.load.video('clos.headscratch._in', '../../videos/abyssinian/clos.headscratch._in.webm', true);
        this.load.video('clos.headscratch._out', '../../videos/abyssinian/clos.headscratch._out.webm', true);
        this.load.video('clos.headscratch.main', '../../videos/abyssinian/clos.headscratch.main.webm', true);
        this.load.video('clos.neckscratch._in', '../../videos/abyssinian/clos.neckscratch._in.webm', true);
        this.load.video('clos.neckscratch._out', '../../videos/abyssinian/clos.neckscratch._out.webm', true);
        this.load.video('clos.neckscratch.main', '../../videos/abyssinian/clos.neckscratch.main.webm', true);
        this.load.video('clos.fromsta', '../../videos/abyssinian/clos.statoclos.webm', true);
        
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

        petSprite = this.add.sprite(374, 165, 'petSprite', 'sta').setOrigin(.5, .5).setVisible(false);
        pet = this.add.video(374, 165, 'sta.breathe').setOrigin(.5, .5);
        const meowSound = this.sound.add('meowSound');
        const purrSound = this.sound.add('purrSound');
        let action = false
        let currentAction = 'none'
        let currentVid = 'sta.breathe'

        pet.on('complete',switchVideo);
        pet.play()

        // Petting
        let headHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let neckHitbox = new Phaser.Geom.Rectangle(0, 0, 0, 0)
        let head = this.add.graphics().setInteractive({ hitArea: headHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        let neck = this.add.graphics().setInteractive({ hitArea: neckHitbox, hitAreaCallback: Phaser.Geom.Rectangle.Contains, useHandCursor: true });
        
        this.input.setDraggable([head, neck]);
        this.input.dragDistanceThreshold = 32;

        head.on('drag', (pointer, dragX, dragY) => {petInteraction(dragX, dragY, 'Head')});
        head.on('pointerup', () => { currentAction = 'stopPetHead' })

        neck.on('drag', (pointer, dragX, dragY) => {petInteraction(dragX, dragY, 'Neck')});
        neck.on('pointerup', () => { currentAction = 'stopPetNeck' })

        function petInteraction(dragX, dragY, location) {
            if ( Math.abs(dragX) > 100 || Math.abs(dragY) > 40) {
                currentAction = `stopPet${location}`
            } else {
                currentAction = `pet${location}`
                action = true
            }
        }

        function setHitbox(hitbox, x, y, width, height) {
            hitbox.x = x
            hitbox.y = y
            hitbox.width = height
            hitbox.height = width
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
                petSprite.setFrame('eat')
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
                petSprite.setFrame('drink')
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

        function petHead() {
            let nextVid = pet.getVideoKey()
            if (pet.getVideoKey().startsWith('clos')) {
                if (pet.getVideoKey() === 'clos.headscratch.main' || pet.getVideoKey() === 'clos.headscratch._in') {
                    nextVid = 'clos.headscratch.main'
                    petSprite.setFrame('clos.headscratch')
                    purrSound.play()
                } else {
                    nextVid = 'clos.headscratch._in'
                    petSprite.setFrame('clos')
                }
            }
            return nextVid
        }

        function stopPetHead() {
            let nextVid = pet.getVideoKey()
            action = false
            if (pet.getVideoKey().startsWith('clos.headscratch')) {
                nextVid = 'clos.headscratch._out'
                petSprite.setFrame('clos.headscratch')
            }
            return nextVid
        }

        function petNeck() {
            let nextVid = pet.getVideoKey()
            if (pet.getVideoKey().startsWith('clos')) {
                if (pet.getVideoKey() === 'clos.neckscratch.main' || pet.getVideoKey() === 'clos.neckscratch._in') {
                    nextVid = 'clos.neckscratch.main'
                    petSprite.setFrame('clos.neckscratch')
                    purrSound.play()
                } else {
                    nextVid = 'clos.neckscratch._in'
                    petSprite.setFrame('clos.neckscratch')
                }
            }
            return nextVid
        }

        function stopPetNeck() {
            let nextVid = pet.getVideoKey()
            action = false
            if (pet.getVideoKey().startsWith('clos.neckscratch')) {
                nextVid = 'clos.neckscratch._out'
                petSprite.setFrame('clos.neckscratch')
            }
            return nextVid
        }

        function switchVideo() {
            let nextVid = null
            if (action) {
                switch (currentAction) {
                    case 'feed':
                        nextVid = giveFood()
                        break;
                    case 'water':
                        nextVid = giveWater()
                        break;
                    case 'mouse':
                        nextVid = giveMouse()
                        break;
                    case 'petHead':
                        nextVid = petHead()
                        break;
                    case 'stopPetHead':
                        nextVid = stopPetHead()
                        break;
                    case 'petNeck':
                        nextVid = petNeck()
                        break;
                    case 'stopPetNeck':
                        nextVid = stopPetNeck()
                        break;
                
                    default:
                        action = false
                        break;
                }
            }
            else if (pet.getVideoKey().startsWith('sta')) {
                let rand = randomIntFromInterval(0, 99)
                petSprite.setFrame('sta')
                if (rand < 10) {
                    nextVid = `sta.blink`;
                } else if (rand < 70) {
                    nextVid = `sta.breathe`;
                } else if (rand < 85) {
                    nextVid = `sta.${staIdle[randomIntFromInterval(0, staIdle.length-1)]}`;
                } else {
                    nextVid = `${staMov[randomIntFromInterval(0, staMov.length-1)]}`;
                }
            } 
            else if (pet.getVideoKey().startsWith('clos')) {
                let rand = randomIntFromInterval(0, 99)
                setHitbox(headHitbox, 296, 65, 80, 120)
                setHitbox(neckHitbox, 300, 145, 80, 120)
                petSprite.setFrame('clos')
                if (rand < 10) {
                    nextVid = `clos.blink`;
                } else if (rand < 70) {
                    nextVid = `clos.breathe`;
                } else if (rand < 85) {
                    nextVid = `clos.${closIdle[randomIntFromInterval(0, closIdle.length-1)]}`;
                } else {
                    nextVid = `${closMov[randomIntFromInterval(0, closMov.length-1)]}`;
                    setHitbox(headHitbox, 0, 0, 0, 0)
                    setHitbox(neckHitbox, 0, 0, 0, 0)
                }
            } 
            else if (pet.getVideoKey().startsWith('situp')) {
                let rand = randomIntFromInterval(0, 99)
                petSprite.setFrame('situp')
                if (rand < 10) {
                    nextVid = `situp.blink`;
                } else if (rand < 70) {
                    nextVid = `situp.breathe`;
                } else if (rand < 85) {
                    nextVid = `situp.${situpIdle[randomIntFromInterval(0, situpIdle.length-1)]}`;
                } else {
                    nextVid = `${situpMov[randomIntFromInterval(0, situpMov.length-1)]}`;
                }
            } 
            else if (pet.getVideoKey().startsWith('sitdwn')) {
                let rand = randomIntFromInterval(0, 99)
                petSprite.setFrame('sitdwn')
                if (rand < 80) {
                    nextVid = `lay.fromsitdwn`;
                } else {
                    nextVid = `${sitdwnMov[randomIntFromInterval(0, sitdwnMov.length-1)]}`;
                }
            } 
            else if (pet.getVideoKey().startsWith('sit')) {
                let rand = randomIntFromInterval(0, 99)
                petSprite.setFrame('sit')
                if (rand < 60) {
                    nextVid = `sit.${sitIdle[randomIntFromInterval(0, sitIdle.length-1)]}`;
                } else {
                    nextVid = `${sitMov[randomIntFromInterval(0, sitMov.length-1)]}`;
                }
            } 
            else if (pet.getVideoKey().startsWith('lay')) {
                let rand = randomIntFromInterval(0, 99)
                petSprite.setFrame('lay')
                if (rand < 10) {
                    nextVid = `lay.blink`;
                } else if (rand < 70) {
                    nextVid = `lay.breathe`;
                } else if (rand < 85) {
                    nextVid = `lay.${layIdle[randomIntFromInterval(0, layIdle.length-1)]}`;
                } else {
                    nextVid = `${layMov[randomIntFromInterval(0, layMov.length-1)]}`;
                }
            } 
            else if (pet.getVideoKey().startsWith('slp')) {
                let rand = randomIntFromInterval(0, 99)
                petSprite.setFrame('slp')
                if (rand < 95) {
                    nextVid = `slp.breathe`;
                } else {
                    nextVid = `${slpMov[randomIntFromInterval(0, slpMov.length-1)]}`;
                }
            } 

            petSprite.setVisible(true)
            if (nextVid !== currentVid) {
                pet.changeSource(nextVid, true, false);
                currentVid = nextVid
            }
            if (nextVid.includes('meow')) {
                meowSound.play()
            }
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
        if (pet.getProgress() > 0.001) {
            petSprite.setVisible(false);
        }
    }
}