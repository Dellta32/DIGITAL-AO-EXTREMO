


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
    var li4 = document.createElement("li");
    var li5 = document.createElement("li");
    var li6 = document.createElement("li");
    var li7 = document.createElement("li");

    var link0 = document.createElement("a");
    var link1 = document.createElement("a");
    var link2 = document.createElement("a");
    var link3 = document.createElement("a");
    var link4 = document.createElement("a");
    var link5 = document.createElement("a");
    var link6 = document.createElement("a");
    var link7 = document.createElement("a");

    var span0 = document.createElement("span");
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");
    var span3 = document.createElement("span");
    var span4 = document.createElement("span");
    var span5 = document.createElement("span");
    var span6 = document.createElement("span");
    var span7 = document.createElement("span");



    ul.appendChild(li0);
    ul.appendChild(li1);;
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
    ul.appendChild(li6);
    ul.appendChild(li7);

    li0.appendChild(link0);
    li1.appendChild(link1);
    li2.appendChild(link2);
    li3.appendChild(link3);
    li4.appendChild(link4);
    li5.appendChild(link5);
    li6.appendChild(link6);
    li7.appendChild(link7);

    link0.appendChild(span0)
    link1.appendChild(span1)
    link2.appendChild(span2)
    link3.appendChild(span3)
    link4.appendChild(span4)
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

    span4.innerText = "area de estudo";
    link4.href = "areaestudo.html";

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

        // Alternar visibilidade dos ícones de sol e lua
        const sun = document.querySelector('.sun');
        const moon = document.querySelector('.moon');
        if (document.body.classList.contains("dark-theme")) {
            sun.style.opacity = "0";
            sun.style.transform = "scale(0.8)";
            moon.style.opacity = "1";
            moon.style.transform = "scale(1)";
        } else {
            sun.style.opacity = "1";
            sun.style.transform = "scale(1)";
            moon.style.opacity = "0";
            moon.style.transform = "scale(0.8)";
        }
    });


}








