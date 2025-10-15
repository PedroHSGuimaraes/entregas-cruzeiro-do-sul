// Funções para controlar Toast
function showToast(message, duration = 3000, imageUrl = null) {
  const toast = document.querySelector('.toast');
  if (toast) {
    // Limpa o conteúdo anterior
    toast.innerHTML = '';

    // Adiciona imagem se fornecida
    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Toast icon';
      toast.appendChild(img);
    }

    // Adiciona o texto
    const content = document.createElement('div');
    content.className = 'toast-content';
    content.textContent = message;
    toast.appendChild(content);

    toast.classList.add('show');

    setTimeout(() => {
      hideToast();
    }, duration);
  }
}

function hideToast() {
  const toast = document.querySelector('.toast');
  if (toast) {
    toast.classList.remove('show');
  }
}

// Funções para controlar Modal
function showModal(title = 'Título do Modal', content = '', imageUrl = null) {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal-overlay');

  if (modal && overlay) {
    // Limpa o conteúdo anterior
    modal.innerHTML = '';

    // Cria o header do modal
    const header = document.createElement('div');
    header.className = 'modal-header';

    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Modal icon';
      header.appendChild(img);
    }

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    header.appendChild(titleElement);

    modal.appendChild(header);

    // Adiciona o conteúdo
    const contentElement = document.createElement('p');
    contentElement.innerHTML = content;
    modal.appendChild(contentElement);

    // Adiciona botão de fechar
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-modal-btn';
    closeBtn.className = 'button';
    closeBtn.textContent = 'Fechar';
    closeBtn.addEventListener('click', hideModal);
    modal.appendChild(closeBtn);

    overlay.classList.add('show');
    modal.classList.add('show');
  }
}

function hideModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.modal-overlay');

  if (modal && overlay) {
    modal.classList.remove('show');
    overlay.classList.remove('show');
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Botão para abrir modal
  const openModalBtn = document.getElementById('open-modal-btn');
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      showModal(
        'Bem-vindo!',
        'Este é um modal com suporte a imagens. Você pode adicionar qualquer conteúdo aqui!',
        null
      );
    });
  }

  // Botão para abrir modal com imagem
  const openModalImageBtn = document.getElementById('open-modal-image-btn');
  if (openModalImageBtn) {
    openModalImageBtn.addEventListener('click', () => {
      showModal(
        'Galeria de Projetos',
        '<img src="img/gallery-1.svg" alt="Projeto Web" style="width: 100%; margin: 10px 0; border-radius: 8px;"><p>Confira nossos projetos incríveis de desenvolvimento web!</p>',
        'img/icon-info.svg'
      );
    });
  }

  // Fechar modal ao clicar no overlay
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', hideModal);
  }

  // Botão para mostrar toast simples
  const showToastBtn = document.getElementById('show-toast-btn');
  if (showToastBtn) {
    showToastBtn.addEventListener('click', () => {
      showToast('Operação realizada com sucesso!', 3000, 'img/icon-success.svg');
    });
  }

  // Botão para mostrar toast com imagem
  const showToastImageBtn = document.getElementById('show-toast-image-btn');
  if (showToastImageBtn) {
    showToastImageBtn.addEventListener('click', () => {
      showToast(
        'Nova notificação recebida!',
        3000,
        'img/icon-notification.svg'
      );
    });
  }

  // Fechar modal com a tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  });
});
