import DB from '../database.js'

const serviceTypes = [
  {
    basicData: {
      name: 'Farmacie',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: 'Farmacia Camilli',
          phone: '+39055212668',
          website:
            'https://farmacia-camilli-di-puccianti-alessandro.business.site/',
          address: 'Piazza degli Ottaviani, 8, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Antica Farmacia del Cinghiale',
          phone: '+39055282128',
          website: 'http://www.farmaciadelcinghiale.it/',
          address: 'Piazza del Mercato Nuovo, 4/5/R, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Farmacia San Lorenzo',
          phone: '+390554932910',
          website: 'https://www.farmaciasanlorenzofirenze.it/',
          address: 'Piazza di San Lorenzo, 11/red, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 0,
              openingHour: '10:00',
              closingHour: '19:00',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '9:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '10:00',
              closingHour: '19:00',
            },
          },
        ],
      },
    ],
  },
  {
    basicData: {
      name: 'Bar e Ristoranti',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: 'Ristorante il Paiolo',
          phone: '+39055215019',
          website: 'http://www.ristoranteilpaiolo.it/',
          address: 'Via del Corso, 42, 50122 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 0,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '12:00',
              closingHour: '23:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Ristorante Braceria Auditore',
          phone: '+39055217320',
          website: null,
          address: 'Piazza del Grano, 13, 50122 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 0,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '10:01',
              closingHour: '23:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Ristorante Pizzeria "Il Clarinetto"',
          phone: '+393333077211',
          website: 'https://ristorante-pizzeria-il-clarinetto.business.site/',
          address: 'V.le Spartaco Lavagnini, 40, 50129 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '12:00',
              closingHour: '14:30',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '19:00',
              closingHour: '22:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '12:00',
              closingHour: '14:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '19:00',
              closingHour: '22:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '12:00',
              closingHour: '14:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '19:00',
              closingHour: '22:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '12:00',
              closingHour: '14:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '19:00',
              closingHour: '22:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '12:00',
              closingHour: '14:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '19:00',
              closingHour: '22:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '19:00',
              closingHour: '23:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Bar San Michele',
          phone: '+393332562845',
          website: '',
          address: 'Via Orsammichele, 10/R, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 0,
              openingHour: '9:00',
              closingHour: '19:45',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '8:30',
              closingHour: '20:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '8:30',
              closingHour: '20:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '8:30',
              closingHour: '20:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '8:30',
              closingHour: '21:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '8:30',
              closingHour: '20:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '8:30',
              closingHour: '20:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Bar Della Corte R. & Tiengo D. (S.N.C.)',
          phone: '+390552478882',
          website: '',
          address: 'Via degli Alfani, 40/R, 50121 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '7:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '7:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '7:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '7:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '7:00',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '7:00',
              closingHour: '20:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Bar pasticceria Robiglio',
          phone: '+39055490886',
          website: 'https://www.robigliofirenze.it/',
          address: 'V.le Spartaco Lavagnini, 16R, 50129 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '7:00',
              closingHour: '19:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '7:00',
              closingHour: '19:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '7:00',
              closingHour: '19:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '7:00',
              closingHour: '19:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '7:00',
              closingHour: '19:00',
            },
          },
        ],
      },
    ],
  },
  {
    basicData: {
      name: 'Discoteche',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: 'Space Club',
          phone: '',
          website: 'https://www.instagram.com/spaceclubfirenze/',
          address: 'Via Palazzuolo, 37, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 2,
              openingHour: '23:45',
              closingHour: '3:45',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '23:45',
              closingHour: '3:45',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '23:00',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '23:00',
              closingHour: '4:30',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'YAB | Discoteca Firenze',
          phone: '+39055215160',
          website: 'http://www.yab.it/',
          address: 'Via dei Sassetti, 5/r, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Blue Velvet',
          phone: '+39055215523',
          website: '',
          address: "Via del Castello D'Altafronte, 16r, 50122 Firenze FI",
        },
        openingHours: [
          {
            basicData: {
              day: 2,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '23:30',
              closingHour: '4:30',
            },
          },
        ],
      },
    ],
  },
  {
    basicData: {
      name: 'Hotel',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: "Palazzo dei Conti Residenza d'Epoca",
          phone: '+393467065181',
          website: 'https://www.palazzodeiconti.com/',
          address: 'Via dei Conti, 5, 50123 Firenze FI',
        },
        openingHours: [],
      },
      {
        basicData: {
          name: 'Hotel Pitti Palace al Ponte Vecchio',
          phone: '+390552398711',
          website:
            'https://www.hotel-bb.com/it/hotel/firenze-pitti-palace-al-ponte-vecchio?utm_source=googlemaps&utm_medium=fichehotel&utm_campaign=Firenze_Pitti',
          address: 'Borgo S. Jacopo, 3/R, 50125 Firenze FI',
        },
        openingHours: [],
      },
      {
        basicData: {
          name: 'Ambasciatori Hotel',
          phone: '+39055287421',
          website: 'https://www.hotelambasciatori.net/it/index.html',
          address: 'Via Luigi Alamanni, 3, 50123 Firenze FI',
        },
        openingHours: [],
      },
      {
        basicData: {
          name: 'numa | Rodo Rooms & Apartments',
          phone: '+390294755492',
          website: 'https://numastays.com/locations/rodo',
          address: 'Via dei Calzaiuoli, 13 NERO, 50122 Firenze FI',
        },
        openingHours: [],
      },
      {
        basicData: {
          name: 'YellowSquare Florence',
          phone: '+390550317718',
          website: 'https://yellowsquare.it/florence/',
          address: 'Viale Francesco Redi, 19, 50144 Firenze FI',
        },
        openingHours: [],
      },
    ],
  },
  {
    basicData: {
      name: 'Ospedali e Cliniche',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: 'Azienda Ospedaliero Universitaria Careggi',
          phone: '+39 055794111',
          website: 'https://www.aou-careggi.toscana.it/',
          address: 'Largo Giovanni Alessandro Brambilla, 3, 50134 Firenze FI',
        },
        openingHours: [],
      },
      {
        basicData: {
          name: 'Ospedale Santa Maria Nuova',
          phone: '+3905569381',
          website: 'http://www.uslcentro.toscana.it/',
          address: 'PIAZZA DI SANTA MARIA NUOVA, 1, 50122 Firenze FI',
        },
        openingHours: [],
      },
      {
        basicData: {
          name: 'Medlight Istituto Medico',
          phone: '+39055410180',
          website: 'https://www.medlight.it/',
          address: 'Via Claudio Monteverdi, 2, 50144 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '9:00',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '9:00',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '9:00',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '9:00',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '9:00',
              closingHour: '19:30',
            },
          },
        ],
      },
    ],
  },
  {
    basicData: {
      name: 'Negozi',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: 'Raspini',
          phone: '+390552398562',
          website: 'http://www.raspini.com/',
          address: "Via de' Martelli, 5R, 50129 Firenze FI",
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '10:00',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '15:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '10:00',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '14:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '10:00',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '15:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '10:00',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '15:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '10:00',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '15:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '10:00',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '15:30',
              closingHour: '19:30',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Studioteca',
          phone: '+390552478274',
          website: 'http://www.studiotecafirenze.com/',
          address: 'Via dei Benci, 32r, 50122 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 0,
              openingHour: '11:00',
              closingHour: '19:00',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '10:30',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '10:30',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '10:30',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '10:30',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '10:30',
              closingHour: '20:00',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '10:30',
              closingHour: '20:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'NeroGiardini Firenze',
          phone: '+390552645329',
          website: 'https://www.nerogiardini.it/',
          address: 'Via Por Santa Maria, 64/R, 50122 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 0,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
          {
            basicData: {
              day: 6,
              openingHour: '10:30',
              closingHour: '19:30',
            },
          },
        ],
      },
    ],
  },
  {
    basicData: {
      name: 'Banche',
      introduction: 'introduction',
    },
    services: [
      {
        basicData: {
          name: 'Cassa di Risparmio di Lucca Pisa Livorno',
          phone: '+3905527651',
          website: 'http://www.bancobpmspa.com/',
          address: 'Piazza dei Davanzati, 3, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '8:20',
              closingHour: '13:20',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '8:20',
              closingHour: '13:20',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '8:20',
              closingHour: '13:20',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '8:20',
              closingHour: '13:20',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '8:20',
              closingHour: '13:20',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Banco Desio',
          phone: '+39055263171',
          website: 'https://trovafiliale.bpspoleto.it/#/filiale/441/firenze-441---mazzini',
          address: 'Viale Giuseppe Mazzini, 1, 50132 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '8:20',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '14:30',
              closingHour: '16:45',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '8:20',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '14:30',
              closingHour: '16:45',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '8:20',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '14:30',
              closingHour: '16:45',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '8:20',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '14:30',
              closingHour: '16:45',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '8:20',
              closingHour: '13:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '14:30',
              closingHour: '16:45',
            },
          },
        ],
      },
      {
        basicData: {
          name: 'Banche Banca Ifigest Spa',
          phone: '+39055277331',
          website: 'http://www.bancaifigest.com/contatti-e-sedi/',
          address: 'Piazza di Santa Trinita, 1, 50123 Firenze FI',
        },
        openingHours: [
          {
            basicData: {
              day: 1,
              openingHour: '8:30',
              closingHour: '13:30',
            },
          },
          {
            basicData: {
              day: 1,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '8:30',
              closingHour: '13:30',
            },
          },
          {
            basicData: {
              day: 2,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '8:30',
              closingHour: '13:30',
            },
          },
          {
            basicData: {
              day: 3,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '8:30',
              closingHour: '13:30',
            },
          },
          {
            basicData: {
              day: 4,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '8:30',
              closingHour: '13:30',
            },
          },
          {
            basicData: {
              day: 5,
              openingHour: '14:30',
              closingHour: '16:00',
            },
          },
        ],
      },
    ],
  },
]

export async function CreateServices() {
  const DBData = await DB

  for (const st of serviceTypes) {
    const createdSt = await DBData.ServiceType.create(st.basicData)

    for (const s of st.services) {
      const createdS = await DBData.Service.create(s.basicData)

      for (const oh of s.openingHours) {
        await createdS.createOpeningHour(oh.basicData)
      }

      await createdSt.addService(createdS)
    }
  }
}

export async function DestroyServices() {
  const DBData = await DB

  await DBData.OpeningHours.destroy({where: {},})

  await DBData.Service.destroy({where: {},})

  await DBData.ServiceType.destroy({where: {},})
}
