let listaTarefas = [
    "Fazer a cama",
    "Tomar café da manhã",
    "Fazer exercícios",
    "Tomar banho",
    "Trabalhar",
    "Almoçar",
    "Estudar",
    "Cuidar das plantas",
    "Jantar",
    "Ler um livro",
    "Dormir",
  ];
  
 
  function buscaTarefa(tarefa) {
    return listaTarefas.find(tarefa); 
  }
  

  function alteraTarefa(posicao, novaTarefa) {
    listaTarefas[posicao] = novaTarefa;
  }
  

  function deletaTarefa(posicao) {
    listaTarefas.pop
  }
  
  
  function adicionaTarefa(tarefa) {
    listaTarefas.push(tarefa);
}console.log(listaTarefas)
  