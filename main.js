import './style.css'
import *  as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let camera, renderer;
let img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,img10
const scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

img0 = new THREE.TextureLoader().load('media/img_000.jpg');
img1 = new THREE.TextureLoader().load('media/img_001.jpg');
img2 = new THREE.TextureLoader().load('media/img_002.jpg');
img3 = new THREE.TextureLoader().load('media/img_003.jpg');
img4 = new THREE.TextureLoader().load('media/img_004.jpg');
img5 = new THREE.TextureLoader().load('media/img_005.jpg');
img6 = new THREE.TextureLoader().load('media/img_006.jpg');
img7 = new THREE.TextureLoader().load('media/img_007.jpg');
img8 = new THREE.TextureLoader().load('media/img_008.jpg');
img9 = new THREE.TextureLoader().load('media/img_009.jpg');
img10 = new THREE.TextureLoader().load('media/img_010.jpg');

const circlePlateGeo = new THREE.CircleGeometry(200, 32);;
const circleTexture = new THREE.MeshBasicMaterial({ map: img8 });
const circlePlate = new THREE.Mesh(circlePlateGeo, circleTexture);
circlePlate.rotateX(80.1)
circlePlate.position.set(0, -180, 0)

const displayGeo = new THREE.BoxGeometry(120, 80, 1);

const disp1Texture = new THREE.MeshBasicMaterial({ map: img0 });
const display1 = new THREE.Mesh(displayGeo, disp1Texture);
const disp2Texture = new THREE.MeshBasicMaterial({ map: img1 });
const display2 = new THREE.Mesh(displayGeo, disp2Texture);
const disp3Texture = new THREE.MeshBasicMaterial({ map: img2 });
const display3 = new THREE.Mesh(displayGeo, disp3Texture);
const disp4Texture = new THREE.MeshBasicMaterial({ map: img3 });
const display4 = new THREE.Mesh(displayGeo, disp4Texture);
const disp5Texture = new THREE.MeshBasicMaterial({ map: img4 });
const display5 = new THREE.Mesh(displayGeo, disp5Texture);
const disp6Texture = new THREE.MeshBasicMaterial({ map: img5 });
const display6 = new THREE.Mesh(displayGeo, disp6Texture);
const disp7Texture = new THREE.MeshBasicMaterial({ map: img6 });
const display7 = new THREE.Mesh(displayGeo, disp7Texture);
const disp8texture = new THREE.MeshBasicMaterial({ map: img7 });
const display8 = new THREE.Mesh(displayGeo, disp8texture);

display4.rotateY(55)
display3.rotateY(55)
display5.rotateY(69.90)
display6.rotateY(-21.2)
display7.rotateY(33.75)
display8.rotateY(40.109)

display1.position.set(0, -5, 190)
display2.position.set(0, -5, -190)
display3.position.set(190, -5, 0)
display4.position.set(-190, -5, 0)
display5.position.set(135, -5, 135)
display6.position.set(-135, -5, -135)
display7.position.set(-135, -5, 135)
display8.position.set(135, -5, -135)


scene.add(circlePlate);
scene.add(display1);
scene.add(display2);
scene.add(display3);
scene.add(display4);
scene.add(display5);
scene.add(display6);
scene.add(display7);
scene.add(display8);

const controls = new OrbitControls(camera, renderer.domElement);
 
scene.background=img10
 
function animate() {
  requestAnimationFrame(animate);
  document.body.onscroll = cameraRotate
  circlePlate.rotateZ(-0.01)
  controls.update();
  renderer.render(scene, camera);
}
// camera.position.set(0,0,0)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function cameraRotate() {
  var t = document.body.getBoundingClientRect().top;
  var Height = window.innerHeight
  var Width = window.innerWidth
  if (Height > 670 && Width > 500) {
    camera.position.x = 280 * Math.cos(t / 100) + 0;
    camera.position.z = 280 * Math.sin(t / 100) + 0;
  }
  else {
    camera.position.x = (280 * Math.cos(t / 100)) * 1.4;
    camera.position.z = (280 * Math.sin(t / 100)) * 1.4;
  }
}


window.addEventListener('resize', onWindowResize, false);

animate()