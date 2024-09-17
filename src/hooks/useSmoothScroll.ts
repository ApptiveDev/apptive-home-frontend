function useSmoothScroll(targetPosition: number) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 500; // 스크롤 애니메이션 시간 (밀리초)
  let startTime: number | null = null;

  const animation = (currentTime: any) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime!;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (time: number, base: number, distance: number, duration: number) => {
    time /= duration / 2;
    if (time < 1) return (distance / 2) * time * time + base;
    time--;
    return (-distance / 2) * (time * (time - 2) - 1) + base;
  };

  requestAnimationFrame(animation);
};

export default useSmoothScroll;