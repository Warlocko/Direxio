import { Component, OnInit, ViewChildren, QueryList, ElementRef,  Directive, Input, HostListener  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as gsap from 'gsap';
import {TimelineLite, Sine} from 'gsap';

enum Direction {
  Left = '-=',
  Right = '+='
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit {
  public currentReviewIndex = 0;
  public enableCarouselButtons = true;
  public t1;
  

  @ViewChildren('carouselItem')
  private carouselItems : QueryList<ElementRef>;

  @ViewChildren('carouselButton')
  private carouselButtons : QueryList<ElementRef>;


  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  private readonly inactiveProperties = {

  }

  ngAfterViewInit(): void {
    const carouselNativeElements = this.getCarouselElements();
    const currentLeftReview = carouselNativeElements[0];
    const currentRightReview = carouselNativeElements[2];
    this.t1 = new TimelineLite({ repeat: 0});
    this.t1.set([currentLeftReview, currentRightReview], this.inactiveProperties);
  }

  public right(): void {
    this.slide(Direction.Right);
  }

  public left(): void {
    this.slide(Direction.Left);
  }

public slide(direction: Direction): void {

    document.getElementsByClassName('currentReview')[0].classList.remove('currentReview')
    document.getElementsByClassName('previousReview')[0].classList.remove('previousReview')
    document.getElementsByClassName('nextReview')[0].classList.remove('nextReview')

    const carouselNativeElements = this.getCarouselElements();
    const currentLeftReviewIndex = this.getPreviousIndex(this.currentReviewIndex);
    const currentRightReviewIndex = this.getNextIndex(this.currentReviewIndex);

    var currentReview;
    var previousReview;
    var nextReview;
    

    let nextReviewIndex;

    if (direction === Direction.Right) {
      currentReview = carouselNativeElements[currentRightReviewIndex];
      previousReview = carouselNativeElements[this.currentReviewIndex];
      nextReview = carouselNativeElements[this.getNextIndex(currentRightReviewIndex)];
      nextReviewIndex = currentRightReviewIndex;
    } else {
      currentReview = carouselNativeElements[currentLeftReviewIndex];
      previousReview = carouselNativeElements[this.getPreviousIndex(currentLeftReviewIndex)];
      nextReview = carouselNativeElements[this.currentReviewIndex];
      nextReviewIndex = currentLeftReviewIndex;
    }

    const reviewButtons = this.getCarouselButtons();
    
    document.getElementsByClassName('reviewsChosenSliderBtn')[0].classList.remove('reviewsChosenSliderBtn');

    if(nextReviewIndex>5){
      reviewButtons[0].classList.add('reviewsChosenSliderBtn');
    }else if (nextReviewIndex<0){
      reviewButtons[5].classList.add('reviewsChosenSliderBtn');
    }else{
      reviewButtons[nextReviewIndex].classList.add('reviewsChosenSliderBtn');
    }
    

    previousReview.classList.add('previousReview')
    currentReview.classList.add('currentReview')
    nextReview.classList.add('nextReview')
    previousReview.classList.add('transitionReview')
    currentReview.classList.add('transitionReview')
    nextReview.classList.add('transitionReview')

    setTimeout(() => {previousReview.classList.remove('transitionReview')},200)
    setTimeout(() => {currentReview.classList.remove('transitionReview')},200)
    setTimeout(() => {nextReview.classList.remove('transitionReview')},200)

    this.t1.to([], {}).eventCallback('onComplete', () => {
      this.currentReviewIndex = nextReviewIndex;
    });
    
}

public selectReview(index: number): void {
  this.currentReviewIndex = index;
  console.log(this.currentReviewIndex)
  document.getElementsByClassName('currentReview')[0].classList.remove('currentReview')
  document.getElementsByClassName('previousReview')[0].classList.remove('previousReview')
  document.getElementsByClassName('nextReview')[0].classList.remove('nextReview')

  const carouselNativeElements = this.getCarouselElements();
  const currentLeftReviewIndex = this.getPreviousIndex(this.currentReviewIndex);
  const currentRightReviewIndex = this.getNextIndex(this.currentReviewIndex);

  var currentReview = carouselNativeElements[this.currentReviewIndex];
  var previousReview = carouselNativeElements[currentLeftReviewIndex];
  var nextReview = carouselNativeElements[currentRightReviewIndex];

  previousReview.classList.add('previousReview')
  currentReview.classList.add('currentReview')
  nextReview.classList.add('nextReview')  

  previousReview.classList.add('transitionReview')
  currentReview.classList.add('transitionReview')
  nextReview.classList.add('transitionReview')

  setTimeout(() => {previousReview.classList.remove('transitionReview')},200)
  setTimeout(() => {currentReview.classList.remove('transitionReview')},200)
  setTimeout(() => {nextReview.classList.remove('transitionReview')},200)

  const reviewButtons = this.getCarouselButtons();
    
  document.getElementsByClassName('reviewsChosenSliderBtn')[0].classList.remove('reviewsChosenSliderBtn');

  reviewButtons[index].classList.add('reviewsChosenSliderBtn');

  this.t1.to([], {}).eventCallback('onComplete', () => {
  });
}

private getNextIndex(index: number): number {
  return ((index + 1) % this.carouselItems.length);
}

private getPreviousIndex(index: number) {
  return ((index + this.carouselItems.length - 1)
    % this.carouselItems.length);
}

private getCarouselElements(): any[] {
  return this.carouselItems.toArray().map(el => el.nativeElement)
}

private getCarouselButtons(): any[] {
  return this.carouselButtons.toArray().map(el => el.nativeElement)
}

}
