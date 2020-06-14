import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WordService } from './word.service';
import { WordObj } from './WordObj';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['../app.component.css', './word.component.css'],
  providers: [ WordService ]
})
export class WordComponent implements OnInit {
  contents: string;
  wordObj : WordObj;
  examplesHTML: String;
  constructor(
    private wordService: WordService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'] ? params['id'] : 1;
      this.requestWord(id);
    });
  }

  goBack() {
    this.location.back();
  }

  deleteWord() {
    if (confirm("Are you sure to DELETE?"))
      this.wordService.deleteWord(this.wordObj._id)
        .subscribe(results => {
            console.log("deleteWord.subscribe.results", results)
            this.goBack();
        })
  }

  tagWord(tag: string) {
    console.log("tagWord", this.wordObj._id, tag);
      this.wordService.tagWord(this.wordObj._id, tag)
        .subscribe(results => {
            console.log("tagWord.subscribe.results", results)
            this.requestWord(this.wordObj._id);
        })
  }

  requestWord(id: number) {
    this.wordService.getWord(id)
      .subscribe(results => {
        this.contents = JSON.stringify(results);
        this.wordObj = Object.assign( new WordObj(), results );
        this.examplesHTML = this.wordObj.examples.split("*").join('<br>*');
      })
  }

}

