# SISTEMÁTICA PARA SEQUENCIAMENTO E BALANCEAMENTO DE LOTES EM MÚLTIPLAS LINHAS DE PRODUÇÃO
## IGOR CARLOS PULINI
## MAYKEL RODRIGUES
## MICHEL JOSÉ ANZANELLO


<br />Este trabalho apresenta uma solução integrada para terceirização parcial da produção sobre um horizonte de programação, na qual são necessárias a alocação, sequenciamento e balanceamento de lotes entre múltiplas linhas de produção com operadores polivalentes. O trabalho foi testado com sucesso no setor do vestuário e contempla as seguintes decisões, dado um conjunto de lotes e um horizonte de programação:<br />
  
  + A sistemática seleciona a linha de produção (interna ou terceirizada) que irá processar cada lote. 
  
  + Dado o horizonte de programação, a solução preenche completamente as linhas produção internas, enquanto o excedente da capacidade       interna é enviado para empresas terceirizadas.
 
  +	Os lotes são priorizados em relação a entrega dos pedidos, o número de clientes atendidos e volume de entrega.

  +	A sistemática define quais máquinas cada operador vai manipular e quais tarefas deve executar, respeitando a precedência das      operações e de forma balanceada. A distribuição considera a possibilidade de existir mais máquinas disponíveis em cada linha de produção, podendo um operador manipular mais de uma máquina.

O trabalho pode ser aplicado em qualquer empresa que se enquadre nestas características seguindo os passos definidos na Figura. Na etapa 1 uma planilha de entrada descrevendo a estrutura das linhas, recursos, operadores e lotes de produção é submetida ao algoritmo. Esta planilha de entrada deve ser criada conforme modelo disponível abaixo.

A proposta da pesquisa é fortalecer o polo de confecções noroeste do Espírito Santo, fornecendo um sistema que permita executar o sequenciamento e balanceamento das ordens de produção em uma indústria de confecções. Este sistema É fornecido gratuitamente as empresas de confecção e é flexível o suficiente para se adaptar as necessidades de pequenas, médias e grandes empresas de confecção, com produção própria ou prestadoras de serviços.

![Método Proposto](https://www.dropbox.com/s/stuivtss8znbsdc/FIGURA1.png)

## Aplicativos
* [Visualizador Web](https://igorcarlospulini.github.io/dist) 
* [Aplicativo Desktop](https://www.dropbox.com/sh/hhh43mul13pbluu/AAD0w4Ng_b84pALUR5DfJnO-a?dl=0)

## Testes
No [link](https://www.dropbox.com/sh/hhh43mul13pbluu/AAD0w4Ng_b84pALUR5DfJnO-a?dl=0) encontra-se o executável do algoritmo, juntamente com uma panilha de exemplo, com os dados de entrada e saída. 

Os dados de entrada são informações referentes a infraestrutura das linhas de produção, isso inclúi recursos físicos e humanos, e ordens de produção. As inforamações devem ser extraídas do cenário o qual deseja-se efetuar o balanceamento e sequenciamento da produção.

A entrada deverá ser inseriada/organizada em uma planilha, como segue no link disponibilizado, dividas por categorias ou páginas, tais como: Recursos, Linhas de Produção, Recursos da Linha de Produção, Ordem de Produção ou Jobs, Tarefas, Operações e Operações Precedentes. A panilha de entrada pode ser alterada de acordo com os dados da confecção, porém deve-se manter o padrão de nomenclatura dos cabeçalhos.

Após a finalização do algoritmo, uma planilha com os dados de saída será gerada. Essa planilha poderá ser visualizada no aplicativo web, que mostrará as informações básicas geradas pelo processo de sequenciamento e balanceamento.
