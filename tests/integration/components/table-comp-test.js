import { module, test } from 'qunit';
import { setupRenderingTest } from 'incident-insights-charts/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | table-comp', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TableComp />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TableComp>
        template block text
      </TableComp>
    `);

    assert.dom().hasText('template block text');
  });
});