function tabHorario() {
    const professores = [
      { nome: "Joelson", disciplina: ["MatemáticaJoel", "OficinasJoel"], url: "gestao.html#joelson" },
      { nome: "AnaG", disciplina: ["PortuguêsAna", "OficinasAnaG"], url: "gestao.html#joelson" },
      { nome: "Lucas", disciplina: ["Inglês", "Orientação AcadêmicaLucas", "OficinasLucas"], url: "gestao.html#lucas" },
      { nome: "Mariana", disciplina: ["Projeto de VidaMariana", "Sociologia"], url: "gestao.html#mariana" },
      { nome: "Manuela", disciplina: ["BiologiaManu", "OficinasManuela"], url: "gestao.html#manuela" },
      { nome: "Rute", disciplina: ["Marketing e Serviços", "GFRute", "Matemática Financeira", "Orientação AcadêmicaRute"], url: "gestao.html#rute" },
      { nome: "Ranaildo", disciplina: ["Estatística", "Empreendedorismo"], url: "gestao.html#ranaildo" },
      { nome: "Lula", disciplina: ["Orientação AcadêmicaLula", "Arte"], url: "gestao.html#lula" },
      { nome: "Eber", disciplina: ["Português", "Eletiva Orientada - Eber"], url: "gestao.html#eber" },
      { nome: "Marcelo", disciplina: ["BiologiaMarcelo", "Informática Básica"], url: "gestao.html#marcelo" },
      { nome: "Daniel", disciplina: ["Educação Física"], url: "gestao.html#daniel" },
      { nome: "Leonardo", disciplina: ["MatemáticaLeo", "Eletiva OrientadaLeo", "OficinasLeo"], url: "gestao.html#leonardo" },
      { nome: "Paulo", disciplina: ["Geografia", "OficinasPaulo"], url: "gestao.html#paulo" },
      { nome: "Allan", disciplina: ["Banco de Dados", "PW1&2", "PEOO"], url: "gestao.html#allan" },
      { nome: "Nancy", disciplina: ["Desenvolvimento de Sistemas", "FRCNancy", "Segurança da Informação"], url: "gestao.html#nancy" },
      { nome: "Iara", disciplina: ["Projeto de VidaIara", "HistóriaIara"], url: "gestao.html#iara" },
      { nome: "Rosa", disciplina: "MTA", url: "gestao.html#rosa" },
      { nome: "Francisco", disciplina: ["HistóriaFran"], url: "gestao.html#francisco" },
      { nome: "Lindemberg", disciplina: ["Lógica de Programação - AlgoritimosLindemberg", "MTCLindemberg", "FRCLindemberg", "TIR"], url: "gestao.html#linduberg" },
      { nome: "Ricardo", disciplina: ["Física", "OficinasRicardo"], url: "gestao.html#ricardo" },
      { nome: "Gaspar", disciplina: ["GPTS", "GFGas", "MTCGas"], url: "gestao.html#gaspar" },
      { nome: "Ruziane", disciplina: ["Gestão de Pessoas", "Orientação Acadêmica Ruziane"], url: "gestao.html#ruziane" },
      { nome: "Marcela", disciplina: "Química", url: "gestao.html#marcela" },
     
    ];
    /* Array com os horaios para criar as tds corretamente*/
    const horarios = {
      "1AI": { SEG: ["BiologiaManu", "Física", "Inglês", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "Química", "Sociologia", "", "FRCNancy", "FRCNancy"], TER: ["OficinasManuela", "OficinasManuela", "HistóriaFran", "", "LPALindemberg", "LPALindemberg", "", "MatemáticaJoel", "MatemáticaJoel", "", "Educação Física", "Inglês"], QUA: ["Geografia", "PW1&2", "PW1&2", "", "Eletiva", "Eletiva", "", "Química", "BiologiaManu", "", "Eletiva Orientada - Eber", "Eletiva Orientada - Eber"], QUI: ["HistóriaFran", "PortuguêsAna", "Educação Física", "", "FRCNancy", "FRCNancy", "", "MatemáticaJoel", "Práticas", "", "Informática Básica", "Geografia"], SEX: ["Orientação Acadêmica Ruziane", "Orientação Acadêmica Ruziane", "Arte", "", "Informática Básica", "Física", "", "PortuguêsAna", "PortuguêsAna", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"] },
      "1BI": { SEG: ["HistóriaFran", "Geográfia", "BiologiaManu", "", "FRCNancy", "FRCNancy", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "Práticas", "MatemáticaJoel"], TER: ["Educação Física", "Informática Básica", "Inglês", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "BiologiaManu", "Educação Física", "", "Sociologia", "Informática Básica"], QUA: ["Sociologia", "HistóriaFran", "Inglês", "", "Eletiva", "Eletiva", "", "Educação Física", "Química", "", "PortuguêsAna", "PortuguêsAna"], QUI: ["BiologiaManu", "Física", "Geografia", "", "Informática Básica", "Química", "", "FRCNancy", "FRCNancy", "", "Orientação AcadêmicaLula"], SEX: ["Arte", "Física", "PortuguêsAna", "", "Lógica de Programação - AlgoritimosLindemberg", "Lógica de Programação - AlgoritimosLindemberg", "", "Eletiva Orientada - Eber", "Eletiva Orientada - Eber","", "Espanhol - Sem Professor", "Filosofia - Sem Professor"] },
      "1CI": { SEG: ["Geografia", "Informática Básica", "HistóriaFran", "", "Física", "BiologiaManu", "", "Eletiva Orientada - Eber", "Eletiva Orientada - Eber", "", "Práticas", "Química"], TER: ["Inglês", "LPALindemberg", "LPALindemberg", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "BiologiaManu", "Educação Física", "", "Sociologia", "informática Básica"], QUA: ["FRCLindemberg", "FRCLindemberg", "PortuguêsAna", "", "Eletiva", "Eletiva", "", "Arte", "Educação Física", "", "MatemáticaJoel", "MatemáticaJoel"], QUI: ["FRCLindemberg", "FRCLindemberg", "Inglês", "", "PortuguêsAna", "PortuguêsAna", "", "Química", "Geografia", "", "MatemáticaJoel", "Física"], SEX: ["PW1&2", "PW1&2", "HistóriaFran", "", "Orientação AcadêmicaLula", "Orientação AcadêmicaLula", "", "OficinasRicardo", "OficinasRicardo", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"] },
      "1AA": { SEG: ["Estátistica", "Estátistica", "Química", "", "GPTS", "GPTS", "", "MatemáticaJoel", "MatemáticaJoel", "", "Inglês", "Sociologia"], TER: ["Geografia", "HistóriaFran", "Informática Básica", "", "Educação Física", "Educação Física", "", "Filosofia - Sem Professor", "BiologiaManu", "", "GPTS", "GPTS"], QUA: ["HistóriaFran", "Orientação Acadêmica Ruziane", "Orientação Acadêmica Ruziane", "", "Eletiva", "Eletiva", "", "PortuguêsAna", "PortuguêsAna", "", "Química", "Física"], QUI: ["Inglês", "Eletiva OrientadaLeo", "Eletiva OrientadaLeo", "", "Estatísticas", "Estatísticas", "", "PortuguêsAna", "Arte", "", "Geografia", "MatemáticaJoel"], SEX: ["Projeto de VidaIara", "Projeto de VidaIara", "BiologiaManu", "", "Física", "Informática Básica", "", "OficinasJoel", "OficinasJoel", "", "Práticas", "Espanhol - Sem Professor"] },
      "1BA": { SEG: ["GPTS", "GPTS", "Informática Basica", "", "BiologiaManu", "HistóriaFran", "", "Física", "Química", "", "Sociologia", "Inglês"], TER: ["Informática Básica", "Física", "Educação Física", "", "Orientação AcadêmicaRute", "Orientação AcadêmicaRute", "", "GPTS", "GPTS", "Espanhol - Sem Professor", "Filosofia - Sem Professor"], QUA: ["Estatística", "Estatística", "Arte", "", "Eletiva", "Eletiva", "", "MatemáticaJoel", "MatemáticaJoel", "", "Educação Física", "Química"], QUI: ["Geografia", "Estatísticas", "Estatísticas", "", "BiologiaManu", "Inglês", "", "OficinasManu", "OficinasManu", "", "PortuguêsAna", "PortuguêsAna"], SEX: ["HistóriaFran", "PortuguêsAna", "Geografia", "", "Projeto de VidaIara", "Projeto de VidaIara", "", "Eletiva OrientadaLeo", "Eletiva OrientadaLeo", "", "Práticas", "MatemáticaJoel"] },
      "2AI": { SEG: ["Inglês", "Química", "PortuguêsEber", "", "Empreendedorismo", "Empreendedorismo", "", "Sociologia", "Física", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"], TER: ["TIR", "PEOO", "PEOO", "", "Trilhas", "Trilhas", "", "Trilhas", "Trilhas", "", "HistóriaIara", "Educação Física"], QUA: ["PEOO", "Geografia", "TRC", "", "Eletiva", "Eletiva", "", "PortuguêsEber", "Arte", "", "MatemáticaLeo", "Oficina - Sem Professor"], QUI: ["MatemáticaLeo", "Segurança da Informação", "Segurança da Informação", "", "TIR", "TIR", "", "BiologiaMarcelo", "Práticas", "", "Projeto de VidaIara", "Projeto de VidaIara"], SEX: ["OficinasLucas", "OficinasLucas", "MTCBerg", "", "PEOO", "PEOO", "", "Orientação AcadêmicaRuzi", "Orientação AcadêmicaRuzi", "Práticas", "Oficinas - Sem Professor"] },
      "2AA": { SEG: ["Biologia", "Informática Básica", "HistóriaFran", "", "Geografia", "Química", "", "Empreendedorismo", "Empreendedorismo", "", "Práticas", "Espanhol - Sem Professor"], TER: ["Filosofia", "MTCGas", "GFRute", "", "Trilhas", "Trilhas", "", "Trilhas", "Trilhas", "", "HistóriaIara", "Educação Física"], QUA: ["Gestão de Pessoas", "Matemática Financeira", "Matemática Financeira", "", "Eletiva", "Eletiva", "", "Orientação AcadêmicaLucas", "Orientação AcadêmicaLucas", "", "Física", "MatemáticaLeo"], QUI: ["Projeto de VidaIara", "Projeto de VidaIara", "Práticas", "", "Educação física", "Arte", "", "Matemática Financeira", "Matemática Financeira", "", "Gestão de Pessoas", "Gestão de Pessoas"], SEX: ["OficinasPaulo", "OficinasPaulo", "Gestão de Pessoas", "", "PortuguêsEber", "PortuguêsEber", "", "GFRute", "GFRute", "", "Oficinas - Sem Professor", "Oficinas - Sem Professor"] },
      "2BA": { SEG: ["Projeto De VidaIara", "Projeto De VidaIara", "Empreendedorismo", "", "Química", "PortuguêsEber", "", "Gestão FinanceiraGas", "MatemáticaLeo", "", "Práticas", "BiologiaMarcelo"], TER: ["Matemática Financeira", "Matemática Financeira", "Sociologia", "", "Trilhas", "Trilhas", "", "Trilhas", "Trilhas", "", "Geografia", "MatemáticaLeo"], QUA: ["GFGas", "GFGas", "Português", "Eletiva", "Eletiva", "", "Gestão de Pessoas", "Gestão de Pessoas", "", "Espanhol - Sem Professor", "Filosofia - Sem Professor"], QUI: ["Empreendedorismo", "Educação Física", "MTCLindemberg", "", "Física", "HistóriaIara", "", "Arte", "Práticas", "", "Matemática Financeira", "Matemática Financeira"], SEX: ["OficinasManuela", "OficinasManuela", "Inglês", "", "GFRute", "GFRute", "", "Orientação AcadêmicaLucas", "Orientação AcadêmicaLucas", "", "Oficinas - Sem Professor", "Oficinas - Sem Professor"] },
      "3AI": { SEG: ["Química", "Desenvolvimento de Sistemas", "Geografia", "", "BiologiaMarcelo", "Sociologia", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR",], TER: ["MatemáticaLeo", "Educação Física", "Física", "", "Projeto de VidaMariana", "Projeto de VidaMariana", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Espanhol - Sem Professor", "Desenvolvimento de Sistemas", "", "Orientação Acadêmica - Sem Professor", "Inglês", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["Orientação Acadêmica", "HistóriaFran", "Práticas", "", "Arte", "MatemáticaLeo", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["PortuguêsEber", "PortuguêsEber", "Orientação Acadêmica - Sem Professor", "", "OficinasPaulo", "OficinasPaulo", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] },
      "3BI": { SEG: ["PortuguêsEber", "PortuguêsEber", "Desenvolvimento de Sistemas", "", "Sociologia", "Espanhol - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], TER: ["HistóriaFran", "Projeto de VidaIara", "Projeto de VidaIara", "", "MatemáticaLeo", "Filosofia - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Desenvolvimento de Sistemas", "Educação Física", "", "Química", "Orientação Acadêmica - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["BiologiaMarcelo", "Geografia", "Práticas", "", "Inglês", "Orientação Acadêmica", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["MatemáticaLeo", "Arte", "Física", "", "OficinasLeo", "OficinasLeo", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] },
      "3AA": { SEG: ["Projeto de VidaMariana", "Projeto de VidaMariana", "Física", "", "PortuguêsEber", "Espanhol - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], TER: ["MTA", "MatemáticaLeo", "MatemáticaLeo", "", "Geografia", "Filosofia - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "Sociologia", "MTARute", "", "Inglês", "Orientação Acadêmica - Sem Professor", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["Arte", "Química", "Práticas", "", "HistóriaFran", "Educação Física", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["BiologiaMarcelo", "Orientação Acadêmica - Sem Professor", "PortuguêsEber", "", "OficinasManuela", "OficinasManuela", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] },
      "3BA": { SEG: ["Espanhol - Sem Professor", "HistóriaFran", "Sociologia", "", "Inglês", "Geografia", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], TER: ["Projeto de VidaMariana", "Projeto de VidaMariana", "MTA", "", "Biologia", "Filosofia", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUA: ["Práticas", "MTARute", "Orientação Acadêmica - Sem Professor", "", "PortuguêsEber", "PortuguêsEber", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], QUI: ["Educação Física", "Arte", "Práticas", "Química", "Física", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"], SEX: ["Orientação Acadêmica - Sem Professor", "MatemáticaLeo", "MatemáticaLeo", "", "OficinasAnaG", "OficinasAnaG", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR", "", "PROJETO INTEGRADOR", "PROJETO INTEGRADOR"] }
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
        else if (i === 5) td.textContent = "Almoço - 12:00h á 13:20h";
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
