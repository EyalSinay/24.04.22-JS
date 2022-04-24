const digitsInput = document.querySelectorAll('.digit');

for (let digit of digitsInput) {
    if (digit.nextElementSibling) {
        digit.addEventListener('input', () => {
            digit.nextElementSibling.focus();
        });
    }

    digit.addEventListener('paste', (event) => {
        const paste = (event.clipboardData || window.clipboardData).getData('text');
        if (paste.length !== 6) {
            alert(`You try to past ${paste.length} chars. pleas past 6.`)
        } else {
            for (let i=0; i < paste.length; i++){
                document.getElementById(`digit${i+1}`).value = paste.charAt(i);
            }
        }
    });

    digit.addEventListener('input', () => {
        let count = 0;
        for (let i=0; i < 6; i++){
            if (document.getElementById(`digit${i+1}`).value){
                count++;
            }
        }
        if(count >= 6){
            document.querySelector('button').click();
        }
    });
}