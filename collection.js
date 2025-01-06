///////////////////  SHOP DATABASE  /////////////// 

let list = ['Database']
console.log(list)

/* let test = list.slice(0,13);
console.log('look',test) */


// INFO POINT collection

// 0-12 jacketBoy
// 13-24 jacketGirl
// 25-36 hoodyBoy
// 26-48 hoodyGirl
// 49- 58 kimonoBoty
// 59-68 kimonoGirl
// 69-81 shoesBoy
// 82-95 shoesGirl 

fetch(url, {
    headers: {
    "Authorization": token
    }
    })
.then(dataRow => dataRow.json())
.then(dataRefined => {
    console.log("Database Original in fetch")
    console.log(dataRefined)
    list.push(...dataRefined)
    
})
.catch(err => console.log("Something when wrong = " + err))

///////////////////  ARRAY CATEGORY /////////////// 

const JacketBoy = [

    {   name:"Neo Ronin Graffiti",
        description:"Domina il paesaggio urbano con l'Oni Code Techwear Parka, un capo d'avanguardia che unisce l'estetica cyberpunk con la funzionalità techwear. Questo parka oversize, realizzato in tessuto tecnico impermeabile e traspirante, presenta un design audace in bianco e nero, arricchito da stampe grafiche ispirate ai kanji giapponesi e da accenti rosa a contrasto. Il taglio lungo e le molteplici tasche cargo offrono praticità e un look grintoso, mentre i dettagli regolabili su cappuccio, vita e polsini permettono una vestibilità personalizzata. L'Oni Code Techwear Parka è la scelta ideale per chi cerca un capo distintivo, che unisca stile e performance.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/84634bce-99cd-4fbe-a223-1538b324f45c/0_0.jpeg",
        price: 189,
    },
    {   name:"Oni Code Techwear Parka",
        description:"Esplora la metropoli con la giacca Neo Ronin Graffiti, un capo streetwear che fonde l'audacia del cyberpunk con l'energia vibrante dell'arte urbana giapponese. Questa giacca oversize, realizzata in tessuto tecnico resistente all'acqua, presenta un audace design in bianco e nero, interrotto da accenti rosa che catturano lo sguardo. Le stampe grafiche, ispirate ai graffiti e ai kanji giapponesi, conferiscono un look unico e ribelle. Il cappuccio regolabile e la vestibilità ampia garantiscono comfort e libertà di movimento, mentre i polsini e l'orlo a costine offrono una protezione extra dagli elementi. La Neo Ronin Graffiti Jacket non è solo un capo d'abbigliamento, è una dichiarazione di stile per chi vive la città senza compromessi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/939e6051-e021-4e8f-9e05-19425be7fb95/0_0.jpeg",
        price: 249,
    },
    {   name:"Shogun Crimson Parka",
        description:"Afferma la tua presenza nelle strade della metropoli con il Shogun Crimson Tech Parka, un capo che incarna lo spirito audace del guerriero urbano. Questo parka oversize, realizzato in tessuto tecnico ad alte prestazioni, sfoggia un design di grande impatto in bianco e nero, dominato da scritte di ispirazione giapponese in un vibrante rosa cremisi. Il taglio lungo e la vestibilità ampia offrono comfort e libertà di movimento, mentre le numerose tasche cargo garantiscono praticità. Il cappuccio regolabile e la chiusura frontale con zip a doppio cursore ti proteggono dalle intemperie. Il Shogun Crimson Tech Parka è la scelta perfetta per chi vuole distinguersi con un look cyberpunk deciso e senza compromessi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/e5ae6a1f-b06a-42e2-a1d2-b5e48ed772cc/0_0.jpeg",
        price: 269,
    },
    {   name:"Sakura Code Rain",
        description:"Affronta la pioggia con stile grazie alla Sakura Code Rain Jacket, una giacca antipioggia che unisce funzionalità e design d'avanguardia. Realizzata in tessuto tecnico leggero e impermeabile, questa giacca oversize presenta un'audace combinazione di nero e rosa, con stampe grafiche e scritte di ispirazione giapponese che catturano lo sguardo. Il design lungo e la vestibilità ampia offrono comfort e protezione, mentre i dettagli regolabili su cappuccio e polsini permettono una vestibilità personalizzata. La Sakura Code Rain Jacket è la scelta ideale per chi cerca un capo pratico e alla moda, perfetto per affrontare le giornate uggiose in città.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/5889d9b6-45bf-46c7-ac0f-a26ee657365d/0_0.jpeg",
        price: 169,
    },
    {   name:"Oni Glitch",
        description:"Distinguiti dalla massa con la Oni Glitch Tech Jacket, una giacca che ridefinisce i confini dello stile urbano. Questo capo, realizzato in tessuto tecnico resistente e traspirante, presenta un design audace in nero, interrotto da grafiche di ispirazione giapponese in un rosa acceso che sembra quasi emergere da un errore digitale. La vestibilità oversize, il cappuccio regolabile e le molteplici tasche cargo uniscono comfort e praticità. La Oni Glitch Tech Jacket è la scelta perfetta per chi vuole esprimere la propria individualità con un look cyberpunk audace e all'avanguardia.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/6e1fb9fa-b715-435b-96c4-3eeb3573405e/0_0.jpeg",
        price: 229,
    },
    {   name:"Metro Ronin",
        description:"Muoviti con agilità nell'intricato labirinto della città con la Metro Ronin Tech Jacket, un capo che combina un'estetica d'impatto con la praticità del design techwear. Questa giacca oversize, realizzata in tessuto tecnico leggero e resistente, presenta un audace design in bianco e nero, con grafiche di ispirazione giapponese e accenti rosa che catturano l'attenzione. La vestibilità ampia assicura comfort e libertà di movimento, mentre il cappuccio regolabile e le numerose tasche cargo offrono funzionalità e stile. La Metro Ronin Tech Jacket è la scelta ideale per chi vuole affrontare la giungla urbana con un look cyberpunk deciso e senza compromessi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/85f3b4df-9d3a-4f3c-aa48-6a378c15e591/0_0.jpeg",
        price: 219,
    },
    {   name:"Phantom Code Rain",
        description:"Svela il tuo lato enigmatico con la Phantom Code Rain Jacket, una giacca antipioggia che unisce un design all'avanguardia con la massima protezione dagli elementi. Realizzata in tessuto tecnico impermeabile e traspirante, questa giacca oversize presenta un'intrigante combinazione di bianco e nero, arricchita da stampe grafiche di ispirazione giapponese e da vivaci accenti rosa. Il taglio lungo e la vestibilità ampia garantiscono comfort e libertà di movimento, mentre il cappuccio regolabile e le tasche con zip offrono praticità e sicurezza. La Phantom Code Rain Jacket è la scelta perfetta per chi desidera affrontare le intemperie con un look cyberpunk unico e distintivo.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/55205dae-85fa-4580-b301-eca509faf2fb/0_0.jpeg",
        price: 179,
    },
    {   name:"Inferno Script",
        description:"Scatena il fuoco interiore con la Inferno Script Tech Jacket, un capo che combina un design audace con la funzionalità del techwear. Questa giacca oversize, realizzata in tessuto tecnico resistente e traspirante, presenta un look total black interrotto da stampe grafiche di ispirazione giapponese in un arancione infuocato. Le numerose tasche cargo offrono praticità e un tocco grintoso, mentre il cappuccio regolabile e i polsini elasticizzati garantiscono protezione dagli elementi. La Inferno Script Tech Jacket è la scelta perfetta per chi vuole affrontare la giungla urbana con un look cyberpunk deciso e senza compromessi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/54b80f57-e5aa-4e3d-8106-b9c7654d4573/0_0.jpeg",
        price: 239,
    },
    {   name:"Ghost Ronin",
        description:"Muoviti come un'ombra nella metropoli con la Ghost Ronin Tech Jacket, un capo che unisce un design minimalista con la funzionalità del techwear. Questa giacca oversize, realizzata in tessuto tecnico leggero e resistente, presenta un'elegante base bianca arricchita da stampe grafiche nere di ispirazione giapponese, posizionate strategicamente per un look dinamico. La vestibilità ampia e il cappuccio regolabile offrono comfort e protezione, mentre le tasche con zip e i dettagli regolabili aggiungono un tocco di praticità. La Ghost Ronin Tech Jacket è la scelta ideale per chi cerca un capo versatile e di tendenza, perfetto per affrontare la città con uno stile cyberpunk sofisticato.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/c6ac8db0-db06-47c1-85ca-f603184dfb1c/0_0.jpeg",
        price: 199,
    },
    {   name:"Blood Kanji",
        description:"Lascia il segno con la Blood Kanji Tech Jacket, un capo che fonde l'intensità dello stile urbano con la funzionalità del techwear. Questa giacca oversize, realizzata in tessuto tecnico robusto e traspirante, presenta un design total black impreziosito da audaci stampe di kanji giapponesi in un rosso sanguigno che cattura l'attenzione. La vestibilità ampia e il cappuccio regolabile offrono comfort e protezione, mentre le molteplici tasche cargo e i dettagli con cinghie aggiungono un tocco di aggressività funzionale. La Blood Kanji Tech Jacket è la scelta perfetta per chi vuole dominare la città con un look cyberpunk audace e senza compromessi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/df5ae3f7-ecc2-4470-8d5d-2b77e4b1da3f/0_0.jpeg",
        price: 259,
    },
    {   name:"Shadow Parka",
        description:"Padroneggia l'arte del movimento urbano con lo Shadow Script Tech Parka, un capo che unisce un design minimalista con la funzionalità del techwear. Questo parka oversize, realizzato in tessuto tecnico resistente e idrorepellente, presenta un'elegante base grigio scuro arricchita da scritte bianche di ispirazione giapponese, posizionate strategicamente per un look dinamico. La vestibilità ampia e il taglio lungo offrono comfort e protezione, mentre il cappuccio regolabile, le molteplici tasche e i dettagli regolabili aggiungono un tocco di praticità. Lo Shadow Script Tech Parka è la scelta ideale per chi cerca un capo versatile e di tendenza, perfetto per affrontare la città con uno stile cyberpunk sofisticato.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/0ce2bcec-45e7-4eda-84c6-bd9247892bd7/0_0.jpeg",
        price: 209,
    },
    {   name:"Urban Ronin",
        description:"Affronta la giungla d'asfalto con l'Urban Ronin Tech Parka, un capo che unisce la praticità del techwear a un design di ispirazione giapponese. Questo parka oversize, realizzato in tessuto tecnico resistente e traspirante, presenta un look total black arricchito da stampe grafiche bianche, strategicamente posizionate per un effetto dinamico e di forte impatto. La vestibilità ampia e il cappuccio regolabile offrono comfort e protezione, mentre le molteplici tasche e i dettagli regolabili aggiungono un tocco di funzionalità urbana. L'Urban Ronin Tech Parka è la scelta ideale per chi vuole muoversi in città con un look cyberpunk deciso e senza compromessi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/8bcef2b7-f04c-4b1e-a1e2-7f542d18e333/0_0.jpeg",
        price: 229,
    }
]

