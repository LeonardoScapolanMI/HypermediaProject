import DB from '../database.js'

const pois = [
  {
    basicData: {
      name: 'Galleria degli Uffizi',
      description:
        "Una delle più famose e importanti pinacoteche al mondo, con un'incomparabile collezione di arte rinascimentale, fiorentina e non solo, comprendente tra l'altro la maggiore collezione di dipinti del Botticelli, ed è divisa in varie sale allestite per scuole e stili in ordine più o meno cronologico. Nata dalle raccolte artistiche accumulate nei secoli dai Medici, ha anche una notevole collezione di sculture antiche ed espone tra le innumerevoli, capolavori di Giotto, Cimabue, Leonardo da Vinci, Michelangelo, Raffaello, Tiziano, Caravaggio, Dürer e moltissimi altri.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.244200508075!2d11.253122115725644!3d43.767789453030844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54008dc59081%3A0xcddeb7c89bf0c4cd!2sGalleria%20degli%20Uffizi!5e0!3m2!1sit!2sit!4v1653471680663!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Galleria degli Uffizi/0.jpg',
          caption: 'Chiostro della galleria',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Galleria degli Uffizi/1.jpg',
          caption: 'Una delle sale espositive',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Galleria degli Uffizi/2.jpg',
          caption: 'Una delle sale espositive',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Galleria degli Uffizi/3.jpg',
          caption: 'Una delle sale espositive',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Galleria degli Uffizi/4.jpg',
          caption: 'Una delle sale espositive',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Galleria degli Uffizi/5.jpg',
          caption: 'Esterno della galleria',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Palazzo Vecchio',
      description:
        "Questo palazzo storico ha rappresentato il cuore politico di Firenze per circa due secoli, prima di diventare residenza del Duca Cosimo I de' Medici; la sua storia si riflette nella straordinaria decorazione degli ambienti interni e nelle collezioni artistiche. Composto da più nuclei (medievale, rinascimentale e tardo-rinascimentale), spicca soprattutto negli interni progettati da Giorgio Vasari per Cosimo I e sua moglie Eleonora di Toledo, in cui lavorò, tra gli altri, anche Agnolo Bronzino (Cappella di Eleonora). Nel percorso espositivo sono ospitati vari capolavori, come le sculture di Donatello, Andrea del Verrocchio e Michelangelo. Singolare è la possibilità di visitare, in gruppi guidati a scadenze regolari, i passaggi segreti e gli ambienti più difficilmente accessibili come lo Studiolo di Francesco I.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5761.930279023414!2d11.248612976967516!3d43.77358246646925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5400e57893f9%3A0xe4e22be754c65787!2sPalazzo%20Vecchio!5e0!3m2!1sit!2sit!4v1653472171205!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Vecchio/0.jpg',
          caption: 'Estreno del palazzo visto dalla piazza',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Vecchio/1.jpg',
          caption: 'Esterno del palazzo visto dall\'alto',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Vecchio/2.jpg',
          caption: 'Interno del palazzo',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Vecchio/3.jpg',
          caption: 'Chiostro del palazzo',
        },
      },
    ],
  },
  {
    basicData: {
      name: "Galleria dell' Accademia",
      description:
        "La Galleria dell' Accademia è famosa nel mondo per la collezione di statue di Michelangelo Buonarroti, tra le quali il celeberrimo David. Nata come sussidio alla formazione degli studenti della vicina Accademia di Belle Arti e arricchitasi dei capolavori provenienti dalle soppressioni di chiese e conventi dell'area fiorentina, mostra oggi un percorso espositivo eterogeneo, che spazia dai primitivi toscani (pittori su fondo oro dal XIII secolo) ai capolavori del Rinascimento e del Manierismo, dalla gipsoteca di Lorenzo Bartolini alla collezione lorenese di icone russe, fino alle collezioni dell'adiacente Museo degli strumenti musicali.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8094374431544!2d11.254157729492059!3d43.77681441232372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a558cbc91b927%3A0x6d4cf7aefa41a2c7!2sGalleria%20dell&#39;Accademia!5e0!3m2!1sit!2sit!4v1653472192293!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: "/images/pointOfinterest/Galleria dell' Accademia/0.jpg",
          caption: 'Una delle sale espositive',
        },
      },
      {
        basicData: {
          URL: "/images/pointOfinterest/Galleria dell' Accademia/1.jpg",
          caption: 'David di Michelangelo',
        },
      },
      {
        basicData: {
          URL: "/images/pointOfinterest/Galleria dell' Accademia/2.jpg",
          caption: 'Una delle sale espositive',
        },
      },
      {
        basicData: {
          URL: "/images/pointOfinterest/Galleria dell' Accademia/3.jpg",
          caption: 'Una delle sale espositive',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Palazzo Pitti',
      description:
        "Palazzo Pitti è il più ampio complesso monumentale della città e comprende otto musei, visitabili con due biglietti cumulativi.è un imponente palazzo rinascimentale di Firenze. Si trova nella zona di Oltrarno, a breve distanza da Ponte Vecchio.[2] Il nucleo originale dell'edificio risale al 1458, come residenza urbana del banchiere Luca Pitti.[3] Il palazzo fu quindi acquistato dalla famiglia Medici nel 1549 e divenne la residenza principale dei granduchi di Toscana, prima Medici e dal 1737 Asburgo-Lorena. A seguito dell'unità d'Italia, svolse il ruolo di palazzo reale per Casa Savoia nel quinquennio in cui Firenze fu capitale del Regno d'Italia (1865-70). Nel 1919 Vittorio Emanuele III lo donò allo Stato: da allora è un museo statale.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.3711805052694!2d11.247819415463281!3d43.765153279117555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515441db99f1%3A0x5cd0cce4e6f1502a!2sPalazzo%20Pitti!5e0!3m2!1sit!2sit!4v1653472212025!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Pitti/0.jpg',
          caption: 'Fontana all\'esterno del palazzo',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Pitti/1.jpg',
          caption: 'Interno del palazzo',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Pitti/2.jpg',
          caption: 'Chiostro del palazzo',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Palazzo Pitti/3.jpg',
          caption: 'Facciata esterna del palazzo',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Giardino di Boboli',
      description:
        "Giardino di Boboli, connesso anche al Forte di Belvedere, accoglie ogni anno oltre 800 000 visitatori ed è uno dei più importanti esempi di giardino all'italiana al mondo. È un vero e proprio museo all'aperto, per l'impostazione architettonico-paesaggistica e per la collezione di sculture, che vanno dalle antichità romane al XIX secolo. Notevole è l'importanza che nel giardino assumono le statue e gli edifici, come la settecentesca Kaffeehaus (raro esempio di gusto rococò), che permette di godere del panorama sulla città, o la Limonaia.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4238739454263!2d11.24735437039721!3d43.764345310511224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a515690734e97%3A0x40c02f73b03d9b2!2sGiardino%20di%20Boboli!5e0!3m2!1sit!2sit!4v1653472234815!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Giardino di Boboli/0.jpg',
          caption: 'Laghetto all\'interno del parco',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Giardino di Boboli/1.JPG',
          caption: 'Parte del parco',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Giardino di Boboli/2.jpg',
          caption: 'Parte del parco',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Giardino di Boboli/3.jpeg',
          caption: 'Parte del parco',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Piazza della Signoria',
      description:
        "Piazza della Signoria è la piazza centrale di Firenze, sede del potere civile con Palazzo Vecchio e cuore della vita sociale della città. È l'unica piazza al mondo a ospitare una straordinaria serie di capolavori di scultura carichi di messaggi politici, che dovevano ispirare i governatori della città. Nella grande piazza troviamo numerose opere d'arte, come le statue nella Loggia dei Lanzi, la statua equestre a Cosimo I de' Medici, le statue poste davanti a Palazzo Vecchio come una copia del David di Michelangelo, il Nettuno, il Marzocco di Donatello, Ercole e Caco e molte altre. Si trova a fianco del piazzale della Galleria degli Uffizi.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.1528683971574!2d11.253453515463441!3d43.769685479117435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a54012042ae35%3A0x9fbc6971f8e3906d!2sPiazza%20della%20Signoria!5e0!3m2!1sit!2sit!4v1653472254418!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Piazza della Signoria/0.jpg',
          caption: 'Vista della piazza',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Piazza del Duomo',
      description:
        "Piazza del Duomo è uno dei complessi monumentali più famosi d'Italia, con la Cattedrale di Santa Maria del Fiore e la Cupola del Brunelleschi, il Campanile di Giotto e il Battistero di San Giovanni, oltre che agli splendidi palazzi e musei che vi si affacciano, come il Palazzo Arcivescovile, il Museo dell'Opera del Duomo, la Loggia del Bigallo, il palazzo dei Canonici e molti altri. La parte ovest dove è situato il Battistero prende il nome di piazza San Giovanni.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.972076026174!2d11.254361415463599!3d43.773438479117445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403c21b33ed%3A0x26185936f22c8e1a!2sPiazza%20del%20Duomo%2C%2050122%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1653472269110!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Piazza del Duomo/0.jpg',
          caption: 'Vista della piazza',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Piazza Santa Croce',
      description:
        "Piazza Santa Croce, dominata dall'omonima basilica, essendo molto grande e di forma regolare, nel Rinascimento come in epoca moderna divenne il luogo ideale per giostre cavalleresche, feste, spettacoli e gare popolari, come il calcio in costume, che ancora oggi vi si tiene ogni giugno. È sede di varie manifestazioni, eventi e spettacoli oltre che vivaci mercatini nel periodo natalizio. Vi si affacciano il Palazzo dell'Antella e il Palazzo Cocchi-Serristori, oltre ai numerosi negozi di lavorazione artigianale di prodotti in pelle. Davanti alla basilica è posta la grande statua dedicata al concittadino Dante Alighieri.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.196128112034!2d11.259261665463402!3d43.768787429117474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5407af1364cf%3A0x9e2e9280731e07f2!2sPiazza%20di%20Santa%20Croce%2C%2050122%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1653472286357!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Piazza Santa Croce/0.jpg',
          caption: 'Vista della piazza',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Piazza Santa Maria Novella',
      description:
        "Piazza Santa Maria Novella, dominata dalla splendida facciata dell'omonima chiesa, è una delle piazze principali di Firenze. È antistante a piazza della Stazione, a cui si accede da via degli Avelli.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9696239476975!2d11.24759431546351!3d43.773489379117336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a9786d4399%3A0xbbe45213f393d7b8!2sP.za%20di%20Santa%20Maria%20Novella%2C%2050123%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1653472302375!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Piazza Santa Maria Novella/0.jpg',
          caption: 'Vista della piazza',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Piazzale Michelangelo',
      description:
        'Piazzale Michelangelo rappresenta il più famoso punto di osservazione del panorama cittadino di Firenze, riprodotto in innumerevoli cartoline e meta obbligata dei turisti in visita alla città. Ospita diverse manifestazioni, concerti ed eventi come, per esempio, MTV TRL',
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.478200898175!2d11.262867415463209!3d43.76293137911761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a53f743663843%3A0xb4f768e1820d5119!2sPiazzale%20Michelangelo!5e0!3m2!1sit!2sit!4v1653472321775!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Piazzale Michelangelo/0.jpg',
          caption: 'Vista panoramica dalla piazza',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Piazza della Santissima Annunziata',
      description:
        "Piazza della Santissima Annunziata è una delle piazze più belle e stilisticamente armoniose non solo della città, ma di tutta Italia, forse primo esempio europeo di pianificazione urbanistica. Su di essa si affaccia l'omonima basilica, lo Spedale degli Innocenti del Brunelleschi, la Loggia dei Servi di Maria, Palazzo Budini Gattai e il Museo archeologico nazionale.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.828632837582!2d11.258414865463635!3d43.77641597911717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5404d4f23393%3A0xdac6cafc2c6474c4!2sPiazza%20della%20Santissima%20Annunziata%2C%20Firenze%20FI!5e0!3m2!1sit!2sit!4v1653472499282!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Piazza della Santissima Annunziata/0.jpg',
          caption: 'Vista della piazza',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Cattedrale di Santa Maria del Fiore',
      description:
        "Cattedrale di Santa Maria del Fiore è il Duomo di Firenze; è la quinta chiesa d'Europa per grandezza, dopo la Basilica di San Pietro, la Cattedrale di San Paolo a Londra, la Cattedrale di Siviglia e il Duomo di Milano; è lunga infatti 153 metri mentre il basamento della famosa cupola, che è visibile da tutta la piana di Firenze fino a Prato, è largo 90 metri.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9862151769967!2d11.253771515463542!3d43.77314497911739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bfe22ff5%3A0x5591438487aaf1f5!2sCattedrale%20di%20Santa%20Maria%20del%20Fiore!5e0!3m2!1sit!2sit!4v1653472340543!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Cattedrale di Santa Maria del Fiore/0.jpg',
          caption: 'Vista laterale della cattedrale',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Cattedrale di Santa Maria del Fiore/1.jpg',
          caption: 'Vista frontale della cattedrale',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Cattedrale di Santa Maria del Fiore/2.jpeg',
          caption: 'Affresco della cupola',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Cattedrale di Santa Maria del Fiore/3.jpg',
          caption: 'Vista laterale della cattedrale',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Battistero di San Giovanni',
      description:
        "Il Battistero di San Giovanni, amato, tra gli altri, da Dante e da Michelangelo Buonarroti, è splendidamente decorato sia all'esterno sia all'interno; abbellito dalle migliori maestranze cittadine, è famoso soprattutto per i mosaici della cupola e per la porta del Paradiso di Lorenzo Ghiberti; le misteriose origini storiche del monumento e i tanti avvenimenti ai quali ha fatto da teatro ne accrescono la storia enigmatica.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9876411314526!2d11.252834515463512!3d43.773115379117364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5403bff30525%3A0x74a3341bfd1857d!2sBattistero%20di%20San%20Giovanni!5e0!3m2!1sit!2sit!4v1653472357037!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Battistero di San Giovanni/0.jpg',
          caption: 'Vista frontale del battistero',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Basilica di Santa Croce',
      description:
        'Santa Croce è una delle più grandi chiese officiate dai Francescani. Una delle massime realizzazioni del gotico in Italia, con capolavori come la Cappella dei Pazzi di Brunelleschi, è nota come "Il tempio dell\'Itale glorie" per le numerose sepolture di sommi artisti, letterati e scienziati che racchiude, come Donatello, Michelangelo, Galileo Galilei, Niccolò Machiavelli, Guglielmo Marconi, Enrico Fermi, Luigi Cherubini, Lorenzo Ghiberti, Gioachino Rossini, Leon Battista Alberti, Ugo Foscolo e molti altri.',
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.206684617824!2d11.260079015463443!3d43.76856827911756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a540723ccc331%3A0x8f8279649c131255!2sBasilica%20di%20Santa%20Croce%20di%20Firenze!5e0!3m2!1sit!2sit!4v1653472396079!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Basilica di Santa Croce/0.jpg',
          caption: 'Vista frontale della basilica',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Basilica di Santa Croce/1.jpg',
          caption: 'Interno della basilica',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Basilica di Santa Croce/2.jpg',
          caption: 'Vista frontale della basilica all\'imbrunire',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Basilica di Santa Maria Novella',
      description:
        "Santa Maria Novella è una delle più importanti chiese di Firenze e sorge sull'omonima piazza, chiesa domenicana, conserva inestimabili opere d'arte, come gli affreschi di Masaccio, Paolo Uccello, Filippino Lippi e Domenico Ghirlandaio; la parte superiore della facciata e il portale sono capolavori di armonia e raziocinio di Leon Battista Alberti.",
      mapURL:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.914453989532!2d11.247197215463597!3d43.77463457911736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a975219361%3A0x85e5747949866eb2!2sBasilica%20di%20Santa%20Maria%20Novella!5e0!3m2!1sit!2sit!4v1653472460350!5m2!1sit!2sit',
    },
    imagesURL: [
      {
        basicData: {
          URL: '/images/pointOfinterest/Basilica di Santa Maria Novella/0.jpg',
          caption: 'Facciata della basilica',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Basilica di Santa Maria Novella/1.jpg',
          caption: 'Interno della basilica',
        },
      },
      {
        basicData: {
          URL: '/images/pointOfinterest/Basilica di Santa Maria Novella/2.jpg',
          caption: 'Scorcio della basilica',
        },
      },
    ],
  },
]

