// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button.querySelector('.copy-text');

    const resetBtn = () => {
        setTimeout(() => {
            button.classList.remove('copied');
            copyText.textContent = 'Copy';
        }, 2000);
    };

    if (!bibtexElement) return;

    navigator.clipboard.writeText(bibtexElement.textContent).then(() => {
        button.classList.add('copied');
        copyText.textContent = 'Cop';
        resetBtn();
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = bibtexElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        button.classList.add('copied');
        copyText.textContent = 'Cop';
        resetBtn();
    });
}
