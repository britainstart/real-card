import { LitElement, html, css } from 'lit';

export class RealCard extends LitElement {
  static properties = {
    version: {}, 
  };

  static get styles() {
    return css`
    .card {
    max-width: 400px;
    max-height: auto;
    margin: 0 auto;
    border: 2px solid black;
    padding: 16px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: pink;
  }

.card img {
    max-width: 50%;
    height: 50%;
}

.card-content {
    flex: 1;
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


@media screen and (max-width: 800px) {
    a.details-button {
        display: inline-block;
    }
}


@media screen and (max-width: 500px) {
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
    this.version = 'STARTING';
  }

 /** render() {
    return html`
    <div class="buttons">
    <button class="duplicate">Duplicate last card</button>
    <button class="modifytitle">Change Name</button>
    <button id="deletelastcard">Delete</button>
    <button data-toggle-btn>Toggle</button>
  </div>
  <div class="wrapper">
    <div class="container">
    <img class="image" src="https://www.mydomaine.com/thmb/CaWdFGvTH4-h1VvG6tukpKuU2lM=/3409x0/filters:no_upscale():strip_icc()/binary-4--583f06853df78c6f6a9e0b7a.jpeg">
    <div class="header">
      <h3>Two Pod Real Estate</h3>
      <h4>State College Homes</h4>
  </div>
  <details class="details">
    <summary>Information</summary>
    <div>
        <ul>
            <li>Real Estate company focused pn delivering the best properties for calege students and families in State College, PA.</li>
            <li>Housing is expensive here. Let us help.</li>
            </ul>
  </div>
  </details>
  </div>
  </div>
    `;
  }
} */

render() {
  return html`
  <html lang="en">
  <div id ="card" class = "card">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="styles.css">
<title>Card Example</title>
</head>
<body>
<div class = "card">
<img src="https://www.mydomaine.com/thmb/CaWdFGvTH4-h1VvG6tukpKuU2lM=/3409x0/filters:no_upscale():strip_icc()/binary-4--583f06853df78c6f6a9e0b7a.jpeg"> 
      
<div class="card-content"> 
          <h4><b>Two Pod Real Estate Agency</b></h4>
<p id = 'description'> Real Estate Company Focused on delivering the best properties for college students at Penn State University in State College, PA</p> 
      <button class="details-button" id="detailsBtn">Details</button>
      </div>
      </div> 
</body> 
  </div>
  <button id ="btn">Duplicate</button>
  <button id="colorBtn">BGColorChanger</button>
  <button id="Headingbtn">HeadingChanger</button>
  <button id ="dltbtn">DeleteCard</button>
  <script>
   document.querySelector('#btn').addEventListener('click', function(e){
const clone = document.querySelector('#card').cloneNode('card');
document.body.appendChild(clone);
     const cardCline = cardToClone.cloneNode(true);
})
</script> 
   <script>
        var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var letters = ["A", "B", "C", "D", "E", "F"];
        function randomColor() {
            var color = "";
            for (var i = 0; i < 3; i++) {
                var index = Math.floor(Math.random() * (numbers.length + letters.length));
                color += (index < numbers.length) ? numbers[index] : letters[index - numbers.length];
            }
            return color;
        }
       document.querySelector('#colorBtn').addEventListener('click', function (e) {
            const card = document.querySelector('.card');
   
            const currentColor = card.style.backgroundColor;
             card.style.backgroundColor = '#' + randomColor();
        });
    </script>
  <script>
   document.querySelector('#Headingbtn').addEventListener('click', function(e){
      const title = document.querySelector('h4');
      title.innerText = "Super Pod 2 Realty";
    })
  </script>
  <script>
    document.querySelector('#dltbtn').addEventListener('click', function(e){
      const cards = document.querySelectorAll('.card');
      
    if (cards.length > 2) {
        const lastCard = cards[cards.length - 1];
        lastCard.parentNode.removeChild(lastCard);
    }
    })
  </script>
  <script>
    
    var original= document.querySelector('#description').innerText;
document.querySelector('#detailsBtn').addEventListener('click', function(e) {
    const description = document.querySelector('#description');
    
    if (description.innerText === 'none' || description.innerText=== '') {
        description.innerText = original; 
    } else {
        description.innerText = ''; 
    }
});
  </script>
</html> 
  `;
}
}


customElements.define('real-card', RealCard);