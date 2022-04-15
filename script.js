let gender = ['o','a'];
let entree = ['Porc','Maledett','Dannat','Mannaggia','Fanculo','Crepi','Schiatti'];
let titolo = ["Sant'",'San ','Santa '];
let nomeM = ['Gennaro','Marco','Ambrogio','Luca','Gabriele','Orazio','Lorenzo'];
let nomeF = ['Federica','Chiara','Lucia','Silvia','Anna','Beatrice','Giulia'];
let azione = ['bruciat','ars','frustat','inculat','soffocat','percoss','perseguitat','sventrat','crocifiss','inforcat','pungolat','accecat'];
let oggetto = ['la croce','il tabernacolo','un leccalecca gigante','un cilicio','Excalibur','un secchio di bitcoin','un nido di vespe','la sacra sindone','il graal','le mutande del papa'];
let caratt = ['infuocat','infuriat','annoiat','scomunicat','pedofil','drogat','indemoniat','canterin'];

function random(max){
    return Math.floor(Math.random()*max);
}

function create(gen){
    let nome;
    let tit;

    if(gen == 0){
        nome = nomeM[random(nomeM.length)]
    } else {
        nome = nomeF[random(nomeF.length)]
    }

    if(nome[0] == 'A' || nome[0] == 'E' || nome[0] == 'I' || nome[0] == 'O' || nome[0] == 'U'){
        tit = titolo[0]
    } else if(gen == 0) {
        tit = titolo[1]
    } else {
        tit = titolo[2]
    }

    return `${tit}${nome}`
}
document.querySelector('button').addEventListener('click',() => {
    let gen = random(gender.length);
    let ent = entree[random(entree.length)];

 
    if(ent[ent.length-1] != 'a' && ent[ent.length-1] != 'o' && ent[ent.length-1] != 'i'){
        ent += gender[gen]
    };

    let personaggio1 = create(gen);
    let act = azione[random(azione.length)] + gender[gen];
    let gen2 = random(gender.length);
    let personaggio2 = create(gen2);

    while(personaggio1 == personaggio2){
        personaggio2 = create(random(gender.length));
    }

    let ogg = oggetto[random(oggetto.length)];
    let cara = caratt[random(caratt.length)] + gender[gen2];

    console.log(`${ent} ${personaggio1} ${act} con ${ogg} da ${personaggio2} ${cara}`)
});