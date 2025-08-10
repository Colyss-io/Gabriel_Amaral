// Smooth scrolling para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer para animações ao scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observar todos os projetos
        document.querySelectorAll('.project').forEach(project => {
            project.style.animationPlayState = 'paused';
            observer.observe(project);
        });

        // Profile image functionality
        const profileContainer = document.getElementById('profileContainer');
        
        // Você pode adicionar sua foto programaticamente aqui
        function addProfilePhoto(imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Foto de Perfil';
            img.onerror = function() {
                // Se a imagem não carregar, mantém o placeholder
                console.log('Erro ao carregar a imagem');
            };
            
            // Remove o placeholder e adiciona a imagem
            const placeholder = profileContainer.querySelector('.profile-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
            profileContainer.appendChild(img);
        }
        
        // Para usar: descomente a linha abaixo e coloque a URL da sua foto
        // addProfilePhoto('https://exemplo.com/sua-foto.jpg');

        // Back to top button functionality
        const backToTopButton = document.getElementById('backToTop');

        // Mostrar/ocultar botão baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll suave ao topo quando clicar no botão
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });