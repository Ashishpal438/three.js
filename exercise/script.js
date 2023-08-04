const scene = new THREE.Scene();

// Red Cube 
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'red'})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Sizes 
const sizes = {
    width: 800,
    height: 500
}


//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera);

//Renederer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas
}); 

renderer.setSize(sizes.width, sizes.height);

// renderer.render(scene, camera)



function render(time) {
  time *= 0.001; // convert time to seconds

  camera.rotation.x = time;
  camera.rotation.y = time;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
requestAnimationFrame(render);