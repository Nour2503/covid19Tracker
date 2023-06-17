const continents = ["Europe", "Oceania", "Africa", "Asia"

];

function total(continent, administered, partiallyVaccinated, vaccinated, population) { document.querySelector(".thirdSection").insertAdjacentHTML("afterbegin", `
<div class="continent">
    <h1>${continent}</h1>
    <p>
    POPULATION:<br>
        <span id="all_pop">${population.toLocaleString()}</span>
    </p>
    <p>
    Vaccine Registrated:
        <span>${administered.toLocaleString()}</span>
    </p>
    <p>
    Partially Vaccinated:
        <span>${partiallyVaccinated.toLocaleString()}</span>
    </p>
    <p>
    Total Vaccinated:
        <span id="all_vaccinated">${vaccinated.toLocaleString()}</span>
    </p>
</div>
`) }

function getData() {
    for (const continent of continents) {
        fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?continent=${continent}`).then(response => response.json()).then(apiData => {
            const values = Object.values(apiData);
            let administered = 0;
            let partiallyVaccinated = 0;
            let vaccinated = 0;
            let population = 0;
            for (const key in values) {
                administered += values[key].All.administered;
                partiallyVaccinated += values[key].All.people_partially_vaccinated;
                vaccinated += values[key].All.people_vaccinated;
                population += values[key].All.population;
            }
            total(continent, administered, partiallyVaccinated, vaccinated, population)
        })
    }
}
getData();



function totalUSA(administered, partiallyVaccinated, vaccinated, population) { document.querySelector(".thirdSection").insertAdjacentHTML("afterbegin", `
<div class="continent">
    <h1>Americas</h1>
    <p>
        POPULATION:<br>
        <span id="all_pop">${population.toLocaleString()}</span>
    </p>
    <p>
    Vaccine Registrated:
        <span>${administered.toLocaleString()}</span>
    </p>
    <p>
         Partially Vaccinated:
        <span>${partiallyVaccinated.toLocaleString()}</span>
    </p>
    <p>
        Total Vaccinated:
        <span id="all_vaccinated">${vaccinated.toLocaleString()}</span>
    </p>
</div>
`) }


function getDataUSA() {

    fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=US`).then(response => response.json()).then(apiData => {
        const USAnums = Object.values(apiData);
        let administered = 0;
        let partiallyVaccinated = 0;
        let vaccinated = 0;
        let population = 0;
        administered = USAnums[0].administered;
        partiallyVaccinated = USAnums[0].people_partially_vaccinated;
        vaccinated = USAnums[0].people_vaccinated;
        population = USAnums[0].population;

        totalUSA(administered, partiallyVaccinated, vaccinated, population)
    })

}
getDataUSA()