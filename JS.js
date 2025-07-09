function menu() {
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    overlay.style.display = "block"; // Exibe o overlay
    overlay.style.animation = "fadein 0.5s ease forwards"


    var itens = document.createElement("div");
    var nav = document.getElementById("nav").appendChild(itens);

    itens.classList.add("menu");

    var ul = document.createElement("ul");
    ul.classList.add("nav-list");

    ///Adicionado link0 para a pagina index///

    var li0 = document.createElement("li");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    var link0 = document.createElement("a");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");
    var link4 = document.createElement("a");


    ul.appendChild(li0);
    ul.appendChild(li1);;
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    li0.appendChild(link0);
    li1.appendChild(link1);
    li2.appendChild(link2);
    li3.appendChild(link3);
    li4.appendChild(link4);


    link0.innerText = "Home";
    link0.href = "index.html";

    link1.innerText = "sobre";
    link1.href = "sobre.html";

    link2.innerText = "Horários";
    link2.href = "horarios.html";

    link3.innerText = "Cardápio";
    link3.href = "cardapio.html";

    link4.innerText = "area de estudo";
    link4.href = "areaestudo.html";

    itens.appendChild(ul);


    var conteinerclosebotao = document.createElement("div");
    conteinerclosebotao.classList.add("close-conteiner");

    var closebotao = document.createElement("div");

    conteinerclosebotao.appendChild(closebotao)
    itens.appendChild(conteinerclosebotao);

    closebotao.innerText = "X";
    closebotao.classList.add("menu-close");


    closebotao.onclick = function () {
        var menu = document.querySelector(".menu");

        itens.style.animation = "slide-out 0.5s ease forwards";
        overlay.style.animation = "fadeOut 0.5s ease forwards";
        setTimeout(() => { menu.remove(); overlay.remove(); }, 500);


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
            menu.style.animation = "slide-out 0.5s ease forwards";
            overlay.style.animation = "fadeOut 0.5s ease forwards";
            setTimeout(() => { menu.remove(); overlay.remove() }, 500);
        }

    }
    )

    var toggleContainer = document.createElement("div");
    toggleContainer.classList.add("theme-toggle-container");
    
    var toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.id = "theme-toggle";
    toggleInput.classList.add("theme-toggle");
    
    var toggleLabel = document.createElement("label");
    toggleLabel.setAttribute("for", "theme-toggle");
    toggleLabel.classList.add("theme-toggle-label");
    
    var iconeSol = document.createElement("div");
    iconeSol.classList.add("sun");
    
    var iconeLua = document.createElement("div");
    iconeLua.classList.add("moon");
    var star1 = document.createElement("div");
    star1.classList.add("star");
    var star2 = document.createElement("div");
    star2.classList.add("star", "small");
    
    iconeLua.appendChild(star1);
    iconeLua.appendChild(star2);
    
    toggleLabel.appendChild(iconeSol);
    toggleLabel.appendChild(iconeLua);
    
    var themeText = document.createElement("span");
    themeText.classList.add("theme-text");
    themeText.innerText = "Tema";
    
    toggleContainer.appendChild(toggleInput);
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(themeText);
    toggleContainer.style.position = "absolute";
    toggleContainer.style.bottom = "20px";
    toggleContainer.style.right = "20px";
    
    itens.appendChild(toggleContainer);

    toggleInput.addEventListener("change", function () {
        document.body.classList.toggle("dark-theme");
        var nav = document.getElementById("nav");
        nav.classList.toggle("dark-theme");
        var header = document.querySelector("header");
        header.classList.toggle("dark-theme");
    
        var menu = document.querySelector(".menu");
        if (menu) {
            menu.classList.toggle("dark-theme");
        }
    });
    const sun = document.querySelector('.sun')
    const moon = document.querySelector('.moon')
    const button = document.querySelector('.container')

    button.addEventListener('click', () => {
        sun.classList.toggle('visible')
        moon.classList.toggle('visible')
    })

  
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
    divTable.innerHTML = ""

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
    td4.innerText = "lanche - 10:00h - 10:20h"
    td6.innerText = ""
    td7.innerText = "ALMOÇO"
    td8.innerText = ""
    td9.innerText = ""
    td10.innerText = "LAnche- 15:00h - 15:20h"
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

        td5.innerText = " ED. FISICA - DANIEL"
        td6.innerText = "QUÍMICA - MARCELA"

        td8.innerText = "PROJETO DE VIDA - IARA"
        td9.innerText = "PROJETO DE VIDA - IARA"

        td11.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"
        td12.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"


        td1.classList.add("Lucas")
        td2.classList.add("Mariana")
        td3.classList.add("Manuela")

        td5.classList.add("Daniel")
        td6.classList.add("Marcela")

        td8.classList.add("Iara")
        td9.classList.add("Iara")

        td11.classList.add("Nancy")
        td12.classList.add("Nancy")

    }
    else if (Turma == "1AI" && Dia == "TER") {

        td1.innerText = "BIOLOGIA - MANUELA "
        td2.innerText = "OFICINAS (UC1) - LUCAS "
        td3.innerText = "OFICINAS (UC1) - LUCAS "

        td5.innerText = " ELETIVA ORIENTADA - LEONARDO"
        td6.innerText = " ELETIVA ORIENTADA - LEONARDO"

        td8.innerText = "MATEMÁTICA - JOELSON"
        td9.innerText = "MATEMÁTICA - JOELSON"

        td11.innerText = "ED. FISICA - DANIEL"
        td12.innerText = "GEOGRAFIA - PAULO"

        td1.classList.add("Manuela")
        td2.classList.add("Lucas")
        td3.classList.add("Lucas")

        td5.classList.add("Leonardo")
        td6.classList.add("Leonardo")

        td8.classList.add("Sorvetinho")
        td9.classList.add("Sorvetinho")

        td11.classList.add("Daniel")
        td12.classList.add("Paulo")
    }
    else if (Turma == "1AI" && Dia == "QUA") {
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

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("AnaG")
        td9.classList.add("Marcela")

        td11.classList.add("Lula")


    }
    else if (Turma == "1AI" && Dia == "QUI") {
        td1.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td2.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td3.innerText = "HISTORIA - FRANCISCO"

        td5.innerText = "GEOGRAFIA - PAULO"
        td6.innerText = "INFORMÁTICA BÁSICA - MARCELO"

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

        td11.classList.add("Nancy")
        td12.classList.add("Nancy")

    }
    else if (Turma == "1AI" && Dia == "SEX") {
        td1.innerText = "PORTUGUÊS - ANA GUERRA"
        td2.innerText = "PORTUGUÊS - ANA GUERRA"
        td3.innerText = "INFORMÁTICA BÁSICA - MARCELO"

        td5.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td6.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"

        td8.innerText = "FSICA - SEM PROFESSOR"
        td9.innerText = "FILOSOFIA - SEM PROFESSOR"

        td11.innerText = "ORIENTAÇÃO ACADÊMICA - RUZIANE"
        td12.innerText = "ORIENTAÇÃO ACADÊMICA - RUZIANE"

        td1.classList.add("AnaG")
        td2.classList.add("AnaG")
        td3.classList.add("Marcelo")

        td5.classList.add("Linduberg")
        td6.classList.add("Linduberg")

        td11.classList.add("Ruziane")
        td12.classList.add("Ruziane")





    }
    else if (Turma == "1BI" && Dia == "SEG") {
        td1.innerText = "BIOLOGIA - MANUELA"
        td2.innerText = "GEOGRAFIA - PAULO"
        td3.innerText = "ED.FÍSICA - DANIEL"

        td5.innerText = "INGLÊS - LUCAS"
        td6.innerText = "HISTÓRIA - FRANCISCO"

        td8.innerText = "ELETIVA ORIENTADA - LEONARDO"
        td9.innerText = "ELETIVA ORIENTADA - LEONARDO"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "MATEMÁTICA - JOELSON"

        td1.classList.add("Manuela")
        td2.classList.add("Paulo")
        td3.classList.add("Daniel")

        td5.classList.add("Lucas")
        td6.classList.add("Chico")

        td8.classList.add("Leonardo")
        td9.classList.add("Leonardo")

        td11.classList.add("Praticas")
        td12.classList.add("Sorvetinho")

    }

    else if (Turma == "1BI" && Dia == "TER") {
        td1.innerText = "ED.FÍSICA - DANIEL"
        td2.innerText = "OFICINAS - MANUELA"
        td3.innerText = "OFICINAS - MANUELA"

        td5.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td6.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"

        td8.innerText = "BIOLOGIA - MANUELA"
        td9.innerText = "INGLÊS - LUCAS"

        td11.innerText = "INFORMÁTICA BÁSICA - MARCELO"
        td12.innerText = "INFORMÁTICA BÁSICA - MARCELO"

        td1.classList.add("Daniel")
        td2.classList.add("Manuela")
        td3.classList.add("Manuela")

        td5.classList.add("Linduberg")
        td6.classList.add("Linduberg")

        td8.classList.add("Manuela")
        td9.classList.add("Lucas")

        td11.classList.add("Marcelo")
        td12.classList.add("Marcelo")

    }
    else if (Turma == "1BI" && Dia == "QUA") {
        td1.innerText = "SOCIOLOGIA - MARIANA"
        td2.innerText = "NOÇÕES DE ELETRÔNICA - NANCY"
        td3.innerText = "NOÇÕES DE ELETRÔNICA- NANCY"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "QUÍMICA - MARCELA"
        td9.innerText = "ARTE - LULA"

        td11.innerText = "PORTUGUÊS - ANA GUERRA"
        td12.innerText = "PORTUGUÊS - ANA GUERRA"

        td1.classList.add("Mariana")
        td2.classList.add("Nancy")
        td3.classList.add("Nancy")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Marcela")
        td9.classList.add("Lula")

        td11.classList.add("AnaG")
        td12.classList.add("AnaG")

    }
    else if (Turma == "1BI" && Dia == "QUI") {
        td1.innerText = "ESPANHOL - SEM PROFESSOR"
        td2.innerText = "HISTÓRIA - FRANCISCO"
        td3.innerText = "GEOGRAFIA - PAULO"

        td5.innerText = "QUÍMICA - MARCELA"
        td6.innerText = "FÍSICA - SEM PROFESSOR"

        td8.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"
        td9.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"

        td11.innerText = "ORIENTAÇÃO ACADÊMICA - LULA"
        td12.innerText = "ORIENTAÇÃO ACADÊMICA - LULA"


        td2.classList.add("Chico")
        td3.classList.add("Paulo")

        td5.classList.add("Marcela")


        td8.classList.add("Nancy")
        td9.classList.add("Nancy")

        td11.classList.add("Lula")
        td12.classList.add("Lula")

    }
    else if (Turma == "1BI" && Dia == "SEX") {
        td1.innerText = "ARQUITERURA E OREGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td2.innerText = "ARQUITERURA E OREGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td3.innerText = "PORTUGUÊS - ANA GUERRA"

        td5.innerText = "PROJETO DE VIDA - IARA"
        td6.innerText = "PROJETO DE VIDA - IARA"

        td8.innerText = "MATEMÁTICA - JOELSON"
        td9.innerText = "MATEMÁTICA - JOELSON"

        td11.innerText = "FÍSICA - SEM PROFESSOR"
        td12.innerText = "FILOSOFIA - SEM PROFESSOR"

        td1.classList.add("Linduberg")
        td2.classList.add("Linduberg")
        td3.classList.add("AnaG")

        td5.classList.add("Iara")
        td6.classList.add("Iara")

        td8.classList.add("Sorvetinho")
        td9.classList.add("Sorvetinho")




    }
    else if (Turma == "1CI" && Dia == "SEG") {
        td1.innerText = "HISTORIA - FRANCISCO"
        td2.innerText = "INFORMÁTICA BÁSICA - MARCELO"
        td3.innerText = "GEOGRAFIA - PAULO"

        td5.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"
        td6.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"

        td8.innerText = "QUÍMICA - MARCELA"
        td9.innerText = "FISICA - SEM PROFESSOR"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "BIOLOGIA - MANUELA"

        td1.classList.add("Chico")
        td2.classList.add("Marcelo")
        td3.classList.add("Paulo")

        td5.classList.add("Nancy")
        td6.classList.add("Nancy")

        td8.classList.add("Marcela")


        td11.classList.add("Praticas")
        td12.classList.add("Manuela")

    }
    else if (Turma == "1CI" && Dia == "TER") {
        td1.innerText = "SOCIOLOGIA - MARIANA"
        td2.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td3.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"

        td5.innerText = "ED.FÍSICA - DANIEL"
        td6.innerText = "PROJETO DE VIDA - IARA"

        td8.innerText = "PROJETO DE VIDA - IARA"
        td9.innerText = "BIOLOGIA - MANUELA"

        td11.innerText = "MATEMÁTICA - JOELSON"
        td12.innerText = "INGLÊS - LUCAS"

        td1.classList.add("Mariana")
        td2.classList.add("Linduberg")
        td3.classList.add("Linduberg")

        td5.classList.add("Daniel")
        td6.classList.add("Iara")

        td8.classList.add("Iara")
        td9.classList.add("Manuela")

        td11.classList.add("Sorvetinho")
        td12.classList.add("Lucas")

    }
    else if (Turma == "1CI" && Dia == "QUA") {
        td1.innerText = "GEOGRAFIA - PAULO"
        td2.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"
        td3.innerText = "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES - LINDEMBERG"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "ARTE - LULA"
        td9.innerText = "ED.FÍSICA - DANIEL"

        td11.innerText = "MATEMÁTICA - JOELSON"
        td12.innerText = "MATEMÁTICA - JOELSON"

        td1.classList.add("Paulo")
        td2.classList.add("Linduberg")
        td3.classList.add("Linduberg")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Lula")
        td9.classList.add("Daniel")

        td12.classList.add("Sorvetinho")
        td11.classList.add("Sorvetinho")

    }
    else if (Turma == "1CI" && Dia == "QUI") {
        td1.innerText = "INGLÊS - LUCAS"
        td2.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"
        td3.innerText = "NOÇÕES DE ELETRÔNICA E ELETRICIDADE - NANCY"

        td5.innerText = "FÍSICA - SEM PROFESSOR"
        td6.innerText = "PORTUGUÊS - ANA GUERRA"

        td8.innerText = "INFORMÁTICA BÁSICA - MARCELO"
        td9.innerText = "ESPANHOL - SEM PROFESSOR"

        td11.innerText = "QUÍMICA - MARCELO"
        td12.innerText = "FILOSOFIA - SEM PROFESSOR"

        td1.classList.add("Lucas")
        td2.classList.add("Nancy")
        td3.classList.add("Nancy")


        td6.classList.add("AnaG")

        td8.classList.add("Marcelo")


        td11.classList.add("Marcelo")


    }
    else if (Turma == "1CI" && Dia == "SEX") {
        td2.innerText = "ORIENTAÇÃO ACADÊMICA - LULA"
        td1.innerText = "ORIENTAÇÃO ACADÊMICA - LULA"
        td3.innerText = "HISTÓRIA - FRANCISCO"

        td5.innerText = "ELETIVA ORIENTADA - LEONARDO"
        td6.innerText = "ELETIVA ORIENTADA - LEONARDO"

        td8.innerText = "PORTUGUÊS - ANA GUERRA"
        td9.innerText = "PORTUGUÊS - ANA GUERRA"

        td11.innerText = "OFICINAS (UCI) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UCI) - SEM PROFESSOR"

        td1.classList.add("Lula")
        td2.classList.add("Lula")
        td3.classList.add("Chico")

        td5.classList.add("Leonardo")
        td6.classList.add("Leonardo")

        td8.classList.add("AnaG")
        td9.classList.add("AnaG")




    }
    else if (Turma == "1AA" && Dia == "SEG") {
        td1.innerText = "QUÍMICA - MARCELA"
        td2.innerText = "ELETIVA ORIENTADA - EBER RAMOS"
        td3.innerText = "ELETIVA ORIENTADA - EBER RAMOS"

        td5.innerText = "DIREITO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"
        td6.innerText = "DIREITO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"

        td8.innerText = "MATEMÁTICA - JOELSON"
        td9.innerText = "MATEMÁTICA - JOELSON"

        td11.innerText = "INGLÊS - LUCAS"
        td12.innerText = "SOCIOLOGIA - MARIANA"

        td1.classList.add("Marcela")
        td2.classList.add("Eber")
        td3.classList.add("Eber")

        td5.classList.add("Gaspar")
        td6.classList.add("Gaspar")

        td8.classList.add("Sorvetinho")
        td9.classList.add("Sorvetinho")

        td11.classList.add("Lucas")
        td12.classList.add("Mariana")

    }
    else if (Turma == "1AA" && Dia == "TER") {
        td1.innerText = "HISTÓRIA - FRANCISCO"
        td2.innerText = "GEOGRAFIA - PAULO"
        td3.innerText = "ED.FÍSICA - DANIEL"

        td5.innerText = "ORIENTAÇÃO ACADÊMICA - RUTE"
        td6.innerText = "ORIENTAÇÃO ACADÊMICA - RUTE"

        td8.innerText = "FÍSICA - SEM PROFESSOR"
        td9.innerText = "ED.FÍSICA - DANIEL"

        td11.innerText = "DIRIETO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"
        td12.innerText = "DIRIETO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"

        td1.classList.add("Chico")
        td2.classList.add("Paulo")
        td3.classList.add("Daniel")

        td5.classList.add("Rute")
        td6.classList.add("Rute")


        td9.classList.add("Daniel")

        td11.classList.add("Gaspar")
        td12.classList.add("Gaspar")

    }
    else if (Turma == "1AA" && Dia == "QUA") {
        td1.innerText = "HISTÓRIA - FRANCISCO"
        td2.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"
        td3.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "BIOLOGIA - MANUELA"
        td9.innerText = "PORTUGUÊS - ANA GUERRA"

        td11.innerText = "INGLÊS - LUCAS"
        td12.innerText = "QUÍMICA - MARCELA"

        td1.classList.add("Chico")



        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Manuela")
        td9.classList.add("AnaG")

        td11.classList.add("Lucas")
        td12.classList.add("Marcela")

    }
    else if (Turma == "1AA" && Dia == "QUI") {
        td1.innerText = "BIOLOGIA - MANUELA"
        td2.innerText = "PORTUGUÊS - ANA GUERRA"
        td3.innerText = "PORTUGUÊS - ANA GUERRA"

        td5.innerText = "OFICINAS FORMATIVAS (UCI) - MANUELA"
        td6.innerText = "OFICINAS FORMATIVAS (UCI) - MANUELA"

        td8.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"
        td9.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"

        td11.innerText = "MATEMÁTICA - JOELSON"
        td12.innerText = "FILOSOFIA - SEM PROFESSOR"

        td1.classList.add("Manuela")
        td2.classList.add("AnaG")
        td3.classList.add("AnaG")

        td5.classList.add("Manuela")
        td6.classList.add("Manuela")




        td11.classList.add("Sorvetinho")

    }
    else if (Turma == "1AA" && Dia == "SEX") {
        td1.innerText = "PROJETO DE VIDA - IARA"
        td2.innerText = "PROJETO DE VIDA - IARA"
        td3.innerText = "FÍSICA - SEM PROFESSOR"

        td5.innerText = "ARTE - LULA"
        td6.innerText = "INFORMÁTICA - BÁSICA"

        td8.innerText = "INFORMÁTICA - BÁSICA"
        td9.innerText = "GEOGRAFIA - PAULO"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "ESPANHOL - SEM PROFESSOR"

        td1.classList.add("Iara")
        td2.classList.add("Iara")


        td5.classList.add("Lula")
        td6.classList.add("Marcelo")

        td8.classList.add("Marcelo")
        td9.classList.add("Paulo")

        td11.classList.add("Praticas")


    }
    else if (Turma == "1BA" && Dia == "SEG") {
        td1.innerText = "INFORMÁTICA BÁSICA - MARCELO"
        td2.innerText = "ED.FÍSICA - DANIEL"
        td3.innerText = "QUÍMICA - MARCELA"

        td5.innerText = "HISTÓRIA - FRANCISCO"
        td6.innerText = "BIOLOGIA - MANUELA"

        td8.innerText = "DIREITO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"
        td9.innerText = "DIREITO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"

        td11.innerText = "SOCIOLOGIA - MARIANA"
        td12.innerText = "FILOSOFIA - SEM PROFESSOR"

        td1.classList.add("Marcelo")
        td2.classList.add("Daniel")
        td3.classList.add("Marcela")

        td5.classList.add("Chico")
        td6.classList.add("Manuela")

        td8.classList.add("Gaspar")
        td9.classList.add("Gaspar")

        td11.classList.add("Mariana")


    }
    else if (Turma == "1BA" && Dia == "TER") {
        td1.innerText = "INGLÊS - LUCAS"
        td2.innerText = "ESPANHOL - SEM PROFESSOR"
        td3.innerText = "INFORMÁTICA BÁSICA - MARCELO"

        td5.innerText = "FÍSICA - SEM PROFESSOR"
        td6.innerText = "ED.FÍSICA - DANIEL"

        td8.innerText = "DIRIETO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"
        td9.innerText = "DIRIETO EMPRESARIAL, TRABALHISTA E TRIBUTÁRIO - GASPAR"

        td11.innerText = "ORIENTAÇÃO ACADÊMICA - RUTE"
        td12.innerText = "ORIENTAÇÃO ACADÊMICA - RUTE"

        td1.classList.add("Lucas")

        td3.classList.add("Marcelo")


        td6.classList.add("Daniel")

        td8.classList.add("Gaspar")
        td9.classList.add("Gaspar")

        td11.classList.add("Rute")
        td12.classList.add("Rute")

    }
    else if (Turma == "1BA" && Dia == "QUA") {
        td1.innerText = "PROJETO DE VIDA - IARA"
        td2.innerText = "PROJETO DE VIDA - IARA"
        td3.innerText = "PORTUGUÊS - ANA GUERRA"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "MATEMÁTICA - JOELSON"
        td9.innerText = "MATEMÁTICA - JOELSON"

        td11.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"
        td12.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"

        td1.classList.add("Iara")
        td2.classList.add("Iara")


        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Sorvetinho")
        td9.classList.add("Sorvetinho")




    }
    else if (Turma == "1BA" && Dia == "QUI") {
        td1.innerText = "GEOGRAFIA - PAULO"
        td2.innerText = "BIOLOGIA - MANUELA"
        td3.innerText = "INGLÊS - LUCAS"

        td5.innerText = "OFICINAS FORMATIVAS (UCI) - LULA"
        td6.innerText = "OFICINAS FORMATIVAS (UCI) - LULA"

        td8.innerText = "PORTUGUÊS - ANA GUERRA"
        td9.innerText = "PORTUGUÊS - ANA GUERRA"

        td11.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"
        td12.innerText = "QUÍMICA - MARCELA"

        td1.classList.add("Paulo")
        td2.classList.add("Manuela")
        td3.classList.add("Lucas")

        td5.classList.add("Lula")
        td6.classList.add("Lula")

        td8.classList.add("AnaG")
        td9.classList.add("AnaG")


        td12.classList.add("Marcela")


    }
    else if (Turma == "1BA" && Dia == "SEX") {
        td1.innerText = "FÍSICA - SEM PROFESSOR"
        td2.innerText = "HISTÓRIA - FRANCISCO"
        td3.innerText = "GEOGRAFIA - PAULO"

        td5.innerText = "TEORIAS E FUNDAMENTOS DA ADMINISTRAÇÃO - SEM PROFESSOR"
        td6.innerText = "ARTE - LULA"

        td8.innerText = "ELETIVA ORIENTADA - EBER RAMOS"
        td9.innerText = "ELETIVA ORIENTADA - EBER RAMOS"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "MATEMÁTICA - JOELSON"


        td2.classList.add("Chico")
        td3.classList.add("Paulo")


        td6.classList.add("Lula")

        td8.classList.add("Eber")
        td9.classList.add("Eber")

        td11.classList.add("Praticas")
        td12.classList.add("Sorvetinho")

    }
    else if (Turma == "2AI" && Dia == "SEG") {
        td1.innerText = "PORTUGUÊS - EBER RAMOS"
        td2.innerText = "QUÍMICA - MARCELA"
        td3.innerText = "SOCIOLOGIA - MARIANA"

        td5.innerText = "PROJETO DE VIDA - IARA"
        td6.innerText = "PROJETO DE VIDA - IARA"

        td8.innerText = "FÍSICA - SEM PROFESSOR"
        td9.innerText = "INGLÊS - LUCAS"

        td11.innerText = "EMPREENDEDOR -ISMO - RANAILDO"
        td12.innerText = "EMPREENDEDOR -ISMO - RANAILDO"

        td1.classList.add("Eber")
        td2.classList.add("Marcela")
        td3.classList.add("Mariana")

        td5.classList.add("Iara")
        td6.classList.add("Iara")


        td9.classList.add("Lucas")

        td11.classList.add("Ranaildo")
        td12.classList.add("Ranaildo")

    }
    else if (Turma == "2AI" && Dia == "TER") {
        td1.innerText = "PROGRAMAÇÃO WEB I E II - ALLAN"
        td2.innerText = "PROGRAMAÇÃO WEB I E II - ALLAN"
        td3.innerText = "HISTÓRIA - IARA"

        td5.innerText = "TRILHAS (UC1) - CN - SEM PROFESSOR"
        td6.innerText = "TRILHAS (UC1) - CN - SEM PROFESSOR"

        td8.innerText = "TRILHAS (UC2) - CN - MARCELO"
        td9.innerText = "TRILHAS (UC2) - CN - MARCELO"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td1.classList.add("JavaScriptMan")
        td2.classList.add("JavaScriptMan")
        td3.classList.add("Iara")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Eletrilha")
        td9.classList.add("Eletrilha")




    }
    else if (Turma == "2AI" && Dia == "QUA") {
        td1.innerText = "PROGRAMAÇÃO ESTRUTURADA ORIENTADA A OBJETOS - LINDEMBERG"
        td2.innerText = "GEOGRAFIA - PAULO"
        td3.innerText = "PORTUGUÊS - EBER RAMOS"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "PROGRAMAÇÃO WEB I E II - ALLAN"
        td9.innerText = "PROGRAMAÇÃO WEB I E II - ALLAN"

        td11.innerText = "ED.FÍSICA - DANIEL"
        td12.innerText = "ARTE - LULA"

        td1.classList.add("Linduberg")
        td2.classList.add("Paulo")
        td3.classList.add("Eber")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("JavaScriptMan")
        td9.classList.add("JavaScriptMan")

        td11.classList.add("Daniel")
        td12.classList.add("Lula")



    }
    else if (Turma == "2AI" && Dia == "QUI") {
        td1.innerText = "MATEMÁTICA - LEONARDO"
        td2.innerText = "MATEMÁTICA - LEONARDO"
        td3.innerText = "PRÁTICAS EXPERIMENTAIS (1)"

        td5.innerText = "PROGRAMAÇÃO ESTRUTURADA E ORIENTADA A OBJETOS - LINDEMBERG"
        td6.innerText = "PROGRAMAÇÃO ESTRUTURADA E ORIENTADA A OBJETOS - LINDEMBERG"

        td8.innerText = "ESPANHOL - SEM PROFESSOR"
        td9.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td11.innerText = "BIOLOGIA - MARCELO"
        td12.innerText = "FILOSOFIA - SEM PROFESSOR"

        td1.classList.add("Leonardo")
        td2.classList.add("Leonardo")
        td3.classList.add("Praticas")

        td5.classList.add("Linduberg")
        td6.classList.add("Linduberg")


        td9.classList.add("Praticas")

        td11.classList.add("Marcelo")


    }
    else if (Turma == "2AI" && Dia == "SEX") {
        td1.innerText = "OFICINAS (UC1) - MANUELA"
        td2.innerText = "OFICINAS (UC1) - MANUELA"
        td3.innerText = "METODOLOGIA DO TRABALHO CIENTÍFICO (MTC) - LINDEMBERG"

        td5.innerText = "PROGRAMAÇÃO WEB I E II 0 ALLAN"
        td6.innerText = "PROGRAMAÇÃO WEB I E II 0 ALLAN"

        td8.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"
        td9.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"

        td11.innerText = "LÓGICA DE PROGRAMAÇÃO - ALLAN"
        td12.innerText = "LÓGICA DE PROGRAMAÇÃO - ALLAN"

        td1.classList.add("Manuela")
        td2.classList.add("Manuela")


        td5.classList.add("JavaScriptMan")
        td6.classList.add("JavaScriptMan")




        td11.classList.add("JavaScriptMan")
        td12.classList.add("JavaScriptMan")

    }
    else if (Turma == "2AA" && Dia == "SEG") {
        td1.innerText = "HISTÓRIA - IARA"
        td2.innerText = "INGLÊS - LUCAS"
        td3.innerText = "BIOLOGIA - MARCELO"

        td5.innerText = "GEOGRAFIA - PAULO"
        td6.innerText = "ED.FÍSICA - DANIEL"

        td8.innerText = "ORIENTAÇÃO ACADÊMICA - ROSA"
        td9.innerText = "ORIENTAÇÃO ACADÊMICA - ROSA"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "QUÍMICA - MARCELA"

        td1.classList.add("Iara")
        td2.classList.add("Lucas")
        td3.classList.add("Marcelo")

        td5.classList.add("Paulo")
        td6.classList.add("Daniel")

        td8.classList.add("Rosa")
        td9.classList.add("Rosa")

        td11.classList.add("Praticas")
        td12.classList.add("Marcela")

    }
    else if (Turma == "2AA" && Dia == "TER") {
        td1.innerText = "METODOLOGIA DO TRABALHO CIENTÍFICO (MTC) - LINDEMBERG"
        td2.innerText = "SOCIOLOGIA - MARIANA"
        td3.innerText = "MARKETING E SERVIÇOS - RUTE"

        td5.innerText = "TRILHAS (UC1) - LING/CH - LUCAS"
        td6.innerText = "TRILHAS (UC1) - LING/CH - FILOSOFIA - SEM PROFESSOR"

        td8.innerText = "TRILHAS (UC2) LING/CH - DANIEL"
        td9.innerText = "TRILHAS (UC2) LING/CH - IARA"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td1.classList.add("Linduberg")
        td2.classList.add("Mariana")
        td3.classList.add("Rute")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Eletrilha")
        td9.classList.add("Eletrilha")




    }
    else if (Turma == "2AA" && Dia == "QUA") {
        td1.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"
        td2.innerText = "MATEMÁTICA - LEONARDO"
        td3.innerText = "SISTEMA DE INFORMAÇÃO - RANAILDO"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "MARKETINK E SERVIÇOS - RUTE"
        td9.innerText = "MARKETINK E SERVIÇOS - RUTE"

        td11.innerText = "EMPREENDEDOR -ISMO - RANAILDO"
        td12.innerText = "EMPREENDEDOR -ISMO - RANAILDO"


        td2.classList.add("Leonardo")
        td3.classList.add("Ranaildo")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Rute")
        td9.classList.add("Rute")

        td11.classList.add("Ranaildo")
        td12.classList.add("Ranaildo")

    }
    else if (Turma == "2AA" && Dia == "QUI") {
        td1.innerText = "PROJETO DE VIDA - IARA"
        td2.innerText = "PROJETO DE VIDA - IARA"
        td3.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td5.innerText = "SISTEMA DE INFORMAÇÃO - RANAILDO"
        td6.innerText = "SISTEMA DE INFORMAÇÃO - RANAILDO"

        td8.innerText = "ARTE - LULA"
        td9.innerText = "MARKETING E SERVIÇOS - RUTE"

        td11.innerText = "MATEMÁTICA - LEONARDO"
        td12.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"

        td1.classList.add("Iara")
        td2.classList.add("Iara")
        td3.classList.add("Praticas")

        td5.classList.add("Ranaildo")
        td6.classList.add("Ranaildo")

        td8.classList.add("Lula")
        td9.classList.add("Rute")

        td11.classList.add("Leonardo")


    }
    else if (Turma == "2AA" && Dia == "SEX") {
        td1.innerText = "OFICINAS (UC1) - LUCAS"
        td2.innerText = "OFICINAS (UC1) - LUCAS"
        td3.innerText = "FILOSOFIA - SEM PROFESSOR"

        td5.innerText = "PROTUGUÊS - EBER RAMOS"
        td6.innerText = "PROTUGUÊS - EBER RAMOS"

        td8.innerText = "ESPANHOL - SEM PROFESSOR"
        td9.innerText = "FISICA - SEM PROFESSOR"

        td11.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"
        td12.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"

        td1.classList.add("Lucas")
        td2.classList.add("Lucas")


        td5.classList.add("Eber")
        td6.classList.add("Eber")







    }
    else if (Turma == "2BA" && Dia == "SEG") {
        td1.innerText = "SISTEMA DE INFORMAÇÃO - RANAILDO"
        td2.innerText = "PROJETO DE VIDA - IARA"
        td3.innerText = "PROJETO DE VIDA - IARA"

        td5.innerText = "QUÍMICA - MARCELA"
        td6.innerText = "BIOLOGIA - MARCELO"

        td8.innerText = "PORTUGUÊS - EBER RAMOS"
        td9.innerText = "PORTUGUÊS - EBER RAMOS"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "MATEMÁTICA - LEONARDO"

        td1.classList.add("Ranaildo")
        td2.classList.add("Iara")
        td3.classList.add("Iara")

        td5.classList.add("Marcela")
        td6.classList.add("Marcelo")

        td8.classList.add("Eber")
        td9.classList.add("Eber")

        td11.classList.add("Praticas")
        td12.classList.add("Leonardo")

    }
    else if (Turma == "2BA" && Dia == "TER") {
        td1.innerText = "ORIENTAÇÃO ACADÊMICA - ROSA"
        td2.innerText = "ORIENTAÇÃO ACADÊMICA - ROSA"
        td3.innerText = "SOCIOLOGIA - MARIANA"

        td5.innerText = "TRILHAS (UC1) CH - FRANCISCO"
        td6.innerText = "TRILHAS (UC1) CH - FRANCISCO"

        td8.innerText = "TRILHAS (UC2) CH - PAULO"
        td9.innerText = "TRILHAS (UC2) CH - PAULO"

        td11.innerText = "MATEMÁTICA - LEONARDO"
        td12.innerText = "ED.FÍSICA - DANIEL"

        td1.classList.add("Rosa")
        td2.classList.add("Rosa")
        td3.classList.add("Mariana")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Eletrilha")
        td9.classList.add("Eletrilha")

        td11.classList.add("Leonardo")
        td12.classList.add("Daniel")

    }
    else if (Turma == "2BA" && Dia == "QUA") {
        td1.innerText = "SISTEMA DE INFORMAÇÃO - RANAILDO"
        td2.innerText = "SISTEMA DE INFORMAÇÃO - RANAILDO"
        td3.innerText = "ARTE - LULA"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"
        td9.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"

        td11.innerText = "MARKETING E SERVIÇOS - RUTE"
        td12.innerText = "MARKETING E SERVIÇOS - RUTE"

        td1.classList.add("Ranaildo")
        td2.classList.add("Ranaildo")
        td3.classList.add("Lula")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")




        td11.classList.add("Rute")
        td12.classList.add("Rute")

    }
    else if (Turma == "2BA" && Dia == "QUI") {
        td1.innerText = "EMPREENDEDOR -ISMO - RANAILDO"
        td2.innerText = "EMPREENDEDOR -ISMO - RANAILDO"
        td3.innerText = "METODOLOGIA DO TRABALHO CIENTÍFICO (MTC) - LINDEMBERG"

        td5.innerText = "HISTÓRIA - IARA"
        td6.innerText = "FILOSOFIA - SEM PROFESSOR"

        td8.innerText = "GEOGRAFIA - PAULO"
        td9.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td11.innerText = "MARKETING E SERVIÇOS - RUTE"
        td12.innerText = "MARKETING E SERVIÇOS - RUTE"

        td1.classList.add("Ranaildo")
        td2.classList.add("Ranaildo")
        td3.classList.add("Linduberg")

        td5.classList.add("Iara")


        td8.classList.add("Paulo")
        td9.classList.add("Praticas")

        td11.classList.add("Rute")
        td12.classList.add("Rute")

    }
    else if (Turma == "2BA" && Dia == "SEX") {
        td1.innerText = "Oficinas (UC1) - PAULO"
        td2.innerText = "Oficinas (UC1) - PAULO"
        td3.innerText = "INGLÊS - LUCAS"

        td5.innerText = "FILOSOFIA - SEM PROFESSOR"
        td6.innerText = "ESPANHOL - SEM PROFESSOR"

        td8.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"
        td9.innerText = "PLANEJAMENTO ESTRATÉGICO - SEM PROFESSOR"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td1.classList.add("Paulo")
        td2.classList.add("Paulo")
        td3.classList.add("Lucas")










    }
    else if (Turma == "3AI" && Dia == "SEG") {
        td1.innerText = "GEOGRAFIA - PAULO"
        td2.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"
        td3.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"

        td5.innerText = "BIOLOGIA - MARCELO"
        td6.innerText = "SOCIOLOGIA - MARIANA"

        td8.innerText = "INGLÊS - LUCAS"
        td9.innerText = "QUÍMICA - MARCELA"

        td11.innerText = "FILOSOFIA - SEM PROFESSOR"
        td12.innerText = "ESPANHOL - SEM PROFESSOR"

        td1.classList.add("Paulo")
        td2.classList.add("Nancy")
        td3.classList.add("Nancy")

        td5.classList.add("Marcelo")
        td6.classList.add("Mariana")

        td8.classList.add("Lucas")
        td9.classList.add("Marcela")




    }
    else if (Turma == "3AI" && Dia == "TER") {
        td1.innerText = "MATEMÁTICA - LEONARDO"
        td2.innerText = "ED.FÍSICA - DANIEL"
        td3.innerText = "BANCO DE DADOS - ALLAN"

        td5.innerText = "PROJETO DE VIDA - MARIANA"
        td6.innerText = "PROJETO DE VIDA - MARIANA"

        td8.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"
        td9.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"

        td11.innerText = "TRILHAS (UC1) - MAT/CH - MARIANA"
        td12.innerText = "TRILHAS (UC1) - MAT/CH - LEONARDO"

        td1.classList.add("Leonardo")
        td2.classList.add("Daniel")
        td3.classList.add("JavaScriptMan")

        td5.classList.add("Mariana")
        td6.classList.add("Mariana")




        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    }
    else if (Turma == "3AI" && Dia == "QUA") {
        td1.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td2.innerText = "BANCO DE DADOS - ALLAN"
        td3.innerText = "BANCO DE DADOS - ALLAN"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "MTC - RANAILDO"
        td9.innerText = "MTC - RANAILDO"

        td11.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"
        td12.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"

        td1.classList.add("Praticas")
        td2.classList.add("JavaScriptMan")
        td3.classList.add("JavaScriptMan")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Ranaildo")
        td9.classList.add("Ranaildo")

        td11.classList.add("Nancy")
        td12.classList.add("Nancy")

    }
    else if (Turma == "3AI" && Dia == "QUI") {
        td1.innerText = "HISTÓRIA - FRANCISCO"
        td2.innerText = "FÍSICA - SEM PROFESSOR"
        td3.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td5.innerText = "TRILHAS (UC2) MAT/CH - FRANCISCO"
        td6.innerText = "TRILHAS (UC2) MAT/CH - LEONARDO"

        td8.innerText = "MATEMÁTICA - LEONARDO"
        td9.innerText = "ARTE - LULA"

        td11.innerText = "TRILHAS (UC3) MAT/CH - PAULO"
        td12.innerText = "TRILHAS (UC3) MAT/CH - LEONARDO"

        td1.classList.add("Chico")

        td3.classList.add("Praticas")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Leonardo")
        td9.classList.add("Lula")

        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    }
    else if (Turma == "3AI" && Dia == "SEX") {
        td1.innerText = "PORTUGUÊS - EBER RAMOS"
        td2.innerText = "PORTUGUÊS - EBER RAMOS"
        td3.innerText = "BANCO DE DADOS - ALLAN"

        td5.innerText = "OFICINAS (UC1) - PAULO"
        td6.innerText = "OFICINAS (UC1) - PAULO"

        td8.innerText = "BANCO DE DADOS - ALLAN"
        td9.innerText = "BANCO DE DADOS - ALLAN"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td1.classList.add("Eber")
        td2.classList.add("Eber")
        td3.classList.add("JavaScriptMan")

        td5.classList.add("Paulo")
        td6.classList.add("Paulo")

        td8.classList.add("JavaScriptMan")
        td9.classList.add("JavaScriptMan")




    }
    else if (Turma == "3BI" && Dia == "SEG") {
        td1.innerText = "SOCIOLOGIA - MARIANA"
        td2.innerText = "MTC - RANAILDO"
        td3.innerText = "MTC - RANAILDO"

        td5.innerText = "PORTUGUÊS - EBER RAMOS"
        td6.innerText = "PORTUGUÊS - EBER RAMOS"

        td8.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"
        td9.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"

        td11.innerText = "FILOSOFIA - SEM PROFESSOR"
        td12.innerText = "ESPANHOL - SEM PROFESSOR"

        td1.classList.add("Mariana")
        td2.classList.add("Ranaildo")
        td3.classList.add("Ranaildo")

        td5.classList.add("Eber")
        td6.classList.add("Eber")

        td8.classList.add("Nancy")
        td9.classList.add("Nancy")




    }
    else if (Turma == "3BI" && Dia == "TER") {
        td1.innerText = "PROJETO DE VIDA - IARA"
        td2.innerText = "PROJETO DE VIDA - IARA"
        td3.innerText = "HISTÓRIA - FRANCISCO"

        td5.innerText = "BANCO DE DADOS - ALLAN"
        td6.innerText = "BANCO DE DADOS - ALLAN"

        td8.innerText = "MATEMÁTICA - LEONARDO"
        td9.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"

        td11.innerText = "TRILHAS (UC3) LING/CH - LUCAS"
        td12.innerText = "TRILHAS (UC1) LING/CH - MARIANA"

        td1.classList.add("Iara")
        td2.classList.add("Iara")
        td3.classList.add("Chico")

        td5.classList.add("JavaScriptMan")
        td6.classList.add("JavaScriptMan")

        td8.classList.add("Leonardo")


        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    }
    else if (Turma == "3BI" && Dia == "QUA") {
        td1.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td2.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"
        td3.innerText = "ED.FÍSICA - DANIEL"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"
        td9.innerText = "DESENVOLVIMENTO DE SISTEMAS - NANCY"

        td11.innerText = "BANCO DE DADOS - ALLAN"
        td12.innerText = "BANCO DE DADOS - ALLAN"

        td1.classList.add("Praticas")

        td3.classList.add("Daniel")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Nancy")
        td9.classList.add("Nancy")

        td11.classList.add("JavaScriptMan")
        td12.classList.add("JavaScriptMan")

    }
    else if (Turma == "3BI" && Dia == "QUI") {
        td1.innerText = "FÍSICA - SEM PROFESSOR"
        td2.innerText = "INGLÊS - LUCAS"
        td3.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td5.innerText = "TRILHAS (UC2) LING/CH - ANA GUERRA"
        td6.innerText = "TRILHAS (UC2) LING/CH - FRANCISCO"

        td8.innerText = "QUÍMICA - MARCELA"
        td9.innerText = "GEOGRAFIA - PAULO"

        td11.innerText = "TRILHAS (UC1) LING/CH - SEM PROFESSOR"
        td12.innerText = "TRILHAS (UC3) LING/CH - PAULO"


        td2.classList.add("Lucas")
        td3.classList.add("Praticas")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Marcela")
        td9.classList.add("Paulo")

        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    }
    else if (Turma == "3BI" && Dia == "SEX") {
        td1.innerText = "BANCO DE DADOS - ALLAN"
        td2.innerText = "BANCO DE DADOS - ALLAN"
        td3.innerText = "ARTE - LULA"

        td5.innerText = "OFICINAS (UC1) - LUCAS"
        td6.innerText = "OFICINAS (UC1) - LUCAS"

        td8.innerText = "MATEMÁTICA - LEONARDO"
        td9.innerText = "BIOLOGIA - MARCELO"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td2.classList.add("JavaScriptMan")
        td1.classList.add("JavaScriptMan")
        td3.classList.add("Lula")

        td5.classList.add("Lucas")
        td6.classList.add("Lucas")

        td8.classList.add("Leonardo")
        td9.classList.add("Marcelo")




    }
    else if (Turma == "3AA" && Dia == "SEG") {
        td1.innerText = "ED.FÍSICA - DANIEL"
        td2.innerText = "MÉTODOS E TÉCNICAS ADMINISTRATIVAS - GASPAR"
        td3.innerText = "HISTÓRIA - FRANCISCO"

        td5.innerText = "MTC - RANAILDO"
        td6.innerText = "MTC - RANAILDO"

        td8.innerText = "PROJETO DE VIDA - MARIANA"
        td9.innerText = "PROJETO DE VIDA - MARIANA"

        td11.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td12.innerText = "FILOSOFIA - SEM PROFESSOR"

        td1.classList.add("Daniel")
        td2.classList.add("Gaspar")
        td3.classList.add("Chico")

        td5.classList.add("Ranaildo")
        td6.classList.add("Ranaildo")

        td8.classList.add("Mariana")
        td9.classList.add("Mariana")

        td11.classList.add("Praticas")


    }
    else if (Turma == "3AA" && Dia == "TER") {
        td1.innerText = "GEOGRAFIA - PAULO"
        td2.innerText = "MATEMÁTICA - LEONARDO"
        td3.innerText = "MATEMÁTICA - LEONARDO"

        td5.innerText = "CONTABILIDADE GERAL - ROSA"
        td6.innerText = "CONTABILIDADE GERAL - ROSA"

        td8.innerText = "GESTÃO DA PRODUÇÃO E LOGÍSTICA - RUTE"
        td9.innerText = "GESTÃO DA PRODUÇÃO E LOGÍSTICA - RUTE"

        td11.innerText = "TRILHAS (UC1) LING - ESPANHOL - SEM PROFESSOR"
        td12.innerText = "TRILHAS (UC1) LING - ESPANHOL - SEM PROFESSOR"

        td1.classList.add("Paulo")
        td2.classList.add("Leonardo")
        td3.classList.add("Leonardo")

        td5.classList.add("Rosa")
        td6.classList.add("Rosa")

        td8.classList.add("Rute")
        td9.classList.add("Rute")

        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")


    }
    else if (Turma == "3AA" && Dia == "QUA") {
        td1.innerText = "GESTÃO DA PRODUÇÃO E LOGÍSTICA - RUTE"
        td2.innerText = "SOCIOLOGIA - MARIANA"
        td3.innerText = "MÉTODOS E TÉCNICAS ADMINISTRATIVAS - GASPAR"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "PORTUGUÊS - EBER RAMOS"
        td9.innerText = "INGLÊS - LUCAS"

        td11.innerText = "CONTABILIDADE GERAL - ROSA"
        td12.innerText = "CONTABILIDADE GERAL - ROSA"

        td1.classList.add("Rute")
        td2.classList.add("Mariana")
        td3.classList.add("Gaspar")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Eber")
        td9.classList.add("Lucas")

        td11.classList.add("Rosa")
        td12.classList.add("Rosa")

    }
    else if (Turma == "3AA" && Dia == "QUI") {
        td1.innerText = "ARTE - LULA"
        td2.innerText = "QUÍMICA - MARCELA"
        td3.innerText = "ESPANHOL - SEM PROFESSOR"

        td5.innerText = "TRILHAS (UC2) LING - LUCAS"
        td6.innerText = "TRILHAS (UC2) LING - LUCAS"

        td8.innerText = "GESTÃO DA PRODUÇÃO E LOGÍSITCA - RUTE"
        td9.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td11.innerText = "TRILHAS (UC3) LING - ANA GUERRA"
        td12.innerText = "TRILHAS (UC3) LING - ANA GUERRA"

        td1.classList.add("Lula")
        td2.classList.add("Marcela")


        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Rute")
        td9.classList.add("Praticas")

        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    }
    else if (Turma == "3AA" && Dia == "SEX") {
        td1.innerText = "BIOLOGIA - MARCELO"
        td2.innerText = "FÍSICA - SEM PROFESSOR"
        td3.innerText = "PORTUGUÊS - EBER RAMOS"

        td5.innerText = "OFICINAS (UC1) - MANUELA"
        td6.innerText = "OFICINAS (UC1) - MANUELA"

        td8.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"
        td9.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td1.classList.add("Marcela")

        td3.classList.add("Eber")

        td5.classList.add("Manuela")
        td6.classList.add("Manuela")







    }
    else if (Turma == "3BA" && Dia == "SEG") {
        td1.innerText = "MÉTODOS E TÉCNICAS ADMINISTRATIVAS - GASPAR"
        td2.innerText = "HISTÓRIA - FRANCISCO"
        td3.innerText = "INGLÊS - LUCAS"

        td5.innerText = "SOCIOLOGIA - MARIANA"
        td6.innerText = "GEOGRAFIA - PAULO"

        td8.innerText = "MTC - RANAILDO"
        td9.innerText = "MTC - RANAILDO"

        td11.innerText = "CONTABILIDADE GERAL - ROSA"
        td12.innerText = "CONTABILIDADE GERAL - ROSA"

        td1.classList.add("Gaspar")
        td2.classList.add("Chico")
        td3.classList.add("Lucas")

        td5.classList.add("Mariana")
        td6.classList.add("Paulo")

        td8.classList.add("Ranaildo")
        td9.classList.add("Ranaildo")

        td11.classList.add("Rosa")
        td12.classList.add("Rosa")

    }
    else if (Turma == "3BA" && Dia == "TER") {
        td1.innerText = "GESTÃO DA PRODUÇÃO E LOGÍSTICA - RUTE"
        td2.innerText = "GESTÃO DA PRODUÇÃO E LOGÍSTICA - RUTE"
        td3.innerText = "CONTABILIDADE GERAL - ROSA"

        td5.innerText = "MÉTODOS E TÉCNICAS ADMINISTRATIVAS - GASPAR"
        td6.innerText = "BIOLOGIA - MARCELO"

        td8.innerText = "PROJETO DE VIDA - MARIANA"
        td9.innerText = "PROJETO DE VIDA - MARIANA"

        td11.innerText = "TRILHAS (UC1) MAT/CN - MANUELA"
        td12.innerText = "TRILHAS (UC1) MAT/CN - JOELSON"

        td1.classList.add("Rute")
        td2.classList.add("Rute")
        td3.classList.add("Rosa")

        td5.classList.add("Gaspar")
        td6.classList.add("Marcelo")

        td8.classList.add("Mariana")
        td9.classList.add("Mariana")

        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    } else if (Turma == "3BA" && Dia == "QUA") {
        td1.innerText = "PRÁTICAS EXPERIMENTAIS (1)"
        td2.innerText = "GESTÃO DE PRODUÇÃO E LOGÍSTICA - RUTE"
        td3.innerText = "GESTÃO DE PRODUÇÃO E LOGÍSTICA - RUTE"

        td5.innerText = "ELETIVAS"
        td6.innerText = "ELETIVAS"

        td8.innerText = "ED.FÍSICA - DANIEL"
        td9.innerText = "CONTABILIDADE GERAL - ROSA"

        td11.innerText = "PORTUGUÊS - EBER RAMOS"
        td12.innerText = "PORTUGUÊS - EBER RAMOS"

        td1.classList.add("Praticas")
        td2.classList.add("Rute")
        td3.classList.add("Rute")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")

        td8.classList.add("Daniel")
        td9.classList.add("Rosa")

        td11.classList.add("Eber")
        td12.classList.add("Eber")

    } else if (Turma == "3BA" && Dia == "QUI") {
        td1.innerText = "ESPANHOL - SEM PROFESSOR"
        td2.innerText = "ARTE - LULA"
        td3.innerText = "QUÍMICA - MARCELA"

        td5.innerText = "TRILHAS (UC2) MAT/CN - MARCELO"
        td6.innerText = "TRILHAS (UC2) MAT/CN - MARCELA"

        td8.innerText = "FÍSICA - SEM PROFESSOR"
        td9.innerText = "PRÁTICAS EXPERIMENTAIS (2)"

        td11.innerText = "TRILHAS (UC3) MAT/CN - RAFAEL"
        td12.innerText = "TRILHAS (UC3) MAT/CN - JOELSON"


        td2.classList.add("Lula")
        td3.classList.add("Marcela")

        td5.classList.add("Eletrilha")
        td6.classList.add("Eletrilha")


        td9.classList.add("Praticas")

        td11.classList.add("Eletrilha")
        td12.classList.add("Eletrilha")

    } else if (Turma == "3BA" && Dia == "SEX") {
        td1.innerText = "MATEMÁTICA - LEONARDO"
        td2.innerText = "MATEMÁTICA - LEONARDO"
        td3.innerText = "ESPANHOL - SEM PROFESSOR"

        td5.innerText = "OFICINAS (UC1)"
        td6.innerText = "OFICINAS (UC1)"

        td8.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"
        td9.innerText = "ORIENTAÇÃO ACADÊMICA - SEM PROFESSOR"

        td11.innerText = "OFICINAS (UC2) - SEM PROFESSOR"
        td12.innerText = "OFICINAS (UC2) - SEM PROFESSOR"

        td1.classList.add("Leonardo")
        td2.classList.add("Leonardo")


        td5.classList.add("Oficina")
        td6.classList.add("Oficina")

    }
}