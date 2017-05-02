/*
  A. Cervantes, T. Clark, D. Lenselink, C. Mathiason, K. Smeaton
  CWEB 2101 - Prof. Merns
  2017-04-25
*/

var products = [  
  // --- CPU --- //
  {
    "name" : "i7-7700k",
    "price" : "349.99",
    "itemID" : "C01",
    "rating" : "5",
    "inventory" : "25",
    "url" : "../img/parts/cpu/i7-7700k.jpeg"
  },
  {
    "name" : "i5-7600k",
    "price" : "239.99",
    "itemID" : "C02",
    "rating" : "5",
    "inventory" : "32",
    "url" : "../img/parts/cpu/i5-7600k.jpeg"
  },
  {
    "name" : "Ryzen 7",
    "price" : "329.99",
    "itemID" : "C03",
    "rating" : "5",
    "inventory" : "21",
    "url" : "../img/parts/cpu/Ryzen-7.jpeg"
  },
  {
    "name" : "Ryzen 5",
    "price" : "249.99",
    "itemID" : "C04",
    "rating" : "4",
    "inventory" : "28",
    "url" : "../img/parts/cpu/Ryzen-5.jpeg"
  },
  {
    "name" : "i7-6850k",
    "price" : "609.99",
    "itemID" : "C05",
    "rating" : "4",
    "inventory" : "10",
    "url" : "../img/parts/cpu/i7-6850k.jpeg"
  },
    // --- GPU --- //  
  {
    "name" : "GTX 1080ti",
    "price" : "699.99",
    "itemID" : "G01",
    "rating" : "5",
    "inventory" : "8",
    "url" : "../img/parts/gpu/GTX_1080_Ti.jpeg"
  },
  {
    "name" : "R9 380 OC",
    "price" : "252.99",
    "itemID" : "G02",
    "rating" : "4",
    "inventory" : "14",
    "url" : "../img/parts/gpu/Radeon_R9_380.jpeg"
  },
  {
    "name" : "GTX 1050ti",
    "price" : "134.99",
    "itemID" : "G03",
    "rating" : "5",
    "inventory" : "20",
    "url" : "../img/parts/gpu/GTX_1050_Ti.jpeg"
  },
  {
    "name" : "GTX 780ti",
    "price" : "758.99",
    "itemID" : "G04",
    "rating" : "5",
    "inventory" : "12",
    "url" : "../img/parts/gpu/GTX_780_Ti.jpeg"
  },
  {
    "name" : "RX 480 OC",
    "price" : "199.99",
    "itemID" : "G05",
    "rating" : "4",
    "inventory" : "23",
    "url" : "../img/parts/gpu/Radeon_RX_480.jpeg"
  },
  
  
  // --- MOBO --- //
  {
    "name" : "Asus Rampage V Edition 10",
    "price" : "568.99",
    "itemID" : "M01",
    "rating" : "4",
    "inventory" : "15",
    "url" : "../img/parts/mobo/Rampage_V_Edition.jpeg"
  },
  {
    "name" : "ASRock Fatal1ty X99 Professional Gaming i7",
    "price" : "269.99",
    "itemID" : "M02",
    "rating" : "5",
    "inventory" : "7",
    "url" : "../img/parts/mobo/X99A_Professional_Gaming.jpeg"
  },
  {
    "name" : "MSI Z170A Gaming M5",
    "price" : "149.99",
    "itemID" : "M03",
    "rating" : "4",
    "inventory" : "9",
    "url" : "../img/parts/mobo/Z170A_Gaming_M5.jpeg"
  },
  {
    "name" : "ASUS TUF Z270 Mark I",
    "price" : "219.99",
    "itemID" : "M04",
    "rating" : "4",
    "inventory" : "12",
    "url" : "../img/parts/mobo/ASUS_TUF_Z270_Mark_1.jpeg"
  },
  {
    "name" : "GIGABYTE Aorus Z270X",
    "price" : "199.99",
    "itemID" : "M05",
    "rating" : "4",
    "inventory" : "14",
    "url" : "../img/parts/mobo/Aorus_GA_Z270X.jpeg"
  },
  // --- HDD --- //
  {
    "name" : "TOSHIBA P300 HDWD120XZSTA 2TB",
    "price" : "74.99",
    "itemID" : "H01",
    "rating" : "3",
    "inventory" : "34",
    "url" : "../img/parts/hdd/Toshiba_P300_2TB.jpeg"
  },
  {
    "name" : "WD Blue WD5000AZLX 500GB",
    "price" : "49.99",
    "itemID" : "H02",
    "rating" : "4",
    "inventory" : "23",
    "url" : "../img/parts/hdd/WD_Blue_500GB.jpeg"
  },
  {
    "name" : "Western Digital Black WD1001FALS 1TB",
    "price" : "79.99",
    "itemID" : "H03",
    "rating" : "5",
    "inventory" : "33",
    "url" : "../img/parts/hdd/WD_Black_1TB.jpeg"
  },
  {
    "name" : "Seagate BarraCuda 7200.11 ST31500341AS 1.5TB",
    "price" : "118.99",
    "itemID" : "H04",
    "rating" : "4",
    "inventory" : "17",
    "url" : "../img/parts/hdd/Seagate_BarraCuda_1.5TB.jpeg"
  },
  {
    "name" : "Western Digital Black WD6401AALS 640GB",
    "price" : "67.99",
    "itemID" : "H05",
    "rating" : "4",
    "inventory" : "20",
    "url" : "../img/parts/hdd/WD_Black_640GB.jpeg"
  },
  // --- SSD --- //
  {
    "name" : "Samsung 850 EVO 250GB",
    "price" : "109.99",
    "itemID" : "S01",
    "rating" : "5",
    "inventory" : "25",
    "url" : "../img/parts/ssd/Samsung_850_EVO_250GB.jpeg"
  },
  {
    "name" : "Crucial MX300 525GB",
    "price" : "159.99",
    "itemID" : "S02",
    "rating" : "4",
    "inventory" : "22",
    "url" : "../img/parts/ssd/Crucial_MX300_525GB.jpeg"
  },
  {
    "name" : "Samsung 840 Pro 256GB",
    "price" : "299.99",
    "itemID" : "S03",
    "rating" : "4",
    "inventory" : "28",
    "url" : "../img/parts/ssd/Samsung_840_Pro_256GB.jpeg"
  },
  {
    "name" : "Mushkin Enhanced Chronos 120GB",
    "price" : "156.94",
    "itemID" : "S04",
    "rating" : "3",
    "inventory" : "17",
    "url" : "../img/parts/ssd/Mushkin_Enhanced_120GB.jpeg"
  },
  {
    "name" : "Toshiba OCZ TRION 150 960GB",
    "price" : "279.99",
    "itemID" : "S05",
    "rating" : "3",
    "inventory" : "28",
    "url" : "../img/parts/ssd/Toshiba_OCZ_960GB.jpeg"
  }
];