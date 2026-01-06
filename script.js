document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    let started = false;

    function startCount() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;

            const increment = target / 120;

            function update() {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            }

            update();
        });
    }

    window.addEventListener("scroll", () => {
        const statsSection = document.getElementById("stats");
        if (!statsSection) return;

        const sectionTop = statsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight && !started) {
            startCount();
            started = true;
        }
    });

});



document.addEventListener("DOMContentLoaded", function() {

    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function() {

            const faqItem = this.parentElement;
            const icon = this.querySelector(".icon");

            // Close all others
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                    item.querySelector(".icon").textContent = "+";
                }
            });

            // Toggle current
            faqItem.classList.toggle("active");

            if (faqItem.classList.contains("active")) {
                icon.textContent = "×";
            } else {
                icon.textContent = "+";
            }
        });
    });

});