document.addEventListener("DOMContentLoaded", function() {
    const images = ['https://hips.hearstapps.com/hmg-prod/images/determined-muscular-young-woman-doing-squats-with-royalty-free-image-1667907060.jpg?resize=980:*', 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/2023-01/deporte-grupo.jpg.webp?itok=pb6YpoWV', 'https://media.gq.com.mx/photos/5f63af91e568fa5953a77749/16:9/w_2560%2Cc_limit/planchas.jpg','https://www.2playbook.com/uploads/s1/15/87/4/entrenamiento-virtual-online_14_744x403.jpeg'];
    let currentIndex = 0;
    const hero = document.querySelector('.hero');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    }, 4000); 

});
