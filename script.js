const searchForm = document.getElementById('search');

const searchItemsList = [
  {
    id: 1,
    title: 'Jurassic Park-img1',
    img: 'Filmes/Jp1.jpg',
    link: 'Jurassic Park-img1.html',
  },
  
  {
    id: 2,
    title: 'Jurassic Park-img2',
    img: 'Filmes/Jp2.jpg',
    link: 'Jurassic Park-img2.html',
  },
  
  {
    id: 3,
    title: 'Jurassic Park-img3',
    img: 'Filmes/Jp3.jpg',
    link: 'Jurassic Park-img3.html',
  },
  
  {
    id: 4,
    title: 'Jurassic Park-img4',
    img: 'Filmes/Jp4.jpg',
    link: 'Jurassic Park-img4.html',
  },
  
  {
    id: 5,
    title: 'Indiana Jones-img1',
    img: 'Filmes/IndianaJones1.jpg',
    link: 'Indiana Jones-img1.html',
  },
  
  {
    id: 6,
    title: 'Indiana Jones-img2',
    img: 'Filmes/IndianaJones2.jpg',
    link: 'Indiana Jones-img2.html',
  },
  
  {
    id: 7,
    title: 'Indiana Jones-img3',
    img: 'Filmes/IndianaJones3.jpg',
    link: 'Indiana Jones-img3.html',
  },
  
  {
    id: 8,
    title: 'Indiana Jones-img4',
    img: 'Filmes/IndianaJones4.jpg',
    link: 'Indiana Jones-img4.html',
  },

  {
    id: 9,
    title: 'Star Wars-img1',
    img: 'Filmes/StarWars1.jpg',
    link: 'Star Wars-img1.html',
  },

  {
    id: 10,
    title: 'Star Wars-img2',
    img: 'Filmes/StarWars2.jpg',
    link: 'Star Wars-img2.html',
  },

  {
    id: 11,
    title: 'Star Wars-img3',
    img: 'Filmes/StarWars3.jpg',
    link: 'Star Wars-img3.html',
  },
  
  {
    id: 12,
    title: 'Star Wars-img4',
    img: 'Filmes/StarWars4.jpg',
    link: 'Star Wars-img4.html',
  },
  
  {
    id: 13,
    title: 'Transformers-img1',
    img: 'Filmes/Transformers1.jpg',
    link: 'Transformers-img1.html',
  },
  ,
  {
    id: 14,
    title: 'Transformers-img2',
    img: 'Filmes/Transformers2.jpg',
    link: 'Transformers-img2.html',
  },
  ,
  {
    id: 15,
    title: 'Transformers-img3',
    img: 'Filmes/Transformers3.jpg',
    link: 'Transformers-img3.html',
  },

  ,
  {
    id: 16,
    title: 'Transformers-img4',
    img: 'Filmes/Transformers4.jpg',
    link: 'Transformers-img4.html',
  },

  ,
  {
    id: 17,
    title: 'Godzilla-img1',
    img: 'Filmes/Godzilla1.jpg',
    link: 'Godzilla-img1.html',
  },

  ,
  {
    id: 18,
    title: 'Godzilla-img2',
    img: 'Filmes/Godzilla2.jpg',
    link: 'Godzilla-img2.html',
  },

  ,
  {
    id: 19,
    title: 'Godzilla-img3',
    img: 'Filmes/Godzilla3.jpg',
    link: 'Godzilla-img3.html',
  },

  ,
  {
    id: 20,
    title: 'Godzilla-img4',
    img: 'Filmes/Godzilla4.jpg',
    link: 'Godzilla-img4.html',
  },

  ,
  {
    id: 21,
    title: 'Jhon Wick-img1',
    img: 'Filmes/JhonWick1.jpg',
    link: 'Jhon Wick-img1.html',
  },

  ,
  {
    id: 22,
    title: 'Jhon Wick-img2',
    img: 'Filmes/JhonWick2.jpg',
    link: 'Jhon Wick-img2.html',
  },

  ,
  {
    id: 23,
    title: 'Jhon Wick-img3',
    img: 'Filmes/JhonWick3.jpg',
    link: 'Jhon Wick-img3.html',
  },

  ,
  {
    id: 24,
    title: 'Jhon Wick-img4',
    img: 'Filmes/JhonWick4.jpg',
    link: 'Jhon Wick-img4.html',
  },

  ,
  {
    id: 25,
    title: 'Back to the future-img1',
    img: 'Filmes/BackToFuture1.jpg',
    link: 'Back to the future-img1.html',
  },

  ,
  {
    id: 26,
    title: 'Back to the future-img2',
    img: 'Filmes/BackToFuture2.jpg',
    link: 'Back to the future-img2.html',
  },

  ,
  {
    id: 27,
    title: 'Back to the future-img3',
    img: 'Filmes/BackToFuture3.jpg',
    link: 'Back to the future-img3.html',
  },

  ,
  {
    id: 28,
    title: 'Back to the future-img4',
    img: 'Filmes/BackToFuture4.jpg',
    link: 'Back to the future-img4.html',
  },

  ,
  {
    id: 29,
    title: 'Breaking Bad-img1',
    img: 'Series/Breaking Bad1.jpg',
    link: 'Breaking Bad-img1.html',
  },

  ,
  {
    id: 30,
    title: 'Breaking Bad-img2',
    img: 'Series/Breaking Bad2.jpg',
    link: 'Breaking Bad-img2.html',
  },

  ,
  {
    id: 31,
    title: 'Breaking Bad-img3',
    img: 'Series/Breaking Bad3.jpg',
    link: 'Breaking Bad-img3.html',
  },

  ,
  {
    id: 32,
    title: 'Breaking Bad-img4',
    img: 'Series/Breaking Bad4.jpg',
    link: 'Breaking Bad-img4.html',
  },

  ,
  {
    id: 33,
    title: 'Friends-img1',
    img: 'Series/Friends1.jpg',
    link: 'Friends-img1.html',
  },

  ,
  {
    id: 34,
    title: 'Friends-img2',
    img: 'Series/Friends2.jpg',
    link: 'Friends-img2.html',
  },

  ,
  {
    id: 35,
    title: 'Friends-img3',
    img: 'Series/Friends3.jpg',
    link: 'Friends-img3.html',
  },

  ,
  {
    id: 36,
    title: 'Friends-img4',
    img: 'Series/Friends4.jpg',
    link: 'Friends-img4.html',
  },

  ,
  {
    id: 37,
    title: 'The Walking Dead-img1',
    img: 'Series/The walking dead1.jpg',
    link: 'The Walking Dead-img1.html',
  },

  ,
  {
    id: 38,
    title: 'The Walking Dead-img2',
    img: 'Series/The walking dead2.jpg',
    link: 'The Walking Dead-img2.html',
  },

  ,
  {
    id: 39,
    title: 'The Walking Dead-img3',
    img: 'Series/The walking dead3.jpg',
    link: 'The Walking Dead-img3.html',
  },

  ,
  {
    id: 40,
    title: 'The Walking Dead-img4',
    img: 'Series/The walking dead4.jpg',
    link: 'The Walking Dead-img4.html',
  },

  ,
  {
    id: 41,
    title: 'Game of Thrones-img1',
    img: 'Series/Game of Thrones1.jpg',
    link: 'Game of Thrones-img1.html',
  },

  ,
  {
    id: 42,
    title: 'Game of Thrones-img2',
    img: 'Series/Game of Thrones2.jpg',
    link: 'Game of Thrones-img2.html',
  },

  ,
  {
    id: 43,
    title: 'Game of Thrones-img3',
    img: 'Series/Game of Thrones3.jpg',
    link: 'Game of Thrones-img3.html',
  },

  ,
  {
    id: 44,
    title: 'Game of Thrones-img4',
    img: 'Series/Game of Thrones4.jpg',
    link: 'Game of Thrones-img4.html',
  },

  ,
  {
    id: 45,
    title: 'Strenger Things-img1',
    img: 'Series/Strenger Things1.jpg',
    link: 'Strenger Things-img1.html',
  },

  ,
  {
    id: 46,
    title: 'Strenger Things-img2',
    img: 'Series/Strenger Things2.jpg',
    link: 'Strenger Things-img2.html',
  },

  ,
  {
    id: 47,
    title: 'Strenger Things-img3',
    img: 'Series/Strenger Things3.jpg',
    link: 'Strenger Things-img3.html',
  },

  ,
  {
    id: 48,
    title: 'Strenger Things-img4',
    img: 'Series/Strenger Things4.jpg',
    link: 'Strenger Things-img4.html',
  },

  ,
  {
    id: 49,
    title: 'Rick and Morty-img1',
    img: 'Series/Rick and Morty1.jpg',
    link: 'Rick and Morty-img1.html',
  },

  ,
  {
    id: 50,
    title: 'Rick and Morty-img2',
    img: 'Series/Rick and Morty2.jpg',
    link: 'Rick and Morty-img2.html',
  },

  ,
  {
    id: 51,
    title: 'Rick and Morty-img3',
    img: 'Series/Rick and Morty3.jpg',
    link: 'Rick and Morty-img3.html',
  },

  ,
  {
    id: 52,
    title: 'Rick and Morty-img4',
    img: 'Series/Rick and Morty4.jpg',
    link: 'Rick and Morty-img4.html',
  },

  ,
  {
    id: 53,
    title: 'Simpsons-img1',
    img: 'Series/Simpsons.jpg',
    link: 'Simpsons-img1.html',
  },

  ,
  {
    id: 54,
    title: 'Simpsons-img2',
    img: 'Series/Simpsons1.jpg',
    link: 'Simpsons-img2.html',
  },

  ,
  {
    id: 55,
    title: 'Simpsons-img3',
    img: 'Series/Simpsons3.jpg',
    link: 'Simpsons-img3.html',
  },

  ,
  {
    id: 56,
    title: 'Simpsons-img4',
    img: 'Series/Simpsons4.jpg',
    link: 'Simpsons-img4.html',
  },

  ,
  {
    id: 57,
    title: 'Call of Duty-img1',
    img: 'Games/COD1.jpg',
    link: 'Call of Duty-img1.html',
  },

  ,
  {
    id: 58,
    title: 'Call of Duty-img2',
    img: 'Games/COD2.jpg',
    link: 'Call of Duty-img2.html',
  },

  ,
  {
    id: 59,
    title: 'Call of Duty-img3',
    img: 'Games/COD3.jpg',
    link: 'Call of Duty-img3.html',
  },

  ,
  {
    id: 60,
    title: 'Call of Duty-img4',
    img: 'Games/COD4.jpg',
    link: 'Call of Duty-img4.html',
  },

  ,
  {
    id: 61,
    title: 'Gta-img1',
    img: 'Games/GTA1.jpg',
    link: 'Gta-img1.html',
  },

  ,
  {
    id: 62,
    title: 'Gta-img2',
    img: 'Games/GTA2.jpg',
    link: 'Gta-img2.html',
  },

  ,
  {
    id: 63,
    title: 'Gta-img3',
    img: 'Games/GTA3.jpg',
    link: 'Gta-img3.html',
  },

  ,
  {
    id: 64,
    title: 'Gta-img4',
    img: 'Games/GTA4.jpg',
    link: 'Gta-img4.html',
  },

  ,
  {
    id: 65,
    title: 'Red Dead Redemption-img1',
    img: 'Games/Red Dead1.jpg',
    link: 'Red Dead Redemption-img1.html',
  },

  ,
  {
    id: 66,
    title: 'Red Dead Redemption-img2',
    img: 'Games/Red Dead2.jpg',
    link: 'Red Dead Redemption-img2.html',
  },

  ,
  {
    id: 67,
    title: 'Red Dead Redemption-img3',
    img: 'Games/Red Dead3.jpg',
    link: 'Red Dead Redemption-img3.html',
  },

  ,
  {
    id: 68,
    title: 'Red Dead Redemption-img4',
    img: 'Games/Red Dead4.jpg',
    link: 'Red Dead Redemption-img4.html',
  },

  ,
  {
    id: 69,
    title: 'Resident Evil-img1',
    img: 'Games/RE1.jpg',
    link: 'Resident Evil-img1.html',
  },

  ,
  {
    id: 70,
    title: 'Resident Evil-img2',
    img: 'Games/RE2.jpg',
    link: 'Resident Evil-img2.html',
  },

  ,
  {
    id: 71,
    title: 'Resident Evil-img3',
    img: 'Games/RE3.jpg',
    link: 'Resident Evil-img3.html',
  },

  ,
  {
    id: 72,
    title: 'Resident Evil-img4',
    img: 'Games/RE4.jpg',
    link: 'Resident Evil-img4.html',
  },

  ,
  {
    id: 73,
    title: 'LOL-img1',
    img: 'Games/LOL1.jpg',
    link: 'LOL-img1.html',
  },

  ,
  {
    id: 74,
    title: 'LOL-img2',
    img: 'Games/LOL2.jpg',
    link: 'LOL-img2.html',
  },

  ,
  {
    id: 75,
    title: 'LOL-img3',
    img: 'Games/LOL3.jpg',
    link: 'LOL-img3.html',
  },

  ,
  {
    id: 76,
    title: 'LOL-img4',
    img: 'Games/LOL4.jpg',
    link: 'LOL-img4.html',
  },

  ,
  {
    id: 77,
    title: 'Fortenite-img1',
    img: 'Games/Fortnite1.jpg',
    link: 'Fortenite-img1.html',
  },

  ,
  {
    id: 78,
    title: 'Fortenite-img2',
    img: 'Games/Fortnite2.jpg',
    link: 'Fortenite-img2.html',
  },

  ,
  {
    id: 79,
    title: 'Fortenite-img3',
    img: 'Games/Fortnite3.jpg',
    link: 'Fortenite-img3.html',
  },

  ,
  {
    id: 80,
    title: 'Fortenite-img4',
    img: 'Games/Fortnite4.jpg',
    link: 'Fortenite-img4.html',
  },

  ,
  {
    id: 81,
    title: 'Dragon Ball-img1',
    img: 'animes/Dragon Ball1.jpg',
    link: 'Dragon Ball-img1.html',
  },

  ,
  {
    id: 82,
    title: 'Dragon Ball-img2',
    img: 'animes/Dragon Ball2.jpg',
    link: 'Dragon Ball-img2.html',
  },

  ,
  {
    id: 83,
    title: 'Dragon Ball-img3',
    img: 'animes/Dragon Ball3.jpg',
    link: 'Dragon Ball-img3.html',
  },

  ,
  {
    id: 84,
    title: 'Dragon Ball-img4',
    img: 'animes/Dragon Ball4.jpg',
    link: 'Dragon Ball-img4.html',
  },

  ,
  {
    id: 85,
    title: 'Naruto-img1',
    img: 'animes/Naruto1.jpg',
    link: 'Naruto-img1.html',
  },

  ,
  {
    id: 86,
    title: 'Naruto-img2',
    img: 'animes/Naruto2.jpg',
    link: 'Naruto-img2.html',
  },

  ,
  {
    id: 87,
    title: 'Naruto-img3',
    img: 'animes/Naruto3.jpg',
    link: 'Naruto-img3.html',
  },

  ,
  {
    id: 88,
    title: 'Naruto-img4',
    img: 'animes/Naruto4.jpg',
    link: 'Naruto-img4.html',
  },

  ,
  {
    id: 89,
    title: 'One Peace-img1',
    img: 'animes/One Peace1.jpg',
    link: 'One Peace-img1.html',
  },

  ,
  {
    id: 90,
    title: 'One Peace-img2',
    img: 'animes/One Peace2.jpg',
    link: 'One Peace-img2.html',
  },

  ,
  {
    id: 91,
    title: 'One Peace-img3',
    img: 'animes/One Peace3.jpg',
    link: 'One Peace-img3.html',
  },

  ,
  {
    id: 92,
    title: 'One Peace-img4',
    img: 'animes/One Peace4.jpg',
    link: 'One Peace-img4.html',
  },

  ,
  {
    id: 93,
    title: 'Batman-img1',
    img: 'Herois/Batman1.jpg',
    link: 'Batman-img1.html',
  },

  ,
  {
    id: 94,
    title: 'Batman-img2',
    img: 'Herois/Batman2.jpg',
    link: 'Batman-img2.html',
  },

  ,
  {
    id: 95,
    title: 'Batman-img3',
    img: 'Herois/Batman3.jpg',
    link: 'Batman-img3.html',
  },

  ,
  {
    id: 96,
    title: 'Batman-img4',
    img: 'Herois/Batman4.jpg',
    link: 'Batman-img4.html',
  },

  ,
  {
    id: 97,
    title: 'Super Man-img1',
    img: 'Herois/Super Man1.jpg',
    link: 'SuperMan-img1.html',
  },

  ,
  {
    id: 98,
    title: 'Super Man-img2',
    img: 'Herois/Super Man2.jpg',
    link: 'SuperMan-img2.html',
  },

  ,
  {
    id: 99,
    title: 'Super Man-img3',
    img: 'Herois/Super Man3.jpg',
    link: 'SuperMan-img3.html',
  },

  ,
  {
    id: 100,
    title: 'Super Man-img4',
    img: 'Herois/Super Man4.jpg',
    link: 'SuperMan-img4.html',
  },

  ,
  {
    id: 101,
    title: 'Liga da justiça-img1',
    img: 'Herois/justice league1.jpg',
    link: 'Justice League-img1.html',
  },

  ,
  {
    id: 102,
    title: 'Liga da justiça-img2',
    img: 'Herois/justice league2.jpg',
    link: 'Justice League-img2.html',
  },

  ,
  {
    id: 103,
    title: 'Liga da justiça-img3',
    img: 'Herois/justice league3.jpg',
    link: 'Justice League-img3.html',
  },

  ,
  {
    id: 104,
    title: 'Liga da justiça-img4',
    img: 'Herois/justice league4.jpg',
    link: 'Justice League-img4.html',
  },

  ,
  {
    id: 105,
    title: 'Homem Aranha-img1',
    img: 'Herois/SA1.jpg',
    link: 'SpiderMan-img1.html',
  },

  ,
  {
    id: 106,
    title: 'Homem Aranha-img2',
    img: 'Herois/SA2.jpg',
    link: 'SpiderMan-img2.html',
  },

  ,
  {
    id: 107,
    title: 'Homem Aranha-img3',
    img: 'Herois/SA3.jpg',
    link: 'SpiderMan-img3.html',
  },

  ,
  {
    id: 108,
    title: 'Homem Aranha-img4',
    img: 'Herois/SA4.jpg',
    link: 'SpiderMan-img4.html',
  },

  ,
  {
    id: 109,
    title: 'Homem de ferro-img1',
    img: 'Herois/Iron1.jpg',
    link: 'IronMan-img1.html',
  },

  ,
  {
    id: 110,
    title: 'Homem de ferro-img2',
    img: 'Herois/Iron2.jpg',
    link: 'IronMan-img2.html',
  },

  ,
  {
    id: 111,
    title: 'Homem de ferro-img3',
    img: 'Herois/Iron3.jpg',
    link: 'IronMan-img3.html',
  },

  ,
  {
    id: 112,
    title: 'Homem de ferro-img4',
    img: 'Herois/Iron4.jpg',
    link: 'IronMan-img4.html',
  },

  ,
  {
    id: 113,
    title: 'Capitão America-img1',
    img: 'Herois/Captain America1.jpg',
    link: 'Captain America-img1.html',
  },

  ,
  {
    id: 114,
    title: 'Capitão America-img2',
    img: 'Herois/Captain America2.jpg',
    link: 'Captain America-img2.html',
  },

  ,
  {
    id: 115,
    title: 'Capitão America-img3',
    img: 'Herois/Captain America3.jpg',
    link: 'Captain America-img3.html',
  },

  ,
  {
    id: 116,
    title: 'Capitão America-img4',
    img: 'Herois/Captain America4.jpg',
    link: 'Captain America-img4.html',
  },

  ,
  {
    id: 117,
    title: 'Vingadores-img1',
    img: 'Herois/Avengers1.jpg',
    link: 'Avengers-img1.html',
  },

  ,
  {
    id: 118,
    title: 'Vingadores-img2',
    img: 'Herois/Avengers2.jpg',
    link: 'Avengers-img2.html',
  },

  ,
  {
    id: 119,
    title: 'Vingadores-img3',
    img: 'Herois/Avengers3.jpg',
    link: 'Avengers-img3.html',
  },

  ,
  {
    id: 120,
    title: 'Vingadores-img4',
    img: 'Herois/Avengers4.jpg',
    link: 'Avengers-img4.html',
  },

  ,
  {
    id: 121,
    title: 'AESTHETIC-img1',
    img: 'Arsthetic/Aesthetic1.jpg',
    link: 'AESTHETIC-img1.html',
  },

  ,
  {
    id: 122,
    title: 'AESTHETIC-img2',
    img: 'Arsthetic/Aesthetic2.jpg',
    link: 'AESTHETIC-img2.html',
  },

  ,
  {
    id: 123,
    title: 'AESTHETIC-img3',
    img: 'Arsthetic/Aesthetic3.jpg',
    link: 'AESTHETIC-img3.html',
  },

  ,
  {
    id: 124,
    title: 'AESTHETIC-img4',
    img: 'Arsthetic/Aesthetic4.jpg',
    link: 'AESTHETIC-img4.html',
  },

  ,
  {
    id: 125,
    title: 'AESTHETIC-img5',
    img: 'Arsthetic/Aesthetic5.jpg',
    link: 'AESTHETIC-img5.html',
  },

  ,
  {
    id: 126,
    title: 'AESTHETIC-img6',
    img: 'Arsthetic/Aesthetic6.jpg',
    link: 'AESTHETIC-img6.html',
  },

  ,
  {
    id: 127,
    title: 'AESTHETIC-img7',
    img: 'Arsthetic/Aesthetic7.jpg',
    link: 'AESTHETIC-img7.html',
  },

  ,
  {
    id: 128,
    title: 'AESTHETIC-img8',
    img: 'Arsthetic/Aesthetic8.jpg',
    link: 'AESTHETIC-img8.html',
  },

  ,
  {
    id: 129,
    title: 'Deserto-img1',
    img: 'Natureza/Desert1.jpg',
    link: 'Deserto-img1.html',
  },

  ,
  {
    id: 130,
    title: 'Deserto-img2',
    img: 'Natureza/Desert2.jpg',
    link: 'Deserto-img2.html',
  },

  ,
  {
    id: 131,
    title: 'Deserto-img3',
    img: 'Natureza/Desert3.jpg',
    link: 'Deserto-img3.html',
  },

  ,
  {
    id: 132,
    title: 'Deserto-img4',
    img: 'Natureza/Desert4.jpg',
    link: 'Deserto-img4.html',
  },

  ,
  {
    id: 133,
    title: 'Floresta-img1',
    img: 'Natureza/Forest1.jpg',
    link: 'Forest-img1.html',
  },

  ,
  {
    id: 134,
    title: 'Floresta-img2',
    img: 'Natureza/Forest2.jpg',
    link: 'Forest-img2.html',
  },

  ,
  {
    id: 135,
    title: 'Floresta-img3',
    img: 'Natureza/Forest3.jpg',
    link: 'Forest-img3.html',
  },

  ,
  {
    id: 136,
    title: 'Floresta-img4',
    img: 'Natureza/Forest4.jpg',
    link: 'Forest-img4.html',
  },

  ,
  {
    id: 137,
    title: 'Oceano-img1',
    img: 'Natureza/Ocean1.jpg',
    link: 'Ocean-img1.html',
  },

  ,
  {
    id: 138,
    title: 'Oceano-img2',
    img: 'Natureza/Ocean2.jpg',
    link: 'Ocean-img2.html',
  },

  ,
  {
    id: 139,
    title: 'Oceano-img3',
    img: 'Natureza/Ocean3.jpg',
    link: 'Ocean-img3.html',
  },

  ,
  {
    id: 140,
    title: 'Oceano-img4',
    img: 'Natureza/Ocean4.jpg',
    link: 'Ocean-img4.html',
  },

  ,
  {
    id: 141,
    title: 'Universo-img1',
    img: 'Natureza/Space1.jpg',
    link: 'Space-img1.html',
  },

  ,
  {
    id: 142,
    title: 'Universo-img2',
    img: 'Natureza/Space2.jpg',
    link: 'Space-img2.html',
  },

  ,
  {
    id: 143,
    title: 'Universo-img3',
    img: 'Natureza/Space3.jpg',
    link: 'Space-img3.html',
  },

  ,
  {
    id: 144,
    title: 'Universo-img4',
    img: 'Natureza/Space4.jpg',
    link: 'Space-img4.html',
  },

  ,
  {
    id: 145,
    title: 'Peaky Blinders-img1',
    img: 'Series/peaky blinders1.jpg',
    link: 'Peaky Blinders-img1.html',
  },

  ,
  {
    id: 145,
    title: 'Peaky Blinders-img2',
    img: 'Series/peaky blinders2.jpg',
    link: 'Peaky Blinders-img2.html',
  },

  ,
  {
    id: 145,
    title: 'Peaky Blinders-img3',
    img: 'Series/peaky blinders3.jpg',
    link: 'Peaky Blinders-img3.html',
  },

  ,
  {
    id: 145,
    title: 'Peaky Blinders-img4',
    img: 'Series/peaky blinders4.jpg',
    link: 'Peaky Blinders-img4.html',
  },

  ,
  {
    id: 146,
    title: 'HunterXHunter-img1',
    img: 'animes/Hunter X Hunter1.jpg',
    link: 'HunterXHunter-img1.html',
  },

  ,
  {
    id: 147,
    title: 'HunterXHunter-img2',
    img: 'animes/Hunter X Hunter2.jpg',
    link: 'HunterXHunter-img2.html',
  },

  ,
  {
    id: 148,
    title: 'HunterXHunter-img3',
    img: 'animes/Hunter X Hunter3.jpg',
    link: 'HunterXHunter-img3.html',
  },

  ,
  {
    id: 149,
    title: 'HunterXHunter-img4',
    img: 'animes/Hunter X Hunter4.jpg',
    link: 'HunterXHunter-img4.html',
  },


];

searchForm.addEventListener('submit', handleSearchItem);

function handleSearchItem(event) {
  event.preventDefault();
  const [{ value }] = event.target;

  const wallpaperSearchListContainer = document.getElementById(
    'wallpapers-search-list',
  );

  const listSearchFiltered = searchItemsList.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  if(listSearchFiltered.length === 0 || value.trim() === "") {
    wallpaperSearchListContainer.innerHTML = ""

    return
  }

  let wallpaperSearchListContainerItems = ''
  wallpaperSearchListContainer.innerHTML = 'carregando...'

  listSearchFiltered.forEach((currentItem) => {
    wallpaperSearchListContainerItems += `
    <div>
      <h1 class="Titulo">${currentItem.title}</h1>
      <br>
      <img  src="${currentItem.img}" alt="${currentItem.title}" class="imagem2"> 
      <div>
        <br>
        <a href="${currentItem.link}" target="_blank" class="buttonDownload">Download</a>
      </div>
    </div>
    `;
  });

  setTimeout(() => {
    wallpaperSearchListContainer.innerHTML = wallpaperSearchListContainerItems
  }, 200)
}
