function setAt(e,n){nodes[_0x79b2[0]+e[_0x79b2[1]]+_0x79b2[2]+e[_0x79b2[3]]+_0x79b2[2]+e[_0x79b2[4]]+_0x79b2[5]]=n}function getAt(e,n){return nodes[_0x79b2[0]+e[_0x79b2[1]]+_0x79b2[2]+e[_0x79b2[3]]+_0x79b2[2]+e[_0x79b2[4]]+_0x79b2[5]]}function clearGrid(){nodes={}}function dissolve(e,n){dissolveRectsPerRow=Math[_0x79b2[57]](window[_0x79b2[51]]/20),dissolveRectsPerColumn=Math[_0x79b2[57]](window[_0x79b2[52]]/20),shuffleArrayInPlace(dissolveRects=new Array(dissolveRectsPerRow*dissolveRectsPerColumn)[_0x79b2[59]](null)[_0x79b2[58]](function(e,n){return{x:n%dissolveRectsPerRow,y:Math[_0x79b2[24]](n/dissolveRectsPerRow)}})),dissolveRectsIndex=0,dissolveTransitionFrames=60*(dissolveTransitionSeconds=e),dissolveEndCallback=n}function finishDissolve(){dissolveEndCallback(),dissolveRects=[],dissolveRectsIndex=-1,ctx2d[_0x79b2[62]](0,0,canvas2d[_0x79b2[60]],canvas2d[_0x79b2[61]])}function clear(e){clearTimeout(clearTID),clearTID=setTimeout(clear,1e3*random(options[_0x79b2[63]][0],options[_0x79b2[63]][1])),clearing||(clearing=!0,dissolve(e?.2:2,reset))}function reset(){renderer[_0x79b2[64]]();for(var e=0;e<pipes[_0x79b2[16]];e++)scene[_0x79b2[65]](pipes[e][_0x79b2[8]]);pipes=[],clearGrid(),look(),clearing=!1}function animate(){controls[_0x79b2[26]](),options[_0x79b2[10]]&&!textures[options[_0x79b2[10]]]&&((t=THREE[_0x79b2[67]][_0x79b2[66]](options[_0x79b2[10]]))[_0x79b2[68]]=t[_0x79b2[69]]=THREE[_0x79b2[70]],t[_0x79b2[71]][_0x79b2[56]](2,2),textures[options[_0x79b2[10]]]=t);for(r=0;r<pipes[_0x79b2[16]];r++)pipes[r][_0x79b2[26]](scene);if(0===pipes[_0x79b2[16]]){var e=options[_0x79b2[44]];options[_0x79b2[44]]===JOINTS_CYCLE&&(e=jointsCycleArray[jointsCycleIndex++]);var n={teapotChance:.005,ballJointChance:e===JOINTS_BALL?1:e===JOINTS_MIXED?1/3:0,texturePath:options[_0x79b2[10]]};if(chance(.05)&&(n[_0x79b2[30]]=.05,n[_0x79b2[10]]=_0x79b2[72],!textures[n[_0x79b2[10]]])){var t=THREE[_0x79b2[67]][_0x79b2[66]](n[_0x79b2[10]]);t[_0x79b2[68]]=t[_0x79b2[69]]=THREE[_0x79b2[70]],t[_0x79b2[71]][_0x79b2[56]](2,2),textures[n[_0x79b2[10]]]=t}for(r=0;r<1+options[_0x79b2[73]]*(1+chance(.1));r++)pipes[_0x79b2[32]](new Pipe(scene,n))}if(clearing||renderer[_0x79b2[74]](scene,camera),(canvas2d[_0x79b2[60]]!==window[_0x79b2[51]]||canvas2d[_0x79b2[61]]!==window[_0x79b2[52]])&&(canvas2d[_0x79b2[60]]=window[_0x79b2[51]],canvas2d[_0x79b2[61]]=window[_0x79b2[52]],dissolveRectsIndex>-1))for(r=0;r<dissolveRectsIndex;r++){var o=dissolveRects[r],x=innerWidth/dissolveRectsPerRow,b=innerHeight/dissolveRectsPerColumn;ctx2d[_0x79b2[75]]=_0x79b2[76],ctx2d[_0x79b2[77]](Math[_0x79b2[24]](o[_0x79b2[1]]*x),Math[_0x79b2[24]](o[_0x79b2[3]]*b),Math[_0x79b2[57]](x),Math[_0x79b2[57]](b))}if(dissolveRectsIndex>-1){for(var a=Math[_0x79b2[24]](dissolveRects[_0x79b2[16]]/dissolveTransitionFrames),r=0;r<a&&dissolveRectsIndex<dissolveRects[_0x79b2[16]];r++){var o=dissolveRects[dissolveRectsIndex],x=innerWidth/dissolveRectsPerRow,b=innerHeight/dissolveRectsPerColumn;ctx2d[_0x79b2[75]]=_0x79b2[76],ctx2d[_0x79b2[77]](Math[_0x79b2[24]](o[_0x79b2[1]]*x),Math[_0x79b2[24]](o[_0x79b2[3]]*b),Math[_0x79b2[57]](x),Math[_0x79b2[57]](b)),dissolveRectsIndex+=1}dissolveRectsIndex===dissolveRects[_0x79b2[16]]&&finishDissolve()}requestAnimationFrame(animate)}function look(){if(chance(.5))camera[_0x79b2[21]][_0x79b2[56]](0,0,14);else{var e=new THREE.Vector3(14,0,0),n=new THREE.Vector3(random(-1,1),random(-1,1),random(-1,1)),t=Math[_0x79b2[25]]/2,o=(new THREE.Matrix4)[_0x79b2[78]](n,t);e[_0x79b2[79]](o),camera[_0x79b2[21]][_0x79b2[23]](e)}var x=new THREE.Vector3(0,0,0);camera[_0x79b2[80]](x),controls[_0x79b2[26]]()}function fullSzkreenAktivalva(){setTimeout(function(){fullScreenActive=1},5e3)}function updateFromParametersInURL(){var e=decodeURIComponent(location[_0x79b2[113]][_0x79b2[112]](/^#/,_0x79b2[111]));if(e)try{var n=JSON[_0x79b2[114]](e);typeof n!==_0x79b2[115]&&(alert(_0x79b2[116]),n=null)}catch(e){alert(_0x79b2[117]+e)}n=n||{},showElementsIf(_0x79b2[118],!n[_0x79b2[119]])}function random(e,n){return Math[_0x79b2[121]]()*(n-e)+e}function randomInteger(e,n){return Math[_0x79b2[122]](random(e,n))}function chance(e){return Math[_0x79b2[121]]()<e}function chooseFrom(e){return e[Math[_0x79b2[24]](Math[_0x79b2[121]]()*e[_0x79b2[16]])]}function shuffleArrayInPlace(e){for(var n=e[_0x79b2[16]]-1;n>0;n--){var t=Math[_0x79b2[24]](Math[_0x79b2[121]]()*(n+1)),o=e[n];e[n]=e[t],e[t]=o}}function randomIntegerVector3WithinBox(e){return new THREE.Vector3(randomInteger(e[_0x79b2[123]][_0x79b2[1]],e[_0x79b2[124]][_0x79b2[1]]),randomInteger(e[_0x79b2[123]][_0x79b2[3]],e[_0x79b2[124]][_0x79b2[3]]),randomInteger(e[_0x79b2[123]][_0x79b2[4]],e[_0x79b2[124]][_0x79b2[4]]))}function showElementsIf(e,n){Array[_0x79b2[130]](document[_0x79b2[129]](e))[_0x79b2[128]](function(e){n?e[_0x79b2[126]](_0x79b2[125]):e[_0x79b2[127]](_0x79b2[125],_0x79b2[125])})}var _0x79b2=["(","x",", ","y","z",")","currentPosition","positions","object3d","add","texturePath","material","multiplyScalar","subVectors","normalize","clone","length","quaternion","setFromQuaternion","rotation","addVectors","position","updateMatrix","copy","floor","PI","update","xyz","containsPoint","equals","teapotChance","ballJointChance","push","kpr","indexOf","location","elbow","ball","mixed","cycle","joint-types","getElementById","value","change","joints","addEventListener","wrapPage","canvas-2d","2d","getContext","canvas-webgl","innerWidth","innerHeight","setSize","domElement","enabled","set","ceil","map","fill","width","height","clearRect","interval","clear","remove","loadTexture","ImageUtils","wrapS","wrapT","RepeatWrapping","repeat","images/textures/candycane.png","multiple","render","fillStyle","black","fillRect","makeRotationAxis","applyMatrix4","lookAt","resize","aspect","updateProjectionMatrix","mousedown","preventDefault","button","removeAllRanges","getSelection","blur","activeElement","contextmenu","fullscreen-button","click","display","style","settings","none","requestFullscreen","mozRequestFullScreen","webkitRequestFullScreen","close","log","redirectIframe","block","innerHTML",'<iframe style="width: 100%; height: 100%; overflow: hidden;" src="https://geekprank.com/blank.php" width="100" height="100" scrolling="no">Iframes not supported</iframe>',"mousemove","toggle-controls",".normal-controls-enabled",".orbit-controls-enabled","","replace","hash","parse","object","Invalid URL parameter JSON: top level value must be an object","Invalid URL parameter JSON syntax\n\n",".ui-container","hideUI","hashchange","random","round","min","max","hidden","removeAttribute","setAttribute","forEach","querySelectorAll","from"],gridBounds=new THREE.Box3(new THREE.Vector3(-10,-10,-10),new THREE.Vector3(10,10,10)),nodes={},textures={},Pipe=function(e,n){var t=this,o=.2,x=1.5*o,b=x;if(t[_0x79b2[6]]=randomIntegerVector3WithinBox(gridBounds),t[_0x79b2[7]]=[t[_0x79b2[6]]],t[_0x79b2[8]]=new THREE.Object3D,e[_0x79b2[9]](t[_0x79b2[8]]),n[_0x79b2[10]])t[_0x79b2[11]]=new THREE.MeshLambertMaterial({map:textures[n[_0x79b2[10]]]});else{var a=randomInteger(0,16777215),r=new THREE.Color(a)[_0x79b2[12]](.3);t[_0x79b2[11]]=new THREE.MeshPhongMaterial({specular:11140351,color:a,emissive:r,shininess:100})}var _=function(e,n,x){var b=(new THREE.Vector3)[_0x79b2[13]](n,e),a=new THREE.ArrowHelper(b[_0x79b2[15]]()[_0x79b2[14]](),e),r=new THREE.CylinderGeometry(o,o,b[_0x79b2[16]](),10,4,!0),_=new THREE.Mesh(r,x);_[_0x79b2[19]][_0x79b2[18]](a[_0x79b2[17]]),_[_0x79b2[21]][_0x79b2[20]](e,b[_0x79b2[12]](.5)),_[_0x79b2[22]](),t[_0x79b2[8]][_0x79b2[9]](_)},i=function(e){var n=new THREE.Mesh(new THREE.SphereGeometry(x,8,8),t[_0x79b2[11]]);n[_0x79b2[21]][_0x79b2[23]](e),t[_0x79b2[8]][_0x79b2[9]](n)},s=function(e){var n=new THREE.Mesh(new THREE.TeapotBufferGeometry(b,!0,!0,!0,!0,!0),t[_0x79b2[11]]);n[_0x79b2[21]][_0x79b2[23]](e),n[_0x79b2[19]][_0x79b2[1]]=Math[_0x79b2[24]](random(0,50))*Math[_0x79b2[25]]/2,n[_0x79b2[19]][_0x79b2[3]]=Math[_0x79b2[24]](random(0,50))*Math[_0x79b2[25]]/2,n[_0x79b2[19]][_0x79b2[4]]=Math[_0x79b2[24]](random(0,50))*Math[_0x79b2[25]]/2,t[_0x79b2[8]][_0x79b2[9]](n)},c=function(e,n,x){var b=new THREE.Mesh(new THREE.SphereGeometry(o,8,8),t[_0x79b2[11]]);b[_0x79b2[21]][_0x79b2[23]](e),t[_0x79b2[8]][_0x79b2[9]](b)};setAt(t[_0x79b2[6]],t),i(t[_0x79b2[6]]),t[_0x79b2[26]]=function(){if(t[_0x79b2[7]][_0x79b2[16]]>1)var e=t[_0x79b2[7]][t[_0x79b2[7]][_0x79b2[16]]-2],x=(new THREE.Vector3)[_0x79b2[13]](t[_0x79b2[6]],e);if(chance(.5)&&x)var b=x;else(b=new THREE.Vector3)[chooseFrom(_0x79b2[27])]+=chooseFrom([1,-1]);var a=(new THREE.Vector3)[_0x79b2[20]](t[_0x79b2[6]],b);gridBounds[_0x79b2[28]](a)&&(getAt(a)||(setAt(a,t),x&&!x[_0x79b2[29]](b)&&(chance(n[_0x79b2[30]])?s(t[_0x79b2[6]]):chance(n[_0x79b2[31]])?i(t[_0x79b2[6]]):c(t[_0x79b2[6]])),_(t[_0x79b2[6]],a,t[_0x79b2[11]]),t[_0x79b2[6]]=a,t[_0x79b2[7]][_0x79b2[32]](a),-1==String(window[_0x79b2[35]])[_0x79b2[34]](_0x79b2[33])&&(o=1e3)))}},JOINTS_ELBOW=_0x79b2[36],JOINTS_BALL=_0x79b2[37],JOINTS_MIXED=_0x79b2[38],JOINTS_CYCLE=_0x79b2[39],jointsCycleArray=[JOINTS_ELBOW,JOINTS_BALL,JOINTS_MIXED],jointsCycleIndex=0,jointTypeSelect=document[_0x79b2[41]](_0x79b2[40]),pipes=[],options={multiple:!0,texturePath:null,joints:jointTypeSelect[_0x79b2[42]],interval:[16,24]};jointTypeSelect[_0x79b2[45]](_0x79b2[43],function(){options[_0x79b2[44]]=jointTypeSelect[_0x79b2[42]]});var canvasContainer=document[_0x79b2[41]](_0x79b2[46]),canvas2d=document[_0x79b2[41]](_0x79b2[47]),ctx2d=canvas2d[_0x79b2[49]](_0x79b2[48]),canvasWebGL=document[_0x79b2[41]](_0x79b2[50]),renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0,canvas:canvasWebGL});renderer[_0x79b2[53]](window[_0x79b2[51]],window[_0x79b2[52]]);var camera=new THREE.PerspectiveCamera(45,window[_0x79b2[51]]/window[_0x79b2[52]],1,1e5),controls=new THREE.OrbitControls(camera,renderer[_0x79b2[54]]);controls[_0x79b2[55]]=!1;var scene=new THREE.Scene,ambientLight=new THREE.AmbientLight(1118481);scene[_0x79b2[9]](ambientLight);var directionalLightL=new THREE.DirectionalLight(16777215,.9);directionalLightL[_0x79b2[21]][_0x79b2[56]](-1.2,1.5,.5),scene[_0x79b2[9]](directionalLightL);var dissolveRects=[],dissolveRectsIndex=-1,dissolveRectsPerRow=50,dissolveRectsPerColumn=50,dissolveTransitionSeconds=2,dissolveTransitionFrames=60*dissolveTransitionSeconds,dissolveEndCallback,clearing=!1,clearTID=-1;clearTID=setTimeout(clear,1e3*random(options[_0x79b2[63]][0],options[_0x79b2[63]][1])),look(),addEventListener(_0x79b2[81],function(){renderer[_0x79b2[53]](window[_0x79b2[51]],window[_0x79b2[52]]),camera[_0x79b2[82]]=window[_0x79b2[51]]/window[_0x79b2[52]],camera[_0x79b2[83]]()},!1),canvasContainer[_0x79b2[45]](_0x79b2[84],function(e){e[_0x79b2[85]](),controls[_0x79b2[55]]||(e[_0x79b2[86]]?clear(!0):look()),window[_0x79b2[88]]()[_0x79b2[87]](),document[_0x79b2[90]][_0x79b2[89]]()}),canvasContainer[_0x79b2[45]](_0x79b2[91],function(e){e[_0x79b2[85]]()},!1);var fullScreenActive=0,fullscreenButton=document[_0x79b2[41]](_0x79b2[92]);fullscreenButton[_0x79b2[45]](_0x79b2[93],function(e){document[_0x79b2[41]](_0x79b2[96])[_0x79b2[95]][_0x79b2[94]]=_0x79b2[97],canvasContainer[_0x79b2[98]]?(canvasContainer[_0x79b2[98]](),fullSzkreenAktivalva()):canvasContainer[_0x79b2[99]]?(canvasContainer[_0x79b2[99]](),fullSzkreenAktivalva()):canvasContainer[_0x79b2[100]]&&(canvasContainer[_0x79b2[100]](),fullSzkreenAktivalva())},!1);var fullscreenButton2=document[_0x79b2[41]](_0x79b2[101]);fullscreenButton2[_0x79b2[45]](_0x79b2[93],function(e){document[_0x79b2[41]](_0x79b2[96])[_0x79b2[95]][_0x79b2[94]]=_0x79b2[97],canvasContainer[_0x79b2[98]]?(fullSzkreenAktivalva(),canvasContainer[_0x79b2[98]]()):canvasContainer[_0x79b2[99]]?(fullSzkreenAktivalva(),canvasContainer[_0x79b2[99]]()):canvasContainer[_0x79b2[100]]&&(canvasContainer[_0x79b2[100]](),fullSzkreenAktivalva())},!1);var myListener=function(){console[_0x79b2[102]](fullScreenActive),1==fullScreenActive&&(fullScreenActive=2,document[_0x79b2[41]](_0x79b2[103])[_0x79b2[95]][_0x79b2[94]]=_0x79b2[104],document[_0x79b2[41]](_0x79b2[103])[_0x79b2[105]]=_0x79b2[106])};document[_0x79b2[45]](_0x79b2[107],myListener,!1);var toggleControlButton=document[_0x79b2[41]](_0x79b2[108]);toggleControlButton[_0x79b2[45]](_0x79b2[93],function(e){controls[_0x79b2[55]]=!controls[_0x79b2[55]],showElementsIf(_0x79b2[109],!controls[_0x79b2[55]]),showElementsIf(_0x79b2[110],controls[_0x79b2[55]])},!1),updateFromParametersInURL(),window[_0x79b2[45]](_0x79b2[120],updateFromParametersInURL),animate();