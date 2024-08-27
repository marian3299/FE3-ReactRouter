import { useParams } from "react-router-dom";
import preguntasGit from "../../preguntas";

const Pregunta = () => {
  const parms = useParams();
  const pregunta = preguntasGit.find(
    (pregunta) => pregunta.id === parseInt(parms.id)
  );
  return (
    <div>
      <h3>{pregunta.pregunta}</h3>
      <p>{pregunta.respuesta}</p>
    </div>
  );
};

export default Pregunta;
