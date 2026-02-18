/**
 * FAQ block: accordion of question/answer pairs.
 * Content: each row = first cell question, second cell answer.
 * One item open at a time; keyboard accessible.
 * @param {Element} block The block element
 */
export default function decorate(block) {
  const items = [];
  [...block.children].forEach((row) => {
    const cells = [...row.querySelectorAll('div')];
    const question = cells[0] ? cells[0].innerHTML.trim() : '';
    const answer = cells[1] ? cells[1].innerHTML.trim() : '';
    if (question) items.push({ question, answer });
  });

  block.textContent = '';
  const list = document.createElement('div');
  list.className = 'faq-list';
  list.setAttribute('role', 'list');

  items.forEach((item, index) => {
    const id = `faq-answer-${index}`;
    const itemEl = document.createElement('div');
    itemEl.className = 'faq-item';
    itemEl.setAttribute('role', 'listitem');

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'faq-question';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', id);
    button.id = `faq-question-${index}`;
    button.textContent = item.question.replace(/<[^>]*>/g, '').trim();

    const answerEl = document.createElement('div');
    answerEl.className = 'faq-answer';
    answerEl.id = id;
    answerEl.setAttribute('role', 'region');
    answerEl.setAttribute('aria-labelledby', `faq-question-${index}`);
    answerEl.hidden = true;
    /* Authored block content (rich HTML from CMS); platform-delivered */
    answerEl.innerHTML = item.answer;

    itemEl.append(button, answerEl);
    list.append(itemEl);
  });

  block.append(list);

  // One open at a time; toggle on click/keyboard
  const buttons = list.querySelectorAll('.faq-question');
  const panels = list.querySelectorAll('.faq-answer');

  function closeAll() {
    buttons.forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });
    panels.forEach((panel) => {
      panel.hidden = true;
    });
  }

  function toggle(index) {
    const button = buttons[index];
    const panel = panels[index];
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    closeAll();
    if (!isOpen) {
      button.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    }
  }

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button.faq-question');
    if (!btn) return;
    const index = [...buttons].indexOf(btn);
    if (index >= 0) toggle(index);
  });

  list.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const btn = e.target.closest('button.faq-question');
    if (!btn) return;
    e.preventDefault();
    const index = [...buttons].indexOf(btn);
    if (index >= 0) toggle(index);
  });
}
