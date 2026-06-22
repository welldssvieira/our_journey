function updateTime() {
    const dataInicial = new Date('2022-08-18T19:00:00');
    const agora = new Date();

    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(meses / 12);

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.querySelector('.timer_anos').textContent = `${anos}`;
    document.querySelector('.timer_meses').textContent = `${meses % 12}  `;
    document.querySelector('.timer_dias').textContent = `${dias % 30}  `;
    document.querySelector('.timer_horas').textContent = `${horas.toString().padStart(2, '0')}  `;
    document.querySelector('.timer_minutos').textContent = `${minutos.toString().padStart(2, '0')}  `;
    document.querySelector('.timer_segundos').textContent = `${segundos.toString().padStart(2, '0')}`;
}

updateTime();
setInterval(updateTime, 1000);