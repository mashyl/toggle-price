const toggleBtn = document.getElementById('toggle');
const toggleTab = document.querySelector('.switch');
const basicMonthly = document.querySelector('.basic-card .month');
const basicYearly = document.querySelector('.basic-card .year');
const profMonthly = document.querySelector('.professional-card .month');
const profYearly = document.querySelector('.professional-card .year');
const masterMonthly = document.querySelector('.master-card .month');
const masterYearly = document.querySelector('.master-card .year');

let toggled = false;

toggleTab.addEventListener('keydown', (event) => {
    if (event.keyCode === 9) {
        toggleBtn.click();
        event.preventDefault();
    }
});

toggleBtn.addEventListener('click', () => {
    console.log('clicked')
    if (!toggled) {
        toggled = true;
        
        basicMonthly.classList.add('hidden');
        profMonthly.classList.add('hidden');
        masterMonthly.classList.add('hidden');

        basicYearly.classList.remove('hidden');
        profYearly.classList.remove('hidden');
        masterYearly.classList.remove('hidden');
    } else {
        toggled = false;
        
        basicYearly.classList.add('hidden');
        profYearly.classList.add('hidden');
        masterYearly.classList.add('hidden');

        basicMonthly.classList.remove('hidden');
        profMonthly.classList.remove('hidden');
        masterMonthly.classList.remove('hidden');
    }
})
