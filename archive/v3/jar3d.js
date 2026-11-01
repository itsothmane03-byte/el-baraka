/*
 * The jar in 3D, for the pitch page.
 * The label artwork from the page (rendered flat by tools/textures.mjs) is wrapped on a glass
 * jar; for honey, the seal sits on the lid and its strip runs over the rim onto the shoulder.
 * Loaded only when the section comes into view: three.js weighs 1.3 MB.
 *
 *   const jar = await (await import('./jar3d.js')).mount(stageElement, items);
 *   jar.show(id) · jar.view('three' | 'front' | 'back' | 'top' | 'shelf') · jar.lid('gold' | 'black')
 *
 * The jar is a 500 g working shape (Ø 76 × 111 mm), not a measured one.
 */
import * as THREE from './vendor/three.module.js';
import { RoomEnvironment } from './vendor/RoomEnvironment.js';

const LID = { gold: '#ad9256', black: '#202724', green: '#1f4a2e' };
const SEAL_ANGLE = 0.77;       // the strip sits beside the front face, not across it
const VIEW_ANGLE = { three: 25, front: 0, back: 180, top: 0, shelf: 0 };

export async function mount(stage, items) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.domElement.style.touchAction = 'pan-y';
  stage.append(renderer.domElement);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.04).texture;
  room.dispose();
  scene.add(new THREE.HemisphereLight('#fff6e5', '#b9b19c', 0.65));
  const key = new THREE.DirectionalLight('#fff8eb', 1.8);
  key.position.set(-130, 240, 150);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  Object.assign(key.shadow.camera, { left: -400, right: 400, top: 240, bottom: -240, near: 1, far: 650 });
  key.shadow.normalBias = 0.5;
  key.shadow.radius = 4;
  scene.add(key);
  const rim = new THREE.DirectionalLight('#ffffff', 0.8);
  rim.position.set(150, 120, -120);
  scene.add(rim);
  // the floor only catches shadows, so the jar sits on the page's own cream
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), new THREE.ShadowMaterial({ opacity: 0.16 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.8;
  floor.receiveShadow = true;
  scene.add(floor);

  const camera = new THREE.PerspectiveCamera(34, 1, 1, 2400);
  const models = new THREE.Group();
  scene.add(models);
  const loader = new THREE.TextureLoader();
  const cache = new Map();
  const anisotropy = renderer.capabilities.getMaxAnisotropy();
  const tex = (url) => {
    if (!cache.has(url)) cache.set(url, loader.loadAsync(url).then((t) => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = anisotropy; return t; }));
    return cache.get(url);
  };
  const state = { id: items[0].id, view: 'three', angle: VIEW_ANGLE.three, lid: 'gold' };
  const byId = Object.fromEntries(items.map((i) => [i.id, i]));
  const jars = [];
  const lidMaterials = [];

  const lathe = (profile, material) => new THREE.Mesh(new THREE.LatheGeometry(profile.map((p) => new THREE.Vector2(p[0], p[1])), 128), material);

  // a strip of paper that follows a path (radius, height) around the jar at a given angle
  function ribbon(points, width, angle) {
    const pos = [], uv = [], idx = [], dist = [0], across = 10;
    for (let i = 1; i < points.length; i++) dist[i] = dist[i - 1] + Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    const total = dist[dist.length - 1];
    points.forEach(([r, y], row) => {
      for (let i = 0; i <= across; i++) {
        const a = angle + (i / across - 0.5) * width / r;
        pos.push(r * Math.sin(a), y, r * Math.cos(a));
        uv.push(i / across, 1 - dist[row] / total);
        if (row < points.length - 1 && i < across) { const p = row * (across + 1) + i, q = p + across + 1; idx.push(p, q, p + 1, q, q + 1, p + 1); }
      }
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }
  // the seal strip: from the disc edge over the rim and down the shoulder, its printed length (48 mm) unstretched
  function stripPath(length) {
    const route = [[17, 110.86], [22, 110.86], [28, 110.86], [32, 110.7], [34.35, 109], [34.45, 105], [34.45, 100], [34.45, 98], [33.6, 96], [34.3, 92], [36.8, 87], [38.2, 83], [38.35, 78], [38.35, 72]];
    const path = [route[0]];
    let left = length;
    for (let i = 1; i < route.length && left > 0; i++) {
      const a = route[i - 1], b = route[i], d = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (d <= left) { path.push(b); left -= d; } else { const t = left / d; path.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); left = 0; }
    }
    return path;
  }

  async function makeJar(item, x = 0) {
    const [labelMap, discMap, tailMap] = await Promise.all([tex(item.label), item.disc ? tex(item.disc) : null, item.tail ? tex(item.tail) : null]);
    const g = new THREE.Group();
    g.position.x = x;
    const glass = new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0.04, transmission: 1, thickness: 1.4, ior: 1.5, attenuationColor: '#ece8d5', attenuationDistance: 180, envMapIntensity: 0.65, clearcoat: 0.3, clearcoatRoughness: 0.08, side: THREE.DoubleSide });
    const body = lathe([[0, 0], [30, 0], [34, 1.1], [36.6, 3.5], [37.7, 7], [38, 12], [38, 78], [37.7, 83], [36.2, 88], [33.3, 93], [32.7, 96], [32.7, 103], [31, 104]], glass);
    body.renderOrder = 2;
    g.add(body);
    const fill = item.kind === 'honey'
      ? new THREE.MeshPhysicalMaterial({ color: item.color, roughness: 0.28, ior: 1.47, envMapIntensity: 0.25, clearcoat: 0.15 })
      : new THREE.MeshStandardMaterial({ color: item.color, roughness: 0.9 });
    const contents = lathe([[0, 4], [31, 4], [34.5, 5], [36.1, 9], [36.2, 16], [36.2, 77], [35.8, 82], [34.4, 87], [31, 92], [0, 92]], fill);
    contents.castShadow = true;
    g.add(contents);
    const metal = new THREE.MeshStandardMaterial({ color: LID[item.kind === 'house' ? 'green' : state.lid], metalness: 0.83, roughness: 0.33, envMapIntensity: 1.2 });
    if (item.kind === 'honey') g.userData.lid = metal;
    const lid = lathe([[0, 110.5], [30.5, 110.5], [32.5, 110.3], [33.8, 109.2], [34.1, 107.3], [34.1, 100], [34.3, 99], [33.9, 98], [32.8, 97.7], [32.4, 99], [32.5, 107.6], [30.6, 108], [0, 108]], metal);
    lid.castShadow = true;
    g.add(lid);
    for (const y of [99.1, 101.1, 108.2]) { const e = new THREE.Mesh(new THREE.TorusGeometry(33.65, 0.32, 8, 128), metal); e.rotation.x = Math.PI / 2; e.position.y = y; g.add(e); }
    // the 200 mm wrap around a 76 mm jar leaves a band of glass at the back
    const arc = 200 / 38.15;
    const paper = new THREE.MeshStandardMaterial({ map: labelMap, roughness: 0.92, side: THREE.DoubleSide, envMapIntensity: 0.4 });
    const label = new THREE.Mesh(new THREE.CylinderGeometry(38.15, 38.15, 60, 192, 1, true, -arc / 2, arc), paper);
    label.position.y = 40;
    label.renderOrder = 3;
    g.add(label);
    if (discMap) {
      const disc = new THREE.Mesh(new THREE.CircleGeometry(18, 96), new THREE.MeshStandardMaterial({ map: discMap, transparent: true, alphaTest: 0.5, roughness: 0.94, envMapIntensity: 0.4 }));
      disc.rotation.x = -Math.PI / 2;
      disc.rotation.z = -SEAL_ANGLE;
      disc.position.y = 110.86;
      g.add(disc);
    }
    if (tailMap) {
      const strip = new THREE.Mesh(ribbon(stripPath(48), 16, SEAL_ANGLE), new THREE.MeshStandardMaterial({ map: tailMap, transparent: true, alphaTest: 0.5, roughness: 0.94, side: THREE.DoubleSide, envMapIntensity: 0.4 }));
      strip.renderOrder = 4;
      g.add(strip);
    }
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const ctx = c.getContext('2d'), gr = ctx.createRadialGradient(64, 64, 8, 64, 64, 62);
    gr.addColorStop(0, 'rgba(0,0,0,.28)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, 128, 128);
    const contact = new THREE.Mesh(new THREE.PlaneGeometry(105, 90), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, opacity: 0.55 }));
    contact.rotation.x = -Math.PI / 2;
    contact.position.y = 0.05;
    g.add(contact);
    return g;
  }

  function clear() {
    models.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); [].concat(o.material).forEach((m) => m.dispose()); } });
    models.clear();
    jars.length = 0;
    lidMaterials.length = 0;
  }

  let token = 0;
  async function build() {
    const mine = ++token;
    const list = state.view === 'shelf' ? items.filter((i) => i.kind === 'honey') : [byId[state.id]];
    const made = await Promise.all(list.map((it, i) => makeJar(it, state.view === 'shelf' ? (i - (list.length - 1) / 2) * 91 : 0)));
    if (mine !== token) return;          // a newer choice arrived while textures loaded
    clear();
    made.forEach((j) => { models.add(j); jars.push(j); if (j.userData.lid) { j.userData.lid.color.set(LID[state.lid]); lidMaterials.push(j.userData.lid); } });
    frame();
  }

  function frame() {
    const narrow = stage.clientWidth < 560;
    if (state.view === 'shelf') { const n = jars.length || 6; camera.position.set(0, 145, (narrow ? 192 : 122) * n); camera.lookAt(0, 54, 0); }
    else if (state.view === 'top') { camera.position.set(0, 310, 80); camera.lookAt(0, 58, 0); }
    else { camera.position.set(0, 120, narrow ? 285 : 265); camera.lookAt(0, 54, 0); }
    jars.forEach((j) => { j.rotation.y = THREE.MathUtils.degToRad(state.angle); });
    renderer.render(scene, camera);
  }
  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    frame();
  }
  new ResizeObserver(resize).observe(stage);

  let drag = null;
  renderer.domElement.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, a: state.angle }; renderer.domElement.setPointerCapture(e.pointerId); });
  renderer.domElement.addEventListener('pointermove', (e) => {
    if (!drag) return;
    state.angle = Math.round(((drag.a + (e.clientX - drag.x) * 0.5 + 540) % 360) - 180);
    frame();
  });
  const end = () => { drag = null; };
  renderer.domElement.addEventListener('pointerup', end);
  renderer.domElement.addEventListener('pointercancel', end);

  resize();
  await build();

  return {
    show(id) { if (!byId[id]) return; state.id = id; if (state.view === 'shelf') { state.view = 'three'; state.angle = VIEW_ANGLE.three; } return build(); },
    view(name) {
      const was = state.view;
      state.view = name; state.angle = VIEW_ANGLE[name] ?? state.angle;
      if (name === 'shelf' || was === 'shelf') return build();
      frame();
    },
    lid(name) { state.lid = name; lidMaterials.forEach((m) => m.color.set(LID[name])); frame(); },
    get state() { return { ...state }; }
  };
}
