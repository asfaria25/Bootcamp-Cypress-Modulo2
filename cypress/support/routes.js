class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETarticlesTitle',
        getArticlesTitleComments: 'GETarticlesTitleComments',
        postUsers: 'POSTUsers',
        getTags: 'GETTags',
        getArticlesFeed: 'GETArticlesFeed',
        postLogin: 'POSTLogin'
    }

    init() {
        cy.server();
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('POST', '**/api/users/login').as(this.as.postLogin);
        cy.route('POST', '**/api/users').as(this.as.postUsers);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed**').as(this.as.getArticlesFeed);


    }
}

export default new Routes();