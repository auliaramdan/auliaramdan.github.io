import {PerspectiveCamera, Scene, WebGLRenderer} from "three"

export class ThreeWindow
{
    #scene
    #renderer
    #camera

    constructor(container)
    {
        this.container = container
        console.log(container)

        this.#scene = new Scene()
        this.#camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)

        this.#renderer = new WebGLRenderer({antialias: true})
        this.#renderer.setPixelRatio(window.devicePixelRatio)
        this.#renderer.setSize(window.innerWidth, window.innerHeight)

        window.addEventListener('resize', () => {
            this.#renderer.setSize(window.innerWidth, window.innerHeight)
            this.#camera.aspect = window.innerWidth / window.innerHeight
            this.#camera.updateProjectionMatrix()
        })

        this.container.appendChild(this.#renderer.domElement)
    }

    getScene()
    {
        return this.#scene
    }

    getCamera()
    {
        return this.#camera
    }

    getRenderer()
    {
        return this.#renderer
    }
}