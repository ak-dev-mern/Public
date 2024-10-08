let bookData = [
  {
    id: 1,
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "asset/images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
    status: "Not Available",
  },
  {
    id: 2,
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "asset/images/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
    status: "Not Available",
  },
  {
    id: 3,
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "asset/images/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
    status: "Not Available",
  },
  {
    id: 4,
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "asset/images/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: 1700,
    status: "Not Available",
  },
  {
    id: 5,
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "asset/images/the-book-of-job.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: 600,
    status: "Available",
  },
  {
    id: 6,
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "asset/images/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
    status: "Available",
  },
  {
    id: 7,
    author: "Unknown",
    country: "Iceland",
    imageLink: "asset/images/njals-saga.jpg",
    language: "Old Norse",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Nj\u00e1l's Saga",
    year: 1350,
    status: "Available",
  },
  {
    id: 8,
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "asset/images/pride-and-prejudice.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
    status: "Available",
  },
  {
    id: 9,
    author: "Honor\u00e9 de Balzac",
    country: "France",
    imageLink: "asset/images/le-pere-goriot.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    pages: 443,
    title: "Le P\u00e8re Goriot",
    year: 1835,
    status: "Available",
  },
  {
    id: 10,
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    imageLink: "asset/images/molloy-malone-dies-the-unnamable.jpg",
    language: "French, English",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    pages: 256,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    year: 1952,
    status: "Available",
  },
  {
    id: 11,
    author: "Giovanni Boccaccio",
    country: "Italy",
    imageLink: "asset/images/the-decameron.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/The_Decameron\n",
    pages: 1024,
    title: "The Decameron",
    year: 1351,
    status: "Available",
  },
  {
    id: 12,
    author: "Jorge Luis Borges",
    country: "Argentina",
    imageLink: "asset/images/ficciones.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Ficciones\n",
    pages: 224,
    title: "Ficciones",
    year: 1965,
    status: "Available",
  },
  {
    id: 13,
    author: "Emily Bront\u00eb",
    country: "United Kingdom",
    imageLink: "asset/images/wuthering-heights.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    pages: 342,
    title: "Wuthering Heights",
    year: 1847,
    status: "Available",
  },
  {
    id: 14,
    author: "Albert Camus",
    country: "Algeria, French Empire",
    imageLink: "asset/images/l-etranger.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    pages: 185,
    title: "The Stranger",
    year: 1942,
    status: "Available",
  },
  {
    id: 15,
    author: "Paul Celan",
    country: "Romania, France",
    imageLink: "asset/images/poems-paul-celan.jpg",
    language: "German",
    link: "\n",
    pages: 320,
    title: "Poems",
    year: 1952,
    status: "Available",
  },
  {
    id: 16,
    author: "Louis-Ferdinand C\u00e9line",
    country: "France",
    imageLink: "asset/images/voyage-au-bout-de-la-nuit.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    pages: 505,
    title: "Journey to the End of the Night",
    year: 1932,
    status: "Available",
  },
  {
    id: 17,
    author: "Miguel de Cervantes",
    country: "Spain",
    imageLink: "asset/images/don-quijote-de-la-mancha.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Don_Quixote\n",
    pages: 1056,
    title: "Don Quijote De La Mancha",
    year: 1610,
    status: "Available",
  },
  {
    id: 18,
    author: "Geoffrey Chaucer",
    country: "England",
    imageLink: "asset/images/the-canterbury-tales.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    pages: 544,
    title: "The Canterbury Tales",
    year: 1450,
    status: "Available",
  },
  {
    id: 19,
    author: "Anton Chekhov",
    country: "Russia",
    imageLink: "asset/images/stories-of-anton-chekhov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
    pages: 194,
    title: "Stories",
    year: 1886,
    status: "Available",
  },
  {
    id: 20,
    author: "Joseph Conrad",
    country: "United Kingdom",
    imageLink: "asset/images/nostromo.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nostromo\n",
    pages: 320,
    title: "Nostromo",
    year: 1904,
    status: "Available",
  },
  {
    id: 21,
    author: "Charles Dickens",
    country: "United Kingdom",
    imageLink: "asset/images/great-expectations.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Great_Expectations\n",
    pages: 194,
    title: "Great Expectations",
    year: 1861,
    status: "Available",
  },
  {
    id: 22,
    author: "Denis Diderot",
    country: "France",
    imageLink: "asset/images/jacques-the-fatalist.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
    pages: 596,
    title: "Jacques the Fatalist",
    year: 1796,
    status: "Available",
  },
  {
    id: 23,
    author: "Alfred D\u00f6blin",
    country: "Germany",
    imageLink: "asset/images/berlin-alexanderplatz.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
    pages: 600,
    title: "Berlin Alexanderplatz",
    year: 1929,
    status: "Available",
  },
  {
    id: 24,
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "asset/images/crime-and-punishment.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
    pages: 551,
    title: "Crime and Punishment",
    year: 1866,
    status: "Available",
  },
  {
    id: 25,
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "asset/images/the-idiot.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Idiot\n",
    pages: 656,
    title: "The Idiot",
    year: 1869,
    status: "Available",
  },
  {
    id: 26,
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "asset/images/the-possessed.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
    pages: 768,
    title: "The Possessed",
    year: 1872,
    status: "Available",
  },
  {
    id: 27,
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "asset/images/the-brothers-karamazov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
    pages: 824,
    title: "The Brothers Karamazov",
    year: 1880,
    status: "Available",
  },
  {
    id: 28,
    author: "George Eliot",
    country: "United Kingdom",
    imageLink: "asset/images/middlemarch.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Middlemarch\n",
    pages: 800,
    title: "Middlemarch",
    year: 1871,
    status: "Available",
  },
  {
    id: 29,
    author: "Ralph Ellison",
    country: "United States",
    imageLink: "asset/images/invisible-man.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Invisible_Man\n",
    pages: 581,
    title: "Invisible Man",
    year: 1952,
    status: "Available",
  },
  {
    id: 30,
    author: "Euripides",
    country: "Greece",
    imageLink: "asset/images/medea.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Medea_(play)\n",
    pages: 104,
    title: "Medea",
    year: 431,
    status: "Available",
  },
  {
    id: 31,
    author: "William Faulkner",
    country: "United States",
    imageLink: "asset/images/absalom-absalom.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
    pages: 313,
    title: "Absalom, Absalom!",
    year: 1936,
    status: "Available",
  },
  {
    id: 32,
    author: "William Faulkner",
    country: "United States",
    imageLink: "asset/images/the-sound-and-the-fury.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
    pages: 326,
    title: "The Sound and the Fury",
    year: 1929,
    status: "Available",
  },
  {
    id: 33,
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "asset/images/madame-bovary.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Madame_Bovary\n",
    pages: 528,
    title: "Madame Bovary",
    year: 1857,
    status: "Available",
  },
  {
    id: 34,
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "asset/images/l-education-sentimentale.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Sentimental_Education\n",
    pages: 606,
    title: "Sentimental Education",
    year: 1869,
    status: "Available",
  },
  {
    id: 35,
    author: "Federico Garc\u00eda Lorca",
    country: "Spain",
    imageLink: "asset/images/gypsy-ballads.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
    pages: 218,
    title: "Gypsy Ballads",
    year: 1928,
    status: "Available",
  },
  {
    id: 36,
    author: "Gabriel Garc\u00eda M\u00e1rquez",
    country: "Colombia",
    imageLink: "asset/images/one-hundred-years-of-solitude.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude\n",
    pages: 417,
    title: "One Hundred Years of Solitude",
    year: 1967,
    status: "Available",
  },
  {
    id: 37,
    author: "Gabriel Garc\u00eda M\u00e1rquez",
    country: "Colombia",
    imageLink: "asset/images/love-in-the-time-of-cholera.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
    pages: 368,
    title: "Love in the Time of Cholera",
    year: 1985,
    status: "Available",
  },
  {
    id: 38,
    author: "Johann Wolfgang von Goethe",
    country: "Saxe-Weimar",
    imageLink: "asset/images/faust.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
    pages: 158,
    title: "Faust",
    year: 1832,
    status: "Available",
  },
  {
    id: 39,
    author: "Nikolai Gogol",
    country: "Russia",
    imageLink: "asset/images/dead-souls.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Dead_Souls\n",
    pages: 432,
    title: "Dead Souls",
    year: 1842,
    status: "Available",
  },
  {
    id: 40,
    author: "G\u00fcnter Grass",
    country: "Germany",
    imageLink: "asset/images/the-tin-drum.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
    pages: 600,
    title: "The Tin Drum",
    year: 1959,
    status: "Available",
  },
  {
    id: 41,
    author: "Jo\u00e3o Guimar\u00e3es Rosa",
    country: "Brazil",
    imageLink: "asset/images/the-devil-to-pay-in-the-backlands.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
    pages: 494,
    title: "The Devil to Pay in the Backlands",
    year: 1956,
    status: "Available",
  },
  {
    id: 42,
    author: "Knut Hamsun",
    country: "Norway",
    imageLink: "asset/images/hunger.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
    pages: 176,
    title: "Hunger",
    year: 1890,
    status: "Available",
  },
  {
    id: 43,
    author: "Ernest Hemingway",
    country: "United States",
    imageLink: "asset/images/the-old-man-and-the-sea.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
    pages: 128,
    title: "The Old Man and the Sea",
    year: 1952,
    status: "Available",
  },
  {
    id: 44,
    author: "Homer",
    country: "Greece",
    imageLink: "asset/images/the-iliad-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Iliad\n",
    pages: 608,
    title: "Iliad",
    year: 735,
    status: "Available",
  },
  {
    id: 45,
    author: "Homer",
    country: "Greece",
    imageLink: "asset/images/the-odyssey-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Odyssey\n",
    pages: 374,
    title: "Odyssey",
    year: 800,
    status: "Available",
  },
  {
    id: 46,
    author: "Henrik Ibsen",
    country: "Norway",
    imageLink: "asset/images/a-Dolls-house.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
    pages: 68,
    title: "A Doll's House",
    year: 1879,
    status: "Available",
  },
  {
    id: 47,
    author: "James Joyce",
    country: "Irish Free State",
    imageLink: "asset/images/ulysses.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
    pages: 228,
    title: "Ulysses",
    year: 1922,
    status: "Available",
  },
  {
    id: 48,
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "asset/images/stories-of-franz-kafka.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
    pages: 488,
    title: "Stories",
    year: 1924,
    status: "Available",
  },
  {
    id: 49,
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "asset/images/the-trial.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Trial\n",
    pages: 160,
    title: "The Trial",
    year: 1925,
    status: "Available",
  },
  {
    id: 50,
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "asset/images/the-castle.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
    pages: 352,
    title: "The Castle",
    year: 1926,
    status: "Available",
  },
  {
    id: 51,
    author: "K\u0101lid\u0101sa",
    country: "India",
    imageLink: "asset/images/the-recognition-of-shakuntala.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
    pages: 147,
    title: "The recognition of Shakuntala",
    year: 150,
    status: "Available",
  },
  {
    id: 52,
    author: "Yasunari Kawabata",
    country: "Japan",
    imageLink: "asset/images/the-sound-of-the-mountain.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
    pages: 288,
    title: "The Sound of the Mountain",
    year: 1954,
    status: "Available",
  },
  {
    id: 53,
    author: "Nikos Kazantzakis",
    country: "Greece",
    imageLink: "asset/images/zorba-the-greek.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
    pages: 368,
    title: "Zorba the Greek",
    year: 1946,
    status: "Available",
  },
  {
    id: 54,
    author: "D. H. Lawrence",
    country: "United Kingdom",
    imageLink: "asset/images/sons-and-lovers.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
    pages: 432,
    title: "Sons and Lovers",
    year: 1913,
    status: "Available",
  },
  {
    id: 55,
    author: "Halld\u00f3r Laxness",
    country: "Iceland",
    imageLink: "asset/images/independent-people.jpg",
    language: "Icelandic",
    link: "https://en.wikipedia.org/wiki/Independent_People\n",
    pages: 470,
    title: "Independent People",
    year: 1934,
    status: "Available",
  },
  {
    id: 56,
    author: "Giacomo Leopardi",
    country: "Italy",
    imageLink: "asset/images/poems-giacomo-leopardi.jpg",
    language: "Italian",
    link: "\n",
    pages: 184,
    title: "Poems",
    year: 1818,
    status: "Available",
  },
  {
    id: 57,
    author: "Doris Lessing",
    country: "United Kingdom",
    imageLink: "asset/images/the-golden-notebook.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
    pages: 688,
    title: "The Golden Notebook",
    year: 1962,
    status: "Available",
  },
  {
    id: 58,
    author: "Astrid Lindgren",
    country: "Sweden",
    imageLink: "asset/images/pippi-longstocking.jpg",
    language: "Swedish",
    link: "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
    pages: 160,
    title: "Pippi Longstocking",
    year: 1945,
    status: "Available",
  },
  {
    id: 59,
    author: "Lu Xun",
    country: "China",
    imageLink: "asset/images/diary-of-a-madman.jpg",
    language: "Chinese",
    link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
    pages: 389,
    title: "Diary of a Madman",
    year: 1918,
    status: "Available",
  },
  {
    id: 60,
    author: "Naguib Mahfouz",
    country: "Egypt",
    imageLink: "asset/images/children-of-gebelawi.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
    pages: 355,
    title: "Children of Gebelawi",
    year: 1959,
    status: "Available",
  },
  {
    id: 61,
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "asset/images/buddenbrooks.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Buddenbrooks\n",
    pages: 736,
    title: "Buddenbrooks",
    year: 1901,
    status: "Available",
  },
  {
    id: 62,
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "asset/images/the-magic-mountain.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
    pages: 720,
    title: "The Magic Mountain",
    year: 1924,
    status: "Available",
  },
  {
    id: 63,
    author: "Herman Melville",
    country: "United States",
    imageLink: "asset/images/moby-dick.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Moby-Dick\n",
    pages: 378,
    title: "Moby Dick",
    year: 1851,
    status: "Available",
  },
  {
    id: 64,
    author: "Michel de Montaigne",
    country: "France",
    imageLink: "asset/images/essais.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
    pages: 404,
    title: "Essays",
    year: 1595,
    status: "Available",
  },
  {
    id: 65,
    author: "Elsa Morante",
    country: "Italy",
    imageLink: "asset/images/history.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/History_(novel)\n",
    pages: 600,
    title: "History",
    year: 1974,
    status: "Available",
  },
  {
    id: 66,
    author: "Toni Morrison",
    country: "United States",
    imageLink: "asset/images/beloved.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
    pages: 321,
    title: "Beloved",
    year: 1987,
    status: "Available",
  },
  {
    id: 67,
    author: "Murasaki Shikibu",
    country: "Japan",
    imageLink: "asset/images/the-tale-of-genji.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
    pages: 1360,
    title: "The Tale of Genji",
    year: 1006,
    status: "Available",
  },
  {
    id: 68,
    author: "Robert Musil",
    country: "Austria",
    imageLink: "asset/images/the-man-without-qualities.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
    pages: 365,
    title: "The Man Without Qualities",
    year: 1931,
    status: "Available",
  },
  {
    id: 69,
    author: "Vladimir Nabokov",
    country: "Russia/United States",
    imageLink: "asset/images/lolita.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Lolita\n",
    pages: 317,
    title: "Lolita",
    year: 1955,
    status: "Available",
  },
  {
    id: 70,
    author: "George Orwell",
    country: "United Kingdom",
    imageLink: "asset/images/nineteen-eighty-four.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
    pages: 272,
    title: "Nineteen Eighty-Four",
    year: 1949,
    status: "Available",
  },
  {
    id: 71,
    author: "Ovid",
    country: "Roman Empire",
    imageLink: "asset/images/the-metamorphoses-of-ovid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Metamorphoses\n",
    pages: 576,
    title: "Metamorphoses",
    year: 100,
    status: "Available",
  },
  {
    id: 72,
    author: "Fernando Pessoa",
    country: "Portugal",
    imageLink: "asset/images/the-book-of-disquiet.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
    pages: 272,
    title: "The Book of Disquiet",
    year: 1928,
    status: "Available",
  },
  {
    id: 73,
    author: "Edgar Allan Poe",
    country: "United States",
    imageLink: "asset/images/tales-and-poems-of-edgar-allan-poe.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
    pages: 842,
    title: "Tales",
    year: 1950,
    status: "Available",
  },
  {
    id: 74,
    author: "Marcel Proust",
    country: "France",
    imageLink: "asset/images/a-la-recherche-du-temps-perdu.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
    pages: 2408,
    title: "In Search of Lost Time",
    year: 1920,
    status: "Available",
  },
  {
    id: 75,
    author: "Fran\u00e7ois Rabelais",
    country: "France",
    imageLink: "asset/images/gargantua-and-pantagruel.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
    pages: 623,
    title: "Gargantua and Pantagruel",
    year: 1533,
    status: "Available",
  },
  {
    id: 76,
    author: "Juan Rulfo",
    country: "Mexico",
    imageLink: "asset/images/pedro-paramo.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
    pages: 124,
    title: "Pedro P\u00e1ramo",
    year: 1955,
    status: "Available",
  },
  {
    id: 77,
    author: "Rumi",
    country: "Sultanate of Rum",
    imageLink: "asset/images/the-masnavi.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Masnavi\n",
    pages: 438,
    title: "The Masnavi",
    year: 1236,
    status: "Available",
  },
  {
    id: 78,
    author: "Salman Rushdie",
    country: "United Kingdom, India",
    imageLink: "asset/images/midnights-children.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
    pages: 536,
    title: "Midnight's Children",
    year: 1981,
    status: "Available",
  },
  {
    id: 79,
    author: "Saadi",
    country: "Persia, Persian Empire",
    imageLink: "asset/images/bostan.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Bustan_(book)\n",
    pages: 298,
    title: "Bostan",
    year: 1257,
    status: "Available",
  },
  {
    id: 80,
    author: "Tayeb Salih",
    country: "Sudan",
    imageLink: "asset/images/season-of-migration-to-the-north.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
    pages: 139,
    title: "Season of Migration to the North",
    year: 1966,
    status: "Available",
  },
  {
    id: 81,
    author: "Jos\u00e9 Saramago",
    country: "Portugal",
    imageLink: "asset/images/blindness.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
    pages: 352,
    title: "Blindness",
    year: 1995,
    status: "Available",
  },
  {
    id: 82,
    author: "William Shakespeare",
    country: "England",
    imageLink: "asset/images/hamlet.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Hamlet\n",
    pages: 432,
    title: "Hamlet",
    year: 1603,
    status: "Available",
  },
  {
    id: 83,
    author: "William Shakespeare",
    country: "England",
    imageLink: "asset/images/king-lear.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/King_Lear\n",
    pages: 384,
    title: "King Lear",
    year: 1608,
    status: "Available",
  },
  {
    id: 84,
    author: "William Shakespeare",
    country: "England",
    imageLink: "asset/images/othello.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Othello\n",
    pages: 314,
    title: "Othello",
    year: 1609,
    status: "Available",
  },
  {
    id: 85,
    author: "Sophocles",
    country: "Greece",
    imageLink: "asset/images/oedipus-the-king.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
    pages: 88,
    title: "Oedipus the King",
    year: 430,
    status: "Available",
  },
  {
    id: 86,
    author: "Stendhal",
    country: "France",
    imageLink: "asset/images/le-rouge-et-le-noir.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
    pages: 576,
    title: "The Red and the Black",
    year: 1830,
    status: "Available",
  },
  {
    id: 87,
    author: "Laurence Sterne",
    country: "England",
    imageLink: "asset/images/the-life-and-opinions-of-tristram-shandy.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
    pages: 640,
    title: "The Life And Opinions of Tristram Shandy",
    year: 1760,
    status: "Available",
  },
  {
    id: 88,
    author: "Italo Svevo",
    country: "Italy",
    imageLink: "asset/images/confessions-of-zeno.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
    pages: 412,
    title: "Confessions of Zeno",
    year: 1923,
    status: "Available",
  },
  {
    id: 89,
    author: "Jonathan Swift",
    country: "Ireland",
    imageLink: "asset/images/gullivers-travels.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
    pages: 178,
    title: "Gulliver's Travels",
    year: 1726,
    status: "Available",
  },
  {
    id: 90,
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "asset/images/war-and-peace.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/War_and_Peace\n",
    pages: 1296,
    title: "War and Peace",
    year: 1867,
    status: "Available",
  },
  {
    id: 91,
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "asset/images/anna-karenina.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Anna_Karenina\n",
    pages: 864,
    title: "Anna Karenina",
    year: 1877,
    status: "Available",
  },
  {
    id: 92,
    author: "Leo Tolstoy",
    country: "Ruasset/ssia",
    imageLink: "asset/images/the-death-of-ivan-ilyich.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
    pages: 92,
    title: "The Death of Ivan Ilyich",
    year: 1886,
    status: "Available",
  },
  {
    id: 93,
    author: "Mark Twain",
    country: "United States",
    imageLink: "asset/images/the-adventures-of-huckleberry-finn.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
    pages: 224,
    title: "The Adventures of Huckleberry Finn",
    year: 1884,
    status: "Available",
  },
  {
    id: 94,
    author: "Valmiki",
    country: "India",
    imageLink: "asset/images/ramayana.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Ramayana\n",
    pages: 152,
    title: "Ramayana",
    year: 450,
    status: "Available",
  },
  {
    id: 95,
    author: "Virgil",
    country: "Roman Empire",
    imageLink: "asset/images/the-aeneid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Aeneid\n",
    pages: 442,
    title: "The Aeneid",
    year: 23,
    status: "Available",
  },
  {
    id: 96,
    author: "Vyasa",
    country: "India",
    imageLink: "asset/images/the-mahab-harata.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Mahabharata\n",
    pages: 276,
    title: "Mahabharata",
    year: 700,
    status: "Available",
  },
  {
    id: 97,
    author: "Walt Whitman",
    country: "United States",
    imageLink: "asset/images/leaves-of-grass.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
    pages: 152,
    title: "Leaves of Grass",
    year: 1855,
    status: "Available",
  },
  {
    id: 98,
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "asset/images/mrs-dalloway.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
    pages: 216,
    title: "Mrs Dalloway",
    year: 1925,
    status: "Available",
  },
  {
    id: 99,
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "asset/images/to-the-lighthouse.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
    pages: 209,
    title: "To the Lighthouse",
    year: 1927,
    status: "Available",
  },
  {
    id: 100,
    author: "Marguerite Yourcenar",
    country: "France/Belgium",
    imageLink: "asset/images/memoirs-of-hadrian.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
    pages: 408,
    title: "Memoirs of Hadrian",
    year: 1951,
    status: "Available",
  },
];
let transactions = [
  {
    tid: 1000,
    personId: "Ram Kumar (1733)",
    bookId: 1,
    tDate: " 2024-08-12",
    rDate: "",
    status: "Borrow",
  },
  {
    tid: 1001,
    personId: "Senthil (9094)",
    bookId: 2,
    tDate: " 2024-08-10",
    rDate: "",
    status: "Borrow",
  },
  {
    tid: 1002,
    personId: "Ram Kumar (1733)",
    bookId: 3,
    tDate: "2024-07-27",
    rDate: "",
    status: "Borrow",
  },
  {
    tid: 1003,
    personId: "Balamurugan (7301)",
    bookId: 4,
    tDate: "2024-08-20",
    rDate: "",
    status: "Borrow",
  },
];

