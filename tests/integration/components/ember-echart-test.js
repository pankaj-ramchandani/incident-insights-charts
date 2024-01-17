import { module, test } from 'qunit';
import { setupRenderingTest } from 'incident-insights-charts/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ember-echart', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmberEchart />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <EmberEchart>
        template block text
      </EmberEchart>
    `);

    assert.dom().hasText('template block text');
  });
});