const itineraries = [
  {
    basicData: {
      name: 'Musei Fiorentini',
      overview:
        "Visita la migliore selezione di musei di Firenze. Il percorso ti accompagnerà in una full immersion nella storia artistica Italiana, dal Rinascimento fino all'età moderna.",
      mapURL: "https://www.google.com/maps/d/u/0/embed?mid=1sIzw4hKd7FPs9wXe8wHLmw1l7XGvIpI&ehbc=2E312F",
    },
    pois: [0, 1, 2, 3, 5],
  },
  {
    basicData: {
      name: 'Piazze Fiorentine',
      overview:
        "La bellezza della città sta anche nelle incantevoli e storiche piazze sparse per il capoluogo Toscano. Avrai l'occasione di visitare le più famose e di ammirare tutto il corredo di negozi storici e magnifici monumenti in esse.",
      mapURL: "https://www.google.com/maps/d/u/0/embed?mid=1MA0RuuMr4O4EbpgkDy2k3A05KauKNeo&ehbc=2E312F",
      },
    pois: [4, 5, 6, 7, 8, 9, 10],
  },
  {
    basicData: {
      name: 'Chiese Fiorentine',
      overview:
        'Scopri le bellissime chiese della città, dalle famosissime e rinomate Santa Maria novella e Santa maria del fiore, ad altri importantissimi luoghi di culto.',
      mapURL: "https://www.google.com/maps/d/u/0/embed?mid=1nsomLGcnGWvbdGhsjWnR-owJRYAb9FU&ehbc=2E312F",
    },
    pois: [7, 13, 8, 14, 12, 11],
  },
]

