// Находим все кнопки или ссылки, которые будут переключать табы
const tabs = document.querySelectorAll('.tab-button');

// Навешиваем обработчик события на каждую кнопку/ссылку
tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное действие (например, переход по ссылке)

        // Получаем ID блока, к которому нужно переместиться
        const targetId = this.getAttribute('data-target');
        const targetBlock = document.querySelector(`#${targetId}`);

        if (targetBlock) {
            // Прокручиваем страницу к выбранному блоку
            targetBlock.scrollIntoView({
                behavior: 'smooth', // Плавный скролл
                block: 'start' // Скроллим к началу блока
            });
        }
    });
});
