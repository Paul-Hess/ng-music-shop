import { Pipe, PipeTransform} from 'angular2/core';
import {Album } from './album.model';

@Pipe({
  name: 'artist',
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredArtist = args[0];


    return input.filter((album) => {
      return album.artist.toLowerCase().indexOf(desiredArtist) !== -1;
    });
  }

  filter(string1: string, string2: string){
    return string1 === string2;
  }
}
