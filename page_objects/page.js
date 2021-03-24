const { I } = inject();
const timeout = 10;

class Page {
    constructor() {
        // HomePage elements
        this.baseUrlPage = 'https://www.estrategiaconcursos.com.br/';
        this.yesReciveNotificationButton = '#onesignal-slidedown-allow-button';
        this.notReviceNotificationButton = '#onesignal-slidedown-cancel-button';
        this.allowCoockiesButton = { shadow: ['form', 'div', 'button'] };
        this.onlineCoursesMenuItem = "//div[@class='nav-header-links']/a[contains(., 'default')]";
        // Available in others pages but, not in the HomePage tree  
        this.pageTitle = "//h1[@class='page-header-title'][contains(., 'default')]";
        this.highlightsPanelTitle = "//header[@class='courses-highlight-header']/h1[@class='title']";
        this.searchFilterInput = '//form[@class = "search"]';
        this.sectionTitle = "//h1[@class='section-header-title'][contains(., 'default')]";
        this.researchListItem = "//h1[@class='card-prod-title']/a[contains(., 'default')]";
        this.researchListItemPrice = "//div[@class='card-prod-price']";
        this.courseTitle = "//h1[@class='cur-details-info-title']";
        this.coursesAmountAvailable = "//span[@class='text']";
        this.courseTotalPrice = "//div[@class='value']";
        this.courseInstallments = "//div[@class'cur-details-shopping-obj1']";
        // switch optins for isCurrentPage method
        this.ContestPage = {
            urlPage: 'https://www.estrategiaconcursos.com.br/cursos/concurso/'
        };
        this.CoursesPage = {
            urlPage: 'https://www.estrategiaconcursos.com.br/cursos/'
        };
        this.SubjectPage = {
            urlPage: 'https://www.estrategiaconcursos.com.br/cursos/materia/'
        };
        this.TeacherPage = {
            urlPage: 'https://www.estrategiaconcursos.com.br/cursos/professor/'
        };
    }
    /**
     * Check if current url page is the same the screen parameter
     * @param {String} screen A string object that match switch options
     */
    isCurrentPage(screen) {
        switch (screen) {
            case 'Cursos por professor':
                I.seeInCurrentUrl(this.TeacherPage.urlPage);
                break;
            case 'Cursos por concurso':
                I.seeInCurrentUrl(this.ContestPage.urlPage);
                break;
            case 'Cursos por matéria':
                I.seeInCurrentUrl(this.SubjectPage.urlPage);
                break;
            case 'Cursos online':
                I.seeInCurrentUrl(this.CoursesPage.urlPage);
                break;
        }
    }
    /**
     * Perform a click in notification settings basead on a switch option
     * @param {String} option A "Não" or "Sim" string object
     */
    defineNotificationOptions(option) {
        switch (option) {
            case 'Não':
                I.waitForElement(this.notReviceNotificationButton, timeout);
                I.click(this.notReviceNotificationButton);
                break;
            case 'Sim':
                I.waitForElement(this.yesReciveNotificationButton, timeout);
                I.click(yesReviceNotificationButton);
                break;
        }
    }
    /**
     * Perfom a click in a custom xpath locator once is provied the html content
     * @param {String} locator A customizable xpath object 
     * @param {String} category A html content
     */
    clickCustomElement(locator, category) {
        var customLocator = this.generateCustomLocatorXpath(locator, category);
        I.seeElement(customLocator);
        I.click(customLocator);
    }
    /**
     * Fill a input locator typing the provied string object. Waits 1 second after type each space character
     * between string words.
     * @param {String} locator A input element
     * @param {String} text A string object to fill the input locator
     */
    fillFieldTypingThe(locator, text) {
        I.waitForElement(locator, timeout);
        I.click(locator);
        var key;
        for (var i = 0; i < text.length; i++) {
            key = text.charAt(i);
            if (key == " ") {
                I.pressKey('Space');
                I.wait(1);
            } else {
                I.pressKey(key);
            }
        }
    }
    /**
     * Generate a custom locator by xpath with provied content
     * @param {String} locator A string object with xpath element
     * @param {String} text A string object with custom content
     * @returns A xpath object with custom content
     */
    generateCustomLocatorXpath(locator, text) {
        return locator.replace(/default/, text);
    }
    /**
     * Perfom a click in a matching element with the provied string
     * @param {String} listResult A string object with page research result
     */
    clickResearchResult(listResult) {
        this.clickCustomElement(this.researchListItem, listResult);
    }
    /**
     * Check an section element with title value
     * @param {String} title A string object equals to html content
     */
    seeSectionTittle(title) {
        sectionTile = this.generateCustomLocatorXpath(this.sectionTitle, title);
        I.seeTextEquals(title, sectionTile);
    }
    /**
     * Replaces alphabetic characters in the str string, using a regular expression.
     * @param {String} str A string to search for matching characters
     * @param {String} splitCharacter A string containing the character to replace for every successful match
     * @returns An array with numbers spllied where splitCharacter has been mathced
     */
    stringToNumber(str, splitCharacter) {
        var regex = /[A-Za-z]|é| |,/g;
        var replacedStr = str.replace(regex, '');
        if (replacedStr.charAt(0) == splitCharacter) {
            return replacedStr.replace(splitCharacter, '')
        }
        return replacedStr.split(splitCharacter);
    }
    /**
     * Compare two objects values multiplying first object math expression with the value of the second object
     * @param {String} srt1 A string object with an multiplication expression
     * @param {String} str2 A string object with result of multiplication expression
     * @param {String} splitCharacter A string object with a character separator
     * @returns 1 for empty array object or -1 for not equal parameters
     */
    compareCoursePrices(srt1, str2, splitCharacter) {
        var obj1 = this.stringToNumber(srt1, splitCharacter);
        var obj2 = this.stringToNumber(str2, splitCharacter);

        if (obj1[0] != 0 && obj1.length == 2) {
            var total = obj1[0] * obj1[1];
            if (total != obj2) {
                return -1;
            }
        } else {
            return 1;
        }
    }
}

module.exports = new Page();
module.exports.Page = Page;