import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <p-carousel 
      [value]="images" 
      [numVisible]="1" 
      [numScroll]="1" 
      [autoplayInterval]="3000"
      [circular]="true" 
    >
      <ng-template let-image pTemplate="item">
          <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
              <div class="mb-3">
                  <img src="{{ image.url }}" [alt]="image.title" class="w-6 shadow-2" />
              </div>
          </div>
      </ng-template>
    </p-carousel>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  images = [
    { title: "image1", url: "https://www.centralbank.ie/images/default-source/news-articles/nwq-exterior/2023/hjl_bank-of-ireland_hc_022a--756x350.jpg?sfvrsn=c61c991d_3"}, 
    { title: "image2", url: "https://www.centralbank.ie/images/default-source/news-articles/nwq-exterior/central-bank-of-irelande9fed2134644629bacc1ff0000269695.jpg?sfvrsn=c0bfb01d_4"},
    { title: "image3", url: "https://www.centralbank.ie/images/default-source/news-articles/nwq-exterior/2023/hjl_bank-of-ireland_hc_025--756x350.jpg?sfvrsn=3b1c991d_3"}
  ]

}
