import './Header.css'
import logoImg from '/logo.svg'
import { HeaderButtons, HeaderProfileButtons } from './HeaderButtons'

function Header() {
  return (
    <header>
      <div className='wrapper'>
        <div className='box box--logo'>
          <img src={logoImg} alt='airbnb logo' className='logo' />
        </div>
        <div className='box box--buttons'>
          <HeaderButtons />
        </div>
        <div className='box box--profile'>
          <HeaderProfileButtons />
        </div>
      </div>
    </header>
  )
}

export default Header
