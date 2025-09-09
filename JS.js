document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("savedTheme");
    const isDark = savedTheme === "dark";

    document.body.classList.toggle("dark-theme", isDark);

    const nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("dark-theme", isDark);

    const header = document.querySelector("header");
    if (header) header.classList.toggle("dark-theme", isDark);
});


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



    ///VERIFICAÇÂO FODONA///
    if (document.body.classList.contains("dark-theme")) {
        itens.classList.add("dark-theme");
    }


    ///Adicionado link0 para a pagina index///

    var li0 = document.createElement("li");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
   
    var li5 = document.createElement("li");
    var li6 = document.createElement("li");
    var li7 = document.createElement("li");

    var link0 = document.createElement("a");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");
   
    var link5 = document.createElement("a");
    var link6 = document.createElement("a");
    var link7 = document.createElement("a");

    var span0 = document.createElement("span");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
   
    var span5 = document.createElement("span");
    var span6 = document.createElement("span");
    var span7 = document.createElement("span");



    ul.appendChild(li0);
    ul.appendChild(li1);;
    ul.appendChild(li2);
    ul.appendChild(li3);
  
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);

    li0.appendChild(link0);
    li1.appendChild(link1);
    li2.appendChild(link2);
    li3.appendChild(link3);
   
    li5.appendChild(link5);
    li6.appendChild(link6);
    li7.appendChild(link7);

    link0.appendChild(span0)
    link1.appendChild(span1)
    link2.appendChild(span2)
    link3.appendChild(span3)
   
    link5.appendChild(span5)
    link6.appendChild(span6)
    link7.appendChild(span7)


    span0.innerText = "Início";
    link0.href = "index.html";

    span1.innerText = "sobre";
    link1.href = "sobre.html";

    span2.innerText = "Horários";
    link2.href = "horarios.html";

    span3.innerText = "Cardápio";
    link3.href = "cardapio.html";


    span5.innerText = "Gestão e Professores";
    link5.href = "gestao.html";

    span6.innerText = "Guia Para O Enem";
    link6.href = "guiaTreineiro.html";

    span7.innerText = "Eventos";
    link7.href = "eventos.html";

    itens.appendChild(ul);






    var conteinerclosebotao = document.createElement("div");
    conteinerclosebotao.classList.add("close-conteiner");

    var closebotao = document.createElement("div");

    conteinerclosebotao.appendChild(closebotao)
    itens.appendChild(conteinerclosebotao);

    closebotao.innerText = "×";
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
    // --- já marca o checkbox conforme tema salvo ---
    const savedTheme = localStorage.getItem("savedTheme");
    toggleInput.checked = savedTheme === "dark";

    // --- evento de troca do tema ---
    toggleInput.addEventListener("change", function () {
        const isDark = toggleInput.checked;

        document.body.classList.toggle("dark-theme", isDark);

        var nav = document.getElementById("nav");
        if (nav) nav.classList.toggle("dark-theme", isDark);

        var header = document.querySelector("header");
        if (header) header.classList.toggle("dark-theme", isDark);

        var menu = document.querySelector(".menu");
        if (menu) menu.classList.toggle("dark-theme", isDark);

        localStorage.setItem("savedTheme", isDark ? "dark" : "light");
    });
}










