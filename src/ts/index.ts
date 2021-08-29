import { notesToPlayInOrder } from "./music-to-play";
import { Pitch, Accidental, BEATS_PER_MINUTE } from "./musical-score";

const notes: any[] = notesToPlayInOrder;
let counter = 0;

function playMusic() {
    const notes = notesToPlayInOrder;
    playNotes();
}

function playNotes() {
    let pitch: Pitch = notes[counter]['pitch'];
    let octave = notes[counter]['octave'];
    let beats = notes[counter]['beats'];
    let accidental: Accidental = notes[counter]['accidental'] ? notes[counter]['accidental'] : '';
    counter += 1;
    let noteID: string = `${pitch}${octave}${accidental}`;
    let audio = document.getElementById(noteID) as HTMLAudioElement;
    audio.play();
    setTimeout(function (){
        audio.pause();
    }, beats * BEATS_PER_MINUTE);
    audio.onpause = playNotes;
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
