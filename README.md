# CalculadoraDeGastos.Prova

##  Descrição do Projeto

Este projeto é uma aplicação web chamada **"Calculadora de Gastos"**, que permite aos usuários inserir, listar e gerenciar seus gastos. Os usuários podem adicionar uma descrição, valor e categoria para cada gasto, além de visualizar o total acumulado de seus gastos.

---

##  Estrutura do Código

### 1. HTML: Estrutura da Página

O arquivo HTML define a estrutura da interface do usuário da aplicação. As principais seções e seus elementos incluem:

- **Cabeçalho**: Contém o título da aplicação.
- **Main**: A seção principal onde os usuários interagem com a aplicação.
- **Formulário**: Um formulário para que o usuário insira os detalhes do gasto, incluindo:
  - Campos de entrada para descrição e valor do gasto.
  - Menu suspenso para a seleção da categoria.
  - Um botão para submeter o formulário.
- **Tabela**: Uma tabela que lista os gastos com suas descrições, valores, categorias e ações.

### 2. CSS: Estilos da Página

O arquivo CSS define a aparência visual e a formatação da página. Os estilos incluem:

- **Estilos Globais**: O corpo da página tem uma fonte _monospace_ sem margem ou preenchimento.
- **Cabeçalho**: O cabeçalho possui um fundo verde, texto branco e bordas arredondadas.
- **Formulário**: O formulário é exibido em coluna com espaçamento entre os campos.
- **Botões**: Os botões têm uma cor de fundo que muda ao passar o mouse e são arredondados.

### 3. JavaScript: Lógica da Aplicação

O arquivo JavaScript é responsável pela funcionalidade da aplicação. As principais funcionalidades incluem:

- **Manipulação de Eventos**: Adiciona um ouvinte de evento ao formulário para capturar a submissão.
- **Adição de Gastos**: Cria uma nova linha na tabela com a descrição, valor e categoria do gasto.
- **Remoção de Gastos**: Cria um botão que permite ao usuário remover um gasto da lista.
- **Atualização do Total**: Calcula e exibe o total acumulado dos gastos, somando os valores na tabela.

---

##  Considerações Finais

Esta aplicação é um exemplo simples de como criar uma interface de usuário interativa usando HTML, CSS e JavaScript. Ela pode ser expandida com funcionalidades adicionais, como:

- Armazenar os dados em um banco de dados.
- Adicionar validação mais robusta.
- Melhorias na interface do usuário.