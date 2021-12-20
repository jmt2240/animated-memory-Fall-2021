 console.log('it works')

 var verbs, nouns, adjectives;

nouns = ["puck", "Backstrom", "hockey"];
verbs = ["trembles", "weeps", "shakes"];
adjectives = ["buttery", "beautifully", "incrediblely"];

function randomGen(){
    return Math.floor(Math.random() * 3);
}

function sentence() {
    
var noun, verb, adjective, text;

noun = nouns[Math.floor(Math.random() * nouns.length)];
verb = verbs[Math.floor(Math.random() * verbs.length)];
adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

text = `Ovechkin ${noun} scores ${adjectives} when a goalie ${verb} and cries.`;

document.getElementById('sentence').innerHTML = text;

}
console.log(sentence);
sentence();