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
        // console.log(result.image);
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");
        colDiv.innerHTML = `
             <div class="card h-100 pt-5 pb-3">
                <img src="${result.image}" class="img-fluid mx-auto" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-center">Card title</h5>
                        <p class="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button class="btn btn-primary d-block mx-auto" type="btn">Details</button>
                    </div>
            </div>
        `;
        SearchResultContainer.appendChild(colDiv);
    }
};