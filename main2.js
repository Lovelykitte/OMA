// Popup funcionalidad
document.querySelectorAll('.equipo-card').forEach(card => {
  card.addEventListener('click', function() {
    // Pasamos la tarjeta completa para usar sus datos como fallback si hace falta
    fillPopup(card);
    const overlay = document.querySelector('.equipo-popup-overlay');
    overlay.classList.add('activo');
    overlay.classList.remove('saliendo');
    setTimeout(() => overlay.focus(), 1);
  });
});

// Close button inside popup
const popupCloseButton = document.querySelector('.popup-close');
if (popupCloseButton) popupCloseButton.addEventListener('click', closePopup);

document.querySelector('.equipo-popup-overlay').addEventListener('click', function(e) {
  if (e.target.classList.contains('equipo-popup-overlay')) {
    closePopup();
  }
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePopup();
  }
});
function closePopup() {
  const overlay = document.querySelector('.equipo-popup-overlay');
  overlay.classList.add('saliendo');
  setTimeout(() => {
    overlay.classList.remove('activo');
    overlay.classList.remove('saliendo');
  }, 420);
}

// Cambia los datos del popup según la tarjeta/persona
function fillPopup(cardOrPerson) {
  // data centralizado
  const data = {
    martin: {
      img: 'Gallery/Marcela-Photoroom.png',
      nombre: 'MARCELA TORRES',
      rol: 'DISEÑADORA GRÁFICA',
      desc: `Diseñadora gráfica con amplia experiencia en diseño editorial, branding y diseño web. Especialista en diseño de experiencia de usuario y comunicación visual.<br><br>Actualmente se desempeña como docente del programa de Diseño Gráfico de la Fundación Universitaria del Área Andina, sede Valledupar, donde contribuye al desarrollo de futuros profesionales del diseño y la comunicación visual.`
    },
    alix: {
      img: 'Gallery/Martin-Photoroom.png',
      nombre: 'MARTÍN ELÍAS MENDOZA CERPA',
      rol: 'CO-INVESTIGADOR',
      desc: `Comunicador Social y Periodista, especialista en Pedagogía Ambiental y magíster en Pedagogía Ambiental para el Desarrollo Sostenible. Actualmente se desempeña como docente del programa de Comunicación Social de la Fundación Universitaria del Área Andina, sede Valledupar.<br><br>
      Su trayectoria integra la formación académica con la investigación aplicada, enfocándose en la promoción de prácticas sostenibles y en el fortalecimiento de los procesos comunicativos vinculados a los medios de comunicación, el periodismo y el desarrollo sostenible.`
    },
    ana: {
      img: 'Gallery/Alix-Photoroom.png',
      nombre: 'ALIX CASTRO',
      rol: 'CO-INVESTIGADORA',
      desc: 'Comunicadora Social y Periodista, especialista en Gerencia de la Comunicación para el Desarrollo Social de la Universidad Autónoma del Caribe y maestrante en Innovación de la Fundación Universitaria del Área Andina.<br><br>Consultora en comunicación corporativa y estratégica, así como en proyectos vinculados a las industrias creativas y culturales.Actualmente es directora del programa de Comunicación Social de Areandina, sede Valledupar, desde donde lidera procesos académicos, investigativos y de gestión, orientados al fortalecimiento de la formación en comunicación con impacto social, cultural y regional.'
    },
    diego: {
      img: 'Gallery/Ana-Photoroom.png',
      nombre: 'ANA BELTRÁN',
      rol: 'CO-INVESTIGADORA',
      desc: 'Comunicadora Social y Periodista. Magíster en Comunicación Estratégica por la Universidad Sergio Arboleda y Magíster en Neuromarketing Aplicado por la Universidad Politécnica de Valencia, España. Diplomada en Transformación Digital.<br><br>Cuenta con amplia experiencia en la articulación con el sector empresarial y en la gestión de convenios con entidades públicas y privadas. Se ha desempeñado como consultora en comunicación estratégica y responsabilidad social empresarial. Docente del programa de Comunicación Social Virtual de la Fundación Universitaria del Área Andina.'
    },
    marcela: {
      img: 'Gallery/Diego-Photoroom.png',
      nombre: 'DIEGO VILLA',
      rol: 'DISEÑADOR GRÁFICO',
      desc: 'Diseñadora gráfica con amplia experiencia en diseño editorial, branding y diseño web. Especialista en diseño de experiencia de usuario y comunicación visual.<br><br>Actualmente se desempeña como docente del programa de Diseño Gráfico de la Fundación Universitaria del Área Andina, sede Valledupar, donde contribuye al desarrollo de futuros profesionales del diseño y la comunicación visual.'
    }
  };

  const popup = document.querySelector('.equipo-popup-card');

  // Normalizar: si nos pasaron el elemento card, extraer data-person y la imagen/alt de la tarjeta
  let key;
  let thumbImgSrc = null;
  let thumbAlt = null;
  if (typeof cardOrPerson === 'string') {
    key = cardOrPerson;
  } else if (cardOrPerson && cardOrPerson.getAttribute) {
    key = cardOrPerson.getAttribute('data-person');
    const imgEl = cardOrPerson.querySelector('.equipo-foto');
    if (imgEl) {
      thumbImgSrc = imgEl.getAttribute('src');
      thumbAlt = imgEl.getAttribute('alt');
    }
  }

  // Si la clave no existe en data, usamos fallback (thumbs o textos genéricos)
  const info = (key && data[key]) ? data[key] : {
    img: thumbImgSrc || 'Gallery/default-person.png',
    nombre: (thumbAlt && thumbAlt.toUpperCase()) || 'PERSONA'
      , rol: 'MIEMBRO'
      , desc: 'Información no disponible.'
  };

  const fotoEl = popup.querySelector('.popup-foto');
  fotoEl.src = info.img;
  fotoEl.alt = info.nombre;
  // Si la imagen falla en cargar, usar fallback neutral
  fotoEl.onerror = function() { this.onerror = null; this.src = 'Gallery/default-person.png'; };

  popup.querySelector('.popup-nombre').textContent = info.nombre;
  popup.querySelector('.popup-rol').textContent = info.rol;
  popup.querySelector('.popup-desc').innerHTML = info.desc;
}