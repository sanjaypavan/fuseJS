fc.styles = function () {
  var self = this;
  fc.node.call(self, 'styles');

  self.defs = new fc.styleDefinitions();
  self.apps = new fc.styleApplications();

  self.addNode(self.defs);
  self.addNode(self.apps);
};

fc.styles.prototype = fc.utils.extend(fc.node);

fc.styles.prototype.getDefinitions = function() {
  return this.defs;
};

fc.styles.prototype.getApplications = function() {
  return this.apps;
};