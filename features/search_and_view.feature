#language: pt

Funcionalidade: Pesquisar e visualizar cursos
Para que possa ter acesso ao catálogo de preços e informações dos cursos Estratégia Concursos
Como estudante de concursos
Eu quero pesquisar e visualizar cursos pelas diversas categorias de pesquisa do site

  Contexto: Acessar site
    Dado que eu acessei a home Estratégia
    E que eu cliquei em "Não" receber notificações
    E que eu aceitei a utilização de cookies
  @search_teacher
  Cenário: Pesquisar Por professor: cursos da Professora Ena Loiola
    Dado que eu cliquei na opção CURSOS ONLINE PARA CONCURSOS: "Por professor"
    E que estou na tela "Cursos por professor"
    E que eu pesquisei "Ena Loiola" no filtro da lista "Todos os professores"
    E que eu cliquei no resultado "Ena Loiola"
    E que estou na tela de descrição do professor "Ena Loiola"
    Quando pesquisar e clicar no curso "Inglês p/ PRF (Policial) Pós-Edital" 
    Então eu vejo a tela de descrição do curso com título "Inglês p/ PRF (Policial) Pós-Edital" e comparo o valor parcelado do item na lista com o total na página de descrição
  @search_contest
  Cenário: Pesquisar Por Cuncurso: Polícia Militar de São Paulo (PM-SP)
    Dado que eu cliquei na opção CURSOS ONLINE PARA CONCURSOS: "Por concurso"
    E que estou na tela "Cursos por concurso"
    E que eu pesquisei "Polícia Militar de São Paulo (PM-SP)" no filtro da lista "Todos os concursos"
    Quando eu clicar em "Polícia Militar de São Paulo (PM-SP)" na lista de "Todos os concursos"
    Então eu vejo a tela de descrição do concurso com título "Polícia Militar de São Paulo (PM-SP)" e "48 cursos disponíveis"
  @search_subject
  Cenário: Pesquisar Por Matéria: Direito Civil
    Dado que eu cliquei na opção CURSOS ONLINE PARA CONCURSOS: "Por matéria"
    E que estou na tela "Cursos por matéria"
    E que eu pesquisei "Direito Civil" no filtro da lista "Todas as matérias"
    Quando eu clicar em "Direito Civil" na lista de "Todas as matérias"
    Então eu vejo a tela de descrição da matéria com título "Direito Civil" e "540 cursos disponíveis"
  @view_all
  Cenário: CURSOS ONLINE PARA CONCURSOS: Ver Todos
    Dado que eu cliquei na opção CURSOS ONLINE PARA CONCURSOS: "Ver todos"
    Quando eu estiver na tela "Cursos online"
    Então devo visualizar o painel de DESTAQUES