// Panel Interactivo con animaciones suaves de rotación
document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.animacion-panel');
    
    panels.forEach(panel => {
        panel.addEventListener('click', () => setPanelActive(panel));
        panel.addEventListener('keydown', (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setPanelActive(panel);
            }
        });
    });

    function setPanelActive(targetPanel) {
        const currentActive = document.querySelector('.animacion-panel.active');
        
        // Si ya está activo, no hacer nada
        if (targetPanel === currentActive) return;
        
        // Limpiar todas las clases de animación
        panels.forEach(panel => {
            const title = panel.querySelector('.panel-title');
            title.classList.remove('animate-to-horizontal', 'animate-to-vertical');
            title.style.animation = 'none';
        });
        
        // Forzar reflow
        void targetPanel.offsetWidth;
        
        // Cambiar estados activos/inactivos
        panels.forEach(panel => {
            if (panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
        
        // Aplicar animaciones suaves con delay para mejor sincronización
        setTimeout(() => {
            panels.forEach(panel => {
                const title = panel.querySelector('.panel-title');
                
                if (panel === targetPanel) {
                    // Panel que se activa: animar de vertical a horizontal
                    title.classList.add('animate-to-horizontal');
                } else {
                    // Paneles que se desactivan: animar de horizontal a vertical
                    title.classList.add('animate-to-vertical');
                }
            });
        }, 50);

                // --- Update left column content based on the clicked panel's data-key ---
                try {
                    var contentMap = {
                        pilon: {
                            title: 'Del papel a la pantalla: el desafío de El Pilón',
                            desc: 'El Pilón, con más de tres décadas de trayectoria, se ha consolidado como referente periodístico regional y mantiene la confianza de sus lectores. Sin embargo, en el entorno digital se enfrenta a críticas por la repetitividad de sus contenidos y la falta de innovación.'
                        },
                        radioguatapuri: {
                            title: 'Sintonizando audiencias: Radio Guatapurí en la era digital',
                            desc: 'Radio Guatapurí ha sido por años una voz central en la comunidad local; su reto actual es mantener la cercanía en plataformas digitales, adaptando formatos radiales a audiencias que consumen audio bajo demanda y redes sociales.'
                        },
                        canal12: {
                            title: 'Pantalla local, alcance global: el caso de Canal 12',
                            desc: 'Canal 12 enfrenta el desafío de transformar su oferta televisiva hacia formatos digitales, integrando video corto y transmisión en vivo para ampliar su presencia en audiencias jóvenes y plataformas emergentes.'
                        }
                    };

                    var key = targetPanel && targetPanel.getAttribute ? targetPanel.getAttribute('data-key') : null;
                    var leftTitle = document.getElementById('anim-title');
                    var leftDesc = document.getElementById('anim-desc');
                    if (key && contentMap[key]) {
                        leftTitle.textContent = contentMap[key].title;
                        leftDesc.textContent = contentMap[key].desc;
                    }
                } catch (err) {
                    console.warn('Error updating left content', err);
                }
    }

    // Estado inicial
    const initialActive = document.querySelector('.animacion-panel.active') || document.querySelector('.animacion-panel');
    if (initialActive) {
        panels.forEach(panel => {
            if (panel === initialActive) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }
    
    // Función global para debugging
    window.setPanelActive = setPanelActive;
});

document.querySelectorAll('.animacion-panel').forEach(panel => {
  panel.addEventListener('click', function() {
    document.querySelectorAll('.panel-title').forEach(title => {
      title.classList.remove('horizontal', 'vertical');
      title.classList.add('vertical');
    });
    this.querySelector('.panel-title').classList.remove('vertical');
    this.querySelector('.panel-title').classList.add('horizontal');
  });

});
