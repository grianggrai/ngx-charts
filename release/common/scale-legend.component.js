"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ScaleLegend = (function () {
    function ScaleLegend(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ScaleLegend.prototype.ngOnChanges = function () {
        var gradientValues = this.gradientString(this.colors.range(), this.colors.domain());
        this.gradient = this.sanitizer.bypassSecurityTrustStyle("linear-gradient(to bottom, " + gradientValues + ")");
    };
    /**
     * Generates the string used in the gradient stylesheet properties
     * @param  {array} colors array of colors
     * @param  {array} splits array of splits on a scale of (0, 1)
     * @return {string}
     */
    ScaleLegend.prototype.gradientString = function (colors, splits) {
        // add the 100%
        splits.push(1);
        var pairs = [];
        colors.forEach(function (c, i) {
            pairs.push(c + " " + Math.round(splits[i] * 100) + "%");
        });
        return pairs.join(', ');
    };
    ScaleLegend.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'scale-legend',
                    template: "\n    <div\n      class=\"scale-legend\"\n      [style.width]=\"width + 'px'\">\n      <div [style.height]=\"(height - 70) + 'px'\">\n\n        <div class=\"scale-legend-label\">\n          <span>{{ valueRange[0].toLocaleString() }}</span>\n        </div>\n\n        <div class=\"scale-legend-wrap\"\n          [style.background]=\"gradient\">\n        </div>\n\n        <div class=\"scale-legend-label\">\n          <span>{{ valueRange[1].toLocaleString() }}</span>\n        </div>\n      </div>\n    </div>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ScaleLegend.ctorParameters = [
        { type: platform_browser_1.DomSanitizer, },
    ];
    ScaleLegend.propDecorators = {
        'valueRange': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return ScaleLegend;
}());
exports.ScaleLegend = ScaleLegend;
//# sourceMappingURL=scale-legend.component.js.map