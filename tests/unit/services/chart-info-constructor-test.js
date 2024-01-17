import { module, test } from 'qunit';
import { setupTest } from 'incident-insights-charts/tests/helpers';

module('Unit | Service | chart-info-constructor', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:chart-info-constructor');
    assert.ok(service);
  });
});
