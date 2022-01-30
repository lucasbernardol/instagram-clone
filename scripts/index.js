const publicationButtons = document.querySelectorAll('.show-info');

const modalOverlay = document.querySelector('.publication-modal-wrapper');
const modalExitElement = document.querySelector('[data-id="publication-exit"]');

function bodyOverflowToggle(cssDeclaration) {
  const { body } = document;

  const hasOverflow = body.style.overflow;

  !hasOverflow
    ? (body.style.overflow = cssDeclaration || 'hidden')
    : (body.style.overflow = '');
}

function overlayToggle(modal, className = 'hidden') {
  const hasHidden = modal.classList.contains(className);

  if (hasHidden) {
    modal.classList.remove(className);
    return bodyOverflowToggle();
  }

  modal.classList.add(className);
  bodyOverflowToggle();
}

function modalExitListener(exitElement) {
  exitElement.addEventListener('click', () => overlayToggle(modalOverlay));
}

function publicationListener(buttons) {
  const actionFunction = () => overlayToggle(modalOverlay);

  buttons.forEach((button) => button.addEventListener('click', actionFunction));
}

function app() {
  publicationListener(publicationButtons);
  modalExitListener(modalExitElement);
}

window.addEventListener('load', () => app());
