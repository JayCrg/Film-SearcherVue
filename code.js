var a = {
    "Search": [
        { "Title": "Captain Nemo", "Year": "1976", "imdbID": "tt14371794", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BYzQzMTFhOTAtZjk3MS00YjIwLWJiZjMtNDY3ZjI2MGY2NzkwXkEyXkFqcGdeQXVyNTE1MDE2MzY@._V1_SX300.jpg" },
        { "Title": "Zirkus Nemo", "Year": "2002", "imdbID": "tt0486518", "Type": "movie", "Poster": "N/A" },
        { "Title": "Finding Nemo: A Filmmakers' Roundtable", "Year": "2012", "imdbID": "tt10255922", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNjAyMTBmODQtZGYxMC00NjdhLThhN2MtODlhMDI4NTczYTMyXkEyXkFqcGdeQXVyNDEyNjEzOTg@._V1_SX300.jpg" },
        { "Title": "Nemo", "Year": "2019", "imdbID": "tt11115980", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNDc3MmQ2MDItMTJlOS00NjRjLTlhOWItMjQ4OWY0ODIzMTA1XkEyXkFqcGdeQXVyOTg0NjgzNzk@._V1_SX300.jpg" },
        { "Title": "The Ultimate 'Finding Nemo' Recap Cartoon", "Year": "2021", "imdbID": "tt13848922", "Type": "movie", "Poster": "N/A" },
        { "Title": "Nemo", "Year": "2013", "imdbID": "tt6882184", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMzU3NWU0YjEtNTQ1OS00MWE4LWE4NzItZTMxOWIwOGY4Yjc1XkEyXkFqcGdeQXVyMjg0NzQ2MzI@._V1_SX300.jpg" },
        { "Title": "Nemo in Slumberland", "Year": "2013", "imdbID": "tt7315802", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BY2I1YzA2ZjktODViNS00ZWViLTgzYjEtMmVlMzhmNDgxZDhhXkEyXkFqcGdeQXVyMTg1NTc0Mjc@._V1_SX300.jpg" },
        { "Title": "Little Nemo Pilot", "Year": "1978", "imdbID": "tt8654128", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3ODdkMjQtN2ViZi00ZjI4LTkyZDEtMDkwY2Y1ZDgwMzU4XkEyXkFqcGdeQXVyNTY4ODAxODI@._V1_SX300.jpg" },
        { "Title": "Nemo & Friends SeaRider", "Year": "2017", "imdbID": "tt9480318", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZjYyZjJkNGYtMzUwMS00YjBlLTg4ZDItMjY0YzdhMjNmYTdjXkEyXkFqcGdeQXVyNDY0NTI3NDA@._V1_SX300.jpg" },
        { "Title": "Personne ou le Nemo des temps modernes", "Year": "2019", "imdbID": "tt10189510", "Type": "movie", "Poster": "N/A" }
    ], "totalResults": "45", "Response": "True"}
var b = {"Response": "False", "Error": "Invalid API key!"}

var c = {"Title":"Captain Nemo",
"Year":"1976",
"Rated":"N/A",
"Released":"29 Mar 1976",
"Runtime":"N/A","Genre":"Action, Adventure, Fantasy",
"Director":"N/A","Writer":"N/A",
"Actors":"Vladislav Dvorzhetskiy, Yuri Rodionov, Mikhail Kononov",
"Plot":"Soviet three-part television feature film based on the novels by Jules Verne «20, 000 Leagues Under the Sea» and «Steam House».",
"Language":"Russian",
"Country":"Soviet Union",
"Awards":"N/A",
"Poster":"https://m.media-amazon.com/images/M/MV5BYzQzMTFhOTAtZjk3MS00YjIwLWJiZjMtNDY3ZjI2MGY2NzkwXkEyXkFqcGdeQXVyNTE1MDE2MzY@._V1_SX300.jpg",
"Ratings":[],"Metascore":"N/A","imdbRating":"N/A","imdbVotes":"9","imdbID":"tt14371794","Type":"series","totalSeasons":"N/A","Response":"True"}

const { createApp } = Vue

createApp({
    data() {
        return {
            Peliculas: '',
            tituloPeli: '',
            mostrar: false,
            pagina: 1,
            detalle: '',
            scroll: '',
        }
    },
    methods: {
        mostrarDetalle(id) {
            this.mostrar = true;
            fetch(`https://www.omdbapi.com/?i=${id}&apikey=70e51670`)
            .then(response => response.json())
            .then(data => this.detalle = data)
        },
        buscarPeliculas(){
            this.pagina=1;
            fetch(`https://www.omdbapi.com/?s=${this.tituloPeli}&page=${this.pagina}&apikey=70e51670`)
            .then(response => response.json())
            .then(data => this.Peliculas = data)
            },
        scrollear(){
            fetch(`https://www.omdbapi.com/?s=${this.tituloPeli}&page=${this.pagina}&apikey=70e51670`)
            .then(response => response.json())
            .then(data => {
                if (data.Response == 'True') {
                    for (let i = 0; i < data.Search.length; i++) {
                        this.Peliculas.Search.push(data.Search[i]);
                    }
                }
                this.Peliculas.Response = data.Response;
                this.scrolling = false;
            })
        }
    },
    computed: {},
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10 && this.scrolling != true) {
                console.log(this.Peliculas.Response)
                this.pagina++;
                this.scrolling = true;
                this.scrollear();
            }
        })
    }
}).mount('#app')













