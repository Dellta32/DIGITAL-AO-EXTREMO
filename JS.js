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



    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)

    li1.appendChild(link1)
    li2.appendChild(link2)
    li3.appendChild(link3)
    li4.appendChild(link4)

    link1.innerText = "sobre"
    link1.href = "#"
    link2.innerText = "Horários"
    link2.href = "horarios.html"
    link3.innerText = "Cardápio"
    link3.href = "#"
    link4.innerText = "blubluBLU"
    link4.href = "#"

    itens.appendChild(ul)


    var conteinerclosebotao = document.createElement("div");
    conteinerclosebotao.classList.add("close-conteiner");

    var closebotao = document.createElement("div");

    conteinerclosebotao.appendChild(closebotao)
    itens.appendChild(conteinerclosebotao);

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
    var flexcont = document.getElementsByClassName("flexconteiner")
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
    var tr10 = document.createElement("tr")
    var tr11 = document.createElement("tr")
    var tr12 = document.createElement("tr")

    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var td5 = document.createElement("td")
    var td6 = document.createElement("td")
    var td7 = document.createElement("td")
    var td8 = document.createElement("td")
    var td9 = document.createElement("td")
    var td10 = document.createElement("td")
    var td11 = document.createElement("td")
    var td12 = document.createElement("td")

    td1.innerText = "EXEMPLO"
    td2.innerText = "balabalba"
    td3.innerText = "balabalba"
    td4.innerText = "-"
    td5.innerText = "balabalba"
    td6.innerText = "balabalba"
    td7.innerText = "ALMOÇO"
    td8.innerText = "balabalba"
    td9.innerText = "balabalba"
    td10.innerText = "-"
    td11.innerText = "balabalba"
    td12.innerText = "balabalba"

    tr1.appendChild(td1)
    tr2.appendChild(td2)
    tr3.appendChild(td3)
    tr4.appendChild(td4)
    tr5.appendChild(td5)
    tr6.appendChild(td6)
    tr7.appendChild(td7)
    tr8.appendChild(td8)
    tr9.appendChild(td9)
    tr10.appendChild(td10)
    tr11.appendChild(td11)
    tr12.appendChild(td12)


    table.appendChild(tr1)
    table.appendChild(tr2)
    table.appendChild(tr3)
    table.appendChild(tr4)
    table.appendChild(tr5)
    table.appendChild(tr6)
    table.appendChild(tr7)
    table.appendChild(tr8)
    table.appendChild(tr9)
    table.appendChild(tr10)
    table.appendChild(tr11)
    table.appendChild(tr12)


    ///condição seletor para tabela///


    var Turma = document.getElementById("Turma").value;
    var Dia = document.getElementById("dia").value;

    if (Dia == "SEG" && Turma == "1AI") {
        td1.innerText = "INGLÊS - LUCAS"
        td2.innerText = "SOCIOLOGIA - MARIANA"
        td3.innerText = "BIOLOGIA - MANUELA"
        td4.innerText = "-"
        td5.innerText = " ED. FISICA - DANIEL"
        td6.innerText = "QUÍMICA - MARCELA"
        td7.innerText = "Almoço"
        td8.innerText = "PROJETO DE VIDA - IARA"
        td9.innerText = "PROJETO DE VIDA - IARA"
        td10.innerText = "-"
        td11.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"
        td12.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"


        td1.classList.add("Lucas")
        td2.classList.add("Mariana")
        td3.classList.add("Manuela")
        
        td5.classList.add("Daniel")
        td6.classList.add("Marcela")

        td8.classList.add("Iara")
        td9.classList.add("Iara")
        
        td12.classList.add("Nancy")
        td11.classList.add("Nancy")
        
    } else if (Turma == "1AI" && Dia == "TER"){

        td1.innerText = "BIOLOGIA - MANUELA "
        td2.innerText = "OFICINAS (UC1) - LUCAS "
        td3.innerText = "OFICINAS (UC1) - LUCAS "
        
        td5.innerText = " ELETIVA ORIENTADA - LEONARDO"
        td6.innerText = " ELETIVA ORIENTADA - LEONARDO"

        td8.innerText = "MATEMÁTICA - JOELSON"
        td9.innerText = "MATEMÁTICA - JOELSON"
        td10.innerText = "-"
        td11.innerText = "ED. FISICA - DANIEL"
        td12.innerText = "GEOGRAFIA - PAULO"

        td1.classList.add("Manuela")
        td2.classList.add("Oficina")
        td3.classList.add("Oficina")
        
        td5.classList.add("Leonardo")
        td6.classList.add("Leonardo")

        td8.classList.add("Sorvetinho")
        td9.classList.add("Sorvetinho")
        
        td12.classList.add("Daniel")
        td11.classList.add("Paulo")
    }else if(Turma == "1AI" && Dia == "QUA"){
        td1.innerText = "PRÁTICAS EXPERIMENTAIS (1) "
        td2.innerText = "HISTORIA - FRANCISCO"
        td3.innerText = "INGLÊS - LUCAS "
        
        td5.innerText = "ELETIVAS"
        td6.innerText = " ELETIVAS"

        td8.innerText = "PORTUGUÊS - ANA GUERRA"
        td9.innerText = "QUÍMICA - MARCELA"

        td11.innerText = "ARTE - LULA"
        td12.innerText = "FISICA - SEM PROFESSOR"

        td1.classList.add("Praticas")
        td2.classList.add("Chico")
        td3.classList.add("Lucas")
        
        td5.classList.add("Eletiva")
        td6.classList.add("Eletiva")

        td8.classList.add("AnaG")
        td9.classList.add("Marcela")
        
        td12.classList.add("Lula")
        td11.classList.add("")

    }else if(Turma == "1AI" && Dia == "QUI"){
        td1.innerText = "ARQUITETURA - LINDEMBERG"
        td2.innerText = "ARQUITETURA - LINDEMBERG"
        td3.innerText = "HISTORIA - FRANCISCO"
        
        td5.innerText = "GEOGRAFIA - PAULO"
        td6.innerText = "INFORMATICA BASICA - MARCELO"

        td8.innerText = "MATEMÁTICA - JOELSON"
        td9.innerText = "ESPANHOL - SEM PROFESSOR"

        td11.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"
        td12.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"

        td1.classList.add("Linduberg")
        td2.classList.add("Linduberg")
        td3.classList.add("Chico")
        
        td5.classList.add("Paulo")
        td6.classList.add("Marcelo")

        td8.classList.add("Sorvetinho")
        td9.classList.add("")
        
        td12.classList.add("Nancy")
        td11.classList.add("Nancy")

}}