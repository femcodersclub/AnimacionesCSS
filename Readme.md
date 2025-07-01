# 🧘‍♀️ Breathe - CSS Meditation App

> Una aplicación web de mindfulness y respiración guiada, creada completamente con **CSS puro** y JavaScript mínimo.

![Demo](./assets/animaciones.gif)

## 📖 Contexto del Proyecto

Este proyecto fue desarrollado específicamente para acompañar nuestro artículo completo sobre animaciones CSS en **FemCoders Club**. Cada técnica implementada aquí se explica en detalle en el post, desde conceptos básicos hasta técnicas avanzadas de performance y accesibilidad.

**🔗 Lee el artículo completo:** [Domina las Animaciones CSS: De Básico a Avanzado](https://www.femcodersclub.com/recursos/css/animaciones-css)

## 🌟 Características

- ✨ **3 ejercicios de respiración** diferentes con animaciones únicas
- 🎨 **Animaciones CSS avanzadas** sin dependencias externas
- 📱 **Completamente responsive** - funciona perfecto en móvil
- ♿ **Accesible** - respeta `prefers-reduced-motion`
- 🎭 **Efectos visuales sofisticados** - gradientes, ondas, partículas
- ⚡ **Performance optimizada** - usa GPU para animaciones suaves

## 🏃‍♀️ Demo en Vivo

[👉 Ver Demo](https://femcodersclub.github.io/AnimacionesCSS/)

## 🧘 Ejercicios Incluidos

### 1. 🌸 Respiración Relajante (8 segundos)

- **Técnica**: Inhalación y exhalación natural
- **Visual**: Círculo que crece y decrece suavemente
- **Ideal para**: Principiantes, relajación general

### 2. 🌊 Técnica 4-7-8 (19 segundos)

- **Técnica**: Inhalar 4s → Mantener 7s → Exhalar 8s
- **Visual**: Círculo con cambios de color sincronizados
- **Ideal para**: Reducir ansiedad, dormir mejor

### 3. 📦 Box Breathing (16 segundos)

- **Técnica**: 4-4-4-4 (inhalar-mantener-exhalar-mantener)
- **Visual**: Transformación geométrica círculo ↔ cuadrado
- **Ideal para**: Concentración, técnicas militares/deportivas

## 🎨 Técnicas CSS Demostradas

### Básicas

- `transition` para efectos hover suaves
- `transform: scale()` para animaciones de crecimiento
- `opacity` y cambios de color fluidos

### Intermedias

- `@keyframes` con múltiples stops (0%, 25%, 50%, 75%, 100%)
- `animation-delay` para efectos en cascada
- Pseudo-elementos (`::before`, `::after`) para capas adicionales
- Custom timing functions con `cubic-bezier()`

### Avanzadas

- **Múltiples animaciones sincronizadas** en un solo elemento
- **Transformaciones geométricas complejas** (círculo → cuadrado)
- **Sistemas de color dinámicos** con CSS custom properties
- **Efectos de profundidad** con `box-shadow` y `backdrop-filter`
- **Optimización de performance** usando `transform` y `opacity`

## 🛠️ Instalación y Uso

### Opción 1: Descarga Directa

```bash
git clone https://github.com/femcoders-club/breathe-css-meditation.git
cd breathe-css-meditation
# Abrir index.html en tu navegador
```

### Opción 2: Live Server (Recomendado)

```bash
# Si tienes Live Server instalado
live-server
```

### Opción 3: Python Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 📁 Estructura del Proyecto

```breathe-css-meditation/
├── 📄 index.html          # Estructura principal
├── 🎨 styles.css           # Todas las animaciones CSS (integrado en HTML)
├── ⚡ main.js           # JavaScript mínimo (integrado en HTML)
├── 📖 README.md           # Este archivo
├── 🖼️ assets/demo.gif            # Demostración animada
```

## 🎯 Casos de Uso Educativos

Este proyecto es perfecto para aprender:

### Para Principiantes

- Cómo estructurar animaciones CSS básicas
- El poder de `transform` y `opacity`
- Timing y easing functions

### Para Nivel Intermedio

- Coordinación de múltiples animaciones
- Uso creativo de pseudo-elementos
- Responsive design para animaciones

### Para Nivel Avanzado

- Sistemas de animación complejos
- Optimización de performance
- Accesibilidad en animaciones

## 🔧 Personalización

### Cambiar Colores

```css
:root {
    --primary-color: #6B73FF;     /* Color principal */
    --secondary-color: #9FACE6;   /* Color secundario */
    --accent-color: #FFB4A2;      /* Color de acento */
}
```

### Ajustar Timing

```css
/* Modificar duración de respiración básica */
.breathing-circle {
    animation: breathe 10s ease-in-out infinite; /* Era 8s */
}
```

### Añadir Nuevos Ejercicios

1. Crear nuevo `@keyframes` en CSS
2. Añadir configuración en el array `exercises` de JavaScript
3. Definir fases de texto sincronizadas

## 🧠 Principios de Diseño

### UX/UI

- **Minimalismo**: Interfaz limpia sin distracciones
- **Feedback visual**: Cada acción tiene respuesta visual inmediata
- **Progresión natural**: Flujo intuitivo entre ejercicios

### Performance

- **GPU acceleration**: Uso de `transform` y `opacity`
- **No layout thrashing**: Evitamos propiedades que disparan reflow
- **Efficient animations**: 60fps estables en dispositivos modernos

### Accesibilidad

- **Reduced motion**: Respeta preferencias del usuario
- **Semantic HTML**: Estructura accesible para screen readers
- **Keyboard navigation**: Todos los controles son accesibles por teclado

## 🤝 Contribuir

¿Quieres mejorar este proyecto? ¡Nos encantaría tu contribución!

### Ideas para Contribuciones

- 🎵 Integración con Web Audio API para sonidos ambientales
- 🎨 Nuevos temas visuales (oscuro, naturaleza, cosmos)
- 🧘 Ejercicios adicionales de mindfulness
- 📊 Sistema de progreso y estadísticas
- 🌍 Internacionalización (i18n)

### Proceso

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Añadir nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📚 Recursos y Referencias

### Técnicas CSS

- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations)
- [CSS Triggers](https://csstriggers.com/) - Performance de propiedades CSS
- [Easing Functions](https://easings.net/) - Curvas de animación

### Herramientas Útiles

- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [CSS Animation Performance](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- [Can I Use - CSS Features](https://caniuse.com/)

## 🏆 Logros Técnicos

- ✅ **0 dependencias externas** - Todo funciona con tecnologías web nativas
- ✅ **< 500 líneas de código** - Solución compacta y eficiente
- ✅ **60fps animaciones** - Performance optimizada para todos los dispositivos
- ✅ **100% responsive** - Desde móviles hasta pantallas 4K
- ✅ **Accesibilidad completa** - WCAG 2.1 compatible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

## 💜 Sobre Femcoders Club

Femcoders Club es una comunidad de mujeres en tecnología cuyo principal objetivo es romper la brecha digital y dar más visibilidad a las mujeres en el sector tech.

### Únete a la comunidad

- 🌐 [Web oficial](https://femcodersclub.com)
- 💬 [Slack](https://communityinviter.com/apps/femcodersclub/femcoders-club)
- 📸 [Instagram](https://www.instagram.com/femcoders_club/)
- 🐦 [Twitter](https://x.com/FemCodersClub)
- 💼 [Linkedin](https://www.linkedin.com/company/100394366/)

### Otros proyectos educativos

- [Transformaciones CSS 2D Y 3D](https://github.com/femcodersclub/Dashboard-de-Control-Futurista)
- [CSS-Grid-Flexbox-Layouts](https://github.com/femcodersclub/css-grid-flexbox-layouts)
- [Demo Flexbox](https://femcodersclub.github.io/demoFlexbox/)

---

<div align="center">

  <p>Hecho con 💜 por <strong>Femcoders Club</strong></p>
  <p><em>"Empoderando mujeres en tecnología"</em></p>
</div>