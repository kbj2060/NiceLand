import { useRef } from "react"
import {Canvas} from "react-three-fiber"

/**
 * R3F
 * Drop-in <Canvas /> replacement to add Framer compatibility
 *
 * @framerIntrinsicWidth 300
 * @framerIntrinsicHeight 300
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
export function FramerCanvas(props: JSX.ElementChildrenAttribute) {
    const container = useRef<HTMLDivElement>(null)

    return (
        <div ref={container} style={{ width: "100%", height: "100%" }}>
            <Canvas  {...props}>
                {props.children}
            </Canvas>
        </div>
    )
}
