class MaisonScrollableHero extends HTMLElement {
  connectedCallback() {
    this.track = this.querySelector('.ml-scroll-hero__track');
    this.slides = this.querySelectorAll('.ml-scroll-hero__slide');
    this.dots = this.querySelectorAll('.ml-scroll-hero__dot');
    this.indexLabel = this.querySelector('.ml-scroll-hero__index');
    this.slideCount = this.slides.length;
    this.currentIndex = 0;

    if (this.slideCount < 2) return;

    this._onScroll = this._onScroll.bind(this);
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._onScroll();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll() {
    const rect = this.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const scrolled = window.scrollY - sectionTop;

    // Total scroll range allocated to horizontal panning
    const totalRange = window.innerHeight * (this.slideCount - 1);
    const progress = Math.max(0, Math.min(1, scrolled / totalRange));

    const translateX = progress * (this.slideCount - 1) * 100;
    this.track.style.transform = `translateX(-${translateX}%)`;

    // Active slide index (snap to nearest)
    const rawIndex = progress * (this.slideCount - 1);
    const activeIndex = Math.round(rawIndex);

    if (activeIndex !== this.currentIndex) {
      this.currentIndex = activeIndex;
      this._updateDots(activeIndex);
    }

    if (this.indexLabel) {
      const display = Math.min(this.slideCount, activeIndex + 1);
      this.indexLabel.textContent = `${String(display).padStart(2, '0')} / ${String(this.slideCount).padStart(2, '0')}`;
    }
  }

  _updateDots(index) {
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
    });
  }
}

customElements.define('maison-scrollable-hero', MaisonScrollableHero);
