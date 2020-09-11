window.onload = () => {
  teeKortit(data);
}

const teeKortit = (objects) => {
  for (let object of objects) {
    teeKortti(object, document.getElementById('card-row'));
  }
}

const getInput = (value) => {
  /*
  let objects = filter(value, data);
  teeKortit(objects);
  */
  console.log(value);
}

const filter = (filter, objects) => {
  if (filter.length < 3) return objects;
  console.log(filter.length);
  let filtered = [];
  for (let object of objects) {
    const values = Object.values(object);
    for (let value of values) {
      if (value.toString().includes(filter)) filtered.push(object); break;
    }
  }
  console.log(filtered);
  return filtered;
};

const teeKortti = ({author, title, description, url, done, style, price = 'ilmainen'}, paikka) => {
  const divCol = document.createElement('div');
  divCol.className = 'col-md-4';

  const divCard = document.createElement('div');
  divCard.className = 'card mb-4 box-shadow';
  if (!done) {
    divCard.className = 'card mb-4 box-shadow notDone';
  }

  const img = document.createElement('img');
  img.className = 'card-img-top';
  img.setAttribute('data-src', `holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=${author}`);
  img.setAttribute('alt', 'card');
  img.onclick = (e) => {
    e.preventDefault();
    window.open(url);
  }

  const divBody = document.createElement('div');
  divBody.className = 'card-body';


  const h5title = document.createElement('h5');
  h5title.className = 'card-title'
  h5title.textContent = title;
  const p = document.createElement('p');
  p.className = 'card-text';
  p.textContent = description;

  const divButtons = document.createElement('div');
  divButtons.className = "d-flex justify-content-between align-items-center";
  const divGroup = document.createElement('div');
  divGroup.className = 'btn-group';
  const buttonView = document.createElement('button');
  buttonView.type = 'button';
  buttonView.className = "btn btn-sm btn-outline-secondary";
  buttonView.textContent = 'Vieraile';
  buttonView.onclick = (e) => {
    e.preventDefault();
    window.open(url);
  }

  const buttonDone = document.createElement('button');
  buttonDone.className = done ? "btn btn-sm btn-outline-secondary" : "btn btn-sm btn-outline-secondary notDone";
  buttonDone.textContent = done ? 'Tehty' : 'Ei tehty';

  const small = document.createElement('small');
  small.className = "text-muted";
  small.textContent = `${style} / ${price}`;

  divGroup.appendChild(buttonView);
  divGroup.appendChild(buttonDone);
  divButtons.appendChild(divGroup);
  divButtons.appendChild(small);
  divBody.appendChild(h5title);
  divBody.appendChild(p);
  divBody.appendChild(divButtons);
  divCard.appendChild(img);
  divCard.appendChild(divBody);
  divCol.appendChild(divCard);

  paikka.appendChild(divCol);
}

/*
<div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
*/