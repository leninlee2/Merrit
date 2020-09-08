#Esse projeto tem como finalidade realizacao de teste para
Merrit, calculando todas as posicoes disponiveis para peca
Cavalo de jogo de Xadrez

Estruturamente esta realizado da seguinte forma:

Estrutura:
1) chessstart.js -> endpoint principal que cria a chamada para endpoint de teste
   1.1) Entrada /test e /horseposition , para respectivamente, teste e execução
   de processo de selecao de posicoes disponiveis
2) horse.js -> relacionado com a funcionalidade de negocio (classe), responsavel 
por retorno de funcionalidades relacionados a peca (Cavalo)
   2.1) - GetPositions : Principal para obter posicoes disponiveis para o cavalo
   2.2) - RemoveFilled : Realiza tratativa para evitar que a peca colida com pecas do seu jogo
   2.3) - TreatResult  : Somente formatacao de vetor
   2.4) - Combinations : Realiza todas as combinacoes por posicao existente para peca (independente de outras pecas)
   2.5) - GetIndex     : Somente para validar posicao de item em matriz
3) table.js -> funcionalidades genericas relacionadas a tabuleiro
   3.1) - GetHorizontal: Obtem posicoes disponiveis horizontamente
   3.2) - GetRecursiveTable: Obtem a imagem de todas as posicoes do tabuleiro
   (somente para efeito de testes)
4) unittest.js -> Unit teste desenvolvido utilizando funcionalidade tape
para testes dos metodos empregados
   4.1 -> Nesse processo contem testes de cada metodo utilizado

Servicos:
 Servico post:
    http://localhost:4001/horseposition
    Entrada:
    current: [campo atual preenchido pelo cavalo]
    filled: [Array com todas as pecas preenchidas pelo seu dominio de jogo, sem considerar o adversario ]

Exemplo de chamada -> post:
    {
        "current":"d8",
        "filled": ["f5"]
    }
Outro exemplo:
    {
        "current":"d4",
        "filled": ["f5","b3"]
    }

Servico Get:
    http://localhost:4001/test

    Dados fixo somente para teste , mas executa a mesma funcionalidade
    de serviço post

Observacoes:
    Em uma funcionalidade real, pode ser acrescentado validacao de obtencao de ponto
    cheque mate ou outras informacoes, porem foi limitado somente ao escopo do teste
    Em uma funcionalidade real, pode ser acrescentado segurancao a nivel de transporte
    e autenticacao Diggest (entre outros processos)
    Em uma aplicacao real pode ser utilizar a abordagem DDD para desenvolvimento