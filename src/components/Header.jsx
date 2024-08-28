import logo from '../assets/logo.png';
import headerClass from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={headerClass.paragraph}>test</p>
    </header>
  );
}
