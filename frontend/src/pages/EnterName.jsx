import { useState } from "react";
import ToggleMode from "@/components/ToggleMode";
import Button from "@/components/Button";
function EnterName() {
  const [error, setError] = useState(false);
  const saveName = () => {
    if (!document.getElementById("name").value) {
      setError(true);
      return;
    }
    localStorage.setItem("name", document.getElementById("name").value);
    window.location.href = "/";
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center justify-center gap-12 h-screen w-full">
        <div className="absolute inset-0 -z-10 h-full w-full dark:bg-bg-dark bg-bg-light bg-[linear-gradient(to_right,#f0f0f0_2px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#0f172a_2px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] dark:bg-[size:6rem_4rem]"></div>
        <h1 className="text-center animate-wiggle text-3xl md:text-5xl font-semibold text-gray-800 dark:text-slate-100">
          Bienvenido a NotesEasy.
        </h1>
        <div className="animate-fade-up flex flex-col items-center gap-2 w-full md:w-1/2">
          <p className="text-xl font-base text-gray-500 dark:text-gray-200">
            Ingresa tu nombre
          </p>
          <input
            id="name"
            className={`w-1/2 py-2 px-4 focus:ring-2 ring-gray-600 focus:outline-none border-2 border-gray-500 bg-slate-50 text-gray-700 dark:bg-slate-950 dark:text-gray-200 rounded-lg shadow-xl ${
              error && "border-red-600"
            }`}
            type="text"
            placeholder="Ejemplo: Esteban, Pablo..."
          />
          {error && (
            <p className="text-red-600 animate-fade">
              El campo esta vacío, intenta escribir tu nombre.
            </p>
          )}
        </div>
        <div className="animate-fade-up">
          <Button function={saveName} content="Continuar" />
        </div>
      </div>
      <div className="animate-fade-left flex w-full items-end justify-end p-4 ">
        <ToggleMode />
      </div>
    </div>
  );
}

export default EnterName;
