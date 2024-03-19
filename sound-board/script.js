const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        let audio = document.getElementById(sound);
        if(audio.paused){
            audio.play();
        } else {
            audio.pause();
        }
    });

    document.getElementById('buttons').appendChild(btn);
})

