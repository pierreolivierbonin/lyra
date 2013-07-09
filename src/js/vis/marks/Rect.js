vde.Vis.marks.Rect = (function() {
  var rect = function(name, group) {
    vde.Vis.Mark.call(this, name);

    this.type = 'rect';
    this.group = group;

    this.properties = {
      x: {value: 0},
      width: {value: 50},
      y: {value: 0},
      height: {value: 150},
      fill: {value: '#4682b4'},
      fillOpacity: {value: 1},
      stroke: {value: '#000000'},
      strokeWidth: {value: 0}
    };

    return this.init();
  };

  rect.prototype = new vde.Vis.Mark();
  var prototype  = rect.prototype;

  prototype.bindProperty = function(prop, opts) {
    this.properties[prop] || (this.properties[prop] = {});

    if(opts.scaleName)
      this.properties[prop].scale = this.group.scale({ name: opts.scaleName });

    if(opts.field) {
      var scale, field = new vde.Vis.Field(opts.field);

      switch(prop) {
        case 'x':
        case 'x2':
        case 'width':
          scale = this.group.scale({
            type: 'ordinal',
            data: this.from.data,
            field: field
          }, {range: new vde.Vis.Field('width')});
        break;

        case 'y':
        case 'y2':
        case 'height':
          scale = this.group.scale({
            type: 'linear',
            data: this.from.data,
            field: field
          }, {range: new vde.Vis.Field('height')});
        break;
      }

      this.properties[prop].scale = scale;
      this.properties[prop].field = field;
    }

    delete this.properties[prop].value;
  };

  return rect;
})();