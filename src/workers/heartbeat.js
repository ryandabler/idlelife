const workerCode =
`let now = Date.now();
const tick = () => {
    const current = Date.now();
    if (current >= now + 1000) {
        postMessage('tick');
        now += 1000;
    }
    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);`;

const blob = new Blob([workerCode], { type: 'application/javascript' });
const worker = URL.createObjectURL(blob);

module.exports = worker;