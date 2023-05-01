const strands = document.querySelectorAll("ul");
const duration = 3000;

strands.forEach((strand, i) => {
  strand.style.transform = `rotateY(${
    -i / (strands.length * 2.25) + 0.2
  }turn) rotateX(22deg)`;

  const bulbs = strand.querySelectorAll("li");
  bulbs.forEach((bulb, j) => {
    //bulb.style.scale = 1 + j*.02
    bulb.animate(
      [
        { background: "var(--back)" },
        { background: "var(--back)", offset: 0.9 },
        { background: "var(--fore)", offset: 0.95 },
        { background: "var(--fore)" }
      ],
      {
        duration,
        delay:
          (j * 2.25 * (((i + 16) * 2) / strands.length) * duration) /
            bulbs.length -
          30000,
        iterations: Infinity,
        easing: "cubic-bezier(0,.5,.5,1)"
      }
    );
  });
});
