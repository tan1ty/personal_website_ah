document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');
  let angle = 0;
  let direction = 1;
  const maxAngle = 5; // Maximum rotation angle
  const pendulumSpeed = 0.1; // Speed of the pendulum motion

  function swingPendulum() {
    angle += direction * pendulumSpeed;

    if (Math.abs(angle) > maxAngle) {
      direction *= -1;
    }

    video.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(swingPendulum);
  }

  swingPendulum();
});
