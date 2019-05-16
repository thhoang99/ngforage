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
const conf$ = Symbol('NgForageConfig');
/**
 * \@internal
 * @type {?}
 */
const if$ = Symbol('InstanceFactory');
export class DedicatedInstanceFactory {
    /**
     * @param {?} conf
     * @param {?} instFact
     */
    constructor(conf, instFact) {
        this[conf$] = conf;
        this[if$] = instFact;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    createCache(config) {
        /** @type {?} */
        const inst = new NgForageCacheDedicated(this[conf$], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    createNgForage(config) {
        /** @type {?} */
        const inst = new NgForageDedicated(this[conf$], this[if$]);
        if (config) {
            inst.configure(config);
        }
        return inst;
    }
}
DedicatedInstanceFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DedicatedInstanceFactory.ctorParameters = () => [
    { type: NgForageConfig },
    { type: InstanceFactory }
];
/** @nocollapse */ DedicatedInstanceFactory.ngInjectableDef = i0.defineInjectable({ factory: function DedicatedInstanceFactory_Factory() { return new DedicatedInstanceFactory(i0.inject(i1.NgForageConfig), i0.inject(i2.InstanceFactory)); }, token: DedicatedInstanceFactory, providedIn: "root" });
if (false) {
    /* Skipping unnamed member:
    private readonly [conf$]: NgForageConfig;*/
    /* Skipping unnamed member:
    private readonly [if$]: InstanceFactory;*/
}
setToStringTag(DedicatedInstanceFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkaWNhdGVkLWluc3RhbmNlLWZhY3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZm9yYWdlLyIsInNvdXJjZXMiOlsibGliL2RlZGljYXRlZC9kZWRpY2F0ZWQtaW5zdGFuY2UtZmFjdG9yeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUVsRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFFN0UsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQy9ELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7OztNQUd4RCxLQUFLLEdBQWtCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQzs7Ozs7TUFFL0MsR0FBRyxHQUFrQixNQUFNLENBQUMsaUJBQWlCLENBQUM7QUFHcEQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFRbkMsWUFBbUIsSUFBb0IsRUFBRSxRQUF5QjtRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsTUFBd0I7O2NBQ25DLElBQUksR0FBRyxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0QsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLGNBQWMsQ0FBQyxNQUF3Qjs7Y0FDdEMsSUFBSSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTlCRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O1lBYnhCLGNBQWM7WUFFZCxlQUFlOzs7Ozs7Ozs7QUE0Q3ZCLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdGb3JhZ2VDYWNoZX0gZnJvbSAnLi4vY2FjaGUvbmctZm9yYWdlLWNhY2hlLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ0ZvcmFnZUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnL25nLWZvcmFnZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQge05nRm9yYWdlT3B0aW9uc30gZnJvbSAnLi4vY29uZmlnL25nLWZvcmFnZS1vcHRpb25zJztcbmltcG9ydCB7SW5zdGFuY2VGYWN0b3J5fSBmcm9tICcuLi9pbnN0YW5jZS1mYWN0b3J5L2luc3RhbmNlLWZhY3Rvcnkuc2VydmljZSc7XG5pbXBvcnQge05nRm9yYWdlfSBmcm9tICcuLi9tYWluL25nLWZvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7c2V0VG9TdHJpbmdUYWd9IGZyb20gJy4uL21pc2Mvc2V0VG9TdHJpbmdUYWcuZnVuY3Rpb24nO1xuaW1wb3J0IHtOZ0ZvcmFnZUNhY2hlRGVkaWNhdGVkfSBmcm9tICcuL25nLWZvcmFnZS1jYWNoZS1kZWRpY2F0ZWQuY2xhc3MnO1xuaW1wb3J0IHtOZ0ZvcmFnZURlZGljYXRlZH0gZnJvbSAnLi9uZy1mb3JhZ2UtZGVkaWNhdGVkLmNsYXNzJztcblxuLyoqIEBpbnRlcm5hbCAqL1xuY29uc3QgY29uZiQ6IHVuaXF1ZSBzeW1ib2wgPSBTeW1ib2woJ05nRm9yYWdlQ29uZmlnJyk7XG4vKiogQGludGVybmFsICovXG5jb25zdCBpZiQ6IHVuaXF1ZSBzeW1ib2wgPSBTeW1ib2woJ0luc3RhbmNlRmFjdG9yeScpO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBEZWRpY2F0ZWRJbnN0YW5jZUZhY3Rvcnkge1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBbY29uZiRdOiBOZ0ZvcmFnZUNvbmZpZztcblxuICAvKiogQGludGVybmFsICovXG4gIHByaXZhdGUgcmVhZG9ubHkgW2lmJF06IEluc3RhbmNlRmFjdG9yeTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZjogTmdGb3JhZ2VDb25maWcsIGluc3RGYWN0OiBJbnN0YW5jZUZhY3RvcnkpIHtcbiAgICB0aGlzW2NvbmYkXSA9IGNvbmY7XG4gICAgdGhpc1tpZiRdID0gaW5zdEZhY3Q7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ2FjaGUoY29uZmlnPzogTmdGb3JhZ2VPcHRpb25zKTogTmdGb3JhZ2VDYWNoZSB7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBOZ0ZvcmFnZUNhY2hlRGVkaWNhdGVkKHRoaXNbY29uZiRdLCB0aGlzW2lmJF0pO1xuICAgIGlmIChjb25maWcpIHtcbiAgICAgIGluc3QuY29uZmlndXJlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlTmdGb3JhZ2UoY29uZmlnPzogTmdGb3JhZ2VPcHRpb25zKTogTmdGb3JhZ2Uge1xuICAgIGNvbnN0IGluc3QgPSBuZXcgTmdGb3JhZ2VEZWRpY2F0ZWQodGhpc1tjb25mJF0sIHRoaXNbaWYkXSk7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgaW5zdC5jb25maWd1cmUoY29uZmlnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxufVxuXG5zZXRUb1N0cmluZ1RhZyhEZWRpY2F0ZWRJbnN0YW5jZUZhY3RvcnkpO1xuIl19