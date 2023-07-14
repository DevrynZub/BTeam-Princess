
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
    <div class="col-md-8 col-12 p-3">
    <div class="selectable" 
    onclick="app.PrincessController.setActivePrincess('${this.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <img class="elevation-5 rounded img-fluid w-100"
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
                  <div class="col-8">Info/User Account</div>
                  <div class="col-4 mdi mdi-delete">Delete</div>
                  <div class="col-12">Description</div>
                  <div class="col-12">Castle Info</div>
                </div>
                <div class="row">
                  <div class="col-12">Database Comments</div>
                  <div class="col-12">Add Comment</div>
                  <div class="col-12">${this.likes}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`

  }

}