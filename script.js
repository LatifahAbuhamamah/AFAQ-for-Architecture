document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 90);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