const JacketGirl = [

    {   name:"Sakura Rain ",
        description:"Affronta la pioggia con un tocco di oscura eleganza grazie alla Shadow Sakura Rain Jacket, una giacca antipioggia che fonde l'estetica cyberpunk con un'anima gotica. Realizzata in tessuto tecnico impermeabile e traspirante, questa giacca oversize presenta un design nero con stampe grafiche bianche di ispirazione giapponese e audaci accenti rosa. Il cappuccio ampio, la chiusura con zip e i dettagli regolabili offrono protezione e versatilità, mentre la vestibilità ampia garantisce comfort e libertà di movimento. La Shadow Sakura Rain Jacket è la scelta perfetta per chi vuole esprimere la propria individualità con un look dark, femminile e all'avanguardia.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/ea525a24-8a8e-437b-a8eb-cd61832d900e/0_0.jpeg",
        price: 189,
    },
    {   name:"Urban Phantom",
        description:"Muoviti tra le ombre della metropoli con la Urban Phantom Rain Jacket, una giacca antipioggia che unisce un design audace con la protezione dagli elementi. Realizzata in tessuto tecnico impermeabile e traspirante, questa giacca oversize presenta un'intrigante combinazione di bianco e nero, arricchita da stampe grafiche di ispirazione giapponese e da delicati accenti rosa. L'ampio cappuccio e la vestibilità comoda offrono riparo e libertà di movimento, mentre i dettagli regolabili e le tasche con zip aggiungono un tocco di praticità. La Urban Phantom Rain Jacket è la scelta ideale per chi vuole affrontare la pioggia con un look cyberpunk femminile e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/559af0d9-35bc-4108-bf68-e4add8ce5531/0_0.jpeg",
        price: 259,
    },
    {   name:"Neon Sakura",
        description:"Illumina la notte con la Neon Sakura Tech Jacket, una giacca che unisce l'energia vibrante del rosa neon con l'audacia dello stile cyberpunk. Realizzata in tessuto tecnico resistente e traspirante, questa giacca oversize presenta un design nero con stampe grafiche di ispirazione giapponese e vistosi accenti rosa, per un look che non passa inosservato. L'ampio cappuccio, la chiusura con zip e i dettagli regolabili offrono protezione e versatilità, mentre la vestibilità comoda garantisce libertà di movimento. La Neon Sakura Tech Jacket è la scelta perfetta per chi vuole esprimere la propria individualità con un look audace, femminile e all'avanguardia.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/ed836610-b49a-49a5-a14f-60583123f667/0_0.jpeg",
        price: 199,
    },
    {   name:"Rogue Script Parka",
        description:"Sfida le convenzioni con il Rogue Script Rain Parka, un capo che unisce la protezione dagli elementi con un'estetica audace e ribelle. Questo parka oversize, realizzato in tessuto tecnico impermeabile e traspirante, presenta un design nero con stampe grafiche bianche di ispirazione giapponese e tocchi di rosa per un look di forte impatto. Il taglio lungo, l'ampio cappuccio e la vestibilità comoda offrono riparo e libertà di movimento, mentre i dettagli regolabili e le tasche con zip aggiungono un tocco di praticità. Il Rogue Script Rain Parka è la scelta perfetta per chi vuole affrontare la pioggia con un look cyberpunk audace e fuori dagli schemi.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/856e2552-aaa3-4d50-b870-a6ef8d01d85f/0_0.jpeg",
        price: 209,
    },
    {   name:"Neo Tokyo Cyber",
        description:"Immergiti nell'oscurità urbana con il Neo Tokyo Cyber, un capo che unisce la protezione dagli elementi a un'estetica cyberpunk audace e di grande impatto. Questo parka oversize, realizzato in tessuto tecnico impermeabile e traspirante, presenta un design total black arricchito da stampe grafiche di ispirazione giapponese e da accenti rosa neon, per un look che non teme di osare. L'ampio cappuccio foderato in rosa, la chiusura con zip e i dettagli regolabili offrono riparo e versatilità, mentre la vestibilità ampia garantisce comfort e libertà di movimento. Il Neo Tokyo Cyber è la scelta perfetta per chi vuole affrontare la pioggia con un look gotico, femminile e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/9a11c677-a3f7-4068-b742-4ed3422a6cf8/0_0.jpeg",
        price: 219,
    },
    {   name:"Kanji Code",
        description:"Avvolgiti in un'aura di mistero con il Kanji Code Phantom Poncho, un capo che reinterpreta lo stile gotico in chiave cyberpunk. Questo poncho oversize, realizzato in tessuto tecnico leggero e resistente, presenta un design nero con stampe grafiche bianche di ispirazione giapponese e accenti rosa neon che risaltano nell'oscurità. L'ampio cappuccio e il taglio asimmetrico offrono un look audace e non convenzionale, mentre la vestibilità fluida garantisce comfort e libertà di movimento. Il Kanji Code Phantom Poncho è la scelta perfetta per chi vuole distinguersi con un capo unico, che fonde l'eleganza dark con l'energia dello streetwear.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/485a6d11-5b9e-48e3-ada1-94839f03d5e7/0_0.jpeg",
        price: 189,
    },
    {   name:"Electric Sakura",
        description:"Fai sentire la tua voce nella giungla di cemento con la Electric Sakura, una giacca antipioggia che unisce un design audace con la protezione dagli elementi. Realizzata in tessuto tecnico impermeabile e traspirante, questa giacca oversize presenta un'esplosione di stampe grafiche in bianco e nero, interrotte da accenti rosa neon che vibrano nell'oscurità. L'ampio cappuccio e la vestibilità comoda offrono riparo e libertà di movimento, mentre i dettagli regolabili e le tasche con zip aggiungono un tocco di praticità. La Electric Sakura è la scelta perfetta per chi vuole affrontare la pioggia con un look cyberpunk femminile, grintoso e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/df61431e-bb41-49f7-b47b-8cf21959e317/0_0.jpeg",
        price: 189,
    },
    {   name:"Nocturne Script ",
        description:"Domina le ombre della notte con la Nocturne Script Rain Jacket, una giacca antipioggia che unisce un'estetica dark e minimalista con la funzionalità del techwear. Questo capo oversize, realizzato in tessuto tecnico impermeabile e traspirante, presenta un design total black impreziosito da scritte bianche di ispirazione giapponese, disposte verticalmente per un effetto di grande impatto. L'ampio cappuccio, la chiusura con zip e i dettagli regolabili offrono protezione e versatilità, mentre la vestibilità ampia garantisce comfort e libertà di movimento. La Nocturne Script Rain Jacket è la scelta perfetta per chi vuole affrontare la pioggia con un look cyberpunk gotico, essenziale e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/f29fbd65-6265-44e2-8c9b-e9aa80786361/0_0.jpeg",
        price: 179,
    },
    {   name:"Urban Coat",
        description:"Muoviti con sicurezza nella giungla d'asfalto con l'Urban Ronin Tech Coat, un capo che unisce un design minimalista con la praticità del techwear. Questo cappotto oversize, realizzato in tessuto tecnico resistente e traspirante, presenta un look total black con discreti dettagli bianchi e rossi, per un tocco di stile inconfondibile. La vestibilità ampia, il cappuccio regolabile e le molteplici tasche offrono comfort e funzionalità, mentre i dettagli regolabili sui lati permettono una vestibilità personalizzata. L'Urban Ronin Tech Coat è la scelta perfetta per chi cerca un capo versatile e di tendenza, ideale per affrontare la città con un look cyberpunk essenziale ma di carattere.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/a5189a0c-6996-4749-8c67-3fc342a3d71c/0_0.jpeg",
        price: 189,
    },
    {   name:"Nightshade",
        description:"Immergiti nelle ombre della città con la Nightshade Script Jacket, un capo che unisce un'estetica dark e seducente con la praticità dello streetwear. Questa giacca oversize, realizzata in tessuto tecnico lucido e resistente, presenta un design total black impreziosito da audaci scritte bianche di ispirazione giapponese. L'ampio cappuccio, la chiusura con zip e la vestibilità comoda offrono riparo e libertà di movimento, mentre i dettagli regolabili aggiungono un tocco di versatilità. La Nightshade Script Jacket è la scelta perfetta per chi vuole affrontare la notte urbana con un look cyberpunk gotico, femminile e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/e7bbb038-21d4-47d0-952a-bfb0963dce9c/0_0.jpeg",
        price: 169,
    },
    {   name:"Steel Ronin Rain",
        description:"Affronta le intemperie con la determinazione di un guerriero urbano grazie alla Steel Ronin Rain Jacket, una giacca antipioggia che unisce un design cyberpunk a una protezione affidabile. Realizzata in tessuto tecnico impermeabile e traspirante, questa giacca oversize presenta un'elegante tonalità grigio acciaio, arricchita da stampe grafiche tono su tono e da dettagli neri a contrasto. L'ampio cappuccio, la chiusura con zip e i polsini regolabili offrono riparo e versatilità, mentre la vestibilità ampia garantisce comfort e libertà di movimento. La Steel Ronin Rain Jacket è la scelta perfetta per chi vuole muoversi in città con un look gotico, femminile e all'avanguardia, senza temere la pioggia.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/803adce9-234a-42a2-b9be-250adbffafc4/0_0.jpeg",
        price: 179,
    },
    {   name:"Lunar Kanj",
        description:"Danza sotto la pioggia con il Lunar Kanji Rain Poncho, un capo che unisce un'estetica gotica e sensuale con la funzionalità di un design impermeabile. Questo poncho oversize, realizzato in tessuto tecnico lucido e resistente, presenta un look total black impreziosito da audaci scritte bianche di ispirazione giapponese. L'ampio cappuccio, le maniche a pipistrello e la vestibilità fluida offrono riparo e libertà di movimento, creando una silhouette misteriosa e affascinante. Il Lunar Kanji Rain Poncho è la scelta perfetta per chi vuole affrontare le intemperie con un look audace, femminile e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/0479dedb-0cab-4912-bc14-d71ddc328c97/0_0.jpeg",
        price: 209,
    },
]

