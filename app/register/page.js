"use client";
import { useEffect, useState } from "react";
import { set } from "../lib/features/userSlice";

export default function Register() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    if (password && passwordConfirm) {
      setIsConfirmPassword(password !== passwordConfirm);
    }
  }, [password, passwordConfirm]);

  useEffect(() => {
    if (isCreated) {
      setTimeout(() => {
        setIsCreated(false);
      }, 2000);
    }
  }, [isCreated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("user", user);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);

    const response = await fetch("/api/users", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setIsCreated(true);
      setName("");
      setUser("");
      setPassword("");
      setPasswordConfirm("");
      setIsConfirmPassword(false);
    }
  };

  const messageSucces = () => {
    return (
      <div className="border border-green-300 bg-green-200 p-3 rounded-md mt-5">
        <span className="text-gray-600">Usuario creado correctamente</span>
      </div>
    );
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Regístrate
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirmar contraseña
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password2"
                name="password2"
                type="password"
                autoComplete="current-password2"
                required
                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                value={passwordConfirm}
              />
            </div>
            {isConfirmPassword && (
              <div className="mt-2">
                <span className="text-red-600">
                  Las contraseñas no coinciden
                </span>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Crear cuenta
            </button>
          </div>
        </form>

        {isCreated && messageSucces()}

        <p className="mt-10 text-center text-sm text-gray-500">
          Ya tienes una cuenta?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}
