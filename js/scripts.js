const loadSearch = () => {
    const userSearch = document.getElementById("search-box").value;
    const searchUrl = `https://openapi.programming-hero.com/api/phones?${userSearch}`;

    fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => console.log(data.data));
};
loadSearch();