const hoodyBoy = [

    {   name:"Dystopian Echo",
        description:"Esprimi la tua creatività urbana con la Dystopian Echo Hoodie, una felpa che unisce comfort e stile in un'esplosione di energia visiva. Questa felpa oversize, realizzata in morbido cotone, presenta un design unico in bianco e nero, arricchito da stampe grafiche di ispirazione giapponese e da audaci accenti rosa neon. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design catturano l'attenzione. La Dystopian Echo Hoodie è la scelta perfetta per chi vuole distinguersi con un capo streetwear audace e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/775cfddf-430c-4a13-98cd-bff5c72fff43/0_0.jpeg",
        price: 119,
    },
    {   name:"Wanderer's Path",
        description:"Intraprendi il tuo percorso con la Wanderer's Path Hoodie, una felpa che incarna lo spirito dell'esploratore urbano. Questa felpa oversize, realizzata in morbido cotone, presenta un'intrigante combinazione di bianco e nero, arricchita da stampe grafiche di ispirazione giapponese e da accenti rosa vibrante. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, perfetto per muoversi in città. La Wanderer's Path Hoodie è la scelta ideale per chi cerca un capo streetwear originale, che unisca comfort e un'estetica audace.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/d20b9361-592f-4a6a-9d07-2761641e18a0/0_0.jpeg",
        price: 99,
    },
    {   name:"Urban Ronin's",
        description:"Fai echeggiare la tua presenza nella metropoli con l'Urban Ronin's Echo Hoodie, una felpa che unisce un design audace con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera animata da stampe grafiche di ispirazione giapponese e da accenti rosa vibrante, disposti in modo strategico per catturare l'attenzione. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. L'Urban Ronin's Echo Hoodie è la scelta perfetta per chi vuole distinguersi con un capo streetwear unico e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/67eef1d6-1e05-45e6-96f3-71e08e9279e3/0_0.jpeg",
        price: 109,
    },
    {   name:"Crimson Spire",
        description:"Scala le vette dello stile urbano con la Crimson Spire Hoodie, una felpa che unisce un design di grande impatto visivo con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da stampe grafiche di ispirazione giapponese e da audaci accenti di un rosso cremisi intenso. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, perfetto per dominare il paesaggio metropolitano. La Crimson Spire Hoodie è la scelta ideale per chi cerca un capo streetwear che unisca un'estetica audace a una personalità decisa.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/73d55989-2e51-4080-9727-96b936bd13e2/0_0.jpeg",
        price: 189,
    },
    {   name:"Ivory Ronin",
        description:"Abbraccia la tua indipendenza con la Ivory Ronin Hoodie, una felpa che unisce un'estetica minimalista con lo spirito audace dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta un'elegante base color avorio arricchita da stampe grafiche nere di ispirazione giapponese, disposte per creare un look dinamico e di carattere. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Ivory Ronin Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/165f214f-3a51-4d0f-afa4-632440db9516/0_3.jpeg",
        price: 120,
    },
    {   name:"Urban Echo Script",
        description:"Lascia che il tuo stile riecheggi nelle strade della città con l'Urban Echo Script Hoodie, una felpa che unisce un design audace con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera animata da stampe grafiche di ispirazione giapponese, disposte in modo strategico per catturare l'attenzione. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. L'Urban Echo Script Hoodie è la scelta perfetta per chi vuole distinguersi con un capo streetwear unico e ricco di personalità.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/7fbc2362-eab8-4bb8-bf31-036e8ddb5b65/0_0.jpeg",
        price: 89,
    },
    {   name:"Silent Ronin",
        description:"Incontra il silenzio interiore con la Silent Ronin Hoodie, una felpa che unisce un'estetica minimalista con lo spirito audace dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta un'elegante base bianca arricchita da stampe grafiche nere di ispirazione giapponese, disposte per creare un look dinamico e di carattere. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Silent Ronin Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile, che parli da sé.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/e0e761a6-6212-4f4a-955f-ee711870517c/0_0.jpeg",
        price: 99,
    },
    {   name:"Metro Script",
        description:"Afferma il tuo stile nella giungla d'asfalto con la Metro Script Hoodie, una felpa che unisce un design di grande impatto visivo con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da audaci scritte di ispirazione giapponese, per un look che cattura l'attenzione. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Metro Script Hoodie è la scelta perfetta per chi vuole muoversi in città con un capo streetwear che non passa inosservato.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/6e1b93d0-416f-45a2-8d00-da2e73665ce3/0_0.jpeg",
        price: 111,
    },
    {   name:"Inkblot",
        description:"Esprimi la tua forza interiore con la Inkblot Ronin Hoodie, una felpa che unisce un'estetica minimalista con l'audacia dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta un'elegante base color crema arricchita da stampe grafiche nere di ispirazione giapponese e da distintive macchie di inchiostro che aggiungono un tocco artistico e non convenzionale. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Inkblot Ronin Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile, che parli da sé.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/748211f0-a0ac-43cd-8dda-4703ae8a3c33/0_0.png",
        price: 109,
    },
    {   name:"Ember",
        description:"Accendi la tua scintilla interiore con la Ember Script Hoodie, una felpa che unisce un'estetica minimalista con la forza di un fuoco sopito. Questa felpa oversize, realizzata in morbido cotone, presenta un'elegante base beige arricchita da stampe grafiche di ispirazione giapponese in rosso e nero, disposte per creare un look dinamico e di carattere. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Ember Script Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile, che cova una fiamma pronta a divampare.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/ff5abaf6-a1c1-4dbb-b401-4148f965ace3/0_0.jpeg",
        price: 109,
    },
    { name:"Obsidian Echo",
      description:"Lascia che il tuo stile riecheggi nell'oscurità urbana con la Obsidian Echo Hoodie, una felpa che unisce un design audace con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta un'intensa base nera arricchita da stampe grafiche bianche di ispirazione giapponese, disposte per creare un look dinamico e di carattere. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Obsidian Echo Hoodie è la scelta perfetta per chi cerca un capo streetwear che unisca un'estetica dark a una forte personalità.",
      brand:"NYXARA",
      imageUrl:"https://cdn.midjourney.com/908b9205-27a8-4760-8ff4-69410164413a/0_0.jpeg",
      price: 89,
     },
     { name:"Ashen Script",
      description:"Muoviti tra le luci e le ombre della città con la Ashen Script Hoodie, una felpa che unisce un'estetica minimalista con lo spirito audace dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base grigio cenere arricchita da stampe grafiche nere di ispirazione giapponese, per un look di carattere e raffinata sobrietà. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Ashen Script Hoodie è la scelta perfetta per chi cerca un capo streetwear versatile e ricco di stile, che si adatta a ogni situazione urbana.",
      brand:"NYXARA",
      imageUrl:"https://cdn.midjourney.com/134d3e63-1ee6-4bf0-af74-215fbd520086/0_0.jpeg",
      price: 109,
},
]

