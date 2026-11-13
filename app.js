const textoOriginal = document.getElementById('textoOriginal');
const textoTratado = document.getElementById('textoTratado');
const opcaoMinusculo = document.getElementById('opcaoMinusculo');
const opcaoMaiusculo = document.getElementById('opcaoMaiusculo');
const opcaoSemAcento = document.getElementById('opcaoSemAcento');
const processarBtn = document.getElementById('processarBtn');
const limparBtn = document.getElementById('limparBtn');

function removerAcentos(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ç/g, 'c')
        .replace(/Ç/g, 'C');
}

processarBtn.addEventListener('click', () => {
    let texto = textoOriginal.value;
    if (opcaoMinusculo.checked) texto = texto.toLowerCase();
    if (opcaoMaiusculo.checked) texto = texto.toUpperCase();
    if (opcaoSemAcento.checked) texto = removerAcentos(texto);
    textoTratado.value = texto;
});

limparBtn.addEventListener('click', () => {
    textoOriginal.value = '';
    textoTratado.value = '';
    opcaoMinusculo.checked = false;
    opcaoMaiusculo.checked = false;
    opcaoSemAcento.checked = false;
});

opcaoMinusculo.addEventListener('change', () => {
    if (opcaoMinusculo.checked) opcaoMaiusculo.checked = false;
});

opcaoMaiusculo.addEventListener('change', () => {
    if (opcaoMaiusculo.checked) opcaoMinusculo.checked = false;
});