//I forked and modified this codepen for some random image captions: https://codepen.io/chiragbhansali/pen/EWppvy
var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
    return Math.floor(Math.random() * 5);
}

function sentence() {
    var rand1 = Math.floor(Math.random() * 5);
    var rand2 = Math.floor(Math.random() * 5);
    var rand3 = Math.floor(Math.random() * 5);
    var rand4 = Math.floor(Math.random() * 5);
    var rand5 = Math.floor(Math.random() * 5);
    var rand6 = Math.floor(Math.random() * 5);
    var content = "The " + adjectives[rand1] + " " + " " + adverbs[rand3] + " " + verbs[rand4] + ".";

    return content;
}


//Here we load in some randomly generated images into all the image div blocks
let images = document.getElementsByClassName("image");

for (let image of images) {
    //loading in images start
    const imgEl = document.createElement('img');
    imgEl.className = "img";
    imgEl.src = "https://picsum.photos/200?random=" + Math.floor(Math.random() * 400);;
    image.appendChild(imgEl);
    //loading in images end

    //adding the captions start
    const desc = document.createElement('div');
    desc.className = "desc";

    const desc_title = document.createElement('p');
    desc_title.className = "desc_content";
    var text = document.createTextNode(sentence());
    desc_title.appendChild(text);

    desc.appendChild(desc_title);

    image.appendChild(desc);
    //adding the captions end
}
