"use client";
import { useEffect, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [ccName, setCcName] = useState("");
  const [ccExpiration, setCcExpiration] = useState("");
  const [ccCvv, setCcCvv] = useState("");
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
      }, 10000);
    }
  }, [isCreated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("user", user);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);
    formData.append("cc-number", ccNumber);
    formData.append("cc-name", ccName);
    formData.append("cc-expiration", ccExpiration);
    formData.append("cc-cvv", ccCvv);

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
      setCcNumber("");
      setCcName("");
      setCcExpiration("");
      setCcCvv("");
    }
  };

  const messageSucces = () => {
    return (
      <div className="border border-green-300 bg-green-200 p-3 rounded-md mt-5">
        <span className="text-gray-800">Pago exitoso</span>
        <p className="text-gray-600">
          Tu cuenta ha sido creada exitosamente, ahora puedes iniciar sesión
        </p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 mb-5">
      {isCreated && messageSucces()}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="shadow-lg p-10">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Completa los datos para crear tu cuenta
            </h2>
            <div className="space-y-6">
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
                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <h2 className="text-center text-lg font-bold leading-9 tracking-tight text-gray-900">
                  Datos de pago
                </h2>
                <div id="credit-card mt-2">
                  <div className="mt-2">
                    <label htmlFor="cc-number" className="block text-sm font-medium text-gray-900">Número de tarjeta</label>
                    <input required type="text" id="cc-number" name="cc-number" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setCcNumber(e.target.value)}
                      value={ccNumber}
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="cc-name" className="block text-sm font-medium text-gray-900">Nombre en la tarjeta</label>
                    <input required type="text" id="cc-name" name="cc-name" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setCcName(e.target.value)}
                      value={ccName}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mt-2">
                      <label htmlFor="cc-expiration" className="block text-sm font-medium text-gray-900">Fecha de expiración</label>
                      <input required type="text" id="cc-expiration" name="cc-expiration" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setCcExpiration(e.target.value)}
                        value={ccExpiration}
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="cc-cvv" className="block text-sm font-medium text-gray-900">CVV</label>
                      <input required type="text" id="cc-cvv" name="cc-cvv" className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setCcCvv(e.target.value)}
                        value={ccCvv}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm shadow-lg p-10">
              <h2>
                Resumen de tu compra
              </h2>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6 mt-8">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>$2099.00 MXN</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">IVA incluído</p>
                <div className="mt-6">
                  <button type="submit" className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 w-full">Pagar ahora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Ya tienes una cuenta?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Iniciar sesión
          </a>
        </p>
      </form>
    </div>
  );
}
