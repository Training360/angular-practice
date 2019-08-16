# Projekt leírása

## Feladat
Egy Webshop létrehozása tetszőleges témában.

## Oldalak
### Admin felület
A webshop admin felülete, ami két oldalt kell hogy tartalmazzon. A lista oldalak  
tartalma szűrhatő és rendezhető legyen.
* `admin/orders` ezen az oldalon jelenjen meg a rendelések listanézete
* `admin/products` ezen az oldaln jelenjen meg a termékek listanézete
* Aloldal: `admin/orders/:id` egy order szerkesztése
* Aloldal: `admin/products/:id` egy termék szerkesztése
(törlés + létrehozás opcionális)

### Webshop vásárlói felület
A webshop azon oldalai, ahol a vásárlók böngészik a termékeket és leadják a  
rendeléseket.  
Oldalai:  
* `` Index oldal, ezen az oldalon egy rövid ismertető legyen a webshopról.
* `products` ezen az oldalon a termékek listája jelenik meg, kattintásra átvisz az 
egyedi termékoldalra.
* `products/:id` az egyedi termékoldal, ahol nagy képpel és összes adattal látható 
a termék és leadható a rendelés

## Szabályok
Alap: 90%
Opciókkal: 100%  
A csapatok 4 fősek, 2 - 2 ember dolgozik az admin és a vásárlói felületen. 

### Munkamegosztás
* 2 ember admin felület, 2 ember vásárlói felület.
* Vásárlói felület: 1 ember termék litázás NodeJs + Angular, 1 ember egyedi 
termék oldal + rendelés,  NodeJS + Angular
* Admin felület: 1 ember orders listázás + szerkesztés, 1 ember products listázás 
+ szerkesztés
* Legalább 10 termék és 10 rendelés legyen.  
* Használjátok a példákat a projektből és az eddigi .*-demo -kból.  

## Anyagok
[Diagram](https://drive.google.com/file/d/1NHCctIs4iTf3X17poyaRgw9Lhllw9zVx/view?usp=sharing)
