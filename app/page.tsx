import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";
function HomePage() {
  return (
    <div className="flex text-white flex-col h-screen items-center justify-center px-2" >
        <h1 className="text-3xl font-bold mb-8 md:mb-12 md:text-5xl" >ChatGPT</h1>
        
        <div className="flex space-x-2">
          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <SunIcon className='h-6 w-6 md:h-8 md:w-8' />
              <h2>Examples</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">"Explain something to me"</p>
              <p className="infoText">"What is the difference between a dog and a cat?"</p>
              <p className="infoText">"What is the color of sun?"</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <BoltIcon className='h-6 w-6 md:h-8 md:w-8' />
              <h2>Capabilities</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">Remembers what user said earlier in the conversation</p>
              <p className="infoText">Allows user to provide follow-up corrections</p>
              <p className="infoText">Trained to decline inappropriate requests</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center justify-center mb-5">
              <ExclamationTriangleIcon className='h-6 w-6 md:h-8 md:w-8' />
              <h2>Limitations</h2>
            </div>

            <div className="space-y-2">
              <p className="infoText">May occasionally generate incorrect information</p>
              <p className="infoText">May occasionally produce harmful instructions or biased content</p>
              <p className="infoText">Limited knowledge of world and events after 2021</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default HomePage