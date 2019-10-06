TweenMax.defaultEase = Linear.easeOut;

new fullpage('#homedecor', {
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector('h1');
    const tl = new TimelineMax({ delay: 0.5 });

    // Animating title with duration from one position to the next
    tl.fromTo(title, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 });

    // Section two animations
    if (destination.index === 1) {
      const chairs = document.querySelectorAll('.chair');
      const description = document.querySelector('.description');

      // Animating chair and text sliding in
      tl.fromTo(chairs, 0.7, { x: '100%' }, { x: '-35%' })
        .fromTo(description, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
        .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
        .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
        .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    }

    // Animate section 2
    if (destination.index === 2) {
      const descriptionTwo = document.querySelector('.description-two');
      const lamp = document.querySelector('.lamp');

      tl.fromTo(
        descriptionTwo,
        0.5,
        { y: '50', opacity: 0 },
        { y: 0, opacity: 1 }
      ).fromTo(lamp, 0.7, { x: '-100', opacity: 0 }, { x: 0, opacity: 0.9 });
    }
  }
});
