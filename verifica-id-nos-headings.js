
return seoSpider.loadScript("https://unpkg.com/compromise")
    .then(() => {
        let article = document.querySelector("article");
        if (!article) {
            return seoSpider.error("Nenhuma tag <article> encontrada.");
        }
        
        let headings = article.querySelectorAll("h1, h2, h3, h4, h5, h6");
        let headingsWithoutId = Array.from(headings)
            .filter(heading => !heading.id) 
            .map(heading => heading.outerHTML);
        
        return seoSpider.data(headingsWithoutId);
    })
    .catch(error => seoSpider.error(error));