const hoodyGirl = [

    {   name:"Ghostlight Kanji",
        description:"Illumina la notte urbana con la Ghostlight Kanji Hoodie, una felpa che unisce un design audace con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da stampe grafiche di ispirazione giapponese, disposte per creare un look dinamico e di grande impatto visivo. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Ghostlight Kanji Hoodie è la scelta perfetta per chi vuole distinguersi con un capo streetwear unico, che cattura l'essenza della metropoli notturna.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/a7e1849d-864d-42ca-96d4-a012a7eb057d/0_0.jpeg",
        price: 109,
    },
    {   name:"Shadow Echo Script",
      description:"Muoviti tra le ombre della metropoli con la Shadow Echo Script Hoodie, una felpa che unisce un'estetica dark e minimalista con lo spirito audace dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta un design total black impreziosito da stampe grafiche bianche di ispirazione giapponese, disposte per creare un look dinamico e di carattere. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Shadow Echo Script Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile, che parli da sé.",
      brand:"NYXARA",
      imageUrl:"https://cdn.midjourney.com/692451a8-cc89-4944-8525-c84ab9d6c391/0_0.jpeg",
      price: 99,
  },
  {   name:"Sakura Graffiti Pulse Tunic",
    description:"Esprimi la tua energia vibrante con la Sakura Graffiti Pulse Tunic, una felpa lunga che unisce un design audace con il comfort dello streetwear. Questa tunica oversize, realizzata in morbido cotone, presenta una base bianca arricchita da stampe grafiche nere di ispirazione giapponese e da vistosi accenti rosa, per un look di grande impatto visivo. L'ampio cappuccio, la vestibilità lunga e comoda e i dettagli regolabili offrono un look rilassato e di tendenza, mentre le tasche laterali aggiungono un tocco di praticità. La Sakura Graffiti Pulse Tunic è la scelta perfetta per chi cerca un capo streetwear unico e femminile, che unisca stile e personalità.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/ef93e872-2f30-484b-9108-014697ff6f70/0_0.jpeg",
    price: 119,
},
{   name:"Rebel Bloom",
  description:"Sboccia nel cuore della metropoli con la Rebel Bloom Hoodie, una felpa che unisce un design audace con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da stampe grafiche di ispirazione giapponese e da accenti rosa vibrante, per un look di forte impatto visivo. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Rebel Bloom Hoodie è la scelta perfetta per chi vuole distinguersi con un capo streetwear unico e femminile, che celebra la forza e la delicatezza della fioritura urbana.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/3f40bf3f-3b1c-4699-8d83-27eef73c011a/0_0.jpeg",
  price: 139,
},
{   name:"Street Cipher",
  description:"Decifra il linguaggio della strada con la Street Cipher Hoodie, una felpa che unisce un design enigmatico con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da stampe grafiche di ispirazione giapponese e da tocchi di rosa, per un look di carattere e raffinata complessità. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Street Cipher Hoodie è la scelta perfetta per chi cerca un capo streetwear che unisca estetica e un pizzico di mistero.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/4fe42f59-4d54-45d7-b0bd-3965e3fa782c/0_0.jpeg",
  price: 109,
},
{   name:"Midnight Kanji",
  description:"Immergiti nell'oscurità della metropoli con la Midnight Kanji Hoodie, una felpa che unisce un'estetica dark e minimalista con lo spirito audace dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta un design total black impreziosito da stampe grafiche bianche di ispirazione giapponese, per un look di carattere e forte impatto visivo. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Midnight Kanji Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile, che incarna l'essenza della notte urbana.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/86501119-bd4b-4492-98c7-088daee669bd/0_0.jpeg",
  price: 189,
},
{   name:"Street Anthem",
  description:"Fai risuonare il tuo inno personale nella metropoli con la Echo Street Anthem Hoodie, una felpa che unisce un design di grande impatto visivo con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da audaci stampe grafiche di ispirazione giapponese, per un look che cattura l'attenzione. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Echo Street Anthem Hoodie è la scelta perfetta per chi vuole dominare la strada con un capo streetwear che celebra l'energia e l'audacia della cultura urbana.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/f3640cd4-404c-4f1c-9798-b1ae1c17ee38/0_0.jpeg",
  price: 119,
},
{   name:"Steel Serenity",
  description:"Trova la tua oasi di calma nel caos della metropoli con la Steel Serenity Hoodie, una felpa che unisce un'estetica minimalista con lo spirito deciso dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca essenziale arricchita da stampe grafiche nere di ispirazione giapponese, per un look di carattere e raffinata sobrietà. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Steel Serenity Hoodie è la scelta perfetta per chi cerca un capo streetwear versatile e ricco di stile, che infonde un senso di pace interiore nel trambusto urbano.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/03511589-b689-4344-bd9d-03dff7ff9fe1/0_0.jpeg",
  price: 89,
},
{   name:"Ivory Echo Street ",
  description:"Lascia che il tuo stile echeggi tra i vicoli della città con la Ivory Echo Street Hoodie, una felpa che unisce un design audace con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base avorio impreziosita da stampe grafiche nere di ispirazione giapponese, per un look di carattere e grande impatto visivo. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Ivory Echo Street Hoodie è la scelta perfetta per chi vuole muoversi in città con un capo streetwear che non passa inosservato.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/9c84fa63-6ced-4526-8fbc-eb642e71f20c/0_0.jpeg",
  price: 109,
},
{   name:"Whisper Script",
  description:"Lascia che il tuo stile parli con la delicatezza di un sussurro grazie alla Whisper Script Hoodie, una felpa che unisce un'estetica minimalista con l'audacia dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca luminosa arricchita da stampe grafiche nere di ispirazione giapponese, per un look di carattere e raffinata sobrietà. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono una personalità decisa. La Whisper Script Hoodie è la scelta perfetta per chi cerca un capo streetwear essenziale ma ricco di stile, che comunica con la forza di un messaggio sussurrato.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/5f7fbcdf-d2cd-42b6-bb33-0cad1efda155/0_0.jpeg",
  price: 99,
},
{   name:"Stormcloud Kanji ",
  description:"Scatena la tempesta con la Stormcloud Kanji Hoodie, una felpa che unisce un design di grande impatto visivo con il comfort dello streetwear. Questa felpa oversize, realizzata in morbido cotone, presenta una base bianca e nera arricchita da sfumature grigie e da stampe grafiche di ispirazione giapponese, per un look che evoca la potenza di una tempesta imminente. L'ampio cappuccio, la tasca a marsupio e la vestibilità comoda offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Stormcloud Kanji Hoodie è la scelta perfetta per chi vuole affrontare la città con un capo streetwear audace e ricco di personalità.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/15181fd9-c333-4007-906d-e87125e9b50d/0_0.jpeg",
  price: 89,
},
{   name:"Void Script Long",
  description:"Immergiti nell'oscurità metropolitana con la Void Script Long Hoodie, una felpa che unisce un'estetica minimalista con l'audacia dello streetwear. Questa felpa oversize dalla linea allungata, realizzata in morbido cotone, presenta un design total black arricchito da stampe grafiche bianche di ispirazione giapponese, per un look di carattere e forte impatto visivo. L'ampio cappuccio, la vestibilità comoda e la lunghezza extra offrono un look rilassato e di tendenza, mentre i dettagli di design esprimono un'individualità decisa. La Void Script Long Hoodie è la scelta perfetta per chi cerca un capo streetwear che unisca stile, comfort e un tocco di mistero.",
  brand:"NYXARA",
  imageUrl:"https://cdn.midjourney.com/08f34b38-deb9-4ca6-bd15-8627d52378f9/0_0.jpeg",
  price: 109,
},
    
]

