<template>
  <div class="particles-container" ref="particlesContainer"></div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

export default defineComponent({
  name: 'ParticlesBackground',
  setup() {
    const particlesContainer = ref(null);
    let scene, camera, renderer, particles, geometry, material;
    let animationFrameId;

    const initThree = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      particlesContainer.value.appendChild(renderer.domElement);

      geometry = new THREE.BufferGeometry();
      const particleCount = 2000;
      const vertices = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < vertices.length; i += 3) {
        vertices[i] = THREE.MathUtils.randFloatSpread(2000);
        vertices[i + 1] = THREE.MathUtils.randFloatSpread(2000);
        vertices[i + 2] = THREE.MathUtils.randFloatSpread(2000);

        // Add color variation
        colors[i] = 0.3 + Math.random() * 0.4; // R
        colors[i + 1] = 0.5 + Math.random() * 0.4; // G
        colors[i + 2] = 0.9 + Math.random() * 0.1; // B
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({ 
        size: 4,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 1000;
    };

    let lastTime = 0;
    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      // Limit frame rate to 30 FPS for performance
      if (currentTime - lastTime >= 33) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;

        // Add subtle wave motion
        particles.position.y = Math.sin(currentTime * 0.001) * 5;
        
        renderer.render(scene, camera);
        lastTime = currentTime;
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    onMounted(() => {
      initThree();
      animate();
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (renderer) {
        renderer.dispose();
        particlesContainer.value?.removeChild(renderer.domElement);
      }
      if (geometry) {
        geometry.dispose();
      }
      if (material) {
        material.dispose();
      }
      scene = null;
      camera = null;
      renderer = null;
      particles = null;
      geometry = null;
      material = null;
    });

    return {
      particlesContainer,
    };
  },
});
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>