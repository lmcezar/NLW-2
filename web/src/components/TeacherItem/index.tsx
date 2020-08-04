import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQH3UrsgS1GP1A/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=RFcdEeuvCiHJgJe9lyaxLvcHxjcnqSWqzbfXRM_gMV0"
          alt="Lucas Cezar"
        />
        <div>
          <strong>Lucas Cezar</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde,
        libero eligendi atque hic deserunt vero architecto. Aut quae in repellat
        esse eaque, fugit tempora praesentium facere dolore, aperiam quibusdam!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
