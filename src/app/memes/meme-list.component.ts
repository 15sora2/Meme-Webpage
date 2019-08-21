import { Component, OnInit } from '@angular/core';
import { IMeme } from './meme';

@Component({
    selector: 'meme-app-list', 
    templateUrl: './meme-list.component.html'
})

export class memeListComponent implements OnInit{
    mainMemeList: string = 'List of Memes';

    _memeListFilter: string;
    get memeListFilter(): string{
      return this._memeListFilter;
    }
    set memeListFilter(value:string){
      this._memeListFilter = value;
      this.filteredMemeList = this.memeListFilter ? this.performFilter(this.memeListFilter) : this.memes;
    }

    filteredMemeList: IMeme[];
    memes: IMeme[] = [
        {
            "memeTitle": "Stage Fright Mob",
            "memeKeyword": "MobPsycho",
            "likes": 5,
            "dislikes": 1,
            "memeUrl": "assets/memes/mobSpeechless.jpg"
        },
        {
            "memeTitle": "Hulk Banner", 
            "memeKeyword": "Hulk",
            "likes": 67,
            "dislikes": 45,
            "memeUrl":"assets/memes/hulkBanner.jpg"
        },
        {
            "memeTitle": "Tired Spongebob",
            "memeKeyword": "Spongebob",
            "likes": 78,
            "dislikes": 24,
            "memeUrl":"assets/memes/tiredSpngeBob.jpg"
        }
    ]

    constructor(){
        this.filteredMemeList = this.memes;
        this.memeListFilter = 'Hulk';
      }
      performFilter(filterBy: string): IMeme[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.memes.filter((meme: IMeme) =>
                meme.memeKeyword.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

    ngOnInit(): void {
        return;
    }
}