import { Injectable } from '@angular/core';
import { IMeme } from './meme';

@Injectable({
    providedIn: 'root'
})

export class MemeService{
    getMemes(): IMeme[]{
        return [
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
        ];
    }
}