const bookIdEl = document.getElementById("bookId");
const personIdEl = document.getElementById("personId");
const borrowDateEl = document.getElementById("borrowDate");
const bookSelf = document.querySelector("#bookSelf");
const selectLanguage = document.getElementById("selectLanguage");
const searchBook = document.getElementById("searchBook");
const bookTable = document.getElementById("bookBorrowTable");
const addBook = document.querySelector("#saveBook");
// Modal title change
const modalBorrowTitle = document.getElementById("title-borrow");
const alertMsgBorrow = document.getElementById("alert-borrow-delete");
// Modal open and hide
const modalBorrow = document.querySelector("#modalBorrow");
const ourModal = new bootstrap.Modal(modalBorrow, {});

// Filter book data in select option by language
function loadComboLanguages() {
  const languages = [...new Set(bookData.map((book) => book.language))];
  languages.sort();
  languages.forEach(function (item) {
    let lang = document.createElement("option");
    lang.list = item;
    lang.text = item;
    selectLanguage.appendChild(lang);
  });
}
loadComboLanguages();
// Filter book data by search input
selectLanguage.addEventListener("change", function () {
  loadBook(this.value);
});
searchBook.addEventListener("input", function () {
  const qry = this.value;
  const searchBook = qry.trim().toLowerCase();
  const lang = selectLanguage.value;
  if (searchBook != "") {
    let data = [];
    if (lang == "All") {
      data = bookData;
    } else {
      const filteredBook = bookData.filter((book) => book.language == lang);
      data = filteredBook;
    }
    const serachFilterBook = data.filter(
      (book) =>
        book.title.toLowerCase().includes(searchBook) ||
        book.author.toLowerCase().includes(searchBook)
    );
    loadBook(lang, "Search", serachFilterBook);
  } else {
    loadBook(lang);
  }
});
// Dashboard counter
function counter() {
  const totalBook = document.getElementById("totalBook");
  const totalAuthor = document.getElementById("totalAuthor");
  const totalLanguages = document.getElementById("totalLanguages");
  const totalCountry = document.getElementById("totalCountry");
  let book = [...new Set(bookData.map((index) => index))];
  totalBook.innerHTML = book.length;
  let author = [...new Set(bookData.map((book) => book.author))];
  totalAuthor.innerHTML = author.length;
  let lang = [...new Set(bookData.map((book) => book.language))];
  totalLanguages.innerHTML = lang.length;
  let country = [...new Set(bookData.map((book) => book.country))];
  totalCountry.innerHTML = country.length;
  loadBook();
}
counter();
// ClearAll
function clearAllBookInput() {
  personIdEl.value = "";
  borrowDateEl.value = "";
}
// Load Users in the input field
function loadUserDetails() {
  loadUser();
  let userData = users;
  let userIdList = userData.map((user) => user);
  let personId = document.getElementById("personId");
  personId.innerHTML = ` <option value="">Select your User </option>`;
  userIdList.forEach((user) => {
    personId.innerHTML += `<option value='${user.userName} (${user.id})'>${user.userName} (${user.id})</option>`;
  });
}
loadUserDetails();

