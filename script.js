let [milSec, sec, min, hours] = [0,0,0,0],
    timerRef = document.querySelector('.timer__display'),
    int = null
// Накидываем обработчик на кнопку Старт
document.getElementById('timer__start').addEventListener('click', () => {
    if (int !== null) clearInterval(int)
    int = setInterval(displayTimer, 10)
})
// Накидываем обработчик на кнопку Пауза
document.getElementById('timer__pause').addEventListener('click', () => clearInterval(int))
// Накидываем обработчик на кнопку Сброс
document.getElementById('timer__reset').addEventListener('click', () => {
    clearInterval(int);
    [milSec, sec, min, hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 '
})
// Функция инкрементов секунд, минут, часов и проверки на точность
function displayTimer() {
    milSec += 10
    if (milSec == 1000) {
        milSec = 0
        sec++

        if (sec == 60) {
            sec = 0
            min++

            if (min == 60) {
                min = 0
                hours++
            }
        }
    }
    
    let h = hours < 10 ? "0" + hours : hours,
        m = min < 10 ? "0" + min : min,
        s = sec < 10 ? "0" + sec : sec,
        ms = milSec < 10 ? "00" + milSec : milSec < 100 ? "0" + milSec : milSec

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}