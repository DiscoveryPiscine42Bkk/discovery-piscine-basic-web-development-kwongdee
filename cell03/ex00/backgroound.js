function Change_color() {
    //this function will worked by call output-position do sometion when the functuion activated...
    document.body.style.backgroundColor = Random_Color ();
}

function Random_Color () {
    let hue = Math.random() * 360;
    let sat = (Math.random() * 100) + '%';
    let light = (Math.random() * 60+20) + '%';
    let color = `hsl(${hue}, ${sat}, ${light})`;


    return color;
}