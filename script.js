//Piano part:

const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const BLACK_KEYS = ['w', 'e', 't', 'z', 'u']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

//Play keys with keyboard
document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

//Play the audiofile for the played key
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

//Button part:
var durationOption = document.getElementById("durationOption");
var durationValue = durationOption.value;
var num_beatsValue = document.getElementById('num_beats').value;
var beat_valueValue = document.getElementById('beat_value').value;

//Reset note sheet by creating a new one over the older one
document.getElementById('reset').onclick = function() {
  context.rect(0,0,695,110,{ stroke: 'none', fill: 'white' });
  stave = new Stave(0, 0, 690);
  stave.addClef("treble");
  stave.setContext(context).draw();
  notes = [];
  voiceChange.setMode(3);
  voiceChange.addTickables(notes);
  new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
  voiceChange.draw(context, stave);
}


//Note Sheet part (via Vexflow):

const {Accidental, Renderer, Stave, StaveNote, Voice, Formatter } = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(700, 125);
const context = renderer.getContext();

var stave = new Stave(0, 0, 690);

// Add a clef.
stave.addClef("treble");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = []

//Write single notes on the note sheet
document.addEventListener('keydown', e => {

  var voiceChange = new Voice({
    num_beats: num_beatsValue,
    beat_value: beat_valueValue
  })
  
  voiceChange.setMode(3);

    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    if (whiteKeyIndex > -1) {
      if (whiteKeyIndex == 0) {
        var note = new StaveNote({keys:['c/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if(whiteKeyIndex == 1) {
        var note = new StaveNote({keys:['d/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if(whiteKeyIndex == 2) {
        var note = new StaveNote({keys:['e/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if(whiteKeyIndex == 3) {
        var note = new StaveNote({keys:['f/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if(whiteKeyIndex == 4) {
        var note = new StaveNote({keys:['g/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if(whiteKeyIndex == 5) {
        var note = new StaveNote({keys:['a/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if (whiteKeyIndex == 6)  {
        var note = new StaveNote({keys:['b/4'], duration: durationValue})
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else {
        return
      }
    }
    if (blackKeyIndex > -1) {
      if (blackKeyIndex == 0) {
        var note = new StaveNote({keys:['c/4'], duration: durationValue}).addModifier( new Accidental("#"));
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if (blackKeyIndex == 1) {
        var note = new StaveNote({keys:['d/4'], duration: durationValue}).addModifier( new Accidental("#"));
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if (blackKeyIndex == 2) {
        var note = new StaveNote({keys:['f/4'], duration: durationValue}).addModifier( new Accidental("#"));
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if (blackKeyIndex == 3) {
        var note = new StaveNote({keys:['g/4'], duration: durationValue}).addModifier( new Accidental("#"));
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
      else if (blackKeyIndex == 4) {
        var note = new StaveNote({keys:['a/4'], duration: durationValue}).addModifier( new Accidental("#"));
        notes.push(note);
        var voiceChange = new Voice({
          num_beats: num_beatsValue,
          beat_value: beat_valueValue
        })
        voiceChange.addTickables(notes);
        new Formatter().joinVoices([voiceChange]).format([voiceChange], 350);
        voiceChange.draw(context, stave);
      }
    }
   
})

