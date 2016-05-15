# kaiskauda
<br>
Pradinis puslapis - index.html
<br>
Skausmas - kasyraskausmas.html
<br>
Gydymas - skausmogydymas.html
<br>
Pagalba - kurkreiptispagalbos.html
<br>
Svarbu - butinazinoti.html
<br>
Renginiai - renginiai.html
<br>
Apie mus - apiemus.html
<br>

Kaip keisti tekstą:

1. Atsidaryti noritmą puslapį spaudžiant ant jo atitinkamo failo ir paspausti ant pieštuko viršuj dešinėje
2. Pakeisti norimą tekstą. pvz. <nekeisti> Keisti čia </nekeisti> 
3. Trumpai parašykite ką pakeitėte atsiminimui, jei ateityje būtų klaida, bus lengviau atsiminti.
4. Paspaudus šį mygtuką puslapis atsinaujins

![Info 1](https://github.com/Miauwi/kaiskauda/blob/gh-pages/img/info1.jpg)
![Info 2](https://github.com/Miauwi/kaiskauda/blob/gh-pages/img/info2.jpg)


Keičiant index
<br>
Index.html pakeisti į home/html ir įdėti permalink: /home/
<br>
Viduje _includes/header.html pakeisti  "<a href="{{ site.baseurl }}/">" į  "<a href="{{ site.baseurl }}/home">"
<br>
renginiai.html duplikuoti ir pakeisti kopijos pavadinimą į index.html. index.html iškomentuoti Renginių archyvą (<li class="nav-tab">... </li> )