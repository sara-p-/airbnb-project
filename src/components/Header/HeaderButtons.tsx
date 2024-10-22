import './Header.css'

export function HeaderButtons() {
  return (
    <div className='header-buttons'>
      <div className='button-wrapper'>
        <button className='anywhere header-button'>Anywhere</button>
        <button className='any-week header-button'>Any week</button>
        <button className='add-guests header-button'>Add guests</button>
      </div>
      <button className='search header-button'>
        <img src='./icons/search.svg' alt='Search' />
      </button>
    </div>
  )
}

export function HeaderProfileButtons() {
  return (
    <div className='profile-buttons'>
      <button className='your-home'>Airbnb your home</button>
      <button className='globe'>
        <span className='visually-hidden'>Language</span>
        <img src='./icons/globe.svg' alt='' className='globe-icon' />
      </button>
      <button className='profile'>
        <img className='menu-bars' src='./icons/bars.svg' alt='Menu icon' />
        <span className='profile-img'></span>
      </button>
    </div>
  )
}
