
/*Voltar quiestionario 1*/
function voltarQuiz1() {

  $('#quiz02').modal('hide');

  $('#quiz01').modal('show');

  let number1 = document.querySelector('.voltarStatusQuiz1')
  let number2 = document.querySelector('.voltarStatusQuiz2')
  let number3 = document.querySelector('.voltarStatusQuiz3')
  let number4 = document.querySelector('.voltarStatusQuiz4')


  number1.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"

  number2.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"

  number3.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"

  number4.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"


}

/*Voltar quiestionario 2*/
function voltarQuiz2() {

  $('#quiz03').modal('hide');

  $('#quiz02').modal('show');

  let number3 = document.querySelector('.voltarStatusQuiz03')
  let number4 = document.querySelector('.voltarStatusQuiz04')

  number3.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"

    number4.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"

}

/*Voltar quiestionario 3*/
function voltarQuiz3() {

  var quiz04 = document.querySelectorAll(".quiz04[type=radio]")
  quiz04.checked = false;
  
  $('#quiz04').modal('hide');
 
  $('#quiz03').modal('show');
  
  let number4 = document.querySelector('.voltarStatusQuiz04')

  number4.style.cssText = "text-align: center; border-radius: 50%; width: 50px;" +
    "height: 50px; font-size: 25px; color:black;  margin-left: 100px;"


}


//função carregar modal informaçoes iniciais
$(document).ready(function () {
  $('#quiz01').modal('show');
});



/* cadastro e inicio dos questionarios*/
function cadastra() {

   let sexo = document.querySelectorAll(".form-check-input[type=radio]:checked")

  const input = document.querySelectorAll(".form-control")
  if (input.value != "" && sexo.length==1) {

   

    Swal.fire(
      'Cadastro realizado com sucesso!',
      '',
      'success'

    )
    $(document).ready(function () {
      $('#quiz01').modal('show');

      $('#myModal').modal('hide');

    });
  } else if (input.value === "" || sexo.length==0) {

    Swal.fire(
      'Para Saber mais sobre o seu Tipo de Personalidade voçê precissa preecher todos os seus dados!',
      '',
      'error'
    )
    $(document).ready(function () {
      $('#myModal').modal('show');

    });

  }
}


/* 1º questionario*/
function resultado() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz01[type=radio]:checked").length;
  if (escolhas > 1) {

    /* variavies para varrer os radios quiz01*/
    var E = document.querySelectorAll("input[type=radio][value=E]:checked").length;
    var I = document.querySelectorAll("input[type=radio][value=I]:checked").length;

    /* regras */
    if (E < I) {
      resultQuiz1 = "I"

      /*atualização do estatus numericos*/
      let Numero = document.querySelector('.StatusQuiz2')

      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
        "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"



      Swal.fire(
        resultQuiz1,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz02').modal('show');

        $('#quiz01').modal('hide');

      });

    } else if (E > I) {
      resultQuiz1 = "E"

      /*atualização do estatus numericos*/
      let Numero = document.querySelector('.StatusQuiz2')
        
      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Swal.fire(
        resultQuiz1,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz02').modal('show');


        $('#quiz01').modal('hide');

      });

    } else if (E == I) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz01').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para Avançar para o 2º questionario!',
        '',
        'error'
      )
    }
  } else if (escolhas <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 2º questionario!',
      '',
      'error'
    )

  }
}
/* final 1º questionario*/




/* 2º questionario*/
function resultado2() {

  /*quantidade minima de escolhas*/
  let escolhas2 = document.querySelectorAll(".quiz02[type=radio]:checked").length;
  if (escolhas2 > 8) {

    /* variavies para varrer os radios quiz01*/
    var S = document.querySelectorAll("input[type=radio][value=S]:checked").length;
    var N = document.querySelectorAll("input[type=radio][value=N]:checked").length;

    /* regras */
    if (S < N) {
      resultQuiz2 = "N"

      /*atualização do estatus numericos*/
      let Numero1 = document.querySelector('.StatusQuiz3')
      let Numero2 = document.querySelector('.StatusQuiz4')

      
      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
        "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

        
      Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz03').modal('show');

        $('#quiz02').modal('hide');

      });
    } else if (S > N) {
      resultQuiz2 = "S"

      /*atualização do estatus numericos*/
      let Numero1 = document.querySelector('.StatusQuiz3')
      let Numero2 = document.querySelector('.StatusQuiz4')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

      
    Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
    "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
    "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz03').modal('show');

        $('#quiz02').modal('hide');

      });

    } else if (S == N) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz02').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para Avançar para o 3º questionario!',
        '',
        'error'
      )

    }
  } else if (escolhas2 <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 3º questionario!',
      '',
      'error'
    )

  }
}
/* final 2º questionario*/