const kimonoBoy = [

  { name:"Sakura Blossom",
    description:"Rendi omaggio alla tradizione con un tocco di moderna audacia grazie al Sakura Blossom Kimono, un capo che fonde l'eleganza del classico kimono giapponese con lo spirito libero dello streetwear. Realizzato in un tessuto leggero e fluido, questo kimono presenta un design unico che combina una base bianca e nera con una stampa di fiori di ciliegio rosa, per un look di grande impatto visivo. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Sakura Blossom Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la bellezza della natura e l'eleganza senza tempo.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/bc95f65f-0587-4f23-aa07-5045f3a073cd/0_0.jpeg",
    price: 149,
  },
  { name:"Imperial Crane",
    description:"Avvolgiti nell'eleganza senza tempo dell'Imperial Crane Kimono, un capo che fonde la maestosità della tradizione giapponese con l'audacia dello streetwear contemporaneo. Questo kimono lungo, realizzato in un tessuto pregiato e fluido, presenta una stampa riccamente dettagliata che raffigura gru in volo tra paesaggi floreali e motivi ornamentali. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. L'Imperial Crane Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra l'arte e la cultura del Sol Levante, reinterpretate in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/ce01cb42-8413-42ff-9368-6b5f35559f14/0_0.jpeg",
    price: 130,
  },
  { name:"Samurai's Echo Hooded",
    description:"Riscopri l'eco dei samurai con il Samurai's Echo Hooded Kimono, un capo che fonde l'antica tradizione giapponese con l'energia dello streetwear moderno. Questo kimono con cappuccio, realizzato in tessuto leggero e confortevole, presenta una stampa riccamente dettagliata che raffigura scene tradizionali e motivi ornamentali, reinterpretati in chiave contemporanea. Le ampie maniche e la vestibilità rilassata offrono libertà di movimento, mentre il cappuccio aggiunge un tocco di mistero e protezione. Il Samurai's Echo Hooded Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la storia e la cultura del Giappone, rivisitate in chiave urbana.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/cec7186d-da2f-4dfa-aeb0-b55e6400e1f6/0_0.jpeg",
    price: 160,
  },
  { name:"Midnight Blossom",
    description:"Sboccia nell'oscurità urbana con il Midnight Blossom Kimono, un capo che fonde la grazia del tradizionale kimono giapponese con l'audacia dello streetwear contemporaneo. Questo kimono, realizzato in un tessuto leggero e fluido, presenta un'elegante base bianca e nera interrotta da una stampa di fiori di ciliegio stilizzati in un rosa intenso, per un look di grande impatto visivo. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Midnight Blossom Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la bellezza della natura e l'eleganza senza tempo, reinterpretate in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/974d7448-607c-47d6-a7a9-f073fec68f92/0_0.jpeg",
    price: 139,
  },
  { name:"Ronin's Dusk",
    description:"Abbraccia le ombre del crepuscolo con il Ronin's Dusk Kimono, un capo che fonde la tradizione giapponese con l'energia oscura della metropoli. Questo kimono, realizzato in un tessuto fluido e confortevole, presenta una stampa ricca di dettagli che raffigura scene tradizionali e motivi ornamentali, reinterpretati in chiave contemporanea. Le ampie maniche a tre quarti e la vestibilità rilassata offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Ronin's Dusk Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la storia e la cultura del Giappone, immerse in un'atmosfera urbana e misteriosa.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/c756cd4c-b480-4e5d-9731-5ef252867ad9/0_0.jpeg",
    price: 169,
  },
  { name:"Mosaic Crane",
    description:"Componi il tuo stile unico con il Mosaic Crane Kimono, un capo che fonde l'arte del mosaico con la tradizione giapponese e l'audacia dello streetwear. Questo kimono, realizzato in un tessuto leggero e confortevole, presenta un design a pannelli, ognuno con una stampa differente che raffigura gru, fiori e motivi ornamentali, creando un effetto visivo dinamico e ricco di dettagli. Le ampie maniche a tre quarti e la vestibilità rilassata offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Mosaic Crane Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la bellezza dell'arte e della cultura del Sol Levante, reinterpretate in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/8a2c21ec-bf3a-43a9-ac99-65ee96aa3c79/0_2.jpeg",
    price: 123,
  },
  { name:"Golden Crane's Flight",
    description:"Spicca il volo verso nuovi orizzonti di stile con il Golden Crane's Flight Kimono, un capo che fonde la maestosità della tradizione giapponese con l'audacia dello streetwear contemporaneo. Questo kimono, realizzato in un tessuto leggero e fluido, presenta un design a pannelli, ognuno con una stampa differente che raffigura gru in volo, fiori e motivi ornamentali, creando un effetto visivo dinamico e ricco di dettagli. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Golden Crane's Flight Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra l'arte e la cultura del Sol Levante, reinterpretate in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/bbf01e3a-f274-4fb1-887f-2da674e46b98/0_0.jpeg",
    price: 169,
  },
  { name:"Ronin's Shadow Hooded",
    description:"Muoviti tra le ombre della metropoli con il Ronin's Shadow Hooded Kimono, un capo che fonde l'antica tradizione giapponese con l'energia oscura dello streetwear contemporaneo. Questo kimono con cappuccio, realizzato in tessuto leggero e confortevole, presenta una stampa evocativa che unisce paesaggi stilizzati a elementi grafici di ispirazione giapponese, il tutto in tonalità tenui e sfumate. Le ampie maniche e la vestibilità rilassata offrono libertà di movimento, mentre il cappuccio aggiunge un tocco di mistero e protezione. Il Ronin's Shadow Hooded Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la storia e la cultura del Giappone, reinterpretate in chiave urbana e introspettiva.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/eb06227c-b0a8-4874-82c7-f9ff759594cb/0_2.jpeg",
    price: 145,
  },
  { name:"Maple Blossom ",
    description:"Celebra il fascino dell'autunno giapponese con il Maple Blossom Hooded Kimono, un capo che fonde la tradizione del Sol Levante con l'energia dello streetwear contemporaneo. Questo kimono con cappuccio, realizzato in un tessuto leggero e fluido, presenta un design unico che combina una base bianca e nera con una stampa di foglie d'acero rosse, per un look di grande impatto visivo. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre il cappuccio aggiunge un tocco di modernità e protezione. Il Maple Blossom Hooded Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la bellezza della natura e l'eleganza senza tempo, reinterpretate in chiave urbana.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/c65d66dd-f490-41d4-af2d-a0a628333315/0_1.jpeg",
    price: 189,
  },
  { name:"Mystic Bloom",
    description:"Svela il tuo lato enigmatico con il Mystic Bloom Hooded Kimono, un capo che fonde l'antica tradizione giapponese con l'energia vibrante dello streetwear. Questo kimono con cappuccio, realizzato in un tessuto leggero e fluido, presenta un design unico che combina una base bianca e nera con una stampa di motivi floreali stilizzati e simboli misteriosi, arricchiti da accenti di un rosa intenso. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre il cappuccio e la cintura in vita aggiungono un tocco di modernità e funzionalità. Il Mystic Bloom Hooded Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la bellezza e il mistero della cultura del Sol Levante, reinterpretati in chiave urbana.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/c65d66dd-f490-41d4-af2d-a0a628333315/0_3.jpeg",
    price: 189,
  },

]

