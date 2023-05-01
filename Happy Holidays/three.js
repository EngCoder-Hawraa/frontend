

// const message = "Happy Holidays!";

// !function() {
//     "use strict";
//     let e, t, o, n, a, s, r, i, E, l, h, d, c, w, u = 1, m = "", T = [];
//     const p = new THREE.Clock();
//     let M, R, H;
//     const f = 1, g = new THREE.Layers();
//     g.set(f);
//     const y = {
//         exposure: 2,
//         bloomStrength: 2,
//         bloomThreshold: 0,
//         bloomRadius: 0
//     }, S = new THREE.MeshBasicMaterial({
//         color: "black"
//     }), P = {}, x = new THREE.Vector3(), b = new THREE.Matrix4();
//     let I = new THREE.Vector3();
//     const G = new THREE.Euler();
//     let B = new THREE.Quaternion();
//     const v = new THREE.Vector3(1, 1, 1), C = new THREE.Vector3(0, 0, 0);
//     new THREE.Matrix4(), new THREE.Vector3(0, 1, 0);
//     function z(e, o, n) {
//         let a, s = o.length, r = new THREE.InstancedMesh(i.geometry, i.material, s);
//         B.set(0, 0, 0, 0);
//         for (let t = 0; t < s; t++) x.set(o[t][0], o[t][1], o[t][2]), I = x, "ico" == n && (G.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI), 
//         B.setFromEuler(G)), 1 != e && v.set(e, e, e), b.compose(I, B, v), a = "ball" == n ? new THREE.Color().setHSL(THREE.MathUtils.randFloat(.25, .4), 1, .18) : "ico" == n ? new THREE.Color().setHSL(Math.random(), 1, .8) : "light" == n ? new THREE.Color().setHSL(Math.random(), 1, .5) : new THREE.Color().setHSL(Math.random(), 1, .7), 
//         r.setMatrixAt(t, b), r.setColorAt(t, a);
//         if ("light" == n) {
//             setInterval(function() {
//                 r.layers.toggle(f), U();
//             }, 1e3);
//         }
//         t.add(r);
//     }
//     function A(e) {
//         let t = this.attributes.position;
//         if (null != this.index) return;
//         let o = t.count / 3, n = [], a = new THREE.Triangle(), s = new THREE.Vector3(), r = new THREE.Vector3(), i = new THREE.Vector3();
//         for (let E = 0; E < o; E++) {
//             s.fromBufferAttribute(t, 3 * E + 0), r.fromBufferAttribute(t, 3 * E + 1), i.fromBufferAttribute(t, 3 * E + 2), 
//             a.set(s, r, i);
//             let o = new THREE.Vector3();
//             a.getMidpoint(o);
//             let l = s.distanceTo(r), h = Math.sqrt(3) / 2 * l * e, d = o.clone().normalize().setLength(h);
//             o.add(d), n.push(o.clone(), s.clone(), r.clone(), o.clone(), r.clone(), i.clone(), o.clone(), i.clone(), s.clone());
//         }
//         let E = new THREE.BufferGeometry().setFromPoints(n);
//         return E.computeVertexNormals(), E;
//     }
//     function L(e, t, o, n, s, i, E, d = !1) {
//         a = d ? new THREE.CylinderGeometry(e / 2, e / 2, t, 20, 1) : new THREE.BoxGeometry(e, t, o), 
//         (l = l.clone()).color.set(i);
//         let c = new THREE.Mesh(a, l);
//         return T = [], a = new THREE.BoxGeometry(e + s, t + s, n), T.push(a), d || (a = new THREE.BoxGeometry(e + s, n, o + s), 
//         T.push(a)), a = new THREE.BoxGeometry(n, t + s, o + s), T.push(a), a = THREE.BufferGeometryUtils.mergeBufferGeometries(T), 
//         (h = h.clone()).color.set(E), r = new THREE.Mesh(a, h), c.add(r), c;
//     }
//     function V(e, t, o, n) {
//         T = [];
//         let s = [], r = .5 * t, i = 2 * t;
//         (a = new THREE.CylinderGeometry(r, r, t, 15, 1, !0, 0, 1.18 * Math.PI)).rotateX(Math.PI / 2), 
//         a.translate(i, r, 0), s.push(a);
//         let E = new THREE.Shape();
//         E.moveTo(0, 0), E.lineTo(i, -t / 2), E.lineTo(i, t / 2), (a = new THREE.ShapeGeometry(E)).rotateX(Math.PI / 2), 
//         a.rotateZ(Math.PI / 6.35), s.push(a), (E = new THREE.Shape()).moveTo(0, 0), E.lineTo(i, -t / 2), 
//         E.lineTo(i, t / 2), (a = new THREE.ShapeGeometry(E)).rotateX(Math.PI / 2), s.push(a);
//         let l = THREE.BufferGeometryUtils.mergeBufferGeometries(s);
//         l.scale(1.3, 1.3, 1.3);
//         let d = 2 * Math.PI / o;
//         for (let e = 0; e < o; e++) T.push(l.clone().rotateY(d * e));
//         return a = new THREE.SphereGeometry(.7 * t, 6, 3), T.push(a), (a = THREE.BufferGeometryUtils.mergeBufferGeometries(T)).translate(0, e / 2 + .01, 0), 
//         (h = h.clone()).color.set(n), new THREE.Mesh(a, h);
//     }
//     function F() {
//         const t = window.innerWidth, n = window.innerHeight;
//         e.aspect = t / n, e.updateProjectionMatrix(), o.setSize(t, n), R.setSize(t, n), 
//         H.setSize(t, n), U();
//     }
//     function D(e) {
//         (e.isMesh || e.isInstancedMesh) && !1 === g.test(e.layers) && (P[e.uuid] = e.material, 
//         e.material = S);
//     }
//     function k(e) {
//         P[e.uuid] && (e.material = P[e.uuid], delete P[e.uuid]);
//     }
//     function j() {
//         requestAnimationFrame(j), n.update(), M && M.moveAlongCurve(.002), U();
//     }
//     function U() {
//         const e = 5e-4 * Date.now();
//         p.getDelta();
//         d.position.x = 17 * -Math.sin(1.4 * e), d.position.y = 3 * Math.cos(1 * e) + 1, 
//         d.position.z = 17 * -Math.cos(1.4 * e), c.position.x = 17 * Math.sin(1.4 * e), c.position.y = 3 * Math.sin(1 * e) + 1, 
//         c.position.z = 17 * Math.cos(1.4 * e), w.position.x = 17 * -Math.sin(1.2 * e), w.position.y = 3 * Math.cos(.6 * e) + 1, 
//         w.position.z = 17 * Math.cos(1.2 * e), t.traverse(D), R.render(), t.traverse(k), 
//         H.render();
//     }
//     !function() {
//         const T = document.createElement("div");
//         document.body.appendChild(T), (t = new THREE.Scene()).background = 0, (o = new THREE.WebGLRenderer({
//             antialias: !0
//         })).setPixelRatio(window.devicePixelRatio), o.setSize(window.innerWidth, window.innerHeight), 
//         o.outputEncoding = THREE.sRGBEncoding, o.shadowMap.enabled = !0, o.shadowMap.type = THREE.PCFSoftShadowMap, 
//         T.appendChild(o.domElement), new THREE.TextureLoader().load("https://happy358.github.io/Images/HDR/leadenhall_market_1k_s.jpg", function(e) {
//             e.mapping = THREE.EquirectangularReflectionMapping, t.environment = e;
//         }), (e = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .01, 500)).position.set(0, .8, 25), 
//         e.lookAt(0, 0, 0);
//         const p = new THREE.RenderPass(t, e), f = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, .4, .85);
//         f.threshold = y.bloomThreshold, f.strength = y.bloomStrength, f.radius = y.bloomRadius, 
//         (R = new THREE.EffectComposer(o)).renderToScreen = !1, R.addPass(p), R.addPass(f);
//         const g = new THREE.ShaderPass(new THREE.ShaderMaterial({
//             uniforms: {
//                 baseTexture: {
//                     value: null
//                 },
//                 bloomTexture: {
//                     value: R.renderTarget2.texture
//                 }
//             },
//             vertexShader: document.getElementById("vertexshader").textContent,
//             fragmentShader: document.getElementById("fragmentshader").textContent,
//             defines: {}
//         }), "baseTexture");
//         g.needsSwap = !0, (H = new THREE.EffectComposer(o)).addPass(p), H.addPass(g);
//         (d = new THREE.PointLight(16766720, .3, 30)).position.set(17 * -Math.sin(0), 3 * Math.cos(0) + 1, 17 * -Math.cos(0)), 
//         t.add(d), (c = new THREE.PointLight(3716235, .3, 30)).position.set(17 * Math.sin(0), 3 * Math.sin(0) + 1, 17 * Math.cos(0)), 
//         t.add(c), (w = new THREE.PointLight(16170940, .3, 30)).position.set(17 * -Math.sin(0), 3 * Math.cos(0) + 1, 17 * Math.cos(0)), 
//         t.add(w), a = new THREE.CylinderGeometry(0, 4, 10, 6, 1, !0);
//         let S = [];
//         r = new THREE.Mesh(a, new THREE.MeshBasicMaterial());
//         const P = new THREE.MeshSurfaceSampler(r).build();
//         for (let e = 0; e < 1030; e++) P.sample(x, C), S.push([ x.x, x.y, x.z ]);
//         let b = 920, I = [ ...Array(b) ].map(() => S.splice(Math.floor(Math.random() * S.length), 1)[0]);
//         b = 60;
//         let G = [ ...Array(b) ].map(() => S.splice(Math.floor(Math.random() * S.length), 1)[0]);
//         b = 15;
//         let B = [ ...Array(b) ].map(() => S.splice(Math.floor(Math.random() * S.length), 1)[0]), v = new THREE.MeshStandardMaterial({
//             metalness: 1,
//             roughness: 0
//         });
//         E = .08, a = new THREE.SphereGeometry(E, 10, 10), (s = v.clone()).metalness = .1, 
//         s.roughness = .5, i = new THREE.Mesh(a, s), z(u = 1, I, "ball"), E = .28, a = new THREE.SphereGeometry(E, 20, 20), 
//         s = v.clone(), i = new THREE.Mesh(a, s), z(u = 1, S, "sphere"), E = .15, u = 3, 
//         THREE.BufferGeometry.prototype.tripleFace = A, a = new THREE.IcosahedronGeometry(E, 0).tripleFace(u), 
//         s = v.clone(), i = new THREE.Mesh(a, s), z(u = 1, B, "ico"), E = .08, a = new THREE.SphereGeometry(E, 10, 10), 
//         i = new THREE.Mesh(a, new THREE.MeshBasicMaterial()), z(u = 1, G, "light");
//         a = function(e, t, o) {
//             let n = [];
//             for (let a = 0; a < 2 * e; a++) {
//                 let s, r;
//                 n.push(0, 0, -o / 2), a % 2 == 0 ? (s = t, r = 1) : (s = 1, r = t);
//                 let i = (a + 1) / e * Math.PI;
//                 n.push(Math.cos(i) * s, Math.sin(i) * s, 0), i = a / e * Math.PI, n.push(Math.cos(i) * r, Math.sin(i) * r, 0), 
//                 n.push(0, 0, o / 2), i = a / e * Math.PI, n.push(Math.cos(i) * r, Math.sin(i) * r, 0), 
//                 i = (a + 1) / e * Math.PI, n.push(Math.cos(i) * s, Math.sin(i) * s, 0);
//             }
//             return n = new Float32Array(n), (a = new THREE.BufferGeometry()).setAttribute("position", new THREE.BufferAttribute(n, 3)), 
//             a.computeVertexNormals(), a;
//         }(5, 2, 1.78), (s = v.clone()).color.set("yellow");
//         const D = new THREE.Mesh(a, s);
//         D.position.y = 5.3, D.rotation.z = -Math.PI / 5 / 2, u = .35, D.scale.set(u, u, u), 
//         t.add(D), l = new THREE.MeshStandardMaterial({
//             color: 16711680,
//             metalness: .1,
//             roughness: .5
//         }), h = new THREE.MeshStandardMaterial({
//             color: 16766720,
//             metalness: .8,
//             roughness: .3,
//             side: THREE.DoubleSide
//         });
//         let k, U, W, X, _, q, N, O, Y, Q = !1;
//         (k = L(W = 2.4, X = 1, _ = 2.4, q = .2, .01, N = 4286945, O = 16777215, Q = !0)).position.set(6, -5.2, 0), 
//         k.castShadow = !0, t.add(k), Y = 5, k = L(W = 1.7, X = 1.3, _ = 1.7, q = .2, .01, N = 16711680, O = 16766720), 
//         (U = V(X, q, Y, O)).rotation.set(0, -Math.PI / 10, 0), k.add(U), k.position.set(5.7, X / 2 - 4.7, 0), 
//         k.rotation.set(0, Math.PI / 3, 0), k.castShadow = !0, t.add(k), (k = L(W = 1.8, X = 1.5, _ = 2, q = .2, .01, N = 43368, O = 16777215)).position.set(-5, -5, 2), 
//         k.castShadow = !0, t.add(k), Y = 7, k = L(W = 2, X = 1, _ = 1, q = .2, .01, N = 16747520, O = 16766720), 
//         (U = V(X, q, Y, O)).rotation.set(0, -Math.PI / 10, 0), U.scale.set(.7, 1, .7), U.castShadow = !0, 
//         k.add(U), k.position.set(-5.3, X / 2 - 4.25, 2), k.rotation.set(0, -Math.PI / 4, 0), 
//         k.castShadow = !0, t.add(k), Y = 5, k = L(W = 2, X = 1.5, _ = 2, q = .2, .01, N = 16738740, O = 14423100, Q = !0), 
//         (U = V(X, q, Y, O)).rotation.set(0, -Math.PI / 5, 0), U.castShadow = !0, k.add(U), 
//         k.position.set(0, -5, 5.5), k.rotation.set(0, -Math.PI / 4, 0), k.castShadow = !0, 
//         t.add(k);
//         m = 16777215;
//         const Z = new THREE.PointLight(m, 1, 40, 3.8);
//         Z.castShadow = !0, t.add(Z), a = new THREE.BoxGeometry(50, 50, 50), s = new THREE.MeshPhongMaterial({
//             color: 16758465,
//             shininess: 10,
//             specular: 1118481,
//             side: THREE.BackSide
//         }), (r = new THREE.Mesh(a, s)).position.y = 19.2, r.receiveShadow = !0, t.add(r);
//         const J = [], K = [ {
//             x: 2.8,
//             y: -2.8,
//             z: -2.8
//         }, {
//             x: 2.8,
//             y: -2.8,
//             z: 2.8
//         }, {
//             x: -2.8,
//             y: -2.8,
//             z: 2.8
//         }, {
//             x: -2.8,
//             y: -2.8,
//             z: -2.8
//         } ];
//         for (const e of K) {
//             const t = new THREE.Object3D();
//             t.position.copy(e), J.push(t);
//         }
//         const $ = new THREE.CatmullRomCurve3(J.map(e => e.position));
//         $.curveType = "catmullrom", $.tension = .8, $.closed = !0, new THREE.FontLoader().load("https://cdn.jsdelivr.net/npm/three@0.145.0/examples/fonts/helvetiker_bold.typeface.json", function(e) {
//             (a = new THREE.TextGeometry(message, {
//                 font: e,
//                 size: 1,
//                 height: .1,
//                 curveSegments: 12
//             })).rotateX(Math.PI), a.rotateY(-Math.PI), s = new THREE.MeshStandardMaterial({
//                 color: 16766720
//             });
//             const o = new THREE.Mesh(a, s);
//             (M = new THREE.Flow(o)).updateCurve(0, $), t.add(M.object3D);
//         }), (n = new THREE.OrbitControls(e, o.domElement)).autoRotate = !0, n.autoRotateSpeed = 2, 
//         n.enableDamping = !0, n.enablePan = !1, n.minDistance = 3, n.maxDistance = 28, n.minPolarAngle = 0, 
//         n.maxPolarAngle = Math.PI / 2, n.target.set(0, 0, 0), n.update(), j(), window.addEventListener("resize", F);
//     }();
// }();

