import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'material-demo';
  imgSrc = 'https://picsum.photos/200';
  boolVal = true;
  incr = 0;
  name = '';

  @ViewChild('inputRefName') nameEleRef!: ElementRef;

  incrementBtn() {
    this.incr++;
  }

  greetSaif(val: string) {
    this.name = val;
    if (val === 'saif') {
      alert('Welcome saif');
    }
  }

  ngAfterViewInit(): void {
    this.nameEleRef.nativeElement.focus();
  }
}