const kimonoGirl = [

  { name:"Sakura Burst Short",
    description:"Fai esplodere il tuo stile con il Sakura Burst Short Kimono, un capo che unisce la delicatezza dei fiori di ciliegio con l'energia dirompente dello streetwear. Questo kimono corto, realizzato in un tessuto leggero e fluido, presenta un design audace che combina una base bianca e nera con una stampa di fiori di ciliegio e motivi grafici in un rosa vibrante. Le ampie maniche a tre quarti e la vestibilità comoda offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Sakura Burst Short Kimono è la scelta perfetta per chi vuole esprimere la propria femminilità con un capo grintoso e originale, che reinterpreta la tradizione giapponese in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/5a793198-eb16-48c6-8f82-459a73d64205/0_0.jpeg",
    price: 129,
  },
  { name:"Shadow Sakura Long",
    description:"Avvolgiti nell'eleganza senza tempo del Shadow Sakura Long Kimono, un capo che fonde la grazia del tradizionale kimono giapponese con l'audacia dello streetwear contemporaneo. Questo kimono lungo, realizzato in un tessuto fluido e confortevole, presenta un raffinato design che alterna sezioni bianche e nere, impreziosite da una stampa di fiori di ciliegio stilizzati in un vibrante fucsia. Le ampie maniche a tre quarti e la vestibilità morbida offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Shadow Sakura Long Kimono è la scelta perfetta per chi vuole esprimere la propria femminilità con un capo sofisticato e di carattere, che reinterpreta la tradizione in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/6c908b6f-6282-4f16-a314-7af1d826b8c4/0_0.jpeg",
    price: 189,
  },
  { name:"Samurai's Code",
    description:"Immergiti nel codice dei samurai con il Samurai's Code Hooded Kimono, un capo che fonde l'antica tradizione giapponese con l'energia ribelle dello streetwear. Questo kimono con cappuccio, realizzato in tessuto leggero e confortevole, presenta una stampa riccamente dettagliata che raffigura scene tradizionali, motivi ornamentali e simboli di forza, reinterpretati in chiave contemporanea. Le ampie maniche e la vestibilità rilassata offrono libertà di movimento, mentre il cappuccio aggiunge un tocco di mistero e protezione. Il Samurai's Code Hooded Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo che celebra la storia e la cultura del Giappone, rivisitate in chiave urbana e audace.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/79a43c7d-a0d1-4475-8310-71e36ec14204/0_0.jpeg",
    price: 129,
  },
  { name:"Crimson Geisha Long",
    description:"Avvolgiti nell'eleganza audace del Crimson Geisha Long Kimono, un capo che fonde la grazia del tradizionale kimono giapponese con la forza dirompente dello streetwear. Questo kimono lungo, realizzato in un tessuto fluido e leggero, presenta un design raffinato che alterna sezioni bianche e nere, impreziosite da una stampa di fiori stilizzati in un vibrante rosso cremisi. Le ampie maniche a tre quarti e la vestibilità morbida offrono libertà di movimento, mentre la cintura in vita permette di personalizzare la silhouette. Il Crimson Geisha Long Kimono è la scelta perfetta per chi vuole esprimere la propria femminilità con un capo sofisticato e di carattere, che reinterpreta la tradizione in chiave moderna e audace.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/243a9ffc-a1ae-4ebd-8488-1386df1135ac/0_0.jpeg",
    price: 169,
  },
  { name:"Pastel Blossom Haori",
    description:"Avvolgiti nella delicatezza dei fiori con il Pastel Blossom Haori, un capo che fonde l'eleganza giapponese con la freschezza dello streetwear. Questo haori, realizzato in un tessuto leggero e morbido, presenta un design raffinato che combina una base bianca e nera con una stampa di fiori stilizzati in rosa pastello, per un look femminile e di tendenza. Le ampie maniche e la vestibilità comoda offrono libertà di movimento, rendendolo perfetto per essere indossato sopra a un top o una maglietta. Il Pastel Blossom Haori è la scelta ideale per chi vuole aggiungere un tocco di romanticismo e originalità al proprio guardaroba, con un capo che celebra la bellezza della natura in chiave contemporanea.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/c1d33b1a-cb89-4718-8688-458cc80d7b16/0_0.jpeg",
    price: 129,
  },
  { name:"Twilight Sakura",
    description:"Immergiti nell'atmosfera incantata del crepuscolo giapponese con il Twilight Sakura Kimono, un capo che fonde la tradizione del Sol Levante con un'estetica contemporanea. Questo kimono lungo, realizzato in un tessuto fluido e leggero, presenta una stampa delicata che raffigura paesaggi stilizzati e fiori di ciliegio in fiore, nei toni del rosa, del bianco e del nero. Le ampie maniche a tre quarti e la vestibilità morbida offrono un comfort impareggiabile, mentre la cintura in vita permette di personalizzare la silhouette. Il Twilight Sakura Kimono è la scelta perfetta per chi desidera esprimere la propria femminilità con un capo elegante e ricco di fascino, che evoca la magia dei giardini giapponesi al calar del sole.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/eace4310-8322-404e-81fd-e940bc6eeca9/0_0.jpeg",
    price: 169,
  },
  { name:"Urban Phoenix Hooded",
    description:"Rinasci dalle ceneri della metropoli con l'Urban Phoenix Hooded Kimono, un capo che fonde la forza del mitico uccello con l'energia dello streetwear. Questo kimono con cappuccio, realizzato in un tessuto confortevole e di carattere, presenta un design unico che combina una base bianca con stampe grafiche nere e dettagli rosa, tra cui spicca la figura stilizzata di una fenice. Le ampie maniche, il cappuccio e la vestibilità morbida offrono un look rilassato e di tendenza, mentre la cintura in vita permette di definire la silhouette. L'Urban Phoenix Hooded Kimono è la scelta perfetta per chi vuole distinguersi con un capo originale e ricco di simbolismo, che celebra la rinascita e la trasformazione.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/a33ae453-c177-4276-9c4d-f5fb8e517139/0_0.jpeg",
    price: 199,
  },
  { name:"Solar Eclipse",
    description:"Cattura l'energia di un'eclissi solare con il Solar Eclipse Hooded Kimono, un capo che fonde un design di grande impatto visivo con il comfort dello streetwear. Questo kimono con cappuccio, realizzato in un tessuto morbido e confortevole, presenta un'audace grafica circolare che richiama il fenomeno celeste, stagliandosi su una base bianca e nera con dettagli rossi. Le ampie maniche a tre quarti e la vestibilità rilassata offrono libertà di movimento, mentre il cappuccio aggiunge un tocco di mistero e protezione. Il Solar Eclipse Hooded Kimono è la scelta perfetta per chi vuole esprimere la propria individualità con un capo unico, che celebra la potenza e la bellezza degli eventi cosmici.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/ec65ffe1-17c2-4f35-a129-3fd8cb97c8ca/0_0.jpeg",
    price: 135,
  },
  { name:"Lunar Lotus",
    description:"Rifletti la serena bellezza della luna con il Lunar Lotus Kimono, un capo che unisce l'eleganza del tradizionale fiore di loto con la forza dello streetwear contemporaneo. Questo kimono, realizzato in un tessuto leggero e fluido, presenta un design armonioso che alterna sezioni bianche e nere, impreziosite da una stampa di fiori di loto stilizzati in rosa tenue. Le ampie maniche a tre quarti e la vestibilità morbida offrono un comfort impareggiabile, mentre la cintura in vita permette di definire la silhouette. Il Lunar Lotus Kimono è la scelta perfetta per chi desidera esprimere la propria femminilità con un capo delicato e deciso al tempo stesso, che reinterpreta la tradizione giapponese in chiave moderna.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/669885b3-d0f8-46e9-afa3-9425a0283f45/0_0.jpeg",
    price: 139,
  },
  { name:"Ember Koi",
    description:"Immergiti nelle profondità della tradizione giapponese con l'Ember Koi Kimono, un capo che unisce la vibrante energia delle carpe koi con l'eleganza senza tempo del kimono. Questo capo, realizzato in un tessuto leggero e fluido, presenta una stampa ricca di dettagli che raffigura carpe koi, fiori e onde stilizzate, nei toni caldi dell'arancio, del rosso e del nero, su una base avorio. Le ampie maniche a tre quarti e la vestibilità morbida donano un comfort impareggiabile, mentre la cintura in vita permette di valorizzare la figura. L'Ember Koi Kimono è perfetto per chi desidera esprimere la propria individualità con un capo che celebra la forza e la bellezza della natura, reinterpretate in chiave streetwear.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/52938822-0fac-4742-bf1b-e66c581c61e3/0_0.jpeg",
    price: 120,
  },

]

