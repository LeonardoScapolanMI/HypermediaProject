<template>
  <div class="height">

    <!-- BREADCRUMB -->

    <div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/" id="old">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page" id="page">La città</li>
      </ol>
    </div>

    <!-- TITLE -->

    <div class="page-title">
      <h1>LA CITT&Agrave; DI FIRENZE</h1>
    </div>

    <!-- SLIDESHOW -->  

    <SlideShow :images="imagesV" class="title-image-container"/>

    <!-- LINK STRUTTURALI -->

    <div class="structural-links">
      <div class="row">
        <div
          class="col-sm-auto structural-link selected-structural-link"
          @click="setContentToDisplay(historyContent)"
        >
          STORIA
        </div>
        <div
          class="col-sm-auto structural-link"
          @click="setContentToDisplay(howToReachContent)"
        >
          COME RAGGIUNGERE
        </div>
      </div>
    </div>
    <hr class="separator" />

    <!-- OVERVIEW -->

    <div class="text-content">
      <h3 class="text-content-title">
        {{ getContentToDisplay().title }}
      </h3>
      <p class="text-with-line-break">
        {{ getContentToDisplay().text }}
      </p>
    </div>

     <!-- BACK UP BUTTON -->

    <div class="dropup">
      <a href="#" id="up-button" class="dropdown-toggle">
        <span class="sr-only"></span>
      </a>
    </div>

  </div>
</template>

