import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
import '../all-pokemon.js';

suite('AllPokemon', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <all-pokemon></all-pokemon>
      `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });
});
