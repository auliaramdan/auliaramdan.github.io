import {ThreeWindow} from "./three-window"

const container = document.getElementById('three')
const window = new ThreeWindow(container)
const renderer = window.getRenderer()

renderer.setAnimationLoop(() => {
    renderer.render(window.getScene(), window.getCamera() )
})