import { Component, OnInit } from '@angular/core';
import { IMeme } from './meme';
import { MemeService } from './meme-list.service';

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
    memes: IMeme[] = [];

    constructor(private memeService: MemeService){
        
      }
      performFilter(filterBy: string): IMeme[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.memes.filter((meme: IMeme) =>
                meme.memeKeyword.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

    ngOnInit(): void {
        this.memes = this.memeService.getMemes();
        this.filteredMemeList = this.memes;
    }
}