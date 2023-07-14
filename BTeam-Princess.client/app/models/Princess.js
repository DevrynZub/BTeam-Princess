
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
  }


  get PrincessTemplate() {
    return `
    <!-- <div class="col-md-8 col-12 p-3">
    <div>
      <img class="elevation-5 selectable rounded img-fluid"
        onclick="app.PrincessController.setActivePrincess('${this.id}')"
        src="${this.imgUrl}"
        alt="${this.name}">
    </div>
    <div class="row py-2 justify-space-between">
      <div class="col-4">
        <p class="fs-5 p-2"><b>${this.name}</b></p>
      </div>
      <div class="col-4 text-center">
        <button class="p-2 btn btn-success ❤️">${this.likes}</button>
      </div>
      <div class="col-4 text-end">
        <button class="p-2 💬">Comments</button>
      </div>
    </div>
  </div>
    `
  }

  getActivePrincessTemplate() {


  }

}