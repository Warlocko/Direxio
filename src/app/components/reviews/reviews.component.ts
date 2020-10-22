import { Component, OnInit, ViewChildren, QueryList, ElementRef,  Directive, Input, HostListener  } from '@angular/core';
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

  reviewsTitle:string = "Reviews"
  reviewsSubtitle:string = "We care about our clients and their experience."
  reviewText:string = "Jacky is very knowledgeable about her profession, products used and always takes her time to make sure what first my skin type. She always gives me quality service, makes sure I understand what my service includes, the benefits of the Facial given and the care I need to follow up with. Her spa is very cozy, clean and quiet... makes me feel like a special client every time! \n So glad I found her for my skin needs"
  swipeText:string = "Swipe to see all our reviews."

  constructor() { }

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

    console.log(this.currentReviewIndex)
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
