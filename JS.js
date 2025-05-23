function menu() {
    var itens = document.createElement("div")
    var nav = document.getElementById("nav").appendChild(itens)

    itens.classList.add("menu")

    var ul = document.createElement("ul")
    ul.classList.add("nav-list")

    var li1 = document.createElement("li")
    var li2 = document.createElement("li")
    var li3 = document.createElement("li")
    var li4 = document.createElement("li")

    var link1 = document.createElement("a")
    var link2 = document.createElement("a")
    var link3 = document.createElement("a")
    var link4 = document.createElement("a")

    li1.appendChild(link1)
    li2.appendChild(link2)
    li3.appendChild(link3)
    li4.appendChild(link4)

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)

    link1.innerText = "sobre"
    link2.innerText = "Horários"
    link3.innerText = "blebleBLE"
    link4.innerText = "blubluBLU"


    itens.appendChild(ul)



    var conteinerclosebotao = document.createElement("div");
    conteinerclosebotao.classList.add("close-conteiner");

    var closebotao = document.createElement("div");

    conteinerclosebotao.appendChild(closebotao)
    itens.appendChild(conteinerclosebotao)
        ;

    closebotao.innerText = "X";
    closebotao.classList.add("menu-close");

    closebotao.onclick = function () {
        var menu = document.querySelector(".menu");

        itens.style.animation = "fade-out 0.5s ease forwards";
        setTimeout(() => { menu.remove(); }, 500);
    }

    itens.appendChild(closebotao);
    itens.appendChild(ul);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.classList.add("nav-list");

    document.addEventListener("click", function (event) {
        var menu = document.querySelector(".menu");
        var burguer = document.querySelector(".burguer");

        if (menu && !menu.contains(event.target) && !burguer.contains(event.target)) {
            menu.style.animation = "fade-out 0.5s ease forwards";
            setTimeout(() => { menu.remove(); }, 500);
        }

    }
    )

}



function tabhorario() {

    var conteinerseletor = document.getElementById("select-cont");
    conteinerseletor.style.animation = "deladin 0.5s ease-out forwards"
    setTimeout(tabelinha, 500)

}

function tabelinha() {

    var divTable = document.getElementById("table-conteiner")
    divTable.classList.add("table-conteiner")

    var table = document.createElement("table")
    table.classList.add("tabela-horario")
    divTable.appendChild(table)

    var tr1 = document.createElement("tr")
    var tr2 = document.createElement("tr")
    var tr3 = document.createElement("tr")
    var tr4 = document.createElement("tr")
    var tr5 = document.createElement("tr")
    var tr6 = document.createElement("tr")
    var tr7 = document.createElement("tr")
    var tr8 = document.createElement("tr")
    var tr9 = document.createElement("tr")

    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var td5 = document.createElement("td")
    var td6 = document.createElement("td")
    var td7 = document.createElement("td")
    var td8 = document.createElement("td")
    var td9 = document.createElement("td")

    td1.innerText= "balabalba"
    td2.innerText= "balabalba"
    td3.innerText= "balabalba"
    td4.innerText= "balabalba"
    td5.innerText= "balabalba"
    td6.innerText= "balabalba"
    td7.innerText= "balabalba"
    td8.innerText= "balabalba"
    td9.innerText= "balabalba"

   tr1.appendChild(td1)
   tr2.appendChild(td2)
   tr3.appendChild(td3)
   tr4.appendChild(td4)
   tr5.appendChild(td5)
   tr6.appendChild(td6)
   tr7.appendChild(td7)
   tr8.appendChild(td8)
   tr8.appendChild(td9)


    table.appendChild(tr1)
    table.appendChild(tr2)
    table.appendChild(tr3)
    table.appendChild(tr4)
    table.appendChild(tr6)
    table.appendChild(tr7)
    table.appendChild(tr8)
    table.appendChild(tr9)


}

