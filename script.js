const ramos = [
  { codigo: "ARQ-1310", nombre: "Introducción a la Arquitectura", semestre: 1 },
  { codigo: "ARQ-1410", nombre: "Dibujo Técnico I-A", semestre: 1 },
  { codigo: "ARQ-1430", nombre: "Expresión I", semestre: 1 },
  { codigo: "ARQ-2170", nombre: "Diseño Arquitectónico Básico I", semestre: 1, prerequisitos: ["ARQ-1430"] },
  { codigo: "DDP-1000", nombre: "Orientación Institucional", semestre: 1 },
  { codigo: "FIL-0110", nombre: "Introducción a la Filosofía", semestre: 1 },
  { codigo: "HIS-0110", nombre: "Historia Social Dominicana", semestre: 1 },
  { codigo: "LET-0110", nombre: "Lengua Española Básica I", semestre: 1 },
  { codigo: "MAT-0140", nombre: "Matemática Básica", semestre: 1 },

  // Segundo semestre (solo algunos ejemplos por espacio, puedes agregar todos)
  { codigo: "ARQ-1250", nombre: "Geometría Descriptiva I-A", semestre: 2, prerequisitos: ["ARQ-1410"] },
  { codigo: "ARQ-1420", nombre: "Dibujo Arquitectónico I", semestre: 2, prerequisitos: ["ARQ-1410"] },
  { codigo: "ARQ-1440", nombre: "Expresión II", semestre: 2, prerequisitos: ["ARQ-1430"] },
  { codigo: "ARQ-1820", nombre: "Historia de la Arquitectura I", semestre: 2, prerequisitos: ["ARQ-1310"] },
  { codigo: "ARQ-2180", nombre: "Diseño Arquitectónico Básico II", semestre: 2, prerequisitos: ["ARQ-2170", "ARQ-1310", "ARQ-1430"] },

  // Puedes continuar con todos los demás siguiendo esta estructura...
];

const estadoRamos = {}; // para guardar ramos aprobados

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
        desbloquearRamos();
      } else {
        div.classList.remove("aprobado");
        delete estadoRamos[ramo.codigo];
        desbloquearRamos();
      }
    };

    contenedor.appendChild(div);
  });

  desbloquearRamos(); // inicial
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

