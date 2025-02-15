import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function onResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    onResize()

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

// пример использования
// export default function App() {
//   const { width, height } = useWindowSize()
//   // другой кастомный хук
//   const [color, setColor] = useStyle('color')
//   const [fontSize, setFontSize] = useStyle('font-size')

//   useEffect(() => {
//     if (width > 1024) {
//       setColor('green')
//       setFontSize('2em')
//     } else if (width > 768) {
//       setColor('blue')
//       setFontSize('1.5em')
//     } else {
//       setColor('red')
//       setFontSize('1em')
//     }
//   }, [width])

//   return (
//     <>
//       <h1>
//         Window size: {width}, {height}
//       </h1>
//       <h2>Color: {color}</h2>
//       <h3>Font size: {fontSize}</h3>
//     </>
//   )
// }