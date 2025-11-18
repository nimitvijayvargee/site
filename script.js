document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const cards = document.querySelectorAll(".card");

    document.addEventListener("mousemove", e => {
        const pageX = e.clientX + window.scrollX;
        const pageY = e.clientY + window.scrollY;

        body.style.background = `
            radial-gradient(
                circle at ${pageX}px ${pageY}px,
                rgba(51, 51, 51, 1) 0%,
                rgba(0, 0, 0, 1) 15%
            )
        `;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();

            const cx = pageX - rect.left - window.scrollX;
            const cy = pageY - rect.top - window.scrollY;

            card.style.background = `
                radial-gradient(
                    circle at ${cx}px ${cy}px,
                    rgba(70, 70, 70, 1) 0%,
                    rgba(30, 30, 30, 1) 15%
                )
            `;
        });
    });
});
