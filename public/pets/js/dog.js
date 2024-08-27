// Placeholder for dog.js
class Dog extends Phaser.Scene
{
    constructor ()
    {
        super({
            key: 'dog'
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
        this.load.audio('barkSound', ['../../videos/sounds/bark_a.mp3']);
        this.load.audio('closBarkSound', ['../../videos/sounds/clos.bark_a.mp3']);
        this.load.audio('barkBSound', ['../../videos/sounds/bark_b.mp3']);
        this.load.audio('bark_aggressionSound', ['../../videos/sounds/aggression.bark.mp3']);
        this.load.audio('bark_aggressiveSound', ['../../videos/sounds/aggressivebark.mp3']);
        this.load.audio('bwlOutSound', ['../../videos/sounds/bwl._out.mp3']);
        this.load.audio('eatSound', ['../../videos/sounds/eat.mp3']);
        this.load.audio('pantingSound', ['../../videos/sounds/mouthopen.breathe.mp3']);
        this.load.audio('sneezeSound', ['../../videos/sounds/sneeze.mp3']);
        this.load.audio('ballcatch_aSound', ['../../videos/sounds/ballcatch_a.mp3']);
        this.load.audio('ballcatch_bSound', ['../../videos/sounds/ballcatch_b.mp3']);
        this.load.audio('ballmiss_aSound', ['../../videos/sounds/ballmiss_a.mp3']);
        this.load.audio('ballmiss_bSound', ['../../videos/sounds/ballmiss_b.mp3']);
        this.load.audio('disccatch_aSound', ['../../videos/sounds/disccatch_a.mp3']);
        this.load.audio('disccatch_bSound', ['../../videos/sounds/disccatch_b.mp3']);
        this.load.audio('disccatch_cSound', ['../../videos/sounds/disccatch_c.mp3']);
        this.load.audio('discmiss_aSound', ['../../videos/sounds/discmiss_a.mp3']);
        this.load.audio('discmiss_bSound', ['../../videos/sounds/discmiss_b.mp3']);

        this.load.atlas('petSprite', `../../videos/${petType}/spritesheet.png`, `../../videos/${petType}/sprites.json`);

        // sta
        this.load.video('sta.alive_a', `../../videos/${petType}/sta.alive_a.webm`, true);
        this.load.video('sta.alive_b', `../../videos/${petType}/sta.alive_b.webm`, true);
        this.load.video('sta.alive_c', `../../videos/${petType}/sta.alive_c.webm`, true);
        this.load.video('sta.bark_a', `../../videos/${petType}/sta.bark_a.webm`, true);
        this.load.video('sta.bark_b', `../../videos/${petType}/sta.bark_b.webm`, true);
        this.load.video('sta.bite', `../../videos/${petType}/sta.bite.webm`, true);
        this.load.video('sta.chasetail', `../../videos/${petType}/sta.chasetail.webm`, true);
        this.load.video('sta.headtilt', `../../videos/${petType}/sta.headtilt.webm`, true);
        this.load.video('sta.look_l', `../../videos/${petType}/sta.look_l.webm`, true);
        this.load.video('sta.look_r', `../../videos/${petType}/sta.look_r.webm`, true);
        this.load.video('sta.blink', `../../videos/${petType}/sta.mouthopen.blink.webm`, true);
        this.load.video('sta.breathe', `../../videos/${petType}/sta.mouthopen.breathe.webm`, true);
        // this.load.video('sta.pooping', `../../videos/${petType}/sta.mouthopen.pooping.webm`, true);
        this.load.video('sta.shake', `../../videos/${petType}/sta.shake.webm`, true);
        this.load.video('sta.sneeze', `../../videos/${petType}/sta.sneeze.webm`, true);
        this.load.video('sta.sniffscreen', `../../videos/${petType}/sta.sniffscreen.webm`, true);
        this.load.video('sta.squirm', `../../videos/${petType}/sta.squirm.webm`, true);
        this.load.video('sta.aggression._in', `../../videos/${petType}/sta.aggression._in.webm`, true);
        this.load.video('sta.aggression._out', `../../videos/${petType}/sta.aggression._out.webm`, true);
        this.load.video('sta.aggression.bark', `../../videos/${petType}/sta.aggression.bark.webm`, true);
        this.load.video('sta.aggression.main', `../../videos/${petType}/sta.aggression.main.webm`, true);
        this.load.video('sta.aggressivebark', `../../videos/${petType}/sta.aggressivebark.webm`, true);
        this.load.video('sta.backscratch._in', `../../videos/${petType}/sta.backscratch._in.webm`, true);
        this.load.video('sta.backscratch._out', `../../videos/${petType}/sta.backscratch._out.webm`, true);
        this.load.video('sta.backscratch.main', `../../videos/${petType}/sta.backscratch.main.webm`, true);
        this.load.video('sta.buttscratch._in', `../../videos/${petType}/sta.buttscratch._in.webm`, true);
        this.load.video('sta.backscratch._out', `../../videos/${petType}/sta.buttscratch._out.webm`, true);
        this.load.video('sta.buttscratch.main', `../../videos/${petType}/sta.buttscratch.main.webm`, true);
        this.load.video('sta.earscratch_l._in', `../../videos/${petType}/sta.earscratch_l._in.webm`, true);
        this.load.video('sta.earscratch_l._out', `../../videos/${petType}/sta.earscratch_l._out.webm`, true);
        this.load.video('sta.earscratch_l.main', `../../videos/${petType}/sta.earscratch_l.main.webm`, true);
        this.load.video('sta.earscratch_r._in', `../../videos/${petType}/sta.earscratch_r._in.webm`, true);
        this.load.video('sta.earscratch_r._out', `../../videos/${petType}/sta.earscratch_r._out.webm`, true);
        this.load.video('sta.earscratch_r.main', `../../videos/${petType}/sta.earscratch_r.main.webm`, true);
        this.load.video('sta.headscratch._in', `../../videos/${petType}/sta.headscratch._in.webm`, true);
        this.load.video('sta.headscratch._out', `../../videos/${petType}/sta.headscratch._out.webm`, true);
        this.load.video('sta.headscratch.main', `../../videos/${petType}/sta.headscratch.main.webm`, true);
        this.load.video('sta.muzzlescratch_l._in', `../../videos/${petType}/sta.muzzlescratch_l._in.webm`, true);
        this.load.video('sta.muzzlescratch_l._out', `../../videos/${petType}/sta.muzzlescratch_l._out.webm`, true);
        this.load.video('sta.muzzlescratch_l.main', `../../videos/${petType}/sta.muzzlescratch_l.main.webm`, true);
        this.load.video('sta.muzzlescratch_r._in', `../../videos/${petType}/sta.muzzlescratch_r._in.webm`, true);
        this.load.video('sta.muzzlescratch_r._out', `../../videos/${petType}/sta.muzzlescratch_r._out.webm`, true);
        this.load.video('sta.muzzlescratch_r.main', `../../videos/${petType}/sta.muzzlescratch_r.main.webm`, true);
        this.load.video('sta.neckscratch_l._in', `../../videos/${petType}/sta.neckscratch_l._in.webm`, true);
        this.load.video('sta.neckscratch_l._out', `../../videos/${petType}/sta.neckscratch_l._out.webm`, true);
        this.load.video('sta.neckscratch_l.main', `../../videos/${petType}/sta.neckscratch_l.main.webm`, true);
        this.load.video('sta.neckscratch_r._in', `../../videos/${petType}/sta.neckscratch_r._in.webm`, true);
        this.load.video('sta.neckscratch_r._out', `../../videos/${petType}/sta.neckscratch_r._out.webm`, true);
        this.load.video('sta.neckscratch_r.main', `../../videos/${petType}/sta.neckscratch_r.main.webm`, true);
        this.load.video('sta.scruff_a._out', `../../videos/${petType}/sta.scruff_a._out.webm`, true);
        this.load.video('sta.scruff_a.main', `../../videos/${petType}/sta.scruff_a.main.webm`, true);
        this.load.video('sta.walk_l._in', `../../videos/${petType}/sta.walk_l._in.webm`, true);
        this.load.video('sta.walk_l._out', `../../videos/${petType}/sta.walk_l._out.webm`, true);
        this.load.video('sta.walk_l.main', `../../videos/${petType}/sta.walk_l.main.webm`, true);
        this.load.video('sta.walk_r._in', `../../videos/${petType}/sta.walk_r._in.webm`, true);
        this.load.video('sta.walk_r._out', `../../videos/${petType}/sta.walk_r._out.webm`, true);
        this.load.video('sta.walk_r.main', `../../videos/${petType}/sta.walk_r.main.webm`, true);
        this.load.video('sta.pawscratch_lf', `../../videos/${petType}/sta.pawscratch_lf.webm`, true);
        this.load.video('sta.pawscratch_rf', `../../videos/${petType}/sta.pawscratch_rf.webm`, true);
        this.load.video('sta.pawscratch_lb', `../../videos/${petType}/sta.pawscratch_lb.webm`, true);
        this.load.video('sta.pawscratch_rb', `../../videos/${petType}/sta.pawscratch_rb.webm`, true);
        this.load.video('sta.pokeeye_l', `../../videos/${petType}/sta.pokeeye_l.webm`, true);
        this.load.video('sta.pokeeye_r', `../../videos/${petType}/sta.pokeeye_r.webm`, true);
        this.load.video('sta.pokenose', `../../videos/${petType}/sta.pokenose.webm`, true);
        this.load.video('sta.fromstamouthclosed', `../../videos/${petType}/sta.mouthclosed._out.webm`, true);
        this.load.video('sta.fromclos', `../../videos/${petType}/mov.clostosta.webm`, true);
        this.load.video('sta.fromlay', `../../videos/${petType}/mov.laytosta.webm`, true);
        this.load.video('sta.fromsit', `../../videos/${petType}/mov.sittosta.webm`, true);
        this.load.video('sta.fromsitup', `../../videos/${petType}/mov.situptosta.webm`, true);

        this.load.video('stamouthclosed.blink', `../../videos/${petType}/sta.mouthclosed.blink.webm`, true);
        this.load.video('stamouthclosed.breathe', `../../videos/${petType}/sta.mouthclosed.breathe.webm`, true);
        this.load.video('stamouthclosed.fromclos', `../../videos/${petType}/sta.mouthclosed._in.webm`, true);

        // clos
        this.load.video('clos.bark_a', `../../videos/${petType}/clos.bark_a.webm`, true);
        this.load.video('clos.lickscreen_a', `../../videos/${petType}/clos.lickscreen_a.webm`, true);
        this.load.video('clos.lickscreen_b', `../../videos/${petType}/clos.lickscreen_b.webm`, true);
        this.load.video('clos.blink', `../../videos/${petType}/clos.mouthopen.blink.webm`, true);
        this.load.video('clos.breathe', `../../videos/${petType}/clos.mouthopen.breathe.webm`, true);
        this.load.video('clos.sneeze', `../../videos/${petType}/clos.sneeze.webm`, true);
        this.load.video('clos.earscratch_l._in', `../../videos/${petType}/clos.earscratch_l._in.webm`, true);
        this.load.video('clos.earscratch_l._out', `../../videos/${petType}/clos.earscratch_l._out.webm`, true);
        this.load.video('clos.earscratch_l.main', `../../videos/${petType}/clos.earscratch_l.main.webm`, true);
        this.load.video('clos.earscratch_r._in', `../../videos/${petType}/clos.earscratch_r._in.webm`, true);
        this.load.video('clos.earscratch_r._out', `../../videos/${petType}/clos.earscratch_r._out.webm`, true);
        this.load.video('clos.earscratch_r.main', `../../videos/${petType}/clos.earscratch_r.main.webm`, true);
        this.load.video('clos.headscratch._in', `../../videos/${petType}/clos.headscratch._in.webm`, true);
        this.load.video('clos.headscratch._out', `../../videos/${petType}/clos.headscratch._out.webm`, true);
        this.load.video('clos.headscratch.main', `../../videos/${petType}/clos.headscratch.main.webm`, true);
        this.load.video('clos.pokeeye_l', `../../videos/${petType}/clos.pokeeye_l.webm`, true);
        this.load.video('clos.pokeeye_r', `../../videos/${petType}/clos.pokeeye_r.webm`, true);
        this.load.video('clos.pokenose', `../../videos/${petType}/clos.pokenose.webm`, true);
        this.load.video('clos.fromclosmouthclosed', `../../videos/${petType}/clos.mouthclosed._out.webm`, true);
        this.load.video('clos.fromsta', `../../videos/${petType}/mov.statoclos.webm`, true);

        this.load.video('closmouthclosed.blink', `../../videos/${petType}/clos.mouthclosed.blink.webm`, true);
        this.load.video('closmouthclosed.breathe', `../../videos/${petType}/clos.mouthclosed.breathe.webm`, true);
        this.load.video('closmouthclosed.fromclos', `../../videos/${petType}/clos.mouthclosed._in.webm`, true);

        // situp
        this.load.video('situp.alive_a', `../../videos/${petType}/situp.alive_a.webm`, true);
        this.load.video('situp.alive_b', `../../videos/${petType}/situp.alive_b.webm`, true);
        this.load.video('situp.alive_c', `../../videos/${petType}/situp.alive_c.webm`, true);
        this.load.video('situp.bark_a', `../../videos/${petType}/situp.bark_a.webm`, true);
        this.load.video('situp.headtilt', `../../videos/${petType}/situp.headtilt.webm`, true);
        this.load.video('situp.look_l', `../../videos/${petType}/situp.look_l.webm`, true);
        this.load.video('situp.look_r', `../../videos/${petType}/situp.look_r.webm`, true);
        this.load.video('situp.blink', `../../videos/${petType}/situp.mouthopen.blink.webm`, true);
        this.load.video('situp.breathe', `../../videos/${petType}/situp.mouthopen.breathe.webm`, true);
        this.load.video('situp.sneeze', `../../videos/${petType}/situp.sneeze.webm`, true);
        this.load.video('situp.bellyrub._in', `../../videos/${petType}/situp.bellyrub._in.webm`, true);
        this.load.video('situp.chestscratch._in', `../../videos/${petType}/situp.chestscratch._in.webm`, true);
        this.load.video('situp.chestscratch._out', `../../videos/${petType}/situp.chestscratch._out.webm`, true);
        this.load.video('situp.chestscratch.main', `../../videos/${petType}/situp.chestscratch.main.webm`, true);
        this.load.video('situp.earscratch_l._in', `../../videos/${petType}/situp.earscratch_l._in.webm`, true);
        this.load.video('situp.earscratch_l._out', `../../videos/${petType}/situp.earscratch_l._out.webm`, true);
        this.load.video('situp.earscratch_l.main', `../../videos/${petType}/situp.earscratch_l.main.webm`, true);
        this.load.video('situp.earscratch_r._in', `../../videos/${petType}/situp.earscratch_r._in.webm`, true);
        this.load.video('situp.earscratch_r._out', `../../videos/${petType}/situp.earscratch_r._out.webm`, true);
        this.load.video('situp.earscratch_r.main', `../../videos/${petType}/situp.earscratch_r.main.webm`, true);
        this.load.video('situp.headscratch._in', `../../videos/${petType}/situp.headscratch._in.webm`, true);
        this.load.video('situp.headscratch._out', `../../videos/${petType}/situp.headscratch._out.webm`, true);
        this.load.video('situp.headscratch.main', `../../videos/${petType}/situp.headscratch.main.webm`, true);
        this.load.video('situp.muzzlescratch_l._in', `../../videos/${petType}/situp.muzzlescratch_l._in.webm`, true);
        this.load.video('situp.muzzlescratch_l._out', `../../videos/${petType}/situp.muzzlescratch_l._out.webm`, true);
        this.load.video('situp.muzzlescratch_l.main', `../../videos/${petType}/situp.muzzlescratch_l.main.webm`, true);
        this.load.video('situp.muzzlescratch_r._in', `../../videos/${petType}/situp.muzzlescratch_r._in.webm`, true);
        this.load.video('situp.muzzlescratch_r._out', `../../videos/${petType}/situp.muzzlescratch_r._out.webm`, true);
        this.load.video('situp.muzzlescratch_r.main', `../../videos/${petType}/situp.muzzlescratch_r.main.webm`, true);
        this.load.video('situp.neckscratch_l._in', `../../videos/${petType}/situp.neckscratch_l._in.webm`, true);
        this.load.video('situp.neckscratch_l._out', `../../videos/${petType}/situp.neckscratch_l._out.webm`, true);
        this.load.video('situp.neckscratch_l.main', `../../videos/${petType}/situp.neckscratch_l.main.webm`, true);
        this.load.video('situp.neckscratch_r._in', `../../videos/${petType}/situp.neckscratch_r._in.webm`, true);
        this.load.video('situp.neckscratch_r._out', `../../videos/${petType}/situp.neckscratch_r._out.webm`, true);
        this.load.video('situp.neckscratch_r.main', `../../videos/${petType}/situp.neckscratch_r.main.webm`, true);
        this.load.video('situp.pawscratch_lf', `../../videos/${petType}/situp.pawscratch_lf.webm`, true);
        this.load.video('situp.pawscratch_rf', `../../videos/${petType}/situp.pawscratch_rf.webm`, true);
        this.load.video('situp.pokeeye_l', `../../videos/${petType}/situp.pokeeye_l.webm`, true);
        this.load.video('situp.pokeeye_r', `../../videos/${petType}/situp.pokeeye_r.webm`, true);
        this.load.video('situp.pokenose', `../../videos/${petType}/situp.pokenose.webm`, true);
        this.load.video('situp.reward_a', `../../videos/${petType}/situp.reward_a.webm`, true);
        this.load.video('situp.reward_b', `../../videos/${petType}/situp.reward_b.webm`, true);
        this.load.video('situp.fromsitupmouthclosed', `../../videos/${petType}/situp.mouthclosed._out.webm`, true);
        this.load.video('situp.fromlay', `../../videos/${petType}/mov.laytositup.webm`, true);
        this.load.video('situp.fromsta', `../../videos/${petType}/mov.statositup.webm`, true);

        this.load.video('situpmouthclosed.blink', `../../videos/${petType}/situp.mouthclosed.blink.webm`, true);
        this.load.video('situpmouthclosed.breathe', `../../videos/${petType}/situp.mouthclosed.breathe.webm`, true);
        this.load.video('situpmouthclosed.fromsitup', `../../videos/${petType}/situp.mouthclosed._in.webm`, true);

        // sit
        this.load.video('sit.alive_a', `../../videos/${petType}/sit.alive_a.webm`, true);
        this.load.video('sit.alive_b', `../../videos/${petType}/sit.alive_b.webm`, true);
        this.load.video('sit.alive_c', `../../videos/${petType}/sit.alive_c.webm`, true);
        this.load.video('sit.bark_a', `../../videos/${petType}/sit.bark_a.webm`, true);
        this.load.video('sit.headtilt', `../../videos/${petType}/sit.headtilt.webm`, true);
        this.load.video('sit.look_l', `../../videos/${petType}/sit.look_l.webm`, true);
        this.load.video('sit.look_r', `../../videos/${petType}/sit.look_r.webm`, true);
        this.load.video('sit.blink', `../../videos/${petType}/sit.mouthopen.blink.webm`, true);
        this.load.video('sit.breathe', `../../videos/${petType}/sit.mouthopen.breathe.webm`, true);
        this.load.video('sit.sneeze', `../../videos/${petType}/sit.sneeze.webm`, true);
        this.load.video('sit.bellyrub._in', `../../videos/${petType}/sit.bellyrub._in.webm`, true);
        this.load.video('sit.chestscratch._in', `../../videos/${petType}/sit.chestscratch._in.webm`, true);
        this.load.video('sit.chestscratch._out', `../../videos/${petType}/sit.chestscratch._out.webm`, true);
        this.load.video('sit.chestscratch.main', `../../videos/${petType}/sit.chestscratch.main.webm`, true);
        this.load.video('sit.earscratch_l._in', `../../videos/${petType}/sit.earscratch_l._in.webm`, true);
        this.load.video('sit.earscratch_l._out', `../../videos/${petType}/sit.earscratch_l._out.webm`, true);
        this.load.video('sit.earscratch_l.main', `../../videos/${petType}/sit.earscratch_l.main.webm`, true);
        this.load.video('sit.earscratch_r._in', `../../videos/${petType}/sit.earscratch_r._in.webm`, true);
        this.load.video('sit.earscratch_r._out', `../../videos/${petType}/sit.earscratch_r._out.webm`, true);
        this.load.video('sit.earscratch_r.main', `../../videos/${petType}/sit.earscratch_r.main.webm`, true);
        this.load.video('sit.headscratch._in', `../../videos/${petType}/sit.headscratch._in.webm`, true);
        this.load.video('sit.headscratch._out', `../../videos/${petType}/sit.headscratch._out.webm`, true);
        this.load.video('sit.headscratch.main', `../../videos/${petType}/sit.headscratch.main.webm`, true);
        this.load.video('sit.muzzlescratch_l._in', `../../videos/${petType}/sit.muzzlescratch_l._in.webm`, true);
        this.load.video('sit.muzzlescratch_l._out', `../../videos/${petType}/sit.muzzlescratch_l._out.webm`, true);
        this.load.video('sit.muzzlescratch_l.main', `../../videos/${petType}/sit.muzzlescratch_l.main.webm`, true);
        this.load.video('sit.muzzlescratch_r._in', `../../videos/${petType}/sit.muzzlescratch_r._in.webm`, true);
        this.load.video('sit.muzzlescratch_r._out', `../../videos/${petType}/sit.muzzlescratch_r._out.webm`, true);
        this.load.video('sit.muzzlescratch_r.main', `../../videos/${petType}/sit.muzzlescratch_r.main.webm`, true);
        this.load.video('sit.neckscratch_l._in', `../../videos/${petType}/sit.neckscratch_l._in.webm`, true);
        this.load.video('sit.neckscratch_l._out', `../../videos/${petType}/sit.neckscratch_l._out.webm`, true);
        this.load.video('sit.neckscratch_l.main', `../../videos/${petType}/sit.neckscratch_l.main.webm`, true);
        this.load.video('sit.neckscratch_r._in', `../../videos/${petType}/sit.neckscratch_r._in.webm`, true);
        this.load.video('sit.neckscratch_r._out', `../../videos/${petType}/sit.neckscratch_r._out.webm`, true);
        this.load.video('sit.neckscratch_r.main', `../../videos/${petType}/sit.neckscratch_r.main.webm`, true);
        this.load.video('sit.pawscratch_lf', `../../videos/${petType}/sit.pawscratch_lf.webm`, true);
        this.load.video('sit.pawscratch_rf', `../../videos/${petType}/sit.pawscratch_rf.webm`, true);
        this.load.video('sit.pokeeye_l', `../../videos/${petType}/sit.pokeeye_l.webm`, true);
        this.load.video('sit.pokeeye_r', `../../videos/${petType}/sit.pokeeye_r.webm`, true);
        this.load.video('sit.pokenose', `../../videos/${petType}/sit.pokenose.webm`, true);
        this.load.video('sit.fromsitmouthclosed', `../../videos/${petType}/sit.mouthclosed._out.webm`, true);
        this.load.video('sit.fromlay', `../../videos/${petType}/mov.laytosit.webm`, true);
        this.load.video('sit.fromsta', `../../videos/${petType}/mov.statosit.webm`, true);

        this.load.video('sitmouthclosed.blink', `../../videos/${petType}/sit.mouthclosed.blink.webm`, true);
        this.load.video('sitmouthclosed.breathe', `../../videos/${petType}/sit.mouthclosed.breathe.webm`, true);
        this.load.video('sitmouthclosed.fromsit', `../../videos/${petType}/sit.mouthclosed._in.webm`, true);

        // lay
        this.load.video('lay.alive_a', `../../videos/${petType}/lay.alive_a.webm`, true);
        this.load.video('lay.alive_b', `../../videos/${petType}/lay.alive_b.webm`, true);
        this.load.video('lay.alive_c', `../../videos/${petType}/lay.alive_c.webm`, true);
        this.load.video('lay.bark_a', `../../videos/${petType}/lay.bark_a.webm`, true);
        this.load.video('lay.headtilt', `../../videos/${petType}/lay.headtilt.webm`, true);
        this.load.video('lay.lickballs', `../../videos/${petType}/lay.lickballs.webm`, true);
        this.load.video('lay.lickpaw', `../../videos/${petType}/lay.lickpaw.webm`, true);
        this.load.video('lay.blink', `../../videos/${petType}/lay.mouthopen.blink.webm`, true);
        this.load.video('lay.breathe', `../../videos/${petType}/lay.mouthopen.breathe.webm`, true);
        this.load.video('lay.rollover', `../../videos/${petType}/lay.rollover.webm`, true);
        this.load.video('lay.rolloverhalf', `../../videos/${petType}/lay.rolloverhalf.webm`, true);
        this.load.video('lay.sneeze', `../../videos/${petType}/lay.sneeze.webm`, true);
        this.load.video('lay.bellyrub._out', `../../videos/${petType}/lay.bellyrub._out.webm`, true);
        this.load.video('lay.bellyrub.high', `../../videos/${petType}/lay.bellyrub.high.webm`, true);
        this.load.video('lay.bellyrub.low', `../../videos/${petType}/lay.bellyrub.low.webm`, true);
        this.load.video('lay.bellyrub.med', `../../videos/${petType}/lay.bellyrub.med.webm`, true);
        this.load.video('lay.earscratch_l._in', `../../videos/${petType}/lay.earscratch_l._in.webm`, true);
        this.load.video('lay.earscratch_l._out', `../../videos/${petType}/lay.earscratch_l._out.webm`, true);
        this.load.video('lay.earscratch_l.main', `../../videos/${petType}/lay.earscratch_l.main.webm`, true);
        this.load.video('lay.earscratch_r._in', `../../videos/${petType}/lay.earscratch_r._in.webm`, true);
        this.load.video('lay.earscratch_r._out', `../../videos/${petType}/lay.earscratch_r._out.webm`, true);
        this.load.video('lay.earscratch_r.main', `../../videos/${petType}/lay.earscratch_r.main.webm`, true);
        this.load.video('lay.headscratch._in', `../../videos/${petType}/lay.headscratch._in.webm`, true);
        this.load.video('lay.headscratch._out', `../../videos/${petType}/lay.headscratch._out.webm`, true);
        this.load.video('lay.headscratch.main', `../../videos/${petType}/lay.headscratch.main.webm`, true);
        this.load.video('lay.muzzlescratch_l._in', `../../videos/${petType}/lay.muzzlescratch_l._in.webm`, true);
        this.load.video('lay.muzzlescratch_l._out', `../../videos/${petType}/lay.muzzlescratch_l._out.webm`, true);
        this.load.video('lay.muzzlescratch_l.main', `../../videos/${petType}/lay.muzzlescratch_l.main.webm`, true);
        this.load.video('lay.muzzlescratch_r._in', `../../videos/${petType}/lay.muzzlescratch_r._in.webm`, true);
        this.load.video('lay.muzzlescratch_r._out', `../../videos/${petType}/lay.muzzlescratch_r._out.webm`, true);
        this.load.video('lay.muzzlescratch_r.main', `../../videos/${petType}/lay.muzzlescratch_r.main.webm`, true);
        this.load.video('lay.neckscratch_l._in', `../../videos/${petType}/lay.neckscratch_l._in.webm`, true);
        this.load.video('lay.neckscratch_l._out', `../../videos/${petType}/lay.neckscratch_l._out.webm`, true);
        this.load.video('lay.neckscratch_l.main', `../../videos/${petType}/lay.neckscratch_l.main.webm`, true);
        this.load.video('lay.neckscratch_r._in', `../../videos/${petType}/lay.neckscratch_r._in.webm`, true);
        this.load.video('lay.neckscratch_r._out', `../../videos/${petType}/lay.neckscratch_r._out.webm`, true);
        this.load.video('lay.neckscratch_r.main', `../../videos/${petType}/lay.neckscratch_r.main.webm`, true);
        this.load.video('lay.pawscratch_lf', `../../videos/${petType}/lay.pawscratch_lf.webm`, true);
        this.load.video('lay.pawscratch_rf', `../../videos/${petType}/lay.pawscratch_rf.webm`, true);
        this.load.video('lay.pokeeye_l', `../../videos/${petType}/lay.pokeeye_l.webm`, true);
        this.load.video('lay.pokeeye_r', `../../videos/${petType}/lay.pokeeye_r.webm`, true);
        this.load.video('lay.pokenose', `../../videos/${petType}/lay.pokenose.webm`, true);
        this.load.video('lay.fromlaymouthclosed', `../../videos/${petType}/lay.mouthclosed._out.webm`, true);
        this.load.video('lay.fromsit', `../../videos/${petType}/mov.sittolay.webm`, true);
        this.load.video('lay.fromsitup', `../../videos/${petType}/mov.situptolay.webm`, true);
        this.load.video('lay.fromslp', `../../videos/${petType}/mov.slptolay.webm`, true);

        this.load.video('laymouthclosed.blink', `../../videos/${petType}/lay.mouthclosed.blink.webm`, true);
        this.load.video('laymouthclosed.breathe', `../../videos/${petType}/lay.mouthclosed.breathe.webm`, true);
        this.load.video('laymouthclosed.fromlay', `../../videos/${petType}/lay.mouthclosed._in.webm`, true);

        // slp
        this.load.video('slp.alive_a', `../../videos/${petType}/slp.alive_a.webm`, true);
        this.load.video('slp.alive_b', `../../videos/${petType}/slp.alive_b.webm`, true);
        this.load.video('slp.breathe', `../../videos/${petType}/slp.breathe.webm`, true);
        this.load.video('slp.fromlay', `../../videos/${petType}/mov.laytoslp.webm`, true);

        this.load.video('foodin', `../../videos/${petType}/sta.eat._in_b.webm`, true);
        this.load.video('foodin_pedigree', `../../videos/${petType}/sta.eat._pedigree._in.webm`, true);
        this.load.video('foodin_purina', `../../videos/${petType}/sta.eat._purina._in.webm`, true);
        this.load.video('eating.lookup', `../../videos/${petType}/sta.eat.lookup.webm`, true);
        this.load.video('eating.low', `../../videos/${petType}/sta.eat.low.webm`, true);
        this.load.video('eating.med', `../../videos/${petType}/sta.eat.med.webm`, true);
        this.load.video('sta.foodout', `../../videos/${petType}/sta.eat._out.webm`, true);

        // this.load.video('waterin_alt', `../../videos/${petType}/sta.drink._in.webm`, true);
        this.load.video('waterin', `../../videos/${petType}/sta.drink._in_b.webm`, true);
        this.load.video('drinking', `../../videos/${petType}/sta.drink.main.webm`, true);
        this.load.video('sta.waterout', `../../videos/${petType}/sta.drink._out.webm`, true);
        
        this.load.video('sta.ballcatch_a', `../../videos/${petType}/sta.ballcatch_a.webm`, true);
        this.load.video('sta.ballcatch_b', `../../videos/${petType}/sta.ballcatch_b.webm`, true);
        this.load.video('sta.ballmiss_a', `../../videos/${petType}/sta.ballmiss_a.webm`, true);
        this.load.video('sta.ballmiss_b', `../../videos/${petType}/sta.ballmiss_b.webm`, true);

        this.load.video('sta.disccatch_a', `../../videos/${petType}/sta.disccatch_a.webm`, true);
        this.load.video('sta.disccatch_b', `../../videos/${petType}/sta.disccatch_b.webm`, true);
        this.load.video('sta.disccatch_c', `../../videos/${petType}/sta.disccatch_c.webm`, true);
        this.load.video('sta.discmiss_a', `../../videos/${petType}/sta.discmiss_a.webm`, true);
        this.load.video('sta.discmiss_b', `../../videos/${petType}/sta.discmiss_b.webm`, true);

        // this.load.video('sta.toyin_balls', `../../videos/${petType}/sta.toyin_balls.webm`, true);
        // this.load.video('sta.chewballs._in', `../../videos/${petType}/sta.chewballs._in.webm`, true);
        // this.load.video('sta.chewballs._out', `../../videos/${petType}/sta.chewballs._out.webm`, true);
        // this.load.video('sta.chewballs_l._in', `../../videos/${petType}/sta.chewballs.chew-left._in.webm`, true);
        // this.load.video('sta.chewballs_l._out', `../../videos/${petType}/sta.chewballs.chew-left._out.webm`, true);
        // this.load.video('sta.chewballs_l.main', `../../videos/${petType}/sta.chewballs.chew-left.main.webm`, true);
        // this.load.video('sta.chewballs.main', `../../videos/${petType}/sta.chewballs.main.webm`, true);

        // this.load.video('sta.toyin_kong', `../../videos/${petType}/sta.toyin_kong.webm`, true);
        // this.load.video('sta.chewkong._in', `../../videos/${petType}/sta.chewkong._in.webm`, true);
        // this.load.video('sta.chewkong._out', `../../videos/${petType}/sta.chewkong._out.webm`, true);
        // this.load.video('sta.chewkong_l._in', `../../videos/${petType}/sta.chewkong.chew-left._in.webm`, true);
        // this.load.video('sta.chewkong_l._out', `../../videos/${petType}/sta.chewkong.chew-left._out.webm`, true);
        // this.load.video('sta.chewkong_l.main', `../../videos/${petType}/sta.chewkong.chew-left.main.webm`, true);
        // this.load.video('sta.chewkong.main', `../../videos/${petType}/sta.chewkong.main.webm`, true);

        // this.load.video('sta.toyin_stick', `../../videos/${petType}/sta.toyin_stick.webm`, true);
        // this.load.video('sta.chewstick._in', `../../videos/${petType}/sta.chewstick._in.webm`, true);
        // this.load.video('sta.chewstick._out', `../../videos/${petType}/sta.chewstick._out.webm`, true);
        // this.load.video('sta.chewstick_l._in', `../../videos/${petType}/sta.chewstick.chew-left._in.webm`, true);
        // this.load.video('sta.chewstick_l._out', `../../videos/${petType}/sta.chewstick.chew-left._out.webm`, true);
        // this.load.video('sta.chewstick_l.main', `../../videos/${petType}/sta.chewstick.chew-left.main.webm`, true);
        // this.load.video('sta.chewstick.main', `../../videos/${petType}/sta.chewstick.main.webm`, true);

        if (!missingFiles) {
            // for files from large.swf
        }
    }

    create ()
    {
        // ===== Set up variables and constants =====
        // Idle animations
        const staIdle = ['alive_a', 'alive_b', 'alive_c', 'bark_a', 'bark_b', 'bite', 'chasetail', 'headtilt', 'look_l', 'look_r', 'shake', 'sneeze', 'sniffscreen', 'squirm']
        const closIdle = ['lickscreen_b', 'bark_a', 'sneeze']
        const situpIdle = ['alive_a', 'alive_b', 'alive_c', 'bark_a', 'headtilt', 'hindlegscratch', 'lickballs', 'look_l', 'look_r', 'sneeze']
        let sitIdle = ['alive_a', 'alive_b', 'alive_c', 'bark_a', 'headtilt', 'look_l', 'look_r', 'sneeze']
        const layIdle = ['alive_a', 'alive_b', 'alive_c', 'bark_a', 'headtilt', 'lickballs', 'lickpaw', 'rollover', 'rolloverhalf', 'sneeze']
        let slpIdle = ['alive_a', 'alive_b']
        if (!missingFiles) {
            // To handle missing large.swf
        }

        // Transition animations
        const staMov = ['clos.fromsta', 'sit.fromsta', 'situp.fromsta']
        const closMov = ['sta.fromclos']
        const situpMov = ['lay.fromsitup', 'sta.fromsitup']
        const sitMov = ['lay.fromsit', 'sta.fromsit']
        const layMov = ['sit.fromlay', 'situp.fromlay', 'slp.fromlay', 'sta.fromlay']

        // Action animation variants
        const eating = ['eating.med', 'eating.lookup', 'eating.low']
        const playdisc = ['sta.disccatch_a', 'sta.disccatch_b', 'sta.disccatch_c', 'sta.discmiss_a', 'sta.discmiss_b']
        const playball = ['sta.ballcatch_a', 'sta.ballcatch_b', 'sta.ballmiss_a', 'sta.ballmiss_b']

        // Add audio
        this.sound.pauseOnBlur = false
        const barkSound = this.sound.add('barkSound');
        const closBarkSound = this.sound.add('closBarkSound');
        const barkBSound = this.sound.add('barkBSound');
        const barkAggressionSound = this.sound.add('bark_aggressionSound');
        const barkAggressiveSound = this.sound.add('bark_aggressiveSound');
        const bwlOutSound = this.sound.add('bwlOutSound');
        const eatSound = this.sound.add('eatSound');
        const pantingSound = this.sound.add('pantingSound');
        const sneezeSound = this.sound.add('sneezeSound');
        const ballcatch_aSound = this.sound.add('ballcatch_aSound');
        const ballcatch_bSound = this.sound.add('ballcatch_bSound');
        const ballmiss_aSound = this.sound.add('ballmiss_aSound');
        const ballmiss_bSound = this.sound.add('ballmiss_bSound');
        const disccatch_aSound = this.sound.add('disccatch_aSound');
        const disccatch_bSound = this.sound.add('disccatch_bSound');
        const disccatch_cSound = this.sound.add('disccatch_cSound');
        const discmiss_aSound = this.sound.add('discmiss_aSound');
        const discmiss_bSound = this.sound.add('discmiss_bSound');

        // Add pet (video and backup sprite)
        let action = false // Tracks if the player is interacting with pet
        let currentAction = 'none' // Tracks the current action from the player interacting with the pet
        let currentVid = 'sta.breathe' // Keeps track of the current/last video playing
        petSprite = this.add.sprite(374, 165, 'petSprite', 'sta').setOrigin(.5, .5).setVisible(false);
        pet = this.add.video(374, 165, currentVid).setOrigin(.5, .5);
        pet.on('complete',switchVideo);
        pet.play()

        // ===== Petting =====
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
        /**
         * Switches action to start petting and disables dragging and ends petting if pointer goes out of bounds
         */
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
        
        frame.on('pointerup', () => { stopPetInteraction() })
        head.on('pointerup', () => { stopPetInteraction() })
        neck.on('pointerup', () => { stopPetInteraction() })
        belly.on('pointerup', () => { stopPetInteraction() })
        back.on('pointerup', () => { stopPetInteraction() })
        butt.on('pointerup', () => { stopPetInteraction() })
        /**
         * Switches action to stop petting and reenables dragging
         */
        function stopPetInteraction() {
            if (currentAction !== null && currentAction.startsWith('pet')) {
                currentAction = `stopP${currentAction.substring(1)}`
            }; keepDragging = true 
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

        /**
         * Resets hitboxes for petting
         */
        function resetHitboxes() {
            setHitbox(headHitbox, 0, 0, 0, 0)
            setHitbox(neckHitbox, 0, 0, 0, 0)
            setHitbox(bellyHitbox, 0, 0, 0, 0)
            setHitbox(backHitbox, 0, 0, 0, 0)
            setHitbox(buttHitbox, 0, 0, 0, 0)
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
            else if (pet.getVideoKey().startsWith('sit')) { position = 'sit' }
            else if (pet.getVideoKey().startsWith('lay')) { position = 'lay' }
            else if (pet.getVideoKey().startsWith('slp')) { position = 'slp' }
            return position
        }


        // ===== Buttons =====
        // Button for toy ball
        const ballButton = this.add.text(259, 300, 'Ball', { fill: '#000' }).setOrigin(.5, .5);
        ballButton.setInteractive({ useHandCursor: true });
        ballButton.on('pointerover', () => { if (!action) {ballButton.setStyle({ fill: '#fff'}); }});
        ballButton.on('pointerout', () => { ballButton.setStyle({ fill: '#000'}); });
        ballButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'ball'
            }
        });
        
        // Button for toy disc
        const discButton = this.add.text(329, 300, 'Disc', { fill: '#000' }).setOrigin(.5, .5);
        discButton.setInteractive({ useHandCursor: true });
        discButton.on('pointerover', () => { if (!action) {discButton.setStyle({ fill: '#fff'}); }});
        discButton.on('pointerout', () => { discButton.setStyle({ fill: '#000'}); });
        discButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'disc'
            }
        });

        // Button to give pet water
        const waterButton = this.add.text(404, 300, 'Water', { fill: '#000' }).setOrigin(.5, .5);
        waterButton.setInteractive({ useHandCursor: true });
        waterButton.on('pointerover', () => { if (!action) {waterButton.setStyle({ fill: '#fff'}); }});
        waterButton.on('pointerout', () => { waterButton.setStyle({ fill: '#000'}); });
        waterButton.on('pointerdown', () => {
            if (!action) {
                action = true
                currentAction = 'water'
            }
        });

        // Button to give pet food
        const foodButton = this.add.text(479, 300, 'Food', { fill: '#000' }).setOrigin(.5, .5);
        foodButton.setInteractive({ useHandCursor: true });
        foodButton.on('pointerover', () => { if (!action) {foodButton.setStyle({ fill: '#fff'}); }});
        foodButton.on('pointerout', () => { foodButton.setStyle({ fill: '#000'}); });
        foodButton.on('pointerdown',  () => {
            if (!action) {
                action = true
                currentAction = 'feed'
            }
        });


        // ===== Video switching =====
        /**
         * Transtions to sitting up and gives the pet some food
         * @returns The next video to play
         */
        function giveFood() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {nextVid = `foodin`; petSprite.setFrame('sta')}
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `sta.fromsitup`; petSprite.setFrame('situp')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `sta.fromsit`; petSprite.setFrame('sit')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `sta.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            else if (pet.getVideoKey().startsWith('eating.low')) {
                action = false
                currentAction = 'none'
                nextVid = `sta.foodout`;
                petSprite.setFrame('eat_out');
                bwlOutSound.play()
            }
            else if (pet.getVideoKey().startsWith('foodin') || pet.getVideoKey().startsWith('eating')) {
                nextVid = `${eating[randomIntFromInterval(0, eating.length-1)]}`;
                petSprite.setFrame('eat')
                if (!nextVid.endsWith('lookup')) {eatSound.play()}
            }
            return nextVid
        }

        /**
         * Transtions to sitting up and gives the pet some water
         * @returns The next video to play
         */
        function giveWater() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {nextVid = `waterin`; petSprite.setFrame('sta')}
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `sta.fromsitup`; petSprite.setFrame('situp')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `sta.fromsit`; petSprite.setFrame('sit')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `sta.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            else if (pet.getVideoKey().startsWith('drinking')) {
                action = false
                currentAction = 'none'
                nextVid = `sta.waterout`;
                petSprite.setFrame('drink_out');
                bwlOutSound.play()
            }
            else if (pet.getVideoKey().startsWith('waterin')) {
                nextVid = 'drinking';
                petSprite.setFrame('drink')
            }
            return nextVid
        }

        /**
         * Transtions to standing and gives the pet a toy ball
         * @returns The next video to play
         */
        function giveBall() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {
                action = false
                currentAction = 'none'
                nextVid = `${playball[randomIntFromInterval(0, playball.length-1)]}`; 
                petSprite.setFrame('sta')
                switch (nextVid) {
                    case 'sta.ballcatch_a':
                        ballcatch_aSound.play()
                        break;
                    case 'sta.ballcatch_b':
                        ballcatch_bSound.play()
                        break;
                    case 'sta.ballmiss_a':
                        ballmiss_aSound.play()
                        break;
                    case 'sta.ballmiss_b':
                        ballmiss_bSound.play()
                        break;
                
                    default:
                        break;
                }
            }
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `sta.fromsitup`; petSprite.setFrame('situp')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `sta.fromsit`; petSprite.setFrame('sit')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `sta.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            return nextVid
        }

        /**
         * Transtions to standing and gives the pet a toy disc
         * @returns The next video to play
         */
        function giveDisc() {
            let nextVid = null
            if (pet.getVideoKey().startsWith('sta')) {
                action = false
                currentAction = 'none'
                nextVid = `${playdisc[randomIntFromInterval(0, playdisc.length-1)]}`; 
                petSprite.setFrame('sta')
                switch (nextVid) {
                    case 'sta.disccatch_a':
                        disccatch_aSound.play()
                        break;
                    case 'sta.disccatch_b':
                        disccatch_bSound.play()
                        break;
                    case 'sta.disccatch_c':
                        disccatch_cSound.play()
                        break;
                    case 'sta.discmiss_a':
                        discmiss_aSound.play()
                        break;
                    case 'sta.discmiss_b':
                        discmiss_bSound.play()
                        break;
                
                    default:
                        break;
                }
            }
            else if (pet.getVideoKey().startsWith('clos')) {nextVid = `sta.fromclos`; petSprite.setFrame('clos')}
            else if (pet.getVideoKey().startsWith('situp')) {nextVid = `sta.fromsitup`; petSprite.setFrame('situp')}
            else if (pet.getVideoKey().startsWith('sit')) {nextVid = `sta.fromsit`; petSprite.setFrame('sit')}
            else if (pet.getVideoKey().startsWith('lay')) {nextVid = `sta.fromlay`; petSprite.setFrame('lay')}
            else if (pet.getVideoKey().startsWith('slp')) {nextVid = `lay.fromslp`; petSprite.setFrame('slp')}
            return nextVid
        }

        /**
         * Determines the next video when the player is petting the pet
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
         * Determines the next video when the player stops petting the pet
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
         * Determines the next video randomly from the given set of idle and transition animations.
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
                if (!pet.getVideoKey().includes('mouthclosed')) {
                    pantingSound.play()
                }
            } else if (rand < 70) {
                nextVid = `${position}.breathe`;
                if (!pet.getVideoKey().includes('mouthclosed')) {
                    pantingSound.play()
                }
            } else if (rand < 85) {
                nextVid = `${position}.${idleArray[randomIntFromInterval(0, idleArray.length-1)]}`;
            } else {
                nextVid = `${movArray[randomIntFromInterval(0, movArray.length-1)]}`;
                resetHitboxes()
            }
            return nextVid
        }

        /**
         * Select and switch to a new video after the previous video has ended
         */
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
                    case 'ball':
                        nextVid = giveBall()
                        resetHitboxes()
                        break;
                    case 'disc':
                        nextVid = giveDisc()
                        resetHitboxes()
                        break;
                    // case 'petHead':
                    //     nextVid = petAnimal('head')
                    //     break;
                    // case 'petNeck':
                    //     nextVid = petAnimal('neck')
                    //     break;
                    // case 'petBelly':
                    //     nextVid = petAnimal('belly')
                    //     break;
                    // case 'petBack':
                    //     nextVid = petAnimal('back')
                    //     break;
                    // case 'petButt':
                    //     nextVid = petAnimal('butt')
                    //     break;
                    // case 'stopPetHead':
                    //     nextVid = stopPetAnimal('head')
                    //     break;
                    // case 'stopPetNeck':
                    //     nextVid = stopPetAnimal('neck')
                    //     break;
                    // case 'stopPetBelly':
                    //     nextVid = stopPetAnimal('belly')
                    //     break;
                    // case 'stopPetBack':
                    //     nextVid = stopPetAnimal('back')
                    //     break;
                    // case 'stopPetButt':
                    //     nextVid = stopPetAnimal('butt')
                    //     break;
                
                    default:
                        action = false
                        break;
                }
            }
            else if (pet.getVideoKey().startsWith('sta')) {
                nextVid = getNextVideo('sta', staIdle,staMov)
                // Resize hitboxes for petting
                // setHitbox(headHitbox, 307, 80, 60, 60)
                // setHitbox(neckHitbox, 307, 140, 40, 60)
                // setHitbox(backHitbox, 347, 140, 25, 60)
                // setHitbox(buttHitbox, 372, 140, 25, 60)
            } 
            else if (pet.getVideoKey().startsWith('clos')) {
                nextVid = getNextVideo('clos', closIdle, closMov)
                // Resize hitboxes for petting
                // setHitbox(headHitbox, 296, 65, 120, 80)
                // setHitbox(neckHitbox, 300, 155, 120, 80)
            } 
            else if (pet.getVideoKey().startsWith('situp')) {
                nextVid = getNextVideo('situp', situpIdle, situpMov)
                // Resize hitboxes for petting
                // setHitbox(headHitbox, 317, 80, 60, 55)
                // setHitbox(neckHitbox, 317, 135, 60, 40)
            } 
            else if (pet.getVideoKey().startsWith('sit')) {
                // Resize hitboxes for petting
                // setHitbox(headHitbox, 327, 90, 60, 55)
                // setHitbox(neckHitbox, 317, 145, 60, 50)
                nextVid = getNextVideo('sit', sitIdle, sitMov)
            } 
            else if (pet.getVideoKey().startsWith('lay')) {
                // Resize hitboxes for petting
                // setHitbox(headHitbox, 282, 145, 60, 55)
                // setHitbox(neckHitbox, 287, 200, 50, 50)
                // setHitbox(bellyHitbox, 337, 180, 50, 65)
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
                else if (currentVid.startsWith('sit')) {nextVid = 'sit.breathe'; petSprite = 'sit'}
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
            if (nextVid.includes('bark')) {
                switch (nextVid) {
                    case 'sta.bark_b':
                        barkBSound.play()
                        break;
                    case 'sta.aggressivebark':
                        barkAggressiveSound.play()
                        break;
                    case 'sta.aggression.bark':
                        barkAggressionSound.play()
                        break;
                    case 'clos.bark':
                        closBarkSound.play()
                        break;
                
                    default:
                        barkSound.play()
                        break;
                }
            } else if (nextVid.includes('sneeze')) {
                sneezeSound.play()
            }
            
        // const bwlOutSound = this.sound.add('bwlOutSound');
        // const eatSound = this.sound.add('eatSound');

        // const ballcatch_aSound = this.sound.add('ballcatch_aSound');
        // const ballcatch_bSound = this.sound.add('ballcatch_bSound');
        // const ballmiss_aSound = this.sound.add('ballmiss_aSound');
        // const ballmiss_bSound = this.sound.add('ballmiss_bSound');
        // const disccatch_aSound = this.sound.add('disccatch_aSound');
        // const disccatch_bSound = this.sound.add('disccatch_bSound');
        // const disccatch_cSound = this.sound.add('disccatch_cSound');
        // const discmiss_aSound = this.sound.add('discmiss_aSound');
        // const discmiss_bSound = this.sound.add('discmiss_bSound');

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
        // Hide petSprite after the video starts
        if (pet.getProgress() > 0.000000001) {
            petSprite.setVisible(false);
        }
    }
}