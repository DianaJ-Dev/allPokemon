import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { bbvaSearch } from '@bbva-web-components/bbva-foundations-icons';
import styles from './all-pokemon.css.js';

import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import '@bbva-web-components/bbva-foundations-spinner/bbva-foundations-spinner.js';
import '@bbva-web-components/bbva-core-heading/bbva-core-heading.js';
import '@pokemon/all-pokemon--dm/all-pokemon--dm.js';


const icon = bbvaSearch();

export class AllPokemon extends LitElement {
  static get properties() {
    return {
      pokemons: { type: Array },
      mainIcon: {type: String},
      loading: { type: Boolean },
      selectedPokemon: { type: Object }
    };
  }

  constructor() {
    super();
    this.pokemons = [];
    this.mainIcon = icon;
    this.loading = false;
    this.selectedPokemon = null;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async firstUpdated() {
    const pokemonData = this.shadowRoot.querySelector('all-pokemon--dm');
    if (pokemonData) {
      this.pokemons = await pokemonData.fetchPokemons();
    }
  }
  
  async showDetails(pokemon) {
    this.loading = true; 
    this.selectedPokemon = pokemon; 

    await new Promise(resolve => setTimeout(resolve, 2000));

    this.loading = false; 
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('all-pokemon-shared-styles'),
    ];
  }

  render() {
    return html`
      <div class="container">
        <h1>Pokémon</h1>
        <bbva-core-icon icon="${this.mainIcon}"></bbva-core-icon>
        <div class="item">
          <div class="grid">
            ${this.pokemons.map(pokemon => html`
              <li class="card">
                <bbva-core-heading>${pokemon.name}</bbva-core-heading>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
                <bbva-button-default @click="${() => this.showDetails(pokemon)}">Detalle</bbva-button-default>
                ${this.loading && this.selectedPokemon === pokemon ? html`<bbva-foundations-spinner></bbva-foundations-spinner>` : ''}
              </li>
            `)}
          </div>
        </div>
      </div>
      <all-pokemon--dm><all-pokemon--dm/>
    `;
  }
}