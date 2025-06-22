import './App.css'
import { useEffect, useState } from 'react'
import bg from './assets/1.jpg'
import flower1 from './assets/Flores/r1.png'
import flower2 from './assets/Flores/r2.png'
import flower3 from './assets/Flores/r3.png'
import flower4 from './assets/Flores/r4.png'
import vestimenta from './assets/Vestimenta.svg'
import audio from './assets/song/Wrong.mp3'


function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isPlaying, setIsPlaying] = useState(false)

  const targetDate = new Date('2025-08-08T18:00:00')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Intento automático de reproducir
  useEffect(() => {
    const audio = document.getElementById("wedding-audio")
    const tryAutoPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (err) {
        console.warn("Autoplay bloqueado:", err)
      }
    }

    tryAutoPlay()
  }, [])

  // Función toggle para reproducir o pausar
  const toggleAudio = () => {
    const audio = document.getElementById("wedding-audio")
    if (audio.paused) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="main">
      <section className="section1" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, 0)), url(${bg})`
      }}>
        <div className="content">
          <p className="subtitle">Después de mucho, ha llegado el momento.</p>
          <p className="subsubtitle">¡Nos casamos!</p>

          <button
            id="play-button"
            className="play-button"
            onClick={toggleAudio}
          >
            '▶'
          </button>

          <h1 className="title">Kenny & Juan</h1>
          <audio id="wedding-audio" src={audio} />
        </div>
      </section>

      <div className="flowers-divider">
        <img src={flower1} className="flower-left" />
        <img src={flower2} className="flower-center" />
        <img src={flower3} className="flower-right" />
      </div>

      <section className="section2">
        <div className="container">
          <div className="box"><h2 className="countertext">{timeLeft.days}</h2></div>
          <div className="box"><h2 className="countertext">{timeLeft.hours}</h2></div>
          <div className="box"><h2 className="countertext">{timeLeft.minutes}</h2></div>
        </div>

        <h3 className="daysubtitle">Viernes 8 de Agosto</h3>
        <div className='separador'>
          <p className="text">
            El amor ha guiado nuestro camino y cada segundo que pasa<br />
            nos acerca al momento en que uniremos nuestras vidas para siempre.<br /><br />
            Cuando este contador llegue a cero, las campanas de la felicidad sonarán,<br />
            y ante nuestros seres queridos, diremos el <br /> <strong>'sí, acepto'</strong> <br />que marcará
            el inicio de nuestra eternidad.
          </p>
        </div>
      </section>

      <div className="flowers-divider2">
        <img src={flower3} className="flower-left2" />
        <img src={flower4} className="flower-center2" />
        <img src={flower2} className="flower-right2" />
      </div>

      <section className="section3">
        <div className="separador">
          <div className="card">
            <div className="card-header">Ceremonia</div>
            <div className="card-body">
              <p>Ven a compartir con nosotros la<br /> bendición de este gran día.</p>
              <p className="hour">6:00 PM - 7:00 PM</p>
              <p className="place">Templo de Santo Domingo de Guzmán</p>
              <a className="map-button" href="https://maps.app.goo.gl/zTNFU7F9FPT6sWZa9" target="_blank">
                <img src="https://www.gstatic.com/images/icons/material/system/2x/place_gm_blue_24dp.png" alt="icon" />
                Abrir mapa del lugar
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-header">Recepción</div>
            <div className="card-body">
              <p className="place">Salón Jardines</p>
              <p>El amor se celebra bailando, riendo y compartiendo. ¡Te esperamos en el salón!</p>
              <p className="hour">8:00 PM - 3:00 AM</p>
              <p className="place">Av. Jardines de Morelos 158</p>
              <a className="map-button" href="https://maps.app.goo.gl/W3EwrRJrEKvjVki29?g_st=aw" target="_blank">
                <img src="https://www.gstatic.com/images/icons/material/system/2x/place_gm_blue_24dp.png" alt="icon" />
                Abrir mapa del lugar
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flowers-divider3">
        <img src={flower1} className="flower-left3" />
        <img src={flower2} className="flower-center3" />
        <img src={flower4} className="flower-right3" />
      </div>

      <section className="section4">
        <div className="vestimenta">
          <img src={vestimenta} className='vestimentaimg' />
          <h3 className="vestsubtitle">Código de vestimenta</h3>
          <p className="textvest">
            Este día está lleno de significado, y cada color tiene su lugar en nuestra historia.
            Te pedimos <br /><strong>Vestir con elegancia formal, dejando al azul marino descansar</strong>… <br />pues ese tono
            lo hemos reservado para algo muy especial en nuestro día.
          </p>
        </div>
      </section>

      <div className="flowers-divider4">
        <img src={flower4} className="flower-left4" />
        <img src={flower3} className="flower-center4" />
        <img src={flower1} className="flower-right4" />
      </div>
    </div>
  )
}

export default App
