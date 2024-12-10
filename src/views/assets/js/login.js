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
                console.error('Erro:', error.message);
                alert(`Erro: ${error.message}`);
                return;
            }

            const result = await response.json();
            console.log(result);

            alert(`Sucesso: ${result.message}`);
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    });
}

login();
