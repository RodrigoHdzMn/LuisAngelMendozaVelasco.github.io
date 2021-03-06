var torre1=[];

torre1.push(new THREE.Vector2(120,-50));
torre1.push(new THREE.Vector2(120,-30));
torre1.push(new THREE.Vector2(100,-30));
torre1.push(new THREE.Vector2(100,-10));
torre1.push(new THREE.Vector2(70,10));
torre1.push(new THREE.Vector2(70,100));
torre1.push(new THREE.Vector2(90,120));

var torre2=new THREE.Shape();

torre2.moveTo(-30,84.85);
torre2.lineTo(-30,57.43);
torre2.lineTo(-57.43,30);
torre2.lineTo(-84.85,30);
torre2.lineTo(-63.64,63.64);
torre2.lineTo(-30,84.85);

var torre2_1=new THREE.Shape();

torre2_1.moveTo(-30,-84.85);
torre2_1.lineTo(-30,-57.43);
torre2_1.lineTo(-57.43,-30);
torre2_1.lineTo(-84.85,-30);
torre2_1.lineTo(-63.64,-63.64);
torre2_1.lineTo(-30,-84.85);

var torre2_2=new THREE.Shape();

torre2_2.moveTo(30,-84.85);
torre2_2.lineTo(30,-57.43);
torre2_2.lineTo(57.43,-30);
torre2_2.lineTo(84.85,-30);
torre2_2.lineTo(63.64,-63.64);
torre2_2.lineTo(30,-84.85);

var torre2_3=new THREE.Shape();

torre2_3.moveTo(30,84.85);
torre2_3.lineTo(30,57.43);
torre2_3.lineTo(57.43,30);
torre2_3.lineTo(84.85,30);
torre2_3.lineTo(63.64,63.64);
torre2_3.lineTo(30,84.85);

var torre3 = new THREE.CylinderGeometry(90,90,5,32);

var forma1=new THREE.LatheGeometry(torre1);
var forma2= new THREE.ExtrudeGeometry(torre2,{amount:40});
var forma2_1= new THREE.ExtrudeGeometry(torre2_1,{amount:40});
var forma2_2= new THREE.ExtrudeGeometry(torre2_2,{amount:40});
var forma2_3= new THREE.ExtrudeGeometry(torre2_3,{amount:40});
var forma3=torre3;
forma2.rotateX(90*Math.PI/180)
forma2.translate(0,163,0);
forma2_1.rotateX(90*Math.PI/180)
forma2_1.translate(0,163,0);
forma2_2.rotateX(90*Math.PI/180)
forma2_2.translate(0,163,0);
forma2_3.rotateX(90*Math.PI/180)
forma2_3.translate(0,163,0);
forma3.translate(0,118,0);

var torre1Malla=new THREE.Mesh(forma1);
var torre2Malla=new THREE.Mesh(forma2);
var torre2_1Malla=new THREE.Mesh(forma2_1);
var torre2_2Malla=new THREE.Mesh(forma2_2);
var torre2_3Malla=new THREE.Mesh(forma2_3);
var torre3Malla=new THREE.Mesh(forma3);

var torreForma=new THREE.Geometry();

torreForma.merge(torre1Malla.geometry,torre1Malla.matrix);
torreForma.merge(torre2Malla.geometry,torre2Malla.matrix);
torreForma.merge(torre2_1Malla.geometry,torre2_1Malla.matrix);
torreForma.merge(torre2_2Malla.geometry,torre2_2Malla.matrix);
torreForma.merge(torre2_3Malla.geometry,torre2_3Malla.matrix);
torreForma.merge(torre3Malla.geometry,torre3Malla.matrix);

var material=new THREE.MeshBasicMaterial({color: 0x000000});
var torreNegraMalla=new THREE.Mesh(torreForma,material);

torreNegraMalla.rotateX(Math.PI/2);
torreNegraMalla.scale.set(0.05,0.05,0.05)
