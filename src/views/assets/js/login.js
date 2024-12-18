document.addEventListener("DOMContentLoaded", function () {
    login();
    console.log('login.js inicializado');
    
    function login() {
        const form = document.querySelector('[data-form]');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);

            const data = {
                email: formData.get('email'),
                password: formData.get('password'),
            };

            try {
                const response = await fetch('/login/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    const error = await response.json();
                    const errorMessage = document.querySelector('.error-message p');

                    if(error.message == 'Credenciais inválidas'){
                        errorMessage.textContent = 'Senha inválida';
                    } else if(error.message == 'Usuário não existe'){
                        errorMessage.textContent = 'Usuário não existe';
                    } else {
                        alert('Erro ao fazer login');
                    }

                    return;
                }

                const result = await response.json();

                if(result.status == 'success' && result.statusCode == 200){
                    return window.location.href = '/';
                }

            } catch (error) {
                console.error('Erro ao enviar formulário:', error);
            }
        });
    }
});