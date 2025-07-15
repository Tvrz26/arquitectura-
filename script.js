// Malla completa con todos los semestres y prerrequisitos
const ramos = [
  // 🟦 Primer Semestre
  { codigo: "ARQ-1310", nombre: "Introducción a la Arquitectura", semestre: 1 },
  { codigo: "ARQ-1410", nombre: "Dibujo Técnico I-A", semestre: 1 },
  { codigo: "ARQ-1430", nombre: "Expresión I", semestre: 1 },
  { codigo: "ARQ-2170", nombre: "Diseño Arquitectónico Básico I", semestre: 1, prerequisitos: ["ARQ-1430"] },
  { codigo: "DDP-1000", nombre: "Orientación Institucional", semestre: 1 },
  { codigo: "FIL-0110", nombre: "Introducción a la Filosofía", semestre: 1 },
  { codigo: "HIS-0110", nombre: "Fund. de Historia Social Dominicana", semestre: 1 },
  { codigo: "LET-0110", nombre: "Lengua Española Básica I", semestre: 1 },
  { codigo: "MAT-0140", nombre: "Matemática Básica", semestre: 1 },

  // 🟦 Segundo Semestre
  { codigo: "ARQ-1250", nombre: "Geometría Descriptiva I-A", semestre: 2, prerequisitos: ["ARQ-1410"] },
  { codigo: "ARQ-1420", nombre: "Dibujo Arquitectónico I", semestre: 2, prerequisitos: ["ARQ-1410"] },
  { codigo: "ARQ-1440", nombre: "Expresión II", semestre: 2, prerequisitos: ["ARQ-1430"] },
  { codigo: "ARQ-1820", nombre: "Historia de la Arquitectura I", semestre: 2, prerequisitos: ["ARQ-1310"] },
  { codigo: "ARQ-2180", nombre: "Diseño Arquitectónico Básico II", semestre: 2, prerequisitos: ["ARQ-2170", "ARQ-1310", "ARQ-1430"] },
  { codigo: "EFS-0110", nombre: "Educación Física", semestre: 2 },
  { codigo: "LET-0120", nombre: "Lengua Española Básica II", semestre: 2, prerequisitos: ["LET-0110"] },
  { codigo: "MAT-2550", nombre: "Análisis Matemático", semestre: 2, prerequisitos: ["MAT-0140"] },
  { codigo: "QUI-0140", nombre: "Química Básica", semestre: 2 },
  { codigo: "SOC-0110", nombre: "Int. a las Ciencias Sociales", semestre: 2 },

  // 🟦 Tercer Semestre
  { codigo: "ARQ-1230", nombre: "Perspectiva y Sombra", semestre: 3, prerequisitos: ["ARQ-1250", "ARQ-1420"] },
  { codigo: "ARQ-2000", nombre: "Modelo Arquitectónico", semestre: 3, prerequisitos: ["ARQ-1250", "ARQ-2170"] },
  { codigo: "ARQ-2190", nombre: "Diseño Arquitectónico Básico III", semestre: 3, prerequisitos: ["ARQ-2170", "ARQ-2180", "ARQ-1420"] },
  { codigo: "ARQ-2340", nombre: "Teoría de la Arquitectura I", semestre: 3, prerequisitos: ["ARQ-1310"] },
  { codigo: "ARQ-2830", nombre: "Historia de la Arquitectura II", semestre: 3, prerequisitos: ["ARQ-1820"] },
  { codigo: "BIO-0140", nombre: "Biología Básica", semestre: 3 },

  // 🟦 Cuarto Semestre
  { codigo: "FIS-0140", nombre: "Física Básica", semestre: 4 },
  { codigo: "INF-1030", nombre: "Introducción a la Informática", semestre: 4, prerequisitos: ["MAT-0140"] },
  { codigo: "ARQ-2250", nombre: "Dibujo con Ordenador I", semestre: 4, prerequisitos: ["INF-1030"] },
  { codigo: "ARQ-2330", nombre: "Arquitectura y Clima", semestre: 4, prerequisitos: ["ARQ-2180"] },
  { codigo: "ARQ-3110", nombre: "Diseño Arquitectónico Básico IV", semestre: 4, prerequisitos: ["ARQ-2170", "ARQ-2180", "ARQ-2190"] },
  { codigo: "ARQ-3350", nombre: "Teoría de la Arquitectura II", semestre: 4, prerequisitos: ["ARQ-2340"] },
  { codigo: "ARQ-3540", nombre: "Estática", semestre: 4, prerequisitos: ["MAT-2550", "FIS-0140"] },
  { codigo: "ARQ-3830", nombre: "Historia de la Arquitectura III", semestre: 4, prerequisitos: ["ARQ-2830"] },
  { codigo: "SOC-1270", nombre: "Métodos de Investigación", semestre: 4, prerequisitos: ["SOC-0110"] },

  // 🟦 Quinto Semestre
  { codigo: "AGM-1330", nombre: "Topografía para Arquitectos", semestre: 5, prerequisitos: ["ARQ-1410"] },
  { codigo: "ARQ-2300", nombre: "Arquitectura y Comportamiento Humano", semestre: 5, prerequisitos: ["ARQ-1310"] },
  { codigo: "ARQ-3190", nombre: "Diseño Arquitectónico Básico V", semestre: 5, prerequisitos: ["ARQ-2180", "ARQ-2190"] },
  { codigo: "ARQ-4050", nombre: "Resistencia de Materiales", semestre: 5, prerequisitos: ["ARQ-3540"] },
  { codigo: "ARQ-4550", nombre: "Materiales y Métodos de Construcción I", semestre: 5, prerequisitos: ["ARQ-2190"] },
  { codigo: "SOC-2110", nombre: "Arquitectura y Sociedad", semestre: 5, prerequisitos: ["SOC-0110"] },

  // 🟦 Sexto Semestre
  { codigo: "ARQ-3240", nombre: "Interiores", semestre: 6, prerequisitos: ["AGM-1330", "ARQ-2300"] },
  { codigo: "ARQ-3410", nombre: "Urbanismo I", semestre: 6, prerequisitos: ["ARQ-2190"] },
  { codigo: "ARQ-3580", nombre: "Diseño Estructural I", semestre: 6, prerequisitos: ["AGM-1330", "ARQ-2300", "ARQ-4550"] },
  { codigo: "ARQ-4110", nombre: "Diseño Arquitectónico VI", semestre: 6, prerequisitos: ["ARQ-3110"] },
  { codigo: "ARQ-4500", nombre: "Instalaciones Sanitarias", semestre: 6, prerequisitos: ["AGM-1330", "ARQ-2300", "ARQ-4550"] },
  { codigo: "ARQ-4560", nombre: "Materiales y Métodos de Construcción II", semestre: 6, prerequisitos: ["ARQ-4550"] },

  // 🟦 Séptimo Semestre
  { codigo: "ARQ-3420", nombre: "Urbanismo II", semestre: 7, prerequisitos: ["ARQ-3410"] },
  { codigo: "ARQ-3590", nombre: "Diseño Estructural II", semestre: 7, prerequisitos: ["ARQ-3580"] },
  { codigo: "ARQ-4120", nombre: "Diseño Arquitectónico VII", semestre: 7, prerequisitos: ["ARQ-4110", "ARQ-3110"] },
  { codigo: "IEM-3540", nombre: "Instalaciones Eléctricas y de Iluminación I", semestre: 7 },

  // 🟦 Octavo Semestre
  { codigo: "ADM-1120", nombre: "Principios de Administración", semestre: 8 },
  { codigo: "ARQ-3430", nombre: "Urbanismo III", semestre: 8, prerequisitos: ["ARQ-3420", "ARQ-3410"] },
  { codigo: "ARQ-3610", nombre: "Costo y Presupuesto I", semestre: 8, prerequisitos: ["ARQ-4500", "IEM-3540"] },

  // 🟦 Noveno Semestre
  { codigo: "ARQ-4910", nombre: "Diseño Arquitectónico VIII", semestre: 9, prerequisitos: ["ARQ-4120", "ARQ-3110"] },
  { codigo: "ARQ-5120", nombre: "Trabajo de Grado I", semestre: 9, prerequisitos: ["ADM-1120", "ARQ-4910"] },
  { codigo: "ARQ-5610", nombre: "Práctica de la Arquitectura", semestre: 9, prerequisitos: ["ARQ-4910"] },
  { codigo: "ARQ-5630", nombre: "Organización y Administración de Obras I", semestre: 9, prerequisitos: ["ARQ-3610"] },
  { codigo: "ARQ-ZZ20", nombre: "Asignatura Optativa", semestre: 9 },

  // 🟦 Décimo Semestre
  { codigo: "ARQ-5130", nombre: "Trabajo de Grado II", semestre: 10, prerequisitos: ["ARQ-5120", "ARQ-5610"] }
];

const estadoRamos = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  let semestreActual = 0;

  ramos.forEach(ramo => {
    if (ramo.semestre !== semestreActual) {
      semestreActual = ramo.semestre;
      const titulo = document.createElement("div");
      titulo.className = "semestre-titulo";
      titulo.textContent = `🟦 Semestre ${semestreActual}`;
      contenedor.appendChild(titulo);
    }

    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.textContent = `${ramo.codigo}: ${ramo.nombre}`;
    div.dataset.codigo = ramo.codigo;

    div.onclick = () => {
      if (div.classList.contains("bloqueado")) return;
      if (!div.classList.contains("aprobado")) {
        div.classList.add("aprobado");
        estadoRamos[ramo.codigo] = true;
      } else {
        div.classList.remove("aprobado");
        delete estadoRamos[ramo.codigo];
      }
      desbloquearRamos();
    };

    contenedor.appendChild(div);
  });

  desbloquearRamos();
}

function desbloquearRamos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const codigo = div.dataset.codigo;
    const ramo = ramos.find(r => r.codigo === codigo);
    const requisitos = ramo.prerequisitos || [];
    const cumplidos = requisitos.every(req => estadoRamos[req]);

    if (requisitos.length === 0 || cumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    }
  });
}

crearMalla();
