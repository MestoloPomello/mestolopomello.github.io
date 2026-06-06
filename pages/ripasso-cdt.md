---
layout: default
title: Ripasso CDT - MestoloPomello
permalink: /ripasso-cdt/
---

<link rel="stylesheet" href="{{ '/assets/css/cdt-ripasso.css' | relative_url }}">

<main class="cdt-review" data-source="{{ '/assets/data/cdt_domande.json' | relative_url }}">
    <header class="cdt-review__header">
        <h1>Ripasso CDT</h1>
        <div class="cdt-review__stats">
            <span><span id="current-count">0</span>/<span id="total-count">0</span></span>
            <span id="section-name"></span>
        </div>
    </header>

    <div class="cdt-controls">
        <label class="cdt-controls__toggle" for="random-mode">
            <input id="random-mode" type="checkbox" checked>
            <span>Domande casuali</span>
        </label>

        <form id="jump-form" class="cdt-controls__jump">
            <label for="question-number">Vai alla domanda</label>
            <input id="question-number" type="number" min="1" step="1" inputmode="numeric">
            <button type="submit">Vai</button>
        </form>
    </div>

    <section class="cdt-card" aria-live="polite">
        <p id="question-text" class="cdt-card__question">Caricamento...</p>

        <label class="cdt-card__label" for="user-answer">La tua risposta</label>
        <textarea id="user-answer" class="cdt-card__input" rows="8" autocomplete="off" spellcheck="false"></textarea>

        <div class="cdt-card__actions">
            <button id="submit-answer" type="button">Invia</button>
            <button id="next-question" type="button" class="secondary" hidden>Prossima</button>
        </div>

        <div id="correct-answer-panel" class="cdt-card__answer" hidden>
            <h2>Risposta corretta</h2>
            <p id="correct-answer"></p>
        </div>
    </section>
</main>

<script src="{{ '/assets/scripts/cdt-ripasso.js' | relative_url }}"></script>
