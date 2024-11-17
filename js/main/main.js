const lenis = new Lenis({
 // Valeur entre 0 et 1
 // Valeur par défaut : 0,1
 // Plus la valeur est faible, plus le scroll sera fluide
 lerp: 0.2,
 // Valeur par défaut : 1
 // Plus la valeur est haute, plus le défilement sera rapide
 wheelMultiplier: 0.2,
 touchMultiplier: 0.1,
 smooth: true,
 smoothTouch: true,
 prevent: (node) => node.classList.contains('politcal'),
});

function raf(time) {
 lenis.raf(time);
 requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

console.log(lenis);
