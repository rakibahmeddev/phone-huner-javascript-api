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
        console.log(result.brand);
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");
        colDiv.innerHTML = `
             <div class="card h-100 pt-5 pb-3 shadow-sm">
                <img src="${result.image}" class="img-fluid mx-auto" alt="..." />
                    <div class="card-body">
                        <h5 class=" text-center">${result.phone_name}</h5>
                        <h6 class="text-center">Brand: <span class="phone-brand">${result.brand}</span></h6>
                        <button class="btn btn-primary d-block mx-auto mt-4" type="btn">Details</button>
                    </div>
            </div>
        `;
        SearchResultContainer.appendChild(colDiv);
    }
};