/* 3º questionario*/
function resultado3() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz03[type=radio]:checked").length;
  if (escolhas > 1) {

    /* variavies para varrer os radios quiz*/
    var T = document.querySelectorAll("input[type=radio][value=T]:checked").length;
    var F = document.querySelectorAll("input[type=radio][value=F]:checked").length;

    /* regras */
    if (T < F) {
      resultQuiz3 = "F"

      /*atualização do estatus numerico*/
      let Numero1 = document.querySelector('.StatusQuiz01')
      let Numero2 = document.querySelector('.StatusQuiz02')
      let Numero3 = document.querySelector('.StatusQuiz03')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
        "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

        
      Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

      Numero3.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3,
        '',
        'success'
      )

      $(document).ready(function () {
        $('#quiz04').modal('show');

        $('#quiz03').modal('hide');

      });

    } else if (T > F) {
      resultQuiz3 = "T"

      /*atualização do estatus numerico*/
      let Numero1 = document.querySelector('.StatusQuiz01')
      let Numero2 = document.querySelector('.StatusQuiz02')
      let Numero3 = document.querySelector('.StatusQuiz03')

      Numero1.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

      
    Numero2.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
    "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
    "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

    Numero3.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
    "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
    "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#quiz04').modal('show');

        $('#quiz03').modal('hide');

      });
    } else if (T == F) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz03').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para Avançar para o 4º questionario!',
        '',
        'error'
      )

    }
  } else if (escolhas <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para o 4º questionario!',
      '',
      'error'
    )

  }
}/* final 3º questionario*/


