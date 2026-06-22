function updateTime() {
    const dataInicial = new Date('2023-08-18T19:00:00');
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();

    // Ajusta dias negativos
    if (dias < 0) {
        meses--;

        const ultimoDiaMesAnterior = new Date(
            agora.getFullYear(),
            agora.getMonth(),
            0
        ).getDate();

        dias += ultimoDiaMesAnterior;
    }

    // Ajusta meses negativos
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diferenca = agora - dataInicial;

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.querySelector('.timer_anos').textContent = anos;
    document.querySelector('.timer_meses').textContent = meses;
    document.querySelector('.timer_dias').textContent = dias;
    document.querySelector('.timer_horas').textContent = horas.toString().padStart(2, '0');
    document.querySelector('.timer_minutos').textContent = minutos.toString().padStart(2, '0');
    document.querySelector('.timer_segundos').textContent = segundos.toString().padStart(2, '0');
}

updateTime();
setInterval(updateTime, 1000);