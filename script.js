const start = document.getElementById("start");
const player = document.getElementById("player");

start.addEventListener("click", () => {
    player.src = "musicas/how do you feel.mp3";
    player.play();

    start.classList.add("hidden");

    setTimeout(() => {
        start.style.display = "none";
    }, 500);

});

const sections = document.querySelectorAll(".album");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const color = entry.target.dataset.color;
                const textColor = entry.target.dataset.textColor;

                document.body.style.backgroundColor = color;
                document.body.style.color = textColor;
            }

        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach(section => {
    observer.observe(section);
});
  