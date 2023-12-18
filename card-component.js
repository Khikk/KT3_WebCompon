class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <link rel="stylesheet" href="card-component.css">
            <div class="card">
                <div id="headerSlot"></div>
                <div class="content">
                    <div id="contentSlot"></div>
                </div>
            </div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const headerSlot = this.shadowRoot.getElementById('headerSlot');
        const contentSlot = this.shadowRoot.getElementById('contentSlot');

        const headerContent = this.querySelector('template[slot="header"]').content;
        const contentContent = this.querySelector('template[slot="content"]').content;

        headerSlot.appendChild(headerContent.cloneNode(true));
        contentSlot.appendChild(contentContent.cloneNode(true));
    }
}

customElements.define('card-component', CardComponent);