// Load book borrow data in table view
function loadBorrowBookData() {
  bookTable.innerHTML = "";
  transactions.forEach((book, index) => {
    bookTable.innerHTML += `<tr>
  <td>${index + 1}</td>
    <td>${book.tid}</td>
  <td class="text-start">${book.personId}</td>
  <td>${book.bookId}</td>
  <td>${book.tDate}</td>
  <td>${book.rDate}</td>
  <td>${book.status}</td>
  </tr>`;
  });
}
loadBorrowBookData();

// Load book & Borrow & Return book details

function loadBook(
  lang = "All",
  type = "Filter",
  searchData = [],
  actionId = null,
  actionType = null
) {
  let data = [];

  // Step 1: Load and display books
  if (lang == "All") {
    data = bookData;
  } else if (lang != "All" && type == "Filter") {
    data = bookData.filter((book) => book.language == lang);
  } else if (type == "Search") {
    data = searchData;
  }

  // Display books
  if (data.length > 0) {
    let bookHTML = data.map(
      (book, index) =>
        `<div class="col">
          <div class="card shadow book-card">
            <div class="card-img position-relative">
              <img class="card-img-top" src="${
                book.imageLink
              }" alt="" style="height: 180px;">
            </div>
            <div class="number">${index + 1}</div>
            <div class="card-body">
              <h6 class="card-title single-line">${book.title}</h6>
              <p class="card-text single-line" style="font-size:14px;">${
                book.author
              }</p>
              <span class="badge bg-success lang">${book.language}</span>
            </div>
            <div class="card-footer">
              ${
                book.status == "Not Available"
                  ? "<button type='button' onclick='loadBook(null, null, null, " +
                    book.id +
                    ", \"return\")' class='btn btn-danger btn-sm btn-return'>Return</button>"
                  : "<button type='button' onclick='loadBook(null, null, null, " +
                    book.id +
                    ", \"borrow\")' class='btn btn-primary btn-sm btn-borrow'>Borrow</button>"
              }
            </div>
            <div id="notAvailable" class="${
              book.status == "Not Available" ? "block" : ""
            }">Book is Not Available</div>
          </div>
        </div>`
    );
    bookHTML = bookHTML.join(" ");
    bookSelf.innerHTML = bookHTML;
  }

  // Step 2: Handle book actions
  if (actionId && actionType) {
    const heading = document.querySelector(".heading");
    heading.innerHTML = actionType === "borrow" ? "Borrow Book" : "Return Book";

    const book = bookData.find((book) => book.id === actionId);
    if (!book) {
      console.error("Book not found.");
      return;
    }

    const bookimageEl = document.querySelector("#book-image");
    bookimageEl.innerHTML = `
      <div class="card shadow modal-card" style="width:230px; height: 320px;">
        <div><img class="card-img-top" src="${book.imageLink}" alt="${book.title}" style="height: 200px;"></div>
        <div class="card-body">
          <h6 class="card-title single-line">${book.title}</h6>
          <p class="card-text single-line" style="font-size:14px;">${book.author}</p>
          <span class="badge bg-success lang">${book.language}</span>
          <div class="number" id="txtNumber">${book.id}</div>
        </div>
      </div>
    `;

    const handleActionClick = () => {
      const personId = personIdEl.value;
      const date = borrowDateEl.value;
      const status = actionType === "borrow" ? "Borrow" : "Return";
      const rDate = actionType === "borrow" ? "" : date;
      const bookId = Number(txtNumber.innerText);

      if (personId && date) {
        if (actionType === "borrow") {
          const bookObj = {
            tid: Math.floor(1000 + Math.random() * 9000),
            bookId: bookId,
            personId: personId,
            tDate: date,
            rDate: rDate,
            status: status,
          };

          const bookIndex = bookData.findIndex((book) => book.id === bookId);
          if (bookIndex !== -1) {
            bookData[bookIndex].status = "Not Available";
          }

          transactions.push(bookObj);
          loadBook();
          loadUserDetails();
          customModal("Book Borrow Status", "Book borrowed successfully...");
        } else if (actionType === "return") {
          const transaction = transactions.find(
            (tran) => tran.personId === personId && tran.bookId === bookId
          );

          if (transaction) {
            transactions = transactions.map((tran) =>
              tran.bookId === bookId
                ? { ...tran, rDate: date, status: status }
                : tran
            );

            bookData = bookData.map((b) =>
              b.id === bookId ? { ...b, status: "Available" } : b
            );

            loadBook();
            loadUserDetails();
            customModal("Book Return Status", "Book returned successfully...");
          } else {
            customModal(
              "Warning...",
              "No transactions found for the selected person and book."
            );
          }
        }

        loadBorrowBookData();
        clearAllBookInput();
        ourModal.hide();
        loadUserDetails();

        loadBook(lang, type, searchData); // Reload books after action
      } else {
        customModal("Warning...", "Please fill all details.");
      }
    };

    if (addBook) {
      addBook.removeEventListener("click", handleActionClick);
      addBook.addEventListener("click", handleActionClick);
    } else {
      customModal("Warning...", "AddBook button element is not defined");
    }

    ourModal.show();
  }
}

// Usage
loadBook("All");
