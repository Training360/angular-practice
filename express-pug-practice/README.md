# Express + Pug gyakorló feladat

## Kezdő lépések
`npm i`  
`npm i -g protractor`  
`webdriver-manager update`  

## Tesztek futtatása
1. console: `webdriver-manager start`
2. console: `npm test`

## Feladatok
- Állítsd át a rendszert pug template motor használatára.
- Helyezz el a megfelelő helyen egy tetszés szerinti favicon -t.
- Távolítsd el az alapértelmezett stílusokat.
- Integráld a projektbe a Bootstrap keretrendszert. (a .js állományokat is és a szükséges függőségeket)
- Hozz létre egy navbart az oldalak tetején, 'sticky' legyen.
- A navbar -on a következő menüpontok legyenek (cím, url): 
    - Home, /
    - Products, /products
    - About, /about
    - Contact, /contact
- Készítsd el a routing beállításokat az összes oldalhoz.
- Az oldalak tartalma egy .container elemben jelenjen meg.
- Home oldal: egy Jumbotron elemben jelenjen meg alapvető információ az oldalról (kötetlen) és egy a elem ami a /products oldalra visz.
- Products oldal: jelenítsd meg a termékeket .card elemekben árral, leírással és egy 'Show' feliratú tovább gombbal, ami egy a elem legyen.
- About oldal: tetszőleges tartalom.
- Contact oldal: jeleníts meg egy űrlapot, amivel visszajelzést tud küldeni a felhasználó.

## Technikai kivitelezés

### Adatforrás
- Töltsd be a listázó oldal route file -jában a module/db modult.
- Az osztály példányosítása után a mockData metódus adja vissza a termékeket.

### Megjelenítés
- Pug template motort használj.
- Ha ismétlődő elemek, listák vannak, azokat az each segítségével jelenítsd meg.
- Pontosan kövesd az utasításokat, ha osztály vagy id van megadva a leírásban.

# MariaDB feladat
## Adatbázis kezelés
- A meglévő db osztályt használd a műveletekhez.
- Hozz létre egy create nevű metódust, ahol a kapott adatokat beszúrod az adatbázisba.
- Hozz létre egy update metódust, ahol az adott id -jű rekordot frissíted.
- Hozz létre egy delete metódust, ahol az adott id -jű rekordot törlöd.

## Frontend
- Legyen egy külön útvonalad, ahol fel lehet venni új terméket. (router.post)
- Legyen egy külön útvonalad, ahol frissíteni lehet a terméket.
- Legyen egy külön útvonalad, ahol törölni lehet a terméket.
- A termékek kártyáit úgy módosítsd, hogy legyen rajtuk törlés gomb is, ami pld: /products/delete/1 url-re visz.
- Hozd létre az oldalakat, ahol hozzá tudsz adni vagy törölni termékeket.
