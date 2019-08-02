# A projekt leírása

## Felépítés
Az alkalmazás váza készen van, neked csak a komponenseket kell befejezned.  
Klónozás után ne felejtsd el futtatni az `npm i` parancsot a projektmappában.  

## Hogyan dolgozzatok?
Először készítsétek el az index oldal tartalmát, majd alkossatok 2x2 -es 
csapatokat és mind a két oldalt külön páros készítse el. Jelöljétek ki, hogy a 
csapat melyik tagjának a repo -jába dolgoztok és oda push -oljon mindneki.

## Adatok elérhetősége
A tesztadatok az `src\app\model\mock-data.ts` fájlban vannak. Ha ezt 
importáljátok az adott komponensbe, akkor egyszerűen elérhetitek benne az 
adott tömböt.

## IndexComponent
* Helye: `src/app/page/index-component`
* Az oldal fejléce legyen: `Dashboard` és a komponensből legyen interpolálva.
* Készíts egy egyszerű dashboard -ot, ahol a munkavállalók és a számlák számát 
a `dashboard.JPG` képen láthatóhoz hasonlóan megjeleníted.

## EmployeeComponent
* Helye: `src/app/page/employee-component`
* Az oldal fejléce legyen: `Employees` és a komponensből legyen interpolálva.
* Készíts egy csíkozott bootstrap táblázatot és abban jelenítsd meg a mock-data 
-ból vett 5 employee -t. Elkészítettem az `Employee` osztályt is, hogy 
könnyebben tudj dolgozni a típussal. 
* A táblázat celláiban input elemek legyenek, ezekben jelenjenek meg az 
employee adatok kétirányú adatkötéssel. A TWO-WAY DATA BINDING MEGKÖVETELI A 
FormsModule IMPORTÁLÁSÁT!
* A `boolean` típusú adatoknál chekcbox -ok jelenjenek meg.

## BillComponent
* Helye: `src/app/page/bill-component`
* Az oldal fejléce legyen: `Bills` és a komponensből legyen interpolálva.
* Készíts egy csíkozott bootstrap táblázatot és abban jelenítsd meg a mock-data 
-ból vett 5 bill -t. Elkészítettem a `Bill` osztályt is, hogy könnyebben tudj 
dolgozni a típussal. 
* A táblázat celláiban input elemek legyenek, ezekben jelenjenek meg az 
employee adatok kétirányú adatkötéssel. A TWO-WAY DATA BINDING MEGKÖVETELI A 
FormsModule IMPORTÁLÁSÁT!
* A `boolean` típusú adatoknál chekcbox -ok jelenjenek meg.

## Extra tartalom
Ha úgy érzed, extra kihívásra vágysz:  
* Használj ikonokat az alkalmazásban, a fontawesome segítségével. A telepítés 
lépései megegyeznek a Bootstrap -nél megismerttel, csupán a telepítendő csomag 
és a beszúrandó .css fájl más értelemszerűen.
* Legyen a táblázat sorok végén egy cella egy show gombbal, ami modális ablakban 
megjeleníti a kattintott sorban található adatokat. 
(Az index.component.html fájlban ott van a kikommentelt példa a használatra.)

_Sok sikert!_
