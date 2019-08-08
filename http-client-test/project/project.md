# Projekt leírás

## Bootstrap vagy Bootswatch
Alkalmazd a Bootstrap vagy Bootswatch stílusokat az oldalon. (FontAwesome használata)

## Navigáció
Hozz létre egy navigációs kompnenset és helyezd el minden oldalon 
a lap tetején. Linkek: Home, Users, About(opcionális)

## Router
Konfiguráld a routert az app.module fájlban.

## Home oldal
Legyenek kártyák, a következő adatokkal:  
* A user -ek száma, aktív és nem aktív külön is.
* Az összes user összesített balance -a.
* Azon user -ek száma, akiknek a kedvenc gyümölcse az alma. (az összes fajta előfordulásainak a száma)

## Users
Legyen megjelenítve egy táblázatban az összes User, legyen a táblázat 
kereshető és rendezhető. (az oda-vissza rendezés opcionális)
* A táblázat sorokban az utolsó cellában legyenek a kezelőgombok, a módosításhoz és a törléshez.
* Nem kell a celláknak szerkeszthetőnek lennie.
* A kezelőgombok közül a módosítás egy külön oldalon nyissa meg a user -t.
* Legyen a táblázat felett egy új hozzáadása gomb, ami szintén külön oldalra visz.
* A törlés előtt legyen biztosnági kérdés.

## User szerkesztés
Legyen egy olyan oldal, ahová a user szerkesztés gomb visz. Url paraméterként kapja meg a szerkeszteni kívánt felhasználó id -jét és az alapján kérje le a távoli adatbzis mögött található speciális .json állományból. Egy űralpon jelenjenek meg a felhasználó adatai, és küldésre legyen mentés a service -en 
keresztül. (Szerkeszté után automatikusan vigyen vissza a lista oldalra.)

## User hozzáadás
Készíts külön komponenst, ami a user -ek hozzáadásáért felel. Legyen rajta egy űrlap, ahol adatbevitel után a submit eseményre elküldésre kerülnek az adatok a service -en keresztül. (Hozzáadás után automatikusan vigyen vissza a lista oldalra.)

## Pihenten érkezz hétfőn.
## Ne felejtsd el használni az Angular dokumentációt.
[Angular](https://angular.io)


