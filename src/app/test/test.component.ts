import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  providers: [ TestService ]
})
export class TestComponent {
  contents: string;
  constructor(private testService: TestService) {}

  clear() {
    this.contents = undefined;
  }

  request(id) {
    this.testService.getWord("http://localhost:8085/api/words/find/"+id)
      .subscribe(results => {
        console.log(results);
        this.contents = JSON.stringify(results)
      })
  }
}
