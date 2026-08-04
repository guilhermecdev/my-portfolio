// ----- Dados do portfólio -----
const projects = [
  { id:"powerbi", title:"Dashboards de Performance", category:"Power BI", description:"Painéis de indicadores de produção e qualidade com modelagem de dados, relacionamentos e medidas em DAX.", image:"assets/proj-powerbi.jpg" },
  { id:"sql", title:"Extração e Análise em SQL", category:"SQL", description:"Consultas com JOINs, agregações e window functions para extrair, tratar e analisar dados em bancos relacionais.", image:"assets/proj-sql.jpg" },
  { id:"excel", title:"Automação de Planilhas", category:"Excel Avançado", description:"Relatórios com fórmulas avançadas, tabelas dinâmicas e automação de rotinas para reduzir trabalho manual e erros.", image:"assets/proj-excel.jpg" },
  { id:"python", title:"Exploração de Dados com Python", category:"Python", description:"Limpeza, tratamento e análise exploratória de dados com Pandas e NumPy, transformando volumes brutos em insights claros.", image:"assets/proj-python.jpg" },
  { id:"dax", title:"Modelagem e Medidas DAX", category:"DAX", description:"Criação de medidas calculadas, colunas e modelagem dimensional para relatórios interativos e de alto desempenho.", image:"assets/proj-powerbi.jpg" },
  { id:"kpi", title:"Indicadores de Produção", category:"KPIs", description:"Acompanhamento de metas diárias, eficiência, qualidade e OEE com visualizações focadas em operação industrial.", image:"assets/proj-sql.jpg" },
];

const skills = [
  "SQL — JOINs, agregações e window functions",
  "Power BI — dashboards, relatórios e modelagem",
  "Excel Avançado — fórmulas, tabelas dinâmicas e automação",
  "Python — Pandas e NumPy",
  "Modelagem, Relacionamentos e DAX",
  "IA aplicada — Microsoft 365 Copilot",
];

const experience = [
  { company:"M. Dias Branco", period:"jan. 2024 – atual", location:"Fortaleza, CE",
    roles:["Apontador de Produção — jul. 2025 – atual","Auxiliar de Produção — jan. 2024 – jul. 2025"],
    description:"Acompanhamento de processos produtivos com foco em qualidade, controle de indicadores de desempenho e apoio à tomada de decisão baseada em dados." },
  { company:"L7 Transporte e Logística", period:"ago. 2022 – nov. 2022", location:"Aquiraz, CE",
    roles:["Assistente de Departamento Pessoal"],
    description:"Processos de admissão e demissão, cálculo de férias e rescisões, controle de ponto eletrônico, benefícios e envio de informações ao eSocial." },
];

const education = [
  { school:"Universidade Cruzeiro do Sul", course:"CST em Ciência de Dados", period:"jun. 2026 – dez. 2027" },
  { school:"Digital College Brasil", course:"Data Analytics & IA", period:"mai. 2026 – mai. 2027" },
  { school:"Universidade Estadual do Ceará", course:"Profissionalizante em Ciência de Dados", period:"mar. 2025 – dez. 2025" },
  { school:"Dev Club", course:"Tecnologia da Informação e Comunicação", period:"abr. 2025 – dez. 2025" },
  { school:"Universidade Estácio de Sá", course:"Bacharelado em Engenharia de Software", period:"jan. 2024 – fev. 2028" },
];

const certifications = [
  "Formação Microsoft Power BI Profissional",
  "SQL para Análise de Dados",
  "Microsoft Excel",
  "Copilot na Prática: IA, Prompts e Automação",
];

const languages = ["Português — nativo","Inglês — básico/intermediário","Espanhol — básico"];

// ----- Render -----
const arrowSvg = '<span class="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 17.6 16.6 8H9V6h10v10h-2V9.4L7.4 19 6 17.6z"/></svg></span>';

document.getElementById("projects").innerHTML = projects.map(p => `
  <article class="project">
    <div class="project-img"><img src="${p.image}" alt="${p.title}" loading="lazy" width="768" height="576" /></div>
    <div class="project-body">
      <div class="project-top">
        <div>
          <p class="project-cat">${p.category}</p>
          <h3>${p.title}</h3>
        </div>
        ${arrowSvg}
      </div>
      <p class="project-desc">${p.description}</p>
    </div>
  </article>`).join("");

document.getElementById("skills").innerHTML = skills.map(s => `<span>${s}</span>`).join("");

document.getElementById("jobs").innerHTML = experience.map(j => `
  <article class="job">
    <div class="job-head">
      <h3>${j.company}</h3>
      <p class="job-period">${j.period} • ${j.location}</p>
    </div>
    <div class="job-roles">${j.roles.map(r => `<span>${r}</span>`).join("")}</div>
    <p class="job-desc">${j.description}</p>
  </article>`).join("");

document.getElementById("education").innerHTML = education.map(e => `
  <li><strong>${e.course}</strong><p>${e.school}</p><p class="period">${e.period}</p></li>`).join("");

document.getElementById("certs").innerHTML = certifications.map(c => `<li>${c}</li>`).join("");
document.getElementById("langs").innerHTML = languages.map(l => `<li>${l}</li>`).join("");
document.getElementById("year").textContent = new Date().getFullYear();

// ----- Menu mobile -----
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
  menuBtn.setAttribute("aria-expanded","false");
}));

// ----- Animação de entrada -----
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll(".reveal, .project, .job, .skills-block, .about-text, .footer-contact").forEach(el => {
  el.classList.add("reveal"); io.observe(el);
});
