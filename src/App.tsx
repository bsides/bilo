import React from 'react'

const DATE_AIRPLANE_TICKET = Date.UTC(2024, 8 - 1, 8, 16 + 3, 50, 0)
const bilo = new Date(DATE_AIRPLANE_TICKET).getTime()
const biloFormated = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
}).format(bilo)

export function App() {
  const [now, setNow] = React.useState(new Date().getTime())
  const days = (bilo - now) / 1000 / 60 / 60 / 24
  const hours = (days % 1) * 24
  const minutes = (hours % 1) * 60
  const seconds = (minutes % 1) * 60
  const interval = {
    days: Math.floor(days).toString(),
    hours: Math.floor(hours).toString(),
    minutes: Math.floor(minutes).toString(),
    seconds: Math.floor(seconds).toString(),
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date().getTime())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <>
      <main className="grid justify-center items-center h-screen space-y-20">
        <div className="grid justify-center items-center h-screen space-y-20">
          <div className="sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl clock-container relative">
            <div className="md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black text-center uppercase absolute -top-12 md:-top-8 left-0 w-full">
              Até o Bisso encontrar o Vilo
            </div>
            <div className="clock-col" id="js-days">
              <p className="text-white clock-timer clock-days">
                {interval.days}
              </p>
              <p className="clock-label">dias</p>
            </div>
            <div className="clock-col" id="js-hours">
              <p className="text-white clock-timer clock-hours">
                {interval.hours}
              </p>
              <p className="clock-label">horas</p>
            </div>
            <div className="clock-col" id="js-minutes">
              <p className="text-white clock-timer clock-minutes">
                {interval.minutes}
              </p>
              <p className="clock-label">minutos</p>
            </div>
            <div className="clock-col clock-col-last" id="js-seconds">
              <p className="text-white clock-timer clock-seconds">
                {interval.seconds}
              </p>
              <p className="clock-label">segundos</p>
            </div>
            <div
              className="md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black text-center uppercase absolute top-96 -mt-10 md:mt-0 md:top-[13rem] left-0 w-full"
              id="js-fulldate"
            >
              {biloFormated}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