<script>
import SlideShow from '~/components/Slideshow.vue'
export default {
  name: 'TheTown',
  components: { SlideShow },
  data() {
    return {
      imagesV: [
        {
          URL: '/images/town/0.jpg',
          caption: 'La Primavera di Botticelli',
        },
        {
          URL: '/images/town/1.jpg',
          caption: 'Ponte Vecchio',
        },
        {
          URL: '/images/town/2.jpg',
          caption: 'Piazza della Signoria',
        },
        {
          URL: '/images/town/3.jpg',
          caption: 'Basilica di Santa Croce',
        },
        {
          URL: '/images/town/4.jpg',
          caption: 'Cattedrale di Santa Maria del Fiore',
        },
      ],
      historyContent: {
        title: 'Storia della città',
        text:
          "In origine Firenze era un’area fortificata, che si trovava all'incrocio delle strade che conducevano alla costa del Tirreno e quelle che portavano agli Appennini, unite per percorrere l’alta valle dell’Arno, verso Roma.\n" +
          '\n' +
          'Anticamente era una località etrusca, che dipendeva da Fiesole.\n' +
          'Gli etruschi, provenienti dall’Asia Minore, si insediarono nella zona nel IX secolo a.C, data di stanziamento confermata dalle straordinarie collezioni d’arte etrusca rinvenute, attualmente conservate nel Museo Archeologico di Firenze.\n' +
          '\n' +
          "Solo nel 395 a.C. la civiltà etrusca fu sottomessa dall'Impero Romano.\n" +
          'Nel corso delle campagne di colonizzazione di Silla, i romani fondarono Florentia, sulle ceneri dell’antico insediamento etrusco.\n' +
          '\n' +
          'Nel 82 a.C. il territorio fu confiscato per essere ceduto ai veterani di Silla.\n' +
          'Dopo la caduta dell’Impero Romano, Firenze fu più volte assediata da Goti e Bizantini.\n' +
          '\n' +
          'Nel Medioevo, per la sua ricchezza agricola ed essendo un importante centro di comunicazione, riuscì ad eclissare Fiesole.\n' +
          "Nell'Alto Medioevo i Lombardi ottennero il controllo della città.\n" +
          '\n' +
          '\n' +
          'Nel 774, Firenze fu conquistata da Carlo Magno, entrando a far parte dell’Impero Carolingio.\n' +
          'Nel 1115, la città fu liberata, approfittando delle lotte per le investiture, capeggiate dalla contessa Matilde.\n' +
          'I fiorentini sconfissero il vicario imperiale e conquistarono i castelli e i comuni vicini, per garantire la sicurezza delle proprie attività commerciali.\n' +
          '\n' +
          'Nel 1125, Fiesole fu conquistata e i suoi abitanti furono obbligati a trasferirsi a Firenze.\n' +
          'Si alleò con Pisa, che le forniva le imbarcazioni necessarie per il commercio, contro Siena, le quali si disputavano le relazioni commerciali con la Santa Sede.\n' +
          '\n' +
          'Nel 1218 entrò in guerra contro Pisa, per l’egemonia della Toscana.\n' +
          '\n' +
          'Fra il XII e il XIII secolo, i fiorentini parteciparono attivamente nelle guerre fra guelfi e ghibellini, fazioni che si disputavano la successione alla corona.\n' +
          'I guelfi difendevano il potere papale ed erano contrari ai privilegi nobiliari, mentre i ghibellini, aiutati dall’imperatore tedesco, si opponevano al potere del Pontefice.\n' +
          'Firenze era per lo più guelfa.\n' +
          'La nobiltà fu indebolita da queste lotte e, nel 1293, fu espulsa dagli organi di potere, dando inizio al periodo del Secondo Popolo.\n' +
          '\n' +
          'In quest’epoca Firenze era la città più importante della Toscana, dato che Pisa era stata sconfitta da Genova nel 1284 e Siena iniziava il suo lento declino.\n' +
          "Le attività commerciali a Firenze erano a gestione familiare e avevano succursali in tutta l'Europa occidentale.\n" +
          'Le compagnie più antiche seguivano la disputa fra bianchi e neri (1300-1302), fazioni con cui si divisero i guelfi, che patirono le dure conseguenze di tali lotte.\n' +
          "Questi conflitti politici non impedirono che Firenze diventasse una delle più poderose e prospere d’Europa, verso la quale si dirigeva gran parte dell'attività commerciale, mentre Venezia si espandeva lungo il Mediterraneo.\n" +
          '\n' +
          'A dimostrazione del suo potere, nel 1252 si coniarono i fiorini d’oro, monete utilizzate per più di tre secoli, che furono uno dei capisaldi monetari dell’epoca, insieme al ducato veneziano.\n' +
          '\n' +
          'Dal 1326, le nuove compagnie si dedicarono al commercio, all’industria e alla più importante attività finanziaria: la banca.\n' +
          'I fiorentini idearono e organizzarono un sistema di prestito a grande scala, rilasciando denaro ai sovrani d’Europa, a cambio di locazioni fiscali.\n' +
          'Malgrado ciò, la crisi economica del XIV secolo e la Guerra dei cent’anni portarono queste attività finanziarie alla rovina, anche se presto furono create delle nuove entità (a gestione familiare, come le altre), che seppero agire in maniera più prudente.\n' +
          '\n' +
          'Nel 1406, Firenze conquistò Pisa e divenne una potenza marittima.\n' +
          'Molti ricchi commercianti, per assicurarsi la salvezza della propria anima, investivano i loro beni nella costruzione di cappelle ed edifici religiosi e, inoltre, trasformarono le case e le fattorie in sontuosi palazzi.\n' +
          '\n' +
          "L’arte florentina si aprì al Rinascimento all’inizio del XV secolo, coincidendo con lo stato d'instabilità sociale e politica precedente allo stanziamento dei Medici.\n" +
          '\n' +
          'Dal XIV secolo la politica fiorentina, gestita dai mercanti, continuò ad essere belligerante, sostenendosi con un esercito di mercenari.\n' +
          'Gli Albizzi, rappresentanti del "popolo grasso", e i Ricci, delle "arti medie", si unirono, in un primo momento, per abbattere lo stato di tirannia vigente (1343) mentre, successivamente, si contesero il potere.\n' +
          'I "ciompi", diretti da un tessitore di lana, conquistarono il potere nel 1378.\n' +
          'Con l’aiuto degli Albizzi, il "popolo grasso" ottenne la supremazia della città dal 1382 al 1434.\n' +
          '\n' +
          '\n' +
          'Cosimo il Vecchio, senza nessun titolo nobiliare, riuscì a impossessarsi di Firenze nel 1434, abbattendo completamente i propri avversari.\n' +
          '\n' +
          'La famiglia dei Medici, unita intimamente alla storia di Firenze, governò nella città, anche se con qualche interruzione, per ben 350 anni.\n' +
          'In questo periodo Firenze vide crescere sia il suo potere economico, essendo i banchieri del Papa, che per essere l’epicentro della cultura e dell’arte mondiale.\n' +
          '\n' +
          'Il mecenatismo di Lorenzo il Magnifico segnò per sempre il corso della storia dell’arte.\n' +
          'Con la morte di Lorenzo, nel 1492, salì al comando di Firenze suo figlio Piero. Dopo la sua morte, gli succedette Pietro (detto Il Fatuo), contro cui si ribellarono i fiorentini, che l’obbligarono ad abbandonare la città.\n' +
          'Con l’esilio di Pietro, nel 1494, terminò il primo periodo del governo dei Medici.\n' +
          '\n' +
          'I commercianti più facoltosi organizzarono la Repubblica e il celebre Macchiavelli si occupo degli aspetti diplomatici del nuovo assetto governativo.\n' +
          'Gli artisti soggiornavano a Firenze per acquisire la maestria tecnica, ma quando ormai raggiungevano un buon livello formativo, si trasferivano a Roma o a Milano, città più ricche e politicamente più stabili.\n' +
          '\n' +
          'Nel 1512, con l’aiuto degli spagnoli, i Medici salirono nuovamente al potere, che ressero per quindici anni.\n' +
          'Il 16 maggio 1527 i Medici furono sconfitti e si stabilì la Repubblica.\n' +
          '\n' +
          'Nel 1530 l’imperatore Carlo V, con l’appoggio del Papa Clemente VII, occupò la città e nominò suo genero, Alessandro dei Medici, duca di Firenze.\n' +
          'Il suo successore, Cosimo II, nel 1555 aggiunse Siena ai propri possedimenti territoriali.\n' +
          'In seguito, i Medici raggiunsero nuovamente il potere e governeranno per altri due secoli.\n' +
          '\n' +
          'Nel 1737, con la nomina del Duca di Lorena, marito di Maria Teresa d’Austria, e quando ormai i Medici erano definitivamente scomparsi dalla vita politica di Firenze, la città fu aggiunta ai territori della corona austriaca.\n' +
          '\n' +
          '\n' +
          'Dopo il Congresso di Vienna, la Toscana divenne una delle regioni del Regno d’Italia.\n' +
          '\n' +
          'Firenze fu capitale del Regno d’Italia, dal 1865 al 1871, e fu sede del primo Parlamento della nazione.\n' +
          '\n' +
          'Durante la Seconda Guerra Mondiale, i ponti della città furono abbattuti e solo Ponte Vecchio riuscì a sopravvivere, grazie al suo straordinario valore artistico.\n' +
          '\n' +
          'Nel 1966, la tranquillità di Firenze fu scossa da un’altra tragica calamità: un’alluvione, che tutt’oggi si ricorda come uno degli avvenimenti che maggiormente colpì la città e che costò la vita a 34 persone, oltre a danneggiare il patrimonio artistico.\n' +
          'Da tutto il mondo giunsero dei volontari per cercare di recuperare le opere d’arte, che in parte furono danneggiate in maniera irriversibile.\n',
      },
      howToReachContent: {
        title: 'Come raggiungere la città',
        text:
          'A metà cammino fra Milano e Roma, Firenze è una città facilmente raggiungibile, da qualsiasi regione italiana e dal resto d’Europa.\n' +
          'La città è dotata di un aeroporto internazionale cittadino e a distanza di 50 km si trovano altri due aeroporti internazionali: Pisa e Bologna.\n' +
          'Firenze si trova inoltre al centro della rete ferroviaria dell’alta velocità che collega il nord al sud Italia ed è situata sul percorso della principale autostrada italiana, la A1, che collega Milano a Napoli.\n' +
          "Negli ultimi anni è aumentato in modo significativo il traffico da e verso l'aeroporto di Firenze Amerigo Vespucci e le infrastrutture ed i servizi sono in miglioramento costante.\n" +
          '\n' +
          '\n' +
          'AEREO\n' +
          'AEROPORTO AMERIGO VESPUCCI - FIRENZE\n' +
          'L’aeroporto di Firenze si trova a soli 5 chilometri dal centro di Firenze.\n' +
          'Dall’aeroporto è possibile raggiungere il centro cittadino in 15 minuti circa con il taxi o con il servizio navetta.\n' +
          '\n' +
          'AEROPORTO MARCONI - BOLOGNA\n' +
          'Dall’aeroporto di Bologna è possibile raggiungere la stazione ferroviaria di Bologna Centrale (in circa 15 minuti) con il servizio navetta oppure in taxi e da lì prendere il treno alta velocità per la stazione di Firenze Santa Maria Novella (un viaggio di circa 35 minuti).\n' +
          '\n' +
          'AEROPORTO GALILEO GALILEI - PISA\n' +
          'L’Aeroporto di Pisa si trova a circa 1 chilometro dalla stazione di Pisa Centrale, collegata attraverso il servizio navetta.\n' +
          'Dalla stazione di Pisa Centrale è possibile raggiungere Firenze con il treno in 1 ora circa di viaggio.\n' +
          'In alternativa è possibile raggiungere Firenze con il servizio bus.\n' +
          '\n' +
          '\n' +
          'AUTO\n' +
          "Arrivare a Firenze in auto è semplice. Firenze è un importante nodo autostradale dove si incrociano l’autostrada A1 Milano-Napoli, che attraversa l'Italia da nord a sud e l’autostrada A12 Firenze-Pisa Nord, che collega alcune tra le più importanti città della Toscana come Prato, Pistoia, Lucca e Pisa.\n" +
          'Le uscite dell’autostrada A1 principali per raggiungere Firenze sono: Firenze Nord, Firenze Scandicci, Firenze Impruneta, Firenze Sud. Esiste inoltre una nuova uscita, Villa Costanza, che conduce ad un parcheggio a pagamento nei pressi dell’omonima fermata della linea 1 della tramvia, con la quale è possibile raggiungere il centro cittadino in circa 20 minuti.\n' +
          'Le uscite per raggiungere le altre località dell’area metropolitana fiorentina sono: Barberino di Mugello, Calenzano-Sesto Fiorentino, Incisa-Reggello, Valdarno. Mentre per le località della Valdelsa puoi percorrere la Strada di Grande Comunicazione Fi-Pi-Li (uscite Montelupo F.no e Empoli).\n' +
          'Poiché tutto il centro storico si può percorrere a piedi ed essendoci numerosissime strade pedonali, Firenze non è la migliore destinazione da raggiungere in auto. \n' +
          'Se vieni a Firenze con l’auto ricordati che il traffico nel centro cittadino è limitato dalle ZTL (Zona Traffico Limitato). Ai limiti della ZTL puoi lasciare la macchina in uno dei tanti parcheggi della rete Firenze Parcheggi, le cui tariffe orarie variano a seconda del parcheggio.\n' +
          'Ti ricordiamo inoltre che il parcheggio sotterraneo della Stazione di Santa Maria Novella ha un costo maggiore rispetto agli altri e non è indicato per soste lunghe.\n' +
          '\n' +
          '\n' +
          'TRENO\n' +
          "La stazione di Firenze Santa Maria Novella è la stazione principale di Firenze. Si trova in pieno centro storico ed è situata sull'asse ferroviario principale Milano-Napoli che collega il nord al sud Italia.\n" +
          'È quindi facilmente raggiungibile da tutte le principali città italiane attraverso l’alta velocità.\n' +
          'Da Santa Maria Novella arrivano e partono anche treni regionali che collegano Firenze alle altre città della Toscana, oltre che treni interregionali e le linee internazionali.',
      },
      toDisplay: undefined,
    }
  },
  methods: {
    getContentToDisplay() {
      return this.toDisplay ? this.toDisplay : this.historyContent
    },
    setContentToDisplay(newContent) {
      this.toDisplay = newContent
      const elements = document.getElementsByClassName('structural-link')
      Array.prototype.forEach.call(elements, (element) => {
        element.classList.remove('selected-structural-link')
      })
      event.target.classList.add('selected-structural-link')
    },
  },
}
</script>

<style>

.structural-link {
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}

.selected-structural-link {
  color: var(--blue);
  text-decoration: underline;
}

</style>