/* 4º questionario*/
function resultado4() {

  /*quantidade minima de escolhas*/
  let escolhas = document.querySelectorAll(".quiz04[type=radio]:checked").length;
  if (escolhas > 1) {
    /* variavies para varrer os radios quiz01*/
    var J = document.querySelectorAll("input[type=radio][value=J]:checked").length;
    var P = document.querySelectorAll("input[type=radio][value=P]:checked").length;

    /* regras */
    if (J < P) {
      resultQuiz4 = "P"

      /*atualização do estatus numericos*/
      let Numero = document.querySelector('.StatusQuisFinal')

      Numero.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
      "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
      "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"


      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3 + " - " + resultQuiz4,
        '',
        'success'
      )
      $(document).ready(function () {
        $('#qui').modal('show');

        $('#quiz03').modal('hide');

      });
    } else if (J > P) {
      resultQuiz4 = "J"

      /*atualização do estatus numericos*/
      let Numero = document.querySelector('.StatusQuisFinal')

        Numero.style.cssText = " text-align: center; border-radius: 50%; width: 50px; height: 50px;" +
        "font-size: 25px; color:black; margin-right: 50px; background-color: rgb(41, 212, 41);" +
        "animation: neon 1s alternate infinite ease-in-out; --cor-neon:rgb(41, 212, 41);"

      

      Swal.fire(
        resultQuiz1 + " - " + resultQuiz2 + " - " + resultQuiz3 + " - " + resultQuiz4,
        '',
        'success'
      )
    } else if (J == P) {
      empate = "?"
      $(document).ready(function () {
        $('#quiz04').modal('show');

      });
      Swal.fire(
        'Ouver um empate voce precisa desempatar para OBTER O RESULTADO FINAL!',
        '',
        'error'
      )

    } if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFinal1 = "E - S - T - J <br><br>" + "(Extrovertido, Sensorial, Racional, Julgador)<br><br>" +

        "Segundo os resultados voce é Energético, amigável e sincero; produtivo, organizado e eficiente; realista"
        + "e sensível, mas frequentemente cético sobre idéias novas ou não validadas; honesto e vai direto ao ponto;"
        + " toma decisões rapidamente, expressivo, tradicional, sério, e responsável."

      Swal.fire({

        title: resultFinal1,
        width: 1000,

      })


    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFinal2 = "I - S - T - J <br><br>" + "(Introvertido, Sensorial, Racional, Julgador)<br><br>" + "Segundo os resultados voce é "
        + "Cauteloso, conservador e quieto; literal, realista e prático; cuidadoso e preciso; lógico, honestoe objetivo; resistente à mudança e confortável com rotina; trabalha duro e é responsável." + "O mais importante para o ISTJ é estar em serviço, trabalhar duro, e ser responsável. Para se comunicar com este tipo: esteja preparado e apresente as idéias sequencialmente; dê a ele um pouco de tempo para se adaptar às mudanças; realce os benefícios práticos. Contribuições para a Organização: Realiza tarefas rapidamente e dentro do prazo; trabalha bem dentro das estruturas organizacionais."

      Swal.fire({

        title: resultFinal2,
        width: 1000,


      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "P") {

      var resultFinal3 = "E - S - F - P <br><br>" + " (Extrovertido, Sensorial, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce é Caloroso, sociável e divertido; impulsivo, curioso e conversador; sensitivo, cuidadoso e gentil;" + "sociável e impredizível com um grande zelo pela vida; ativo, sensível, e altamente ciente do mundo físico."
      Swal.fire({
        title: resultFinal3,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "P") {

      var resultFinal4 = "I - S - F - P <br><br>" + " (Introvertido, Sensorial, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce é Amável, humilde, e altamente empático; pensativo, fiel, e bondoso com aqueles que ele conhece bem; sensível à críticas e é ferido facilmente; quieto, fala macia e gentil; adaptável," + "sensível, e curioso; realista e pés no chão. O mais importante para o ISFP é sentir paz e harmonia com as pessoas e lugares que mais importam para ele. Para se comunicar com este tipo: evite confrontos, seja cooperativo e gentil; insista em formas práticas. Contribuições para a Organização: Atende às necessidades das pessoas dentro da organização conforme estas surjam; traz alegria ao trabalho."

      Swal.fire({
        title: resultFinal4,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFina5 = "E - N - T - J <br><br>" + "(Extrovertido, Sensorial, Racional, Perceptivo)<br><br>" + "Segundo os resultados voce é Amigável, fortemente querido e sincero; honesto, lógico e exigente de si próprio e dos outros; dirigido para demonstrar competência; imaginativo com uma perspectiva global; decisivo, organizado e eficiente. <br><br>" + " O mais importante para o ENTJ é demonstrar sua competência e fazer que coisas importantes aconteçam. Para se comunicar com este tipo: vá direto ao ponto, seja organizado; enfatize aspectos de criatividade e inovação de idéias; esteja preparado para defender sua posição com lógica. Contribuições para a Organização: Desenvolve planos bem estruturados; cria estratégias que funcionam na direção de objetivos amplos."

      Swal.fire({
        title: resultFina5,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "J") {

      var resultFinal6 = "I - N- T - J <br><br>" + "(Introvertido, Intuitivo, Racional, Julgador)<br><br>" + "Segundo os resultados voce é Autônomo, reservado e intelectual; criativo, inovador e original; crítico, analítico e lógico; intelectualmente curioso, dirigido ao aprendizado e a aumentar sua competência e conhecimento; sociavelmente cauteloso e reservado; organizado e definitivo. <br><br>" + " O mais importante para o INTJ é sua independência e poder viver de acordo com seus próprios padrões. Para se comunicar com este tipo: apele para a criatividade e inovação; baseie os argumentos em razões lógicas; seja organizado e evite cometer erros que afetem a competência do INTJ. Contribuições para a Organização: Organiza idéias em planos de ação; trabalha a fim de remover todos os obstáculos para que os objetivos sejam atendidos"

      Swal.fire({
        title: resultFinal6,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "J") {

      var resultFinal7 = "E - N - F - J <br><br>" + "(Extrovertido, Intuitivo, Sentimental, Julgador)<br><br>" + "Segundo os resultados voce é Amigável, aberto e entusiástico; bondoso, comunicativo e discreto; altamente empático mas ferido facilmente; criativo e original; decisivo e apaixonado, expressivo, produtivo, organizado e responsável. <br><br>" + "O mais importante para o ENFJ são seus relacionamentos e a oportunidade de comunicar e se conectar com os outros. Para se comunicar com este tipo: expresse apreciação por suas contribuições; evite confrontos, seja diplomático e tente manter a harmonia; respeite os sentimentos, necessidades e valores do ENFJ. Contribuições para a Organização: Comunica valores organizacionais; traz novas idéias sobre como as organizações deveriam tratar as pessoas."

      Swal.fire({
        title: resultFinal7,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "J") {

      var resultFinal8 = "I - S - T - J <br><br>" + "(Introvertido, Intuitivo, Sentimental, Julgador)<br><br>" + "Segundo os resultados voce é Criativo, original e independente; pensativo, caloroso e sensível; pensamentos globais com grande paixão para sua visão original; cauteloso, deliberado e planejado; organizado, produtivo e decisivo; reservado e educado. <br><br>" + "O mais importante para o INFJ são suas idéias e ser fiel a sua visão. Para se comunicar com este tipo: apresente suas idéias, visão, com ênfase em objetivos amplos; apele para a criatividade; espere por atenção do INFJ sobre o assunto, para somente depois aprofundar. Contribuições para a Organização: Proporciona visões orientadas para o futuro sobre como servir as necessidades humanas; cumpre com seus compromissos."

      Swal.fire({
        title: resultFinal8,
        width: 1000,

      })
    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "P") {

      var resultFinal9 = "E - N - F - P <br><br>" + "(Extrovertido, Intuitivo, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce é Entusiástico, conversador, e aberto; inteligente, curioso e divertido; importa-se profundamente, sensível e gentil; altamente inovador, criativo, otimista e original; adaptável e desembaraçado mas desorganizado algumas vezes. <br><br>" + "O mais importante para o ENFP é a liberdade para ver possibilidades, fazer conexões, e estarcom uma variedade de pessoas. Para se comunicar com este tipo: foque em possibilidades de inovação e interesse, e em novas formas de resolver problemas; não oprima o ENFP com fatos e detalhes; seja flexível, relaxe. Contribuições para a Organização: Inicia mudanças; origina projetos e ações."

      Swal.fire({
        title: resultFinal9,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "F" && resultQuiz4 === "P") {


      var resultFinal10 = "I - N - F - P <br><br>" + "(Introvertido, Intuitivo, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce é Quieto, reservado e gentil; profundamente apaixonado, sensível e ferido facilmente; amante ededicado aos que estão perto dele; criativo, original e imaginativo; curioso e flexível em pequenas tarefas; inconformado." + "O mais importante para o INFP é sua crença e vida presas profundamente em harmonia com seus valores. Para se comunicar com este tipo: compartilhe da opinião e de valores genuínos do INFP; respeite seu tempo de resposta e sua privacidade; enfatize a maneira que as idéias beneficiarão outras idéias. Contribuições para a Organização: É persuasivo sobre seus ideais; trabalha a fim de encontrar um lugar para cada pessoa dentro da organização."

      Swal.fire({
        title: resultFinal10,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "P") {

      var resultFinal11 = "E - S - T - P <br><br>" + "(Extrovertido, Sensorial, Racional, Perceptivo) <br><br>" + "Segundo os resultados voce é  Ativo, aventureiro e impulsivo; conversador e curioso; casual, adaptativo e esperto; lógico e calmo mas capaz de grande humor, divertido e charmoso; observador e totalmente presente no momento, literal e prático." + "O mais importante para o ESTP é a liberdade para ter o divertimento e para experimentar inteiramente aqui e agora a vida. Para se comunicar com este tipo: seja divertido, não leve tudo a sério, mas seja específico e direto; forneça resultados práticos e pragmáticos. Contribuições para a Organização: Faz as coisas acontecerem, mantem tudo vivo; negocia e se compromete com o andamento das coisas."

      Swal.fire({
        title: resultFinal11,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "T" && resultQuiz4 === "P") {


      var resultFinal12 = "I - S - T - P <br><br>" + "(Introvertido, Sensorial, Racional, Perceptivo) <br><br>" + "Segundo os resultados voce é Lógico, pragmático e objetivo; quieto, modesto e autônomo; realístico e reservado; impulsivo e curioso sobre o mundo físico; flexível e engenhoso; objetivo e não emocional. " + "O mais importante para o ESTP é a liberdade de agir independentemente e seguir seusimpulsos. Para se comunicar com este tipo: evite apelos emocionais, use lógicas claras; respeite sua privacidade e nunca intimide; ouça-o cuidadosamente e dê ao ISTP um tempo para pensar no que fazer. Contribuições para a Organização: Age como solucionador de problemas, buscando atender às necessidades e aos problemas do momento; funciona como um compêndio ambulante de informação."

      Swal.fire({
        title: resultFinal12,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "J") {


      var resultFinal13 = "I - S - F - J <br><br>" + "(Introvertido, Sensorial, Sentimental, Julgador)<br><br>" + "Segundo os resultados voce é Cauteloso, gentil e pensativo; hesitante até conhecer as pessoas, tornando-se bondoso e cuidadoso; muito literal e ciente do mundo físico; descompromissado sobre padrões pessoais e ofendido facilmente; aplicado e consciente, organizado e decisivo." + "O mais importante para o ISFJ é viver uma vida estável e ajudar pessoas de forma real. Para se comunicar com este tipo: fale de forma clara e devagar, respeite sua privacidade; seja explícito e mapeie os passos de suas idéias; honre seus compromissos com o ISFJ, fique atento. Contribuições para a Organização: É cuidadoso e responsável com detalhes e rotinas; não mede esforços para servir as pessoas."

      Swal.fire({
        title: resultFinal13,
        width: 1000,

      })
    } else if (resultQuiz1 === "E" && resultQuiz2 === "S" && resultQuiz3 === "F" && resultQuiz4 === "J") {


      var resultFinal14 = "E - S - F - J <br><br>" + "(Extrovertido, Sensorial, Sentimental, Julgador) <br><br>" + "Segundo os resultados voce é Ativo, amigável, e energético; aberto, bondoso e conversador; preocupado com os outros e cuidadoso para ser educado e cooperativo; realístico, literal e consciencioso, altamente sensível e ferido facilmente, organizado, responsável, e convencional." + "O mais importante para o ESFJ são seus relacionamentos e ajudar pessoas na realidade e de forma prática. Para se comunicar com este tipo: respeite seus pensamentos, olhe nos olhos quando falar com eles; mencione pontos de acordo primeiro; seja claro e específico, modele os passos se possível. Contribuições para a Organização: Trabalha bem com as pessoas, especialmente em equipe; completa as tarefas dentro do prazo e de maneira precisa."

      Swal.fire({
        title: resultFinal14,
        width: 1000,

      })

    } else if (resultQuiz1 === "E" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "P") {

      var resultFinal15 = "E - N - T - P <br><br>" + "(Extrovertido, Intuitivo, Sentimental, Perceptivo)<br><br>" + "Segundo os resultados voce é Amigável, simpático e aberto; perspicaz, energético e irrevente; engenhoso, imaginativo e criativo; curioso, flexível e impredizível; lógico e analítico." + "O mais importante para o ENTP é ser criativo, está vendo possibilidades e está tendo sempre novos desafios. Para se comunicar com este tipo: foque em possibilidades de criatividade; espere muitos questionamentos e não force um retorno rápido; esteja flexível e aberto para sugestões e melhorias. Contribuições para a Organização: Encara limitações como desafios a serem vencidos; apresenta novas maneiras de fazer as coisas."

      Swal.fire({
        title: resultFinal15,
        width: 1000,

      })

    } else if (resultQuiz1 === "I" && resultQuiz2 === "N" && resultQuiz3 === "T" && resultQuiz4 === "P") {

      var resultFinal16 = "I - N - T - P <br><br>" + "(Introvertido, Intuitivo, Sentimental, Perceptivo) <br><br>" + "Segundo os resultados voce é Quieto, independente, e confidencial; lógico e não emocional; criativo, engenhoso e inovador, pensadores globais; curioso e dirigido para aumentar sua competência, casual e adaptável; inconformado e imprevisível. " + "O mais importante para o INTP é sua privacidade e a oportunidade de resolver problemas complexos de maneiras originais. Para se comunicar com este tipo: respeite sua competência e experiência; dê a ele um tempo para pensar sobre novas coisas; desafie sua criatividade para resolver problemas complexos. Contribuições para a Organização: planeja sistemas lógicos e complexos; demonstrm habilidades para resolver problemas complexos."

      Swal.fire({
        title: resultFinal16,
        width: 1000,

      })
    }

  } else if (escolhas <= 8) {
    Swal.fire(
      'Ao menos escolha 9 campos para avancar para OBTER O RESULTADO FINAL!',
      '',
      'error'
    )
  }
}/* final 4º questionario*/
