import '../styles/responsive-bar.scss'

const ResponsiveNav = () => {

  return (
      <>
        <div className="responsive-bar-container">
            <ul>
                <li>
                    <a href="/">Anasayfa</a>
                </li>
                <li>
                    <a href="/hakkinda">Hakkında</a>
                </li>
                <li>
                    <a href="filmler">Filmler</a>
                </li>
                <li>
                    <a href="/kategoriler">Kategoriler</a>
                </li>
            </ul>
        </div>
      </>
  )
}

export default ResponsiveNav;
