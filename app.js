// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load Font
const loader = new THREE.FontLoader();
loader.load("RecoletaBlack1679684893.json", (font) => {
  // Create Text Geometry
  const textGeometry = new THREE.TextGeometry("psychic.engineering!", {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 12, s
  });

  // Material and Mesh
  const textMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // Add text to the scene
  scene.add(textMesh);

  // Position text
  textGeometry.computeBoundingBox();
  textGeometry.center();
  textMesh.position.y = -1;

  // Set up animation
  function animate() {
    requestAnimationFrame(animate);

    // Rotate text
    textMesh.rotation.x += 0.01;
    textMesh.rotation.y += 0.01;

    // Render
    renderer.render(scene, camera);
  }

  animate();
});

// Lights
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

camera.position.z = 5;
