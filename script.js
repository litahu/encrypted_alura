document.addEventListener('DOMContentLoaded', function() {

  const encript_Btn = document.getElementById('encript-btn');
  const desencript_Btn = document.getElementById('desencript-btn');
  const salidasDiv = document.getElementById('Salidas');


  encript_Btn.addEventListener('click', function() {
      const textoEntrada = document.querySelector('#Entradas textarea').value;
      const textoEncriptado = encriptarTexto(textoEntrada);
      mostrarTextoEncriptado(textoEncriptado);
  });

  desencript_Btn.addEventListener('click', function() {
      const textoEntrada = document.querySelector('#Entradas textarea').value;
      const textoDesencriptado = desencriptarTexto(textoEntrada);
      mostrarTextoEncriptado(textoDesencriptado);
  });

  function mostrarTextoEncriptado(texto) {
      salidasDiv.innerHTML = '';
      if (texto.trim() !== '') {
          const textarea = document.createElement('textarea');
          textarea.textContent = texto;
          textarea.readOnly = true;
          salidasDiv.appendChild(textarea);

          const botonCopiar = document.createElement('button');
          botonCopiar.textContent = 'Copiar';
          botonCopiar.classList.add('custom-button');
          botonCopiar.addEventListener('click', function() {
              textarea.select();
              document.execCommand('copy');
          });
          salidasDiv.appendChild(botonCopiar);
      } else {
         // mostrarImagenPorDefecto();
      }
  }

  function mostrarImagen1() {
    const imagen1 = document.getElementById('imagen1');
    const imagen2 = document.getElementById('imagen2');
    const imagen3 = document.getElementById('imagen3');

  // Oculta la imagen1 y la imagen 3
  imagen1.style.display = 'none';
  imagen3.style.display = 'none';

  // Muestra la imagen 2
  imagen2.style.display = 'block';
    }

  function mostrarImagen2() {
    const imagen1 = document.getElementById('imagen1');
    const imagen2 = document.getElementById('imagen2');
    const imagen3 = document.getElementById('imagen3');

    // Oculta la imagen1 y la imagen 2
    imagen1.style.display = 'none';
    imagen2.style.display = 'none';

    // Muestra la imagen 3
    imagen3.style.display = 'block';
    }


  const boton1 = document.getElementById('encript-btn');
  boton1.addEventListener('click', mostrarImagen1);

  const boton2 = document.getElementById('desencript-btn');
  boton2.addEventListener('click', mostrarImagen2);



 

  
  function encriptarTexto(texto) {
      const reglas = {
          'e': 'enter',
          'i': 'imes',
          'a': 'ai',
          'o': 'ober',
          'u': 'ufat'
      };

      let textoEncriptado = '';
      for (let i = 0; i < texto.length; i++) {
          const letra = texto[i];
          if (reglas.hasOwnProperty(letra)) {
              textoEncriptado += reglas[letra];
          } else {
              textoEncriptado += letra;
          }
      }
      return textoEncriptado;
  }

  function desencriptarTexto(textoEncriptado) {
      const reglas = {
          'enter': 'e',
          'imes': 'i',
          'ai': 'a',
          'ober': 'o',
          'ufat': 'u'
      };

      let textoDesencriptado = '';
      const palabras = textoEncriptado.split(' ');
      palabras.forEach((palabra, index) => {
          if (index > 0) textoDesencriptado += ' '; // Reponemos los espacios
          let palabraDesencriptada = '';
          let inicio = 0;
          while (inicio < palabra.length) {
              let encontrado = false;
              for (let longitud = 5; longitud >= 1; longitud--) {
                  const trozo = palabra.substr(inicio, longitud);
                  if (reglas.hasOwnProperty(trozo)) {
                      palabraDesencriptada += reglas[trozo];
                      inicio += longitud;
                      encontrado = true;
                      break;
                  }
              }
              if (!encontrado) {
                  palabraDesencriptada += palabra[inicio++];
              }
          }
          textoDesencriptado += palabraDesencriptada;
      });
      return textoDesencriptado;
  }
});












