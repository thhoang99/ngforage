/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import 'localforage';
import { NgForageConfig } from '../config/ng-forage-config.service';
import { localForage as lf } from '../imports/localforage';
import { setToStringTag } from '../misc/setToStringTag.function';
import * as i0 from "@angular/core";
import * as i1 from "../config/ng-forage-config.service";
/**
 * \@internal
 * @record
 */
function InstanceMap() { }
/**
 * \@internal
 * @type {?}
 */
var stores = {};
/**
 * \@internal
 * @param {?=} driver
 * @return {?}
 */
function getDriverString(driver) {
    if (!driver) {
        return '';
    }
    else if (Array.isArray(driver)) {
        return driver.slice().sort().join(',');
    }
    else {
        return (/** @type {?} */ (driver));
    }
}
/**
 * \@internal
 * @param {?} cfg
 * @return {?}
 */
function getHash(cfg) {
    return [
        getDriverString(cfg.driver),
        cfg.name,
        cfg.size,
        cfg.storeName,
        cfg.version,
        cfg.description,
        cfg.cacheTime
    ].join('|');
}
/**
 * \@internal
 * @type {?}
 */
var conf$ = Symbol('Config');
/**
 * Creates localForage instances
 */
var InstanceFactory = /** @class */ (function () {
    /** @internal */
    function InstanceFactory(conf) {
        this[conf$] = conf;
    }
    /**
     * @param {?} cfg
     * @return {?}
     */
    InstanceFactory.prototype.getInstance = /**
     * @param {?} cfg
     * @return {?}
     */
    function (cfg) {
        cfg = Object.assign({}, this[conf$].config, cfg || {});
        /** @type {?} */
        var hash = getHash(cfg);
        if (!stores[hash]) {
            stores[hash] = lf.createInstance(cfg);
        }
        return stores[hash];
    };
    InstanceFactory.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    InstanceFactory.ctorParameters = function () { return [
        { type: NgForageConfig }
    ]; };
    /** @nocollapse */ InstanceFactory.ngInjectableDef = i0.defineInjectable({ factory: function InstanceFactory_Factory() { return new InstanceFactory(i0.inject(i1.NgForageConfig)); }, token: InstanceFactory, providedIn: "root" });
    return InstanceFactory;
}());
export { InstanceFactory };
setToStringTag(InstanceFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UtZmFjdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdmb3JhZ2UvIiwic291cmNlcyI6WyJsaWIvaW5zdGFuY2UtZmFjdG9yeS9pbnN0YW5jZS1mYWN0b3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBRWxFLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7O0FBRy9ELDBCQUVDOzs7OztJQUdLLE1BQU0sR0FBZ0IsRUFBRTs7Ozs7O0FBRzlCLFNBQVMsZUFBZSxDQUFDLE1BQWtDO0lBQ3pELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNYO1NBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4QztTQUFNO1FBQ0wsT0FBTyxtQkFBUSxNQUFNLEVBQUEsQ0FBQztLQUN2QjtBQUNILENBQUM7Ozs7OztBQUdELFNBQVMsT0FBTyxDQUFDLEdBQW9CO0lBQ25DLE9BQU87UUFDTCxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMzQixHQUFHLENBQUMsSUFBSTtRQUNSLEdBQUcsQ0FBQyxJQUFJO1FBQ1IsR0FBRyxDQUFDLFNBQVM7UUFDYixHQUFHLENBQUMsT0FBTztRQUNYLEdBQUcsQ0FBQyxXQUFXO1FBQ2YsR0FBRyxDQUFDLFNBQVM7S0FDZCxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLENBQUM7Ozs7O0lBR0ssS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7Ozs7QUFLOUI7SUFHRSxnQkFBZ0I7SUFDaEIseUJBQW1CLElBQW9CO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTSxxQ0FBVzs7OztJQUFsQixVQUFtQixHQUFvQjtRQUNyQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7O1lBQ2pELElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDOztnQkFqQkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkE1Q3hCLGNBQWM7OzswQkFGdEI7Q0FnRUMsQUFsQkQsSUFrQkM7U0FqQlksZUFBZTtBQW1CNUIsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnbG9jYWxmb3JhZ2UnO1xuaW1wb3J0IHtOZ0ZvcmFnZUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnL25nLWZvcmFnZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi4vY29uZmlnL25nLWZvcmFnZS1vcHRpb25zJztcbmltcG9ydCB7bG9jYWxGb3JhZ2UgYXMgbGZ9IGZyb20gJy4uL2ltcG9ydHMvbG9jYWxmb3JhZ2UnO1xuaW1wb3J0IHtEcml2ZXJUeXBlfSBmcm9tICcuLi9taXNjL2RyaXZlci10eXBlLnR5cGUnO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmludGVyZmFjZSBJbnN0YW5jZU1hcCB7XG4gIFtoYXNoOiBzdHJpbmddOiBMb2NhbEZvcmFnZTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuY29uc3Qgc3RvcmVzOiBJbnN0YW5jZU1hcCA9IHt9O1xuXG4vKiogQGludGVybmFsICovXG5mdW5jdGlvbiBnZXREcml2ZXJTdHJpbmcoZHJpdmVyPzogRHJpdmVyVHlwZSB8IERyaXZlclR5cGVbXSk6IHN0cmluZyB7XG4gIGlmICghZHJpdmVyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZHJpdmVyKSkge1xuICAgIHJldHVybiBkcml2ZXIuc2xpY2UoKS5zb3J0KCkuam9pbignLCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8c3RyaW5nPmRyaXZlcjtcbiAgfVxufVxuXG4vKiogQGludGVybmFsICovXG5mdW5jdGlvbiBnZXRIYXNoKGNmZzogTmdGb3JhZ2VPcHRpb25zKTogc3RyaW5nIHtcbiAgcmV0dXJuIFtcbiAgICBnZXREcml2ZXJTdHJpbmcoY2ZnLmRyaXZlciksXG4gICAgY2ZnLm5hbWUsXG4gICAgY2ZnLnNpemUsXG4gICAgY2ZnLnN0b3JlTmFtZSxcbiAgICBjZmcudmVyc2lvbixcbiAgICBjZmcuZGVzY3JpcHRpb24sXG4gICAgY2ZnLmNhY2hlVGltZVxuICBdLmpvaW4oJ3wnKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuY29uc3QgY29uZiQgPSBTeW1ib2woJ0NvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgbG9jYWxGb3JhZ2UgaW5zdGFuY2VzXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIEluc3RhbmNlRmFjdG9yeSB7XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZjogTmdGb3JhZ2VDb25maWcpIHtcbiAgICB0aGlzW2NvbmYkXSA9IGNvbmY7XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5zdGFuY2UoY2ZnOiBOZ0ZvcmFnZU9wdGlvbnMpOiBMb2NhbEZvcmFnZSB7XG4gICAgY2ZnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpc1tjb25mJF0uY29uZmlnLCBjZmcgfHwge30pO1xuICAgIGNvbnN0IGhhc2ggPSBnZXRIYXNoKGNmZyk7XG5cbiAgICBpZiAoIXN0b3Jlc1toYXNoXSkge1xuICAgICAgc3RvcmVzW2hhc2hdID0gbGYuY3JlYXRlSW5zdGFuY2UoY2ZnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmVzW2hhc2hdO1xuICB9XG59XG5cbnNldFRvU3RyaW5nVGFnKEluc3RhbmNlRmFjdG9yeSk7XG4iXX0=