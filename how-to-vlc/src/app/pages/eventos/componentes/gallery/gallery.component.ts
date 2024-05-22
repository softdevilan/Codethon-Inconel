import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('gallery') gallery!: ElementRef;
 
  dragging = false;
  startX!: number;
  startScrollLeft!: number;
 
  images = [
    { url: 'https://gocelebrain.com/pub/media/catalog/product/6/1/6197706_orig_2.jpg?width=130&store=default&image-type=thumbnail', alt: 'Imagen 1' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SS-MOLI-LIGHT_01st.jpg', alt: 'Imagen 2' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg', alt: 'Imagen 3' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_11JULIO.jpg', alt: 'Imagen 4' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/03/IMG-20221129-WA0023.jpg', alt: 'Imagen 5' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SACUDELO-27MARZO.jpg', alt: 'Imagen 6' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SS-MOLI-LIGHT_01st.jpg', alt: 'Imagen 7' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg', alt: 'Imagen 8' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_11JULIO.jpg', alt: 'Imagen 9' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/03/IMG-20221129-WA0023.jpg', alt: 'Imagen 10' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SACUDELO-27MARZO.jpg', alt: 'Imagen 11' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2024/03/SS-MOLI-LIGHT_01st.jpg', alt: 'Imagen 12' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_SOFOCCO_10JULIO.jpg', alt: 'Imagen 13' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/06/JV_11JULIO.jpg', alt: 'Imagen 14' },
    { url: 'https://grupomemorable.com/wp-content/uploads/2023/03/IMG-20221129-WA0023.jpg', alt: 'Imagen 15' },
  ];
 
  ngAfterViewInit() {
    this.cloneImages();
    this.gallery.nativeElement.scrollLeft = this.gallery.nativeElement.offsetWidth;
  }
 
  cloneImages() {
    const galleryElement = this.gallery.nativeElement;
    galleryElement.innerHTML += galleryElement.innerHTML;
  }
 
  @HostListener('window:mouseup')
  onMouseUp() {
    this.dragging = false;
    this.checkBoundary();
  }
 
  @HostListener('window:touchend')
  onTouchEnd() {
    this.dragging = false;
    this.checkBoundary();
  }
 
  onMouseDown(event: MouseEvent) {
    this.startDragging(event.pageX);
  }
 
  onMouseMove(event: MouseEvent) {
    this.move(event.pageX);
  }
 
  onTouchStart(event: TouchEvent) {
    this.startDragging(event.touches[0].pageX);
  }
 
  onTouchMove(event: TouchEvent) {
    this.move(event.touches[0].pageX);
  }
 
  private startDragging(startX: number) {
    this.dragging = true;
    this.startX = startX - this.gallery.nativeElement.offsetLeft;
    this.startScrollLeft = this.gallery.nativeElement.scrollLeft;
  }
 
  private move(currentX: number) {
    if (!this.dragging) return;
    const x = currentX - this.gallery.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1;
    this.gallery.nativeElement.scrollLeft = this.startScrollLeft - walk;
  }
 
  private checkBoundary() {
    const galleryElement = this.gallery.nativeElement;
    if (galleryElement.scrollLeft === 0) {
      galleryElement.scrollLeft = galleryElement.scrollWidth / 2;
    } else if (galleryElement.scrollLeft >= galleryElement.scrollWidth / 2) {
      galleryElement.scrollLeft = galleryElement.scrollLeft - galleryElement.scrollWidth / 2;
    }
  }
}