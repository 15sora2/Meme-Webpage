import { Component } from '@angular/core';

@Component({
    selector: 'meme-app-list', 
    templateUrl: './meme-list.component.html'
})

export class memeListComponent{
    mainMemeList: string = 'List of Memes';
}