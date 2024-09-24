import "./styles.css";


const MainPages = (function() {
    
    const main = document.querySelector('main');


    const Home = (function() {
        main.innerHtml = '';
        function createChild () {
            const h1 = document.createElement('h1');
            h1.textContent = 'Home';

            const divOne = document.createElement('div');
            const divTwo = document.createElement('div');
            const divThree = document.createElement('div');

            const h3 = document.createElement('h3');
            h3.textContent = 'welcome n shiet';

            const divOneP1 = document.createElement('p');
            divOneP1.textContent = 'fuk off'

            const divOneP2 = document.createElement('p');
            divOneP2.textContent = 'fu off'

            divOne.appendChild(divOneP1)
            divOne.appendChild(divOneP2)


            return h1
        }

        const homeChild = createChild()
        main.appendChild(homeChild)

        // console.log('fck')
    });

    Home()
})();