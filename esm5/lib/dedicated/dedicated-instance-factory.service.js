/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgForageConfig } from '../config/ng-forage-config.service';
import { InstanceFactory } from '../instance-factory/instance-factory.service';
import { setToStringTag } from '../misc/setToStringTag.function';
import { NgForageCacheDedicated } from './ng-forage-cache-dedicated.class';
import { NgForageDedicated } from './ng-forage-dedicated.class';
import * as i0 from "@angular/core";
import * as i1 from "../config/ng-forage-config.service";
import * as i2 from "../instance-factory/instance-factory.service";
/**
 * \@internal
 * @type {?}
 */
var conf$ = Symbol('NgForageConfig');
/**
 * \@internal
 * @type {?}
 */
var if$ = Symbol('InstanceFactory');
var DedicatedInstanceFactory = /** @class */ (function () {
    function DedicatedInstanceFactory(conf, instFact) {
        this[conf$] = conf;
        this[if$] = instFact;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DedicatedInstanceFactory.prototype.createCache = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageCacheDedicated(this[conf$], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    DedicatedInstanceFactory.prototype.createNgForage = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var inst = new NgForageDedicated(this[conf$], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    };
    DedicatedInstanceFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DedicatedInstanceFactory.ctorParameters = function () { return [
        { type: NgForageConfig },
        { type: InstanceFactory }
    ]; };
    /** @nocollapse */ DedicatedInstanceFactory.ngInjectableDef = i0.defineInjectable({ factory: function DedicatedInstanceFactory_Factory() { return new DedicatedInstanceFactory(i0.inject(i1.NgForageConfig), i0.inject(i2.InstanceFactory)); }, token: DedicatedInstanceFactory, providedIn: "root" });
    return DedicatedInstanceFactory;
}());
export { DedicatedInstanceFactory };
if (false) {
    /* Skipping unnamed member:
    private readonly [conf$]: NgForageConfig;*/
    /* Skipping unnamed member:
    private readonly [if$]: InstanceFactory;*/
}
setToStringTag(DedicatedInstanceFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkaWNhdGVkLWluc3RhbmNlLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlZGljYXRlZC9kZWRpY2F0ZWQtaW5zdGFuY2UtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztJQUd4RCxLQUFLLEdBQWtCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7SUFFL0MsR0FBRyxHQUFrQixNQUFNLENBQUMsaUJBQWlCLENBQUM7QUFFcEQ7SUFTRSxrQ0FBbUIsSUFBb0IsRUFBRSxRQUF5QjtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTSw4Q0FBVzs7OztJQUFsQixVQUFtQixNQUF3Qjs7WUFDbkMsSUFBSSxHQUFHLElBQUksc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0saURBQWM7Ozs7SUFBckIsVUFBc0IsTUFBd0I7O1lBQ3RDLElBQUksR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkE5QkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkFieEIsY0FBYztnQkFFZCxlQUFlOzs7bUNBSnZCO0NBOENDLEFBL0JELElBK0JDO1NBOUJZLHdCQUF3Qjs7Ozs7OztBQWdDckMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0ZvcmFnZUNhY2hlfSBmcm9tICcuLi9jYWNoZS9uZy1mb3JhZ2UtY2FjaGUuc2VydmljZSc7XG5pbXBvcnQge05nRm9yYWdlQ29uZmlnfSBmcm9tICcuLi9jb25maWcvbmctZm9yYWdlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JhZ2VPcHRpb25zfSBmcm9tICcuLi9jb25maWcvbmctZm9yYWdlLW9wdGlvbnMnO1xuaW1wb3J0IHtJbnN0YW5jZUZhY3Rvcnl9IGZyb20gJy4uL2luc3RhbmNlLWZhY3RvcnkvaW5zdGFuY2UtZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7TmdGb3JhZ2V9IGZyb20gJy4uL21haW4vbmctZm9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5pbXBvcnQge05nRm9yYWdlQ2FjaGVEZWRpY2F0ZWR9IGZyb20gJy4vbmctZm9yYWdlLWNhY2hlLWRlZGljYXRlZC5jbGFzcyc7XG5pbXBvcnQge05nRm9yYWdlRGVkaWNhdGVkfSBmcm9tICcuL25nLWZvcmFnZS1kZWRpY2F0ZWQuY2xhc3MnO1xuXG4vKiogQGludGVybmFsICovXG5jb25zdCBjb25mJDogdW5pcXVlIHN5bWJvbCA9IFN5bWJvbCgnTmdGb3JhZ2VDb25maWcnKTtcbi8qKiBAaW50ZXJuYWwgKi9cbmNvbnN0IGlmJDogdW5pcXVlIHN5bWJvbCA9IFN5bWJvbCgnSW5zdGFuY2VGYWN0b3J5Jyk7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIERlZGljYXRlZEluc3RhbmNlRmFjdG9yeSB7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwcml2YXRlIHJlYWRvbmx5IFtjb25mJF06IE5nRm9yYWdlQ29uZmlnO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBbaWYkXTogSW5zdGFuY2VGYWN0b3J5O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25mOiBOZ0ZvcmFnZUNvbmZpZywgaW5zdEZhY3Q6IEluc3RhbmNlRmFjdG9yeSkge1xuICAgIHRoaXNbY29uZiRdID0gY29uZjtcbiAgICB0aGlzW2lmJF0gPSBpbnN0RmFjdDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDYWNoZShjb25maWc/OiBOZ0ZvcmFnZU9wdGlvbnMpOiBOZ0ZvcmFnZUNhY2hlIHtcbiAgICBjb25zdCBpbnN0ID0gbmV3IE5nRm9yYWdlQ2FjaGVEZWRpY2F0ZWQodGhpc1tjb25mJF0sIHRoaXNbaWYkXSk7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgaW5zdC5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVOZ0ZvcmFnZShjb25maWc/OiBOZ0ZvcmFnZU9wdGlvbnMpOiBOZ0ZvcmFnZSB7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBOZ0ZvcmFnZURlZGljYXRlZCh0aGlzW2NvbmYkXSwgdGhpc1tpZiRdKTtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBpbnN0LmNvbmZpZ3VyZShjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuICB9XG59XG5cbnNldFRvU3RyaW5nVGFnKERlZGljYXRlZEluc3RhbmNlRmFjdG9yeSk7XG4iXX0=