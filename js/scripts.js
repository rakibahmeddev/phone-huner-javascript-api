const loadSearch = () => {
    const searchText = document.getElementById("search-box").value;
    const searchUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => displaySearchResutls(data.data));
};

/*======== Display Search Results =======*/
const displaySearchResutls = (results) => {
    const SearchResultContainer = document.getElementById("search-results");

    for (const result of results) {
        // console.log(result);
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");
        colDiv.innerHTML = `
             <div class="card h-100 pt-5 pb-3 shadow-sm">
                <img src="${result.image}" class="img-fluid mx-auto" alt="..." />
                    <div class="card-body">
                        <h4 class=" text-center">${result.phone_name}</h4>
                        <h6 class="text-center">Brand: <span class="phone-brand">${result.brand}</span></h6>
                        <button onclick="detailsButton('${result.slug}')" class="btn btn-primary d-block mx-auto mt-4" type="btn">Details</button>
                    </div>
            </div>
        `;
        SearchResultContainer.appendChild(colDiv);
    }
};

/*=======================
Details button click
========================*/
const detailsButton = (id) => {
    const detailUrl = `https://openapi.programming-hero.com/api/phone/${id}
    `;
    fetch(detailUrl)
        .then((res) => res.json())
        .then((data) => displayPhoneDetails(data.data));
};
const displayPhoneDetails = (phones) => {
    console.log(phones.mainFeatures.sensors);
    document.getElementById("phone-detail-container").innerHTML = `
    <div class="card h-100 pt-5 pb-3 shadow-sm w-50 mx-auto">
                <img src="${phones.image}" class="img-fluid mx-auto" alt="..." />
                    <div class="card-body">

                        <h4 class=" text-center">${phones.name}</h4>

                        <h6 class="text-center">Brand: <span class="phone-brand">${phones.brand}</span></h6>
                        
                        <p class="text-center">${phones.releaseDate}</p>

                        <h5 class="text-center mt-5">Main Features</h5>
                        <hr/>
                        <p class="text-center features-p">Chipset: <span class="normal-text">${phones.mainFeatures.chipSet}</span></p>

                        <p class="text-center features-p">Display: <span class="normal-text">${phones.mainFeatures.displaySize}</span></p>

                        <p class="text-center features-p">Memory: <span class="normal-text">${phones.mainFeatures.memory}</span></p>

                        <p class="text-center features-p">Storage: <span class="normal-text">${phones.mainFeatures.storage}</span></p>

                        <p class="text-center features-p">Sensors: 
                        <span class="normal-text">${phones.mainFeatures.sensors[0]}, </span>

                        <span class="normal-text">${phones.mainFeatures.sensors[1]}, </span>

                        <span class="normal-text">${phones.mainFeatures.sensors[2]}, </span>

                        <span class="normal-text">${phones.mainFeatures.sensors[3]}, </span>
                        <span class="normal-text">${phones.mainFeatures.sensors[4]}, </span>
                        <span class="normal-text">${phones.mainFeatures.sensors[5]} </span>
                        </p>

                        <a href="#" class="btn btn-primary d-block w-25 mx-auto mt-4">Details</a>
                        
                    </div>
            </div>
    `;
};