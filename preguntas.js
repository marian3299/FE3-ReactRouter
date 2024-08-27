const preguntasGit = [
  {
    id: 1,
    pregunta: "¿Qué es Git?",
    respuesta:
      "Git es un sistema de control de versiones distribuido que permite a múltiples desarrolladores trabajar en un proyecto de manera simultánea, manteniendo un historial de cambios y facilitando la colaboración.",
  },
  {
    id: 2,
    pregunta: "¿Cómo clonar un repositorio de Git?",
    respuesta:
      "Para clonar un repositorio de Git, se utiliza el comando `git clone <url-del-repositorio>`. Esto copia todo el historial y los archivos del proyecto a tu máquina local.",
  },
  {
    id: 3,
    pregunta: "¿Qué es un 'commit' en Git?",
    respuesta:
      "Un 'commit' en Git es una instantánea del estado actual de tu proyecto. Es un punto de guardado que incluye todos los cambios hechos en el código hasta ese momento, y tiene un mensaje descriptivo.",
  },
  {
    id: 4,
    pregunta: "¿Qué es un 'branch' en Git?",
    respuesta:
      "Un 'branch' (rama) en Git es una bifurcación del código principal que permite trabajar en nuevas funcionalidades o correcciones sin afectar el código principal. Se puede fusionar con el branch principal una vez que los cambios están completos.",
  },
  {
    id: 5,
    pregunta: "¿Cómo se visualiza el historial de cambios en Git?",
    respuesta:
      "Para visualizar el historial de cambios en Git, se usa el comando `git log`. Esto muestra una lista de commits realizados, junto con sus mensajes y detalles como el autor y la fecha.",
  },
];

export default preguntasGit;
