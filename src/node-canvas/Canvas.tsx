import { useEffect, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

import Rocket from '../assets/icons/rocket.svg'
import { PrimaryButton, SubHeading } from '../shared/styled';
import { Colors } from '../shared/theme';
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(500, 500)
// const context = canvas.getContext('2d')

const Canvas = () => {
    const [color, setColor] = useState<string>(Colors.backgroundColor)
    let ctx = canvas.getContext('2d')
    // Write "Awesome!"
    ctx.font = '30px Impact'
    ctx.rotate(0.1)
    ctx.fillText('Awesome one!', 50, 100)

    // Draw line under text
    var text = ctx.measureText('Awesome too!')
    ctx.strokeStyle = 'rgba(0,0,0,0.5)'
    ctx.beginPath(0, 0)
    ctx.lineTo(50, 102)
    ctx.lineTo(50 + text.width, 102)
    ctx.stroke()

    const ImageLoadingFun = async () => {
        console.log('oh in!')
        const myimg = await loadImage(Rocket)
        console.log('oh in!', myimg)
        // myimg.then((img:any) => {
        //     // do something with image
        //     console.log('oh yes!', img)
        //     return (<i>
        //         bhanu prasad
        //     </i>)
        // }).catch((err: any) => {
        //     console.log('oh no!', err)
        // })
        // setImage(myimg)
        // return <> 
        // prasad
        // </>
        return myimg
    }
    // Draw cat with lime helmet
    useEffect(() => {
        ImageLoadingFun()
        console.log('oh out')

    })
    console.log("window.scrollX", window.screen.width)
    return (
        <>
            <SubHeading color='white'> You can draw whatever you want. Happy Drawing.! </SubHeading>
            <PrimaryButton color={color === Colors.backgroundColor ? 'green' : Colors.backgroundColor}
             onClick={() => setColor(Colors.backgroundColor)} >Draw</PrimaryButton>
            <PrimaryButton color={color === "white" ? 'green' : Colors.backgroundColor}
             onClick={() => setColor("white")}>Erase </PrimaryButton>
            <CanvasDraw
                onChange={null}
                // imgSrc={Rocket}
                // gridColor='none'
                catenaryColor={Colors.primaryColor}
                brushRadius={5}
                brushColor={color}
                hideGrid={true}
                loadTimeOffset={500}
                lazyRadius={0}
                canvasWidth={window.screen.width <= 390 ? 330 : 400}
                canvasHeight={400}
            />
        </>
    )
}

export default Canvas