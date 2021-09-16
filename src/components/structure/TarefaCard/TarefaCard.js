import React from "react";
import { Link } from "react-router-dom";
import "./TarefaCard.scss";

const TarefaCard = (props) => {
  const tarefa = props.tarefa;

  return (
    <div className="card">
      <h3>
        <b>Título:</b> {tarefa.titulo}
      </h3>
      <p>
        <b>Descrição:</b> {tarefa.descrição}
      </p>
      <p>
        <b>Prioridade:</b> {tarefa.prioridade}
      </p>
      <p>
        <b>Status:</b> {tarefa.status}
      </p>
      <p>
        <b>Prazo:</b> {tarefa.prazo}
      </p>

      <Link to={`/view/${tarefa._id}`}>
        <button>Alterar</button>
      </Link>
    </div>
  );
};

export default TarefaCard;
