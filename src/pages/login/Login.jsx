import './Login.css'
export default function Login(){
    return( 
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/style/register.css" />
  <link rel="stylesheet" href="/style/forms.css" />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/assets/android-icon-72x72.png"
  />
  <title>Amigos de la musica</title>

  <main>
    <section className="form-section">
      <div className="general">
        <div>
          <form>
            <h2>Registro</h2>
            <div className="input-container">
              <label htmlFor="nombreCompleto">Nombre completo </label>
              <input
                type="text"
                name="Fullname"
                id="nombreCompleto"
                required
                minLength={5}
                maxLength={12}
              />
            </div>
            <div className="input-container">
              <label htmlFor="correo">Correo electronico</label>
              <input
                type="email"
                name="Mail"
                id="correo"
                required
                minLength={10}
                maxLength={40}
                pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
              />
            </div>
            <div className="input-container">
              <label htmlFor="contraseña">contraseña</label>
              <input
                type="password"
                name="Password"
                id="contraseña"
                required
                minLength={5}
                maxLength={20}
              />
            </div>
            <div className="input-container">
              <label htmlFor="contrasela2">Repeti tu contraseña</label>
              <input
                type="password"
                name="Repeatpasword"
                id="contraseña2"
                required
                minLength={5}
                maxLength={20}
              />
            </div>
            <div className="input-container">
              <label htmlFor="nacimiento">Fehca de nacimiento</label>
              <input
                type="date"
                name="Nacimiento"
                id="nacimiento"
                required
                max="2010-01-01"
              />
            </div>
            <div className="input-container">
              <select name="provincia" id="provincia" required="">
                <option value="">Selecciona tu provincia</option>
                <option value="Caba">Caba</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Cordoba">Cordoba</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="observaciones">Observaciones</label>
              <textarea
                name="observaciones"
                id="observaciones"
                maxLength={50}
                defaultValue={""}
              />
            </div>
            <div className="input-container">
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>

</>
)
}