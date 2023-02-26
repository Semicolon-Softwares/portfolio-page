const canvas = document.getElementById('background_element');
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

var onRenderFcts= [];
const scene = new THREE.Scene();
var canvas_width = $("#background_element").innerWidth();
var canvas_height = $("#background_element").innerWidth();
const camera = new THREE.PerspectiveCamera( 75, canvas_width/ canvas_height, 0.1, 1000 );

camera.position.z = 3;

//////////////////////////////////////////////////////////////////////////////////
//		add a text								//
//////////////////////////////////////////////////////////////////////////////////

var mesh	= new THREEx.Text(';)')
mesh.scale.multiplyScalar(2.5);
mesh.position.y	= -0.9
scene.add(mesh)
// var mesh	= new THREEx.Text('semicolon_softwares')
// mesh.scale.multiplyScalar(1/2)
// scene.add(mesh)
// var mesh	= new THREEx.Text('Fun !')
// mesh.scale.multiplyScalar(1/2)
// mesh.position.y	= -0.6
// scene.add(mesh)
    
//////////////////////////////////////////////////////////////////////////////////
//		Camera Controls							//
//////////////////////////////////////////////////////////////////////////////////
var mouse	= {x : 0, y : 0}
document.addEventListener('mousemove', function(event){
    mouse.x	= (event.clientX / window.innerWidth ) - 0.5
    mouse.y	= (event.clientY / window.innerHeight) - 0.5
}, false)
onRenderFcts.push(function(delta, now){
    camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3)
    camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3)
    camera.lookAt( scene.position )
})


//////////////////////////////////////////////////////////////////////////////////
//		render the scene						//
//////////////////////////////////////////////////////////////////////////////////
onRenderFcts.push(function(){
    renderer.render( scene, camera );		
})

//////////////////////////////////////////////////////////////////////////////////
//		loop runner							//
//////////////////////////////////////////////////////////////////////////////////
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){
    // keep looping
    requestAnimationFrame( animate );
    // measure time
    lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
    var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec	= nowMsec
    // call each update function
    onRenderFcts.forEach(function(onRenderFct){
        onRenderFct(deltaMsec/1000, nowMsec/1000)
    })
})