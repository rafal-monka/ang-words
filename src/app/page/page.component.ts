import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageService } from './page.service';
import { PageObj } from './PageObj';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [ PageService ]
})

export class PageComponent implements OnInit {
  contents: string;
  pageObj : PageObj;
  pageCountArr: number[];
  currentPage: number = 1;

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let page = params['currentPage'] ? params['currentPage'] : 1;
      this.requestPage(page);
    });
  }

  firstPage() {
    this.currentPage=1;
    this.router.navigate(['/page', this.currentPage]);
  }

  lastPage() {
    this.currentPage=this.pageObj.meta.pageCount;
    this.router.navigate(['/page', this.currentPage]);
  }

  prevPage() {
    if (this.currentPage>1) {
      this.currentPage--;
      this.router.navigate(['/page', this.currentPage]);
    }
  }

  nextPage() {
    if (this.currentPage<this.pageObj.meta.pageCount) {
      this.currentPage++;
      this.router.navigate(['/page', this.currentPage]);
    }
  }

  goPage(page: number) {
    if (page>=1 && page<=this.pageObj.meta.pageCount) {
      this.currentPage=page;
      this.router.navigate(['/page', this.currentPage]);
    }
  }

  onOptionsSelected(option: number) {
    console.log(option)
    this.goPage(option)
  }

  requestPage(page: number) {
    this.pageService.getPage(page)
      .subscribe(results => {
        this.currentPage = page;
        this.pageObj = Object.assign( new PageObj(), results );
        this.pageCountArr = [].constructor(this.pageObj.meta.pageCount);
      })
  }

}


