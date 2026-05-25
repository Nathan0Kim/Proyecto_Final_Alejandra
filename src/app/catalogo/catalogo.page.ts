import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone:false
})
export class CatalogoPage implements OnInit {

ejemplo_array = [
{
name : 'Clasico',
precio: 15,
imagen: './assets/1.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Choco',
precio: 20,
imagen: './assets/2.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Choco Blanco',
precio: 20,
imagen: './assets/3.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Choco Crispies',
precio: 20,
imagen: './assets/4.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Colores Divertidos',
precio: 20,
imagen: './assets/5.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Chispitas de Colores',
precio: 20,
imagen: './assets/6.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Cereal Frutal',
precio: 25,
imagen: './assets/7.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Chocolate con Mani',
precio: 25,
imagen: './assets/8.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Galleta Triturada',
precio: 25,
imagen: './assets/9.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'Choco Arroz',
precio: 25,
imagen: './assets/10.jpeg',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
]



  constructor() { }

  ngOnInit() {
  }

}