const events = [
  {
    basicData: {
      name: 'Heroes - Il futuro inizia adesso',
      overview:
        'Firenze celebrerà il ritorno della grande musica live con Heroes - Il futuro inizia adesso. Il 12 luglio a partire dalle 19.00, quaranta artisti per 5 ore di grande musica live saliranno sul palco dell’Arena per sostenere il Fondo “COVID-19 Sosteniamo la musica” di Music Innovation Hub, sostenuto da Spotify e promosso da FIMI, in partnership con AFI, Assomusica, NUOVOIMAIE e PMI: l’iniziativa è rivolta alle categorie del settore musicale maggiormente colpite dagli effetti della pandemia.\n' +
        'Un cast musicale d’eccezione - il meglio del panorama della musica italiana - salirà insieme sullo stesso palco: Achille Lauro, Afterhours, Aiello, Anastasio, Anna, Brunori Sas, Cara, Coez, Coma_Cose, Diodato, Elodie, Eugenio in Via Di Gioia, Fedez, Frah Quintale, Francesca Michielin, Franco126, Gaia, Gazzelle, Gemitaiz & Madman, Ghali, Ghemon, Levante, Madame, Mahmood, Margherita Vicario, Marlene Kuntz, Marracash, Mecna, Michele Bravi, Mostro, Nitro, Pinguini Tattici Nucleari, Priestess, Random, Rocco Hunt, Salmo, Selton, Shiva, Subsonica, The Kolors, Tommaso Paradiso, Willie Peyote.',
      startDate: '2022-07-12',
      endDate: '2022-07-12',
      cost: '45€',
    },
    hostingPOIs: [5],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Heroes - Il futuro inizia adesso/0.jpg',
          caption: 'Logo dell\'evento',
        },
      },
      {
        basicData: {
          URL: '/images/event/Heroes - Il futuro inizia adesso/0.jpg',
          caption: 'Foto della scorsa edizione',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Negramaro Unplugged European Tour 2022',
      overview:
        'I Negramaro con il loro Unplugged European Tour 2022 tornano nei teatri e nelle piazze italiane dopo oltre 15 anni di assenza, durante i quali hanno conquistato le più grandi venue del paese, dai palazzetti, ai grandi festival, agli stadi.\n' +
        'Una celebrazione delle loro origini che consente di sperimentare nuove e creative forme musicali ed artistiche in una cornice intima che li vedrà tornare a stretto contatto con i fan.',
      startDate: '2022-08-04',
      endDate: '2022-08-04',
      cost: '50€',
    },
    hostingPOIs: [6],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Negramaro Unplugged European Tour 2022/0.jpg',
          caption: 'Foto del gruppo',
        },
      },
      {
        basicData: {
          URL: '/images/event/Negramaro Unplugged European Tour 2022/1.jpg',
          caption: 'Foto del gruppo mentre si esibisce',
        },
      },
      {
        basicData: {
          URL: '/images/event/Negramaro Unplugged European Tour 2022/2.jpg',
          caption: 'Foto del cantante',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Concerto di Natale',
      overview:
        'Il Gruppo Musica d’insieme Astrolabio, il Coro delle voci bianche del Maggio Musicale Fiorentino e la Scuola di canto corale per voci bianche sul palcoscenico allestito appositamente in Piazza della Signoria sabato 17 dicembre alle ore 18 in un appuntamento per tutta la famiglia, attesissimo in città in occasione delle feste natalizie.\n' +
        'In cartellone un programma ricco e variegato per poter iniziare all’insegna della musica il periodo del Natale. Confermata la formula che tanto successo ha raccolto negli ultimi anni, con la collaborazione tra il Coro delle voci bianche del Maggio Musicale Fiorentino diretto dal maestro Lorenzo Fratini e il Gruppo Musica d’insieme Astrolabio diretto dal maestro Samuele Zagara. Inoltre Al pianoforte siederà Hannah Kim. Il maestro preparatore delle voci bianche è Sara Matteucci.\n' +
        "Il variegato programma vedrà in apertura Persischer Marsch di Johann Strauss Jr. per poi proseguire con i brani di due colonne portanti della tradizione musicale russa: Pëtr Il’ič Čajkovskij, con la Danza russa da Il lago dei cigni e Dmitrij Šostakovič, con il Walzer n. 2 dalla Suite n. 2 per orchestra jazz. A intervallare i brani dei grandi autori russi saranno due “danze gitane” di Joaquín Turina Perez, maestro nel reinterpretare il folklore autentico spagnolo a cavallo fra '800 e '900: la Zambra, una danza flamenca dei gitani di Granada e Almería, e Sacro-Monte, entrambe tratte da Danzas gitanas. Si entra poi in piena atmosfera natalizia con alcuni estratti da Friday Afternoons di Benjamin Britten, Circles of motion e Red Boots on di Bob Chilcott per poi proseguire con Double Trouble, coro per voci bianche e pianoforte di John Williams estratto dalla colonna sonora di Harry Potter e il prigioniero di Azkaban. La sezione dei canti natalizi si chiuderà poi con Star Carol di John Rutter, brano ricorrente nei concerti di Natale del Maggio. L’ultima parte del concerto si aprirà con il coro per orchestra e voci bianche Sukkat Shelomekha di Marjan Helms, mentre la sognante Somewhere in my memory di John Williams, estratta dal film Mamma, ho perso l’aereo, precederà i due brani conclusivi della serata prima dei saluti e degli auguri: Jing Jingle Bells di Douglas E. Wagner e Gaudeamus di Mary Lynn Lightfoot, che già aveva concluso il Concerto di Natale del 2019.\n" +
        'Il concerto natalizio vedrà dunque il ritorno del Gruppo Musica d’insieme Astrolabio sul palcoscenico del Maggio: Astrolabio da molti anni offre laboratori ed esperienze multidisciplinari a ragazzi affetti da Disturbi dello Spettro Autistico e plurihandicap. Una sfida non alla disabilità ma agli ostacoli che ne impediscono la più edificante espressione.\n' +
        'Il “Gruppo di musica d’insieme Astrolabio” è nato verso la fine del 2009 quando i responsabili dell’associazione hanno pensato di utilizzare la musica come strumento esperienziale, educativo e “abilitativo”.',
      startDate: '2022-12-17',
      endDate: '2022-12-17',
      cost: '15€',
    },
    hostingPOIs: [5],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Concerto di Natale/0.jpg',
          caption: 'Foto del Gruppo Musica d’insieme Astrolabio',
        },
      },
      {
        basicData: {
          URL: '/images/event/Concerto di Natale/1.jpg',
          caption: 'Foto del Coro delle voci bianche del Maggio Musicale Fiorentino',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'I Giardini di Firenze',
      overview:
        "Gli appassionati di botanica potranno godere di una mostra a cielo aperto dove potranno ammirare i migliori esemplari di piante e fiori durante le due giornate dedicate al verde all'interno del Giardino dei Boboli.\n" +
        'Torna nella nostra città "I Giardini di Firenze" che unirà un vasto numero di espositori grazie alla partecipazione di aziende note nel settore botanico.\n' +
        "Nei giorni tra l’8 maggio e il 9 giugno 2022, all'interno del Giardino dei Boboli, si potranno vedere esemplari anche unici fra cactacee, liliacee, sempreverdi e bulbose e acquistare piante di ogni tipo.\n" +
        'Durante la mostra saranno anche presenti espositori del settore complementi di arredo giardino con allestimenti di giardini veri e propri.\n' +
        'Non mancheranno bancarelle di prodotti biologici e naturali, esposizioni di fiori e di oggetti per arredare i propri giardini, vendita di piante di ogni genere e prodotti di artigianato da non perdere.',
      startDate: '2023-05-8',
      endDate: '2023-06-09',
      cost: 'gratuito',
    },
    hostingPOIs: [4],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/I Giardini di Firenze/0.jpg',
          caption: 'Parte della mostra',
        },
      },
      {
        basicData: {
          URL: '/images/event/I Giardini di Firenze/1.jpg',
          caption: 'Parte della mostra',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Mostra su Koen Vanmechelen',
      overview:
        'Enormi iguana cornute, una tigre rossa accucciata nel bel mezzo della sala della Niobe, inedite versioni della Medusa con la testa brulicante di zanne e becchi appuntiti: è una vera e propria legione di creature fantastiche quella che popola gli Uffizi in Seduzione, esposizione dell’artista belga Koen Vanmechelen, accolta nella Galleria delle Statue e delle Pitture dal 18 gennaio al 20 marzo. 30 le installazioni per la rassegna d’apertura della stagione espositiva 2022: disseminate tra i capolavori del museo, il loro forte impatto visivo e concettuale accompagnerà i visitatori dall’ingresso, lungo i corridoi, alla sala del cosiddetto ‘ricetto delle iscrizioni’ tra quella di Leonardo e quella di Raffaello e Michelangelo al secondo piano fino alle sale della pittura caravaggesca e fiamminga che concludono l’itinerario al primo. Vanmechelen, pittore, scultore, performer, figura eclettica i cui interessi spaziano dall’antropologia alla bioetica, dalla tutela dei diritti umani alla biogenetica, incentra la sua ricerca sui concetti di ibridazione (delle specie animali e vegetali) e contaminazione (delle tecniche espressive e dei materiali). I lavori, tutti specificamente realizzati per gli ambienti degli Uffizi, mettono a fuoco i concetti primordiali, archetipici e antitetici, che da sempre nutrono l’immaginario umano: vita-morte, umano-divino, terreno-spirituale, naturale-artificiale. Allestiti in dialogo con le opere della collezione, costituiscono un viaggio suggestivo e spiazzante intorno all’idea di ‘seduzione’: sono una sorta di inno alla potenza della vita ed alla forza rigeneratrice (ma anche appunto ibridatrice, mostruosa) del mondo naturale. Nei corridoi del secondo piano, inserite nel percorso di visita degli Uffizi, tra la statuaria classica, le sculture della serie Temptation raffiguranti imperatori, filosofi, guerrieri, eroi, divinità. Le loro teste sono ricoperte di frammenti di uova ed altri innesti organici: un invito-sfida a evadere dai limiti del pensiero razionale per seguire il cambiamento e lasciarsi andare a inattese contaminazioni. Come quella proposta dal bizzarro accostamento del Bambino con Gallo, gesso dell’artista fiorentino dell’Ottocento Adriano Cecioni (ordinariamente esposto alla Galleria d’Arte Moderna di Palazzo Pitti, in ‘trasferta’ per l’occasione agli Uffizi) con Cosmopolitan Fossil, doppia installazione ad esso ispirata, nella quale l’innocuo volatile si trasforma in una enorme iguana caratterizzata da inquietanti mutazioni, a stento trattenuta dal bimbo che la tiene in braccio. Opera giocata sul filo dei contrasti (plastico, teatrale, psicologico) è anche Domestic violence: nel suo ambito una tigre in marmo rosso, a grandezza naturale, è adagiata su un tappeto di piume di pollo, al centro della celebre sala che accoglie il gruppo scultoreo ellenistico dei Niobidi. Circondato da lame affilate (una delle quali le perfora il dorso), riferimento tragico ai gesti disperati delle statue antiche, il felino colpisce per la sua mansuetudine e seraficità, del tutto stridente con l’atmosfera drammatica dell’ambiente che lo circonda. In mostra compare poi l’immagine dello stesso artista: lo fa dall’autoritratto Ubuntu, (stampa Diasec su acrilico, esposto proprio nella sala degli autoritratti), che lo raffigura nelle vesti di uno sciamano, ad osservare il visitatore attraverso una maschera di vetro. Ubuntu, in lingua bantu, significa “Io esisto, perché noi esistiamo”: un invito ad accogliere il principio di questa filosofia sudafricana e a rendersi intimamente partecipi del legame di scambio che accomuna l’intera umanità e il creato naturale. L’opera, al termine dell’esposizione sarà donata dall’artista al museo. Concludono Seduzione la coppia di Meduse ibride in marmo e vetro, posizionate nella principale delle sale caravaggesche: le loro teste, irte  di crani di mostruosi polli mutageni con le fauci aguzze spalancate, affiancano e potenziano l’orrore della chioma di serpenti che incornicia il volto stravolto del capolavoro di Michelangelo Merisi. Alla pari del veleno di Medusa e dei suoi serpenti, ritenuto in mitologia capace di risvegliare dalla morte, anche le uova di pollo sono usate nella moderna medicina come base per medicinali e vaccinazioni. Medusa quindi è metafora della capacità di uccidere come di dare nuova vita.',
      startDate: '2022-11-6',
      endDate: '2023-01-7',
      cost: '8€',
    },
    hostingPOIs: [0],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Mostra su Koen Vanmechelen/0.jpg',
          caption: 'Parte della mostra',
        },
      },
      {
        basicData: {
          URL: '/images/event/Mostra su Koen Vanmechelen/1.jpg',
          caption: 'Parte della mostra',
        },
      },
      {
        basicData: {
          URL: '/images/event/Mostra su Koen Vanmechelen/2.jpg',
          caption: 'Parte della mostra',
        },
      },
      {
        basicData: {
          URL: '/images/event/Mostra su Koen Vanmechelen/3.jpg',
          caption: 'Parte della mostra',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Mostra su Michelangelo: l’effigie in bronzo di Daniele da Volterra',
      overview:
        'Michelangelo: l’effigie in bronzo di Daniele da Volterra, a cura di Cecilie Hollberg, è una mostra studio unica e inconsueta che parte da un discorso fatto di quesiti ancora aperti per arrivare a soluzioni nuove con metodi innovativi. È la prima volta che vengono riuniti questi nove busti simili, alcuni apparentemente quasi uguali, che riportano i tratti di Michelangelo Buonarroti (1475 - 1564). Proprio quell’effigie che tutti noi siamo abituati a collegare con l’incomparabile artista rinascimentale.\n' +
        'Daniele Ricciarelli, detto da Volterra (1509 - 1566), è stato un allievo di Michelangelo, ne fu amico stretto e di conseguenza lo conosceva benissimo. Sappiamo, per di più, che era presente alla morte del maestro nella casa romana Macel de’ Corvi, oggi non più esistente, il 18 febbraio 1564.\n' +
        'Cogliamo quindi l’occasione di questa importantissima mostra che finalmente mette insieme tutti i busti in bronzo realizzati dall’artista, per offrire un raffronto diretto dei busti e per vederne i dati, i documenti e la relativa bibliografia.\n' +
        'Per questo progetto espositivo sono state effettuate su tutti i busti diverse indagini scientifiche non invasive e mai condotte in precedenza su queste opere, come le analisi geologiche delle terre di fusione o quelle nucleari (XRF) per determinare la natura e la composizione delle leghe di metallo. Inoltre, ogni testa è stata digitalizzata e stampata in 3D in resina, in scala 1:1.\n' +
        'I busti sono stati digitalmente “mappati” nei loro punti chiave e nelle corrispondenze, sovrapposti e confrontati in un lavoro di ricerca unico nel suo genere, che ha unito per la prima volta l’esperienza digitale al rigore accademico nella ricerca delle teste originali nello studio di Daniele da Volterra, e la “genealogia” delle varianti da loro derivate.\n' +
        'Per aiutare il confronto, sia agli occhi degli esperti che tramite software di machine learning, i busti sono stati allineati per la presentazione seguendo una linea immaginaria ricercata e tracciata lavorando sulle stampe 3D.',
      startDate: '2022-12-4',
      endDate: '2022-12-20',
      cost: '12€',
    },
    hostingPOIs: [2],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Mostra su Michelangelo l’effigie in bronzo di Daniele da Volterra/0.jpg',
          caption: 'L’effigie in bronzo di Daniele da Volterra',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Mercatino di Natale',
      overview:
        'La piazza della bellissima Basilica di Santa Croce ospita il più grande mercatino di Natale di Firenze! Anche se la tradizione dei mercatini di Natale è iniziata in Germania e Francia nel XII secolo per poi diffondersi nei paesi circostanti, il Weihnachtsmarkt di Santa Croce non manca di offrire il fascino e l’atmosfera dei mercatini storici europei.\n' +
        'Il mercatino di Natale di Firenze in Piazza Santa Croce (Weihnachtsmarkt) si presenta come un piccolo villaggio di Natale con chalet in legno, tipici dell’Alto Adige che offrono regali fatti a mano italiani, decorazioni natalizie da tutto il mondo, candele, ceramiche e vestiti.\n' +
        'Naturalmente, non può esistere un mercatino toscano senza deliziosi formaggi, carni, vino e specialità natalizie. Alcune casette ospitano espositori stranieri che cambiano ogni anno.\n' +
        'Gli stand saranno aperti tutti i giorni dalle 10 alle 22 con ingresso gratuito.\n',
      startDate: '2022-11-19',
      endDate: '2022-12-18',
      cost: 'gratuito',
    },
    hostingPOIs: [7],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Mercatino di Natale/0.jpg',
          caption: 'Mercatino visto dall\'alto',
        },
      },
      {
        basicData: {
          URL: '/images/event/Mercatino di Natale/1.jpg',
          caption: 'Mercatino visto dal basso',
        },
      },
    ],
  },
  {
    basicData: {
      name: "Mercato dell'antiquariato",
      overview:
        'Girare tra le bancarelle dei mercatini dell’antiquariato di Firenze è un po’ come tornare indietro nel tempo, permettendo di curiosare tra vecchie stampe, mobili retrò, articoli da collezione e oggetti che hanno ancora il fascino del passato.\n' +
        'Tra le varie bancarelle si potranno trovare prodotti di piccolo antiquariato, vintage, mobilia di pregio, arredamento, porcellane, produzioni artigianali, libri rari, edizioni introvabili, oggetti d’artista, vinili numerati e altro ancora.\n' +
        'Le esposizioni dureranno dalle 10 alle 22 del 8 e 9 Settembre ',
      startDate: '2022-09-09',
      endDate: '2022-09-10',
      cost: 'gratuito',
      mapURL: 'https://www.google.com/maps/d/u/0/embed?mid=1v6HSxm-gnZRBICj2ipUgpFEkbqNPPYc&ehbc=2E312F',
    },
    hostingPOIs: [5, 6],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Mercato dell\'antiquariato/0.jpg',
          caption: 'Alcune delle bancarelle',
        },
      },
      {
        basicData: {
          URL: '/images/event/Mercato dell\'antiquariato/1.jpg',
          caption: 'Un grammofono e altri articoli',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'All Star Game Firenze',
      overview:
        "Al Piazzale Michelangelo torna All Star Game Firenze. Basket, beach volley e, la novità di quest'anno, il padel per una settimana di sport e tradizioni popolari: un evento che mette insieme i colori della nostra città e il grande spettacolo in uno dei luoghi più suggestivi di Firenze.\n" +
        "L'edizione 2021 della manifestazione, in programma dal 12 al 18 luglio, è stata presentata in Palazzo Vecchio dall’assessore allo Sport Cosimo Guccione e dagli organizzatori Tommaso Paoletti e Tommaso Romoli.\n" +
        "L'idea dell'All Star Game Firenze è nata nel 2015 dalla voglia dell'ideatore e commissioner Tommaso Paoletti di proporre un torneo di basket 5c5 tra i “quattro colori” di Firenze, così come vuole la tradizione del calcio storico fiorentino. Negli anni successivi la manifestazione ha aperto i campi anche al beach volley e ha fatto in modo che potessero partecipare tutti i livelli: dal torneo dei colori, al 3x3 di basket maschile e femminile, al torneo di beach volley amatoriale, alla gara di tiro o il basket in carrozzina.\n" +
        "“Un evento che da alcuni anni vede giocatori di società fiorentine di basket e volley ma anche semplici amatori affrontarsi in un luogo d'eccezione come piazzale Michelangelo - ha dichiarato l'assessore Guccione - dopo la pausa del 2020 lo sport torna in un palcoscenico incredibile per una ripartenza degna di nota”.\n" +
        "“Un evento che prende tutte le fasce d'età - ha sottolineato Paoletti - il più piccolo iscritto ai tornei di basket ha sei anni, il più anziano del padel ne ha 74. Tutti potranno vivere in un'atmosfera fatta non solo di sport ma anche di musica e di sponsor. Ci sarà l'opportunità di passare tante serata in allegria, anche mangiando, dopo un anno e mezzo nel quale abbiamo perso la socialità. Naturalmente nel rispetto di tutti i protocolli antiCovid”.\n" +
        "Tra gli sport di quest'anno anche il Dodgeball",
      startDate: '2022-07-12',
      endDate: '2022-07-18',
      cost: 'gratuito',
    },
    hostingPOIs: [9],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/All Star Game Firenze/0.jpg',
          caption: 'Logo dell\'evento',
        },
      },
      {
        basicData: {
          URL: '/images/event/All Star Game Firenze/1.jpg',
          caption: 'Partita di basket',
        },
      },
      {
        basicData: {
          URL: '/images/event/All Star Game Firenze/2.jpeg',
          caption: 'Evento dall\'alto',
        },
      },
    ],
  },
  {
    basicData: {
      name: 'Musart',
      overview:
        'Torna Musart Festival in piazza della Santissima Annunziata, ospiti principali Roberto Bolle, LP, Achille Lauro, Vinicio Capossela, Goran Bregovic, Rock The Opera, Steve Hackett e Dado Moroni. Musica, danza, esposizioni e visite a luoghi d’arte nel cuore del centro di Firenze, a pochi passi dal Duomo.\n' +
        'Saranno Roberto Bolle e il suo straordinario Gala di danza a inaugurare sabato 16 luglio il Musart Festival. Una presenza consolidata quella dell’étoile dei due mondi, che da anni ha inserito piazza Santissima Annunziata tra le mete privilegiate dei suoi tour estivi, insieme alle Terme di Caracalla e all’Arena di Verona. Lunedì 18 luglio la cantautrice americana LP e al suo nuovo album “Churches”, in cui pop, rock, soul e un pizzico di folk si intersecano a testi poetici e particolari. Mercoledì 20 luglio Achille Lauro accompagnato dalla sua band e da un ensemble di 52 elementi, l’Electric Orchestra: uno show tutto nuovo, dagli arrangiamenti ai costumi, evoluzione di tutto ciò che abbiamo visto finora. Giovedì 21 luglio segna il ritorno di Vinicio Capossela: a un anno esatto dal concerto fiorentino ispirato a Dante, il genio e la teatralità di uno dei cantautori più ispirati dell’italica canzone. Con “Form Sarajevo”, venerdì 22 luglio Goran Bregovic trasformerà in musica le molteplici anime della capitale della Bosnia-Erzegovina: ci saranno tre violini solisti, suonati secondo la tradizione classica occidentale, quella klezmer e quella orientale. Non mancheranno la Wedding and Funeral Band, orchestra, ensemble di fiati gitani e coro di voci bulgare. Dai Pink Floyd agli Zeppelin, grandi successi del rock eseguiti in chiave sinfonica per “Rock The Opera vol. 2”, il concerto che sabato 23 luglio vedrà sullo stesso palco l’Orchestra della Toscana e la Prague Philharmonic Orchestra dirette da Friedemann Riehle. A tutti i fan dei Genesis: imperdibile l’appuntamento con Steve Hackett, lunedì 25 luglio sempre sul palco di piazza Santissima Annunziata. Il leggendario chitarrista approderà nell’ambito di “Seconds out + more”, tour che vede in primo piano “Seconds Out”, tra i maggiori successi discografici dei Genesis. Poche ore più tardi, martedì 26 luglio alle 4,45 nel Cortile degli Uomini degli Istituto Degli Innocenti, sarà il concerto all’alba del pianista Dado Moroni a far calare il sipario di Musart Festival.\n' +
        'Prima degli spettacoli si potranno visitare gratuitamente giardini, luoghi di culto e palazzi monumentali adiacenti a piazza della Santissima Annunziata. E ancora, nell’ambito di Musart concerti pomeridiani, mostre fotografiche, docu-film musicali, un itinerario attraverso luoghi e spazi che hanno fatto la storia della musica dal vivo a Firenze e altre iniziative, in gran parte a ingresso libero.',
      startDate: '2022-08-3',
      endDate: '2022-08-3',
      cost: '25€',
    },
    hostingPOIs: [11],
    imagesURL: [
      {
        basicData: {
          URL: '/images/event/Musart/0.jpg',
          caption: 'Logo dell\'evento',
        },
      },
      {
        basicData: {
          URL: '/images/event/Musart/1.jpg',
          caption: 'Edizione dello scorso anno vista dall\'alto',
        },
      },
    ],
  },
]

export async function CreatePOIs() {
  const DBData = await DB

  const createdPOIs = []

  for (const poi of pois) {
    const i = createdPOIs.length
    createdPOIs[i] = await DBData.PointOfInterest.create(poi.basicData)

    for (const im of poi.imagesURL) {
      await createdPOIs[i].createImage(im.basicData)
    }
  }

  for (const itin of itineraries) {
    const createdItinerary = await DBData.Itinerary.create(itin.basicData)

    for (const i of itin.pois) {
      await createdItinerary.addPointOfInterest(createdPOIs[i])
    }

    await createdItinerary.createRepresentativeImage(pois[itin.pois[0]].imagesURL[0].basicData)
  }

  for (const ev of events) {
    const createdEvent = await DBData.Event.create(ev.basicData)

    for (const i of ev.hostingPOIs) {
      await createdEvent.addPointOfInterest(createdPOIs[i])
    }

    for (const im of ev.imagesURL) {
      await createdEvent.createImage(im.basicData)
    }
  }
}