const shoesBoy = [

  { name:"Pixel Drift",
    description:"Scarpe high-top 'Pixel Drift', un'esplosione di stile digitale e cultura underground. Caratterizzate da grafiche intricate che richiamano glitch, arte digitale e scenari urbani futuristici, queste scarpe sono perfette per chi vive al confine tra reale e virtuale. Realizzate con materiali di alta qualità per garantire comfort e resistenza.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/06ee7c4e-cb75-4b46-ae67-3fd7a32e0588/0_1.jpeg",
    price: 270,
  },
  { name:"Ghost in the Shell",
    description:"Scarpe high-top 'Ghost in the Shell', un'incarnazione dello stile cyberpunk che fonde arte di strada e tecnologia. Le grafiche in bianco e nero, con accenni di figure evocative e scritte misteriose, creano un'atmosfera unica. Realizzate con materiali di prima qualità per garantire comfort e durata nel tempo, queste scarpe sono un'affermazione di individualità e stile all'avanguardia.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/a82aaae5-74f4-4121-8e2a-59e4f5589d89/0_0.jpeg",
    price: 280,
  },
  { name:"Skyline Cipher",
    description:"Scarpe high-top 'Skyline Cipher', un'interpretazione artistica del paesaggio urbano cyberpunk. Le grafiche in bianco e nero, con accenni di rosso, rappresentano uno skyline futuristico stilizzato, arricchito da simboli e scritte che sembrano un codice segreto. Realizzate con materiali resistenti e confortevoli, queste scarpe sono pensate per chi ama distinguersi con un look ricercato e misterioso.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/df1a1b91-2b8d-4805-984e-4f36a281e7f3/0_0.jpeg",
    price: 180,
  },
  { name:"Circuit Burst",
    description:"Scarpe high-top 'Circuit Burst', un concentrato di energia cyberpunk che cattura l'essenza della ribellione digitale. Il design audace, caratterizzato da macchie arancioni che contrastano con il bianco e nero, evoca l'immagine di un circuito che va in cortocircuito, sprigionando potenza e stile. Realizzate con materiali resistenti e confortevoli, queste scarpe sono perfette per chi vuole lasciare il segno con un look distintivo e all'avanguardia.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/37e02822-b0f9-4a7d-88f0-a164bc4b8b31/0_0.jpeg",
    price: 210,
  },
  { name:"Urban Static",
    description:"Scarpe high-top 'Urban Static', un'interpretazione stilizzata del caos urbano cyberpunk. Le grafiche in bianco, nero e rosso creano un effetto visivo dinamico e distorto, come se la realtà stessa fosse soggetta a interferenze digitali. Realizzate con materiali resistenti e confortevoli, queste scarpe sono l'accessorio perfetto per chi vuole esprimere uno stile audace e anticonformista, in sintonia con l'estetica cyberpunk.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/e251a221-eb05-41f1-971e-37b633c6168e/0_0.jpeg",
    price: 200,
  },
  { name:"Data Stream",
    description:"Scarpe high-top 'Data Stream', un'immersione nel flusso costante dell'era digitale. Le grafiche complesse e stratificate, con accenni di rosso e il logo Nike reinterpretato in chiave cyberpunk, creano un effetto visivo ipnotico e dinamico. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono un'affermazione di stile per chi vive connesso al mondo digitale.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/cadba902-ac42-4926-97d6-f3b6f6f447cf/0_0.jpeg",
    price: 280,
  },
  { name:"Redshift Protocol",
    description:"Scarponcini 'Redshift Protocol', un'affermazione di stile cyberpunk che fonde estetica militare e influenze digitali. Il design robusto, con dettagli rossi che contrastano con il nero, evoca un senso di forza e determinazione. Le grafiche, che ricordano circuiti stampati o codici binari, aggiungono un tocco futuristico. Realizzati con materiali resistenti e di alta qualità per garantire comfort e durata, questi scarponcini sono perfetti per affrontare le strade della città in stile cyberpunk.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/df263dd1-2c11-40d1-becd-c09356333b39/0_0.jpeg",
    price: 250,
  },
  
  { name:"Pixel Ronin",
    description:"Scarpe high-top 'Pixel Ronin', un omaggio allo spirito ribelle del cyberpunk. Le grafiche in bianco e nero, con accenni di rosso e il logo Nike integrato nel design, creano un contrasto dinamico e suggestivo. Le immagini stilizzate, quasi composte da pixel, evocano un mondo digitale in continua evoluzione. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi cerca uno stile unico e distintivo, che unisce tradizione e futuro.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/0e84e117-68bd-4da5-afd7-9ec1f88db981/0_0.jpeg",
    price: 290,
  },
  { name:"Ghost in the Wire",
    description:"Scarpe high-top 'Ghost in the Wire', un'interpretazione artistica del concetto di presenza digitale nel mondo cyberpunk. Le grafiche in bianco e nero, con accenti di rosso, creano un contrasto dinamico e suggestivo, evocando l'immagine di uno spettro che si muove attraverso i circuiti di una macchina. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi cerca uno stile unico e distintivo, che unisce elementi grafici audaci e un profondo significato concettuale.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/b2b4b9c1-8971-40aa-b914-7f42e6f6db73/0_0.jpeg",
    price: 300,
  },
  { name:"Neon Echoes",
    description:"Scarpe high-top 'Neon Echoes', un'esplosione di stile cyberpunk che cattura l'essenza della vita notturna urbana. Il contrasto tra il bianco e nero delle grafiche e il rosa acceso delle suole crea un effetto visivo dinamico e accattivante, come un'eco di luci al neon che si propaga nell'oscurità. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi vuole esprimere la propria individualità con un look audace e futuristico.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/d180757d-d47c-4f4d-9116-febe72998f41/0_0.jpeg",
    price: 320,
  },
  { name:"Glitch Protocol",
    description:"Scarpe high-top 'Glitch Protocol', un'immersione nel mondo distorto del cyberpunk. Le grafiche in bianco e nero, interrotte da improvvisi 'glitch' rosa, creano un effetto visivo dinamico e inquietante. Il logo Nike, integrato nel design, assume un aspetto quasi corrotto, come se fosse stato colpito da un'interferenza. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi vuole esprimere uno stile unico e anticonformista, in sintonia con l'estetica cyberpunk più underground.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/68e22580-de09-43c7-8cd2-62264511c38c/0_0.jpeg",
    price: 190,
  },
  { name:"Concrete Canvas",
    description:"Scarpe high-top 'Concrete Canvas', un'ode all'estetica urbana del cyberpunk. Le grafiche in bianco e nero, con accenti di rosso, raffigurano uno skyline futuristico, quasi un'incisione su cemento. Il logo Nike, integrato nel design, si fonde con l'architettura rappresentata, creando un effetto di continuità tra marchio e ambiente. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi vive la città come una 'tela' su cui esprimere la propria individualità.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/1698a452-b26d-4373-83da-e4c02f83203d/0_0.jpeg",
    price: 210,
  },
  { name:"Binary Skyline",
    description:"Scarpe high-top 'Binary Skyline', un'interpretazione futuristica del paesaggio urbano. Le grafiche in bianco e nero, che evocano un intricato codice binario, disegnano uno skyline stilizzato e suggestivo. Il contrasto tra il bianco ottico della tomaia e il nero profondo dei dettagli accentua l'effetto grafico, creando un look minimalista ma di grande impatto. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi cerca uno stile cyberpunk essenziale e sofisticato.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/cdad6ebd-f349-484c-9eef-0b2263442049/0_0.jpeg",
    price: 270,
  },
  { name:"Data Stream",
    description:"Scarpe high-top 'Data Stream', un'esplosione di informazioni in stile cyberpunk. Le grafiche in bianco e nero, dense e intricate, evocano un flusso continuo di dati che si manifesta sulla superficie della scarpa. L'effetto è quello di un codice visivo complesso e affascinante, che cattura l'essenza del mondo digitale. Realizzate con materiali di alta qualità per garantire comfort e resistenza, queste scarpe sono perfette per chi vuole indossare un pezzo di futuro, un vero e proprio 'flusso di dati' ai propri piedi.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/7bd280df-ff61-4af1-ac35-c4bf453d8b97/0_0.jpeg",
    price: 170,
  },



]

const shoesGirl = [

  { name:"Pixel Stiletto",
    description:"Sandali con tacco 'Pixel Stiletto', un'interpretazione audace del classico stiletto in chiave cyberpunk. Il contrasto tra il nero lucido della struttura e il rosa acceso delle decorazioni crea un effetto visivo dinamico e accattivante. Le grafiche, con il loro aspetto quasi 'pixelato', aggiungono un tocco di modernità e richiamano l'estetica digitale. Realizzate con materiali di alta qualità per garantire comfort e stabilità, queste scarpe sono perfette per chi vuole osare con uno stile unico e futuristico, che unisce eleganza e tecnologia.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/efd6195f-1b44-4cc0-bcff-a525c67d8ab8/0_0.jpeg",
    price: 320,
  },
  { name:"Code",
    description:"Décolleté 'Code Runner', un'interpretazione grintosa e futuristica della classica scarpa con tacco. Le grafiche in bianco e nero, con accenti di rosso e giallo, creano un effetto visivo dinamico e accattivante, come se un flusso di codice si fosse materializzato sulla superficie della scarpa. Il design affusolato e il tacco slanciato conferiscono eleganza e femminilità, mentre le grafiche aggiungono un tocco di grinta e modernità. Realizzate con materiali di alta qualità per garantire comfort e stile, queste scarpe sono perfette per chi vuole esprimere una personalità forte e indipendente, sempre in movimento nel mondo digitale.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/ede5ef66-d624-49ea-872a-bb21bc89de6d/0_0.jpeg",
    price: 220,
  },
  { name:"Graffiti Glam",
    description:"Eleganti décolleté con tacco a spillo realizzate in pelle bianca di alta qualità. Il design classico della scarpa a punta è vivacizzato da un'audace decorazione in stile graffiti, con scritte e tratti in nero intenso e rosa shocking che creano un contrasto dinamico e di grande impatto visivo. Il tacco sottile slancia la figura, mentre la tomaia avvolgente assicura una calzata confortevole. Queste scarpe sono perfette per aggiungere un tocco di originalità e grinta a qualsiasi outfit, dal più formale al più casual-chic.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/c5c3f5a3-0aee-47a7-b879-3305da5baf7b/0_0.jpeg",
    price: 190,
  },
  { name:"Cyber Chic",
    description:"Décolleté con tacco a spillo dal design moderno e accattivante. La tomaia in pelle bianca è impreziosita da una stampa grafica che combina elementi geometrici, linee nette e accenti di rosa acceso, creando un effetto tridimensionale e futuristico. Il tacco sottile e la punta affusolata slanciano la figura, mentre il contrasto tra il bianco ottico e le tonalità fluo conferisce un tocco di originalità e audacia. Perfette per chi ama osare con uno stile ricercato e contemporaneo.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/76b09144-c09b-4e09-bfed-26427b1ff488/0_0.jpeg",
    price: 220,
  },
  { name:"Urban Ink",
    description:"Stivaletti con tacco a spillo dal design grintoso e anticonvenzionale. La tomaia, che avvolge la caviglia, presenta una stampa complessa che ricorda un mix di graffiti, scritte orientali e illustrazioni, in una palette di bianco, nero e rosso acceso. Il tacco sottile e la punta affusolata accentuano la silhouette slanciata, mentre il contrasto cromatico e la ricchezza dei dettagli grafici rendono questi stivaletti un vero e proprio pezzo statement, ideale per chi ama esprimere la propria individualità attraverso un look audace e ricercato.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/da543230-424c-47d0-ab7a-b36aed53493a/0_0.jpeg",
    price: 290,
  },
  { name:"Neon Script",
    description:"Stivaletti alla caviglia con tacco a spillo dal design moderno e grintoso. La tomaia bianca è caratterizzata da una stampa che ricorda graffiti o scritte stilizzate in nero e fucsia acceso, creando un forte contrasto cromatico. Il tacco sottile e la punta affusolata slanciano la figura, mentre il taglio asimmetrico della tomaia, più alto sul retro e più basso sul davanti, aggiunge un tocco di originalità. Il nero della fodera interna e del tacco crea una linea pulita e definita. Questi stivaletti sono perfetti per aggiungere un tocco di audacia e personalità a un outfit.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/8c9a1a04-8edb-442a-8527-7bed154bc870/0_0.jpeg",
    price: 250,
  },
  { name:"Tokyo Nights",
    description:"Stivaletti con tacco a spillo dal design audace e ispirato alla cultura giapponese. La tomaia bianca è decorata con caratteri giapponesi in nero e rosa shocking, creando un contrasto visivo di grande impatto. Il tacco sottile e la punta affusolata slanciano la figura, mentre il dettaglio rosa sul tacco riprende i colori della stampa. Questi stivaletti sono perfetti per aggiungere un tocco di originalità e stile a un outfit serale o per un'occasione speciale.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/7b152046-fcc5-465b-a5a2-58cf8008742d/0_0.jpeg",
    price: 320,
  },
  
  { name:"Rock Glam",
    description:"Sandali con tacco a spillo dal design audace e femminile. La tomaia presenta una combinazione di fasce in vernice nera lucida e tessuto con stampa grafica in bianco e nero, arricchita da dettagli rosa shocking che aggiungono un tocco di vivacità. Il cinturino alla caviglia assicura una buona stabilità, mentre il tacco sottile slancia la figura. Questi sandali sono perfetti per completare un look da sera con un tocco di grinta e originalità.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/4959e063-7391-46a1-92b2-d9a162e84b76/0_1.jpeg",
    price: 180,
  },
  { name:"Cyberpunk Runner",
    description:"Sneakers alte dal design futuristico e grintoso, ispirate all'estetica cyberpunk. La tomaia bianca è arricchita da dettagli grafici neri e rosa fluo, che includono scritte in stile orientale, linee geometriche e inserti in materiali diversi. La suola spessa e dentellata, con inserto rosa a contrasto, offre un ottimo grip e un look distintivo. I lacci neri e il cinturino alla caviglia con chiusura a velcro completano il design. Queste sneakers sono perfette per chi ama uno stile urban e all'avanguardia.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/6ceda013-c9da-4175-a3fa-9aaadd5ccbd5/0_0.jpeg",
    price: 220,
  },
  { name:"Pink Graffiti",
    description:"Sneakers alte dal look moderno e street style, caratterizzate da una combinazione di bianco e rosa shocking. La tomaia presenta diverse texture e inserti, con dettagli che ricordano graffiti e scritte stilizzate. Il rosa acceso è presente sulla suola, sul rinforzo del tallone, sui lacci e in alcuni dettagli della tomaia, creando un contrasto vivace con il bianco. L'allacciatura alta e il design imbottito offrono comfort e supporto alla caviglia. Queste sneakers sono ideali per chi cerca uno stile casual ma con un tocco di originalità e colore.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/d1b736fa-4cf1-41a0-9569-d554143550e3/0_0.jpeg",
    price: 279,
  },
  { name:"Urban Canvas High",
    description:"Sneakers alte dal design moderno e accattivante, perfette per uno stile urban e di tendenza. La base bianca fa risaltare i dettagli neri e rosa shocking, creando un contrasto dinamico. Le scritte in stile orientale e gli elementi grafici aggiungono un tocco di originalità e personalità. La suola bianca con profilo rosa riprende i colori della tomaia, mentre i lacci neri completano il look. Queste sneakers sono ideali per esprimere la propria individualità con un tocco di colore e grinta.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/8a523ed5-03b6-4595-b392-f84509ce58a4/0_0.jpeg",
    price: 200,
  },
  { name:"Combat Boot ",
    description:"Anfibi dal design grintoso e di ispirazione urban. La tomaia bianca è caratterizzata da una stampa grafica che combina elementi in nero e rosso, tra cui scritte in stile orientale, macchie di colore e dettagli che ricordano codici a barre. La suola nera, spessa e dentellata, conferisce un aspetto robusto e deciso. L'allacciatura alta con lacci neri e il tirante posteriore facilitano la calzata. Questi anfibi sono perfetti per completare outfit dallo stile alternativo e di tendenza.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/bef50edd-13e7-4a57-a910-a1e41abd76ed/0_0.jpeg",
    price: 200,
  },
  { name:"Flame Warrior ",
    description:"Anfibio dal design audace e di forte impatto visivo, caratterizzato da una vivace combinazione di colori bianco, nero, arancione e rosso. La tomaia presenta una stampa grafica che ricorda fiamme e pennellate di colore, con l'aggiunta di scritte in stile orientale che conferiscono un tocco unico. La suola platform bianca, spessa e strutturata, offre un'altezza considerevole e un look moderno. I lacci bianchi e la linguetta imbottita completano il design. Questo anfibio è ideale per chi cerca uno stile distintivo e non convenzionale.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/1ff22a80-0715-403a-a418-25f0363641e1/0_0.jpeg",
    price: 190,
  },
  { name:"Techwear Runner",
    description:"Sneakers dal design futuristico e tecnico, caratterizzate da una combinazione di bianco, nero e rosa fluo. La tomaia presenta diversi inserti e dettagli, tra cui scritte in stile cyberpunk, cinturini con velcro e un sistema di allacciatura particolare. La suola è spessa e segmentata, con un inserto rosa a contrasto che aggiunge un tocco di colore. Il design complessivo richiama l'estetica techwear, con un'attenzione particolare alla funzionalità e allo stile. Queste sneakers sono perfette per chi cerca una calzatura comoda ma con un look distintivo e all'avanguardia.",
    brand:"NYXARA",
    imageUrl:"https://cdn.midjourney.com/b9667813-f6ee-461f-a18b-05208440ca81/0_1.jpeg",
    price: 199,
  },
]

