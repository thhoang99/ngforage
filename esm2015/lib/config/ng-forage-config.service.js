/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import 'localforage';
import { localForage as lf } from '../imports/localforage';
import { Driver } from '../misc/driver.enum';
import { DEFAULT_CONFIG } from '../misc/injection-tokens';
import { setToStringTag } from '../misc/setToStringTag.function';
import * as i0 from "@angular/core";
import * as i1 from "../misc/injection-tokens";
/**
 * \@internal
 * @type {?}
 */
const $defaultConfig = Symbol('Default Config');
/**
 * Global/default configuration
 */
export class NgForageConfig {
    /**
     * @param {?} conf
     */
    constructor(conf) {
        this[$defaultConfig] = {
            cacheTime: 300000,
            description: '',
            driver: [Driver.INDEXED_DB, Driver.WEB_SQL, Driver.LOCAL_STORAGE],
            name: 'ngForage',
            size: 4980736,
            storeName: 'ng_forage',
            version: 1
        };
        if (conf) {
            this.configure(conf);
        }
    }
    /**
     * Cache time in milliseconds
     * \@default 300000
     * @return {?}
     */
    get cacheTime() {
        return (/** @type {?} */ (this[$defaultConfig].cacheTime));
    }
    /**
     * @param {?} t
     * @return {?}
     */
    set cacheTime(t) {
        this[$defaultConfig].cacheTime = t;
    }
    /**
     * Get the compiled configuration
     * @return {?}
     */
    get config() {
        return {
            cacheTime: this.cacheTime,
            description: this.description,
            driver: this.driver,
            name: this.name,
            size: this.size,
            storeName: this.storeName,
            version: this.version
        };
    }
    /**
     * A description of the database, essentially for developer usage.
     * \@default
     * @return {?}
     */
    get description() {
        return (/** @type {?} */ (this[$defaultConfig].description));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set description(v) {
        this[$defaultConfig].description = v;
    }
    /**
     * The preferred driver(s) to use.
     * @return {?}
     */
    get driver() {
        if (typeof this[$defaultConfig].driver === 'string') {
            return (/** @type {?} */ (this[$defaultConfig].driver));
        }
        return ((/** @type {?} */ (this[$defaultConfig].driver))).slice();
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set driver(v) {
        this[$defaultConfig].driver = v;
    }
    /**
     * The name of the database. May appear during storage limit prompts. Useful to use the name of your app here.
     * In localStorage, this is used as a key prefix for all keys stored in localStorage.
     * \@default ngForage
     * @return {?}
     */
    get name() {
        return (/** @type {?} */ (this[$defaultConfig].name));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set name(v) {
        this[$defaultConfig].name = v;
    }
    /**
     * The size of the database in bytes. Used only in WebSQL for now.
     * \@default 4980736
     * @return {?}
     */
    get size() {
        return (/** @type {?} */ (this[$defaultConfig].size));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set size(v) {
        this[$defaultConfig].size = v;
    }
    /**
     * The name of the datastore.
     * In IndexedDB this is the dataStore,
     * in WebSQL this is the name of the key/value table in the database.
     * Must be alphanumeric, with underscores.
     * Any non-alphanumeric characters will be converted to underscores.
     * \@default ng_forage
     * @return {?}
     */
    get storeName() {
        return (/** @type {?} */ (this[$defaultConfig].storeName));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set storeName(v) {
        this[$defaultConfig].storeName = v;
    }
    /**
     * The version of your database. May be used for upgrades in the future; currently unused.
     * \@default 1.0
     * @return {?}
     */
    get version() {
        return (/** @type {?} */ (this[$defaultConfig].version));
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set version(v) {
        this[$defaultConfig].version = v;
    }
    /**
     * Bulk-set configuration options
     * @template THIS
     * @this {THIS}
     * @param {?} opts The configuration
     * @return {THIS}
     */
    configure(opts) {
        opts = opts || {};
        if (opts.driver && ((/** @type {?} */ (opts.driver))).slice) {
            opts.driver = ((/** @type {?} */ (opts.driver))).slice();
        }
        Object.assign((/** @type {?} */ (this))[$defaultConfig], opts);
        return (/** @type {?} */ (this));
    }
    /**
     * Define a driver
     *
     * You’ll want to make sure you accept a callback argument and that you pass the same arguments to callbacks as the
     * default drivers do. You’ll also want to resolve or reject promises.
     * Check any of the {\@link https://github.com/mozilla/localForage/tree/master/src/drivers default drivers}
     * for an idea of how to implement your own, custom driver.
     * @param {?} spec Driver spec
     * @return {?}
     */
    defineDriver(spec) {
        return lf.defineDriver(spec);
    }
    /**
     * \@internal
     * @return {?}
     */
    toJSON() {
        return this.config;
    }
    /**
     * @return {?}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
NgForageConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NgForageConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULT_CONFIG,] }] }
];
/** @nocollapse */ NgForageConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgForageConfig_Factory() { return new NgForageConfig(i0.inject(i1.DEFAULT_CONFIG, 8)); }, token: NgForageConfig, providedIn: "root" });
if (false) {
    /* Skipping unnamed member:
    private readonly [$defaultConfig]: NgForageOptions;*/
}
setToStringTag(NgForageConfig);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZm9yYWdlLWNvbmZpZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdmb3JhZ2UvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL25nLWZvcmFnZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7TUFNekQsY0FBYyxHQUFrQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7Ozs7QUFNOUQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFLekIsWUFBdUQsSUFBcUI7UUFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHO1lBQ3JCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDakUsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLE9BQU87WUFDYixTQUFTLEVBQUUsV0FBVztZQUN0QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7Ozs7SUFNRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxtQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FB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RUFBQSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbkQ7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksRUFBQSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFDLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7Ozs7OztJQVdNLFlBQVksQ0FBQyxJQUF1QjtRQUN6QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFHTSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQXBLRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OzRDQU1WLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7Ozs7OztBQWlLdkQsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAnbG9jYWxmb3JhZ2UnO1xuaW1wb3J0IHtsb2NhbEZvcmFnZSBhcyBsZn0gZnJvbSAnLi4vaW1wb3J0cy9sb2NhbGZvcmFnZSc7XG5pbXBvcnQge0RyaXZlclR5cGV9IGZyb20gJy4uL21pc2MvZHJpdmVyLXR5cGUudHlwZSc7XG5pbXBvcnQge0RyaXZlcn0gZnJvbSAnLi4vbWlzYy9kcml2ZXIuZW51bSc7XG5pbXBvcnQge0RFRkFVTFRfQ09ORklHfSBmcm9tICcuLi9taXNjL2luamVjdGlvbi10b2tlbnMnO1xuaW1wb3J0IHtzZXRUb1N0cmluZ1RhZ30gZnJvbSAnLi4vbWlzYy9zZXRUb1N0cmluZ1RhZy5mdW5jdGlvbic7XG5pbXBvcnQge0Jhc2VDb25maWd1cmFibGV9IGZyb20gJy4vYmFzZS1jb25maWd1cmFibGUnO1xuaW1wb3J0IHtDYWNoZUNvbmZpZ3VyYWJsZX0gZnJvbSAnLi9jYWNoZS1jb25maWd1cmFibGUnO1xuaW1wb3J0IHtOZ0ZvcmFnZU9wdGlvbnN9IGZyb20gJy4vbmctZm9yYWdlLW9wdGlvbnMnO1xuXG4vKiogQGludGVybmFsICovXG5jb25zdCAkZGVmYXVsdENvbmZpZzogdW5pcXVlIHN5bWJvbCA9IFN5bWJvbCgnRGVmYXVsdCBDb25maWcnKTtcblxuLyoqXG4gKiBHbG9iYWwvZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE5nRm9yYWdlQ29uZmlnIGltcGxlbWVudHMgQmFzZUNvbmZpZ3VyYWJsZSwgQ2FjaGVDb25maWd1cmFibGUge1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBbJGRlZmF1bHRDb25maWddOiBOZ0ZvcmFnZU9wdGlvbnM7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoREVGQVVMVF9DT05GSUcpIGNvbmY6IE5nRm9yYWdlT3B0aW9ucykge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddID0ge1xuICAgICAgY2FjaGVUaW1lOiAzMDAwMDAsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkcml2ZXI6IFtEcml2ZXIuSU5ERVhFRF9EQiwgRHJpdmVyLldFQl9TUUwsIERyaXZlci5MT0NBTF9TVE9SQUdFXSxcbiAgICAgIG5hbWU6ICduZ0ZvcmFnZScsXG4gICAgICBzaXplOiA0OTgwNzM2LFxuICAgICAgc3RvcmVOYW1lOiAnbmdfZm9yYWdlJyxcbiAgICAgIHZlcnNpb246IDFcbiAgICB9O1xuICAgIGlmIChjb25mKSB7XG4gICAgICB0aGlzLmNvbmZpZ3VyZShjb25mKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FjaGUgdGltZSBpbiBtaWxsaXNlY29uZHNcbiAgICogQGRlZmF1bHQgMzAwMDAwXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNhY2hlVGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiA8bnVtYmVyPnRoaXNbJGRlZmF1bHRDb25maWddLmNhY2hlVGltZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgY2FjaGVUaW1lKHQ6IG51bWJlcikge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddLmNhY2hlVGltZSA9IHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjb21waWxlZCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNvbmZpZygpOiBOZ0ZvcmFnZU9wdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBjYWNoZVRpbWU6IHRoaXMuY2FjaGVUaW1lLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBkcml2ZXI6IHRoaXMuZHJpdmVyLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgc3RvcmVOYW1lOiB0aGlzLnN0b3JlTmFtZSxcbiAgICAgIHZlcnNpb246IHRoaXMudmVyc2lvblxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQSBkZXNjcmlwdGlvbiBvZiB0aGUgZGF0YWJhc2UsIGVzc2VudGlhbGx5IGZvciBkZXZlbG9wZXIgdXNhZ2UuXG4gICAqIEBkZWZhdWx0XG4gICAqL1xuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIDxzdHJpbmc+dGhpc1skZGVmYXVsdENvbmZpZ10uZGVzY3JpcHRpb247XG4gIH1cblxuICBwdWJsaWMgc2V0IGRlc2NyaXB0aW9uKHY6IHN0cmluZykge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddLmRlc2NyaXB0aW9uID0gdjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJlZmVycmVkIGRyaXZlcihzKSB0byB1c2UuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRyaXZlcigpOiBEcml2ZXJUeXBlIHwgRHJpdmVyVHlwZVtdIHtcbiAgICBpZiAodHlwZW9mIHRoaXNbJGRlZmF1bHRDb25maWddLmRyaXZlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiA8c3RyaW5nPnRoaXNbJGRlZmF1bHRDb25maWddLmRyaXZlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxzdHJpbmdbXT50aGlzWyRkZWZhdWx0Q29uZmlnXS5kcml2ZXIpLnNsaWNlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRyaXZlcih2OiBEcml2ZXJUeXBlIHwgRHJpdmVyVHlwZVtdKSB7XG4gICAgdGhpc1skZGVmYXVsdENvbmZpZ10uZHJpdmVyID0gdjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UuIE1heSBhcHBlYXIgZHVyaW5nIHN0b3JhZ2UgbGltaXQgcHJvbXB0cy4gVXNlZnVsIHRvIHVzZSB0aGUgbmFtZSBvZiB5b3VyIGFwcCBoZXJlLlxuICAgKiBJbiBsb2NhbFN0b3JhZ2UsIHRoaXMgaXMgdXNlZCBhcyBhIGtleSBwcmVmaXggZm9yIGFsbCBrZXlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2UuXG4gICAqIEBkZWZhdWx0IG5nRm9yYWdlXG4gICAqL1xuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gPHN0cmluZz50aGlzWyRkZWZhdWx0Q29uZmlnXS5uYW1lO1xuICB9XG5cbiAgcHVibGljIHNldCBuYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddLm5hbWUgPSB2O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBkYXRhYmFzZSBpbiBieXRlcy4gVXNlZCBvbmx5IGluIFdlYlNRTCBmb3Igbm93LlxuICAgKiBAZGVmYXVsdCA0OTgwNzM2XG4gICAqL1xuICBwdWJsaWMgZ2V0IHNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gPG51bWJlcj50aGlzWyRkZWZhdWx0Q29uZmlnXS5zaXplO1xuICB9XG5cbiAgcHVibGljIHNldCBzaXplKHY6IG51bWJlcikge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddLnNpemUgPSB2O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBkYXRhc3RvcmUuXG4gICAqIEluIEluZGV4ZWREQiB0aGlzIGlzIHRoZSBkYXRhU3RvcmUsXG4gICAqIGluIFdlYlNRTCB0aGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBrZXkvdmFsdWUgdGFibGUgaW4gdGhlIGRhdGFiYXNlLlxuICAgKiBNdXN0IGJlIGFscGhhbnVtZXJpYywgd2l0aCB1bmRlcnNjb3Jlcy5cbiAgICogQW55IG5vbi1hbHBoYW51bWVyaWMgY2hhcmFjdGVycyB3aWxsIGJlIGNvbnZlcnRlZCB0byB1bmRlcnNjb3Jlcy5cbiAgICogQGRlZmF1bHQgbmdfZm9yYWdlXG4gICAqL1xuICBwdWJsaWMgZ2V0IHN0b3JlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiA8c3RyaW5nPnRoaXNbJGRlZmF1bHRDb25maWddLnN0b3JlTmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc3RvcmVOYW1lKHY6IHN0cmluZykge1xuICAgIHRoaXNbJGRlZmF1bHRDb25maWddLnN0b3JlTmFtZSA9IHY7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHZlcnNpb24gb2YgeW91ciBkYXRhYmFzZS4gTWF5IGJlIHVzZWQgZm9yIHVwZ3JhZGVzIGluIHRoZSBmdXR1cmU7IGN1cnJlbnRseSB1bnVzZWQuXG4gICAqIEBkZWZhdWx0IDEuMFxuICAgKi9cbiAgcHVibGljIGdldCB2ZXJzaW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDxudW1iZXI+dGhpc1skZGVmYXVsdENvbmZpZ10udmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgdmVyc2lvbih2OiBudW1iZXIpIHtcbiAgICB0aGlzWyRkZWZhdWx0Q29uZmlnXS52ZXJzaW9uID0gdjtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWxrLXNldCBjb25maWd1cmF0aW9uIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdHMgVGhlIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHB1YmxpYyBjb25maWd1cmUob3B0czogTmdGb3JhZ2VPcHRpb25zKTogdGhpcyB7XG4gICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICBpZiAob3B0cy5kcml2ZXIgJiYgKDxhbnlbXT5vcHRzLmRyaXZlcikuc2xpY2UpIHtcbiAgICAgIG9wdHMuZHJpdmVyID0gKDxEcml2ZXJUeXBlW10+b3B0cy5kcml2ZXIpLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzWyRkZWZhdWx0Q29uZmlnXSwgb3B0cyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmUgYSBkcml2ZXJcbiAgICpcbiAgICogWW914oCZbGwgd2FudCB0byBtYWtlIHN1cmUgeW91IGFjY2VwdCBhIGNhbGxiYWNrIGFyZ3VtZW50IGFuZCB0aGF0IHlvdSBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBjYWxsYmFja3MgYXMgdGhlXG4gICAqIGRlZmF1bHQgZHJpdmVycyBkby4gWW914oCZbGwgYWxzbyB3YW50IHRvIHJlc29sdmUgb3IgcmVqZWN0IHByb21pc2VzLlxuICAgKiBDaGVjayBhbnkgb2YgdGhlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS90cmVlL21hc3Rlci9zcmMvZHJpdmVycyBkZWZhdWx0IGRyaXZlcnN9XG4gICAqIGZvciBhbiBpZGVhIG9mIGhvdyB0byBpbXBsZW1lbnQgeW91ciBvd24sIGN1c3RvbSBkcml2ZXIuXG4gICAqIEBwYXJhbSBzcGVjIERyaXZlciBzcGVjXG4gICAqL1xuICBwdWJsaWMgZGVmaW5lRHJpdmVyKHNwZWM6IExvY2FsRm9yYWdlRHJpdmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGxmLmRlZmluZURyaXZlcihzcGVjKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIHRvSlNPTigpOiBOZ0ZvcmFnZU9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcbiAgfVxufVxuXG5zZXRUb1N0cmluZ1RhZyhOZ0ZvcmFnZUNvbmZpZyk7XG4iXX0=