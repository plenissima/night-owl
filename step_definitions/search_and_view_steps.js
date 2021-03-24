const { I, Page } = inject();

var courseInstallments = " ";
var pageTite = " ";
const timeout = 10;
var sectionTile = "";

//#region .: Contexto :.

Given('que eu acessei a home Estratégia', () => {
  I.amOnPage(Page.baseUrlPage);
});

Given('que eu cliquei em {string} receber notificações', (option) => {
  Page.defineNotificationOptions(option);
});

Given('que eu aceitei a utilização de cookies', () => {
  I.seeElement(Page.allowCoockiesButton);
  I.click(Page.allowCoockiesButton);
  I.wait(5); // melhorar depois
});

//#endregion

//#region .: Pesquisar curso por professor :.

Given('que eu cliquei na opção CURSOS ONLINE PARA CONCURSOS: {string}', (category) => {
  Page.clickCustomElement(Page.onlineCoursesMenuItem, category);
});

Given('que estou na tela {string}', (screen) => {
  Page.isCurrentPage(screen);
  pageTitle = screen;
});

Given('que eu pesquisei {string} no filtro da lista {string}', (text, listTitle) => {
  I.scrollTo(Page.generateCustomLocatorXpath(Page.pageTitle, pageTite));
  Page.seeSectionTittle(listTitle);
  Page.fillFieldTypingThe(Page.searchFilterInput, text);
});

Given('que eu cliquei no resultado {string}', (listResult) => {
  Page.clickResearchResult(listResult);
})

Given('que estou na tela de descrição do professor {string}', (teacherName) => {
  sectionTile = teacherName;
  Page.seeSectionTittle(teacherName);
})

When('pesquisar e clicar no curso {string}', async (course) => {
  I.scrollTo(Page.generateCustomLocatorXpath(Page.sectionTitle, sectionTile));
  Page.fillFieldTypingThe(Page.searchFilterInput, course);
  courseInstallments = await I.grabTextFrom(Page.researchListItemPrice);
  Page.clickCustomElement(Page.researchListItem, course);
});

Then('eu vejo a tela de descrição do curso com título {string} e comparo o valor parcelado do item na lista com o total na página de descrição', async (courseTitle) => {
  I.seeTextEquals(courseTitle, Page.courseTitle);
  var totalPrice = Page.compareCoursePrices(courseInstallments, await I.grabTextFrom(Page.courseTotalPrice), '$');
  if (totalPrice == -1) {
    throw new Error('NoMatchException: instances are not the equal')
  } else if (totalPrice == 1) {
    throw new Error('ArithmeticException: cannot multiply numbers by zero');
  }
});

//#endregion

//#region .: Pesquisar curso por concurso :.

When('eu clicar em {string} na lista de {string}', (listItem, listTitle) => {
  Page.seeSectionTittle(listTitle);
  Page.clickResearchResult(listItem);
});

Then('eu vejo a tela de descrição do concurso com título {string} e {string}', (contestTitle, coursesAmount) => {
  Page.seeSectionTittle(contestTitle);
  I.seeTextEquals(coursesAmount, Page.generateCustomLocatorXpath(Page.coursesAmountAvailable, coursesAmount));
});

//#endregion

//#region .: Pesquisar cursos por matéria :.

Then('eu vejo a tela de descrição da matéria com título {string} e {string}', (subjectTitle, coursesAmount) => {
  Page.seeSectionTittle(subjectTitle);
  I.seeTextEquals(coursesAmount, Page.generateCustomLocatorXpath(Page.coursesAmountAvailable, coursesAmount));
});

//#endregion

//#region .: Ver todos os cursos :.

When('eu estiver na tela {string}', (screen) => {
  Page.isCurrentPage(screen);
});

Then('devo visualizar o painel de DESTAQUES', () => {
  I.seeTextEquals("DESTAQUES", Page.highlightsPanelTitle);
});

//#endregion