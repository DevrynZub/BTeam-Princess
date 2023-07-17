import { AppState } from "../AppState.js"

export class Princess {
  constructor(data) {
    this.name = data.name
    this.hasHighHeels = data.hasHighHeels
    this.imgUrl = data.imgUrl
    this.hairColor = data.hairColor
    this.castleId = data.castleId
    this.id = data.id
    this.likes = data.likes
    this.description = data.description
    this.creatorId = data.creatorId
  }


  get PrincessTemplate() {
    return `
    <div class="col-md-8 col-12 p-3 princess-style pb-2 glass-box">
      <div class="selectable" onclick="app.PrincessController.setActivePrincess('${this.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="d-flex justify-content-center">
          <div class="princess-picture">
            <img class="elevation-5 rounded" src="${this.imgUrl}" alt="${this.name}">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <p class="fs-5 p-2"><b>${this.name}</b></p>
        </div>
        <div class="col-12 col-md-6 text-md-end p-2">
        <button class="p-2 btn btn-success" onclick="app.PrincessController.incrementLikes('${this.id}')">❤️${this.likes}</button>

      </div>
      </div>
    </div>
  `;
  }

  get ActivePrincessTemplate() {
    return `
    <div class="modal-content">
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-8">
                <img class="elevation-5 rounded modal-img w-100" src=${this.imgUrl} alt="princess">
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-4 "><button class="btn btn-danger mdi mdi-delete" onclick="app.PrincessController.deletePrincess('${this.id}')"></button></div>
                  <div class="col-12 pt-1">Quote: ${this.description}</div>
                  <div class="col-12 pt-2">Location: ${this.computeCastleByPrincess}</div>
                </div>
                <div class="row pt-3">
                <div class="col-12">
                  <input type="text" id="comment-input" placeholder="Enter your comment..." />
                  <button class="btn btn-dark" onclick="addComment()">💬</button>
                </div>
                <div class="col-12">Total Likes: ${this.likes}</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`

  }

  static get princessForm() {
    return /*html*/`
    <div class="modal-content">
    <div class="modal-body ">
      <form onsubmit="app.PrincessController.createPrincess(event)">
        <div class="mb-2">
          <label for="name">Name Of Princess</label>
          <input type="text" name="name" id="name" minlength="3" maxlength="50" required placeholder="Name of Princess...">
        </div>
        <div class="mb-2">
          <label for="imgUrl">Princess Image</label>
          <input type="url" name="imgUrl" id="imgUrl" minlength="3" maxlength="1000" required>
        </div>
        <div class="mb-2">
          <label for="hasHighHeels">Does she wear high heels?</label>
          <input type="checkbox" name="hasHighHeels" id="hasHighHeels">
        </div>
        <div class="mb-2">
          <label for="hairColor">Hair Color</label>
          <input type="text" name="hairColor" id="hairColor" minlength="3" maxlength="30" required>
        </div>
        <div class="mb-2">
          <label for="castleId">What kind of Castle does she live in?</label>
          <select id="castleId" name="castleId">
            <option value="64b1d5ac418b55825cbac592">Sand Castle</option>
            <option value="64b1d2d8418b55825cbac583">Ice Castle</option>
            <option value="64b1d666418b55825cbac597">Aquatic Castle</option>
            <option value="64b1d46e418b55825cbac588">Cottage</option>
            <option value="64b1d4c2418b55825cbac58a">Stone Castle</option>
            <option value="64b1d51a418b55825cbac58c">Cave</option>
          </select>
        </div>
        <div class="mb-2">
          <label for="description">Description of Princess</label>
          <textarea id="description" name="description" rows="4" cols="50"></textarea>
        </div>
        <div>
          <input type="submit">
        </div>
    </form>
     <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div> 
    </div>
  </div>
    `
  }
















  get computeCastleByPrincess() {

    const foundCastle = AppState.castles.find(c => c.id == this.castleId)
    console.log('found castle', foundCastle);
    return `
    <span>${foundCastle.location}</span> 
    <p class="mb-0">${foundCastle.climate}</p> 
    <p class="mb-0">${foundCastle.typeOfCastle}</p>
    `
  }
}