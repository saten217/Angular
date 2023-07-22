
export class ColorsService {

  getcolors(){
    return [
        {
          name: 'black spread',
      colors:'Black and White',
      src:'../assets/images/logo.png',
      price:5000
        },
        {
          name :'Red',
        colors :'Brown',
        src:'../assets/images/img.jpg',
        price:3000
        },
        {
          name: 'Blue Bar',
      colors:'Blue and Black',
      src:'../assets/images/img3.jpg',
      price:6000
        },
        {
          name: 'Blue Bar Pied',
      colors:'Blue with White bald',
      src:'../assets/images/2img.jpg',
      price:7000
        },
        {
          name: 'Grizzle',
          colors:'White and black',
          src:'../assets/images/Grizzle.png',
          price:4000
        },
        {
          name: 'Mely',
          colors:'White and black',
          src:'../assets/images/mely.jpg',
          price:3000
        }
    ]
  }

  constructor() { }
}
