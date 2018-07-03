# SISTEMÁTICA PARA SEQUENCIAMENTO E BALANCEAMENTO DE LOTES EM MÚLTIPLAS LINHAS DE PRODUÇÃO
## IGOR CARLOS PULINI
## MAYKEL RODRIGUES
## MICHEL JOSÉ ANZANELLO



<br />O objetivo da pesquisa é fortalecer o polo de confecções noroeste do Espírito Santo, fornecendo uma solução integrada para terceirização parcial da produção sobre um horizonte de programação, na qual são necessárias a alocação, sequenciamento e balanceamento de lotes entre múltiplas linhas de produção com operadores polivalentes. O trabalho foi testado com sucesso no setor do vestuário e contempla as seguintes decisões, dado um conjunto de lotes e um horizonte de programação:<br />
  
  + Seleciona a linha de produção (interna ou terceirizada) que irá processar cada lote. 
  
  + Em um horizonte de programação, a solução preenche completamente as linhas produção internas, enquanto o excedente da capacidade       interna é enviado para empresas terceirizadas.
 
  +	Os lotes são priorizados em relação a entrega dos pedidos, o número de clientes atendidos e volume de entrega.

  +	A sistemática define quais máquinas cada operador vai manipular e quais tarefas deve executar, respeitando a precedência das      operações e de forma balanceada. A distribuição considera a possibilidade de existir mais máquinas disponíveis em cada linha de produção, podendo um operador manipular mais de uma máquina.

O trabalho pode ser aplicado em qualquer empresa que se enquadre nestas características seguindo os passos definidos na Figura. Na etapa 1 uma planilha de entrada descrevendo a estrutura das linhas, recursos, operadores e lotes de produção é submetida ao algoritmo. Esta planilha de entrada deve ser criada conforme este modelo *[Planilha de Entrada](/Entrada.xls)*. Na etapa 2, os resultados obtidos no algoritmo são encaminhados para o framework que permite analisar e aplicar os resultados no chão de fábrica. 



![Passos para Utilização](/FIGURA1.png)

## Aplicativos
* [Visualizador Web](https://igorcarlospulini.github.io/dist) 
* [Algoritmo Otimização](https://www.dropbox.com/s/47i1xeaqjzj0xrd/NSGA.zip?dl=0)


## Entrada de Dados 
* [Modelo Planilha Entrada](/Entrada.xls)
* [Exemplo Planilha Entrada](/ModEntrada.xls)

## Resultados de Saída 
* [Modelo Planilha Saída](/Entrada.xls)
* [Exemplo Planilha Saída](/Saida.xls)