/* const jacketGirltestqsa = [


    {   name:"2bestemmie 234",
        description:"Affronta la pioggia con un tocco di oscura eleganza grazie alla Shadow Sakura Rain Jacket, una giacca antipioggia che fonde l'estetica cyberpunk con un'anima gotica. Realizzata in tessuto tecnico impermeabile e traspirante, questa giacca oversize presenta un design nero con stampe grafiche bianche di ispirazione giapponese e audaci accenti rosa. Il cappuccio ampio, la chiusura con zip e i dettagli regolabili offrono protezione e versatilità, mentre la vestibilità ampia garantisce comfort e libertà di movimento. La Shadow Sakura Rain Jacket è la scelta perfetta per chi vuole esprimere la propria individualità con un look dark, femminile e all'avanguardia.",
        brand:"NYXARA",
        imageUrl:"https://cdn.midjourney.com/84634bce-99cd-4fbe-a223-1538b324f45c/0_0.jpeg",
        price: '18',
    }
] */

///////////////////  CONTROLL E POST by this page  /////////////// 



/* async function createProductIfNotExist(obj) {
    try {
      const response = await fetch(url + "?name=" + obj.name, {
        headers: {
          "Authorization": token
        }
      });
  
      if (response.ok) {
        const existingProducts = await response.json();
        if (existingProducts.length > 0) { // Controlla se ci sono prodotti esistenti
          console.log("Prodotto/i già esistente/i:");
          for (const product of existingProducts) {
            console.log(`  ID: ${product._id}, nome: ${product.name}`);
          }
          
        }
      } else {
        console.error("Errore durante il controllo del prodotto esistente:", response.status);
        // aggiungere allert lanciare un errore qui o continuare con la creazione
      }
      
  
      const createResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      });
  
      if (createResponse.ok) {
        const newProduct = await createResponse.json();

        const addProductIfNotExists = (product) => {
            if (!createdProducts.find(p => p._id === product._id)) { // Controlla se esiste già
                createdProducts.push(product);
            } else {
                console.log(`Prodotto con ID ${product._id} già presente, non aggiunto.`);
            }
        };

        if (Array.isArray(newProduct)) {
          console.log("Prodotto creato:");
          for (const product of newProduct) {
            console.log(`  ID: ${product._id}, nome: ${product.name}`);
            addProductIfNotExists(product);
          }
        } else if (newProduct && newProduct._id && newProduct.name) {
          
          console.log(`Prodotto creato: ID: ${newProduct._id}, nome: ${newProduct.name}`);
          addProductIfNotExists(newProduct)
        } else {
          console.log("Prodotto creato (risposta non nel formato atteso):", newProduct);
        }
      } else {
        console.error("Errore durante la creazione del prodotto:", createResponse.status, await createResponse.text());
        // Lancia un errore per una gestione più robusta
      }
    } catch (error) {
      console.error("Si è verificato un errore inaspettato:", error);
      // Puoi rilanciare l'errore per gestirlo a un livello superiore se necessario
      throw error;
    }
  }
   */
  //----.forEach(obj => createProductIfNotExist(obj));





///////////////////   wearing   -----   RESET DATABASE  /////////////// 


/* 
let id = fetch(url, {
    headers: {
    "Authorization": token
    }
    })

.then(dataRow => dataRow.json())
.then(dataRefined => {
    console.log("Database")
    console.log(dataRefined);
    let arrayOfId = [];
    for (let i = 0; i < dataRefined.length; i++) {
        arrayOfId.push(dataRefined[i]._id);
    }
    console.log(arrayOfId);
    
    return arrayOfId;
})
.catch(err => console.log("Something when wrong = " + err))
.then(arrayOfId => {
    arrayOfId.forEach(id => {
        fetch(url + id, {
            method: 'DELETE',
            headers: {
                'Authorization': token
            }
        })
    })
})
.then(response => {
    if (response.ok) {
      console.log('Prodotto eliminato con successo!');
    } else {
      console.error('Errore nell\'eliminazione del prodotto.');
    }
  }); */

///////////////////   wearing   -----   RESET DATABASE  /////////////// 



   


/*  const productId = `67741ddcff39d20015c364e7`

fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
    method: "DELETE",
    headers: {
      "Authorization": token
    }
  })
  .then(res => {
    if (res.ok) {
      console.log("Prodotto eliminato con successo!");
    } else {
      // Gestisci eventuali errori, ad esempio se il prodotto non esiste
      console.log("Errore nell'eliminazione del prodotto:", res.status); 
    }
  })
  .catch(err => console.log("Errore nella richiesta:", err)) */

