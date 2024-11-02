document.addEventListener('DOMContentLoaded', () => {
    const preImage = document.getElementById('preImage');
    const mainImage = document.getElementById('mainImage');
    let menuOpen = false;

    // Function to build and insert menu
    function buildMenu() {
        const menuHTML = `
            <div class="dropdown-menu" id="dropdownMenu">
                <ul>
                    <li><a class="menulink" href="index.html">ГЛАВНАЯ</a></li>
                    <li><a class="menulink" href="metal.html">МЕТАЛЛООБРАБОТКА</a></li>
                    <li><a class="menulink" href="vehicles.html">УСЛУГИ СПЕЦТЕХНИКИ</a></li>
                    <li><a class="menulink" href="furniture.html">МЕБЕЛЬ НА ЗАКАЗ</a></li>
                    <li><a class="menulink" href="electricity.html">ЭЛЕКТРОМОНТАЖ</a></li>
                    <li><a class="menulink" href="concrete.html">ИЗДЕЛИЯ ИЗ БЕТОНА</a></li>
                </ul>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', menuHTML); // Insert at the end of body
        const dropdownMenu = document.getElementById('dropdownMenu');

        preImage.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                preImage.classList.add('hide');
                mainImage.style.display = 'block';
                dropdownMenu.style.display = 'block';
                setTimeout(() => {
                    mainImage.classList.add('show');
                    dropdownMenu.classList.add('show'); // Ensure the menu appears with the logo
                }, 0); // Display immediately
            } else {
                preImage.classList.remove('hide');
                mainImage.classList.remove('show');
                dropdownMenu.classList.remove('show'); // Ensure the menu hides with the logo
                setTimeout(() => {
                    preImage.style.display = 'block';
                    mainImage.style.display = 'none';
                    dropdownMenu.style.display = 'none';
                }, 700); // Delay removal to match the transition duration
            }
        });

        window.addEventListener('click', (e) => {
            if (!preImage.contains(e.target) && !mainImage.contains(e.target) && !dropdownMenu.contains(e.target)) {
                menuOpen = false;
                preImage.classList.remove('hide');
                mainImage.classList.remove('show');
                dropdownMenu.classList.remove('show'); // Ensure the menu hides with the logo
                setTimeout(() => {
                    preImage.style.display = 'block';
                    mainImage.style.display = 'none';
                    dropdownMenu.style.display = 'none';
                }, 700); // Delay removal to match the transition duration
            }
        });
    }

    buildMenu();
});
