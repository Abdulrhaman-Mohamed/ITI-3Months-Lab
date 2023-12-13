var mySong = document.getElementsByTagName("li");
var img = document.getElementsByTagName("img")[0];
var audio = document.getElementsByTagName("audio")[0];
var btns = document.getElementsByTagName("button");
var inputs= document.getElementsByTagName("input");

audio.addEventListener("durationchange",function(){
    inputs[0].max = audio.duration;
})

audio.addEventListener("timeupdate" , function(){
     
    inputs[0].value =audio.currentTime;
})

for(var i = 0 ; i < mySong.length ; i++)
{
    console.log(mySong[i]);
    mySong[i].addEventListener("click",function(){
        console.log(this);
        img.src = `./images/${this.value}.jpg`;
        audio.src=`./songs/${this.value}.mp3`;
    })
    
}

// mySong[0].addEventListener("click",function(){
//     img.src = `./images/${mySong[0].value}.jpg`;
//     audio.src=`./songs/${mySong[0].value}.mp3`;
// })

// mySong[1].addEventListener("click",function(){
//     img.src = `./images/${mySong[1].value}.jpg`;
//     audio.src=`./songs/${mySong[1].value}.mp3`;
// })

// mySong[2].addEventListener("click",function(){
//     img.src = `./images/${mySong[2].value}.jpg`;
//     audio.src=`./songs/${mySong[2].value}.mp3`;
// })

// mySong[3].addEventListener("click",function(){
//     img.src = `./images/${mySong[3].value}.jpg`;
//     audio.src=`./songs/${mySong[3].value}.mp3`;
// })

btns[0].addEventListener("click",function(){
    audio.play();
})

btns[1].addEventListener("click",function(){
    audio.pause();
    audio.pause();
})

btns[2].addEventListener("click",function(){
    audio.load();
})

inputs[0].addEventListener("input",function(){
    audio.currentTime = inputs[0].value;
})

inputs[1].addEventListener("input",function(){
    audio.volume = inputs[1].value;
})

