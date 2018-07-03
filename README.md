# SISTEMÁTICA PARA SEQUENCIAMENTO E BALANCEAMENTO DE LOTES EM MÚLTIPLAS LINHAS DE PRODUÇÃO

## IGOR CARLOS PULINI
## MAYKEL RODRIGUES
## MICHEL JOSÉ ANZANELLO

<br />

<br />O objetivo da pesquisa é fortalecer o polo de confecções noroeste do Espírito Santo, fornecendo uma solução integrada para terceirização parcial da produção sobre um horizonte de programação, na qual são necessárias a alocação, sequenciamento e balanceamento de lotes entre múltiplas linhas de produção com operadores polivalentes. O trabalho foi testado com sucesso no setor do vestuário e contempla as seguintes decisões, dado um conjunto de lotes e um horizonte de programação:<br />
  
  + Seleciona a linha de produção (interna ou terceirizada) que irá processar cada lote. 
  
  + Em um horizonte de programação, a solução preenche completamente as linhas produção internas, enquanto o excedente da capacidade       interna é enviado para empresas terceirizadas.
 
  +	Os lotes são priorizados em relação a entrega dos pedidos, o número de clientes atendidos e volume de entrega.

  +	A sistemática define quais máquinas cada operador vai manipular e quais tarefas deve executar, respeitando a precedência das      operações e de forma balanceada. A distribuição considera a possibilidade de existir mais máquinas disponíveis em cada linha de produção, podendo um operador manipular mais de uma máquina.
<br />
O trabalho pode ser aplicado em qualquer indústria com as características, seguindo os passos exibidos na Figura abaixo e descritos a seguir:

+ **Etapa 1** - Uma planilha de entrada descrevendo a estrutura das linhas, recursos, operadores e lotes de produção é submetida ao algoritmo que distribui as tarefas dos lotes entre os operadores das linhas de produção.

+ **Etapa 2** - O algoritmo devolve como resultado uma planilha descrevendo a distribuição dos lotes efetuada. 

+ **Etapa 3** - A planilha de saída é submetida framework que permite analisar e aplicar os resultados no chão de fábrica. 
<br /><br /><br />


![Passos para Utilização](/FIGURA1.png)

## Ferramentas
* [Framework Web](https://igorcarlospulini.github.io/dist) 
* [Ferramenta de Otimização](https://www.dropbox.com/s/47i1xeaqjzj0xrd/NSGA.zip?dl=0)



## Entrada de Dados 
* [Modelo Planilha Entrada](https://www.dropbox.com/s/o6vdqhi9obwdmes/Modelo%20Arquivo%20de%20Entrada.xlsx?dl=0)
* [Exemplo Planilha Entrada](https://www.dropbox.com/s/54ufpamgxg3x4ai/Exemplo%20Planilha%20Entrada.xls?dl=0)


## Resultados 
* [Modelo Planilha Saída](https://www.dropbox.com/s/eo9cwg8ezfi3jy5/Modelo%20Arquivo%20Sa%C3%ADda.xlsx?dl=0)
* [Exemplo Planilha Saída](https://www.dropbox.com/s/4gt932czzb7ie7r/Exemplo%20Planilha%20Saida.xls?dl=0)



