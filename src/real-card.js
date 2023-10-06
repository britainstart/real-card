import { LitElement, html, css } from 'lit';

export class RealCard extends LitElement {
  static properties = {
    version: {}, 
  };

  static get styles() {
    return css`
    .card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .card-conatainer {
    background-color: #001e44;
    width: 20%;
    height: 50%;
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
 
  .card img {
    max-width: 50%;
    height: 50%;
}

  .card-content {
    text-align: center;
    color: black;
    display: block;
    flex-direction: column;
    justify-content: center;
}

  .card-content> img{
    width: 200px;
    max-width: 80%;
    border-radius: 10px;
}

  h2 {
    font-size: 24px;
    margin: 8px 0;
}

    p {
    font-size: 16px;
    margin: 8px 0;
}

  a.details-button {
    display: none;
    background-color: #fff;
    color: #fff;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 4px;
}

  @media screen and (max-width: 200px) {
    a.details-button {
        display: block;
    }
}

  @media screen and (max-width: 200px) {
    .card {
        max-width: 300px;
    }
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 14px;
    }
}
    ` ;
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  
  firstUpdated() {
    const colorBtn = this.shadowRoot.querySelector('#colorBtn');
    const titleBtn = this.shadowRoot.querySelector('#titleBtn');
    const dltBtn = this.shadowRoot.querySelector('#dltBtn');
    const cardTitle = this/this.shadowRoot.querySelector('#cardTitle');
    const Description = this.shadowRoot.querySelector('#Description');
    const toggleDescription = this.shadowRoot.querySelector('#toggleDescription');
    const btn = this.shadowRoot.querySelector('#btn');
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.cards');
    const details = this.shadowRoot.querySelector('details');
    const summary = this.shadowRoot.querySelector('summary');
    const cardContent = this.shadowRoot.querySelector('.card-content');
    const cardImage = this.shadowRoot.querySelector('img');
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const cardClone = this.shadowRoot.querySelector('.card-container');
    const cardClone2 = this.shadowRoot.querySelector('.card-container');

   

    titleBtn.addEventListener('click', () => {
      cardTitle.innerHTML = 'State College Real Estate';
    });

    deleteBtn.addEventListener('click', () => {
      cards.removeChild(cardClone2);
    });

    toggleDescription.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

    btn.addEventListener('click', () => {
      cards.appendChild(clone);
    });

    cardContent.addEventListener('click', () =>{
      cardImage.classList.tiggle('hidden');
    });

    summary.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });
  }


randomColorGenerator() {
  const cardContainer = this.shadowRoot.querySelector('.card-container');
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cardContainer.style.backgroundColor = '#' + randomColor;
  return randomColor;
}

cloneCard(e) {
  const card = this.shadowRoot.querySelector('.card-container');
  const clone = card.cloneNode(true);
  this.shadowRoot.querySelector('.cards').appendChild(clone);
}


render() {
  return html`
<button id ="btn" @click="${this.cloneCard}">Duplicate</button>
<button id="colorBtn" @click=${this.randomColorGenerator}>Color Changer</button>
<button id="TitleBtn">Heading Changer</button>
<button id="dltBtn">Delete Card</button>
  <div class=".cards">
  <div class=".card-container">
    <div class="card-content">
      <h2 id="cardTitle">Two Pod Real Estate</h2>
      <p>State College Homes</p>
      <img src="https://www.mydomaine.com/thmb/CaWdFGvTH4-h1VvG6tukpKuU2lM=/3409x0/filters:no_upscale():strip_icc()/binary-4--583f06853df78c6f6a9e0b7a.jpeg" alt="Card Image" />
    </div>
    <details>

    <summary id="toggleDescription"> Toggle Description </summary>
    <p id="Description" >Real Estate company focused on delivering the best properties for college students in State College, PA.</p>

    </details>
  
  </div>  
</div>
    `;
  }
}
customElements.define('real-card', RealCard);

