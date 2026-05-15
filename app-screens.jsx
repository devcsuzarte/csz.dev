// app-screens.jsx — Image-slot containers for each app screenshot.
// Each slot fills the iPhone viewport (402×874) and accepts a drag-and-drop
// image. The drop persists across reloads via the sidecar.
//
// Layout note: the IOSDevice frame draws its dynamic island (top) and home
// indicator (bottom) on top of children, so a typical iOS screenshot can
// fill the full 402×874 box and look right.

function AppSlot({ id, accent, placeholder, src }) {
  return (
    <image-slot
      id={id}
      shape="rect"
      fit="cover"
      src={src}                           // ← adiciona prop src
      placeholder={placeholder}
      style={{ width: '100%', height: '100%', display: 'block' }}
    ></image-slot>
  );
}

function CarrinhoFacilScreen() {
  return <AppSlot id="app-carrinho-facil" src="assets/prints/carrinho_facil_1.png" placeholder="..." />;
}
// function AutoTechScreen() {
//   return <AppSlot id="app-auto-tech" src="assets/prints/auto-tech.png" placeholder="..." />;
// }
// function GymBuddyScreen() {
//   return <AppSlot id="app-gym-buddy" src="assets/prints/gym-buddy.png" placeholder="..." />;
// }
// function ClinFlowScreen() {
//   return <AppSlot id="app-clinflow" src="assets/prints/clinflow.png" placeholder="..." />;
// }

Object.assign(window, { CarrinhoFacilScreen, AutoTechScreen, GymBuddyScreen, ClinFlowScreen });
