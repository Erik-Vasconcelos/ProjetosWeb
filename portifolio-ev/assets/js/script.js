document.addEventListener("DOMContentLoaded",() =>{
    new TypeIt("#atuacao", {
        speed: 100,
        loop: true,
        waitUntilVisible: true,
    })
    .type('Engenheiro de Software', {delay:1200})
    .delete(22)
    .pause(1000)
    .type('Desenvolvedor de Sites', {delay:1200})
    .delete(8)
    .pause(1000)
    .type('Back End', {delay:1200})
    .go();
}
)