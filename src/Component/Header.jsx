


function Header({ name, lastname }) {
  const items = ["Accueil", "Contact", "A Propos de nous", "Inscription", "Se Contecter"];

  return (
                      <>
    <div className="header">
      <nav className="nav">
        <ul className="nav-list">
          {items.map((item, index) => (
            <li key={index} className="nav-item">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
     
      
    </div>
  
      <p>prenom : {name}</p>
    
     </>
  );
}

export default Header;