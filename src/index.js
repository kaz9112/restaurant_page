import "./styles.css";


const MainPages = (function() {
    
    const main = document.querySelector('main');


    const Home = (function() {
        main.innerHtml = '';
        function createChild () {
            const h1 = document.createElement('h1');
            h1.textContent = 'Home';

            const getHeader = () => h1;

            return h1
        }

        const homeChild = createChild()
        main.appendChild(homeChild)

        // console.log('fck')
    });

    Home()
})();