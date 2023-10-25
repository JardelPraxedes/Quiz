  import React, { useState } from 'react';

  const Quizz_validada = () => {
    const questions = [
      {
        perguntas: '1. O que desenvolve um profissional Front-end?',
        alternativas: ['A) Parte do código que interage com o usuário', 'B) Parte do código que cria as regras de negócios', 'C) Parte do código que faz a ponte com o banco de dados', 'D) Parte do código que cria os endpoints da aplicação'],
        respostaCorreta: 'A) Parte do código que interage com o usuário',
      },
      {
        perguntas: '2. O que é NPM?',
        alternativas: ['A) Sigla que significa "Noção de programação mestra"', 'B) Significa "Node Package Manager" e permite instalar e gerenciar pacotes de dependências', 'C) "Noção primária de manutenção", faz o gerenciamento de manutenção de software', 'D) Comando para instalar e gerenciar arquivos CSS'],
        respostaCorreta: 'B) Significa "Node Package Manager" e permite instalar e gerenciar pacotes de dependências',
      },
      {
        perguntas: '3. Quais tecnologias são integradas com o React JS?',
        alternativas: ['A) Java, HTML e CSS', 'B) HTML, CSS e Python', 'C) HTML, CSS e JS', 'D) Go, HTML e CSS'],
        respostaCorreta: 'C) HTML, CSS e JS',
      },
    ];

    const [questoesCorretas, setquestoesCorretas] = useState(0);
    const [alternativas, setalternativas] = useState(null);
    const [pontuacao, setpontuacao] = useState(0);
    const [questaoRespondida, setQuestaoRespondida] = useState(false);
 
    const identificarClique = (selectedAnswer) =>  {
      if (questaoRespondida) {
        return;
      }

      setalternativas(selectedAnswer);

      if (selectedAnswer === questions[questoesCorretas].respostaCorreta) {
        setpontuacao(pontuacao + 1);
      }

      setTimeout(() => {
        if (questoesCorretas < questions.length) {
          setquestoesCorretas(questoesCorretas + 1);
          setalternativas(null);
          setQuestaoRespondida(false); 
        } else {
  
          alert(`Você acertou ${pontuacao} de ${questions.length} perguntas!`);
        }
      }, 2000);

      
      setQuestaoRespondida(true);
    };

    const reiniciarQuiz = () => {
      setquestoesCorretas(0);
      setalternativas(null);
      setpontuacao(0);
      setQuestaoRespondida(false);
    };

    return (
      <div>
        {questoesCorretas < questions.length ? (
          <div > 
            <h1 id='titulo'>Projeto Quiz com React</h1>
            <p id='pergunta'>{questions[questoesCorretas].perguntas}</p>
            {questions[questoesCorretas].alternativas.map((option, index) => (
              <button
                key={index}
                onClick={() => identificarClique(option)}
                className={alternativas === option ? 'selected' : ''}
                disabled={questaoRespondida} 
              >
                {option}
              </button>
            ))}
            {alternativas && (
              <p id='resposta'>Sua resposta: {alternativas}</p>
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
