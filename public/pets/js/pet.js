// let pet
// let staIdle

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
        let background = this.add.image(374, 165, 'card_back').setOrigin(.5, .5);  

        this.add.graphics().fillStyle(0x000000).fillRect(386, 334, 116, 12);
        const progressBar = this.add.graphics();
            
        // Load in images and sounds
        // this.load.image('stable_bg', './images/landStable/stable-bg.png');
        // this.load.atlas('shovel', './images/landStable/shovel.png', './images/landStable/shovel.json');
        // this.load.spineAtlas("horse-atlas", `./images/horses/${horseName}/skeleton.atlas`);
        // this.load.spritesheet('hooves', './images/landStable/hooves.png', { frameWidth: 53, frameHeight: 53 });
        // this.load.audio('background_music', ['./sounds/stable_soundtrack.mp3']);

        this.load.video('sta.alive_a', '../../videos/abyssinian/sta.alive_a.webm');
        this.load.video('sta.alive_b', '../../videos/abyssinian/sta.alive_b.webm');
        this.load.video('sta.alive_c', '../../videos/abyssinian/sta.alive_c.webm');
        this.load.video('sta.blink', '../../videos/abyssinian/sta.blink.webm');
        this.load.video('sta.breathe', '../../videos/abyssinian/sta.breathe.webm');
        this.load.video('sta.meow', '../../videos/abyssinian/sta.meow.webm');
        this.load.video('sta.sniffscreen', '../../videos/abyssinian/sta.sniffscreen.webm');
        this.load.video('sta.fromclos', '../../videos/abyssinian/clos.clostosta.webm');
        this.load.video('sta.fromsitup', '../../videos/abyssinian/mov.situptosta.webm');
        this.load.video('sta.fromsit', '../../videos/abyssinian/mov.sittosta.webm');
        this.load.video('sta.fromsitdwn', '../../videos/abyssinian/mov.sitdwntosta.webm');
        this.load.video('sta.fromlay', '../../videos/abyssinian/mov.laytosta.webm');

        this.load.video('clos.blink', '../../videos/abyssinian/clos.blink.webm');
        this.load.video('clos.breathe', '../../videos/abyssinian/clos.breathe.webm');
        this.load.video('clos.lickscreen_a', '../../videos/abyssinian/clos.lickscreen_a.webm');
        this.load.video('clos.lickscreen_b', '../../videos/abyssinian/clos.lickscreen_b.webm');
        this.load.video('clos.meow', '../../videos/abyssinian/clos.meow.webm');
        this.load.video('clos.fromsta', '../../videos/abyssinian/clos.statoclos.webm');
        
        this.load.video('situp.alive_a', '../../videos/abyssinian/situp.alive_a.webm');
        this.load.video('situp.alive_b', '../../videos/abyssinian/situp.alive_b.webm');
        this.load.video('situp.alive_c', '../../videos/abyssinian/situp.alive_c.webm');
        this.load.video('situp.blink', '../../videos/abyssinian/situp.blink.webm');
        this.load.video('situp.breathe', '../../videos/abyssinian/situp.breathe.webm');
        this.load.video('situp.meow', '../../videos/abyssinian/situp.meow.webm');
        this.load.video('situp.lickpaw', '../../videos/abyssinian/situp.lickpaw.webm');
        this.load.video('situp.fromsta', '../../videos/abyssinian/mov.statositup.webm');
        this.load.video('situp.fromsit', '../../videos/abyssinian/mov.sittositup.webm');
        this.load.video('situp.fromsitdwn', '../../videos/abyssinian/mov.sitdwntositup.webm');
        this.load.video('situp.fromlay', '../../videos/abyssinian/mov.laytositup.webm');
        
        this.load.video('sit.alive_a', '../../videos/abyssinian/sit.alive_a.webm');
        this.load.video('sit.alive_b', '../../videos/abyssinian/sit.alive_b.webm');
        this.load.video('sit.alive_c', '../../videos/abyssinian/sit.alive_c.webm');
        this.load.video('sit.fromsta', '../../videos/abyssinian/mov.statosit.webm');
        this.load.video('sit.fromsitup', '../../videos/abyssinian/mov.situptosit.webm');
        this.load.video('sit.fromsitdwn', '../../videos/abyssinian/mov.sitdwntosit.webm');
        
        this.load.video('sitdwn.fromsta', '../../videos/abyssinian/mov.statositdwn.webm');
        this.load.video('sitdwn.fromsitup', '../../videos/abyssinian/mov.situptositdwn.webm');
        this.load.video('sitdwn.fromsit', '../../videos/abyssinian/mov.sittositdwn.webm');
        this.load.video('sitdwn.fromlay', '../../videos/abyssinian/mov.laytositdwn.webm');
        
        this.load.video('lay.alive_a', '../../videos/abyssinian/lay.alive_a.webm');
        this.load.video('lay.alive_b', '../../videos/abyssinian/lay.alive_b.webm');
        this.load.video('lay.alive_c', '../../videos/abyssinian/lay.alive_c.webm');
        this.load.video('lay.blink', '../../videos/abyssinian/lay.blink.webm');
        this.load.video('lay.breathe', '../../videos/abyssinian/lay.breathe.webm');
        this.load.video('lay.meow', '../../videos/abyssinian/lay.meow.webm');
        this.load.video('lay.lickbelly', '../../videos/abyssinian/lay.lickbelly.webm');
        this.load.video('lay.fromsitdwn', '../../videos/abyssinian/mov.sitdwntolay.webm');
        this.load.video('lay.fromslp', '../../videos/abyssinian/mov.slptolay.webm');

        this.load.video('slp.breathe', '../../videos/abyssinian/slp.breathe.webm');
        this.load.video('slp.fromlay', '../../videos/abyssinian/mov.laytoslp.webm');

        this.load.video('foodin', '../../videos/abyssinian/situp.eat._in.webm');
        this.load.video('eating_a', '../../videos/abyssinian/sitdwn.eat.a.webm');
        this.load.video('eating_b', '../../videos/abyssinian/sitdwn.eat.b.webm');
        this.load.video('eating_main', '../../videos/abyssinian/sitdwn.eat.main.webm');
        this.load.video('sta.foodout', '../../videos/abyssinian/sta.eat._out.webm');

        this.load.video('waterin', '../../videos/abyssinian/situp.drink._in.webm');
        this.load.video('drinking', '../../videos/abyssinian/sitdwn.drink.webm');
        this.load.video('sta.waterout', '../../videos/abyssinian/sta.drink._out.webm');
        
        this.load.video('sta.mouse_catch_a', '../../videos/abyssinian/sta.mouse_catch_a.webm');
        this.load.video('sta.mouse_catch_b', '../../videos/abyssinian/sta.mouse_catch_b.webm');
        this.load.video('sta.mouse_catch_c', '../../videos/abyssinian/sta.mouse_catch_c.webm');
        this.load.video('sta.mouse_miss_a', '../../videos/abyssinian/sta.mouse_miss_a.webm');
        this.load.video('sta.mouse_miss_b', '../../videos/abyssinian/sta.mouse_miss_b.webm');
        this.load.video('sta.mouse_miss_c', '../../videos/abyssinian/sta.mouse_miss_c.webm');
    }

    create ()
    {
        //  If you disable topOnly it will fire events for all objects the pointer is over, regardless of place on the display list
        // this.input.topOnly = true;

        // const backgroundMusic = this.sound.add('background_music');
        // backgroundMusic.loop = true; 
        // backgroundMusic.play();

        // this.add.image(444, 261, 'stable_bg');

        // const hover1 = this.sound.add('hover1');

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

        const pet = this.add.video(374, 165, 'sta.breathe').setOrigin(.5, .5);
        let action = false
        let currentAction = 'none'

        pet.on('complete',switchVideo);
        pet.play()

        const mouseButton = this.add.text(299, 300, 'Mouse', { fill: '#000' }).setOrigin(.5, .5);
        mouseButton.setInteractive();
        mouseButton.on('pointerover', () => { if (!action) {mouseButton.setStyle({ fill: '#fff'}); }});
        mouseButton.on('pointerout', () => { mouseButton.setStyle({ fill: '#000'}); });
        mouseButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'mouse'
            }
        });

        const waterButton = this.add.text(374, 300, 'Water', { fill: '#000' }).setOrigin(.5, .5);
        waterButton.setInteractive();
        waterButton.on('pointerover', () => { if (!action) {waterButton.setStyle({ fill: '#fff'}); }});
        waterButton.on('pointerout', () => { waterButton.setStyle({ fill: '#000'}); });
        waterButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'water'
            }
        });

        const foodButton = this.add.text(449, 300, 'Food', { fill: '#000' }).setOrigin(.5, .5);
        foodButton.setInteractive();
        foodButton.on('pointerover', () => { if (!action) {foodButton.setStyle({ fill: '#fff'}); }});
        foodButton.on('pointerout', () => { foodButton.setStyle({ fill: '#000'}); });
        foodButton.on('pointerdown',  () => {
            if (!action) {
                action = true
                currentAction = 'feed'
            }
        });

        function giveFood() {
            if (pet.getVideoKey().startsWith('sta')) {pet.changeSource(`situp.fromsta`, true, false);}
            else if (pet.getVideoKey().startsWith('clos')) {pet.changeSource(`sta.fromclos`, true, false);}
            else if (pet.getVideoKey().startsWith('situp')) {pet.changeSource(`foodin`, true, false);} // start feeding
            else if (pet.getVideoKey().startsWith('sitdwn')) {pet.changeSource(`situp.fromsitdwn`, true, false);}
            else if (pet.getVideoKey().startsWith('sit')) {pet.changeSource(`situp.fromsit`, true, false);}
            else if (pet.getVideoKey().startsWith('lay')) {pet.changeSource(`situp.fromlay`, true, false);}
            else if (pet.getVideoKey().startsWith('slp')) {pet.changeSource(`lay.fromslp`, true, false);}
            else if (pet.getVideoKey().startsWith('eating_main')) {
                action = false
                currentAction = 'none'
                pet.changeSource(`sta.foodout`, true, false);
            }
            else if (pet.getVideoKey().startsWith('foodin') || pet.getVideoKey().startsWith('eating')) {
                pet.changeSource(`${eating[randomIntFromInterval(0, eating.length-1)]}`, true, false);
            }
        }

        function giveWater() {
            if (pet.getVideoKey().startsWith('sta')) {pet.changeSource(`situp.fromsta`, true, false);}
            else if (pet.getVideoKey().startsWith('clos')) {pet.changeSource(`sta.fromclos`, true, false);}
            else if (pet.getVideoKey().startsWith('situp')) {pet.changeSource(`waterin`, true, false);} // start drinking
            else if (pet.getVideoKey().startsWith('sitdwn')) {pet.changeSource(`situp.fromsitdwn`, true, false);}
            else if (pet.getVideoKey().startsWith('sit')) {pet.changeSource(`situp.fromsit`, true, false);}
            else if (pet.getVideoKey().startsWith('lay')) {pet.changeSource(`situp.fromlay`, true, false);}
            else if (pet.getVideoKey().startsWith('slp')) {pet.changeSource(`lay.fromslp`, true, false);}
            else if (pet.getVideoKey().startsWith('waterin')) {
                    pet.changeSource(`drinking`, true, false);
            }
            else if (pet.getVideoKey().startsWith('drinking')) {
                action = false
                currentAction = 'none'
                pet.changeSource(`sta.waterout`, true, false);
            }
        }

        function giveMouse() {
            if (pet.getVideoKey().startsWith('sta')) {
                action = false
                currentAction = 'none'
                pet.changeSource(`${mouse[randomIntFromInterval(0, mouse.length-1)]}`, true, false);
            }
            else if (pet.getVideoKey().startsWith('clos')) {pet.changeSource(`sta.fromclos`, true, false);}
            else if (pet.getVideoKey().startsWith('situp')) {pet.changeSource(`waterin`, true, false);}
            else if (pet.getVideoKey().startsWith('sitdwn')) {pet.changeSource(`sta.fromsitdwn`, true, false);}
            else if (pet.getVideoKey().startsWith('sit')) {pet.changeSource(`sta.fromsit`, true, false);}
            else if (pet.getVideoKey().startsWith('lay')) {pet.changeSource(`sta.fromlay`, true, false);}
            else if (pet.getVideoKey().startsWith('slp')) {pet.changeSource(`lay.fromslp`, true, false);}
        }

        function switchVideo() {
            if (action) {
                switch (currentAction) {
                    case 'feed':
                        giveFood()
                        break;
                    case 'water':
                        giveWater()
                        break;
                    case 'mouse':
                        giveMouse()
                        break;
                
                    default:
                        action = false
                        break;
                }
                console.log(action)
            }
            else if (pet.getVideoKey().startsWith('sta')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 10) {
                    pet.changeSource(`sta.blink`, true, false);
                } else if (rand < 70) {
                    pet.changeSource(`sta.breathe`, true, false);
                } else if (rand < 85) {
                    pet.changeSource(`sta.${staIdle[randomIntFromInterval(0, staIdle.length-1)]}`, true, false);
                } else {
                    pet.changeSource(`${staMov[randomIntFromInterval(0, staMov.length-1)]}`, true, false);
                }
            } 
            else if (pet.getVideoKey().startsWith('clos')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 10) {
                    pet.changeSource(`clos.blink`, true, false);
                } else if (rand < 70) {
                    pet.changeSource(`clos.breathe`, true, false);
                } else if (rand < 85) {
                    pet.changeSource(`clos.${closIdle[randomIntFromInterval(0, closIdle.length-1)]}`, true, false);
                } else {
                    pet.changeSource(`${closMov[randomIntFromInterval(0, closMov.length-1)]}`, true, false);
                }
            } 
            else if (pet.getVideoKey().startsWith('situp')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 10) {
                    pet.changeSource(`situp.blink`, true, false);
                } else if (rand < 70) {
                    pet.changeSource(`situp.breathe`, true, false);
                } else if (rand < 85) {
                    pet.changeSource(`situp.${situpIdle[randomIntFromInterval(0, situpIdle.length-1)]}`, true, false);
                } else {
                    pet.changeSource(`${situpMov[randomIntFromInterval(0, situpMov.length-1)]}`, true, false);
                }
            } 
            else if (pet.getVideoKey().startsWith('sitdwn')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 80) {
                    pet.changeSource(`lay.fromsitdwn`, true, false);
                } else {
                    pet.changeSource(`${sitdwnMov[randomIntFromInterval(0, sitdwnMov.length-1)]}`, true, false);
                }
            } 
            else if (pet.getVideoKey().startsWith('sit')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 60) {
                    pet.changeSource(`sit.${sitIdle[randomIntFromInterval(0, sitIdle.length-1)]}`, true, false);
                } else {
                    pet.changeSource(`${sitMov[randomIntFromInterval(0, sitMov.length-1)]}`, true, false);
                }
            } 
            else if (pet.getVideoKey().startsWith('lay')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 10) {
                    pet.changeSource(`lay.blink`, true, false);
                } else if (rand < 70) {
                    pet.changeSource(`lay.breathe`, true, false);
                } else if (rand < 85) {
                    pet.changeSource(`lay.${layIdle[randomIntFromInterval(0, layIdle.length-1)]}`, true, false);
                } else {
                    pet.changeSource(`${layMov[randomIntFromInterval(0, layMov.length-1)]}`, true, false);
                }
            } 
            else if (pet.getVideoKey().startsWith('slp')) {
                let rand = randomIntFromInterval(0, 99)
                if (rand < 90) {
                    pet.changeSource(`slp.breathe`, true, false);
                } else {
                    pet.changeSource(`${slpMov[randomIntFromInterval(0, slpMov.length-1)]}`, true, false);
                }
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
    }
}