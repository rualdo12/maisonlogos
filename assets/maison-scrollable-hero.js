class MaisonVideoHero extends HTMLElement {
  connectedCallback() {
    this.video = this.querySelector('.ml-video-hero__video');
    this.poster = this.querySelector('.ml-video-hero__poster');
    this.scrollHint = this.querySelector('.ml-video-hero__scroll-hint');
    this.progressBar = this.querySelector('.ml-video-hero__progress');

    if (!this.video) return;

    this._pauseTimer = null;
    this._hasScrolled = false;

    this._onScroll = this._onScroll.bind(this);
    this._onVideoTimeUpdate = this._onVideoTimeUpdate.bind(this);

    window.addEventListener('scroll', this._onScroll, { passive: true });
    this.video.addEventListener('timeupdate', this._onVideoTimeUpdate);

    // Ensure video is ready to be scrubbed without needing user interaction
    this.video.load();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onScroll);
    this.video?.removeEventListener('timeupdate', this._onVideoTimeUpdate);
    clearTimeout(this._pauseTimer);
  }

  _isInStickyZone() {
    const rect = this.getBoundingClientRect();
    // Sticky zone: the section top has scrolled above viewport top,
    // but the section bottom hasn't yet reached the viewport top
    return rect.top <= 0 && rect.bottom > window.innerHeight;
  }

  _onScroll() {
    if (!this._isInStickyZone()) {
      // If we scrolled back above the section, reset
      if (this.getBoundingClientRect().top > 0) {
        this._reset();
      } else {
        this._pause();
      }
      return;
    }

    // First scroll into section
    if (!this._hasScrolled) {
      this._hasScrolled = true;
      if (this.scrollHint) this.scrollHint.classList.add('is-hidden');
      if (this.poster) this.poster.classList.add('is-hidden');
    }

    // Play while scrolling
    this._play();

    // Pause after scrolling stops (150ms debounce)
    clearTimeout(this._pauseTimer);
    this._pauseTimer = setTimeout(() => this._pause(), 150);

    // Update progress bar based on scroll position within section
    this._updateProgress();
  }

  _play() {
    if (this.video.paused) {
      this.video.play().catch(() => {
        // Autoplay blocked — nothing we can do without a gesture
      });
    }
  }

  _pause() {
    if (!this.video.paused) {
      this.video.pause();
    }
  }

  _reset() {
    this._pause();
    this.video.currentTime = 0;
    this._hasScrolled = false;
    if (this.scrollHint) this.scrollHint.classList.remove('is-hidden');
    if (this.poster) this.poster.classList.remove('is-hidden');
    if (this.progressBar) this.progressBar.style.width = '0%';
  }

  _updateProgress() {
    const rect = this.getBoundingClientRect();
    const sectionScrollHeight = this.offsetHeight - window.innerHeight;
    const scrolled = Math.abs(rect.top);
    const progress = Math.max(0, Math.min(1, scrolled / sectionScrollHeight));
    if (this.progressBar) {
      this.progressBar.style.width = `${progress * 100}%`;
    }
  }

  _onVideoTimeUpdate() {
    // If video reaches its end, freeze on last frame
    if (this.video.duration && this.video.currentTime >= this.video.duration - 0.05) {
      this._pause();
    }
  }
}

customElements.define('maison-video-hero', MaisonVideoHero);
