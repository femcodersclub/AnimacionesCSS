const breathingText = document.getElementById("breathingText");
const pauseBtn = document.getElementById("pauseBtn");
const changeBtn = document.getElementById("changeBtn");
const breathingCircle = document.querySelector(".breathing-circle");
const exerciseIndicator = document.getElementById("exerciseIndicator");

let isPaused = false;
let currentExercise = 0;

// Configuración de ejercicios
const exercises = [
  {
    name: "Respiración Relajante",
    animation: "breathe 8s ease-in-out infinite",
    duration: 8000,
    phases: [
      { text: "Inhala lentamente...", duration: 4000 },
      { text: "Exhala suavemente...", duration: 4000 },
    ],
  },
  {
    name: "Técnica 4-7-8",
    animation: "breathe478 19s ease-in-out infinite",
    duration: 19000,
    phases: [
      { text: "Inhala por 4 segundos...", duration: 4000 },
      { text: "Mantén por 7 segundos...", duration: 7000 },
      { text: "Exhala por 8 segundos...", duration: 8000 },
    ],
  },
  {
    name: "Box Breathing",
    animation: "breatheBox 16s ease-in-out infinite",
    duration: 16000,
    phases: [
      { text: "Inhala por 4 segundos...", duration: 4000 },
      { text: "Mantén por 4 segundos...", duration: 4000 },
      { text: "Exhala por 4 segundos...", duration: 4000 },
      { text: "Mantén vacío por 4 segundos...", duration: 4000 },
    ],
  },
];

let currentPhase = 0;
let phaseInterval;

// Función para inicializar un ejercicio
function initializeExercise() {
  const exercise = exercises[currentExercise];

  // Actualizar indicador
  exerciseIndicator.textContent = exercise.name;

  // Aplicar animación
  breathingCircle.style.animation = exercise.animation;

  // Configurar fases de texto
  startTextCycle();
}

// Función para el ciclo de texto
function startTextCycle() {
  if (phaseInterval) clearInterval(phaseInterval);

  const exercise = exercises[currentExercise];
  currentPhase = 0;

  // Mostrar primera fase inmediatamente
  breathingText.textContent = exercise.phases[currentPhase].text;

  // Configurar intervalo para las siguientes fases
  let timeElapsed = 0;
  phaseInterval = setInterval(() => {
    if (isPaused) return;

    const currentPhaseConfig = exercise.phases[currentPhase];
    timeElapsed += 100;

    if (timeElapsed >= currentPhaseConfig.duration) {
      currentPhase = (currentPhase + 1) % exercise.phases.length;
      breathingText.textContent = exercise.phases[currentPhase].text;
      timeElapsed = 0;
    }
  }, 100);
}

// Funcionalidad de pausa
pauseBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  if (isPaused) {
    breathingCircle.style.animationPlayState = "paused";
    pauseBtn.textContent = "Continuar";
    breathingText.textContent = "Pausado - Respira naturalmente";
  } else {
    breathingCircle.style.animationPlayState = "running";
    pauseBtn.textContent = "Pausar";
    if (phaseInterval) clearInterval(phaseInterval);
    startTextCycle();
  }
});

// Cambiar ejercicio
changeBtn.addEventListener("click", () => {
  currentExercise = (currentExercise + 1) % exercises.length;
  isPaused = false;
  pauseBtn.textContent = "Pausar";
  initializeExercise();
});

// Inicializar el primer ejercicio
initializeExercise();
