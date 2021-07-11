import '../styles/search-form.scss'

const Search = ({search, setSearch}) => {

    const searchHandle = () => {
        if (!search) {
            alert('İstediğin bir şey yoksa biz napalım')
            return;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=235b77fe4aedf709eb99a3ac9f078f57&language=tr-TR&query=${search}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => console.log(data.results))
    }

    return (
        <>
            <form className="search-form" onSubmit={e => e.preventDefault()}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Aramak istediğiniz filmin ismini girin" />
                <a href={`/search/${search}`} className="search-button" onClick={searchHandle} disabled={!search ? 'disabled' : ''}>Ara</a>
            </form>
        </>
    )
}

export default Search