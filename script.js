//your JS code here. If required.
 const codes = document.querySelectorAll(".code");

    codes[0].focus();

    codes.forEach((input, index) => {

        input.addEventListener("input", (e) => {
            const value = e.target.value;

            // Allow only digits
            if (!/^\d$/.test(value)) {
                e.target.value = "";
                return;
            }

            // Move to next input
            if (index < codes.length - 1) {
                codes[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace") {

                if (input.value === "" && index > 0) {
                    codes[index - 1].value = "";
                    codes[index - 1].focus();
                    e.preventDefault();
                }
            }
        });

    });