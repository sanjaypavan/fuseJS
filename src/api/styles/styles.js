fc.style.styles = function () {
  var self = this;
  fc.Node.call(self, 'styles');

  self.defs = new fc.style.styleDefinitions();
  self.apps = new fc.style.styleApplications();

  self.addNode(self.defs);
  self.addNode(self.apps);
};

fc.style.styles.prototype = fc.utils.extend(fc.Node);

fc.style.styles.prototype.getDefinitions = function() {
  return this.defs;
};

fc.style.styles.prototype.getApplications = function() {
  return this.apps;
};