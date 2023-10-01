import React, { useState } from 'react';

const Quizz_validada = () => {
  const questions = [
    {
      questionText: '1. O que desenvolve um profissional Front-end?',
      answerOptions: ['A) Parte do código que interage com o usuário', 'B) Parte do código que cria as regras de negócios', 'C) Parte do código que faz a ponte com o banco de dados', 'D) Parte do código que cria os endpoints da aplicação'],
      correctAnswer: 'A) Parte do código que interage com o usuário',
    },
    {
      questionText: '2. O que é NPM?',
      answerOptions: ['A) Sigla que significa "Noção de programação mestra"', 'B) Significa "Node Package Manager" e permite instalar e gerenciar pacotes de dependências', 'C) "Noção primária de manutenção", faz o gerenciamento de manutenção de software', 'D) Comando para instalar e gerenciar arquivos CSS'],
      correctAnswer: 'B) Significa "Node Package Manager" e permite instalar e gerenciar pacotes de dependências',
    },
    {
      questionText: '3. Quais tecnologias são integradas com o React JS?',
      answerOptions: ['A) Java, HTML e CSS', 'B) HTML, CSS e Python', 'C) HTML, CSS e JS', 'D) Go, HTML e CSS'],
      correctAnswer: 'C) HTML, CSS e JS',
    },
  ];

  const [questoesCorretas, setquestoesCorretas] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [pontuacao, setpontuacao] = useState(0);
  const [questaoRespondida, setQuestaoRespondida] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    // Verifica se a questão já foi respondida, se sim, retorna sem fazer nada.
    if (questaoRespondida) {
      return;
    }

    setUserAnswer(selectedAnswer);

    if (selectedAnswer === questions[questoesCorretas].correctAnswer) {
      setpontuacao(pontuacao + 1);
    }

    setTimeout(() => {
      if (questoesCorretas < questions.length) {
        setquestoesCorretas(questoesCorretas + 1);
        setUserAnswer(null);
        setQuestaoRespondida(false); // Permite responder à próxima questão.
      } else {
        // Exibe um alerta quando todas as perguntas foram respondidas.
        alert(`Você acertou ${pontuacao} de ${questions.length} perguntas!`);
      }
    }, 2000);

    // Marca a questão como respondida para desativar os botões de opção.
    setQuestaoRespondida(true);
  };

  const reiniciarQuiz = () => {
    setquestoesCorretas(0);
    setUserAnswer(null);
    setpontuacao(0);
    setQuestaoRespondida(false);
  };

  return (
    <div>
      {questoesCorretas < questions.length ? (
        <div > 
          <h1 id='titulo'>Projeto Quiz com React</h1>
          <p id='pergunta'>{questions[questoesCorretas].questionText}</p>
          {questions[questoesCorretas].answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={userAnswer === option ? 'selected' : ''}
              disabled={questaoRespondida} // Desativa os botões se a questão já foi respondida.
            >
              {option}
            </button>
          ))}
          {/* Exibe a opção selecionada pelo usuário abaixo da pergunta */}
          {userAnswer && (
            <p id='resposta'>Sua resposta: {userAnswer}</p>
          )}
        </div>
      ) : (
        <div className='final'>
          <p>Quiz concluído! Você acertou {pontuacao} de {questions.length} perguntas.</p>
          <button onClick={reiniciarQuiz} id='reiniciar'>Reiniciar</button>
          <p id='rodape'>&copy; Praxedes</p>
        </div>
      )}
    </div>
  );
};

export default Quizz_validada;