function tabHorario() {
    const professores = [
        { nome: "Joelson", disciplina: ["MatemáticaJoelson", "OficinasJoelson"], url: "gestao.html#joelson" },
        { nome: "AnaG", disciplina: ["PortuguêsAnaG", "OficinasAnaG"], url: "gestao.html#joelson" },
        { nome: "Lucas", disciplina: ["Inglês", "Orientação AcadêmicaLucas", "OficinasLucas"], url: "gestao.html#lucas" },
        { nome: "Mariana", disciplina: ["Projeto de VidaMariana", "Sociologia"], url: "gestao.html#mariana" },
        { nome: "Manuela", disciplina: ["BiologiaManuela", "OficinasManuela"], url: "gestao.html#manuela" },
        { nome: "Rute", disciplina: ["Marketing e Serviços", "Gestão FinanceiraRute", "Matemática Financeira", "Orientação AcadêmicaRute"], url: "gestao.html#rute" },
        { nome: "Ranaildo", disciplina: ["Estatística", "Empreendedorismo"], url: "gestao.html#ranaildo" },
        { nome: "Lula", disciplina: ["Orientação AcadêmicaLula", "Arte"], url: "gestao.html#lula" },
        { nome: "Eber", disciplina: ["PortuguêsEber", "Eletiva Orientada - Eber"], url: "gestao.html#eber" },
        { nome: "Marcelo", disciplina: ["BiologiaMarcelo", "Informática Básica"], url: "gestao.html#marcelo" },
        { nome: "Daniel", disciplina: ["Educação Física"], url: "gestao.html#daniel" },
        { nome: "Leonardo", disciplina: ["MatemáticaLeonardo", "Eletiva Orientada - Leonardo", "OficinasLeonardo"], url: "gestao.html#leonardo" },
        { nome: "Paulo", disciplina: ["Geografia", "OficinasPaulo"], url: "gestao.html#paulo" },
        { nome: "Allan", disciplina: ["Banco de Dados", "Programação Web 1&2", "Programação Estruturada e Orientada a Objeto"], url: "gestao.html#allan" },
        { nome: "Nancy", disciplina: ["Desenvolvimento de Sistemas", "Fundamentos De Redes de ComputadoresNancy", "Segurança da Informação"], url: "gestao.html#nancy" },
        { nome: "Iara", disciplina: ["Projeto de VidaIara", "HistóriaIara"], url: "gestao.html#iara" },
        { nome: "Rosa", disciplina: "Metodos e Técnicas Administrativa", url: "gestao.html#rosa" },
        { nome: "Francisco", disciplina: ["HistóriaFrancisco"], url: "gestao.html#francisco" },
        { nome: "Lindemberg", disciplina: ["Lógica de Programação - AlgoritimosLindemberg", "Metodologia do Trabalho Cientifico (MTC)Lindemberg", "Fundamentos De Redes de ComputadoresLindemberg", "Tecnologia De Implementação de Redes"], url: "gestao.html#linduberg" },
        { nome: "Ricardo", disciplina: ["Física", "OficinasRicardo"], url: "gestao.html#ricardo" },
        { nome: "Gaspar", disciplina: ["Gestão Publica e Terceiro Setor", "Gestão FinanceiraGaspar", "Metodologia do Trabalho Cientifico (MTC)Gaspar"], url: "gestao.html#gaspar" },
        { nome: "Ruziane", disciplina: ["Gestão de Pessoas", "Orientação Acadêmica Ruziane"], url: "gestao.html#ruziane" },
        { nome: "Marcela", disciplina: "Química", url: "gestao.html#marcela" },

    ];
    /* Array com os horaios para criar as tds corretamente*/
    const horarios = {
        "1AI": { SEG: ["BiologiaManuela", "Física", "Inglês", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "Química", "Sociologia", "", "Fundamentos De Redes de ComputadoresNancy", "Fundamentos De Redes de ComputadoresNancy"], TER: ["OficinasManuela", "OficinasManuela", "HistóriaFrancisco", "", "Fundamentos De Redes de ComputadoresLindemberg", "Fundamentos De Redes de ComputadoresLindemberg", "", "MatemáticaJoelson", "MatemáticaJoelson", "", "Educação Física", "Inglês"], QUA: ["Geografia", "Programação Web 1&2", "Programação Web 1&2", "", "Eletiva", "Eletiva", "", "Química", "BiologiaManuela", "", "Eletiva Orientada - Eber", "Eletiva Orientada - Eber"], QUI: ["HistóriaFrancisco", "PortuguêsAnaG", "Educação Física", "", "Fundamentos De Redes de ComputadoresNancy", "Fundamentos De Redes de ComputadoresNancy", "", "MatemáticaJoelson", "Práticas", "", "Informática Básica", "Geografia"], SEX: ["Orientação Acadêmica Ruziane", "Orientação Acadêmica Ruziane", "Arte", "", "Informática Básica", "Física", "", "PortuguêsAnaG", "PortuguêsAnaG", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"] },
        "1BI": { SEG: ["HistóriaFrancisco", "Geografia", "BiologiaManuela", "", "Fundamentos De Redes de ComputadoresNancy", "Fundamentos De Redes de ComputadoresNancy", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "Práticas", "MatemáticaJoelson"], TER: ["Educação Física", "Informática Básica", "Inglês", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "BiologiaManuela", "Educação Física", "", "Sociologia", "Informática Básica"], QUA: ["Sociologia", "HistóriaFrancisco", "Inglês", "", "Eletiva", "Eletiva", "", "Educação Física", "Química", "", "PortuguêsAnaG", "PortuguêsAnaG"], QUI: ["BiologiaManuela", "Física", "Geografia", "", "Informática Básica", "Química", "", "Fundamentos De Redes de ComputadoresNancy", "Fundamentos De Redes de ComputadoresNancy", "", "Orientação AcadêmicaLula", "Orientação AcadêmicaLula"], SEX: ["Arte", "Física", "PortuguêsAnaG", "", "Lógica de Programação - AlgoritimosLindemberg", "Lógica de Programação - AlgoritimosLindemberg", "", "Eletiva Orientada - Eber", "Eletiva Orientada - Eber", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"] },
        "1CI": { SEG: ["Geografia", "Informática Básica", "HistóriaFrancisco", "", "Física", "BiologiaManuela", "", "Eletiva Orientada - Eber", "Eletiva Orientada - Eber", "", "Práticas", "Química"], TER: ["Inglês", "Fundamentos De Redes de ComputadoresLindemberg", "Fundamentos De Redes de ComputadoresLindemberg", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "BiologiaManuela", "Educação Física", "", "Sociologia", "Informática Básica"], QUA: ["Fundamentos De Redes de ComputadoresLindemberg", "Fundamentos De Redes de ComputadoresLindemberg", "PortuguêsAnaG", "", "Eletiva", "Eletiva", "", "Arte", "Educação Física", "", "MatemáticaJoelson", "MatemáticaJoelson"], QUI: ["Fundamentos De Redes de ComputadoresLindemberg", "Fundamentos De Redes de ComputadoresLindemberg", "Inglês", "", "PortuguêsAnaG", "PortuguêsAnaG", "", "Química", "Geografia", "", "MatemáticaJoelson", "Física"], SEX: ["Programação Web 1&2", "Programação Web 1&2", "HistóriaFrancisco", "", "Orientação AcadêmicaLula", "Orientação AcadêmicaLula", "", "OficinasRicardo", "OficinasRicardo", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"] },
        "1AA": { SEG: ["Estatística", "Estatística", "Química", "", "Gestão Publica e Terceiro Setor", "Gestão Publica e Terceiro Setor", "", "MatemáticaJoelson", "MatemáticaJoelson", "", "Inglês", "Sociologia"], TER: ["Geografia", "HistóriaFrancisco", "Informática Básica", "", "Educação Física", "Educação Física", "", "Filosofia - Sem Professor", "BiologiaManuela", "", "Gestão Publica e Terceiro Setor", "Gestão Publica e Terceiro Setor"], QUA: ["HistóriaFrancisco", "Orientação Acadêmica Ruziane", "Orientação Acadêmica Ruziane", "", "Eletiva", "Eletiva", "", "PortuguêsAnaG", "PortuguêsAnaG", "", "Química", "Física"], QUI: ["Inglês", "Eletiva Orientada - Leonardo", "Eletiva Orientada - Leonardo", "", "Estatística", "Estatística", "", "PortuguêsAnaG", "Arte", "", "Geografia", "MatemáticaJoelson"], SEX: ["Projeto de VidaIara", "Projeto de VidaIara", "BiologiaManuela", "", "Física", "Informática Básica", "", "OficinasJoelson", "OficinasJoelson", "", "Práticas", "Espanhol - Sem Professor"] },
        "1BA": { SEG: ["Gestão Publica e Terceiro Setor", "Gestão Publica e Terceiro Setor", "Informática Básica", "", "BiologiaManuela", "HistóriaFrancisco", "", "Física", "Química", "", "Sociologia", "Inglês"], TER: ["Informática Básica", "Física", "Educação Física", "", "Orientação AcadêmicaRute", "Orientação AcadêmicaRute", "", "Gestão Publica e Terceiro Setor", "Gestão Publica e Terceiro Setor", "Espanhol - Sem Professor", "Filosofia - Sem Professor"], QUA: ["Estatística", "Estatística", "Arte", "", "Eletiva", "Eletiva", "", "MatemáticaJoelson", "MatemáticaJoelson", "", "Educação Física", "Química"], QUI: ["Geografia", "Estatística", "Estatística", "", "BiologiaManuela", "Inglês", "", "OficinasManuela", "OficinasManuela", "", "PortuguêsAnaG", "PortuguêsAnaG"], SEX: ["HistóriaFrancisco", "PortuguêsAnaG", "Geografia", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "Eletiva Orientada - Leonardo", "Eletiva Orientada - Leonardo", "", "Práticas", "MatemáticaJoelson"] },
        "2AI": { SEG: ["Inglês", "Química", "PortuguêsEber", "", "Empreendedorismo", "Empreendedorismo", "", "Sociologia", "Física", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"], TER: ["Tecnologia De Implementação de Redes", "Programação Estruturada e Orientada a Objeto", "Programação Estruturada e Orientada a Objeto", "", "Trilhas", "Trilhas", "", "Trilhas", "Trilhas", "", "HistóriaIara", "Educação Física"], QUA: ["Programação Estruturada e Orientada a Objeto", "Geografia", "Tecnologia De Implementação de Redes", "", "Eletiva", "Eletiva", "", "PortuguêsEber", "Arte", "", "MatemáticaLeonardo", "Oficina - Sem Professor"], QUI: ["MatemáticaLeonardo", "Segurança da Informação", "Segurança da Informação", "", "Tecnologia De Implementação de Redes", "Tecnologia De Implementação de Redes", "", "BiologiaMarcelo", "Práticas", "", "Projeto de VidaIara", "Projeto de VidaIara"], SEX: ["OficinasLucas", "OficinasLucas", "Metodologia do Trabalho Cientifico (MTC)Lindemberg", "", "Programação Estruturada e Orientada a Objeto", "Programação Estruturada e Orientada a Objeto", "", "Orientação Acadêmica Ruziane", "Orientação Acadêmica Ruziane", "Práticas", "Oficinas - Sem Professor"] },
        "2AA": { SEG: ["BiologiaMarcelo", "Informática Básica", "HistóriaFrancisco", "", "Geografia", "Química", "", "Empreendedorismo", "Empreendedorismo", "", "Práticas", "Espanhol - Sem Professor"], TER: ["Filosofia", "Metodologia do Trabalho Cientifico (MTC)Gaspar", "Gestão FinanceiraRute", "", "Trilhas", "Trilhas", "", "Trilhas", "Trilhas", "", "HistóriaIara", "Educação Física"], QUA: ["Gestão de Pessoas", "Matemática Financeira", "Matemática Financeira", "", "Eletiva", "Eletiva", "", "Orientação AcadêmicaLucas", "Orientação AcadêmicaLucas", "", "Física", "MatemáticaLeonardo"], QUI: ["Projeto de VidaIara", "Projeto de VidaIara", "Práticas", "", "Educação física", "Arte", "", "Matemática Financeira", "Matemática Financeira", "", "Gestão de Pessoas", "Gestão de Pessoas"], SEX: ["OficinasPaulo", "OficinasPaulo", "Gestão de Pessoas", "", "PortuguêsEber", "PortuguêsEber", "", "Gestão FinanceiraRute", "Gestão FinanceiraRute", "", "Oficinas - Sem Professor", "Oficinas - Sem Professor"] },
        "2BA": { SEG: ["Projeto de VidaIara", "Projeto de VidaIara", "Empreendedorismo", "", "Química", "PortuguêsEber", "", "Gestão FinanceiraGaspar", "MatemáticaLeonardo", "", "Práticas", "BiologiaMarcelo"], TER: ["Matemática Financeira", "Matemática Financeira", "Sociologia", "", "Trilhas", "Trilhas", "", "Trilhas", "Trilhas", "", "Geografia", "MatemáticaLeonardo"], QUA: ["Gestão FinanceiraGaspar", "Gestão FinanceiraGaspar", "Português", "Eletiva", "Eletiva", "", "Gestão de Pessoas", "Gestão de Pessoas", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"], QUI: ["Empreendedorismo", "Educação Física", "Metodologia do Trabalho Cientifico (MTC)Lindemberg", "", "Física", "HistóriaIara", "", "Arte", "Práticas", "", "Matemática Financeira", "Matemática Financeira"], SEX: ["OficinasManuela", "OficinasManuela", "Inglês", "", "Gestão FinanceiraRute", "Gestão FinanceiraRute", "", "Orientação AcadêmicaLucas", "Orientação AcadêmicaLucas", "", "Oficinas - Sem Professor", "Oficinas - Sem Professor"] },
        "3AI": { SEG: ["Química", "Desenvolvimento de Sistemas", "Geografia", "", "BiologiaMarcelo", "Sociologia", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR",], TER: ["MatemáticaLeonardo", "Educação Física", "Física", "", "Projeto de VidaMariana", "Projeto de VidaMariana", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Espanhol - Sem Professor", "Desenvolvimento de Sistemas", "", "Orientação Acadêmica - Sem Professor", "Inglês", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["Orientação Acadêmica", "HistóriaFrancisco", "Práticas", "", "Arte", "MatemáticaLeonardo", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["PortuguêsEber", "PortuguêsEber", "Orientação Acadêmica - Sem Professor", "", "OficinasPaulo", "OficinasPaulo", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] },
        "3BI": { SEG: ["PortuguêsEber", "PortuguêsEber", "Desenvolvimento de Sistemas", "", "Sociologia", "Espanhol - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], TER: ["HistóriaFrancisco", "Projeto de VidaIara", "Projeto de VidaIara", "", "MatemáticaLeonardo", "Filosofia - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Desenvolvimento de Sistemas", "Educação Física", "", "Química", "Orientação Acadêmica - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["BiologiaMarcelo", "Geografia", "Práticas", "", "Inglês", "Orientação Acadêmica", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["MatemáticaLeonardo", "Arte", "Física", "", "OficinasLeonardo", "OficinasLeonardo", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] },
        "3AA": { SEG: ["Projeto de VidaMariana", "Projeto de VidaMariana", "Física", "", "PortuguêsEber", "Espanhol - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], TER: ["Metodos e Técnicas Administrativa", "MatemáticaLeonardo", "MatemáticaLeonardo", "", "Geografia", "Filosofia - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Sociologia", "Metodos e Técnicas Administrativa", "", "Inglês", "Orientação Acadêmica - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["Arte", "Química", "Práticas", "", "HistóriaFrancisco", "Educação Física", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["BiologiaMarcelo", "Orientação Acadêmica - Sem Professor", "PortuguêsEber", "", "OficinasManuela", "OficinasManuela", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] },
        "3BA": { SEG: ["Espanhol - Sem Professor", "HistóriaFrancisco", "Sociologia", "", "Inglês", "Geografia", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], TER: ["Projeto de VidaMariana", "Projeto de VidaMariana", "Metodos e Técnicas Administrativa", "", "BiologiaMarcelo", "Filosofia", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Metodos e Técnicas Administrativa", "Orientação Acadêmica - Sem Professor", "", "PortuguêsEber", "PortuguêsEber", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["Educação Física", "Arte", "Práticas", "Química", "Física", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["Orientação Acadêmica - Sem Professor", "MatemáticaLeonardo", "MatemáticaLeonardo", "", "OficinasAnaG", "OficinasAnaG", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] }
    };



    const turmaSelecionada = document.getElementById("Turma").value;
    const diaSelecionado = document.getElementById("dia").value;

    var tableConteiner = document.querySelector("#table-conteiner");
    tableConteiner.innerHTML = "";
    tableConteiner.classList.add("table-conteiner")
    var table = document.createElement("table");
    table.classList.add("tabela-horario");
    tableConteiner.appendChild(table);

    const horariosDoDia = horarios[turmaSelecionada][diaSelecionado];

    for (let i = 0; i < 12; i++) { // 12 horários fixos
        const tr = document.createElement("tr"); // linha por horário
        const td = document.createElement("td");
        const disciplina = horariosDoDia[i] || "";

        if (disciplina === "") {
            if (i === 3) td.textContent = "Café da manhã - 10:00h á 10:20h";
            else if (i === 6) td.textContent = "Almoço - 12:00h á 13:20h";
            else if (i === 9) td.textContent = "Lanche - 15:00h á 15:20h";
            else td.textContent = "Intervalo";
        }
        // caso especial para práticas, eletiva e trilhas
        else if (disciplina.includes("Práticas")) {
            td.textContent = disciplina;
            td.classList.add("Práticas");
        } else if (disciplina.includes("Eletiva") || disciplina.includes("Trilhas")) {
            td.textContent = disciplina;
            td.classList.add("Eletrilhas");
        } else if (disciplina.includes("PROJETO INTEGRADOR")) {
            td.textContent = disciplina;
            td.classList.add("PROJETO-INTEGRADOR");
        }
        else {
            const professor = professores.find(p =>
                Array.isArray(p.disciplina)
                    ? p.disciplina.includes(disciplina)
                    : p.disciplina === disciplina
            );

            if (professor) {
                td.classList.add(professor.nome);

                // Remove o nome do professor da disciplina, se estiver embutido
                const disciplinaSemProfessor = disciplina.replace(professor.nome, "").trim();

                // Adiciona a disciplina sem o nome do professor
                td.textContent = disciplinaSemProfessor + " - " + professor.nome;
            } else {
                td.textContent = disciplina;
            }
        }

        tr.appendChild(td);
        table.appendChild(tr); // adiciona a linha na tabela

    }
    var conteinerseletor = document.getElementById("select-cont");
    conteinerseletor.style.animation = "deladin 0.5s ease-out forwards"

}


// Arrays de dados
const pages = [
    { title: "Início", url: "index.html" },
    { title: "Sobre", url: "sobre.html" },
    { title: "Horários", url: "horarios.html" },
    { title: "Cardápio", url: "cardapio.html" },
    { title: "Área de Estudo", url: "areaestudo.html" },
    { title: "Gestão e Professores", url: "gestao.html" },
    { title: "Guia Para O Enem", url: "guiaTreineiro.html" }
];

const professores = [
    { nome: "Lucas", disciplina: "Inglês", url: "gestao.html#lucas" },
    { nome: "Mariana", disciplina: "Sociologia", url: "gestao.html#mariana" },
    { nome: "Manuela", disciplina: "Biologia", url: "gestao.html#manuela" },
    { nome: "Rute", disciplina: "Marketing e Serviços", url: "gestao.html#rute" },
    { nome: "Ranaildo", disciplina: "Sistemas de Informação", url: "gestao.html#ranaildo" },
    { nome: "Lula", disciplina: "Arte", url: "gestao.html#lula" },
    { nome: "Eber Ramos", disciplina: "Português", url: "gestao.html#eber" },
    { nome: "Marcelo", disciplina: "Biologia", url: "gestao.html#marcelo" },
    { nome: "Daniel", disciplina: "Educação Física", url: "gestao.html#daniel" },
    { nome: "Leonardo", disciplina: "Matemática", url: "gestao.html#leonardo" },
    { nome: "Paulo", disciplina: "Geografia", url: "gestao.html#paulo" },
    { nome: "Allan", disciplina: "Banco de Dados", url: "gestao.html#allan" },
    { nome: "Nancy", disciplina: "Desenvolvimento de Sistemas", url: "gestao.html#nancy" },
    { nome: "Iara", disciplina: "Projeto de Vida", url: "gestao.html#iara" },
    { nome: "Rosa", disciplina: "Orientação Acadêmica", url: "gestao.html#rosa" },
    { nome: "Francisco", disciplina: "História e Trilhas (UC1)", url: "gestao.html#francisco" },
    { nome: "Linduberg", disciplina: "Metodologia do Trabalho Científico (MTC)", url: "gestao.html#linduberg" }
];

function pesquisa() {
    const input = document.querySelector('.pesquisa');
    const sugestaoContainer = document.getElementById('sugestaoContainer');

    // Ajustar a largura e posição do container 
    sugestaoContainer.style.position = 'absolute';
    sugestaoContainer.style.top = `${input.offsetTop + input.offsetHeight}px`;


    // Exibir sugestões enquanto o usuário digita
    input.addEventListener('input', function () {
        const query = input.value.toLowerCase();
        sugestaoContainer.innerHTML = ''; // Limpa sugestões anteriores

        if (query) {
            const suggestions = [];

            // Buscar nos arrays de páginas e professores
            pages.forEach(page => {
                if (page.title.toLowerCase().includes(query)) {
                    suggestions.push({ title: page.title, url: page.url });
                }
            });

            professores.forEach(professor => {
                if (professor.nome.toLowerCase().includes(query) || professor.disciplina.toLowerCase().includes(query)) {
                    suggestions.push({ title: `${professor.nome} - ${professor.disciplina}`, url: professor.url });
                }
            });

            // Exibir sugestões
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                item.classList.add('sugestao-item');
                item.innerText = suggestion.title;
                item.onclick = () => {
                    window.location.href = suggestion.url; // Redireciona ao clicar
                };
                sugestaoContainer.appendChild(item);
            });

            // Mostra o container de sugestões
            sugestaoContainer.style.display = 'block';
        } else {
            sugestaoContainer.style.display = 'none'; // Esconde o container se não houver texto
        }
    });

    // Esconde o container de sugestões ao clicar fora
    document.addEventListener('click', function (event) {
        if (!sugestaoContainer.contains(event.target) && event.target !== input) {
            sugestaoContainer.style.display = 'none';
        }
    });
}

window.onload = function () {
    pesquisa();
};


document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const caption = document.getElementById("popup-caption");

    document.querySelectorAll(".professor-image").forEach(img => {
        img.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = img.src;
            caption.innerHTML = img.alt || "";
        });
    });

    popup.addEventListener("click", (e) => {
        if (e.target !== popupImg) {
            popup.style.display = "none";
        }
    });
});
