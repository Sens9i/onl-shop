function Header() {
    return (
        <div className='header'>
            <span className='logo'>CosMo</span>
            <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" class="searchButton">
     </button>
   </div>
</div>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Адреса и телефоны</li>
                <li>Кабинет</li>
            </ul>
        </div>
    )

}

export default Header