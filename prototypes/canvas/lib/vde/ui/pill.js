vde.ui.pill = function(src, field, controls) {
    this.src = src;
    this.field  = field;
    this.controls = controls;

    this.id = src + '_' + field + '_' + Date.now();
    this.el = null;

    this.panel = null;
    this.scale = null;

    return this;
};

vde.ui.pill.prototype.build = function(container) {
    this.el = container.append('div')
        .attr('id', this.id)
        .classed('pill', true)
        .classed('show-controls', this.controls)
        .classed('datasrc-' + this.src, true);

    this.el.append('span')
        .classed('delete', true)
        .html('x');

    this.el.append('span')
        .classed('name', true)
        .html(this.field);

    this.el.append('span')
        .classed('expand', true)
        .html('&#x25BC;');

    return this;
};

vde.ui.pill.prototype.init = function(panel, scaleType) {
    this.panel = panel;
    this.panel.pills[this.id] = this;
    this.scale = new vde.primitives.scale(this.panel, this.id)
        .prop('domain', this.domain());

    return this;
};

vde.ui.pill.prototype.domain = function() {
    return {'data': this.src, 'field': ['data', this.field]};
};