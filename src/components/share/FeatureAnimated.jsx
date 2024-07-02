import React, { useState, useEffect } from "react";


const HowItWorks = () => {

  const [step, setStep] = useState<number>(0);

  const steps = [
    {
      id: 1,
      text: "Erstellen Sie einen Account auf unserer Website  von 8zense.com!",
      animation: "https://lottie.host/e90fc516-078a-4e65-ac43-ab5a7b1bc4ed/W6DDrvJFL3.json",
    },
    {
      id: 2,
      text: "Vereinbaren Sie ein Zielgespräch mit Fernanda zur Definition Ihrer Wünsche, Vorstellungen und Ideen!",
      animation: "https://lottie.host/57443a3d-e280-4f39-9134-86d96cd8f28f/ohtp2XVGjS.json",
    },
    {
      id: 3,
      text: "Dank unsers ausgezeichnetes Networking finden wir für Sie genau das Team dass unter der Leitung von Fernanda ihren Designtraum erfüllt.",
      animation: "https://lottie.host/78373cd4-e991-482b-8f25-e897acb9bbb8/V0IaYYRt3A.json",
    },
    {
      id: 4,
      text: "Das Projekt wird in viele Einzelprojekte herunter gebrochen - nach und nach fügt sich Ihr Design-Traum wie ein Puzzel zu etwas aussergewöhlichen wundervollem zusammnen",
      animation: "https://assets3.lottiefiles.com/private_files/lf30_p9it5a2a.json",
    },
    {
      id: 5,
      text: "In allen Phasen des Projektes wird in einem Analyze-Evaluate-Synthesyze-Circuit kontenuierlich fortentwickelt, bis Ihre Ziele und Vorgaben erreicht sind!",
      animation: "https://lottie.host/d969d744-bf03-4aa4-90ac-50f9c5dda9b5/P36NGczhaX.json",
    },
    {
      id: 6,
      text: "Ist Ihr Design-Projekt dann umgesetzt, erfolgt der Startpfiff zur Abnahme des Projektes durch Fernanda mit allen Beteiligten gemeinsam bis alle Korrekturen und Beanstandungen aus dem Weg geräumt sind.",
      animation: "https://lottie.host/59703381-ed25-463c-913f-7cd163db2aa7/uF1vDxwgIZ.json",
    },
  ];

  const handleStepChange = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  };

  useEffect(() => {
    const interval = setInterval(handleStepChange, 7000);
    return () => clearInterval(interval);
  }, [handleStepChange]);

  return (
    <motion.div
      className=" flex flex-col sm:min-h-screen h-full"
      key={steps[step].id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="h-[100%] ss:p-10 p-5 flex flex-col items-center justify-center ">
        <div className="grid grid0-cols-2 gap-4">
          <p className="text-sm md:text-base text-slate-800 font-light mt-2 leading-relaxed text-center">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl text-[#1A2238] font-semibold mb-4 text-center">
            {`so funktioniert 8zense.com`}
          </h2>
          <Player
            autoplay
            loop
            src={steps[step].animation}
            style={{ height: "40vh", width: "100%" }}
          />
        </div>
        <p className="h-24 w-96 relative bg-[url('/assets/images/brushOrange.svg')] bg-cover text-xl text-slate-900 font-light mb-4 text-center">
          {steps[step].text}
        </p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;