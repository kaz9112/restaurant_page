import "./styles.css";


const MainPages = (function() {
    
    const main = document.querySelector('main');

    const Home = (function() {
        main.innerHTML = '';
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

            divOne.appendChild(h3);
            divOne.appendChild(divOneP1);
            divOne.appendChild(divOneP2);


            return { h1, divOne };
        }

        const { h1, divOne }= createChild();

        // const homeChild = createChild()
        main.appendChild(h1);
        main.appendChild(divOne);

        // console.log('fck')
    });

    const Menu = (function() {
        main.innerHTML = '';
        function createChild () {
            const h1 = document.createElement('h1');
            h1.textContent = 'Menu';

            const divOne = document.createElement('div');

            const h3 = document.createElement('h3');
            h3.textContent = 'fuker off';

            const divOneP1 = document.createElement('p');
            divOneP1.textContent = 'criesommure';

            divOne.appendChild(h3);
            divOne.appendChild(divOneP1);

            return { h1, divOne };
        }

        const { h1, divOne } = createChild();

        main.appendChild(h1);
        main.appendChild(divOne);
    });

    Home()

    document.getElementById('home').addEventListener("click", () => {
        // console.log("home")
        Home()
    })

    document.getElementById('menu').addEventListener("click", () => {
        // console.log("menu")
        Menu()
    })

    document.getElementById('about').addEventListener("click", () => {
        console.log("about")
    })

})();