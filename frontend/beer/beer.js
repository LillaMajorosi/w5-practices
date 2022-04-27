const beerCardComponent = function (name, company, type, size) {
    return `
        <div class="card">
            <div class="beer_name"> ${name} </div>
            <div class="beer_company"> ${company} </div>
            <div class="beer_type"> ${type} </div>
            <div class="beer_size"> ${size} </div>
        </div>
    `
}


const beerTitleComponent = `
<h1>Beers</h1>
`;

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent);  
    
    /*az insertadjacementhtml egy metódus, két stringet kér, egy position és egy olyan stringet, amit html kóddá tud konvertálni. beforeend=mielőtt lezárná, azelőtt teszi be a kövi szót amit megadok. argumentumok közé vessző

    kövi lépés, hogy változót hozok létre a pozíció után. megadom a pozíció nevét, majd megírom a változó kódját, hogy hogyan csinálja
    */

    //hogy hívok meg adatot rész következik -->

    //mi a tömb? a cards, azt akarom meghívni
    console.log(beers.cards); 
    console.log(beers.logo);

    //tömb esetén forciklust használok. forciklust attól függ, hogy melyiket használom. ha nincs adat és el kell számolnom valameddig, akkor a for loop (i++) ha van adat akkor forof. Az of után, az object helyére, mindig a tömb neve jön, az elérési útvonala. iterator a változó, amit én adok meg

    for (const beer of beers.cards) {
        console.log(beer)              //mit akarok megnézni, a beer-eket, egyes számba
        //console.log(beer.cards[0].title)   //itt csak az első elem title-jét fogja kiírni annyiszor, amennyiszer szerepel a data.js-ben. ehelyett hoztuk létre a beer iterátort, a változót.
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text, beer.size))
    }

}


window.addEventListener("load", loadEvent)

console.log(window)