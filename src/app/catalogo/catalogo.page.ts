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
name : 'ejemplo1',
precio: 1,
imagen: '',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'ejemplo2',
precio: 1,
imagen: '',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'ejemplo3',
precio: 1,
imagen: '',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'ejemplo4',
precio: 1,
imagen: '',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
{
name : 'ejemplo5',
precio: 1,
imagen: '',
url:'https://www.facebook.com/story.php?story_fbid=498293949220481&id=100071196392298',
},
]



  constructor() { }

  ngOnInit() {
  }

}
