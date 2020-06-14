import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WordObj } from '../../word/WordObj';

@Component({
  selector: 'word-in-page',
  templateUrl: './word-in-page.component.html',
  styleUrls: ['../../app.component.css', './word-in-page.component.css']
})
export class WordInPageComponent implements OnInit {
  @Input() word : WordObj;
  translationShort: String;

  constructor(private router: Router) {  }

  ngOnInit() {
    this.translationShort = this.word.translation.substr(0,80)+(this.word.translation.length>100?"...":"");
  }

  goToWord() {
    this.router.navigate(['/word', this.word._id]);
  }

}
