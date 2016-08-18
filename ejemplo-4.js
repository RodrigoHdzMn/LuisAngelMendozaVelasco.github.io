var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();
var renderizador=new THREE.WebGLRenderer();
camara.position.z=5;
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
var forma=new THREE.BoxGeometry(1,1,1);
var material=new THREE.MeshNormalMaterial();
var cubo=new THREE.Mesh(forma,material);
cubo.rotateX(-Math.PI/4);
cubo.rotateY(Math.PI/4);
